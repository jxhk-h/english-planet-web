/* 语法数据（第 3 批）—— 动词时态 5 个语法点
   追加进 window.GRAMMAR_DATA；字段口径与 data-grammar.js 完全一致（id/cat/name/en/emoji/level/color/intro/form/usages/mistakes）。
   本文件只新增，不修改任何已有语法点。 */
(function () {
  "use strict";

  var NEW = [
    {
      id: "past-continuous", cat: "动词时态", name: "过去进行时", en: "The Past Continuous", emoji: "⏪",
      level: "入门", color: "#4DABF7",
      intro: "过去进行时表示「过去某一时刻正在进行」的动作。它最擅长做两件事：给故事铺背景，以及和一般过去时搭配——一个正在做，另一个突然发生。",
      form: [
        { k: "肯定式", v: "was / were + doing（I / he / she / it 用 was，you / we / they 用 were）" },
        { k: "否定式", v: "was / were + not + doing" },
        { k: "疑问式", v: "Was / Were + 主语 + doing…？" },
        { k: "with when / while", v: "while 后常接进行时（强调持续），when 后常接一般过去时（引出突然的动作）" }
      ],
      usages: [
        { u: "表示过去某一时刻正在进行的动作。", eg: "At eight last night, I was doing my homework.", t: "昨晚八点，我正在写作业。" },
        { u: "提供背景，用 when 引出突然发生的动作。", eg: "I was walking home when it began to rain.", t: "我正走回家，这时开始下雨了。" },
        { u: "while 强调两个动作同时进行。", eg: "While Mom was cooking, I was cleaning the table.", t: "妈妈做饭的时候，我在擦桌子。" },
        { u: "表示过去一段时间内反复发生的动作，常带感情色彩。", eg: "He was always losing his keys.", t: "他过去老是丢钥匙。" }
      ],
      mistakes: [
        "❌ I was cook dinner at seven. → ✅ I was cooking dinner at seven.（进行时用 doing，别丢 -ing）",
        "❌ While I walked home, it began to rain. → ✅ While I was walking home, it began to rain.（while 后一般接进行时）",
        "❌ Yesterday at nine, I studied. → ✅ Yesterday at nine, I was studying.（「昨天九点」这一时刻正在进行，用过去进行时）"
      ]
    },
    {
      id: "past-perfect", cat: "动词时态", name: "过去完成时", en: "The Past Perfect", emoji: "⏮️",
      level: "中级", color: "#20C997",
      intro: "过去完成时表示「过去的过去」：在某个过去时间点之前就已经完成的动作。它必须有一个参照的过去时间或动作——没有参照，就不要用它。",
      form: [
        { k: "肯定式", v: "had + 过去分词（所有人称都用 had）" },
        { k: "否定式", v: "had not (hadn't) + 过去分词" },
        { k: "常见标志", v: "by the time / before / after / when / already / never / by the end of last year" },
        { k: "与一般过去时配合", v: "先发生 → had done；后发生 → did" }
      ],
      usages: [
        { u: "by the time 引导的从句用一般过去时，主句用过去完成时。", eg: "By the time we arrived, the film had started.", t: "我们到的时候，电影已经开始了。" },
        { u: "叙述两个过去动作的先后顺序。", eg: "She had finished her homework before she went out.", t: "她出去之前已经把作业做完了。" },
        { u: "表示过去未曾实现的希望或打算（hope / think / want / plan）。", eg: "I had hoped to see you at the party.", t: "我本希望在聚会上见到你。" },
        { u: "与 before / after 连用时，先后关系已清楚，两个动作也可都用一般过去时。", eg: "After he (had) left, we called him.", t: "他走之后，我们给他打了电话。" }
      ],
      mistakes: [
        "❌ When I arrived, he already left. → ✅ When I arrived, he had already left.（「我到达之前」就已发生，用过去完成时）",
        "❌ I had seen him yesterday. → ✅ I saw him yesterday.（单纯叙述过去的事，用一般过去时；过去完成时必须有参照点）",
        "❌ By the time I got up, my mother has cooked breakfast. → ✅ By the time I got up, my mother had cooked breakfast.（参照点在过去，不能用现在完成时）"
      ]
    },
    {
      id: "present-perfect-continuous", cat: "动词时态", name: "现在完成进行时", en: "The Present Perfect Continuous", emoji: "♾️",
      level: "中级", color: "#FFA94D",
      intro: "现在完成进行时表示从过去持续到现在、并且可能继续下去的动作。它比现在完成时更强调「持续」和「过程」，而不是「结果」。",
      form: [
        { k: "肯定式", v: "have / has been + doing" },
        { k: "否定式", v: "have / has not been + doing" },
        { k: "疑问式", v: "Have / Has + 主语 + been + doing…？" },
        { k: "常用搭配", v: "for + 一段时间 / since + 时间点 / all day / all morning / how long" }
      ],
      usages: [
        { u: "表示持续到现在、强调过程的动作。", eg: "I have been learning English for eight years.", t: "我学英语已经八年了（而且还在学）。" },
        { u: "表示刚刚结束、但影响仍在的动作。", eg: "Sorry I'm late — I've been looking for my keys.", t: "抱歉迟到了——我一直在找钥匙。" },
        { u: "how long 提问常用它。", eg: "How long have you been waiting here?", t: "你在这里等了多久了？" },
        { u: "与现在完成时的区别：强调持续用进行时，强调结果用完成时。", eg: "I have been reading the book.（一直在读）/ I have read the book.（读完了）", t: "我一直在读这本书。/ 我已经读完这本书了。" }
      ],
      mistakes: [
        "❌ I am learning English for eight years. → ✅ I have been learning English for eight years.（for + 时间段要配完成时）",
        "❌ She has been knowing him for years. → ✅ She has known him for years.（know 等状态动词不用进行时）",
        "❌ How long do you study here? → ✅ How long have you been studying here?（问「持续多久」用完成进行时）"
      ]
    },
    {
      id: "future-continuous-perfect", cat: "动词时态", name: "将来进行时与将来完成时", en: "Future Continuous & Future Perfect", emoji: "🔭",
      level: "进阶", color: "#9775FA",
      intro: "将来进行时（will be doing）说「将来某一刻正在做」；将来完成时（will have done）说「将来某时间之前已经完成」。两个都要靠一个将来的时间点来参照。",
      form: [
        { k: "将来进行时", v: "will / shall be + doing" },
        { k: "将来完成时", v: "will / shall have + 过去分词" },
        { k: "时间标志", v: "this time tomorrow / at eight tomorrow / by next year / by the end of 2030" },
        { k: "注意", v: "时间状语从句里不用 will，用一般现在时表将来" }
      ],
      usages: [
        { u: "将来进行时表示将来某一时刻正在进行的动作。", eg: "This time tomorrow, I will be flying to Beijing.", t: "明天的这个时候，我正飞往北京。" },
        { u: "将来进行时让提问更委婉、更像随口一问。", eg: "Will you be using the computer tonight?", t: "你今晚会用这台电脑吗？" },
        { u: "将来完成时表示将来某时间之前已经完成。", eg: "By next June, I will have finished middle school.", t: "到明年六月，我就已经初中毕业了。" },
        { u: "与 by the time 从句连用。", eg: "By the time you come back, I will have cooked dinner.", t: "你回来的时候，我就把晚饭做好了。" }
      ],
      mistakes: [
        "❌ This time tomorrow I will fly to Beijing. → ✅ This time tomorrow I will be flying to Beijing.（表「明天此刻正在」，用将来进行时）",
        "❌ By next year, I will finish the book. → ✅ By next year, I will have finished the book.（by + 将来时间，用将来完成时）",
        "❌ When I will arrive, I will call you. → ✅ When I arrive, I will call you.（时间状语从句用一般现在时表将来）"
      ]
    },
    {
      id: "future-in-the-past", cat: "动词时态", name: "过去将来时", en: "The Future in the Past", emoji: "↩️",
      level: "中级", color: "#F783AC",
      intro: "过去将来时站在「过去」看「将来」，最常出现在宾语从句里：主句是过去时，从句中表示将来的动作就要退一步，用 would 或 was going to。",
      form: [
        { k: "would + 动词原形", v: "最常用，语气中性" },
        { k: "was / were going to + 动词原形", v: "强调计划或打算" },
        { k: "was / were to + 动词原形", v: "表示按安排、约定将要发生" },
        { k: "was / were about to + 动词原形", v: "表示「正要……（这时发生了别的事）」" }
      ],
      usages: [
        { u: "宾语从句中的时态呼应：主句过去时，从句用过去将来时。", eg: "He said he would come back the next day.", t: "他说他第二天会回来。" },
        { u: "表示过去没实现的打算。", eg: "I was going to call you, but my phone died.", t: "我本来打算给你打电话，但手机没电了。" },
        { u: "表示按计划将要发生的事。", eg: "The train was to leave at six.", t: "火车原定六点开。" },
        { u: "表示「正要做」，常与 when 连用。", eg: "I was about to leave when he knocked on the door.", t: "我正要出门，这时他敲门了。" }
      ],
      mistakes: [
        "❌ He said he will help me. → ✅ He said he would help me.（主句是过去时，从句的将来用 would）",
        "❌ I was going to called you. → ✅ I was going to call you.（be going to 后接动词原形）",
        "❌ They would to come. → ✅ They would come.（would 后直接接动词原形，不加 to）"
      ]
    }
  ];

  window.GRAMMAR_DATA = (window.GRAMMAR_DATA || []).concat(NEW);
})();
