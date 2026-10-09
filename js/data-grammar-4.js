/* 语法数据（第 4 批）—— 语态·情态·语气 5 个 + 从句 5 个
   追加进 window.GRAMMAR_DATA；字段口径与 data-grammar.js 完全一致。
   本文件只新增，不修改任何已有语法点。 */
(function () {
  "use strict";

  var NEW = [
    /* ==================== 语态·情态·语气 ==================== */
    {
      id: "modal-speculation", cat: "语态·情态·语气", name: "情态动词表推测", en: "Modals for Deduction", emoji: "🔮",
      level: "中级", color: "#4DABF7",
      intro: "must / may / might / could / can't 不只表「必须、可以」，还能表「推测」。把可能性从高到低排成一条线，意思就一目了然了。",
      form: [
        { k: "可能性排序（肯定）", v: "must（一定）> should（应该）> may（也许）> might / could（可能，语气最弱）" },
        { k: "否定推测", v: "can't / couldn't 表示「不可能」；may not / might not 表示「可能不」" },
        { k: "基本结构", v: "情态动词 + be / 动词原形（后接 be 或实义动词，不加 to）" },
        { k: "对正在发生的动作推测", v: "情态动词 + be doing" }
      ],
      usages: [
        { u: "must 表肯定推测「一定」。", eg: "The light is on — he must be at home.", t: "灯亮着——他一定在家。" },
        { u: "can't 表否定推测「不可能」。", eg: "That can't be Tom; he is in Shanghai.", t: "那不可能是汤姆，他在上海。" },
        { u: "may / might 表不确定的推测。", eg: "She may come to the party, but she isn't sure yet.", t: "她也许会来参加聚会，但还不确定。" },
        { u: "对正在发生的动作推测，用 be doing。", eg: "They must be playing football on the playground.", t: "他们一定在操场上踢足球。" }
      ],
      mistakes: [
        "❌ He mustn't be at home — the light is off. → ✅ He can't be at home — the light is off.（否定推测用 can't；mustn't 表「禁止」）",
        "❌ He must be at home yesterday. → ✅ He must have been at home yesterday.（推测过去的事要用 must have done）",
        "❌ It may is true. → ✅ It may be true.（情态动词后接动词原形，不能接 is）"
      ]
    },
    {
      id: "modal-perfect", cat: "语态·情态·语气", name: "情态动词 + 完成式", en: "Modal + Have Done", emoji: "🕰️",
      level: "进阶", color: "#FF8FA3",
      intro: "「情态动词 + have done」用来对过去的事发表看法：一定发生过、不可能发生、本来应该做、本不必做……这是考试里区分度最高的结构之一。",
      form: [
        { k: "must have done", v: "对过去的肯定推测：一定做过" },
        { k: "can't / couldn't have done", v: "对过去的否定推测：不可能做过" },
        { k: "may / might have done", v: "对过去的不确定推测：也许做过" },
        { k: "should / ought to have done", v: "本该做而没做（表责备或后悔）" },
        { k: "needn't have done", v: "本不必做却做了（白做了）" },
        { k: "could have done", v: "本来能做而没做" }
      ],
      usages: [
        { u: "must have done 表肯定的过去推测。", eg: "The ground is wet — it must have rained last night.", t: "地面是湿的——昨晚一定下雨了。" },
        { u: "should have done 表后悔或责备。", eg: "You should have told me earlier.", t: "你本该早点告诉我。" },
        { u: "needn't have done 表「白做了」。", eg: "You needn't have bought milk; we still had some.", t: "你本不必买牛奶，我们还有。" },
        { u: "could have done 表「本来可以做到却没有」。", eg: "You could have passed the exam if you had studied harder.", t: "你如果更用功，本来能通过考试。" }
      ],
      mistakes: [
        "❌ You should told me earlier. → ✅ You should have told me earlier.（情态动词后接 have done，不是过去式）",
        "❌ It must rained last night. → ✅ It must have rained last night.（对过去的推测要用 have done）",
        "❌ You mustn't have seen him there. → ✅ You can't have seen him there.（对过去的否定推测用 can't have done）"
      ]
    },
    {
      id: "passive-advanced", cat: "语态·情态·语气", name: "被动语态进阶", en: "Advanced Passive", emoji: "🧊",
      level: "进阶", color: "#5CC98F",
      intro: "除了熟悉的 be + done，被动语态还有一片「灰色地带」：哪些动词习惯用主动表被动？短语动词怎么变被动？哪些动词根本不能用被动？",
      form: [
        { k: "主动表被动", v: "need / want / require + doing（= to be done）；be worth doing" },
        { k: "感官动词", v: "look / sound / taste / smell / feel 后接形容词，用主动形式表被动意义" },
        { k: "短语动词的被动", v: "介词或副词不能丢：be looked after / be put off / be laughed at" },
        { k: "不能用被动", v: "happen / appear / belong to / take place / break out 等不及物或静态动词" },
        { k: "进行与完成", v: "is being done（正在被做）/ has been done（已经被做）" }
      ],
      usages: [
        { u: "need doing = need to be done，主动形式表被动意义。", eg: "The bike needs repairing.", t: "这辆自行车需要修理。" },
        { u: "短语动词变被动时，介词要跟着走。", eg: "The children are well looked after here.", t: "这里的孩子们被照顾得很好。" },
        { u: "感官动词后接形容词，不用被动结构。", eg: "The cake smells sweet.", t: "这蛋糕闻起来很甜。" },
        { u: "不定式的被动式作宾语。", eg: "She hates being laughed at.", t: "她讨厌被人嘲笑。" }
      ],
      mistakes: [
        "❌ The bike needs to repair. → ✅ The bike needs repairing. / ✅ The bike needs to be repaired.（need 后接动名词或不定式的被动式）",
        "❌ The accident was happened last night. → ✅ The accident happened last night.（happen 是不及物动词，没有被动语态）",
        "❌ The problem is worth to discuss. → ✅ The problem is worth discussing.（be worth 后接动名词）"
      ]
    },
    {
      id: "subjunctive-advanced", cat: "语态·情态·语气", name: "虚拟语气进阶", en: "Advanced Subjunctive", emoji: "🌠",
      level: "进阶", color: "#9775FA",
      intro: "除了 if 条件句，虚拟语气还藏在 wish、as if、would rather、It's time 这些常见表达里。它们共同的特点是：说的都不是事实。",
      form: [
        { k: "wish + 从句", v: "与现在相反用过去式；与过去相反用 had done；对将来的愿望用 would do" },
        { k: "as if / as though", v: "与现在相反用过去式；与过去相反用过去完成式" },
        { k: "would rather + 从句", v: "从句用过去式（表现在或将来），用 had done（表过去）" },
        { k: "It's (high) time that…", v: "从句用过去式，或用 should + 动词原形（should 不能省）" },
        { k: "if only", v: "用法同 wish，意为「要是……就好了」" }
      ],
      usages: [
        { u: "wish 后接与现在相反的愿望，用过去式。", eg: "I wish I knew the answer.", t: "真希望我知道答案（可惜不知道）。" },
        { u: "wish 后接对过去的遗憾，用 had done。", eg: "I wish I had studied harder last year.", t: "真希望去年我学得更用功。" },
        { u: "as if 引导与事实相反的情况。", eg: "He talks as if he knew everything.", t: "他说起话来好像什么都懂（其实不是）。" },
        { u: "would rather 与 It's time 后的从句。", eg: "I'd rather you came tomorrow. / It's time we went home.", t: "我宁愿你明天来。/ 我们该回家了。" }
      ],
      mistakes: [
        "❌ I wish I know the answer. → ✅ I wish I knew the answer.（wish 后与现在相反，用过去式）",
        "❌ I wish I didn't say that yesterday. → ✅ I wish I hadn't said that yesterday.（对过去的遗憾用 had done）",
        "❌ It's time we go home. → ✅ It's time we went home. / ✅ It's time we should go home.（It's time 后从句用过去式或 should + 原形）"
      ]
    },
    {
      id: "causative", cat: "语态·情态·语气", name: "使役结构", en: "The Causative", emoji: "🛠️",
      level: "中级", color: "#FFD43B",
      intro: "「让某人做某事」和「让某事被做」是两回事：前者是 have / make / let / get + 人 + 动作，后者是 have / get + 物 + 过去分词。搞混这两组，句子意思会完全跑偏。",
      form: [
        { k: "have / make / let + sb. + 动词原形", v: "这三个词后接动词原形，不带 to" },
        { k: "get + sb. + to do", v: "get 后必须带 to" },
        { k: "have / get + sth. + 过去分词", v: "表示「让某事被做」，即请别人来做" },
        { k: "get + sth. + 过去分词", v: "常表示遭遇不愉快的事（被偷、被打破等）" }
      ],
      usages: [
        { u: "have sb. do sth. 表示安排某人做某事。", eg: "I had the mechanic check the brakes.", t: "我让修理工检查了刹车。" },
        { u: "get sb. to do sth. 意为「说服、让某人做」。", eg: "She got her brother to carry the box.", t: "她让她弟弟搬箱子。" },
        { u: "have sth. done 表示请别人做（自己不是执行者）。", eg: "I had my hair cut yesterday.", t: "我昨天理发了（是别人给我剪的）。" },
        { u: "get sth. done 表示遭遇。", eg: "He got his wallet stolen on the bus.", t: "他在公交车上被人偷了钱包。" }
      ],
      mistakes: [
        "❌ I had him to clean the room. → ✅ I had him clean the room.（have 后接动词原形，不带 to）",
        "❌ She made me to wait for an hour. → ✅ She made me wait for an hour.（make 后接动词原形）",
        "❌ 想说「我理发了（请人剪的）」：I cut my hair yesterday. → ✅ I had my hair cut yesterday.（请人做用 have sth done）"
      ]
    },

    /* ==================== 从句 ==================== */
    {
      id: "object-clause", cat: "从句", name: "宾语从句", en: "Object Clauses", emoji: "🎯",
      level: "入门", color: "#4DABF7",
      intro: "宾语从句就是「用一句话当宾语」。三条铁律要记牢：引导词选对、语序用陈述语序、时态跟着主句走。",
      form: [
        { k: "引导词", v: "that（陈述，口语中可省略）/ if、whether（是否）/ what、who、when、where、why、how 等" },
        { k: "语序", v: "一律用陈述语序（主语 + 谓语），千万不能用疑问语序" },
        { k: "时态", v: "主句现在时，从句按需要；主句过去时，从句用相应的过去时态" },
        { k: "特殊情况", v: "从句表示客观真理时，一律用一般现在时" }
      ],
      usages: [
        { u: "that 引导陈述句作宾语。", eg: "I think (that) he is right.", t: "我认为他是对的。" },
        { u: "if / whether 引导一般疑问句转化来的宾语从句。", eg: "I don't know if he will come.", t: "我不知道他会不会来。" },
        { u: "特殊疑问句转化时保留疑问词，但改用陈述语序。", eg: "Do you know where he lives?", t: "你知道他住在哪里吗？" },
        { u: "客观真理一律用一般现在时。", eg: "The teacher told us that the earth goes around the sun.", t: "老师告诉我们地球绕着太阳转。" }
      ],
      mistakes: [
        "❌ Do you know where does he live? → ✅ Do you know where he lives?（宾语从句必须用陈述语序）",
        "❌ He said he will come. → ✅ He said he would come.（主句是过去时，从句用过去将来时）",
        "❌ I don't know if he will come or not. → ✅ I don't know whether he will come or not.（与 or not 连用只能用 whether）"
      ]
    },
    {
      id: "subject-clause", cat: "从句", name: "主语从句", en: "Subject Clauses", emoji: "🏛️",
      level: "中级", color: "#20C997",
      intro: "主语从句是「用一句话当主语」。因为头重脚轻，英语常常请 it 出面当形式主语，把真正的主语放到句尾去。",
      form: [
        { k: "引导词", v: "that / whether / what / who / when / where / why / how" },
        { k: "that 不能省", v: "主语从句的 that 必须保留，与宾语从句不同" },
        { k: "谓语的数", v: "主语从句作主语时，谓语动词用单数" },
        { k: "形式主语", v: "It is + adj. / n. + that 从句；It is said / reported / believed that…" }
      ],
      usages: [
        { u: "that 引导主语从句。", eg: "That he passed the exam made his parents happy.", t: "他通过考试让父母很高兴。" },
        { u: "what 引导（what 相当于 the thing that，本身作成分）。", eg: "What she said is true.", t: "她说的是真的。" },
        { u: "it 作形式主语，把从句放到句尾。", eg: "It is important that we protect the environment.", t: "我们保护环境很重要。" },
        { u: "固定句式 It is said / reported that…", eg: "It is said that the temple is over 1,000 years old.", t: "据说这座寺庙有一千多年历史。" }
      ],
      mistakes: [
        "❌ What he said are true. → ✅ What he said is true.（主语从句作主语，谓语用单数）",
        "❌ He passed the exam made us happy. → ✅ That he passed the exam made us happy.（主语从句不能漏掉引导词 that）",
        "❌ Is important that we learn English. → ✅ It is important that we learn English.（缺形式主语 it）"
      ]
    },
    {
      id: "predicative-clause", cat: "从句", name: "表语从句", en: "Predicative Clauses", emoji: "🪞",
      level: "中级", color: "#FFD43B",
      intro: "表语从句出现在 be 动词之后，用来说明主语「是什么、怎么样」。它和宾语从句一样，必须用陈述语序——这一点最容易出错。",
      form: [
        { k: "引导词", v: "that / whether / what / who / when / where / why / how / because / as if" },
        { k: "常用句型", v: "The reason is that… / That's why… / That's because… / It looks as if…" },
        { k: "语序", v: "陈述语序（与宾语从句相同）" },
        { k: "特别注意", v: "The reason is… 后接 that，不接 because" }
      ],
      usages: [
        { u: "that 引导表语从句。", eg: "The trouble is that we have no time.", t: "麻烦在于我们没有时间。" },
        { u: "because 引导（只用于 This / That is because…结构）。", eg: "That's because he didn't sleep well.", t: "那是因为他没睡好。" },
        { u: "as if 引导表语从句。", eg: "It looks as if it is going to rain.", t: "看起来要下雨了。" },
        { u: "The reason is that… 是高频句型。", eg: "The reason why he was late is that he missed the bus.", t: "他迟到的原因是他错过了公交车。" }
      ],
      mistakes: [
        "❌ The reason is because he was ill. → ✅ The reason is that he was ill.（reason 后接 that，不接 because）",
        "❌ The question is what can we do. → ✅ The question is what we can do.（表语从句用陈述语序）",
        "❌ My suggestion is we should leave now. → ✅ My suggestion is that we should leave now.（书面语中表语从句的 that 一般保留）"
      ]
    },
    {
      id: "appositive-clause", cat: "从句", name: "同位语从句", en: "Appositive Clauses", emoji: "🪪",
      level: "进阶", color: "#FF8FA3",
      intro: "同位语从句用来解释前面那个抽象名词的具体内容：fact、news、idea、hope、thought、doubt、belief。它长得很像定语从句，但 that 在从句里不作任何成分——这就是区分两者的关键。",
      form: [
        { k: "结构", v: "抽象名词 + that + 完整句子" },
        { k: "常见先行名词", v: "fact / news / idea / hope / thought / belief / doubt / promise / suggestion" },
        { k: "that 的作用", v: "只起连接作用，在从句中不作主语或宾语，不能换成 which" },
        { k: "与定语从句的区别", v: "定语从句的 that 必须在从句中充当主语或宾语；同位语从句的 that 只连接" }
      ],
      usages: [
        { u: "fact + that 解释事实内容。", eg: "The fact that he lied made everyone angry.", t: "他撒谎这件事让大家很生气。" },
        { u: "idea / news + that 引出具体内容。", eg: "I have no idea when he will come back.", t: "我不知道他什么时候回来。" },
        { u: "hope / belief + that。", eg: "There is little hope that they will win.", t: "他们获胜的希望渺茫。" },
        { u: "no doubt + that。", eg: "There is no doubt that he is the best player.", t: "毫无疑问他是最好的球员。" }
      ],
      mistakes: [
        "❌ The fact which he lied made us angry. → ✅ The fact that he lied made us angry.（同位语从句只能用 that）",
        "❌ There is no doubt whether he will succeed. → ✅ There is no doubt that he will succeed.（no doubt 后接 that，不接 whether）",
        "❌ The idea which we should leave early is wrong. → ✅ The idea that we should leave early is wrong.（同位语从句用 that，不用 which）"
      ]
    },
    {
      id: "clause-choice", cat: "从句", name: "从句引导词辨析", en: "Choosing Clause Connectors", emoji: "🧩",
      level: "进阶", color: "#5CC98F",
      intro: "that / which / what / whether —— 四个词好像都能译成「那个」，分工却完全不同。选错的根源，往往是没有先想清楚「从句里缺不缺成分」。",
      form: [
        { k: "that", v: "连接陈述句；名词性从句中不作成分，定语从句中可作主语或宾语" },
        { k: "what", v: "只能引导名词性从句，本身在从句中作成分（= the thing that），前面不能有先行词" },
        { k: "which", v: "引导定语从句时作成分；引导名词性从句时意为「哪一个」" },
        { k: "whether / if", v: "表「是否」；介词后、句首、与 or not 连用只能用 whether" },
        { k: "判断口诀", v: "从句缺成分 → what；从句不缺 → that；先行词是物且从句中作宾语 → that / which" }
      ],
      usages: [
        { u: "从句缺主语或宾语，用 what。", eg: "What he needs is a good rest.", t: "他需要的是一次好好的休息。" },
        { u: "从句成分完整，用 that。", eg: "I know that he is right.", t: "我知道他是对的。" },
        { u: "介词后用 whether。", eg: "It depends on whether he agrees.", t: "这取决于他是否同意。" },
        { u: "定语从句中，先行词是物，用 that 或 which。", eg: "The book that / which I bought is interesting.", t: "我买的那本书很有趣。" }
      ],
      mistakes: [
        "❌ I don't understand that he said. → ✅ I don't understand what he said.（从句缺宾语，用 what）",
        "❌ It depends on if he agrees. → ✅ It depends on whether he agrees.（介词后只能用 whether）",
        "❌ He told me all what he knew. → ✅ He told me all that he knew.（前面已有先行词 all，用 that）"
      ]
    }
  ];

  window.GRAMMAR_DATA = (window.GRAMMAR_DATA || []).concat(NEW);
})();
