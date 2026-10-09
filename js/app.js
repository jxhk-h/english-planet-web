/* =========================================================
   英语星球 English Planet —— 应用逻辑
   哈希路由 + 渲染 + 语音朗读 + 本地进度
   ========================================================= */
(function () {
  "use strict";

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ------------------ 数据 ------------------ */
  var LEVELS   = window.WORD_DATA.levels;
  var GRAMMAR  = window.GRAMMAR_DATA;
  var ARTICLES = window.ARTICLE_DATA;

  /* 7 个模块的超长词表（合计约 7.7MB）不随首屏加载，进入对应模块时动态注入 ——
     否则首页要等 7.7MB 的 JS 下载 + 解析完才能显示。
     FULL_INDEX 只提供「预期词数 + 文件路径 + 体积」，所以未加载时也能显示正确的总数。 */
  var FULL_INDEX = window.WORD_FULL_INDEX || {};

  function isBigLevel(id) { return !!FULL_INDEX[id]; }
  function isLoaded(id) {
    var idx = FULL_INDEX[id];
    return !idx || !!idx.loaded;
  }

  var ALL_WORDS = [];
  var TOTAL_WORDS = 0;

  function rebuildAllWords() {
    var out = [];
    LEVELS.forEach(function (lv) {
      lv.groups.forEach(function (g) {
        g.words.forEach(function (wd) {
          out.push({
            id: lv.id + "::" + wd.w, w: wd.w, p: wd.p, s: wd.s, c: wd.c, e: wd.e, t: wd.t,
            f: wd.f, ph: wd.ph, sy: wd.sy, an: wd.an, rt: wd.rt, tp: wd.tp,
            levelId: lv.id, levelName: lv.name, levelEmoji: lv.emoji, levelColor: lv.color,
            group: g.name
          });
        });
      });
    });
    ALL_WORDS = out;
  }

  /* 模块词数：已加载（或不需加载）时以真实数据为准，未加载时 = 已手写词 + 清单预期数。
     口径统一走这一个函数，避免「首页显示 84、进度页显示 2761」这种自相矛盾。 */
  function levelTotal(lv) {
    var have = 0;
    lv.groups.forEach(function (g) { have += g.words.length; });
    var idx = FULL_INDEX[lv.id];
    if (!idx || idx.loaded) return have;
    return have + (idx.n || 0);
  }
  function refreshTotals() {
    rebuildAllWords();
    TOTAL_WORDS = LEVELS.reduce(function (a, lv) { return a + levelTotal(lv); }, 0);
  }
  refreshTotals();

  /* ------------------ 全量词表懒加载 ------------------ */
  var levelLoading = {};   /* id -> true 表示 script 已注入、正在下载 */
  var levelPending = {};   /* id -> [回调] */
  var levelSubs = [];      /* 每次有模块加载完成时通知（搜索补载、默写区选阶段用） */
  var searchLoading = {};  /* 搜索触发的后台补载：id -> true */
  var searchSubReady = false;

  /* 由各 data-words-full-*.js 末尾统一调用 */
  window.__epLevelReady = function (id) {
    levelLoading[id] = false;
    refreshTotals();
    var q = levelPending[id] || [];
    delete levelPending[id];
    q.forEach(function (cb) { try { cb(id, "ok"); } catch (e) {} });
    levelSubs.slice().forEach(function (fn) { try { fn(id); } catch (e) {} });
  };

  function ensureLevel(id, cb) {
    if (isLoaded(id)) { if (cb) cb(id, "ok"); return; }
    if (cb) (levelPending[id] = levelPending[id] || []).push(cb);
    if (levelLoading[id]) return;
    var idx = FULL_INDEX[id];
    if (!idx) return;
    levelLoading[id] = true;
    var s = document.createElement("script");
    s.src = idx.file;
    s.async = true;
    s.onerror = function () {
      levelLoading[id] = false;
      var q = levelPending[id] || [];
      delete levelPending[id];
      q.forEach(function (f) { try { f(id, "error"); } catch (e) {} });
      toast("「" + (levelOf(id).name) + "」词表下载失败，请检查网络后刷新重试");
    };
    document.head.appendChild(s);
  }

  var CATS = {
    story: { name: "儿童故事", emoji: "🧸", color: "#FF8FA3", color2: "#FFE6EB" },
    tech:  { name: "科技文章", emoji: "🔬", color: "#4DABF7", color2: "#DDEEFF" },
    news:  { name: "新闻杂志", emoji: "📰", color: "#20C997", color2: "#D8F7EE" }
  };
  var ALEVELS = {
    "入门": { color: "#5CC98F", emoji: "🌱", en: "Beginner" },
    "中级": { color: "#FFA94D", emoji: "🌿", en: "Intermediate" },
    "高级": { color: "#9775FA", emoji: "🌳", en: "Advanced" }
  };

  /* ------------------ 本地存储 ------------------ */
  var KEY_LEARNED = "ep.learned.v1", KEY_FAV = "ep.fav.v1",
      KEY_READ = "ep.read.v1", KEY_TRANS = "ep.trans.v1",
      KEY_COLLAPSE = "ep.collapse.v1", KEY_WEXP = "ep.wexp.v1";

  function loadSet(k) {
    try { var v = JSON.parse(localStorage.getItem(k) || "[]"); return Array.isArray(v) ? v : []; }
    catch (e) { return []; }
  }
  function saveSet(k, arr) { try { localStorage.setItem(k, JSON.stringify(arr)); } catch (e) {} }

  var learned = loadSet(KEY_LEARNED);
  var favs    = loadSet(KEY_FAV);
  var readArt = loadSet(KEY_READ);
  var collapsed = loadSet(KEY_COLLAPSE);
  var wexp      = loadSet(KEY_WEXP);   /* 已展开「拓展」卡片的单词 id */

  /* 超过这个词数的模块改用「首字母索引 + 单字母渲染」：
     六级全量词表 4400+ 词，一次全铺进 DOM 会明显卡顿。 */
  var BIG_WORDS = 400;

  function has(arr, v) { return arr.indexOf(v) > -1; }
  function toggleIn(arr, v) {
    var i = arr.indexOf(v);
    if (i > -1) { arr.splice(i, 1); return false; }
    arr.push(v); return true;
  }

  var state = {
    showCn: localStorage.getItem(KEY_TRANS) !== "0",
    quizMode: false,
    search: "",
    aCat: "all",
    aLevel: "all",
    wfilter: "all",   /* 单词筛选：all / new / learned / fav */
    curLv: "",        /* 当前所在的单词模块 */
    curLetter: ""     /* 超长词表：当前选中的首字母 */
  };

  /* ------------------ 小工具 ------------------ */
  var ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ESC[c]; }); }
  function str(v) { return v == null ? "" : String(v).trim(); }
  function chips(v) {
    return str(v).split("｜").map(function (x) { return x.trim(); }).filter(Boolean);
  }

  var toastEl = $("#toast"), toastTimer = null;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 1900);
  }

  /* ------------------ 语音朗读 ------------------ */
  var VOICE = null, speechOK = ("speechSynthesis" in window);

  function pickVoice() {
    if (!speechOK) return;
    var vs = window.speechSynthesis.getVoices() || [];
    var pref = ["Google US English", "Samantha", "Microsoft Aria", "Microsoft Zira", "Microsoft Jenny"];
    for (var i = 0; i < pref.length; i++) {
      for (var j = 0; j < vs.length; j++) {
        if (vs[j].name && vs[j].name.indexOf(pref[i]) > -1) { VOICE = vs[j]; return; }
      }
    }
    for (var k = 0; k < vs.length; k++) {
      if (vs[k].lang && /^en(-|_)?/i.test(vs[k].lang)) { VOICE = vs[k]; return; }
    }
  }
  if (speechOK) {
    pickVoice();
    if (typeof window.speechSynthesis.onvoiceschanged !== "undefined") {
      window.speechSynthesis.onvoiceschanged = pickVoice;
    }
  }

  function speak(text, rate, btn) {
    if (!speechOK) { toast("当前浏览器不支持语音朗读"); return; }
    try {
      window.speechSynthesis.cancel();
      var u = new window.SpeechSynthesisUtterance(String(text));
      u.lang = "en-US";
      u.rate = rate || 0.92;
      u.pitch = 1.04;
      if (VOICE) u.voice = VOICE;
      window.speechSynthesis.speak(u);
      if (btn) {
        var el = (typeof btn === "string") ? $(btn) : btn;
        if (el && el.classList) {
          el.classList.remove("spinning");
          void el.offsetWidth;
          el.classList.add("spinning");
          setTimeout(function () { el.classList.remove("spinning"); }, 520);
        }
      }
    } catch (e) { toast("朗读失败，请稍后再试"); }
  }

  /* =========================================================
     开场 3 秒动画
     ========================================================= */
  (function splash() {
    var el = $("#splash"), app = $("#app"), btn = $("#skipSplash");
    if (!el) { if (app) app.classList.add("enter"); return; }
    var done = false, timer = null;

    function finish() {
      if (done) return;
      done = true;
      clearTimeout(timer);
      el.classList.add("gone");
      if (app) app.classList.add("enter");
      try { window.scrollTo(0, 0); } catch (e) {}
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 700);
    }
    timer = setTimeout(finish, 3000);
    if (btn) btn.addEventListener("click", finish);
    document.addEventListener("keydown", function (e) {
      if (!done && (e.key === "Escape" || e.key === "Enter" || e.key === " ")) finish();
    });
  })();

  /* =========================================================
     路由
     ========================================================= */
  var view = $("#view");

  function go(hash) {
    if (location.hash === hash) { render(); } else { location.hash = hash; }
  }

  function currentRoute() {
    var h = (location.hash || "").replace(/^#\/?/, "");
    var query = {};
    var qi = h.indexOf("?");
    if (qi > -1) {
      h.slice(qi + 1).split("&").forEach(function (pair) {
        if (!pair) return;
        var kv = pair.split("=");
        try { query[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || ""); }
        catch (e) { query[kv[0]] = kv[1] || ""; }
      });
      h = h.slice(0, qi);
    }
    var p = h.split("/").filter(Boolean);
    return { name: p[0] || "home", arg: p[1] || "", arg2: p[2] || "", query: query };
  }

  window.addEventListener("hashchange", render);

  function setNav(name) {
    var key = { home: "home", grammar: "grammar", words: "words", dictate: "dictate", articles: "articles", progress: "progress" }[name] || "home";
    $$("#nav a").forEach(function (a) {
      a.classList.toggle("on", a.getAttribute("data-nav") === key);
    });
  }

  function render() {
    var r = currentRoute();
    setNav(r.name);
    try { window.scrollTo({ top: 0, behavior: "auto" }); } catch (e) {}

    if (r.name === "grammar" && r.arg)       { renderGrammarDetail(r.arg); return; }
    if (r.name === "articles" && r.arg)      { renderReader(r.arg); return; }
    switch (r.name) {
      case "grammar":  renderGrammar(); break;
      case "words":    renderWords(r.arg); break;
      case "dictate":  renderDictate(r.query); break;
      case "articles": renderArticles(r.query); break;
      case "progress": renderProgress(); break;
      default:         renderHome();
    }
  }

  /* =========================================================
     首页
     ========================================================= */
  function renderHome() {
    document.title = "英语星球 English Planet · 卡通英语学习乐园";
    var learnedN = learned.length;
    var readN = readArt.length;

    var html =
      '<section class="hero">' +
        '<svg class="hero-mascot" viewBox="0 0 120 120" aria-hidden="true"><use href="#i-mascot"/></svg>' +
        '<div class="hero-txt">' +
          '<span class="hi">🧭 语法 · 单词 · 默写 · 文章，一站搞定</span>' +
          '<h1>欢迎来到<em>英语星球</em><br>今天想先学哪一块？</h1>' +
          '<p>四个区域各管一件事：<b>语法区</b>把常见语法点讲透，配上例句；<b>单词区</b>从学前一路排到考研、雅思，每个词都带音标、词性、例句和朗读，点开还能看搭配、词根和辨析；<b>默写区</b>选好模块就能随机出题，看英文写中文、看中文拼英文都行，写完立刻判对错并给出释义、例句和发音；<b>文章区</b>有儿童故事、科技文章和新闻杂志，按难度分了级。</p>' +
          '<div class="hero-cta">' +
            '<a class="btn btn-primary" href="#/words">🎒 开始背单词</a>' +
            '<a class="btn btn-green" href="#/dictate">✍️ 去默写</a>' +
            '<a class="btn btn-blue" href="#/articles">📖 读一篇文章</a>' +
          '</div>' +
        '</div>' +
      '</section>' +

      '<div class="stats">' +
        stat(TOTAL_WORDS, "个单词（" + LEVELS.length + " 个模块）", "#FF8FA3") +
        stat(GRAMMAR.length, "个语法点讲解", "#FFA94D") +
        stat(ARTICLES.length, "篇阅读文章", "#4DABF7") +
        stat(learnedN, "个单词已标记学会", "#5CC98F") +
      '</div>' +

      '<div class="door-grid" style="margin-top:26px">' +
        door("grammar", "📚", "语法区", "从词法基础到时态、从句、非谓语，共 " + GRAMMAR.length + " 个语法点：结构公式 → 讲解 → 例句 → 常见错误，按六大类整理。", "#FFD43B", ["#/grammar"], ["入门到进阶", "附常见错误"]) +
        door("words", "🎒", "单词区", "八个模块：学前 → 小学 → 初中 → 高中 → 大学四级 → 大学六级 → 考研英语 → 雅思核心。每个单词都有音标、词性、中文、例句和朗读，另附变形、搭配、近反义词、词根词缀与易混提示。", "#4DABF7", ["#/words"], ["共 " + TOTAL_WORDS + " 词", "每词带拓展", "抽卡复习", "选择题测验"]) +
        door("dictate", "✍️", "默写区", "选一个模块，随机出题：看英文写中文，或者看中文拼英文。写完马上判对错 —— 对了给你打勾加油，错了也不会凶你，会把音标、释义、例句和发音一并摆出来。", "#5CC98F", ["#/dictate"], ["英译中 / 中译英", "一轮 10 题", "答完给例句"]) +
        door("articles", "📖", "文章区", "儿童故事 / 科技文章 / 新闻杂志三类题材，入门 / 中级 / 高级三档难度，配生词表和阅读理解题。", "#5CC98F", ["#/articles"], ["共 " + ARTICLES.length + " 篇", "三档难度"]) +
      '</div>' +

      '<div class="note">' +
        '<b>用法小提示：</b>点击任意 🔊 按钮可以听英文朗读（用浏览器自带语音，不需要联网插件）。' +
        '在单词区点 ✓ 标记「已学会」，点 ⭐ 收藏，进度会自动保存在这台电脑上，下次打开还在。' +
        '「小学 / 初中 / 高中 / 四级 / 六级 / 考研 / 雅思」这七个模块的词表比较大，首次进入时会自动下载一次，' +
        '之后浏览器会缓存，再进来就是秒开。默写区可以直接用键盘作答，回车提交、再回车进入下一题。' +
      '</div>';

    view.innerHTML = html;
  }

  function stat(n, label, color) {
    return '<div class="stat" style="border-color:#2F2A44">' +
      '<b style="color:' + color + '">' + n + '</b><span>' + esc(label) + '</span></div>';
  }

  function door(id, emoji, title, desc, color, links, tags) {
    var tagHtml = tags.map(function (t) { return '<span class="chip">' + esc(t) + '</span>'; }).join("");
    return '<a class="door" href="' + links[0] + '" style="--dc:' + color + '">' +
      '<span class="door-emoji">' + emoji + '</span>' +
      '<h3>' + esc(title) + '</h3>' +
      '<p>' + esc(desc) + '</p>' +
      '<div class="door-tags">' + tagHtml + '</div>' +
      '<span class="door-go" style="color:' + color + '">进去看看 <i>→</i></span>' +
    '</a>';
  }

  /* =========================================================
     语法区
     ========================================================= */
  var G_CATS = ["词法基础", "动词时态", "语态·情态·语气", "从句", "非谓语动词", "特殊句式与综合"];

  function gCard(g) {
    return '<a class="g-card" href="#/grammar/' + g.id + '" style="--gc:' + g.color + '">' +
      '<div class="g-top">' +
        '<span class="g-emoji">' + g.emoji + '</span>' +
        '<h3>' + esc(g.name) + '</h3>' +
        '<div class="g-en">' + esc(g.en) + '</div>' +
        '<div class="g-tags"><span class="chip">' + esc(g.level) + '</span>' +
          '<span class="chip">' + g.usages.length + ' 条例句</span></div>' +
      '</div>' +
      '<div class="g-body">' +
        '<p class="g-intro">' + esc(g.intro) + '</p>' +
        '<div class="g-formula">' + g.form.map(function (f) {
          return '<div class="gf-row"><span class="gf-k">' + esc(f.k) + '</span><span class="gf-v">' + esc(f.v) + '</span></div>';
        }).join("") + '</div>' +
        '<div class="g-examples">' + g.usages.slice(0, 1).map(function (u) {
          return '<div class="g-ex"><div class="ge-u">例句</div>' +
            '<div class="ge-line"><span class="ge-en">' + esc(u.eg) + '</span>' +
            '<button class="icon-btn speak" type="button" data-say="' + esc(u.eg) + '" title="朗读">🔊</button></div>' +
            '<div class="ge-t">' + esc(u.t) + '</div></div>';
        }).join("") + '</div>' +
      '</div>' +
    '</a>';
  }

  function renderGrammar() {
    document.title = "语法区 · 英语星球";
    var cats = G_CATS.slice();
    var seen = {};
    G_CATS.forEach(function (c) { seen[c] = true; });
    GRAMMAR.forEach(function (g) {
      var c = g.cat || "其他";
      if (!seen[c]) { seen[c] = true; cats.push(c); }
    });

    var blocks = cats.map(function (cat) {
      var list = GRAMMAR.filter(function (g) { return (g.cat || "其他") === cat; });
      if (!list.length) return "";
      return '<div class="g-cat">' +
        '<div class="g-cat-head"><span class="gc-emoji">📂</span><h3>' + esc(cat) + '</h3>' +
          '<span class="gc-n">' + list.length + ' 个语法点</span></div>' +
        '<div class="g-grid">' + list.map(function (g) { return gCard(g); }).join("") + '</div>' +
      '</div>';
    }).join("");

    view.innerHTML =
      '<div class="section-head">' +
        '<div class="sh-txt"><h2><span class="sh-emoji">📚</span>语法区</h2>' +
        '<p>从词法到时态、从句、非谓语，共 ' + GRAMMAR.length + ' 个语法点：结构公式 → 讲解 → 例句 → 常见错误。点开任意一张卡片看完整内容。</p></div>' +
      '</div>' + blocks;
  }

  function renderGrammarDetail(id) {
    var g = null;
    for (var i = 0; i < GRAMMAR.length; i++) { if (GRAMMAR[i].id === id) { g = GRAMMAR[i]; break; } }
    if (!g) { go("#/grammar"); return; }

    document.title = g.name + " · 语法区 · 英语星球";

    var forms = g.form.map(function (f) {
      return '<div class="gf-row"><span class="gf-k">' + esc(f.k) + '</span><span class="gf-v">' + esc(f.v) + '</span></div>';
    }).join("");

    var exs = g.usages.map(function (u, i) {
      return '<div class="g-ex">' +
        '<div class="ge-u"><b>' + (i + 1) + '.</b> ' + esc(u.u) + '</div>' +
        '<div class="ge-line">' +
          '<span class="ge-en">' + esc(u.eg) + '</span>' +
          '<button class="icon-btn speak" type="button" data-say="' + esc(u.eg) + '" title="朗读例句">🔊</button>' +
        '</div>' +
        '<div class="ge-t">' + esc(u.t) + '</div>' +
      '</div>';
    }).join("");

    var mis = g.mistakes.map(function (m) { return '<li>' + esc(m) + '</li>'; }).join("");

    view.innerHTML =
      '<a class="btn btn-sm" href="#/grammar" style="margin-bottom:16px">← 回到语法区</a>' +
      '<article class="card g-detail" style="--gc:' + g.color + '">' +
        '<div class="g-detail-head">' +
          '<span style="font-size:44px">' + g.emoji + '</span>' +
          '<div style="flex:1;min-width:180px">' +
            '<h3>' + esc(g.name) + '</h3>' +
            '<div class="g-en" style="margin-top:5px">' + esc(g.en) + '</div>' +
          '</div>' +
          '<span class="chip">' + esc(g.level) + '</span>' +
        '</div>' +
        '<div class="g-panel">' +
          '<p class="g-intro" style="font-size:15.5px">' + esc(g.intro) + '</p>' +
          '<h4 style="margin:22px 0 10px;font-size:16px">🧱 结构公式</h4>' +
          '<div class="g-formula">' + forms + '</div>' +
          '<h4 style="margin:26px 0 6px;font-size:16px">💬 用法与例句</h4>' +
          '<div class="g-examples">' + exs + '</div>' +
          '<div class="g-mistakes">' +
            '<div class="gm-title">⚠️ 常见错误提醒</div>' +
            '<ul style="margin:0;padding-left:20px">' + mis + '</ul>' +
          '</div>' +
        '</div>' +
      '</article>';
  }

  /* =========================================================
     单词区
     ========================================================= */
  function levelOf(id) {
    for (var i = 0; i < LEVELS.length; i++) { if (LEVELS[i].id === id) { return LEVELS[i]; } }
    return LEVELS[0];
  }
  function countLearned(levelId) {
    var n = 0;
    ALL_WORDS.forEach(function (x) { if (x.levelId === levelId && has(learned, x.id)) n++; });
    return n;
  }

  /* 未加载模块的占位：讲清楚为什么等、有多大、等待期间能做什么 */
  function levelLoadingHtml(lv, total) {
    var idx = FULL_INDEX[lv.id] || {};
    var size = idx.kb ? (idx.kb >= 1024 ? (idx.kb / 1024).toFixed(1) + " MB" : idx.kb + " KB") : "词表数据";
    return '<div class="w-loading" id="wLoading">' +
      '<span class="wl-spin" aria-hidden="true"></span>' +
      '<h3>正在加载「' + esc(lv.name) + '」的完整词表</h3>' +
      '<p>这个模块一共有 <b>' + total + '</b> 个单词，词表文件 <b>' + size + '</b>。' +
        '首次进入需要下载一次，之后浏览器会缓存，再进来就是秒开。</p>' +
      '<p class="wl-tip">下载期间可以先切到别的模块看看，或者用上面的搜索框查词。</p>' +
      '</div>';
  }

  function renderWords(levelId) {
    document.title = "单词区 · 英语星球";
    var lv = levelOf(levelId || LEVELS[0].id);
    var loaded = isLoaded(lv.id);

    var rail = LEVELS.map(function (l) {
      var n = levelTotal(l);
      var d = countLearned(l.id);
      return '<a class="level-tab ' + (l.id === lv.id ? "on" : "") + '" href="#/words/' + l.id + '" style="--lc:' + l.color + '">' +
        '<span class="lt-emoji">' + l.emoji + '</span>' +
        '<span>' + esc(l.name) + '<br><span class="lt-num">' + d + "/" + n + '</span></span>' +
      '</a>';
    }).join("");

    var total = levelTotal(lv);
    var done = countLearned(lv.id);
    var pct = total ? Math.round(done / total * 100) : 0;

    /* 超长词表：只渲染当前首字母那一组，其余靠字母索引切换。
       注意：没有 letter 字段的「手写精讲」组必须一直保留在列表里，不能被字母索引挤掉。
       未加载时先不渲染字母索引（没有数据可索引），只显示占位卡。 */
    var isBig = total > BIG_WORDS;
    var shown = lv.groups;
    var letterRail = "";
    if (isBig && loaded) {
      var ltrs = lv.groups.filter(function (g) { return g.letter; });
      if (ltrs.length) {
        var hit = false;
        for (var li = 0; li < ltrs.length; li++) if (ltrs[li].letter === state.curLetter) hit = true;
        if (!hit) state.curLetter = ltrs[0].letter;
        shown = lv.groups.filter(function (g) { return !g.letter || g.letter === state.curLetter; });
        letterRail = '<div class="letter-rail" id="letterRail">' + ltrs.map(function (g) {
          /* "#" 是「短语 / 其他」组（教材词表里 (be) made of 这类不以字母开头的条目），
             索引键保持惯例的 #，但给个提示，免得用户不知道这一格是什么 */
          var tip = g.letter === "#" ? "短语 / 其他" : "首字母 " + g.letter;
          return '<button class="ltr-btn' + (g.letter === state.curLetter ? " on" : "") +
            '" type="button" data-ltr="' + esc(g.letter) + '" title="' + esc(tip) +
            '"><b>' + esc(g.letter) + '</b>' +
            '<i>' + g.words.length + '</i></button>';
        }).join("") + '</div>';
      }
    }

    var groups = !loaded ? levelLoadingHtml(lv, total) : shown.map(function (g, gi) {
      var key = lv.id + "/" + g.name;
      var isCollapsed = has(collapsed, key);
      var rows = g.words.map(function (wd) {
        var id = lv.id + "::" + wd.w;
        return wordRow({
          id: id, w: wd.w, p: wd.p, s: wd.s, c: wd.c, e: wd.e, t: wd.t,
          f: wd.f, ph: wd.ph, sy: wd.sy, an: wd.an, rt: wd.rt, tp: wd.tp,
          learned: has(learned, id), fav: has(favs, id)
        });
      }).join("");
      return '<section class="group ' + (isCollapsed ? "collapsed" : "") + '" data-gkey="' + esc(key) + '">' +
        '<div class="group-head" data-collapse="1">' +
          '<span class="gh-emoji">' + g.emoji + '</span>' +
          '<h3>' + esc(g.name) + '</h3>' +
          '<span class="gh-count">' + g.words.length + ' 词 · ' +
            g.words.filter(function (wd) { return has(learned, lv.id + "::" + wd.w); }).length + ' 已学</span>' +
          '<span class="gh-arrow">▼</span>' +
        '</div>' +
        '<div class="group-body">' + rows + '</div>' +
      '</section>';
    }).join("") + '<div class="empty w-hide" id="wfEmpty" style="margin-top:20px"></div>';

    view.innerHTML =
      '<div class="section-head">' +
        '<div class="sh-txt"><h2><span class="sh-emoji">🎒</span>单词区</h2>' +
        '<p>八个模块由易到难排列。每个单词都有音标、词性、中文、例句和朗读；点 🧩 展开拓展卡片，还能看到变形、搭配、近义 / 反义词、词根词缀和易混提示；也可以按「未学会 / 已学会 / 已收藏」筛选，或用 🃏 抽卡复习、🎯 选择题测验检验成果。</p></div>' +
        '<label class="searchbox">🔍<input id="wordSearch" type="search" placeholder="搜索 ' + TOTAL_WORDS + ' 个单词：英文、中文、搭配都行" value="' + esc(state.search) + '"></label>' +
      '</div>' +

      '<div id="wordSearchResult"></div>' +

      '<div id="wordMain">' +
        '<div class="level-rail">' + rail + '</div>' +

        '<div class="level-banner" style="--c2:' + lv.color2 + '">' +
          '<span class="lv-emoji">' + lv.emoji + '</span>' +
          '<div class="lv-info" style="--lc:' + lv.color + '">' +
            '<h2>' + esc(lv.name) + ' <small>' + esc(lv.en) + '</small></h2>' +
            '<p>' + esc(lv.desc) + '</p>' +
          '</div>' +
          '<div class="lv-bar" style="--lc:' + lv.color + '">' +
            '<div class="lv-num"><span>学习进度</span><span>' + done + " / " + total + '</span></div>' +
            '<div class="lv-track"><div class="lv-fill" style="width:' + pct + '%"></div></div>' +
          '</div>' +
        '</div>' +

        '<div class="toolbar">' +
          '<button class="toggle ' + (state.quizMode ? "on" : "") + '" id="quizToggle" type="button">' +
            '<span class="dot"></span>自测模式（遮住中文）</button>' +
          '<button class="btn btn-sm" id="expandAll" type="button">📂 全部展开</button>' +
          '<button class="btn btn-sm" id="collapseAll" type="button">📁 全部收起</button>' +
          '<button class="btn btn-sm btn-blue" id="flashStart" type="button">🃏 抽卡复习</button>' +
          '<button class="btn btn-sm btn-pink" id="quizStart" type="button">🎯 选择题测验</button>' +
          '<button class="btn btn-sm btn-green" id="dictateStart" type="button">✍️ 默写这个模块</button>' +
          '<span class="hint">💡 点单词旁边的 ✓ 标记已学会，点 ⭐ 收藏</span>' +
        '</div>' +

        (loaded ? '<div class="filter-row" id="wfRow" style="margin-top:10px">' +
          '<span class="fl-label">状态筛选</span>' + wfChips(lv) +
        '</div>' : '') +

        letterRail +
        groups +
      '</div>';

    bindWordEvents(lv);
    state.curLv = lv.id;
    if (loaded) {
      refreshWordView();
      if (state.search) runSearch(state.search);
    } else {
      /* 占位卡已经铺出来了，这里把词表拉回来；加载完成后再走一遍路由重渲染。
         用 render() 而不是直接再调 renderWords()，是为了让「用户已经切走」这种情况自然收敛。 */
      ensureLevel(lv.id, function (id, st) { if (st === "ok") render(); });
    }
  }

  /* 拓展卡片：变形 / 搭配 / 近反义 / 词根 / 辨析，默认收起，点 🧩 展开 */
  function wdItem(k, v, cls) {
    var arr = (v instanceof Array) ? v : [v];
    var html = arr.length > 1
      ? '<span class="wd-chips">' + arr.map(function (x) { return '<span class="wd-chip">' + esc(x) + '</span>'; }).join("") + '</span>'
      : esc(arr[0]);
    return '<div class="wd-item ' + (cls || "") + '">' +
      '<span class="wd-k">' + k + '</span>' +
      '<span class="wd-v">' + html + '</span>' +
    '</div>';
  }

  function wordDetail(o) {
    var forms = chips(o.f), colls = chips(o.ph), syns = chips(o.sy), ants = chips(o.an);
    var items = [];
    if (forms.length) items.push(wdItem("变形", forms, "wd-form"));
    if (colls.length) items.push(wdItem("搭配", colls, "wd-wide"));
    if (syns.length)  items.push(wdItem("近义", syns, "wd-syn"));
    if (ants.length)  items.push(wdItem("反义", ants, "wd-ant"));
    if (str(o.rt))    items.push(wdItem("词根", str(o.rt), "wd-root"));
    if (str(o.tp))    items.push(wdItem("辨析", str(o.tp), "wd-wide wd-tip"));
    if (!items.length) return "";
    return '<div class="w-detail' + (state.quizMode ? " ex-hidden" : "") + '">' +
      '<div class="wd-grid">' + items.join("") + '</div></div>';
  }

  function wordRow(o) {
    var open = has(wexp, o.id);
    var more = wordDetail(o);
    return '<div class="word ' + (o.learned ? "learned" : "") + (open ? " w-open" : "") + '" data-wid="' + esc(o.id) + '">' +
      '<div class="w-left">' +
        '<div class="w-main">' +
          '<div class="w-en">' + esc(o.w) + (o.s ? '<span class="w-pos">' + esc(o.s) + '</span>' : "") + '</div>' +
          (o.p ? '<div class="w-ipa">' + esc(o.p) + '</div>' : "") +
          '<div class="w-cn' + (state.quizMode ? " ex-hidden" : "") + '">' + esc(o.c) + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="w-ex">' + (o.e
        ? '<div class="ex-en">' + esc(o.e) + '</div>' +
          '<div class="ex-cn' + (state.quizMode ? " ex-hidden" : "") + '">' + esc(o.t) + '</div>'
        : '<span class="ex-none">此词暂无例句</span>') +
      '</div>' +
      '<div class="w-acts">' +
        '<button class="icon-btn speak" type="button" data-say="' + esc(o.w) + '" data-rate="0.82" title="朗读单词">🔊</button>' +
        '<button class="icon-btn speak" type="button" data-say="' + esc(o.e) + '" title="朗读例句">🗣️</button>' +
        '<button class="icon-btn mark ' + (o.learned ? "on" : "") + '" type="button" data-mark="1" title="标记已学会">✓</button>' +
        '<button class="icon-btn star ' + (o.fav ? "fav" : "") + '" type="button" data-fav="1" title="收藏">⭐</button>' +
        (more ? '<button class="icon-btn more ' + (open ? "on" : "") + '" type="button" data-wexp="1" title="展开 / 收起拓展">🧩</button>' : "") +
      '</div>' +
      more +
    '</div>';
  }

  function bindWordEvents(lv) {
    var q = $("#quizToggle");
    if (q) q.addEventListener("click", function () {
      state.quizMode = !state.quizMode;
      q.classList.toggle("on", state.quizMode);
      $$(".w-cn, .ex-cn, .w-detail", view).forEach(function (el) { el.classList.toggle("ex-hidden", state.quizMode); });
      toast(state.quizMode ? "自测模式已开启：先想中文，再点开看" : "自测模式已关闭");
    });

    var ea = $("#expandAll");
    if (ea) ea.addEventListener("click", function () {
      $$(".group", view).forEach(function (g) { g.classList.remove("collapsed"); });
      collapsed = collapsed.filter(function (k) { return k.indexOf(lv.id + "/") !== 0; });
      saveSet(KEY_COLLAPSE, collapsed);
      toast("已全部展开");
    });
    var ca = $("#collapseAll");
    if (ca) ca.addEventListener("click", function () {
      $$(".group", view).forEach(function (g) {
        g.classList.add("collapsed");
        var k = g.getAttribute("data-gkey");
        if (k && !has(collapsed, k)) collapsed.push(k);
      });
      saveSet(KEY_COLLAPSE, collapsed);
      toast("已全部收起");
    });

    $$("[data-wf]", view).forEach(function (b) {
      b.addEventListener("click", function () {
        state.wfilter = b.getAttribute("data-wf") || "all";
        $$("[data-wf]", view).forEach(function (x) { x.classList.toggle("on", x === b); });
        applyWordFilter();
      });
    });

    /* 超长词表：切换首字母（重渲染，只铺当前字母那一组） */
    $$("[data-ltr]", view).forEach(function (b) {
      b.addEventListener("click", function () {
        state.curLetter = b.getAttribute("data-ltr") || "";
        render();
        var lr = $("#letterRail");
        if (lr && lr.scrollIntoView) lr.scrollIntoView(true);
      });
    });

    var fsb = $("#flashStart");
    if (fsb) fsb.addEventListener("click", function () { openFlash(lv.id, lv.name); });
    var zsb = $("#quizStart");
    if (zsb) zsb.addEventListener("click", function () { openQuiz(lv.id, lv.name); });
    var dsb = $("#dictateStart");
    if (dsb) dsb.addEventListener("click", function () { location.hash = "#/dictate?lv=" + lv.id; });

    var si = $("#wordSearch");
    if (si) {
      var t = null;
      si.addEventListener("input", function () {
        clearTimeout(t);
        var v = si.value;
        t = setTimeout(function () { state.search = v; runSearch(v); }, 160);
      });
    }
  }

  function runSearch(q) {
    var box = $("#wordSearchResult"), main = $("#wordMain");
    q = String(q || "").trim().toLowerCase();
    if (!q) { box.innerHTML = ""; if (main) main.style.display = ""; return; }
    if (main) main.style.display = "none";

    var hits = ALL_WORDS.filter(function (x) {
      return x.w.toLowerCase().indexOf(q) > -1 ||
             str(x.c).toLowerCase().indexOf(q) > -1 ||
             str(x.e).toLowerCase().indexOf(q) > -1 ||
             str(x.t).toLowerCase().indexOf(q) > -1 ||
             (str(x.f) + " " + str(x.ph) + " " + str(x.sy) + " " + str(x.an) + " " + str(x.rt)).toLowerCase().indexOf(q) > -1;
    });

    /* 还有模块没下载 → 后台补载，加载完自动重跑这次搜索，结果逐步变多。
       搜索要跨全部 8 个模块，所以这里会主动把没下过的模块都拉回来（只在用户真的搜了之后才拉）。 */
    var missing = LEVELS.filter(function (l) { return !isLoaded(l.id); });
    if (missing.length) {
      if (!searchSubReady) {
        searchSubReady = true;
        levelSubs.push(function () {
          if (currentRoute().name === "words" && String(state.search || "").trim()) runSearch(state.search);
        });
      }
      missing.forEach(function (l) {
        if (searchLoading[l.id]) return;
        searchLoading[l.id] = true;
        ensureLevel(l.id, function () { searchLoading[l.id] = false; });
      });
    }
    var pendingNote = missing.length
      ? '<div class="sr-pending">⏳ 还有 ' + missing.length + ' 个模块（' +
        missing.map(function (l) { return esc(l.name); }).join(" · ") +
        '）的词表正在后台下载，下载完成的结果会自动补进来。</div>'
      : "";

    if (!hits.length) {
      box.innerHTML = pendingNote + '<div class="empty"><span class="em">🔍</span>' +
        (missing.length ? "已下载的模块里没有匹配，其余模块还在下载中，稍等片刻。"
                        : "没有找到匹配的单词，换个词试试吧。") + '</div>';
      return;
    }
    var rows = hits.slice(0, 200).map(function (x) {
      var open = has(wexp, x.id);
      var more = wordDetail(x);
      return '<div class="sr-item' + (open ? " w-open" : "") + '" data-wid="' + esc(x.id) + '">' +
        '<span class="sr-lv chip" style="background:' + x.levelColor + '">' + x.levelEmoji + " " + esc(x.levelName) + '</span>' +
        '<div style="flex:1;min-width:180px">' +
          '<div class="w-en">' + esc(x.w) + (x.s ? '<span class="w-pos">' + esc(x.s) + '</span>' : "") + ' <span class="w-ipa">' + esc(x.p) + '</span></div>' +
          '<div class="w-cn">' + esc(x.c) + '</div>' +
        '</div>' +
        '<div style="flex:2;min-width:200px">' + (x.e
          ? '<div class="ex-en" style="font-size:14.5px">' + esc(x.e) + '</div>' +
            '<div class="ex-cn" style="font-size:12.5px">' + esc(x.t) + '</div>'
          : '<span class="ex-none">此词暂无例句</span>') +
        '</div>' +
        '<button class="icon-btn speak" type="button" data-say="' + esc(x.e) + '" title="朗读">🔊</button>' +
        (more ? '<button class="icon-btn more ' + (open ? "on" : "") + '" type="button" data-wexp="1" title="展开 / 收起拓展">🧩</button>' : "") +
        more +
      '</div>';
    }).join("");

    box.innerHTML = pendingNote + '<div class="group" style="margin-top:0"><div class="group-head" style="cursor:default">' +
      '<span class="gh-emoji">🔍</span><h3>搜索结果</h3>' +
      '<span class="gh-count">命中 ' + hits.length + ' 个单词' + (hits.length > 200 ? "（显示前 200 个）" : "") + '</span>' +
      '</div><div class="group-body">' + rows + '</div></div>';
  }

  /* =========================================================
     单词区 · 状态筛选 / 抽卡复习 / 选择题测验
     ========================================================= */

  /* 当前模块的统计：总数 / 已学会 / 已收藏 / 未学会 */
  function levelCounts(levelId) {
    var c = { total: 0, learned: 0, fav: 0, fresh: 0 };
    ALL_WORDS.forEach(function (x) {
      if (x.levelId !== levelId) return;
      c.total++;
      if (has(learned, x.id)) c.learned++;
      if (has(favs, x.id)) c.fav++;
    });
    c.fresh = c.total - c.learned;
    return c;
  }

  /* 按范围取词：all / new（未学会）/ fav（已收藏） */
  function pickPool(levelId, mode) {
    var list = ALL_WORDS.filter(function (x) { return x.levelId === levelId; });
    if (mode === "new") return list.filter(function (x) { return !has(learned, x.id); });
    if (mode === "fav") return list.filter(function (x) { return has(favs, x.id); });
    return list;
  }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* 筛选按钮（带实时数字） */
  function wfChips(lv) {
    var c = levelCounts(lv.id);
    function b(k, label, n) {
      return '<button class="fbtn wf-btn ' + (state.wfilter === k ? "on" : "") + '" type="button" data-wf="' + k + '">' +
        label + ' <b data-wfc="' + k + '">' + n + '</b></button>';
    }
    return b("all", "全部", c.total) + b("new", "未学会", c.fresh) +
           b("learned", "已学会", c.learned) + b("fav", "已收藏", c.fav);
  }

  /* 数字 / 进度条 / 行筛选 一次性刷新 */
  function refreshWordView() {
    var main = $("#wordMain");
    if (!main || !state.curLv) return;
    var c = levelCounts(state.curLv);
    var nums = { all: c.total, "new": c.fresh, learned: c.learned, fav: c.fav };
    Object.keys(nums).forEach(function (k) {
      var el = main.querySelector('[data-wfc="' + k + '"]');
      if (el) el.textContent = nums[k];
    });
    var pct = c.total ? Math.round(c.learned / c.total * 100) : 0;
    var fill = $(".lv-fill", main);
    if (fill) fill.style.width = pct + "%";
    var num = $(".lv-num", main);
    if (num && num.lastElementChild) num.lastElementChild.textContent = c.learned + " / " + c.total;
    var tab = $(".level-tab.on .lt-num");
    if (tab) tab.textContent = c.learned + "/" + c.total;
    applyWordFilter();
  }

  function rowMatch(id) {
    if (state.wfilter === "new") return !has(learned, id);
    if (state.wfilter === "learned") return has(learned, id);
    if (state.wfilter === "fav") return has(favs, id);
    return true;
  }

  function applyWordFilter() {
    var main = $("#wordMain");
    if (!main) return;
    var visible = 0;
    $$(".group", main).forEach(function (g) {
      var rows = $$(".word", g);
      if (!rows.length) return;
      var vis = 0, d = 0;
      rows.forEach(function (row) {
        var id = row.getAttribute("data-wid");
        var ok = rowMatch(id);
        row.classList.toggle("w-hide", !ok);
        if (ok) vis++;
        if (has(learned, id)) d++;
      });
      visible += vis;
      var cnt = $(".gh-count", g);
      if (cnt) {
        cnt.textContent = state.wfilter === "all"
          ? rows.length + " 词 · " + d + " 已学"
          : "显示 " + vis + " / " + rows.length + " 词 · " + d + " 已学";
      }
      g.classList.toggle("w-hide", vis === 0);
    });

    var empty = $("#wfEmpty");
    if (empty) {
      /* 超长词表只渲染当前首字母，visible 只反映当前字母 —— 空态判定必须用整个模块的数量，
         否则会误报「这个模块还没有收藏的单词」。 */
      var lvNow = state.curLv ? levelOf(state.curLv) : null;
      var nMatch = visible;
      if (lvNow) {
        var lvc = levelCounts(lvNow.id);
        nMatch = state.wfilter === "new" ? lvc.fresh
               : state.wfilter === "learned" ? lvc.learned
               : state.wfilter === "fav" ? lvc.fav : lvc.total;
      }
      var show = state.wfilter !== "all" && nMatch === 0;
      if (show) {
        empty.innerHTML = state.wfilter === "new"
          ? '<span class="em">🎉</span>这个模块的单词已经全部标记学会了！切回「全部」还能继续看。'
          : state.wfilter === "learned"
            ? '<span class="em">🌱</span>这个模块还没有标记「已学会」的单词，点单词旁的 ✓ 就能标记。'
            : '<span class="em">⭐</span>这个模块还没有收藏的单词，点单词旁的 ⭐ 就能收藏。';
      }
      empty.classList.toggle("w-hide", !show);
    }
  }

  /* 把主列表的 ✓ / ⭐ 状态与本地数据对齐（弹层里操作过之后调用） */
  function syncRows() {
    $$(".word", view).forEach(function (row) {
      var id = row.getAttribute("data-wid");
      var on = has(learned, id);
      row.classList.toggle("learned", on);
      var mk = $("[data-mark]", row);
      if (mk) mk.classList.toggle("on", on);
      var fv = $("[data-fav]", row);
      if (fv) fv.classList.toggle("fav", has(favs, id));
    });
  }

  /* ---- 弹层「范围」按钮 ---- */
  function poolBtns(pre) {
    var o = (pre === "fc") ? fc : qz;
    var c = levelCounts(o.levelId);
    var cfg = [["all", "全部单词"], ["new", "未学会"], ["fav", "已收藏"]];
    return cfg.map(function (p) {
      var n = p[0] === "all" ? c.total : (p[0] === "new" ? c.fresh : c.fav);
      return '<button class="fbtn" type="button" data-' + pre + 'p="' + p[0] + '">' + p[1] + " " + n + '</button>';
    }).join("");
  }

  function setPool(pre, mode) {
    var o = (pre === "fc") ? fc : qz;
    if (!o) return;
    o.pool = mode;
    $$("[data-" + pre + "p]").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-" + pre + "p") === mode);
    });
    if (pre === "fc") startFcRound(); else startQzRound();
  }

  /* ===================== 抽卡复习 ===================== */
  var fc = null;

  function openFlash(levelId, levelName) {
    if (fc || qz) return;
    var init = (state.wfilter === "new" || state.wfilter === "fav") ? state.wfilter : "all";
    fc = { levelId: levelId, pool: init, list: [], idx: 0, done: 0, again: 0, newly: 0, key: null };

    var wrap = document.createElement("div");
    wrap.className = "mo";
    wrap.id = "fcWrap";
    wrap.innerHTML =
      '<div class="mo-bg" data-fc-close="1"></div>' +
      '<div class="mo-panel">' +
        '<div class="mo-head">' +
          '<h3>🃏 抽卡复习 <small>' + esc(levelName) + '</small></h3>' +
          '<div class="mo-pool">' + poolBtns("fc") + '</div>' +
          '<button class="icon-btn mo-x" type="button" data-fc-close="1" title="关闭">✕</button>' +
        '</div>' +
        '<div class="mo-body" id="fcBody"></div>' +
        '<div class="mo-foot" id="fcFoot"></div>' +
      '</div>';
    document.body.appendChild(wrap);
    document.body.classList.add("mo-open");

    wrap.addEventListener("click", function (e) {
      var t = e.target;
      if (!t || !t.closest) return;
      if (t.closest("[data-fc-close]")) { closeFlash(); return; }
      var pb = t.closest("[data-fcp]");
      if (pb) { setPool("fc", pb.getAttribute("data-fcp")); return; }
      if (t.closest(".speak")) return;
      if (t.closest("#fcKnow")) { fcKnow(); return; }
      if (t.closest("#fcAgain")) { fcAgain(); return; }
      if (t.closest("#fcRestart")) { startFcRound(); return; }
      if (t.closest("#fcCard")) { flipFc(); }
    });

    fc.key = function (e) { onFcKey(e); };
    document.addEventListener("keydown", fc.key);

    setPool("fc", init);
  }

  function startFcRound() {
    if (!fc) return;
    var pool = pickPool(fc.levelId, fc.pool);
    fc.list = shuffle(pool.slice());
    fc.idx = 0; fc.done = 0; fc.again = 0; fc.newly = 0;
    renderFcCard();
  }

  function renderFcCard() {
    var body = $("#fcBody"), foot = $("#fcFoot");
    if (!body || !foot || !fc) return;

    if (!fc.list.length) {
      body.innerHTML = '<div class="empty"><span class="em">📭</span>这个范围里暂时没有单词。' +
        (fc.pool === "fav" ? "先点单词旁的 ⭐ 收藏几个再来。" : "换个范围试试。") + '</div>';
      foot.innerHTML = '<div class="mo-actions"><button class="btn btn-sm" type="button" data-fc-close="1">关闭</button></div>';
      return;
    }
    if (fc.idx >= fc.list.length) { renderFcSummary(); return; }

    var x = fc.list[fc.idx];
    var detail = wordDetail(x);
    body.innerHTML =
      '<div class="fc-card" id="fcCard">' +
        '<div class="fc-front">' +
          '<div class="fc-badge">点一下卡片 / 按空格，看中文和例句</div>' +
          '<div class="fc-word">' + esc(x.w) + (x.s ? '<span class="w-pos">' + esc(x.s) + '</span>' : "") + '</div>' +
          '<div class="fc-ipa">' + esc(x.p) + '</div>' +
          '<button class="icon-btn speak" type="button" data-say="' + esc(x.w) + '" data-rate="0.8" title="朗读单词">🔊</button>' +
        '</div>' +
        '<div class="fc-back">' +
          '<div class="fc-cn">' + esc(x.c) + '</div>' +
          '<div class="fc-ex">' + esc(x.e) + '</div>' +
          '<div class="fc-exc">' + esc(x.t) + '</div>' +
          (detail ? '<div class="fc-detail">' +
            detail.replace('<div class="w-detail', '<div class="w-detail fc-open') + '</div>' : "") +
        '</div>' +
      '</div>';

    foot.innerHTML =
      '<div class="fc-prog">剩余 <b>' + (fc.list.length - fc.idx) + '</b> 张 · 已记住 <b>' + fc.done + '</b> 张' +
        (fc.again ? ' · 回看 <b>' + fc.again + '</b> 次' : "") + '</div>' +
      '<div class="mo-actions">' +
        '<button class="btn btn-sm" type="button" id="fcAgain">🔄 再看一遍</button>' +
        '<button class="btn btn-sm btn-primary" type="button" id="fcKnow">✓ 记住了</button>' +
      '</div>' +
      '<div class="mo-kbd">空格翻面 · ← 再看一遍 · → 记住了 · Esc 退出</div>';
  }

  function flipFc() {
    if (!fc) return;
    var card = $("#fcCard");
    if (!card || !fc.list[fc.idx]) return;
    card.classList.toggle("flipped");
  }

  function fcKnow() {
    if (!fc) return;
    var x = fc.list[fc.idx];
    if (!x) return;
    if (!has(learned, x.id)) {
      learned.push(x.id);
      saveSet(KEY_LEARNED, learned);
      fc.newly++;
    }
    fc.done++;
    fc.idx++;
    renderFcCard();
  }

  function fcAgain() {
    if (!fc) return;
    var x = fc.list[fc.idx];
    if (!x) return;
    fc.list.push(x);          /* 放回队尾，这一轮还会再见到它 */
    fc.again++;
    fc.idx++;
    renderFcCard();
  }

  function renderFcSummary() {
    var body = $("#fcBody"), foot = $("#fcFoot");
    if (!body || !foot) return;
    body.innerHTML =
      '<div class="mo-done">' +
        '<span class="md-emoji">🎉</span>' +
        '<h4>这一轮复习完成！</h4>' +
        '<p>记住了 <b>' + fc.done + '</b> 张，其中新标记「已学会」<b>' + fc.newly + '</b> 张' +
          (fc.again ? '，另有 <b>' + fc.again + '</b> 次「再看一遍」' : '') + '。</p>' +
      '</div>';
    foot.innerHTML =
      '<div class="mo-actions">' +
        '<button class="btn btn-sm" type="button" id="fcRestart">🔁 再来一轮</button>' +
        '<button class="btn btn-sm btn-primary" type="button" data-fc-close="1">完成，返回单词表</button>' +
      '</div>' +
      '<div class="mo-kbd">这一轮的单词已经按记忆情况记好了</div>';
  }

  function onFcKey(e) {
    if (!fc) return;
    if (e.key === "Escape") { closeFlash(); return; }
    if (e.key === " " || e.key === "Spacebar") { e.preventDefault(); flipFc(); return; }
    if (e.key === "ArrowRight") { e.preventDefault(); fcKnow(); return; }
    if (e.key === "ArrowLeft") { e.preventDefault(); fcAgain(); }
  }

  function closeFlash() {
    if (!fc) return;
    document.removeEventListener("keydown", fc.key);
    var wrap = $("#fcWrap");
    if (wrap && wrap.parentNode) wrap.parentNode.removeChild(wrap);
    document.body.classList.remove("mo-open");
    var changed = fc.newly > 0;
    fc = null;
    if (changed) { syncRows(); refreshWordView(); toast("已更新学习进度"); }
  }

  /* ===================== 选择题测验 ===================== */
  var qz = null;

  function openQuiz(levelId, levelName) {
    if (qz || fc) return;
    if (pickPool(levelId, "all").length < 4) { toast("这个模块的单词太少，暂时出不了选择题"); return; }
    var init = (state.wfilter === "new" || state.wfilter === "fav") ? state.wfilter : "all";
    qz = { levelId: levelId, pool: init, list: [], idx: 0, score: 0, answered: false, wrong: [], skipped: 0, key: null };

    var wrap = document.createElement("div");
    wrap.className = "mo";
    wrap.id = "qzWrap";
    wrap.innerHTML =
      '<div class="mo-bg" data-qz-close="1"></div>' +
      '<div class="mo-panel">' +
        '<div class="mo-head">' +
          '<h3>🎯 选择题测验 <small>' + esc(levelName) + '</small></h3>' +
          '<div class="mo-pool">' + poolBtns("qz") + '</div>' +
          '<button class="icon-btn mo-x" type="button" data-qz-close="1" title="关闭">✕</button>' +
        '</div>' +
        '<div class="mo-body" id="qzBody"></div>' +
        '<div class="mo-foot" id="qzFoot"></div>' +
      '</div>';
    document.body.appendChild(wrap);
    document.body.classList.add("mo-open");

    wrap.addEventListener("click", function (e) {
      var t = e.target;
      if (!t || !t.closest) return;
      if (t.closest("[data-qz-close]")) { closeQuiz(); return; }
      var pb = t.closest("[data-qzp]");
      if (pb) { setPool("qz", pb.getAttribute("data-qzp")); return; }
      if (t.closest(".speak")) return;
      var op = t.closest("[data-qzopt]");
      if (op) { answerQz(parseInt(op.getAttribute("data-qzopt"), 10)); return; }
      if (t.closest("#qzNext")) { nextQz(); return; }
      if (t.closest("#qzRestart")) { startQzRound(); return; }
      if (t.closest("#qzFavWrong")) { favWrong(); }
    });

    qz.key = function (e) { onQzKey(e); };
    document.addEventListener("keydown", qz.key);

    setPool("qz", init);
  }

  function startQzRound() {
    var body = $("#qzBody"), foot = $("#qzFoot");
    if (!body || !foot || !qz) return;

    var pool = pickPool(qz.levelId, qz.pool);
    if (pool.length < 4) {
      body.innerHTML = '<div class="empty"><span class="em">📭</span>这个范围下不足 4 个单词，凑不齐四个选项。' +
        '换个范围，或先多学 / 多收藏一些单词。</div>';
      foot.innerHTML = '<div class="mo-actions"><button class="btn btn-sm" type="button" data-qz-close="1">关闭</button></div>';
      return;
    }

    /* 先把「例句里能挖空」的词挑出来，挖不出空的不出题（避免答案暴露在题干里） */
    var blanks = [], noBlank = [];
    pool.forEach(function (x) {
      var b = blankExample(x.w, x.e);
      if (b) blanks.push({ x: x, blank: b }); else noBlank.push(x);
    });
    if (blanks.length < 4) {
      /* 没有例句的词不能拿来出填空题（x.e 为空），先滤掉再补足 */
      blanks = blanks.concat(noBlank.filter(function (x) { return str(x.e); }).map(function (x) {
        return { x: x, blank: x.e.replace(/\.\s*$/, "") + " （______）" };
      }));
    }
    qz.skipped = noBlank.length;
    if (!blanks.length) {
      body.innerHTML = '<div class="empty"><span class="em">📭</span>这个范围里的例句暂时出不了填空题，换个范围试试。</div>';
      foot.innerHTML = '<div class="mo-actions"><button class="btn btn-sm" type="button" data-qz-close="1">关闭</button></div>';
      return;
    }

    var picked = shuffle(blanks.slice()).slice(0, Math.min(10, blanks.length));
    qz.list = picked.map(function (o) { return buildQuestion(o.x, pool, o.blank); });
    qz.idx = 0; qz.score = 0; qz.wrong = []; qz.answered = false;
    renderQzQ();
  }

  function escapeRe(s) {
    return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  /* 把例句里的目标词挖成空；挖不动时返回 null */
  function blankExample(word, ex) {
    if (!str(ex)) return null;      /* 这个词没有例句，出不了填空题 */
    var w = escapeRe(word);
    var re = new RegExp("\\b" + w + "(s|es|ed|d|ing|er|est)?\\b", "i");
    if (re.test(ex)) return ex.replace(re, "______");
    /* 变形不规则的（identify → identified / embody → embodies）：连同整个词形一起挖掉，
       否则会留下 "______ified" 这样的残尾，反而暴露答案 */
    var re2 = new RegExp("\\b" + escapeRe(word.slice(0, Math.max(3, word.length - 2))) + "[a-z]*\\b", "i");
    if (re2.test(ex)) return ex.replace(re2, "______");
    return null;
  }

  function buildQuestion(ans, pool, blank) {
    var seen = {}; seen[ans.w.toLowerCase()] = 1;
    var exLow = ans.e.toLowerCase();
    function usable(x) {
      if (seen[x.w.toLowerCase()]) return false;
      if (x.c === ans.c) return false;
      if (x.c.indexOf(ans.c) > -1 || ans.c.indexOf(x.c) > -1) return false;
      if (exLow.indexOf(x.w.toLowerCase()) > -1) return false;   /* 干扰项出现在句子里会露馅 */
      return true;
    }
    var same = pool.filter(function (x) { return x.s === ans.s && usable(x); });
    var other = pool.filter(function (x) { return x.s !== ans.s && usable(x); });
    var picks = shuffle(same.slice()).concat(shuffle(other.slice())).slice(0, 3);
    if (picks.length < 3) {
      picks = shuffle(pool.filter(function (x) { return x !== ans && x.c !== ans.c; }).slice()).slice(0, 3);
    }
    var opts = shuffle([ans].concat(picks));
    return { x: ans, blank: blank, opts: opts, correct: opts.indexOf(ans) };
  }

  function renderQzQ() {
    var body = $("#qzBody"), foot = $("#qzFoot");
    if (!body || !foot || !qz) return;
    if (qz.idx >= qz.list.length) { renderQzSummary(); return; }

    var q = qz.list[qz.idx];
    qz.answered = false;
    var pct = Math.round(qz.idx / qz.list.length * 100);
    var opts = q.opts.map(function (o, i) {
      return '<button class="qz-opt" type="button" data-qzopt="' + i + '">' +
        '<span class="qo-k">' + "ABCD".charAt(i) + '</span>' +
        '<span class="qo-w">' + esc(o.w) + '</span>' +
        '<span class="qo-p">' + esc(o.s || "") + '</span>' +
      '</button>';
    }).join("");

    body.innerHTML =
      '<div class="qz-top"><span>第 <b>' + (qz.idx + 1) + '</b> / ' + qz.list.length + ' 题</span>' +
        '<span>答对 <b>' + qz.score + '</b> 题</span></div>' +
      '<div class="qz-track"><i style="width:' + pct + '%"></i></div>' +
      '<div class="qz-stem">' +
        '<p class="qz-sent">' + esc(q.blank).split("______").join('<span class="qz-blank">______</span>') + '</p>' +
        '<p class="qz-hint">💡 提示：这个空该填的中文意思是「' + esc(q.x.c) + '」</p>' +
      '</div>' +
      '<div class="qz-opts">' + opts + '</div>' +
      '<div class="qz-fb" id="qzFb"></div>';

    foot.innerHTML =
      '<div class="mo-kbd">按数字键 1-4 或点选项作答 · Esc 退出</div>' +
      '<div class="mo-actions"><button class="btn btn-sm btn-primary w-hide" type="button" id="qzNext">' +
        (qz.idx === qz.list.length - 1 ? "看本轮成绩 →" : "下一题 →") + '</button></div>';
  }

  function answerQz(i) {
    if (!qz || qz.answered) return;
    var q = qz.list[qz.idx];
    if (!q || !q.opts[i]) return;
    qz.answered = true;
    var ok = (i === q.correct);
    if (ok) qz.score++; else qz.wrong.push({ q: q, chosen: i });

    $$("[data-qzopt]", $("#qzBody")).forEach(function (b) {
      var bi = parseInt(b.getAttribute("data-qzopt"), 10);
      b.classList.add("disabled");
      if (bi === q.correct) b.classList.add("ok");
      else if (bi === i) b.classList.add("bad");
    });

    var fb = $("#qzFb");
    if (fb) {
      fb.innerHTML =
        '<div class="fb-line ' + (ok ? "fb-ok" : "fb-bad") + '">' +
          (ok ? "✅ 答对了！" : "❌ 答错了，正确答案是 " + esc(q.opts[q.correct].w)) +
        '</div>' +
        '<div class="fb-sent">' + esc(q.x.e) +
          '<button class="icon-btn speak" type="button" data-say="' + esc(q.x.e) + '" data-rate="0.9" title="朗读例句">🔊</button>' +
        '</div>' +
        '<div class="fb-cn">' + esc(q.x.w) + " " + esc(q.x.p) + " · " + esc(q.x.c) + " · " + esc(q.x.t) + '</div>';
      fb.classList.add("show");
    }
    var nx = $("#qzNext");
    if (nx) nx.classList.remove("w-hide");
  }

  function nextQz() {
    if (!qz) return;
    if (!qz.answered) { toast("先选一个答案吧"); return; }
    qz.idx++;
    renderQzQ();
  }

  function onQzKey(e) {
    if (!qz) return;
    if (e.key === "Escape") { closeQuiz(); return; }
    if (e.key === "Enter") { if (qz.answered) nextQz(); return; }
    var n = parseInt(e.key, 10);
    if (n >= 1 && n <= 4 && !qz.answered) answerQz(n - 1);
  }

  function renderQzSummary() {
    var body = $("#qzBody"), foot = $("#qzFoot");
    if (!body || !foot || !qz) return;
    var total = qz.list.length, sc = qz.score;
    var emoji = sc === total ? "🏆" : sc >= total * 0.8 ? "🎉" : sc >= total * 0.6 ? "👍" : "💪";
    var txt = sc === total ? "全对！这个模块你已经很熟了。" :
              sc >= total * 0.8 ? "很稳，把错题再过一遍就更牢了。" :
              sc >= total * 0.6 ? "及格啦，用 🃏 抽卡复习再巩固一下。" :
              "没关系，先把错词收藏起来，多复习几轮就记住了。";

    var wrongHtml = qz.wrong.length
      ? '<div class="qz-wrong"><h4>❌ 错题回顾（' + qz.wrong.length + ' 题）</h4>' +
        qz.wrong.map(function (w) {
          var q = w.q, chose = q.opts[w.chosen];
          return '<div class="qz-w-item">' +
            '<div class="qwi-w"><b>' + esc(q.x.w) + '</b> <span class="w-ipa">' + esc(q.x.p) + '</span>' +
              '<span class="chip">' + esc(q.x.c) + '</span></div>' +
            '<div class="qwi-ex">' + esc(q.x.e) + '</div>' +
            '<div class="qwi-a">你选了 <s>' + esc(chose ? chose.w : "—") + '</s> · 正确答案是 <b>' +
              esc(q.opts[q.correct].w) + '</b></div>' +
          '</div>';
        }).join("") + '</div>'
      : '<div class="qz-perfect">🌟 全部答对，没有错题！</div>';

    body.innerHTML =
      '<div class="mo-done">' +
        '<span class="md-emoji">' + emoji + '</span>' +
        '<h4>' + sc + ' / ' + total + ' 分</h4>' +
        '<p>' + txt + '</p>' +
      '</div>' + wrongHtml;

    foot.innerHTML =
      '<div class="mo-actions">' +
        (qz.wrong.length ? '<button class="btn btn-sm" type="button" id="qzFavWrong">⭐ 错词加入收藏</button>' : "") +
        '<button class="btn btn-sm" type="button" id="qzRestart">🔁 再来一轮</button>' +
        '<button class="btn btn-sm btn-primary" type="button" data-qz-close="1">完成，返回单词表</button>' +
      '</div>' +
      '<div class="mo-kbd">错词可以一键收藏，之后用「已收藏」范围专门复习</div>';
  }

  function favWrong() {
    if (!qz) return;
    var n = 0;
    qz.wrong.forEach(function (w) {
      if (!has(favs, w.q.x.id)) { favs.push(w.q.x.id); n++; }
    });
    if (n) { saveSet(KEY_FAV, favs); toast("已把 " + n + " 个错词加入收藏"); }
    else toast("这些错词都已经收藏过了");
    var btn = $("#qzFavWrong");
    if (btn) { btn.textContent = "⭐ 已加入收藏"; btn.disabled = true; }
  }

  function closeQuiz() {
    if (!qz) return;
    document.removeEventListener("keydown", qz.key);
    var wrap = $("#qzWrap");
    if (wrap && wrap.parentNode) wrap.parentNode.removeChild(wrap);
    document.body.classList.remove("mo-open");
    qz = null;
    syncRows();
    refreshWordView();
  }

  /* =========================================================
     默写区
     =========================================================
     出题方向：英→中（写中文意思）/ 中→英（拼英文单词）/ 混合。
     判分口径：
       中文 —— 归一化（去空格标点虚词）后与释义的任一分片「相等或互相包含」即算对，
               不要求一字不差；单字分片只在完全相等时才算对，避免「卷」误判。
       英文 —— 严格拼写比对，只忽略大小写与首尾空白；只差一个字母时额外提示「差一点点」，
               但仍然记错 —— 默写的意义就在于拼准。
     答完一定展示：音标（读法）+ 释义 + 例句 + 译文，都可点 🔊 听。
     ========================================================= */
  var DT_MODES = [
    { id: "en2cn", name: "看英文，写中文", emoji: "🔤", desc: "屏幕给英文单词，你写中文意思。写出任意一个主要义项就算过，不用一字不差。" },
    { id: "cn2en", name: "看中文，拼英文", emoji: "🈶", desc: "屏幕给中文意思，你拼写英文单词。拼写要完全正确才算对。" },
    { id: "mix",   name: "两个方向混合", emoji: "🎲", desc: "每道题随机决定方向，中英双向都能练到。" }
  ];
  var DT_ROUND = 10;
  var dt = null;

  /* 默写题库只收「单个词」。
     教材词表里有 (be) made of / compare…with / (be) bound to (do) 这类短语条目，
     在「看中文拼英文」方向要求用户原样打出括号和省略号才判对 —— 既不现实也没意义。
     短语仍可在单词页用抽卡 / 选择题复习；这里只把题库口径收窄，并在界面上写明收窄了多少，
     不让「模块显示 848 词、默写说 812 个」这种对不上的数字出现。 */
  function dtIsSingleWord(w) {
    return /^[A-Za-z][A-Za-z'’\-]*$/.test(String(w || "").trim());
  }
  function dtAllWords(levelId) {
    return ALL_WORDS.filter(function (x) { return x.levelId === levelId && str(x.c); });
  }
  function dtWords(levelId) {
    return ALL_WORDS.filter(function (x) {
      return x.levelId === levelId && str(x.c) && dtIsSingleWord(x.w);
    });
  }

  function dtNormCn(s) {
    return String(s || "")
      .replace(/[\s\u3000]+/g, "")
      .replace(/[，,。.；;、！!？?：:（）()【】\[\]"'“”‘’~～·—\-]/g, "")
      .replace(/[的地得着了过]/g, "")
      .trim();
  }
  function dtNormEn(s) {
    return String(s || "").trim().toLowerCase().replace(/\.+$/, "").replace(/\s+/g, " ");
  }
  function dtCheckCn(input, c) {
    var a = dtNormCn(input);
    if (!a) return { ok: false, close: false };
    var frags = String(c || "").split("；");
    for (var i = 0; i < frags.length; i++) {
      var f = dtNormCn(frags[i]);
      if (!f) continue;
      if (a === f) return { ok: true, close: false };
      /* 单字分片（书 / 卷 / 刊）只认完全相等，否则「试卷」会被判对（释义里含「卷」）。
         两个字以上才允许互相包含，这样「苹果树」写「苹果」、「书本」写「书」都能算对。 */
      if (f.length >= 2 && a.length >= 2 && (a.indexOf(f) > -1 || f.indexOf(a) > -1)) return { ok: true, close: false };
    }
    return { ok: false, close: false };
  }
  function dtLev(a, b) {
    var m = a.length, n = b.length, i, j;
    if (!m) return n;
    if (!n) return m;
    var prev = [], cur = [];
    for (j = 0; j <= n; j++) prev[j] = j;
    for (i = 1; i <= m; i++) {
      cur[0] = i;
      for (j = 1; j <= n; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1));
      }
      prev = cur.slice();
    }
    return prev[n];
  }
  function dtCheckEn(input, w) {
    var a = dtNormEn(input), b = dtNormEn(w);
    if (!a) return { ok: false, close: false };
    if (a === b) return { ok: true, close: false };
    var close = b.length >= 4 && Math.abs(a.length - b.length) <= 1 && dtLev(a, b) === 1;
    return { ok: false, close: close };
  }

  var DT_CHEER = [
    "太棒了，就是这个意思！",
    "答对啦，记得很牢！",
    "✓ 正确，继续保持这个节奏。",
    "完全正确，稳！",
    "漂亮，又拿下一题。"
  ];
  var DT_STREAK = ["连对 3 题，手感来了！", "连对 5 题，这个模块越来越熟了！", "连对 8 题以上，太强了！"];
  var DT_COMFORT = [
    "没关系，第一次见不熟很正常，看一眼下面的例句就记住了。",
    "错了不要紧 —— 现在记住它，比考试时忘掉强多了。",
    "这个确实容易记混，把下面的例句读两遍就顺了。",
    "别灰心，谁都有第一遍记不住的时候，下一题继续。",
    "不要紧，把它点个收藏，回头复习两轮就稳了。"
  ];
  function dtCheer(ok, streak) {
    if (ok) {
      if (streak >= 8) return DT_STREAK[2];
      if (streak >= 5) return DT_STREAK[1];
      if (streak >= 3) return DT_STREAK[0];
      return DT_CHEER[Math.floor(Math.random() * DT_CHEER.length)];
    }
    return DT_COMFORT[Math.floor(Math.random() * DT_COMFORT.length)];
  }

  /* 单词卡片：音标 + 释义 + 例句 + 译文 + 发音，结算页和答题反馈共用 */
  function dtWordCard(x, opt) {
    opt = opt || {};
    var html =
      '<div class="dt-card">' +
        '<div class="dc-top">' +
          '<span class="dc-word">' + esc(x.w) + (x.s ? '<span class="w-pos">' + esc(x.s) + '</span>' : "") + '</span>' +
          (x.p ? '<span class="dc-ipa">' + esc(x.p) + '</span>' : "") +
          '<button class="icon-btn speak" type="button" data-say="' + esc(x.w) + '" data-rate="0.8" title="朗读单词">🔊</button>' +
          (opt.favable ? '<button class="icon-btn star' + (has(favs, x.id) ? " fav" : "") + '" type="button" data-fav="1" data-wid="' + esc(x.id) + '" title="收藏">⭐</button>' : "") +
        '</div>' +
        '<div class="dc-cn">' + esc(x.c) + '</div>' +
        (x.e
          ? '<div class="dc-ex"><span class="dc-en">' + esc(x.e) + '</span>' +
            '<button class="icon-btn speak" type="button" data-say="' + esc(x.e) + '" title="朗读例句">🗣️</button></div>' +
            (x.t ? '<div class="dc-excn">' + esc(x.t) + '</div>' : "")
          : '<div class="dc-noex">这个词的源词书里没有例句</div>') +
      '</div>';
    return html;
  }

  function renderDictate(query) {
    document.title = "默写区 · 英语星球";
    if (!dt) dt = { levelId: "", mode: "mix", phase: "setup", qLv: "" };
    query = query || {};

    /* 地址栏里的 ?lv= 只在「和上次应用过的不一样」时生效，否则用户点了别的模块会被地址栏拽回去 */
    if (query.lv && query.lv !== dt.qLv) {
      if (levelOf(query.lv).id === query.lv) { dt.levelId = query.lv; dt.phase = "setup"; }
      dt.qLv = query.lv;
    }
    if (!dt.levelId) dt.levelId = LEVELS[0].id;

    if (dt.phase === "quiz" && dt.list && dt.idx < dt.list.length) { dtViewQuiz(); return; }
    if (dt.phase === "done") { dtViewDone(); return; }
    dtViewSetup();
  }

  function dtViewSetup() {
    var lv = levelOf(dt.levelId);
    var loaded = isLoaded(lv.id);
    var pool = loaded ? dtWords(lv.id) : [];
    var idx = FULL_INDEX[lv.id];

    var lvCards = LEVELS.map(function (l) {
      var on = l.id === lv.id;
      return '<button class="dt-lv' + (on ? " on" : "") + '" type="button" data-dtlv="' + esc(l.id) + '" style="--lc:' + l.color + '">' +
        '<span class="dl-emoji">' + l.emoji + '</span>' +
        '<b>' + esc(l.name) + '</b>' +
        '<span class="dl-num">' + levelTotal(l) + ' 词' + (isLoaded(l.id) ? '' : ' · 待下载') + '</span>' +
      '</button>';
    }).join("");

    var modeCards = DT_MODES.map(function (m) {
      return '<button class="dt-mode' + (m.id === dt.mode ? " on" : "") + '" type="button" data-dtmode="' + esc(m.id) + '">' +
        '<span class="dm-emoji">' + m.emoji + '</span>' +
        '<b>' + esc(m.name) + '</b>' +
        '<span class="dm-desc">' + esc(m.desc) + '</span>' +
      '</button>';
    }).join("");

    var ready;
    if (loaded) {
      var allN = dtAllWords(lv.id).length;
      ready = '<div class="dt-ready">✅ 「' + esc(lv.name) + '」已就绪：从 <b>' + allN +
        '</b> 个词条里筛出 <b>' + pool.length + '</b> 个单词，一轮出 <b>' +
        Math.min(DT_ROUND, pool.length) + '</b> 题' +
        (allN > pool.length
          ? '（另有 ' + (allN - pool.length) + ' 条短语不做默写，可在单词页用 🃏 抽卡复习）'
          : '') + '。</div>';
    } else {
      var size = idx && idx.kb ? (idx.kb >= 1024 ? (idx.kb / 1024).toFixed(1) + " MB" : idx.kb + " KB") : "词表";
      ready = '<div class="dt-wait">⏳ 「' + esc(lv.name) + '」的词表正在下载（' + size + '），下载完这个按钮就能点。</div>';
    }

    view.innerHTML =
      '<div class="section-head">' +
        '<div class="sh-txt"><h2><span class="sh-emoji">✍️</span>默写区</h2>' +
        '<p>先选模块、再选方向，然后开始默写。一轮 ' + DT_ROUND + ' 题，答完立刻判对错；' +
        '不管对错，都会把音标、释义、例句和译文摆出来，点 🔊 还能听发音。</p></div>' +
      '</div>' +

      '<div class="dt-step"><span class="ds-n">1</span><h3>选一个模块</h3></div>' +
      '<div class="dt-lvs">' + lvCards + '</div>' +

      '<div class="dt-step" style="margin-top:26px"><span class="ds-n">2</span><h3>选出题方向</h3></div>' +
      '<div class="dt-modes">' + modeCards + '</div>' +

      '<div class="dt-go">' + ready +
        '<button class="btn btn-green dt-start" id="dtStart" type="button"' + (loaded && pool.length ? "" : " disabled") + '>' +
          '▶ 开始默写</button>' +
      '</div>' +

      '<div class="note" style="margin-top:24px">' +
        '<b>判分说明：</b>「看英文写中文」不要求一字不差 —— 只要写的中文里包含这个词的主要意思就算对' +
        '（比如 book 写「书」或「书本」都行）；「看中文拼英文」要求拼写完全正确，只忽略大小写，' +
        '如果只差一个字母会另外提示「差一点点」。所有作答只保存在你自己的浏览器里，不会上传。' +
      '</div>';

    $$("[data-dtlv]", view).forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.getAttribute("data-dtlv");
        var want = "#/dictate?lv=" + id;
        if (location.hash === want) { dt.levelId = id; dt.phase = "setup"; render(); }
        else location.hash = want;
      });
    });
    $$("[data-dtmode]", view).forEach(function (b) {
      b.addEventListener("click", function () {
        dt.mode = b.getAttribute("data-dtmode");
        render();
      });
    });
    var sb = $("#dtStart");
    if (sb && !sb.disabled) sb.addEventListener("click", function () { startDtRound(); });

    /* 选中的模块还没下载 → 页面上已经写着「正在下载」，这里直接把它拉回来，好了自动刷新这一页 */
    if (!loaded) ensureLevel(lv.id, function (id, st) { if (st === "ok") render(); });
  }

  function startDtRound() {
    var lv = levelOf(dt.levelId);
    var pool = dtWords(lv.id);
    if (!pool.length) { toast("这个模块还没有可用的单词，先换一个试试"); return; }
    var list = shuffle(pool.slice()).slice(0, Math.min(DT_ROUND, pool.length));
    var mode = dt.mode;
    dt = {
      levelId: lv.id, mode: mode, phase: "quiz", qLv: dt.qLv,
      list: list, idx: 0, score: 0, wrong: [], streak: 0, bestStreak: 0,
      input: "", answered: false, result: null,
      dirs: list.map(function () { return mode === "mix" ? (Math.random() < 0.5 ? "en2cn" : "cn2en") : mode; })
    };
    render();
  }

  function dtViewQuiz() {
    var q = dt.list[dt.idx];
    var en2cn = dt.dirs[dt.idx] === "en2cn";
    var n = dt.list.length;

    var prompt = en2cn
      ? '<div class="dt-ask-en"><b>' + esc(q.w) + '</b></div>' +
        (q.p ? '<div class="dt-ask-ipa">' + esc(q.p) + '</div>' : "") +
        '<button class="icon-btn speak" type="button" data-say="' + esc(q.w) + '" data-rate="0.78" title="听一下发音">🔊</button>'
      : '<div class="dt-ask-cn">' + esc(q.c) + '</div>';

    var fb = "";
    if (dt.answered && dt.result) {
      var ok = dt.result.ok;
      var cheLine = esc(dt.result.cheer || "");
      fb =
        '<div class="dt-fb ' + (ok ? "ok" : "bad") + '">' +
          '<div class="dt-mark" aria-hidden="true">' + (ok ? "✓" : "✕") + '</div>' +
          '<div class="dt-fb-txt">' +
            '<div class="dt-fb-title">' + cheLine + '</div>' +
            '<div class="dt-fb-ans">' +
              (ok ? "" : '<span class="dfa-mine">你的答案：<s>' + esc(str(dt.input) || "（没写）") + '</s></span>') +
              '<span class="dfa-right">正确答案：<b>' + esc(en2cn ? q.c : q.w) + '</b></span>' +
            '</div>' +
            (dt.result.close ? '<div class="dt-close">只差一个字母！再仔细看看拼写，下一轮准能写对。</div>' : "") +
          '</div>' +
        '</div>' +
        dtWordCard(q, { favable: !ok });
    }

    var asking = !dt.answered
      ? '<div class="dt-ask">' +
          '<input id="dtInput" class="dt-input" type="text" autocomplete="off" autocorrect="off" ' +
            'autocapitalize="off" spellcheck="false" placeholder="' +
            (en2cn ? "写出它的中文意思…" : "拼出这个英文单词…") + '">' +
          '<button class="btn btn-green" type="button" data-dt="submit">提交</button>' +
        '</div>' +
        '<div class="dt-kbd">按 Enter 提交 · ' +
          (en2cn ? "中文不用一字不差，写出主要意思就行" : "英文要拼写正确，大小写无所谓") + '</div>'
      : '<div class="dt-kbd">按 Enter 进入下一题</div>';

    /* 进度条与「已答」都按**已作答题数**算，不是当前题号 ——
       否则答完第一题时进度条还停在 0%、「已答」还显示 0，跟「答对 1」自相矛盾。 */
    var answeredN = dt.idx + (dt.answered ? 1 : 0);
    var pct = Math.round(answeredN / n * 100);

    view.innerHTML =
      '<div class="section-head">' +
        '<div class="sh-txt"><h2><span class="sh-emoji">✍️</span>默写区</h2>' +
        '<p>第 <b>' + (dt.idx + 1) + '</b> / ' + n + ' 题 · ' +
          esc(levelOf(dt.levelId).name) + ' · ' +
          esc((DT_MODES.filter(function (m) { return m.id === dt.mode; })[0] || DT_MODES[2]).name) + '</p></div>' +
        '<button class="btn btn-sm" type="button" data-dt="quit">← 退出默写</button>' +
      '</div>' +

      '<div class="dt-runbar">' +
        '<span class="db-track"><i style="width:' + pct + '%"></i></span>' +
        '<span class="db-num">答对 <b>' + dt.score + '</b> · 已答 <b>' + answeredN + '</b>' +
          (dt.streak >= 2 ? ' · 连对 <b>' + dt.streak + '</b>' : "") + '</span>' +
      '</div>' +

      '<div class="dt-q">' +
        '<div class="dt-dir">' + (en2cn ? "🔤 看英文，写中文" : "🈶 看中文，拼英文") + '</div>' +
        prompt +
        asking +
      '</div>' +

      fb;

    var inp = $("#dtInput");
    if (inp) {
      inp.addEventListener("keydown", function (e) {
        if (e.key === "Enter") { e.preventDefault(); e.stopPropagation(); dtSubmit(); }
      });
      setTimeout(function () { try { inp.focus(); } catch (e) {} }, 30);
    }
  }

  function dtSubmit() {
    if (!dt || dt.phase !== "quiz" || dt.answered) return;
    var inp = $("#dtInput");
    var val = inp ? inp.value : "";
    dt.input = val;
    var q = dt.list[dt.idx];
    var en2cn = dt.dirs[dt.idx] === "en2cn";
    var res = en2cn ? dtCheckCn(val, q.c) : dtCheckEn(val, q.w);
    dt.answered = true;
    if (res.ok) {
      dt.score++;
      dt.streak++;
      if (dt.streak > dt.bestStreak) dt.bestStreak = dt.streak;
    } else {
      dt.streak = 0;
      dt.wrong.push(q);
    }
    res.cheer = dtCheer(res.ok, dt.streak);
    dt.result = res;
    render();
  }

  function dtNext() {
    if (!dt || !dt.answered) return;
    dt.idx++;
    dt.answered = false;
    dt.result = null;
    dt.input = "";
    if (dt.idx >= dt.list.length) dt.phase = "done";
    render();
  }

  /* 退出默写 / 换个模块：都回到设置页，并**保留已选的模块与方向**。
     早先退出是直接 dt = null，下次进来 dt 被重建回默认值（levelId 空 + mode "mix"），
     于是「选了高中 + 看中文拼英文 → 答几题 → 退出 → 再点开始」会被悄悄换回「学前 + 混合」。
     想换的时候设置页就在眼前，多一步选择本来就是设计意图，不该由退出动作替用户改主意。 */
  function dtQuitToSetup() {
    if (!dt) { render(); return; }
    dt.phase = "setup";
    dt.list = null;
    dt.idx = 0;
    dt.score = 0;
    dt.wrong = [];
    dt.streak = 0;
    dt.bestStreak = 0;
    dt.answered = false;
    dt.result = null;
    dt.input = "";
    render();
  }

  function dtViewDone() {
    var total = dt.list.length, sc = dt.score;
    var pct = total ? Math.round(sc / total * 100) : 0;
    var emoji = sc === total ? "🏆" : pct >= 80 ? "🎉" : pct >= 60 ? "👍" : "💪";
    var txt = sc === total ? "全对！这个模块的词你已经很熟了，可以换个模块继续。"
      : pct >= 80 ? "答得很稳，把错的几个再过一遍就更牢了。"
      : pct >= 60 ? "及格啦，错的那几个用 🃏 抽卡复习再走一轮就记住了。"
      : "没关系，第一遍摸底本来就难 —— 把错词收藏起来，多默几轮就上来了。";

    var wrongHtml = dt.wrong.length
      ? '<div class="dt-wrong">' +
          '<div class="dt-step" style="margin-top:0"><span class="ds-n">✕</span><h3>这一轮写错的 ' + dt.wrong.length + ' 个词</h3></div>' +
          dt.wrong.map(function (x) { return dtWordCard(x, { favable: true }); }).join("") +
        '</div>'
      : '<div class="dt-perfect">🌟 全部答对，一个错词都没有！</div>';

    view.innerHTML =
      '<div class="section-head">' +
        '<div class="sh-txt"><h2><span class="sh-emoji">✍️</span>本轮默写成绩</h2>' +
        '<p>' + esc(levelOf(dt.levelId).name) + ' · ' +
          esc((DT_MODES.filter(function (m) { return m.id === dt.mode; })[0] || DT_MODES[2]).name) + ' · 共 ' + total + ' 题</p></div>' +
      '</div>' +

      '<div class="dt-done">' +
        '<span class="dd-emoji">' + emoji + '</span>' +
        '<div class="dd-score"><b>' + sc + '</b> / ' + total + '<span class="dd-pct">' + pct + '%</span></div>' +
        '<p class="dd-txt">' + esc(txt) + (dt.bestStreak >= 3 ? ' 本轮最长连对 <b>' + dt.bestStreak + '</b> 题。' : '') + '</p>' +
      '</div>' +

      '<div class="dt-actions">' +
        '<button class="btn btn-green" type="button" data-dt="again">🔁 再来一轮</button>' +
        (dt.wrong.length ? '<button class="btn btn-sm" type="button" data-dt="favwrong">⭐ 错词加入收藏</button>' : '') +
        '<button class="btn btn-sm" type="button" data-dt="setup">🔀 换个模块 / 换方向</button>' +
        '<a class="btn btn-sm" href="#/words/' + esc(dt.levelId) + '">🎒 去这个模块背单词</a>' +
      '</div>' +

      wrongHtml;

    var favb = $("#dtFavWrong");
    if (favb) favb.addEventListener("click", dtFavWrong);
  }

  function dtFavWrong() {
    if (!dt) return;
    var n = 0;
    dt.wrong.forEach(function (x) { if (!has(favs, x.id)) { favs.push(x.id); n++; } });
    if (n) { saveSet(KEY_FAV, favs); toast("已把 " + n + " 个错词加入收藏"); }
    else toast("这些错词都已经收藏过了");
    render();
  }

  /* =========================================================
     文章区
     ========================================================= */
  /* 把筛选条件写进地址栏，方便分享链接、也能用浏览器前进 / 后退 */
  function articlesHash(cat, lv) {
    var parts = [];
    if (cat && cat !== "all") parts.push("cat=" + encodeURIComponent(cat));
    if (lv && lv !== "all") parts.push("level=" + encodeURIComponent(lv));
    return "#/articles" + (parts.length ? "?" + parts.join("&") : "");
  }

  function renderArticles(query) {
    document.title = "文章区 · 英语星球";
    query = query || {};
    state.aCat = CATS[query.cat] ? query.cat : "all";
    state.aLevel = ALEVELS[query.level] ? query.level : "all";

    var catBtns = '<button class="fbtn ' + (state.aCat === "all" ? "on" : "") + '" data-acat="all" type="button">全部题材</button>' +
      Object.keys(CATS).map(function (k) {
        return '<button class="fbtn ' + (state.aCat === k ? "on" : "") + '" data-acat="' + k + '" type="button">' +
          CATS[k].emoji + " " + CATS[k].name + '</button>';
      }).join("");

    var lvBtns = '<button class="fbtn ' + (state.aLevel === "all" ? "on" : "") + '" data-alv="all" type="button">全部难度</button>' +
      Object.keys(ALEVELS).map(function (k) {
        return '<button class="fbtn ' + (state.aLevel === k ? "on" : "") + '" data-alv="' + k + '" type="button">' +
          ALEVELS[k].emoji + " " + k + '</button>';
      }).join("");

    var list = ARTICLES.filter(function (a) {
      return (state.aCat === "all" || a.cat === state.aCat) &&
             (state.aLevel === "all" || a.level === state.aLevel);
    });

    var cards = list.map(function (a) {
      var c = CATS[a.cat], lv = ALEVELS[a.level];
      var read = has(readArt, a.id);
      var wc = a.body.reduce(function (n, p) { return n + p.en.split(/\s+/).length; }, 0);
      return '<article class="a-card" data-aid="' + a.id + '" style="--ac:' + c.color2 + ';--ac2:#fff">' +
        '<div class="a-cover">' +
          '<span class="ac-emoji">' + a.emoji + '</span>' +
          '<span class="chip ac-level" style="background:' + lv.color + ';color:#fff">' + lv.emoji + " " + a.level + '</span>' +
          '<span class="chip ac-cat">' + c.emoji + " " + c.name + '</span>' +
        '</div>' +
        '<div class="a-body" style="--ac:' + c.color + '">' +
          '<h3>' + esc(a.title) + (read ? ' <span class="chip" style="background:#5CC98F;border-color:#2F2A44">✓ 已读</span>' : "") + '</h3>' +
          '<div class="a-cn">' + esc(a.titleCn) + '</div>' +
          '<p class="a-sum">' + esc(a.summary) + '</p>' +
          '<div class="a-meta"><span>📝 约 ' + wc + ' 词</span><span>⏱ ' + a.minutes + ' 分钟</span>' +
            '<span>🔑 ' + a.keyWords.length + ' 个生词</span></div>' +
        '</div>' +
      '</article>';
    }).join("");

    view.innerHTML =
      '<div class="section-head">' +
        '<div class="sh-txt"><h2><span class="sh-emoji">📖</span>文章区</h2>' +
        '<p>三类题材、三档难度。每篇都有中英对照、生词表和阅读理解题，可以先读英文再看中文。</p></div>' +
      '</div>' +
      '<div class="filter-row"><span class="fl-label">题材</span>' + catBtns + '</div>' +
      '<div class="filter-row"><span class="fl-label">难度</span>' + lvBtns + '</div>' +
      '<div class="a-grid">' + (cards || "") + '</div>' +
      (cards ? "" : '<div class="empty"><span class="em">📭</span>这个组合下暂时没有文章，换一个筛选试试。</div>');

    $$("[data-acat]", view).forEach(function (b) {
      b.addEventListener("click", function () {
        location.hash = articlesHash(b.getAttribute("data-acat"), state.aLevel);
      });
    });
    $$("[data-alv]", view).forEach(function (b) {
      b.addEventListener("click", function () {
        location.hash = articlesHash(state.aCat, b.getAttribute("data-alv"));
      });
    });
    $$("[data-aid]", view).forEach(function (c) {
      c.addEventListener("click", function () { location.hash = "#/articles/" + c.getAttribute("data-aid"); });
    });
  }

  function highlight(text, kws) {
    var out = esc(text);
    if (!kws.length) return out;
    var pats = kws.map(function (k) {
      return k.w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
    });
    var re = new RegExp("\\b(" + pats.join("|") + ")(s|es|ed|d|ing|er|est)?\\b", "gi");
    return out.replace(re, function (m, word) {
      var info = null;
      for (var i = 0; i < kws.length; i++) {
        if (kws[i].w.toLowerCase() === String(word).toLowerCase()) { info = kws[i]; break; }
      }
      var tip = info ? (word + " — " + info.c) : String(m);
      return '<span class="kw" title="' + esc(tip) + '">' + m + '</span>';
    });
  }

  function renderReader(id) {
    var a = null;
    for (var i = 0; i < ARTICLES.length; i++) { if (ARTICLES[i].id === id) { a = ARTICLES[i]; break; } }
    if (!a) { go("#/articles"); return; }

    document.title = a.title + " · 英语星球";
    var c = CATS[a.cat], lv = ALEVELS[a.level];

    if (!has(readArt, a.id)) { readArt.push(a.id); saveSet(KEY_READ, readArt); }

    var wc = a.body.reduce(function (n, p) { return n + p.en.split(/\s+/).length; }, 0);

    var paras = a.body.map(function (p, i) {
      return '<div class="para">' +
        '<p class="p-en">' + highlight(p.en, a.keyWords) + '</p>' +
        '<p class="p-cn' + (state.showCn ? "" : " hidden") + '">' + esc(p.cn) + '</p>' +
        '<div class="p-tools"><button class="btn btn-sm speak" type="button" data-say="' +
          esc(p.en).replace(/"/g, "&quot;") + '" data-rate="0.88">🔊 朗读本段</button></div>' +
      '</div>';
    }).join("");

    var kws = a.keyWords.map(function (k) {
      return '<div class="kw-item">' +
        '<div class="ki-txt"><div class="ki-w">' + esc(k.w) + '</div>' +
        '<div class="ki-p">' + esc(k.p) + '</div>' +
        '<div class="ki-c">' + esc(k.c) + '</div></div>' +
        '<button class="icon-btn speak" type="button" data-say="' + esc(k.w) + '" data-rate="0.8" title="朗读">🔊</button>' +
      '</div>';
    }).join("");

    var qs = a.questions.map(function (q, i) {
      return '<div class="q-item">' +
        '<div class="q-q">' + (i + 1) + ". " + esc(q.q) + '</div>' +
        '<button class="btn btn-sm" type="button" data-qa="1" style="margin-top:10px">👀 看参考答案</button>' +
        '<div class="q-a"><b>参考答案：</b>' + esc(q.a) + '</div>' +
      '</div>';
    }).join("");

    var idx = ARTICLES.indexOf(a);
    var prev = ARTICLES[idx - 1], next = ARTICLES[idx + 1];

    view.innerHTML =
      '<a class="btn btn-sm" href="#/articles" style="margin-bottom:16px">← 回到文章区</a>' +
      '<article class="reader" style="--ac:' + c.color2 + '">' +
        '<header class="reader-head">' +
          '<span class="rh-emoji">' + a.emoji + '</span>' +
          '<h1>' + esc(a.title) + '</h1>' +
          '<div class="rh-cn">' + esc(a.titleCn) + '</div>' +
          '<div class="rh-meta">' +
            '<span class="chip" style="background:' + c.color + ';color:#fff">' + c.emoji + " " + c.name + '</span>' +
            '<span class="chip" style="background:' + lv.color + ';color:#fff">' + lv.emoji + " " + a.level + " · " + lv.en + '</span>' +
            '<span class="chip">📝 约 ' + wc + ' 词</span>' +
            '<span class="chip">⏱ ' + a.minutes + ' 分钟</span>' +
          '</div>' +
          '<p style="margin-top:16px;font-size:14.5px;font-weight:600;color:#5B5473;line-height:1.8;max-width:70ch">' +
            esc(a.summary) + '</p>' +
        '</header>' +

        '<div class="reader-body">' +
          '<div class="toolbar" style="margin-top:0">' +
            '<button class="toggle ' + (state.showCn ? "on" : "") + '" id="transToggle" type="button"><span class="dot"></span>显示中文译文</button>' +
            '<button class="btn btn-sm" id="readAll" type="button">🔊 从头朗读全文</button>' +
            '<span class="hint">💡 黄色下划线是生词，鼠标悬停可看中文</span>' +
          '</div>' +
          paras +

          '<section class="reader-sec">' +
            '<h2>🔑 生词表</h2>' +
            '<div class="kw-list">' + kws + '</div>' +
          '</section>' +

          '<section class="reader-sec">' +
            '<h2>✏️ 阅读理解</h2>' +
            qs +
          '</section>' +
        '</div>' +

        '<div class="reader-nav">' +
          (prev ? '<a class="btn btn-sm" href="#/articles/' + prev.id + '">← ' + esc(prev.titleCn) + '</a>' : "<span></span>") +
          (next ? '<a class="btn btn-sm" href="#/articles/' + next.id + '">' + esc(next.titleCn) + ' →</a>' : "<span></span>") +
        '</div>' +
      '</article>';

    var tt = $("#transToggle");
    if (tt) tt.addEventListener("click", function () {
      state.showCn = !state.showCn;
      tt.classList.toggle("on", state.showCn);
      $$(".p-cn", view).forEach(function (el) { el.classList.toggle("hidden", !state.showCn); });
      try { localStorage.setItem(KEY_TRANS, state.showCn ? "1" : "0"); } catch (e) {}
    });

    var ra = $("#readAll");
    if (ra) ra.addEventListener("click", function () {
      speak(a.body.map(function (p) { return p.en; }).join(" "), 0.9, ra);
      toast("开始朗读全文，再次点击可重播");
    });

    $$("[data-qa]", view).forEach(function (b) {
      b.addEventListener("click", function () {
        var ans = b.nextElementSibling;
        ans.classList.toggle("show");
        b.textContent = ans.classList.contains("show") ? "🙈 收起参考答案" : "👀 看参考答案";
      });
    });
  }

  /* =========================================================
     我的进度
     ========================================================= */
  function renderProgress() {
    document.title = "我的进度 · 英语星球";

    var pct = TOTAL_WORDS ? Math.round(learned.length / TOTAL_WORDS * 100) : 0;
    var C = 2 * Math.PI * 48;

    var rows = LEVELS.map(function (l) {
      var n = levelTotal(l);
      var d = countLearned(l.id);
      var p = n ? Math.round(d / n * 100) : 0;
      return '<div class="lv-bar-row">' +
        '<span class="lb-name">' + l.emoji + " " + esc(l.name) + '</span>' +
        '<span class="lb-track"><span class="lb-fill" style="width:' + p + "%;background:" + l.color + '"></span></span>' +
        '<span class="lb-num">' + d + "/" + n + '</span>' +
      '</div>';
    }).join("");

    var favChips = favs.length
      ? favs.map(function (id) {
          return '<span class="fav-chip">⭐ ' + esc(id.split("::")[1] || id) + '</span>';
        }).join("")
      : '<p style="font-size:13.5px;font-weight:700;color:#8B85A0">还没有收藏的单词。在单词区点 ⭐ 就会出现在这里。</p>';

    var readChips = readArt.length
      ? readArt.map(function (id) {
          var t = id;
          for (var i = 0; i < ARTICLES.length; i++) { if (ARTICLES[i].id === id) { t = ARTICLES[i].titleCn; break; } }
          return '<span class="fav-chip">📖 ' + esc(t) + '</span>';
        }).join("")
      : '<p style="font-size:13.5px;font-weight:700;color:#8B85A0">还没有读过的文章。去文章区挑一篇吧。</p>';

    view.innerHTML =
      '<div class="section-head">' +
        '<div class="sh-txt"><h2><span class="sh-emoji">🏅</span>我的进度</h2>' +
        '<p>进度保存在这台电脑的浏览器里，不会上传，关掉页面下次打开也还在。</p></div>' +
      '</div>' +

      '<div class="pg-grid">' +
        '<div class="pg-card">' +
          '<h3>📊 单词总进度</h3>' +
          '<div class="pc-sub">' + LEVELS.length + ' 个模块合计 ' + TOTAL_WORDS + ' 个单词</div>' +
          '<div class="ring-wrap">' +
            '<svg class="ring" viewBox="0 0 120 120">' +
              '<circle class="rg-bg" cx="60" cy="60" r="48"></circle>' +
              '<circle class="rg-fg" cx="60" cy="60" r="48" stroke-dasharray="' + C.toFixed(1) + '" stroke-dashoffset="' + (C * (1 - pct / 100)).toFixed(1) + '"></circle>' +
            '</svg>' +
            '<div class="ring-txt">' +
              '<div class="ring-num">' + pct + '%</div>' +
              '<p>已学会 <b>' + learned.length + '</b> / ' + TOTAL_WORDS + ' 个单词<br>' +
              '收藏 <b>' + favs.length + '</b> 个 · 已读 <b>' + readArt.length + '</b> 篇文章</p>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div class="pg-card">' +
          '<h3>🎯 各模块进度</h3>' +
          '<div class="pc-sub">点开任意一个模块继续学习</div>' +
          '<div class="lv-bars">' + rows + '</div>' +
        '</div>' +

        '<div class="pg-card" style="grid-column:1/-1">' +
          '<h3>⭐ 我的收藏</h3>' +
          '<div class="fav-wrap">' + favChips + '</div>' +
          '<h3 style="margin-top:24px">📖 读过的文章</h3>' +
          '<div class="fav-wrap">' + readChips + '</div>' +
          '<div style="margin-top:26px;display:flex;gap:10px;flex-wrap:wrap">' +
            '<button class="btn btn-sm" id="resetProgress" type="button">🧹 清空全部学习记录</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    var rp = $("#resetProgress");
    if (rp) rp.addEventListener("click", function () {
      if (!window.confirm("确定要清空全部学习记录吗？已学会标记、收藏和阅读记录都会被删除，且无法恢复。")) return;
      learned = []; favs = []; readArt = [];
      saveSet(KEY_LEARNED, learned); saveSet(KEY_FAV, favs); saveSet(KEY_READ, readArt);
      toast("已清空学习记录");
      renderProgress();
    });
  }

  /* =========================================================
     全局事件代理
     ========================================================= */
  document.addEventListener("click", function (e) {
    var t = e.target;
    if (!t || !t.closest) return;

    /* 朗读 */
    var sp = t.closest(".speak");
    if (sp) {
      e.preventDefault();
      var rate = parseFloat(sp.getAttribute("data-rate") || "0");
      speak(sp.getAttribute("data-say") || "", rate || 0.92, sp);
      return;
    }

    /* 默写区：提交 / 下一题 / 退出 / 再来一轮 / 错词收藏 / 回设置页 */
    var dtb = t.closest("[data-dt]");
    if (dtb) {
      e.preventDefault();
      var dtAct = dtb.getAttribute("data-dt");
      if (dtAct === "submit") dtSubmit();
      else if (dtAct === "next") dtNext();
      else if (dtAct === "quit") { dtQuitToSetup(); }
      else if (dtAct === "again") { startDtRound(); }
      else if (dtAct === "favwrong") { dtFavWrong(); }
      else if (dtAct === "setup") { dtQuitToSetup(); }
      return;
    }

    /* 标记已学会 */
    var mk = t.closest("[data-mark]");
    if (mk) {
      e.preventDefault();
      var row = mk.closest("[data-wid]");
      if (!row) return;
      var id = row.getAttribute("data-wid");
      var nowOn = toggleIn(learned, id);
      saveSet(KEY_LEARNED, learned);
      mk.classList.toggle("on", nowOn);
      row.classList.toggle("learned", nowOn);
      toast(nowOn ? "✓ 已标记为学会" : "已取消标记");
      refreshWordView();
      return;
    }

    /* 收藏 */
    var fv = t.closest("[data-fav]");
    if (fv) {
      e.preventDefault();
      var row2 = fv.closest("[data-wid]");
      if (!row2) return;
      var id2 = row2.getAttribute("data-wid");
      var on = toggleIn(favs, id2);
      saveSet(KEY_FAV, favs);
      fv.classList.toggle("fav", on);
      toast(on ? "⭐ 已加入收藏" : "已取消收藏");
      refreshWordView();
      return;
    }

    /* 展开 / 收起单词拓展卡片 */
    var mx = t.closest("[data-wexp]");
    if (mx) {
      e.preventDefault();
      var row3 = mx.closest("[data-wid]");
      if (!row3) return;
      var id3 = row3.getAttribute("data-wid");
      var nowOpen = toggleIn(wexp, id3);
      saveSet(KEY_WEXP, wexp);
      row3.classList.toggle("w-open", nowOpen);
      mx.classList.toggle("on", nowOpen);
      return;
    }

    /* 分组折叠 */
    var gh = t.closest("[data-collapse]");
    if (gh) {
      var grp = gh.closest(".group");
      if (!grp) return;
      var key = grp.getAttribute("data-gkey");
      grp.classList.toggle("collapsed");
      if (key) {
        toggleIn(collapsed, key);
        saveSet(KEY_COLLAPSE, collapsed);
      }
      return;
    }
  });

  /* 默写区：答完一题后按 Enter 进入下一题。
     （输入框里的 Enter 由输入框自己的监听器处理，并且 stopPropagation，所以不会在这里被当成「下一题」） */
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter") return;
    if (!dt || dt.phase !== "quiz" || !dt.answered) return;
    if (currentRoute().name !== "dictate") return;
    e.preventDefault();
    dtNext();
  });

  /* 启动 */
  render();
})();
