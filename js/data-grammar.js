/* 语法数据 —— 12 个最常见语法点
   form=结构公式 usages=[{u:说明, eg:例句, t:翻译}] mistakes=常见错误 */
window.GRAMMAR_DATA = [
  {
    id: "present-simple", cat: "动词时态", name: "一般现在时", en: "The Simple Present Tense", emoji: "🔁",
    level: "入门", color: "#FF8FA3",
    intro: "表示经常发生的动作、习惯，以及客观事实和真理。",
    form: [
      { k: "肯定句", v: "主语 + 动词原形（第三人称单数 + s/es）" },
      { k: "否定句", v: "主语 + do/does + not + 动词原形" },
      { k: "疑问句", v: "Do/Does + 主语 + 动词原形 ?" }
    ],
    usages: [
      { u: "表示习惯性动作，常与 always / usually / often / every day 连用。", eg: "I get up at six every morning.", t: "我每天早上六点起床。" },
      { u: "表示客观事实和普遍真理。", eg: "The sun rises in the east.", t: "太阳从东方升起。" },
      { u: "第三人称单数作主语时，动词要加 -s 或 -es。", eg: "She goes to school by bike.", t: "她骑自行车上学。" },
      { u: "表示时刻表、日程安排等既定事项。", eg: "The train leaves at 8:15 tomorrow.", t: "火车明天 8:15 发车。" }
    ],
    mistakes: [
      "❌ He go to school. → ✅ He goes to school.（三单漏加 s）",
      "❌ She doesn't likes music. → ✅ She doesn't like music.（助动词后必须用原形）"
    ]
  },
  {
    id: "present-continuous", cat: "动词时态", name: "现在进行时", en: "The Present Continuous", emoji: "⏳",
    level: "入门", color: "#FFA94D",
    intro: "表示此刻正在发生的动作，或现阶段正在进行的活动。",
    form: [
      { k: "肯定句", v: "主语 + am/is/are + 动词-ing" },
      { k: "否定句", v: "主语 + am/is/are + not + 动词-ing" },
      { k: "疑问句", v: "Am/Is/Are + 主语 + 动词-ing ?" }
    ],
    usages: [
      { u: "表示说话时正在进行的动作，常与 now / at the moment 连用。", eg: "Look! The children are playing football.", t: "看！孩子们正在踢足球。" },
      { u: "表示现阶段暂时性的状态。", eg: "He is living with his uncle this month.", t: "他这个月住在他叔叔家。" },
      { u: "表示已安排好的将来计划，多与 go / come / leave 等连用。", eg: "We are leaving for Beijing tomorrow.", t: "我们明天动身去北京。" },
      { u: "某些动词（know, like, want 等）表示状态，一般不用进行时。", eg: "I know the answer. (不说 I am knowing)", t: "我知道答案。" }
    ],
    mistakes: [
      "❌ I am know him. → ✅ I know him.（状态动词不用进行时）",
      "❌ She is runing. → ✅ She is running.（重读闭音节要双写末尾字母）"
    ]
  },
  {
    id: "present-perfect", cat: "动词时态", name: "现在完成时", en: "The Present Perfect", emoji: "✅",
    level: "中级", color: "#FFD43B",
    intro: "表示过去发生的动作对现在造成的影响，或从过去持续到现在的状态。",
    form: [
      { k: "肯定句", v: "主语 + have/has + 过去分词" },
      { k: "否定句", v: "主语 + have/has + not + 过去分词" },
      { k: "疑问句", v: "Have/Has + 主语 + 过去分词 ?" }
    ],
    usages: [
      { u: "强调过去动作对现在的影响，常与 already / yet / just 连用。", eg: "I have already finished my homework.", t: "我已经写完作业了。" },
      { u: "表示从过去持续到现在的状态，常与 for / since 连用。", eg: "She has lived here for ten years.", t: "她在这里住了十年了。" },
      { u: "表示到现在为止的经历，常与 ever / never / before 连用。", eg: "Have you ever been to Shanghai?", t: "你去过上海吗？" },
      { u: "注意区别：现在完成时不能说具体过去时间，一般过去时才可以。", eg: "I have seen the film. / I saw it last week.", t: "我看过这部电影。/ 我上周看了。" }
    ],
    mistakes: [
      "❌ I have seen him yesterday. → ✅ I saw him yesterday.（有明确过去时间要用一般过去时）",
      "❌ She has went home. → ✅ She has gone home.（过去分词形式错误）"
    ]
  },
  {
    id: "simple-past", cat: "动词时态", name: "一般过去时", en: "The Simple Past Tense", emoji: "🕰️",
    level: "入门", color: "#5CC98F",
    intro: "表示过去某个时间发生的动作或存在的状态。",
    form: [
      { k: "肯定句", v: "主语 + 动词过去式" },
      { k: "否定句", v: "主语 + did not + 动词原形" },
      { k: "疑问句", v: "Did + 主语 + 动词原形 ?" }
    ],
    usages: [
      { u: "表示过去一次完成的动作，常与 yesterday / last week / in 2020 连用。", eg: "We visited the museum last Sunday.", t: "我们上周日参观了博物馆。" },
      { u: "表示过去一段时间内经常发生的动作。", eg: "When I was a child, I played in this park every day.", t: "我小时候每天在这个公园玩。" },
      { u: "叙述故事时，用一般过去时推进情节。", eg: "She opened the door and walked in.", t: "她打开门走了进去。" }
    ],
    mistakes: [
      "❌ Did you went there? → ✅ Did you go there?（did 后面用原形）",
      "❌ He didn't finished it. → ✅ He didn't finish it."
    ]
  },
  {
    id: "simple-future", cat: "动词时态", name: "一般将来时", en: "The Simple Future Tense", emoji: "🚀",
    level: "入门", color: "#4DABF7",
    intro: "表示将来要发生的动作或存在的状态。",
    form: [
      { k: "will 结构", v: "主语 + will + 动词原形" },
      { k: "be going to", v: "主语 + am/is/are going to + 动词原形" },
      { k: "否定 / 疑问", v: "will not (won't) / Will + 主语 + 动词原形 ?" }
    ],
    usages: [
      { u: "will 表示说话时临时做出的决定或预测。", eg: "It's cold. I will close the window.", t: "天冷，我去把窗户关上。" },
      { u: "be going to 表示事先计划好的事，或有明显迹象的预测。", eg: "We are going to have a meeting tomorrow.", t: "我们明天要开个会。" },
      { u: "Look at those clouds! It is going to rain. —— 有迹象的预测要用 be going to。", eg: "Look at those clouds! It is going to rain.", t: "看那些云！要下雨了。" },
      { u: "时间状语从句中，用一般现在时代替将来时。", eg: "I will call you when I arrive.", t: "我到了就给你打电话。" }
    ],
    mistakes: [
      "❌ I will call you when I will arrive. → ✅ when I arrive.（主将从现）",
      "❌ She will goes there. → ✅ She will go there."
    ]
  },
  {
    id: "modals", cat: "语态·情态·语气", name: "情态动词", en: "Modal Verbs", emoji: "🎚️",
    level: "中级", color: "#9775FA",
    intro: "can / must / should / may 等情态动词用来表达能力、义务、推测和许可。",
    form: [
      { k: "基本结构", v: "主语 + 情态动词 + 动词原形（没有人称和数的变化）" },
      { k: "否定句", v: "情态动词 + not + 动词原形" },
      { k: "疑问句", v: "情态动词 + 主语 + 动词原形 ?" }
    ],
    usages: [
      { u: "can / could 表示能力或请求许可。", eg: "She can speak three languages.", t: "她会说三种语言。" },
      { u: "must 表示必须，语气最强；have to 强调客观需要。", eg: "You must finish it today. / I have to go now.", t: "你今天必须完成。/ 我现在得走了。" },
      { u: "should / ought to 表示建议，语气委婉。", eg: "You should see a doctor.", t: "你应该去看医生。" },
      { u: "may / might 表示推测或可能性，might 语气更弱。", eg: "He may be at home now.", t: "他现在可能在家。" },
      { u: "must 表示推测「一定」，其否定推测要用 can't。", eg: "She must be tired. / She can't be at home.", t: "她一定累了。/ 她不可能在家。" }
    ],
    mistakes: [
      "❌ He musts go. → ✅ He must go.（情态动词无人称变化）",
      "❌ You can to swim. → ✅ You can swim.（后面直接跟原形）"
    ]
  },
  {
    id: "passive", cat: "语态·情态·语气", name: "被动语态", en: "The Passive Voice", emoji: "🔄",
    level: "中级", color: "#20C997",
    intro: "当句子的重点在「动作的承受者」而不是「谁做的」时，用被动语态。",
    form: [
      { k: "一般现在时", v: "am/is/are + 过去分词" },
      { k: "一般过去时", v: "was/were + 过去分词" },
      { k: "含情态动词", v: "情态动词 + be + 过去分词" },
      { k: "现在完成时", v: "have/has + been + 过去分词" }
    ],
    usages: [
      { u: "不知道或不必说出动作执行者时使用。", eg: "My bike was stolen last night.", t: "我的自行车昨晚被偷了。" },
      { u: "强调动作的承受者时使用。", eg: "This bridge was built in 1998.", t: "这座桥建于 1998 年。" },
      { u: "执行者需要说明时，用 by 引出。", eg: "The song was written by a student.", t: "这首歌是一名学生写的。" },
      { u: "主动句变被动句：把宾语提前作主语，动词变 be + 过去分词。", eg: "They cleaned the room. → The room was cleaned.", t: "他们打扫了房间。→ 房间被打扫了。" }
    ],
    mistakes: [
      "❌ The letter was write yesterday. → ✅ The letter was written yesterday.（要用过去分词）",
      "❌ English is speak all over the world. → ✅ English is spoken all over the world."
    ]
  },
  {
    id: "comparison", cat: "特殊句式与综合", name: "比较级与最高级", en: "Comparatives & Superlatives", emoji: "📊",
    level: "入门", color: "#F783AC",
    intro: "比较两个人或事物时用比较级，三者及以上比较时用最高级。",
    form: [
      { k: "比较级", v: "形容词/副词 + -er，或 more + 形容词/副词 + than" },
      { k: "最高级", v: "the + 形容词/副词 + -est，或 the most + 形容词/副词" },
      { k: "同级比较", v: "as + 原级 + as（否定：not as/so ... as）" }
    ],
    usages: [
      { u: "单音节词加 -er / -est，多音节词前加 more / most。", eg: "tall → taller → tallest；beautiful → more beautiful → most beautiful", t: "高 → 更高 → 最高；美 → 更美 → 最美" },
      { u: "比较级 + than 表示「比……更」。", eg: "This book is more interesting than that one.", t: "这本书比那本更有趣。" },
      { u: "最高级前要加 the，常与 in / of 短语连用。", eg: "He is the tallest boy in our class.", t: "他是我们班最高的男孩。" },
      { u: "「越来越……」用 比较级 + and + 比较级；「越……越……」用 the + 比较级, the + 比较级。", eg: "The more you read, the more you know.", t: "你读得越多，懂的越多。" }
    ],
    mistakes: [
      "❌ He is more taller than me. → ✅ He is taller than me.（不能重复比较）",
      "❌ She is the most tallest. → ✅ She is the tallest."
    ]
  },
  {
    id: "relative-clause", cat: "从句", name: "定语从句", en: "Relative Clauses", emoji: "🔗",
    level: "进阶", color: "#FFA94D",
    intro: "用一个句子来修饰前面的名词（先行词），常用的引导词有 who / which / that / whose。",
    form: [
      { k: "修饰人", v: "先行词 + who / that + 从句" },
      { k: "修饰物", v: "先行词 + which / that + 从句" },
      { k: "表示所属", v: "先行词 + whose + 名词 + 从句" },
      { k: "限制性 vs 非限制性", v: "非限制性定语从句用逗号隔开，不能用 that" }
    ],
    usages: [
      { u: "who / that 指人，在从句中作主语。", eg: "The man who lives next door is a teacher.", t: "住在隔壁的那个人是老师。" },
      { u: "which / that 指物。", eg: "This is the book which I borrowed last week.", t: "这就是我上周借的那本书。" },
      { u: "whose 表示所属关系。", eg: "I know a girl whose father is a pilot.", t: "我认识一个女孩，她爸爸是飞行员。" },
      { u: "引导词在从句中作宾语时可以省略。", eg: "The film (that) we saw was great.", t: "我们看的那部电影很棒。" }
    ],
    mistakes: [
      "❌ The man he lives here is my uncle. → ✅ The man who lives here is my uncle.",
      "❌ My father, that works in a bank, is busy. → ✅ My father, who works in a bank, is busy.（非限制性不用 that）"
    ]
  },
  {
    id: "subjunctive", cat: "语态·情态·语气", name: "虚拟语气", en: "The Subjunctive Mood", emoji: "🌀",
    level: "进阶", color: "#9775FA",
    intro: "表示与事实相反的假设、愿望或不可能实现的假设。",
    form: [
      { k: "与现在相反", v: "If + 主语 + 过去式, 主语 + would/could + 动词原形" },
      { k: "与过去相反", v: "If + 主语 + had + 过去分词, 主语 + would have + 过去分词" },
      { k: "建议/要求类", v: "suggest / demand / require + that + 主语 + (should) + 动词原形" }
    ],
    usages: [
      { u: "与现在事实相反：从句用过去式，主句用 would + 原形。", eg: "If I were you, I would accept the offer.", t: "如果我是你，我会接受这个提议。" },
      { u: "与过去事实相反：从句用 had + 过去分词。", eg: "If I had studied harder, I would have passed.", t: "如果我当时更努力，就考过了。" },
      { u: "wish 后的宾语从句用过去式表示现在的遗憾。", eg: "I wish I could fly.", t: "我希望我能飞。" },
      { u: "suggest / advise / demand 等表示建议要求，从句用 (should) + 动词原形。", eg: "The doctor suggested that he (should) rest.", t: "医生建议他休息。" }
    ],
    mistakes: [
      "❌ If I was you, I would go. → ✅ If I were you, I would go.（虚拟语气中 be 用 were）",
      "❌ If I studied, I would have passed. → ✅ If I had studied, I would have passed.（时态要对应）"
    ]
  },
  {
    id: "non-finite", cat: "非谓语动词", name: "非谓语动词", en: "Non-finite Verbs", emoji: "🧩",
    level: "进阶", color: "#5CC98F",
    intro: "一个句子里已经有了谓语动词，其他动词就要变成 to do / doing / done 的形式。",
    form: [
      { k: "不定式", v: "to do —— 表目的、将来、一次性动作" },
      { k: "动名词", v: "doing —— 表主动、进行、习惯性动作" },
      { k: "过去分词", v: "done —— 表被动、完成" }
    ],
    usages: [
      { u: "不定式常表示目的。", eg: "She got up early to catch the bus.", t: "她早起是为了赶公交车。" },
      { u: "有些动词后面只能接 doing，如 enjoy / mind / finish / practise。", eg: "I enjoy reading before sleep.", t: "我喜欢睡前读书。" },
      { u: "有些动词后面只能接 to do，如 decide / hope / want / promise。", eg: "He decided to study abroad.", t: "他决定出国留学。" },
      { u: "过去分词作状语表示被动或完成。", eg: "Seen from the hill, the city looks beautiful.", t: "从山上看，这座城市很美。" }
    ],
    mistakes: [
      "❌ I enjoy to read. → ✅ I enjoy reading.",
      "❌ He suggested to go out. → ✅ He suggested going out."
    ]
  },
  {
    id: "there-be", cat: "特殊句式与综合", name: "There be 句型与主谓一致", en: "There be & Subject-Verb Agreement", emoji: "🏠",
    level: "入门", color: "#4DABF7",
    intro: "There be 表示「某处有某物」；主谓一致指谓语动词要和主语在人称和数上保持一致。",
    form: [
      { k: "There be", v: "There is + 单数/不可数名词；There are + 复数名词" },
      { k: "就近原则", v: "There be 后接多个名词时，be 与最近的那个保持一致" },
      { k: "主谓一致", v: "主语单复数决定谓语形式；each / every / everyone 视为单数" }
    ],
    usages: [
      { u: "There be 表示「有」，注意与 have（某人拥有）区分。", eg: "There is a park near my home.", t: "我家附近有一个公园。" },
      { u: "并列主语时遵循「就近原则」。", eg: "There is a pen and two books on the desk.", t: "桌上有一支笔和两本书。" },
      { u: "each / every / everyone / something 作主语时用单数。", eg: "Everyone in the class likes her.", t: "班上每个人都喜欢她。" },
      { u: "由 and 连接的并列主语通常用复数；但指同一人同一物时用单数。", eg: "The teacher and writer is coming.", t: "那位教师兼作家要来了。" }
    ],
    mistakes: [
      "❌ There have a book on the desk. → ✅ There is a book on the desk.",
      "❌ Everyone are here. → ✅ Everyone is here."
    ]
  }
];
