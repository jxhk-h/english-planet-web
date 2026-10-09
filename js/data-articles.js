/* 文章数据 —— 三类题材 × 三档难度
   cat: story（儿童故事）| tech（科技文章）| news（新闻杂志）
   level: 入门 | 中级 | 高级
   正文按段落对照，每段含英文与中文译文；keyWords 为文中重点词；questions 为阅读理解题 */
window.ARTICLE_DATA = [
  /* ===================== 儿童故事 ===================== */
  {
    id: "little-star", cat: "story", level: "入门", emoji: "⭐", minutes: 3,
    title: "The Little Star Who Lost Her Glow",
    titleCn: "丢了光芒的小星星",
    summary: "一颗小星星忽然不亮了，她很着急。一只小猫告诉她：光不是找回来的，是点亮别人时亮起来的。",
    body: [
      { en: "High in the night sky, a little star named Bella looked at herself in the dark. Her light was almost gone.", cn: "高高的夜空中，一颗名叫贝拉的小星星在黑暗里看着自己。她的光几乎消失了。" },
      { en: "\"Where did my glow go?\" she asked. She felt very sad and very small.", cn: "「我的光芒去哪儿了？」她问。她感到非常难过，也觉得自己非常渺小。" },
      { en: "She flew down to the ground and met a little cat. The cat was crying because he could not find his home.", cn: "她飞落到地上，遇到一只小猫。小猫正在哭，因为他找不到家了。" },
      { en: "\"Don't worry,\" said Bella. \"I will help you.\" She walked with the cat and looked for the way. Slowly, her body began to shine a little.", cn: "「别担心，」贝拉说，「我来帮你。」她陪着小猫一起找路。慢慢地，她的身体开始发出一点微光。" },
      { en: "Then she helped an old turtle turn over, and she helped two baby birds find their mother. Every time she helped someone, she grew brighter.", cn: "接着她帮一只老乌龟翻过身，又帮两只小鸟找到了妈妈。每帮一个人，她就亮一分。" },
      { en: "By morning, Bella was the brightest star she had ever been. She understood the secret at last: a light does not come back by waiting. It comes back by giving.", cn: "到了早晨，贝拉成了她见过的最亮的星星。她终于明白了一个秘密：光不是等回来的，是给出去的。" }
    ],
    keyWords: [
      { w: "glow", p: "/ɡləʊ/", c: "光亮；发光" },
      { w: "bright", p: "/braɪt/", c: "明亮的" },
      { w: "secret", p: "/ˈsiːkrət/", c: "秘密" }
    ],
    questions: [
      { q: "Why was the cat crying?", a: "Because he could not find his home." },
      { q: "How did Bella get her glow back?", a: "By helping others — every time she helped someone, she grew brighter." },
      { q: "What does the story want to tell us?", a: "Helping others brings light and value to ourselves. 帮助别人，也会照亮自己。" }
    ]
  },
  {
    id: "turtle-rabbit", cat: "story", level: "入门", emoji: "🐢", minutes: 3,
    title: "The Race on Green Hill",
    titleCn: "绿山上的赛跑",
    summary: "一场大家都以为兔子必胜的比赛，最后却因为一件小事改变了结果。",
    body: [
      { en: "On Green Hill there lived a fast rabbit and a slow turtle. One sunny morning the rabbit said, \"Let's have a race!\"", cn: "绿山上住着一只跑得很快的兔子和一只走得很慢的乌龟。一个晴朗的早晨，兔子说：「我们来比赛吧！」" },
      { en: "The turtle smiled and said, \"All right. Let's do it.\" All the animals came to watch. The fox stood at the top of the hill with a small flag.", cn: "乌龟笑着说：「好啊，来吧。」所有动物都来看热闹。狐狸站在山顶上，手里拿着一面小旗。" },
      { en: "The race began. The rabbit ran very fast and soon could not see the turtle. \"I have so much time,\" he thought. \"I will take a short sleep under this tree.\"", cn: "比赛开始了。兔子跑得飞快，很快就看不见乌龟了。「我有的是时间，」他想，「我在这棵树下睡一小会儿。」" },
      { en: "The turtle did not stop. He walked and walked, slowly but without rest. The sun moved across the sky. The rabbit was still sleeping.", cn: "乌龟没有停下。他走啊走，慢，但一直没有休息。太阳从天边移到另一边。兔子还在睡。" },
      { en: "When the rabbit woke up, he ran as fast as he could. But it was too late. The turtle was already at the top of the hill.", cn: "兔子醒来时，用尽全力奔跑。但已经太晚了。乌龟已经到山顶了。" },
      { en: "The rabbit was not angry. He shook the turtle's hand and said, \"You taught me something today. Slow and steady wins the race, but slow and giving up wins nothing.\"", cn: "兔子没有生气。他握了握乌龟的手说：「你今天教会了我一件事：慢而稳能赢，但慢而放弃什么也赢不了。」" }
    ],
    keyWords: [
      { w: "race", p: "/reɪs/", c: "比赛；赛跑" },
      { w: "steady", p: "/ˈstedi/", c: "稳的；不间断的" },
      { w: "reach", p: "/riːtʃ/", c: "到达" }
    ],
    questions: [
      { q: "What did the rabbit do during the race?", a: "He ran fast first, then took a sleep under a tree." },
      { q: "Did the turtle stop to rest?", a: "No. He walked slowly but never stopped." },
      { q: "What is the lesson of the story?", a: "Keeping going without stopping matters more than being fast. 坚持比速度更重要。" }
    ]
  },
  {
    id: "laughing-robot", cat: "story", level: "中级", emoji: "🤖", minutes: 4,
    title: "The Robot Who Learned to Laugh",
    titleCn: "学会笑的机器人",
    summary: "机器人小七能算出一万道题，却算不出人为什么会笑。它花了一整个夏天去找答案。",
    body: [
      { en: "Unit Seven was a small cleaning robot in a middle school. He could sweep a whole corridor in nine minutes, and he never made a mistake.", cn: "七号是一所中学里的小型清洁机器人。他能在九分钟内扫完整条走廊，而且从不出错。" },
      { en: "But there was one thing Unit Seven could not understand: laughter. When students laughed, they made strange sounds and their faces changed. It made no sense to him.", cn: "但有一件事七号始终无法理解：笑声。学生们笑的时候，会发出奇怪的声音，脸上也会变样。这在他看来毫无道理。" },
      { en: "So he started a project. He recorded 1,204 pieces of laughter and put them into his memory. Then he tried to find the rule. Was laughter louder when people were happy? Was it longer when the joke was good?", cn: "于是他启动了一个项目。他录下了 1204 段笑声，存进自己的记忆里。然后他试图找出规律：人是越开心笑得越大声吗？笑话越好笑，笑得越久吗？" },
      { en: "After three weeks, he had to admit: there was no rule. The same joke made one student laugh and another one quiet. The same words could be funny at lunch and not funny in class.", cn: "三周之后，他不得不承认：根本没有规律。同一个笑话，一个学生笑了，另一个却毫无反应。同一句话，午饭时好笑，课堂上就不好笑了。" },
      { en: "One afternoon, a boy dropped his lunch box on the floor. Rice went everywhere. Everyone went quiet. Then the boy himself started to laugh, and the whole class laughed with him.", cn: "一天下午，一个男生把饭盒掉在了地上，米饭撒了一地。所有人都安静下来。然后那个男生自己先笑了，全班跟着他一起笑。" },
      { en: "Unit Seven understood something at that moment. Laughter was not about the joke. It was about being together. It was a way of saying, \"It's fine. We are all here.\"", cn: "就在那一刻，七号明白了些什么。笑和笑话本身无关，它关乎「在一起」。它是一种在说：「没关系，我们都在。」" },
      { en: "The next day, when a girl slipped on the wet floor, Unit Seven played a small, funny sound from his speaker. The girl looked up, surprised, and laughed. Unit Seven did not laugh — he had no mouth. But something in his system felt warm, and he decided that was close enough.", cn: "第二天，当一个女孩在湿滑的地板上差点滑倒时，七号从扬声器里放出一小段滑稽的声音。女孩抬起头，惊讶地笑了。七号没有笑——他没有嘴。但他系统里的某个地方感到了一阵温暖，他觉得这就够了。" }
    ],
    keyWords: [
      { w: "laughter", p: "/ˈlɑːftə/", c: "笑声" },
      { w: "admit", p: "/ədˈmɪt/", c: "承认" },
      { w: "system", p: "/ˈsɪstəm/", c: "系统" }
    ],
    questions: [
      { q: "What did Unit Seven try to find out at first?", a: "He tried to find the rule behind laughter — when and why people laugh." },
      { q: "What did he learn from the lunch box accident?", a: "Laughter is not about the joke; it is about being together and sharing a moment." },
      { q: "Why did he play a funny sound for the girl?", a: "Because he wanted to make her feel better, using what he had learned." }
    ]
  },
  {
    id: "cloud-letters", cat: "story", level: "中级", emoji: "☁️", minutes: 4,
    title: "The Girl Who Wrote Letters to Clouds",
    titleCn: "给云写信的女孩",
    summary: "奶奶走后，米娅开始往天上写信。她不知道有没有人收，直到某个傍晚收到了一封回信。",
    body: [
      { en: "Mia's grandmother had a small garden with eleven kinds of flowers. When she passed away last spring, the garden became quiet and Mia did not know what to say to anyone.", cn: "米娅的奶奶有一个小花园，里面种着十一种花。去年春天奶奶去世后，花园变得安静，米娅不知道该和谁说些什么。" },
      { en: "One evening she wrote a letter on a piece of paper: \"Dear Grandma, the white flowers are open again.\" She tied it to a balloon and let it go. The balloon went up and up until it became a dot near a cloud.", cn: "一天傍晚，她在一张纸上写了一封信：「亲爱的奶奶，白色的花又开了。」她把信系在气球上，放开手。气球越飞越高，直到变成云边的一个小点。" },
      { en: "After that, she wrote every week. She wrote about her math test, about the cat that slept on the garden wall, about how the tomatoes tasted sour this year.", cn: "从那以后，她每周都写。她写数学测验，写睡在花园墙上的猫，写今年的番茄尝起来有点酸。" },
      { en: "Her father found the letters once and did not say anything. He only bought more balloons and put them in the kitchen drawer, where she could find them.", cn: "有一次爸爸看到了那些信，什么也没说。他只是又买了一些气球，放进厨房的抽屉里——放在她找得到的地方。" },
      { en: "Then one evening in late summer, the sky turned a deep orange. A cloud above the garden had a strange shape — it looked exactly like a hand waving goodbye.", cn: "然后在夏末的一个傍晚，天空变成深橘色。花园上空的一朵云有着奇怪的形状——它看起来就像一只在挥手告别的手。" },
      { en: "Mia stood there for a long time. Then she smiled and went into the house to write the shortest letter she had ever written: \"I know. Thank you. I'm okay.\"", cn: "米娅在那里站了很久。然后她笑了，走进屋子，写下她写得最短的一封信：「我知道。谢谢你。我很好。」" },
      { en: "She did not send that one. She put it in the drawer with the balloons, and she kept the garden alive — all eleven kinds of flowers.", cn: "那封信她没有寄出去。她把它和气球一起放进抽屉，并且一直把花园照料得好好的——十一种花，一种都没少。" }
    ],
    keyWords: [
      { w: "pass away", p: "/pɑːs əˈweɪ/", c: "去世" },
      { w: "shape", p: "/ʃeɪp/", c: "形状" },
      { w: "alive", p: "/əˈlaɪv/", c: "活着的；有生气的" }
    ],
    questions: [
      { q: "What did Mia tie her letters to?", a: "To balloons, and let them go up into the sky." },
      { q: "How did her father react when he found the letters?", a: "He said nothing but bought more balloons and put them where she could find them." },
      { q: "Why didn't she send the last letter?", a: "Because she no longer needed an answer — she had found peace herself." }
    ]
  },

  /* ===================== 科技文章 ===================== */
  {
    id: "phone-location", cat: "tech", level: "入门", emoji: "📍", minutes: 3,
    title: "How Does Your Phone Know Where You Are?",
    titleCn: "手机怎么会知道你在哪？",
    summary: "手机定位不只靠卫星。它其实同时在听三种不同的「信号」。",
    body: [
      { en: "When you open a map app, a small blue dot shows where you are. How does your phone know that? It is not magic. Your phone listens to three different kinds of signals.", cn: "当你打开地图软件时，一个小蓝点会显示你所在的位置。手机是怎么知道的？这不是魔法。它其实在同时接收三种不同的信号。" },
      { en: "The first one is satellites. There are many satellites flying around the Earth. Each of them sends a time signal. Your phone catches at least four of these signals and works out how far away each satellite is. Then it knows where you are.", cn: "第一种是卫星。许多卫星绕着地球飞行，每一颗都会发送时间信号。手机至少要接收到其中四个信号，算出每颗卫星离你有多远，然后就能确定你的位置。" },
      { en: "The second one is cell towers. These are the tall towers you see along roads. Your phone is always talking to the nearest tower. If the phone knows which tower is talking to it, it already knows you are somewhere in that area.", cn: "第二种是通信基站，就是公路边那些高高的铁塔。你的手机一直在和最近的基站通信。只要知道是哪座基站在和自己通信，就已经知道你大概在这个区域里了。" },
      { en: "The third one is Wi-Fi. Every Wi-Fi router has a kind of name tag. Even when you cannot connect, your phone can still see that the router is there. If the phone has seen this router before, it can remember exactly where it was.", cn: "第三种是 Wi-Fi。每个路由器都有一个类似「名牌」的东西。即使你连不上网，手机也依然能「看到」这个路由器在那儿。如果手机以前见过这个路由器，它就能记起当时的确切位置。" },
      { en: "In a city, your phone often uses all three at the same time. That is why the blue dot moves so smoothly when you walk. Next time you look at it, you will know: it is listening, counting, and calculating — all in less than a second.", cn: "在城市里，手机往往会同时使用这三种方式，所以你走路时那个小蓝点移动得那么顺滑。下次你再看它时就会知道：它一直在听、在数、在算——而这一切不到一秒就完成了。" }
    ],
    keyWords: [
      { w: "satellite", p: "/ˈsætəlaɪt/", c: "卫星" },
      { w: "signal", p: "/ˈsɪɡnəl/", c: "信号" },
      { w: "router", p: "/ˈruːtə/", c: "路由器" }
    ],
    questions: [
      { q: "How many satellite signals does a phone need at least?", a: "At least four." },
      { q: "Can a phone see a Wi-Fi router without connecting to it?", a: "Yes. It can see the router's name tag even when it cannot connect." },
      { q: "Why does the blue dot move smoothly in a city?", a: "Because the phone uses satellites, cell towers and Wi-Fi at the same time." }
    ]
  },
  {
    id: "solar-cheaper", cat: "tech", level: "中级", emoji: "☀️", minutes: 4,
    title: "Why Solar Panels Keep Getting Cheaper",
    titleCn: "太阳能板为什么越来越便宜",
    summary: "十五年间太阳能发电成本下降了九成以上。真正的原因不是某一项黑科技，而是三件事同时发生。",
    body: [
      { en: "In 2010, electricity from the sun cost about ten times more than electricity from coal. Today, in many countries, solar power is the cheapest new electricity you can buy. That is one of the fastest price drops of any technology in modern history.", cn: "2010 年，太阳能发电的成本大约是燃煤发电的十倍。而今天，在许多国家，光伏已经是最便宜的新增电源。这是现代历史上价格下降最快的技术之一。" },
      { en: "The first reason is manufacturing scale. Solar panels are basically large sheets of purified silicon. As factories grew from small workshops into giant plants, the cost of each sheet fell sharply. Making one million panels is far cheaper per panel than making one hundred.", cn: "第一个原因是制造规模。太阳能板本质上就是一大片提纯硅。当工厂从小作坊变成巨型产线，每片板的成本就大幅下降。造一百万块板，均摊下来比造一百块便宜得多。" },
      { en: "The second reason is efficiency. A panel converts only a part of the sunlight it receives into electricity. In 2010, an ordinary panel converted about 14 percent. Newer ones reach over 22 percent, so you need fewer panels to get the same power.", cn: "第二个原因是转换效率。一块板只能把接收到的阳光的一部分转成电。2010 年普通组件效率约 14%，而如今的新型组件已超过 22%——同样的功率，需要的板子更少了。" },
      { en: "The third reason is policy. Many governments offered subsidies and set clean-energy targets. These policies created a steady demand, and steady demand is what allows factories to invest in better machines.", cn: "第三个原因是政策。许多政府提供补贴并设定了清洁能源目标。这些政策创造了稳定的需求，而稳定的需求才让工厂敢于投资更好的设备。" },
      { en: "There is a catch, though. The sun does not shine at night, and it does not always shine brightly. So the next big challenge is not the panel itself — it is storage and the power grid. Cheap panels are only useful if the electricity can be kept and moved to where it is needed.", cn: "不过也有难处。夜里没有太阳，白天也未必晴朗。所以接下来的大挑战不在组件本身，而在储能和电网。只有当电能够被储存、被输送到需要的地方，便宜的组件才真正有用。" }
    ],
    keyWords: [
      { w: "efficiency", p: "/ɪˈfɪʃnsi/", c: "效率" },
      { w: "subsidy", p: "/ˈsʌbsədi/", c: "补贴" },
      { w: "storage", p: "/ˈstɔːrɪdʒ/", c: "储存" }
    ],
    questions: [
      { q: "How much did solar electricity cost compared with coal in 2010?", a: "About ten times more than coal power." },
      { q: "What are the three reasons for the falling price?", a: "Manufacturing scale, higher efficiency, and government policy." },
      { q: "What is the next big challenge for solar power?", a: "Storage and the power grid — keeping and moving the electricity." }
    ]
  },
  {
    id: "what-is-ai", cat: "tech", level: "高级", emoji: "🧠", minutes: 5,
    title: "What Is Artificial Intelligence, Really?",
    titleCn: "人工智能到底是什么？",
    summary: "我们习惯把 AI 说成会「思考」，但它做的其实是另一件事。理解这个区别，能帮你更清醒地看待它的能力与边界。",
    body: [
      { en: "Ask ten people what artificial intelligence is and you will probably get ten answers: a robot, a chatbot, a search engine, a threat, a helper. The word is used so loosely that it has started to lose its meaning. So it is worth going back to something more precise.", cn: "问十个人「人工智能是什么」，你大概会得到十个答案：机器人、聊天机器人、搜索引擎、威胁、帮手。这个词被用得如此宽泛，以至于它已经开始失去意义。所以我们有必要回到一个更精确的定义上。" },
      { en: "Most systems that we call AI today are doing one thing: finding patterns in large amounts of data, and then using those patterns to make a prediction. A system that recognises a cat in a photo has not learned what a cat is. It has learned which arrangements of pixels tend to appear in photos that people label \"cat\".", cn: "今天被我们称作 AI 的大多数系统其实只做一件事：在大量数据中寻找规律，然后用这些规律做出预测。一个能在照片里认出猫的系统，并没有学会「猫是什么」。它学到的是：在被人标注为「猫」的照片里，像素往往以什么样的方式排列。" },
      { en: "This distinction matters more than it sounds. It explains both why these systems are so impressive and why they fail in such strange ways. A model trained on thousands of cat photos will perform brilliantly on new cat photos. But change the lighting, or the angle, in an unusual way, and it can be completely lost — because it never had a concept to fall back on. It only had statistics.", cn: "这个区别比听起来更重要。它同时解释了为什么这些系统如此惊人，以及为什么它们会以如此奇怪的方式出错。一个在数千张猫照片上训练出来的模型，面对新的猫照片会表现优异；但只要把光线或角度改成不常见的样子，它就可能完全迷失——因为它背后没有一个概念可以依靠，它有的只是统计规律。" },
      { en: "The same logic applies to language models, which predict the next word rather than the next cat. They are extraordinarily good at producing fluent, well-organised, often genuinely useful text. They are also capable of producing confident statements that are simply not true, because fluency and accuracy are two different objectives, and only the first one is directly trained.", cn: "同样的逻辑也适用于语言模型——只不过它预测的不是猫，而是下一个词。它们极擅长生成流畅、有条理、常常确实有用的文本；它们也能生成自信满满却纯属虚构的说法，因为「流畅」和「正确」是两个不同的目标，而训练时直接优化的只有前者。" },
      { en: "None of this means the technology is overrated. It means the useful question is not \"is it intelligent?\" but \"what exactly is it good at, and where should a human stay in the loop?\" A calculator does arithmetic far better than any person; nobody calls it a mathematician. We would probably be better at using AI if we treated it more like a very powerful calculator and less like a mind.", cn: "这一切都不意味着这项技术被高估了。它意味着真正有用的问题不是「它有没有智能」，而是「它究竟擅长什么，哪些环节必须有人参与」。计算器做算术比任何人类都快得多，但没人叫它数学家。如果我们把 AI 更像一台极其强大的计算器、而不是一个「心智」来对待，我们大概会用它用得更好。" }
    ],
    keyWords: [
      { w: "pattern", p: "/ˈpætn/", c: "模式；规律" },
      { w: "prediction", p: "/prɪˈdɪkʃn/", c: "预测" },
      { w: "fluency", p: "/ˈfluːənsi/", c: "流利；流畅" },
      { w: "overrated", p: "/ˌəʊvəˈreɪtɪd/", c: "被高估的" }
    ],
    questions: [
      { q: "According to the text, what do most AI systems actually do?", a: "They find patterns in large amounts of data and use them to make predictions." },
      { q: "Why can a cat-recognition model fail when lighting changes?", a: "Because it learned pixel statistics, not the concept of a cat, so it has no fallback." },
      { q: "Why can language models produce false statements confidently?", a: "Because they are trained to be fluent, not to be accurate — fluency and accuracy are different goals." },
      { q: "What does the writer suggest about how we should treat AI?", a: "More like a very powerful calculator than like a mind." }
    ]
  },
  {
    id: "quantum", cat: "tech", level: "高级", emoji: "⚛️", minutes: 5,
    title: "Quantum Computing: Why It Is Not Just a Faster Laptop",
    titleCn: "量子计算：为什么它不是「更快的电脑」",
    summary: "量子计算机不是靠算得更快来取胜。它在某些问题上能做到的，本质上是另一种事。",
    body: [
      { en: "The word \"quantum\" often comes with a promise that sounds simple: a computer that is billions of times faster. That picture is misleading. A quantum computer is not a quicker version of the machine on your desk. It is a different kind of machine that happens to be useful for a particular family of problems.", cn: "「量子」这个词常常伴随着一个听起来很简单的承诺：一台快上几十亿倍的计算机。这个想象其实是一种误导。量子计算机不是桌上那台机器的加速版，而是一类不同的机器，只是它恰好在某一类问题上特别有用。" },
      { en: "A classical computer stores information in bits, and each bit is either 0 or 1. A quantum computer uses quantum bits, or qubits, which can be in a blend of both states at once. With many qubits, the machine can hold an enormous number of possibilities simultaneously — a space that grows exponentially with each added qubit.", cn: "经典计算机用比特存信息，每个比特非 0 即 1。量子计算机用量子比特（qubit），它可以同时处于两种状态的叠加之中。当量子比特多起来，机器就能同时承载极其庞大的可能性——每增加一个量子比特，这个空间就翻一倍。" },
      { en: "But holding many possibilities is not the same as reading them out. The moment you measure a qubit, it collapses to a single ordinary value. So the real difficulty is designing an algorithm in which all the wrong answers cancel each other out, and only the right one survives to be measured. That is why the field has only a handful of famous algorithms, and why they matter so much.", cn: "但「承载很多可能性」并不等于「能读出来」。你一测量，量子比特就坍缩成一个普通的值。所以真正的难点在于设计出这样一种算法：让所有错误答案互相抵消，只留下正确答案等待被测量。这也是为什么这个领域只有屈指可数的几个著名算法，以及为什么它们如此重要。" },
      { en: "Where this matters most, so far, is simulation and number theory. Simulating molecules — for designing new medicines or better battery materials — is a natural fit, because nature itself is quantum. On the number-theory side, Shor's algorithm could break widely used public-key encryption, which is why governments and companies are already working on post-quantum cryptography.", cn: "到目前为止，它最重要的用武之地是模拟和数论。模拟分子——用于设计新药或更好的电池材料——是天然契合的，因为大自然本身就是量子的；在数论方向，Shor 算法有可能破解广泛使用的公钥加密，这也是各国政府和企业已经在研究抗量子密码的原因。" },
      { en: "The obstacles are equally real. Qubits are fragile: heat, vibration, and stray electromagnetic noise can destroy the delicate state they depend on. Current machines need heavy cooling and elaborate error correction, and error correction itself consumes many physical qubits to build one reliable logical qubit. For now, most useful demonstrations remain experiments rather than products.", cn: "障碍同样真实。量子比特非常脆弱：热量、振动和游离的电磁噪声都能破坏它们赖以存在的脆弱状态。目前的机器需要极低温冷却和复杂的纠错，而纠错本身又要消耗许多物理量子比特才能凑出一个可靠的逻辑量子比特。就目前而言，大多数有用的演示仍属于实验，而不是产品。" },
      { en: "So the honest summary is this: quantum computing will probably not speed up your daily work, and it will not replace ordinary computers. Its value is narrower and, in that narrow range, potentially enormous.", cn: "所以诚实的总结是：量子计算大概不会加快你的日常工作，也不会取代普通计算机。它的价值范围更窄，而在那个窄范围内，潜力可能是巨大的。" }
    ],
    keyWords: [
      { w: "qubit", p: "/ˈkjuːbɪt/", c: "量子比特" },
      { w: "collapse", p: "/kəˈlæps/", c: "坍缩" },
      { w: "fragile", p: "/ˈfrædʒaɪl/", c: "脆弱的" },
      { w: "encryption", p: "/ɪnˈkrɪpʃn/", c: "加密" }
    ],
    questions: [
      { q: "Why is a quantum computer not simply a faster classical computer?", a: "Because it works in a fundamentally different way (superposition instead of 0/1 bits), and is only useful for particular kinds of problems." },
      { q: "What is the real difficulty in using qubits?", a: "Designing algorithms where wrong answers cancel out, since measurement collapses the state to one value." },
      { q: "Why is simulating molecules a natural fit?", a: "Because nature itself is quantum, so quantum machines model it naturally." },
      { q: "What limits today's quantum machines?", a: "Qubits are fragile and need heavy cooling and error correction, which costs many physical qubits." }
    ]
  },

  /* ===================== 新闻杂志 ===================== */
  {
    id: "school-lunch", cat: "news", level: "入门", emoji: "🍱", minutes: 3,
    title: "What Do Children Eat for Lunch Around the World?",
    titleCn: "世界各地的孩子中午吃什么？",
    summary: "从日本到芬兰，一份午餐里藏着的不只是食物，还有一个国家对孩子成长的态度。",
    body: [
      { en: "Lunch is a small event that happens in every school on Earth. But what is on the plate is very different from country to country.", cn: "午餐是地球上每所学校都会发生的一件小事。但盘子里的东西，各国差别很大。" },
      { en: "In Japan, students often eat together in the classroom, not in a dining hall. Some of them take turns serving the food to their classmates. The meal usually includes rice, soup, a main dish, and milk. Teachers eat the same food as the students.", cn: "在日本，学生常常在教室里一起吃饭，而不是在食堂。有些学生轮流给同学分餐。一顿饭通常包括米饭、汤、一份主菜和牛奶。老师和学生吃的一样。" },
      { en: "In Finland, every student gets a free hot lunch from the age of seven. The food is simple: soup, bread, salad, and sometimes a warm main dish. The idea began more than seventy years ago and is now seen as a normal part of going to school.", cn: "在芬兰，每个学生从七岁起都可以免费吃一顿热午餐。食物很简单：汤、面包、沙拉，有时有一道热主菜。这个做法始于七十多年前，现在已经被看作是上学的一部分。" },
      { en: "In Mexico, lunch is often the biggest meal of the day. Many schools have a long break in the middle of the day, and children may go home to eat with their families.", cn: "在墨西哥，午餐常常是一天中最重要的一餐。许多学校在中午有很长的休息时间，孩子们可能会回家和家人一起吃。" },
      { en: "In India, millions of schools serve a free cooked meal under a government programme. For some children, it is the most reliable meal of their day. Studies have found that the programme also helped more children come to school.", cn: "在印度，数百万所学校根据政府计划提供免费的热餐。对一些孩子来说，这是他们一天中最可靠的一顿饭。研究还发现，这个计划也让更多孩子愿意来上学。" },
      { en: "Different countries, different menus. But they seem to share one idea: a full stomach helps a child learn.", cn: "不同的国家，不同的菜单。但它们似乎有一个共同的想法：吃饱肚子，孩子才能学得进去。" }
    ],
    keyWords: [
      { w: "serve", p: "/sɜːv/", c: "供应；端上" },
      { w: "programme", p: "/ˈprəʊɡræm/", c: "计划；项目" },
      { w: "reliable", p: "/rɪˈlaɪəbl/", c: "可靠的" }
    ],
    questions: [
      { q: "Where do Japanese students usually eat lunch?", a: "In their classroom, and some take turns serving food to classmates." },
      { q: "Since when has Finland offered free hot lunch?", a: "For more than seventy years; every student gets it from the age of seven." },
      { q: "What extra effect did India's meal programme have?", a: "It helped more children come to school." }
    ]
  },
  {
    id: "car-free-city", cat: "news", level: "中级", emoji: "🚲", minutes: 4,
    title: "A City That Took the Cars Away",
    titleCn: "把汽车请出城市的城市",
    summary: "一座中等规模的欧洲城市，用十年时间把市中心的车流减少了七成。这不是禁车，而是一场关于空间重新分配的实验。",
    body: [
      { en: "In the early 2000s, the centre of this mid-sized European city had a familiar problem. Traffic filled the main streets at all hours. Air quality was poor, and the historic squares had become parking lots in all but name.", cn: "2000 年代初，这座欧洲中等城市的市中心有一个很常见的问题：主干道一天到晚堵满了车，空气质量很差，那些历史悠久的广场实际上已经变成了停车场。" },
      { en: "The city did not ban cars outright. Instead, it changed what the streets were for. Over ten years, it narrowed car lanes, widened pavements, added protected bicycle paths, and converted several central streets into pedestrian zones. Parking spaces in the old town were reduced from about 2,000 to a few hundred.", cn: "这座城市并没有直接禁车，而是改变了街道的用途。十年间，它缩窄了车道，加宽了人行道，增设了受保护的自行车道，并把几条中心街道改成了步行区。老城区的停车位从约 2000 个减少到了几百个。" },
      { en: "At first there was strong opposition. Shop owners feared that customers would stop coming. Drivers complained about longer journeys. The city responded by running the changes as trials, publishing the data, and adjusting details based on feedback rather than reversing the whole plan.", cn: "一开始，反对声音很大。店主担心顾客不再来，司机抱怨绕路更远。城市的回应是把这些改变当作试点来做：公布数据，根据反馈调整细节，而不是推倒整个方案。" },
      { en: "The results, measured over a decade, were substantial. Car traffic in the centre fell by roughly seventy percent. Retail sales in the pedestrianised streets did not fall — in several streets they rose, because people who walk tend to stop more often. Air quality in the core improved, and noise complaints dropped sharply.", cn: "十年的测量结果显示，变化相当可观：市中心车流下降了大约七成。步行街的零售额没有下降——有几条街还上升了，因为走路的人更容易停下来。核心区的空气质量改善，关于噪音的投诉也大幅减少。" },
      { en: "The most interesting effect was not planned. Once the streets were pleasant, more people simply stayed outside longer. Cafés put tables on the pavement. Small shops returned. The centre became a place to spend time in, not just to pass through — and that, in the end, was the real goal.", cn: "最有趣的效果是计划之外的：街道变得宜人之后，人们干脆在外面待得更久了。咖啡馆把桌子摆到了人行道上，小店也回来了。市中心变成了一个可以「待着」的地方，而不只是路过的地方——而这，其实才是真正的目标。" }
    ],
    keyWords: [
      { w: "pedestrian", p: "/pəˈdestriən/", c: "行人；步行的" },
      { w: "opposition", p: "/ˌɒpəˈzɪʃn/", c: "反对" },
      { w: "substantial", p: "/səbˈstænʃl/", c: "可观的；实质的" },
      { w: "retail", p: "/ˈriːteɪl/", c: "零售" }
    ],
    questions: [
      { q: "What did the city do instead of banning cars?", a: "It changed street use: narrowed lanes, widened pavements, added bike paths, and made central streets pedestrian zones." },
      { q: "Why did shop owners oppose the plan?", a: "They feared customers would stop coming." },
      { q: "What was the effect on retail sales?", a: "They did not fall; in several streets they rose, because people on foot stop more often." },
      { q: "What was the unexpected result?", a: "People stayed outside longer, cafés expanded onto pavements, and small shops returned." }
    ]
  },
  {
    id: "ocean-trash", cat: "news", level: "高级", emoji: "🌊", minutes: 5,
    title: "Turning Ocean Plastic into Something Worth Keeping",
    titleCn: "把海洋塑料变成有用的东西",
    summary: "清除海洋塑料最难的从来不是「捞起来」，而是捞起来之后怎么办。一批项目正在给出新答案。",
    body: [
      { en: "The image is now familiar: a long floating barrier, a ship, and a net full of plastic. Cleanup projects have caught the public imagination, and in the last decade they have pulled thousands of tonnes of debris out of the sea. But the hardest part of the problem begins after the net is full.", cn: "这个画面如今已为人熟悉：一条长长的漂浮围栏、一艘船、一张装满塑料的网。清理项目抓住了公众的想象，过去十年间它们已从海中捞出了数千吨垃圾。但问题最难的部分，是从网被装满之后才开始的。" },
      { en: "Ocean plastic is not a clean, uniform material. It has been weathered by salt water and sunlight, mixed with fishing gear, algae and organic matter, and physically degraded into fragments of every size. Recyclers dislike it for the same reason cooks dislike a mixed basket of ingredients: it is hard to know what you are working with, and the output quality is difficult to guarantee.", cn: "海洋塑料并不是干净均匀的材料。它被海水和阳光老化，混杂着渔具、藻类和有机物，还被打碎成各种尺寸的碎片。回收商不喜欢它的理由，和厨师不喜欢一筐混装食材的理由一样：你不知道自己手上是什么，产出质量也就难以保证。" },
      { en: "For years, most collected material ended up incinerated or in landfill — which is a poor outcome, since the whole point was to remove it from the environment. Even worse, the logistics are unforgiving: collecting, sorting, drying and transporting wet, low-value scrap thousands of kilometres can consume more energy than the material is worth.", cn: "多年来，大部分收集到的材料最终被焚烧或填埋——这是个糟糕的结果，因为整件事的初衷正是把它从环境中移除。更糟的是，物流成本毫不留情：把潮湿、低价值的废料收集、分拣、烘干并运输数千公里，消耗的能量可能超过这些材料本身的价值。" },
      { en: "Several projects are now attacking this from the other end: designing the end product first, so that the material has a guaranteed destination. One approach blends recovered plastic with other polymers into durable sheets for use in furniture and construction. Another turns sorted, high-quality fractions back into new consumer goods, and attaches a verifiable traceability record so buyers know where it came from.", cn: "现在有些项目从另一端入手：先设计好最终产品，让这些材料有确定无疑的去处。一种做法是把回收塑料与其他聚合物共混，制成耐用的板材，用于家具和建筑；另一种做法是把分选出来的高品质部分重新做成消费品，并附上可核验的溯源记录，让买家知道它来自哪里。" },
      { en: "The uncomfortable conclusion, widely shared among researchers, is that cleanup cannot be the main answer. Removing plastic from the ocean is expensive, slow, and treats the symptom. The decisive numbers are all upstream: how much plastic enters the sea each year, and how quickly that flow can be cut. Cleanup buys time; it does not solve the problem.", cn: "研究者中普遍认同的一个不太舒服的结论是：清理不可能成为主要答案。把塑料从海里捞出来既昂贵又缓慢，而且只是在治标。决定性的数字都在上游：每年有多少塑料进入海洋，这个流量能多快被切断。清理买来的是时间，它并不解决问题。" },
      { en: "That does not make the work pointless. It reframes it. The value of these projects may lie less in the tonnes collected than in what they prove: that recovered ocean material can have a real market, and that the price of leaving plastic in the water is not zero.", cn: "这并不意味着这些工作没有意义，它只是重新定义了意义所在。这些项目的价值，也许并不在于捞起了多少吨，而在于它们证明了什么：回收的海洋材料可以拥有真实的市场，而把塑料留在水里的代价并不是零。" }
    ],
    keyWords: [
      { w: "debris", p: "/ˈdebriː/", c: "碎片；垃圾" },
      { w: "degrade", p: "/dɪˈɡreɪd/", c: "降解；退化" },
      { w: "logistics", p: "/ləˈdʒɪstɪks/", c: "物流" },
      { w: "traceability", p: "/ˌtreɪsəˈbɪləti/", c: "可追溯性" }
    ],
    questions: [
      { q: "Why do recyclers dislike ocean plastic?", a: "Because it is weathered, mixed with other materials, and broken into fragments of every size, so output quality is hard to guarantee." },
      { q: "What was the fate of most collected material?", a: "It was incinerated or sent to landfill." },
      { q: "How do newer projects try to solve the problem?", a: "By designing the end product first, so the recovered material has a guaranteed market and value." },
      { q: "What do researchers say about cleanup?", a: "It cannot be the main answer — it is slow and expensive and treats the symptom; cutting the flow of plastic into the sea matters more." }
    ]
  },
  {
    id: "space-travel", cat: "news", level: "高级", emoji: "🚀", minutes: 5,
    title: "The New Space Race Is About Cost, Not Glory",
    titleCn: "新一轮太空竞赛，比的是成本而不是荣耀",
    summary: "当把一公斤送上轨道的价格下降一个数量级，改变的并不只是航天业。",
    body: [
      { en: "For most of its history, space was a government project. The Apollo programme consumed a substantial share of a national budget, and each launch was treated as a one-off engineering event. Cost was a constraint to be managed, not the central metric.", cn: "在历史上的大部分时间里，太空是政府的项目。阿波罗计划消耗了一个国家预算中相当可观的一部分，每次发射都被当作一次性的工程事件。成本是需要控制的约束条件，而不是核心指标。" },
      { en: "What changed over the past fifteen years is not a single breakthrough but a business model. Reusable first stages turned the most expensive part of a rocket from disposable hardware into an asset with a service life. Once a booster can fly many times instead of once, the economics shift in a way that is difficult to overstate: the price per kilogram to low Earth orbit has fallen by roughly an order of magnitude.", cn: "过去十五年里改变的并不是某一项突破，而是一种商业模式。可回收的一级火箭，把火箭上最昂贵的部分从一次性硬件变成了有使用寿命的资产。一旦助推器能飞很多次而不是一次，经济账就会以一种很难被高估的方式发生改变：进入近地轨道的每公斤价格大约下降了一个数量级。" },
      { en: "Cheaper access changes who can participate. Universities that could never have afforded a dedicated launch can now fly small satellites as secondary payloads. Research groups that once waited years for a slot can iterate in months. Earth-observation constellations have moved from a handful of expensive assets to hundreds of small, replaceable units.", cn: "更便宜的进入方式改变了谁能参与其中。曾经完全负担不起专属发射的大学，现在可以搭载小卫星上天；曾要排队等上好几年的研究团队，如今几个月就能迭代一次。对地观测星座也从少数昂贵资产，变成了数百个可替换的小单元。" },
      { en: "It also changes how the industry is judged. When launches are cheap, failure becomes survivable. A company that loses a vehicle can analyse the data and fly again in weeks, which is a fundamentally different risk posture from an era when a single failure could end a programme. This tolerance for iteration, borrowed from software culture, may be the deeper shift.", cn: "它还改变了这个行业的评价方式。当发射变便宜，失败就变得可以承受：损失一枚火箭的公司可以分析数据、几周后再次发射——这与「一次失败就可能终结一个项目」的时代有着根本不同的风险姿态。这种从软件文化里借来的对迭代的宽容，也许是更深层的变化。" },
      { en: "The caveats deserve equal weight. Cheap launch has also multiplied orbital debris, and the regulatory framework has not kept pace. Astronomy is being affected by reflective satellites in ways that are still being measured. And low cost does not mean low consequence: the technical difficulty of human spaceflight beyond low orbit remains essentially unchanged.", cn: "但需要同等重视的还有另一面：廉价发射也让轨道碎片成倍增加，而监管框架并没有跟上。天文观测正受到反光卫星的影响，影响程度仍在测量之中。而且低成本并不等于低后果：超出近地轨道的人类航天，其技术难度本质上并未改变。" },
      { en: "Still, the direction is clear. Space is shifting from a symbolic arena to an infrastructure market — closer to shipping or telecommunications than to a moon shot. Whether that is inspiring or deflating depends on what you were hoping to get from it.", cn: "不过方向是清楚的：太空正在从一个象征性的竞技场，转变为一个基础设施市场——它更像航运或电信，而不像一次登月壮举。这究竟令人振奋还是令人失落，取决于你原本期待从它那里得到什么。" }
    ],
    keyWords: [
      { w: "reusable", p: "/ˌriːˈjuːzəbl/", c: "可重复使用的" },
      { w: "booster", p: "/ˈbuːstə/", c: "助推器" },
      { w: "constellation", p: "/ˌkɒnstəˈleɪʃn/", c: "星座（卫星群）" },
      { w: "debris", p: "/ˈdebriː/", c: "碎片" }
    ],
    questions: [
      { q: "What changed the economics of space launch?", a: "Reusable first stages, which turned a disposable part into a reusable asset." },
      { q: "How much has the cost per kilogram to low Earth orbit fallen?", a: "By roughly an order of magnitude (about ten times)." },
      { q: "How does cheap launch change risk-taking?", a: "Failure becomes survivable, so companies can iterate quickly instead of treating one failure as fatal." },
      { q: "What are the concerns mentioned?", a: "More orbital debris, regulation lagging behind, effects on astronomy, and the unchanged difficulty of human spaceflight beyond low orbit." }
    ]
  }
];
