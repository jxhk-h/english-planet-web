/* 语法数据（第 2 批）—— 词法基础 10 个语法点
   追加进 window.GRAMMAR_DATA；字段口径与 data-grammar.js 完全一致（id/cat/name/en/emoji/level/color/intro/form/usages/mistakes）。
   本文件只新增，不修改任何已有语法点。 */
(function () {
  "use strict";

  var NEW = [
    {
      id: "nouns", cat: "词法基础", name: "名词", en: "Nouns", emoji: "📦",
      level: "入门", color: "#4DABF7",
      intro: "名词分可数与不可数：可数名词有单复数变化，不可数名词不能直接加 -s；名词还能用所有格表示「谁的」。",
      form: [
        { k: "复数规则", v: "一般 +s；s/x/ch/sh 结尾 +es；辅音字母 +y 变 y 为 i 加 es；f/fe 常变 ves" },
        { k: "不规则复数", v: "man→men, woman→women, child→children, foot→feet, mouse→mice, sheep→sheep" },
        { k: "不可数名词", v: "无复数形式，用 much/little 修饰；计量用 a piece of / a glass of 等" },
        { k: "所有格", v: "单数 + 's；以 s 结尾的复数只加 '；无生命名词多用 of 结构" }
      ],
      usages: [
        { u: "可数名词单数前一般要有限定词（a/an/the/my 等）。", eg: "I saw a dog in the park.", t: "我在公园里看到一只狗。" },
        { u: "不可数名词要计量时，用「a + 量词 + of + 名词」。", eg: "She gave me a piece of advice.", t: "她给了我一条建议。" },
        { u: "有些名词单复数同形，要按上下文判断。", eg: "Two sheep are eating grass on the hill.", t: "两只羊在山坡上吃草。" },
        { u: "所有格表示所属关系，注意 's 的位置。", eg: "This is Lily's bike, and that one is the boys' ball.", t: "这是莉莉的自行车，那个是男孩们的球。" }
      ],
      mistakes: [
        "❌ I have three childs. → ✅ I have three children.（child 是不规则复数）",
        "❌ He gave me many informations. → ✅ He gave me much information.（information 不可数，不能用 many 修饰）",
        "❌ This is the book of Lily. → ✅ This is Lily's book.（表所属优先用 's）"
      ]
    },
    {
      id: "pronouns", cat: "词法基础", name: "代词", en: "Pronouns", emoji: "🧍",
      level: "入门", color: "#20C997",
      intro: "代词能替代名词，避免重复。难点在于分清主格、宾格、物主代词和反身代词各自的位置。",
      form: [
        { k: "主格", v: "I / you / he / she / it / we / they —— 作主语" },
        { k: "宾格", v: "me / you / him / her / it / us / them —— 作宾语" },
        { k: "形容词性物主", v: "my / your / his / her / its / our / their + 名词" },
        { k: "名词性物主", v: "mine / yours / his / hers / its / ours / theirs —— 单独使用" },
        { k: "反身代词", v: "myself / yourself / himself… —— 主语和宾语指同一人时" }
      ],
      usages: [
        { u: "主语用主格，动词或介词后面用宾格。", eg: "She teaches us English, and we all like her.", t: "她教我们英语，我们都喜欢她。" },
        { u: "形容词性物主后面必须跟名词；不跟名词时用名词性物主。", eg: "This is my book. That one is yours.", t: "这是我的书，那本是你的。" },
        { u: "反身代词表示动作回到主语自己身上。", eg: "He hurt himself while cooking.", t: "他做饭时伤到了自己。" },
        { u: "by oneself 表示「独自、靠自己」。", eg: "She finished the work by herself.", t: "她独自完成了这项工作。" }
      ],
      mistakes: [
        "❌ Me and Tom are good friends. → ✅ Tom and I are good friends.（主语用主格，且 I 放在后面）",
        "❌ This is her's book. → ✅ This is her book. / ✅ This book is hers.（物主代词不加 's）",
        "❌ I taught me English. → ✅ I taught myself English.（动作回到主语自己用反身代词）"
      ]
    },
    {
      id: "articles", cat: "词法基础", name: "冠词", en: "Articles", emoji: "🔖",
      level: "入门", color: "#FFD43B",
      intro: "a/an 表示「一个」的泛指，the 表示特指或独一无二，很多时候干脆不用冠词——三种情况要分清。",
      form: [
        { k: "a / an", v: "辅音音素前用 a；元音音素前用 an（看发音，不看拼写）" },
        { k: "the（特指）", v: "上文提过、双方都知道、独一无二的事物、最高级和序数词前" },
        { k: "零冠词", v: "复数泛指、不可数名词、三餐、球类、学科、专有名词前一般不加" }
      ],
      usages: [
        { u: "第一次提到用 a/an，再次提到用 the。", eg: "I saw a cat in the garden. The cat was black.", t: "我在花园里看到一只猫，那只猫是黑色的。" },
        { u: "世界上独一无二的事物前用 the。", eg: "The sun rises in the east.", t: "太阳从东方升起。" },
        { u: "判断用 a 还是 an 要看发音：h 不发音时用 an。", eg: "an hour, an honest boy", t: "一小时，一个诚实的男孩" },
        { u: "三餐、球类、学科前不加冠词。", eg: "We have breakfast at seven and play basketball after school.", t: "我们七点吃早饭，放学后打篮球。" }
      ],
      mistakes: [
        "❌ He is a honest man. → ✅ He is an honest man.（h 不发音，按元音音素用 an）",
        "❌ He plays the basketball well. → ✅ He plays basketball well.（球类前不加 the）",
        "❌ I have a good news for you. → ✅ I have good news for you.（news 不可数，不能加 a）"
      ]
    },
    {
      id: "numerals", cat: "词法基础", name: "数词", en: "Numerals", emoji: "🔢",
      level: "入门", color: "#FFA94D",
      intro: "基数词表数量，序数词表次序；分数、年份、编号的读法写法都靠数词。",
      form: [
        { k: "基数词", v: "one, two, three…；十几以 -teen 结尾，几十以 -ty 结尾" },
        { k: "序数词", v: "first, second, third 特殊记；一般 +th；几十几的序数词只把个位变序数" },
        { k: "分数", v: "分子用基数词，分母用序数词；分子大于 1 时分母加 s" },
        { k: "年份与编号", v: "1998 读作 nineteen ninety-eight；编号可用「名词 + 基数词」或「the + 序数词」" }
      ],
      usages: [
        { u: "基数词表示数量。", eg: "There are twenty students in the classroom.", t: "教室里有二十名学生。" },
        { u: "序数词前通常加 the，表示「第几」。", eg: "He won the first prize in the race.", t: "他在比赛中获得了一等奖。" },
        { u: "分数表达：分子基数、分母序数。", eg: "Two thirds of the students are girls.", t: "三分之二的学生是女生。" },
        { u: "编号的两种写法：Lesson Five = the fifth lesson。", eg: "Please turn to Lesson Five.", t: "请翻到第五课。" }
      ],
      mistakes: [
        "❌ He got the three prize. → ✅ He got the third prize.（序数词表「第三」）",
        "❌ one third of the apple and two third of the cake → ✅ two thirds of the cake（分子大于 1，分母加 s）",
        "❌ There are five hundreds books. → ✅ There are five hundred books.（hundred 前有具体数字时不加 s）"
      ]
    },
    {
      id: "adj-adv", cat: "词法基础", name: "形容词与副词", en: "Adjectives & Adverbs", emoji: "🎨",
      level: "入门", color: "#9775FA",
      intro: "形容词说明「什么样」，副词说明「怎么样地」。位置、词形和 -ed/-ing 的区分是三大高频考点。",
      form: [
        { k: "形容词的位置", v: "名词前；be 动词后；感觉动词（look / sound / feel / taste / smell）后" },
        { k: "副词的构成", v: "形容词 + ly（happy→happily）；fast / hard / early / late 形不变" },
        { k: "副词的位置", v: "修饰动词放在后面；频度副词放在实义动词前、be 动词后" },
        { k: "-ed 与 -ing", v: "-ed 形容词修饰人（感到…）；-ing 形容词修饰物（令人…）" }
      ],
      usages: [
        { u: "感觉动词后接形容词，不接副词。", eg: "The soup tastes good.", t: "这汤尝起来不错。" },
        { u: "修饰动词要用副词。", eg: "He runs very quickly.", t: "他跑得很快。" },
        { u: "频度副词的位置：实义动词前、be 动词后。", eg: "She always gets up early. / He is often late.", t: "她总是早起。/ 他经常迟到。" },
        { u: "-ed 说人，-ing 说物。", eg: "I am interested in science, and the experiments are interesting.", t: "我对科学感兴趣，这些实验很有趣。" }
      ],
      mistakes: [
        "❌ He speaks English good. → ✅ He speaks English well.（修饰动词用副词）",
        "❌ The music sounds beautifully. → ✅ The music sounds beautiful.（感觉动词后接形容词）",
        "❌ I am very boring in this class. → ✅ I am very bored in this class.（人感到无聊用 -ed）"
      ]
    },
    {
      id: "prepositions", cat: "词法基础", name: "介词", en: "Prepositions", emoji: "🧭",
      level: "中级", color: "#F783AC",
      intro: "介词虽然小，却承包了时间、地点、方式的表达；加上固定搭配，更是考试中的高频失分点。",
      form: [
        { k: "时间介词", v: "at 时刻 / on 具体某天 / in 较长时段（月份、年份、季节）" },
        { k: "地点介词", v: "at 点 / on 表面 / in 内部或大地方" },
        { k: "方式介词", v: "by 交通工具或手段 / with 工具或伴随 / for 为了、持续" },
        { k: "惯用短语", v: "in the morning、on Monday morning、at night、at weekends" }
      ],
      usages: [
        { u: "时间三兄弟：at 时刻、on 具体日、in 长时段。", eg: "I get up at six in the morning on weekdays.", t: "工作日我早上六点起床。" },
        { u: "地点：大地方用 in，表面用 on，某个点用 at。", eg: "He lives in Beijing, and his office is on the third floor.", t: "他住在北京，办公室在三楼。" },
        { u: "by + 交通工具表示「乘坐」。", eg: "She goes to school by bus every day.", t: "她每天坐公交车上学。" },
        { u: "固定搭配要整体记：be good at / be interested in / depend on。", eg: "She is good at math and interested in science.", t: "她擅长数学，对科学感兴趣。" }
      ],
      mistakes: [
        "❌ We will meet in Monday. → ✅ We will meet on Monday.（具体某天用 on）",
        "❌ He is good in English. → ✅ He is good at English.（固定搭配 be good at）",
        "❌ I go to work by a car. → ✅ I go to work by car.（by + 交通工具不加冠词）"
      ]
    },
    {
      id: "conjunctions", cat: "词法基础", name: "连词", en: "Conjunctions", emoji: "🔀",
      level: "中级", color: "#5CC98F",
      intro: "连词用来连接词、短语或句子。并列连词连接对等成分，从属连词引导从句——「because 和 so 不连用」这类规则必须记牢。",
      form: [
        { k: "并列连词", v: "and / but / or / so，连接对等的词、短语或句子" },
        { k: "关联连词", v: "both…and / either…or / neither…nor / not only…but also" },
        { k: "从属连词", v: "because / although / when / if / so that 等，引导从句" },
        { k: "互斥规则", v: "because 不与 so 连用；although 不与 but 连用" }
      ],
      usages: [
        { u: "并列连词连接对等结构。", eg: "I like tea and coffee, but I don't like milk.", t: "我喜欢茶和咖啡，但不喜欢牛奶。" },
        { u: "because 引导原因状语从句，一般放主句后。", eg: "He stayed at home because it rained heavily.", t: "因为雨下得很大，他待在家里。" },
        { u: "so that 引导目的状语从句，表示「以便」。", eg: "She spoke loudly so that everyone could hear her.", t: "她大声说话，以便大家都能听见。" },
        { u: "either…or 连接主语时，谓语遵循就近原则。", eg: "Either you or he is right.", t: "要么你对，要么他对。" }
      ],
      mistakes: [
        "❌ Although he is young, but he is brave. → ✅ Although he is young, he is brave.（although 与 but 不同时出现）",
        "❌ Because it rained, so we stayed home. → ✅ Because it rained, we stayed home.（because 与 so 不同时出现）",
        "❌ Both Tom or Jim are right. → ✅ Both Tom and Jim are right.（both 搭配 and）"
      ]
    },
    {
      id: "indef-pronouns", cat: "词法基础", name: "不定代词", en: "Indefinite Pronouns", emoji: "🎲",
      level: "中级", color: "#FF8FA3",
      intro: "some/any、both/either/neither、all/none……不定代词真正的考点不是意思，而是它们各管几个、谓语用单数还是复数。",
      form: [
        { k: "some / any", v: "some 多用于肯定句；any 多用于否定句和疑问句" },
        { k: "both / either / neither", v: "指两者；both 配复数，either / neither 配单数" },
        { k: "all / none", v: "指三者及以上；all 配复数（指物可配单数），none 单复皆可" },
        { k: "each / every", v: "都表「每个」，谓语用单数；但 every 不能接 of 短语，each 可以" }
      ],
      usages: [
        { u: "some 与 any 的分工。", eg: "I have some questions. Do you have any questions?", t: "我有些问题。你有问题吗？" },
        { u: "both…and 连接主语时用复数谓语。", eg: "Both Tom and Jim are good at football.", t: "汤姆和吉姆都擅长足球。" },
        { u: "neither of + 复数名词，谓语用单数。", eg: "Neither of the answers is correct.", t: "两个答案都不对。" },
        { u: "something / everything 等复合不定代词作主语，谓语用单数。", eg: "Everything is ready for the party.", t: "派对的一切都准备好了。" }
      ],
      mistakes: [
        "❌ Both of them is my friend. → ✅ Both of them are my friends.（both 作主语谓语用复数）",
        "❌ Every of the students has a book. → ✅ Each of the students has a book.（every 不能接 of）",
        "❌ I have important something to tell you. → ✅ I have something important to tell you.（形容词修饰复合不定代词要后置）"
      ]
    },
    {
      id: "it-usage", cat: "词法基础", name: "it 的用法", en: "The Uses of It", emoji: "🪄",
      level: "中级", color: "#4DABF7",
      intro: "it 不只是「它」：它可以指天气、时间、距离，还能当形式主语、形式宾语，甚至撑起强调句。",
      form: [
        { k: "指天气 / 时间 / 距离", v: "It is raining. / It is six o'clock. / It is two miles away." },
        { k: "形式主语", v: "It is + adj. + (for / of sb.) + to do sth. —— 真主语是后面的不定式" },
        { k: "形式宾语", v: "think / find / make + it + adj. + to do sth. —— 真宾语在后面" },
        { k: "强调句", v: "It is / was + 被强调部分 + that / who + 其他" }
      ],
      usages: [
        { u: "指代天气、时间、距离等。", eg: "It is cold today. It is only five minutes' walk to the park.", t: "今天很冷。到公园只有五分钟路程。" },
        { u: "形式主语：真主语（不定式）放到句尾。", eg: "It is important to learn English well.", t: "学好英语很重要。" },
        { u: "形式宾语：真宾语放到补足语后面。", eg: "I find it hard to get up early in winter.", t: "我发现冬天早起很难。" },
        { u: "强调句：突出句子中的某个成分。", eg: "It was Mary that helped me with my math.", t: "是玛丽帮我补习数学的。" }
      ],
      mistakes: [
        "❌ Is important to study hard. → ✅ It is important to study hard.（句子不能没有主语）",
        "❌ I found difficult to finish the work. → ✅ I found it difficult to finish the work.（缺形式宾语 it）",
        "❌ It is he that I met yesterday. → ✅ It was he that I met yesterday.（强调句时态与从句一致）"
      ]
    },
    {
      id: "word-formation", cat: "词法基础", name: "构词法", en: "Word Formation", emoji: "🧱",
      level: "进阶", color: "#20C997",
      intro: "掌握常见前缀和后缀，等于拿到「猜词钥匙」：遇到生词也能推意思、辨词性，阅读和写作都能直接受益。",
      form: [
        { k: "否定前缀", v: "un- / dis- / im- / in- / non-：happy→unhappy, possible→impossible" },
        { k: "其他前缀", v: "re- 再 / pre- 预先 / mis- 错误地 / over- 过度" },
        { k: "名词后缀", v: "-er/-or 人；-ness/-tion/-ment 抽象名词：kind→kindness, move→movement" },
        { k: "形容词与副词后缀", v: "-ful/-less/-ive 形容词；-ly 副词：care→careful/careless, quick→quickly" },
        { k: "合成与转化", v: "blackboard、notebook（合成）；water 水→浇水（词性转化）" }
      ],
      usages: [
        { u: "看到否定前缀，先反着想意思。", eg: "The boy looks unhappy today.", t: "那个男孩今天看起来不开心。" },
        { u: "靠后缀判断词性：-ness/-tion 是名词，-ful 是形容词，-ly 常是副词。", eg: "care (v.) → careful (adj.) → carefully (adv.)", t: "在意（动词）→ 仔细的（形容词）→ 仔细地（副词）" },
        { u: "名词后缀能帮你读懂长难词。", eg: "The invention of the wheel changed the world.", t: "轮子的发明改变了世界。" },
        { u: "合成词直接拆开记忆。", eg: "She writes in her notebook every evening.", t: "她每晚在笔记本上写字。" }
      ],
      mistakes: [
        "❌ He is very kindness. → ✅ He is very kind.（表语要用形容词 kind，kindness 是名词）",
        "❌ She can't finish the unpossible task. → ✅ She can't finish the impossible task.（possible 的否定用 im-）",
        "❌ He looked at me careful. → ✅ He looked at me carefully.（修饰动词用 -ly 副词）"
      ]
    }
  ];

  window.GRAMMAR_DATA = (window.GRAMMAR_DATA || []).concat(NEW);
})();
