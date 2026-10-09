/* 语法数据（第 5 批）—— 从句 5 个（状语从句系列）+ 非谓语动词 5 个 + 特殊句式与综合 3 个
   追加进 window.GRAMMAR_DATA；字段口径与 data-grammar.js 完全一致。
   本文件只新增，不修改任何已有语法点。本批完成后语法点总数 50 个。 */
(function () {
  "use strict";

  var NEW = [
    /* ==================== 从句（状语从句） ==================== */
    {
      id: "adverbial-time", cat: "从句", name: "时间状语从句", en: "Adverbial Clauses of Time", emoji: "⏱️",
      level: "入门", color: "#4DABF7",
      intro: "时间状语从句说「什么时候」。真正的考点有两个：when / while / as 的细微差别，以及「主将从现」——从句里不用 will。",
      form: [
        { k: "when", v: "从句动作可长可短，既可指时间点，也可指时间段" },
        { k: "while", v: "只指时间段，从句动词必须是延续性的（常用进行时）" },
        { k: "as", v: "强调「一边……一边……」，两个动作同步发生" },
        { k: "not…until", v: "直到……才；主句用否定式" },
        { k: "常见连词", v: "before / after / as soon as / since / until / by the time" },
        { k: "主将从现", v: "主句是将来时，时间状语从句用一般现在时" }
      ],
      usages: [
        { u: "when 引导时间状语从句。", eg: "When I got home, my mother was cooking.", t: "我到家时，妈妈正在做饭。" },
        { u: "while 引导（后接进行时）。", eg: "While I was reading, he was watching TV.", t: "我在看书的时候，他在看电视。" },
        { u: "as soon as 表示「一……就……」。", eg: "I will call you as soon as I arrive.", t: "我一到就给你打电话。" },
        { u: "not…until 表示「直到……才」。", eg: "He didn't go to bed until he finished his homework.", t: "他直到做完作业才睡觉。" }
      ],
      mistakes: [
        "❌ While I got home, my mother was cooking. → ✅ When I got home, my mother was cooking.（got 是瞬间动作，不用 while）",
        "❌ I will call you as soon as I will arrive. → ✅ I will call you as soon as I arrive.（时间状语从句用一般现在时表将来）",
        "❌ He went to bed until he finished his homework. → ✅ He didn't go to bed until he finished his homework.（not…until 结构，主句要否定）"
      ]
    },
    {
      id: "adverbial-condition", cat: "从句", name: "条件状语从句", en: "Adverbial Clauses of Condition", emoji: "🎚️",
      level: "入门", color: "#20C997",
      intro: "条件状语从句说「如果……」。最常考的一条规则还是「主将从现」：主句用将来时，if 从句用一般现在时。",
      form: [
        { k: "if", v: "如果（真实条件）" },
        { k: "unless", v: "除非（= if…not，本身已含否定意义）" },
        { k: "as long as", v: "只要" },
        { k: "in case", v: "以防万一（后接一般现在时）" },
        { k: "主将从现", v: "if 从句用一般现在时，主句用一般将来时 / 情态动词 / 祈使句" }
      ],
      usages: [
        { u: "if 引导真实条件句。", eg: "If it is fine tomorrow, we will go hiking.", t: "如果明天天晴，我们就去远足。" },
        { u: "unless = if not。", eg: "You will fail unless you work harder.", t: "除非你更努力，否则会不及格。" },
        { u: "as long as 表条件。", eg: "You can go out as long as you finish your homework first.", t: "只要你先把作业做完，就可以出去。" },
        { u: "主句用祈使句。", eg: "If you see him, tell him to call me.", t: "如果你见到他，让他给我打电话。" }
      ],
      mistakes: [
        "❌ If it will rain tomorrow, we will stay at home. → ✅ If it rains tomorrow, we will stay at home.（主将从现）",
        "❌ Unless you don't hurry, you will be late. → ✅ Unless you hurry, you will be late.（unless 本身已含否定，不能再加 don't）",
        "❌ I will go if he will invite me. → ✅ I will go if he invites me.（条件从句用一般现在时表将来）"
      ]
    },
    {
      id: "adverbial-concession", cat: "从句", name: "让步状语从句", en: "Adverbial Clauses of Concession", emoji: "🌗",
      level: "中级", color: "#FFD43B",
      intro: "让步状语从句说「虽然、即使」。基础规则是「although 和 but 不能同时出现」，进阶考点则是 no matter + 疑问词，以及 as / though 引导的倒装。",
      form: [
        { k: "although / though", v: "虽然（不能与 but 连用）" },
        { k: "even if / even though", v: "即使 / 尽管" },
        { k: "no matter + 疑问词", v: "no matter where = wherever；no matter what = whatever（表让步时）" },
        { k: "as / though 引导倒装", v: "把表语、状语或动词原形提到句首：Tired as he was…" },
        { k: "while 也可表让步", v: "意为「虽然」，多放在句首" }
      ],
      usages: [
        { u: "although 引导让步从句。", eg: "Although it was raining, we went out.", t: "虽然在下雨，我们还是出门了。" },
        { u: "even if 表「即使」。", eg: "Even if you fail, you should not give up.", t: "即使失败，你也不该放弃。" },
        { u: "no matter + 疑问词。", eg: "No matter what happens, I will stay with you.", t: "无论发生什么，我都会陪着你。" },
        { u: "as 引导的倒装让步句。", eg: "Tired as he was, he kept working.", t: "虽然很累，他还是继续工作。" }
      ],
      mistakes: [
        "❌ Although it was late, but he kept working. → ✅ Although it was late, he kept working.（although 与 but 不能同时出现）",
        "❌ No matter what you say, but I won't change my mind. → ✅ No matter what you say, I won't change my mind.（no matter what 不与 but 连用）",
        "❌ As he was tired, he kept working. → ✅ Tired as he was, he kept working.（as 表让步时必须用倒装）"
      ]
    },
    {
      id: "adverbial-rpr", cat: "从句", name: "原因·目的·结果状语从句", en: "Clauses of Reason, Purpose & Result", emoji: "🧭",
      level: "中级", color: "#FFA94D",
      intro: "三类从句放在一起记更清楚：because / since / as 讲原因，so that / in order that 讲目的，so…that / such…that 讲结果——它们的「强度」和搭配各有讲究。",
      form: [
        { k: "原因", v: "because（最强，回答 why）/ since（既然）/ as（由于，常放句首）" },
        { k: "目的", v: "so that / in order that + 从句（常带 can / could / may / might）" },
        { k: "结果（so）", v: "so + adj. / adv. + that…" },
        { k: "结果（such）", v: "such + (a/an) + adj. + n. + that…" },
        { k: "互斥规则", v: "because 与 so 不能同时出现" }
      ],
      usages: [
        { u: "because 表直接原因。", eg: "He was late because the traffic was heavy.", t: "他迟到是因为交通拥堵。" },
        { u: "so that 表目的。", eg: "She gets up early so that she can catch the first bus.", t: "她早起是为了赶上首班车。" },
        { u: "so…that 表结果（so 后接形容词或副词）。", eg: "The box was so heavy that I couldn't move it.", t: "箱子太重了，我搬不动。" },
        { u: "such…that 表结果（such 后接名词短语）。", eg: "It was such a good film that we watched it twice.", t: "这部电影太好了，我们看了两遍。" }
      ],
      mistakes: [
        "❌ Because he was ill, so he didn't come. → ✅ Because he was ill, he didn't come.（because 与 so 不能同时出现）",
        "❌ The film was such good that we watched it twice. → ✅ The film was so good that we watched it twice.（so + 形容词；such + 名词短语）",
        "❌ He studied hard so that pass the exam. → ✅ He studied hard so that he could pass the exam.（so that 后接完整句子）"
      ]
    },
    {
      id: "adverbial-pmc", cat: "从句", name: "地点、方式与比较状语从句", en: "Clauses of Place, Manner & Comparison", emoji: "🗺️",
      level: "进阶", color: "#F783AC",
      intro: "这三类从句占比不大，但各有一个必考点：where 引导地点、as 引导方式（「正如」）、as…as 与 than 引导比较。",
      form: [
        { k: "地点", v: "where / wherever（= no matter where）" },
        { k: "方式", v: "as（正如）/ as if / as though" },
        { k: "比较（同级）", v: "as + 原级 + as；否定用 not so / as + 原级 + as" },
        { k: "比较（不同级）", v: "比较级 + than" },
        { k: "特殊结构", v: "the + 比较级…, the + 比较级…（越……越……）" }
      ],
      usages: [
        { u: "where 引导地点状语从句。", eg: "Put the book where you found it.", t: "把书放回你拿到它的地方。" },
        { u: "wherever 表示「无论哪里」。", eg: "Wherever you go, I will follow you.", t: "无论你去哪里，我都跟着你。" },
        { u: "as 表示方式「正如、按照」。", eg: "Do as I told you.", t: "按我告诉你的去做。" },
        { u: "than 引导比较状语从句。", eg: "He runs faster than I do.", t: "他跑得比我快。" }
      ],
      mistakes: [
        "❌ Put the book where did you find it. → ✅ Put the book where you found it.（从句用陈述语序）",
        "❌ He runs faster than I am. → ✅ He runs faster than I do. / ✅ He runs faster than me.（比较对象要一致，不能拿「跑」和「是」比）",
        "❌ The more you read, the much you know. → ✅ The more you read, the more you know.（the more…the more 结构前后要对应）"
      ]
    },

    /* ==================== 非谓语动词 ==================== */
    {
      id: "infinitive", cat: "非谓语动词", name: "动词不定式", en: "The Infinitive", emoji: "🎯",
      level: "中级", color: "#4DABF7",
      intro: "不定式 to do 是非谓语里最活跃的一种，能在句子里当主语、宾语、表语、定语、状语、补语——几乎没有它坐不了的位置。",
      form: [
        { k: "形式", v: "(to) do；否定式 not to do" },
        { k: "可作成分", v: "主语、宾语、表语、定语、状语、宾语补足语" },
        { k: "疑问词 + 不定式", v: "how / what / when / where / whether + to do" },
        { k: "省略 to 的情况", v: "感官动词和使役动词后（see sb do / make sb do）；but / except 前有 do 时" },
        { k: "时态与语态", v: "to be doing（进行）/ to have done（完成）/ to be done（被动）" }
      ],
      usages: [
        { u: "作宾语。", eg: "I hope to see you soon.", t: "我希望尽快见到你。" },
        { u: "作状语表目的。", eg: "He got up early to catch the train.", t: "他早起是为了赶火车。" },
        { u: "疑问词 + 不定式。", eg: "I don't know how to solve the problem.", t: "我不知道怎么解决这个问题。" },
        { u: "作定语（常与 the first / the last / the only 连用）。", eg: "She is always the first to come.", t: "她总是第一个到。" }
      ],
      mistakes: [
        "❌ I want going home. → ✅ I want to go home.（want 后接不定式）",
        "❌ He decided to not go. → ✅ He decided not to go.（不定式的否定式是 not to do）",
        "❌ I don't know what to do it. → ✅ I don't know what to do. / ✅ I don't know how to do it.（what 本身作 do 的宾语，后面不能再加 it）"
      ]
    },
    {
      id: "gerund", cat: "非谓语动词", name: "动名词", en: "The Gerund", emoji: "🔄",
      level: "中级", color: "#20C997",
      intro: "动名词 doing 兼有动词和名词的性质，可以当主语和宾语。难点在于：哪些动词后面只接 doing、不接 to do。",
      form: [
        { k: "形式", v: "doing；否定式 not doing；被动式 being done；完成式 having done" },
        { k: "只接动名词的动词", v: "enjoy / finish / mind / suggest / practice / avoid / keep / miss / consider" },
        { k: "介词后", v: "一律用 doing（be good at doing / be interested in doing）" },
        { k: "意思不同的两组", v: "remember / forget / stop / try / go on：接 doing 与接 to do 含义不同" },
        { k: "常用句型", v: "It's no use / good doing…；be busy doing…；spend time (in) doing…" }
      ],
      usages: [
        { u: "作主语。", eg: "Reading is my favourite hobby.", t: "阅读是我最喜欢的爱好。" },
        { u: "只接动名词的动词。", eg: "She finished writing the report at midnight.", t: "她半夜写完了报告。" },
        { u: "介词后接动名词。", eg: "Thank you for helping me.", t: "谢谢你帮我。" },
        { u: "固定句型 It's no use doing…", eg: "It's no use crying over spilt milk.", t: "覆水难收（为打翻的牛奶哭泣没有用）。" }
      ],
      mistakes: [
        "❌ I enjoy to read books. → ✅ I enjoy reading books.（enjoy 后接动名词）",
        "❌ He is interested in learn English. → ✅ He is interested in learning English.（介词后接动名词）",
        "❌ 想说「离开时记得关灯」：Remember turning off the light when you leave. → ✅ Remember to turn off the light when you leave.（remember to do 记得去做；remember doing 记得做过）"
      ]
    },
    {
      id: "participle-now", cat: "非谓语动词", name: "现在分词", en: "The Present Participle", emoji: "🌊",
      level: "进阶", color: "#FFA94D",
      intro: "现在分词 -ing 与逻辑主语是主动、进行的关系。它能当定语、状语和补语，一身兼数职，但有一条铁律：它的逻辑主语必须和主句主语一致。",
      form: [
        { k: "形式", v: "doing；被动式 being done；完成式 having done；完成被动式 having been done" },
        { k: "作定语", v: "单个分词放名词前，分词短语放名词后（the girl standing by the window）" },
        { k: "作状语", v: "时间、原因、条件、伴随、结果" },
        { k: "作补语", v: "感官动词 see / hear / watch / feel + 宾语 + doing（强调正在进行）" },
        { k: "独立主格", v: "分词的逻辑主语与主句主语不一致时，分词自带主语" }
      ],
      usages: [
        { u: "作定语。", eg: "The girl standing by the window is my sister.", t: "站在窗边的女孩是我妹妹。" },
        { u: "作状语表伴随。", eg: "He sat by the fire, reading a book.", t: "他坐在火边看书。" },
        { u: "作状语表时间。", eg: "Walking down the street, I met an old friend.", t: "走在街上时，我遇到一位老朋友。" },
        { u: "作宾语补足语。", eg: "I saw him crossing the street.", t: "我看见他正在过马路。" }
      ],
      mistakes: [
        "❌ The girl stands by the window is my sister. → ✅ The girl standing by the window is my sister.（作定语要用分词，不能再用谓语动词）",
        "❌ Walking down the street, an old friend met me. → ✅ Walking down the street, I met an old friend.（分词的逻辑主语要与主句主语一致）",
        "❌ I saw him cross the street. → ✅ I saw him crossing the street.（想说「看见他正在过马路」，用 doing 强调进行）"
      ]
    },
    {
      id: "participle-past", cat: "非谓语动词", name: "过去分词", en: "The Past Participle", emoji: "🪨",
      level: "进阶", color: "#FF8FA3",
      intro: "过去分词 done 表示被动或完成。它最常出现在定语和状语位置，也是「不及物动词的过去分词只表完成、不表被动」这条规则的来源。",
      form: [
        { k: "形式", v: "done（本身含被动或完成的意义）" },
        { k: "作定语", v: "a broken cup（被打破的杯子）/ the book written by Lu Xun" },
        { k: "作状语", v: "时间、原因、条件、伴随（Tired after the walk, we sat down.）" },
        { k: "作补语", v: "have / get sth done / see sth done" },
        { k: "注意", v: "不及物动词的过去分词只表完成：fallen leaves（落叶）、a returned student（归国学生）" }
      ],
      usages: [
        { u: "作定语表被动。", eg: "The window broken by the boy has been repaired.", t: "被那个男孩打破的窗户已经修好了。" },
        { u: "作状语表原因。", eg: "Tired after the long walk, we sat down to rest.", t: "长途步行后很累，我们坐下来休息。" },
        { u: "作状语表条件。", eg: "Given more time, we could do it better.", t: "如果给更多时间，我们能做得更好。" },
        { u: "作宾语补足语。", eg: "He found his wallet stolen.", t: "他发现钱包被偷了。" }
      ],
      mistakes: [
        "❌ The window breaking by the boy has been repaired. → ✅ The window broken by the boy has been repaired.（被动关系用过去分词）",
        "❌ Tiring after the long walk, we sat down to rest. → ✅ Tired after the long walk, we sat down to rest.（人感到累用 -ed）",
        "❌ He found his wallet stealing. → ✅ He found his wallet stolen.（钱包是被偷的，用过去分词）"
      ]
    },
    {
      id: "nonfinite-choice", cat: "非谓语动词", name: "非谓语动词的选用", en: "Choosing the Right Non-finite Form", emoji: "🧭",
      level: "进阶", color: "#9775FA",
      intro: "三个问题决定一切：逻辑主语是主动还是被动？动作是目的还是伴随？动作有没有先于谓语发生？回答完这三个问题，doing / done / to do 自然就定下来了。",
      form: [
        { k: "主动、进行", v: "用 doing" },
        { k: "被动、完成", v: "用 done" },
        { k: "表示目的或将来", v: "用 to do" },
        { k: "先于谓语发生", v: "用 having done / having been done" },
        { k: "只能接一种的动词要背牢", v: "enjoy doing / decide to do / mind doing / hope to do" },
        { k: "独立主格", v: "非谓语的逻辑主语与主句主语不同时，自带逻辑主语（The work done, we went home.）" }
      ],
      usages: [
        { u: "主动关系用 doing，被动关系用 done。", eg: "Seeing the teacher, the students stopped talking. / Seen from the hill, the town looks beautiful.", t: "看见老师，学生们停止了说话。/ 从山上看，小镇很美。" },
        { u: "表示目的用 to do。", eg: "He came here to see you.", t: "他来这儿是为了见你。" },
        { u: "表示先发生用完成式。", eg: "Having finished his work, he went home.", t: "做完工作后，他回家了。" },
        { u: "独立主格结构。", eg: "The work done, we went home.", t: "工作做完了，我们回家了。" }
      ],
      mistakes: [
        "❌ Seen from the hill, we found the town beautiful. → ✅ Seen from the hill, the town looks beautiful.（seen 的逻辑主语应该是 town）",
        "❌ He came here seeing you. → ✅ He came here to see you.（表目的用不定式）",
        "❌ Finished his work, he went home. → ✅ Having finished his work, he went home.（动作先于谓语发生，用完成式）"
      ]
    },

    /* ==================== 特殊句式与综合 ==================== */
    {
      id: "inversion", cat: "特殊句式与综合", name: "倒装句", en: "Inversion", emoji: "🔃",
      level: "进阶", color: "#FFD43B",
      intro: "倒装分两种：把整个谓语搬到主语前是「完全倒装」，只把助动词搬过来是「部分倒装」。记住一条：否定词放句首，永远选部分倒装。",
      form: [
        { k: "完全倒装", v: "There be / Here comes the bus / On the hill stands a tree（谓语多为 be / come / go / stand）" },
        { k: "部分倒装（否定词开头）", v: "never / hardly / seldom / little / not only / no sooner 置句首" },
        { k: "部分倒装（only）", v: "only + 状语放句首时，主句部分倒装" },
        { k: "so / neither / nor 开头", v: "表「也」或「也不」：So do I. / Neither did he." },
        { k: "省略 if 的虚拟条件句", v: "Were I you… / Had I known… / Should it rain…" }
      ],
      usages: [
        { u: "否定词放句首，部分倒装。", eg: "Never have I seen such a beautiful sunset.", t: "我从没见过这么美的日落。" },
        { u: "only + 状语放句首，主句倒装。", eg: "Only in this way can we solve the problem.", t: "只有用这种方法，我们才能解决这个问题。" },
        { u: "so / neither 表「也 / 也不」。", eg: "He likes music. So do I.", t: "他喜欢音乐，我也喜欢。" },
        { u: "虚拟条件句省略 if 时的倒装。", eg: "Had I known the truth, I would have told you.", t: "要是我早知道真相，就告诉你了。" }
      ],
      mistakes: [
        "❌ Never I have seen such a film. → ✅ Never have I seen such a film.（否定词开头要部分倒装）",
        "❌ Only then he realized his mistake. → ✅ Only then did he realize his mistake.（only + 状语置句首，主句倒装）",
        "❌ — He likes music. — So I do. → ✅ — He likes music. — So do I.（So + 助动词 + 主语 = 我也是；So + 主语 + 助动词 = 确实如此）"
      ]
    },
    {
      id: "emphasis", cat: "特殊句式与综合", name: "强调句", en: "The Emphatic Pattern", emoji: "🔆",
      level: "进阶", color: "#5CC98F",
      intro: "强调句的骨架是「It is / was + 被强调部分 + that / who + 其他」。检验方法很简单：把 It is 和 that 去掉，剩下的如果还是完整句子，就是强调句。",
      form: [
        { k: "基本结构", v: "It is / was + 被强调部分 + that（人也可用 who）+ 其他" },
        { k: "能强调什么", v: "主语、宾语、状语都能强调，唯独不能强调谓语" },
        { k: "that / who", v: "强调人时 that 或 who 都行；强调物或状语只能用 that" },
        { k: "时态", v: "原句是现在时用 is，过去时用 was" },
        { k: "强调 not…until", v: "It is / was not until… + that…" },
        { k: "强调谓语", v: "用 do / does / did：He did come yesterday." }
      ],
      usages: [
        { u: "强调主语。", eg: "It was Li Ming that / who helped me.", t: "是李明帮了我。" },
        { u: "强调状语。", eg: "It was in the park that I met her.", t: "我是在公园遇见她的。" },
        { u: "强调 not…until 结构。", eg: "It was not until midnight that he came back.", t: "直到午夜他才回来。" },
        { u: "检验方法：去掉 It is / that 后仍是完整句子。", eg: "It was Li Ming that helped me. → Li Ming helped me.（完整，所以是强调句）", t: "去框后「李明帮了我」依然完整，说明是强调句。" }
      ],
      mistakes: [
        "❌ It was Li Ming which helped me. → ✅ It was Li Ming who / that helped me.（强调人不用 which）",
        "❌ It is in the park where I met her. → ✅ It is in the park that I met her.（强调句只能用 that / who，不用 where）",
        "❌ It was not until midnight when he came back. → ✅ It was not until midnight that he came back.（not until 的强调句用 that）"
      ]
    },
    {
      id: "ellipsis", cat: "特殊句式与综合", name: "省略句", en: "Ellipsis", emoji: "✂️",
      level: "进阶", color: "#F783AC",
      intro: "英语不喜欢重复：并列句、状语从句、不定式里都可以省略相同的成分。省略得好，句子更地道；省略错了，句子就不成立。",
      form: [
        { k: "并列句省略重复成分", v: "I like tea, and he (likes) coffee." },
        { k: "状语从句省略「主语 + be」", v: "When (he was) young, he liked drawing." },
        { k: "不定式省略 to 后的动词", v: "I asked him to go, but he didn't want to." },
        { k: "保留 be / have", v: "省略的动词是 be 或 have 时，to 后保留 be / have；否则保留 to" },
        { k: "常见省略答语", v: "— Would you like to join us? — I'd love to." }
      ],
      usages: [
        { u: "状语从句省略主语和 be。", eg: "When young, he liked drawing.", t: "他小时候喜欢画画。" },
        { u: "并列句省略重复的谓语。", eg: "She was reading, and her brother doing his homework.", t: "她在看书，她弟弟在做作业。" },
        { u: "不定式省略动词，保留 to。", eg: "You may go if you want to.", t: "你想去的话就去吧。" },
        { u: "so / neither 的省略答语。", eg: "— I'm tired. — So am I.", t: "——我累了。——我也是。" }
      ],
      mistakes: [
        "❌ When he young, he liked drawing. → ✅ When young, he liked drawing.（省略要连 be 一起省掉）",
        "❌ I asked him to go, but he didn't want. → ✅ I asked him to go, but he didn't want to.（句末要保留 to）",
        "❌ — Would you like to join us? — Yes, I'd love. → ✅ — Yes, I'd love to.（省略后 to 不能丢）"
      ]
    }
  ];

  window.GRAMMAR_DATA = (window.GRAMMAR_DATA || []).concat(NEW);
})();
