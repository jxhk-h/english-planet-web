/* 文章数据（第 3 批）—— 科技文章 8 篇（入门 3 / 中级 3 / 高级 2）
   追加进 window.ARTICLE_DATA；字段口径与 data-articles.js 完全一致。
   内容为科普性质的原创改写，涉及的科学事实以主流教科书与公开研究结论为准。
   本文件只新增，不修改任何已有文章。 */
(function () {
  "use strict";

  var NEW = [
    {
      id: "why-sky-blue", cat: "tech", level: "入门", emoji: "🌤️", minutes: 3,
      title: "Why Is the Sky Blue?",
      titleCn: "天空为什么是蓝的？",
      summary: "晴天抬头是蓝的，日落时同一片天却变成红橙色。答案藏在光的波长和空气分子的大小里。",
      body: [
        { en: "Look up on a clear day. The sky is blue. But at sunset, the same sky turns red and orange. Why?", cn: "晴天抬头看，天空是蓝的。可到了日落，同一片天空却变成红橙色。为什么？" },
        { en: "Sunlight looks white, but it is really many colours mixed together — red, orange, yellow, green, blue, and violet. When all of them reach your eye at once, you see white.", cn: "阳光看起来是白色的，其实它是许多颜色混在一起的——红、橙、黄、绿、蓝、紫。当它们同时进入你的眼睛，你看到的就是白色。" },
        { en: "These colours do not travel through air in the same way. Air is full of tiny molecules, far smaller than a wavelength of light. When sunlight hits them, the light is scattered in every direction.", cn: "这些颜色穿过空气的方式并不相同。空气里满是极小的分子，比光的波长小得多。阳光撞上它们时，光就被散射到四面八方。" },
        { en: "Here is the key: shorter wavelengths scatter much more than longer ones. Blue light has a shorter wavelength than red light, so it bounces around the sky far more often. That scattered blue light reaches your eyes from every direction — so the whole sky looks blue, not just the part near the sun.", cn: "关键在于：波长越短，散射越强。蓝光的波长比红光短，所以在天空中被弹来弹去的次数多得多。这些被散射的蓝光从四面八方进入你的眼睛——所以整片天空看起来都是蓝的，而不只是太阳附近那一片。" },
        { en: "At sunset, the sunlight has to travel through much more air to reach you. Most of the blue has already been scattered away. What is left is the red and orange.", cn: "日落时，阳光要穿过厚得多的空气才能到达你眼里。大部分蓝光已经被散射掉了，剩下的是红光和橙光。" },
        { en: "This is called Rayleigh scattering, after Lord Rayleigh, who worked out the mathematics in the 1870s. It also explains why the sky on the Moon is black: there is almost no air up there, so there is nothing to scatter the light.", cn: "这被称为瑞利散射，以 19 世纪 70 年代算出其中数学关系的瑞利勋爵命名。它也能解释为什么月球上的天空是黑色的：那里几乎没有空气，也就没有东西来散射光。" }
      ],
      keyWords: [
        { w: "scatter", p: "/ˈskætə/", c: "散射；散开" },
        { w: "wavelength", p: "/ˈweɪvleŋθ/", c: "波长" },
        { w: "sunset", p: "/ˈsʌnset/", c: "日落" }
      ],
      questions: [
        { q: "Why does the sky look blue?", a: "Because air molecules scatter blue light much more than red, and that scattered blue light reaches our eyes from every direction." },
        { q: "Why is the sunset red and orange?", a: "Because the light travels through more air, so most of the blue is scattered away and the red-orange part is what remains." },
        { q: "Why is the sky black on the Moon?", a: "Because there is almost no air to scatter the sunlight." }
      ]
    },
    {
      id: "how-batteries", cat: "tech", level: "入门", emoji: "🔋", minutes: 3,
      title: "How Does a Battery Store Power?",
      titleCn: "电池是怎么存电的？",
      summary: "电池不产生能量，它只是装能量。拆开来看，里面只有两件事：离子往一边走，再往另一边走。",
      body: [
        { en: "A battery looks simple: a small case with a plus sign on one end and a minus sign on the other. Inside, a lot of chemistry is going on.", cn: "电池看起来很简单：一个小外壳，一头是加号，一头是减号。但在里面，正在进行大量的化学反应。" },
        { en: "Every battery has three main parts: two electrodes and an electrolyte between them. The electrodes are usually made of different materials. The electrolyte lets certain particles move through it, but not others.", cn: "每块电池都有三个主要部分：两个电极，以及夹在它们中间的电解质。两个电极通常由不同的材料制成。电解质允许某些粒子穿过，却挡住另一些。" },
        { en: "In a lithium-ion battery — the kind in your phone — one electrode is made of a lithium compound. When you charge the battery, lithium ions travel through the electrolyte to the other electrode and stay there. When you use the battery, they travel back. The moving ions push electrons around a circuit outside the battery, and that flow of electrons is the electricity you use.", cn: "在锂离子电池里——也就是手机里那种——一个电极由含锂化合物制成。充电时，锂离子穿过电解质跑到另一个电极并留在那里；用电时，它们再跑回来。移动的离子推动电子在电池外部的电路里流动，而电子的这种流动，就是你用的电。" },
        { en: "Notice something important: the battery does not create energy. It stores it. The energy came from the power station, the solar panel, or the wall socket. A battery is a container — a very clever container, but a container.", cn: "注意一件重要的事：电池并不创造能量，它只是储存能量。能量来自发电站、太阳能板或墙上的插座。电池是个容器——一个非常聪明的容器，但终究是容器。" },
        { en: "Why do batteries wear out? Because with every trip, a few ions get stuck in the wrong place, and the materials slowly change shape. After a few hundred or a few thousand cycles, the battery cannot hold as much as it once did.", cn: "电池为什么会老化？因为每一次充放电，都有一些离子卡在了不该在的地方，材料也在慢慢变形。经过几百或几千次循环之后，电池就装不下当初那么多电了。" },
        { en: "This is why researchers are working on new materials — sodium instead of lithium, solid electrolytes instead of liquid ones. The chemistry changes. The idea does not: move something one way to store energy, move it back to use it.", cn: "这就是研究者们在寻找新材料的原因——用钠代替锂，用固态电解质代替液态的。化学在变，思路没变：把某种东西往一边搬，能量就存起来；搬回来，能量就放出来。" }
      ],
      keyWords: [
        { w: "battery", p: "/ˈbætəri/", c: "电池" },
        { w: "ion", p: "/ˈaɪən/", c: "离子" },
        { w: "store", p: "/stɔː/", c: "储存" }
      ],
      questions: [
        { q: "What are the three main parts of a battery?", a: "Two electrodes and an electrolyte between them." },
        { q: "Where does the energy in a battery come from?", a: "From outside — the battery stores energy, it does not create it." },
        { q: "Why do batteries wear out?", a: "Because over many cycles, ions get stuck and the materials slowly change shape." }
      ]
    },
    {
      id: "smart-home", cat: "tech", level: "入门", emoji: "🏠", minutes: 3,
      title: "The House That Notices Things",
      titleCn: "会「注意」事情的家",
      summary: "智能家居靠一堆小传感器知道屋里的情况。方便是真的，但你的作息也变成了数据，而且不只存在你家里。",
      body: [
        { en: "Twenty years ago, a house was a quiet thing. It did not know how many people lived in it, how warm it was, or when the lights were on. Today, many houses know all of this.", cn: "二十年前，房子是个安静的东西。它不知道里面住了几个人、有多暖、灯什么时候亮着。今天，许多房子全都知道。" },
        { en: "A smart home uses small sensors. A temperature sensor notices that a room is cold. A motion sensor notices that nobody has walked through a hallway for an hour. A door sensor notices that a window is open.", cn: "智能家居使用各种小传感器。温度传感器注意到某个房间冷了；动作传感器注意到已经一个小时没人走过走廊；门窗传感器注意到有一扇窗是开着的。" },
        { en: "Then the house can act. It can turn the heating down when everyone leaves for work. It can turn a light on when you walk in with your hands full. It can send a message to your phone if a window is open and rain is coming.", cn: "然后房子可以行动：全家出门上班时把暖气调低；你双手拎满东西进门时自动亮灯；如果窗户开着而雨要来了，就给你的手机发条消息。" },
        { en: "The idea sounds convenient, and often it is. But it also creates a new kind of question. If your house knows when you wake up, when you leave, and how long you shower, that information is valuable — and it does not live in your house alone. It usually travels to a company's computer, somewhere far away.", cn: "这个想法听起来很方便，而且往往确实方便。但它也带来了一类新问题。如果你的房子知道你几点醒、几点出门、洗澡洗多久，这些信息就很有价值——而且它们并不只待在你家里，通常会传到某家公司远方的服务器上。" },
        { en: "That is why security researchers keep warning about smart devices. Many of them are made cheaply, with old software and weak default passwords. A camera that watches your door can, if it is badly built, watch something else too.", cn: "这就是安全研究者不断对智能设备发出警告的原因。很多设备做得便宜，软件老旧，默认密码很弱。一台本来看着你家门口、但造得很糟糕的摄像头，也可能看着别的什么。" },
        { en: "None of this means smart homes are bad. It means a smart home is a small computer network that happens to have doors. And like any network, it should be set up with care — strong passwords, updates turned on, and a clear idea of what you actually want it to know.", cn: "这并不意味着智能家居不好。它意味着：一个智能家居，其实就是一个碰巧带门的小型计算机网络。和任何网络一样，它需要被小心地设置——强密码、打开自动更新，并且想清楚你究竟希望它知道些什么。" }
      ],
      keyWords: [
        { w: "sensor", p: "/ˈsensə/", c: "传感器" },
        { w: "notice", p: "/ˈnəʊtɪs/", c: "注意到" },
        { w: "network", p: "/ˈnetwɜːk/", c: "网络" }
      ],
      questions: [
        { q: "What does a smart home use to gather information?", a: "Small sensors that measure temperature, movement, and whether doors or windows are open." },
        { q: "What new problem do smart homes create?", a: "Your daily habits become data, and that data usually travels to a company's computer far away." },
        { q: "What advice does the article give?", a: "Set strong passwords, turn on updates, and decide clearly what you want the devices to know." }
      ]
    },
    {
      id: "sleep-science", cat: "tech", level: "中级", emoji: "😴", minutes: 4,
      title: "What Your Brain Does While You Sleep",
      titleCn: "你睡着的时候，大脑在做什么",
      summary: "睡眠不是「关机」。大脑整晚在循环工作，其中一件最重要的事，是把白天的经历从临时仓库搬进长期仓库。",
      body: [
        { en: "For a long time, people thought sleep was a kind of switching off. The body rested, the brain went quiet, and in the morning everything started again. We now know this picture is wrong.", cn: "很长一段时间里，人们认为睡眠就像关机：身体休息，大脑安静下来，第二天早上一切重新启动。我们现在知道，这个图景是错的。" },
        { en: "During the night, the brain moves through cycles of about ninety minutes. In deep sleep it is busy in a different way from when you are awake, but it is not quiet. In REM sleep — the stage where most dreaming happens — brain activity can look almost like waking activity.", cn: "夜里，大脑会以大约九十分钟为一轮反复循环。在深度睡眠中，它忙碌的方式和清醒时不同，但绝不是安静的。在 REM 睡眠阶段——大部分做梦发生在这里——大脑活动看起来几乎和清醒时一样。" },
        { en: "One of the most important jobs of sleep is memory. During the day, new experiences are first stored in a part of the brain called the hippocampus. During sleep, they are replayed — sometimes hundreds of times, much faster than in real life — and gradually moved to the cortex, where long-term memories live. Studying all night and skipping sleep is a bit like writing a letter and never posting it.", cn: "睡眠最重要的任务之一是记忆。白天，新的经历先被存放在大脑里一个叫海马体的地方。睡眠期间，它们会被重放——有时重放上百次，速度比现实中快得多——并逐渐转移到长期记忆所在的皮层。通宵复习而不睡觉，有点像写完信却从不寄出去。" },
        { en: "Sleep also affects the body. Hormones that control growth and appetite are released mainly during sleep. The immune system works better after a full night. And the risk of simple mistakes goes up sharply when you are short of sleep.", cn: "睡眠也影响身体。控制生长和食欲的激素主要在睡眠中分泌。睡够一整晚之后，免疫系统工作得更好。而睡眠不足时，犯低级错误的概率会明显上升。" },
        { en: "Different ages need different amounts. Most teenagers need about eight to ten hours. Many get six. That gap is not laziness or a lack of discipline — it is biology meeting a school timetable that was designed before anyone studied sleep.", cn: "不同年龄需要的睡眠量不同。大多数青少年需要大约八到十小时，很多人只睡六小时。这个差距不是懒，也不是不自律——是生物规律撞上了在「睡眠研究」出现之前就定下来的作息表。" },
        { en: "So what actually helps? A regular bedtime, less light in the evening, and a cool, dark room. Not complicated. The hard part is believing that sleep is work — because it is. It is the work your brain does when you are not looking.", cn: "那什么才真的有用？固定的就寝时间、晚上少接触强光、凉爽黑暗的房间。并不复杂。难的是相信「睡觉也是干活」——因为它确实是。那是你没在看着的时候，大脑所做的活儿。" }
      ],
      keyWords: [
        { w: "sleep", p: "/sliːp/", c: "睡眠" },
        { w: "memory", p: "/ˈmeməri/", c: "记忆" },
        { w: "brain", p: "/breɪn/", c: "大脑" }
      ],
      questions: [
        { q: "Why is the old idea of sleep wrong?", a: "Because the brain is not switched off — it is busy doing important work all night." },
        { q: "What happens to memories during sleep?", a: "They are replayed, then gradually moved from the hippocampus to the cortex." },
        { q: "What does the article say about teenagers and sleep?", a: "Most need about eight to ten hours, but many get only six." }
      ]
    },
    {
      id: "passwords", cat: "tech", level: "中级", emoji: "🔑", minutes: 4,
      title: "Why Passwords Are Not Enough",
      titleCn: "为什么光有密码已经不够了",
      summary: "密码只有一个秘密，而一个秘密可以泄露、可以复用、可以被骗。真正的出路不是更复杂的密码，而是更少的密码。",
      body: [
        { en: "In 1961, at MIT, a professor named Fernando Corbató built a system that gave every user a private password. It solved one problem and created another, and we have been living with the second problem ever since.", cn: "1961 年，在麻省理工学院，一位名叫费尔南多·科尔巴托的教授做出了一个系统，让每个用户拥有自己的密码。它解决了一个问题，也制造了另一个问题——从那以后，我们一直生活在第二个问题里。" },
        { en: "The problem is simple: a password is a secret you have to remember, write down, or store somewhere. Every one of those steps can fail. People reuse passwords across sites. Sites get attacked and their databases leak. And attackers do not guess one password at a time — they take lists of millions of leaked passwords and try them everywhere at once.", cn: "问题很简单：密码是一个你不得不记住、写下来或存在某处的秘密。这几步中的任何一步都可能出问题。人们在不同网站重复使用同一个密码；网站被攻击，数据库被泄露。而攻击者不会一个一个地猜——他们拿着包含数百万条泄露密码的清单，在所有网站上同时试。" },
        { en: "One more thing has changed the game: phishing. Instead of breaking into a computer, an attacker simply asks you for your password, using a page that looks exactly like the real one. It works because it does not attack the technology. It attacks the habit of trusting what you see.", cn: "还有一件事改变了游戏规则：网络钓鱼。攻击者不去入侵电脑，而是直接问你要密码——用一个和真页面一模一样的页面。它之所以有效，是因为它攻击的不是技术，而是「看到就相信」的习惯。" },
        { en: "The defence that actually works is called two-factor authentication, or 2FA. It adds a second, different kind of proof: something you have, such as your phone, in addition to something you know, such as your password. Even if someone steals your password, they still cannot get in.", cn: "真正有效的防线叫双因素认证，简称 2FA。它要求额外一种不同类型的凭证：除了你知道的东西（密码），还要有你拥有的东西（比如你的手机）。即使有人偷走了你的密码，他们仍然进不去。" },
        { en: "A newer and stronger idea is the passkey. Instead of a secret you type, your device holds a private key that never leaves it. To log in, the site sends a challenge, your device signs it, and the site checks the signature. There is nothing to steal from the site's database, nothing to phish, and nothing to remember.", cn: "更新的思路是通行密钥（passkey）。它不再让你输入秘密，而是由你的设备保存一把从不外出的私钥。登录时，网站发出一个挑战，你的设备对它签名，网站验证这个签名。网站数据库里没有东西可偷，没有东西可钓，也没有东西需要记住。" },
        { en: "Passwords will be with us for a while. But the direction is clear: the future of logging in is not a better password. It is fewer passwords.", cn: "密码还会陪伴我们一段时间。但方向是清楚的：登录这件事的未来，不是更好的密码，而是更少的密码。" }
      ],
      keyWords: [
        { w: "password", p: "/ˈpɑːswɜːd/", c: "密码" },
        { w: "phishing", p: "/ˈfɪʃɪŋ/", c: "网络钓鱼" },
        { w: "signature", p: "/ˈsɪɡnətʃə/", c: "签名" }
      ],
      questions: [
        { q: "Why are reused passwords dangerous?", a: "If one site leaks, attackers can try that same password on every other site you use." },
        { q: "What is phishing?", a: "Tricking you into typing your password into a fake page that looks exactly like the real one." },
        { q: "How does 2FA help?", a: "It requires a second kind of proof, so a stolen password alone is not enough to log in." }
      ]
    },
    {
      id: "lab-meat", cat: "tech", level: "中级", emoji: "🧫", minutes: 4,
      title: "Meat Grown in a Lab",
      titleCn: "在实验室里长出来的肉",
      summary: "2013 年，一份从未属于任何动物的汉堡在伦敦被端上桌，造价超过二十五万欧元。技术在进步，但难点不在科学。",
      body: [
        { en: "In 2013, a research team in the Netherlands cooked a hamburger for a small group of tasters in London. It had cost more than 250,000 euros to make. The meat in it had never been part of an animal.", cn: "2013 年，荷兰的一个研究团队在伦敦为几位品尝者煎了一份汉堡。它的制作成本超过二十五万欧元。里面的肉，从未属于任何一只动物。" },
        { en: "The idea behind cultivated meat is not complicated. Take a small sample of muscle cells from an animal. Put them in a container with nutrients, warmth, and a surface to grow on. The cells divide, just as they would inside a body. After a few weeks, you have something that can be cooked.", cn: "培养肉背后的想法并不复杂。从动物身上取一点点肌肉细胞，放进一个盛有营养、保持温度、并提供附着面的容器里。细胞会像在身体里一样分裂增殖。几周之后，你就得到了可以下锅的东西。" },
        { en: "The advantages are easy to list. No animal has to be killed. You can grow meat close to where people live, so far less transport is needed. And because the cells grow in a clean container, you do not need antibiotics to keep animals healthy.", cn: "好处很容易列出来：没有动物需要被宰杀；可以在人们居住的地方附近生产，运输量大大减少；而且因为细胞是在干净的容器里生长，不需要为了让牲畜不生病而使用抗生素。" },
        { en: "The problems are also easy to list. Growing cells is expensive, and making a large amount is much harder than making a small amount. Most processes still need a nutrient mix that is costly to produce. And the texture of meat — the way muscle fibres line up — is very hard to copy. A nugget is one thing; a steak is another.", cn: "问题也很容易列出来：培养细胞很贵，而大批量生产比小批量难得多。多数工艺仍需要一种造价高昂的营养液。肉的口感——也就是肌肉纤维排列的方式——极难复制。做出肉块是一回事，做出一块牛排是另一回事。" },
        { en: "There is also a question of energy. Running a clean, warm bioreactor for weeks takes electricity. If that electricity comes from coal, the environmental benefit shrinks. The technology only makes sense as part of a cleaner energy system.", cn: "还有一个能源问题。让一个干净、恒温的生物反应器运转数周需要耗电。如果这些电来自燃煤，环境上的好处就会缩水。这项技术只有放在更清洁的能源体系里，才说得通。" },
        { en: "So where does that leave us? Cultivated meat is real, and the field is growing — but slowly, and mainly in small amounts at high prices. Whether it ever replaces ordinary meat is not really a scientific question. It is a question about money, rules, and what people are willing to eat.", cn: "那么我们现在处在哪一步？培养肉是真实存在的，这个领域也在成长——但很慢，而且主要是小批量、高价格。它最终会不会取代普通肉类，其实不是一个科学问题，而是关于钱、规则，以及人们愿意吃什么的问题。" }
      ],
      keyWords: [
        { w: "cell", p: "/sel/", c: "细胞" },
        { w: "grow", p: "/ɡrəʊ/", c: "生长；种植" },
        { w: "texture", p: "/ˈtekstʃə/", c: "质地；口感" }
      ],
      questions: [
        { q: "What did the 2013 hamburger demonstrate?", a: "That meat can be grown from cells outside an animal — although it was extremely expensive." },
        { q: "What are the main advantages of cultivated meat?", a: "No animals are killed, less transport is needed, and antibiotics can be avoided." },
        { q: "Why is producing a steak harder than producing a nugget?", a: "Because it is hard to reproduce the texture — the way muscle fibres line up." }
      ]
    },
    {
      id: "quantum-error", cat: "tech", level: "高级", emoji: "⚛️", minutes: 5,
      title: "The Hardest Problem in Quantum Computing",
      titleCn: "量子计算中最难的问题",
      summary: "量子比特极其脆弱，环境一扰动就丢失信息。真正的难点不是造出更好的比特，而是让成千上万个比特一起不出错。",
      body: [
        { en: "A quantum computer stores information in qubits. Unlike an ordinary bit, which is either 0 or 1, a qubit can be in a combination of both. That is what gives quantum computers their power — and also their weakness.", cn: "量子计算机用量子比特存储信息。普通比特非 0 即 1，而量子比特可以处在二者的叠加态。这既赋予了量子计算机力量，也正是它脆弱的原因。" },
        { en: "A qubit is a physical object, and physical objects are fragile. A tiny change in temperature, a stray magnetic field, a vibration in the room — any of these can disturb a qubit and destroy the information it holds. This process is called decoherence, and it happens fast: in many current devices, a qubit holds its state for only a fraction of a millisecond.", cn: "量子比特是一个物理实体，而物理实体是脆弱的。温度的微小变化、一点杂散磁场、房间里的振动——任何一项都可能干扰量子比特，破坏它承载的信息。这个过程叫「退相干」，而且发生得很快：在许多现有设备中，一个量子比特只能保持状态不到一毫秒。" },
        { en: "The obvious solution — build better qubits — only goes so far. The deeper solution is to stop relying on single qubits. Instead, spread one piece of logical information across many physical qubits, and correct errors as they appear. This is quantum error correction.", cn: "最直观的办法——造出更好的量子比特——只能走这么远。更根本的思路是不再依赖单个量子比特，而是把一条逻辑信息分散到许多物理量子比特上，并在错误出现时随时纠正。这就是量子纠错。" },
        { en: "The standard approach is called the surface code. It arranges physical qubits in a two-dimensional grid and checks them constantly, in a way that reveals whether an error happened without revealing the information itself. That last part is the hard part: measuring a quantum state usually destroys it.", cn: "标准做法叫做「表面码」。它把物理量子比特排成一个二维网格，不断进行检查，方式要能暴露「是否出了错」，又不能暴露信息本身。最后这一点正是难点：测量一个量子态，通常就会破坏它。" },
        { en: "Error correction only works if the physical error rate is below a certain value — the threshold. Above it, adding more qubits makes things worse, not better. Below it, each additional layer of correction makes the logical qubit more reliable. Hardware has only recently begun to reach this threshold.", cn: "纠错只有在物理错误率低于某个数值时才有效——这个数值叫「阈值」。高于阈值，加更多量子比特只会更糟；低于阈值，每多一层纠错，逻辑量子比特就更可靠一点。目前的硬件只是最近才开始触及这个阈值。" },
        { en: "The numbers explain why useful quantum computers are still years away. A single high-quality logical qubit may require thousands of physical qubits, and a useful calculation may require thousands of logical qubits. That means millions of physical qubits — every one of them working well enough. The field is making real progress, but it is solving a problem where progress is measured in orders of magnitude.", cn: "这些数字解释了为什么真正有用的量子计算机还需要很多年。一个高质量的逻辑量子比特可能需要上千个物理量子比特，而一次有用的计算可能需要上千个逻辑量子比特——那就是几百万个物理量子比特，而且每一个都要足够好。这个领域确实在进步，但它面对的是一道以「数量级」为单位衡量的难题。" }
      ],
      keyWords: [
        { w: "qubit", p: "/ˈkjuːbɪt/", c: "量子比特" },
        { w: "error", p: "/ˈerə/", c: "错误；误差" },
        { w: "correct", p: "/kəˈrekt/", c: "纠正" }
      ],
      questions: [
        { q: "What is decoherence?", a: "The process in which a qubit loses its quantum state because of disturbances from its environment." },
        { q: "Why can't we simply measure qubits to check for errors?", a: "Because measuring a quantum state usually destroys it." },
        { q: "What is the threshold, and why does it matter?", a: "It is the error rate below which adding more qubits improves reliability — above it, more qubits make things worse." }
      ]
    },
    {
      id: "llm-limit", cat: "tech", level: "高级", emoji: "🧠", minutes: 5,
      title: "What Large Language Models Still Cannot Do",
      titleCn: "大语言模型还做不到什么",
      summary: "它们的训练目标是「预测下一个词」，不是「讲出真相」。理解这条区别，就知道该在什么地方信任它、在什么地方核对它。",
      body: [
        { en: "Over the past few years, large language models have gone from finishing your sentence to writing working code, passing exams, and holding a conversation that feels, most of the time, like talking to a person. It is reasonable to ask what they still cannot do.", cn: "过去几年里，大语言模型从「帮你把句子写完」，发展到能写可运行的代码、通过考试，并且能进行一种大多数时候感觉像在和真人说话的对话。于是问一句「它们还做不到什么」，是很合理的。" },
        { en: "Start with what a language model actually is. At its core, it predicts the next token — a piece of a word — based on everything that came before. It does this extremely well, because it has read an enormous amount of text. But the objective is prediction, not truth. A model that produces a confident, fluent, completely wrong answer is not broken. It is doing exactly what it was trained to do.", cn: "先看看语言模型的本质是什么。它的核心任务是：根据前面出现的一切，预测下一个 token（一个词的一部分）。它做得极其出色，因为它读过海量的文本。但它的目标是「预测」，不是「真相」。一个给出自信、流畅、却完全错误的答案的模型，并没有坏掉——它只是正在做它被训练去做的事。" },
        { en: "This is why models hallucinate. They do not have a built-in way to check whether a statement is true. When a model cites a paper that does not exist, it is not lying, because lying requires knowing the truth. It is filling in a pattern.", cn: "这就是模型会「产生幻觉」的原因。它们没有内置的方法去核对一个说法是否真实。当一个模型引用一篇并不存在的论文时，它不是在撒谎——因为撒谎需要知道真相。它只是在补全一个模式。" },
        { en: "Second, models have no persistent memory of their own. Each conversation starts fresh. Anything a model seems to \"remember\" about you has been put there by the system around it, not learned by the model itself.", cn: "第二，模型自身没有持久的记忆。每一次对话都是从头开始。模型看起来「记得」你的任何事，都是它周围的系统放进去的，而不是模型自己学到的。" },
        { en: "Third, they struggle with tasks that require long chains of reliable reasoning. A model that gets 95% of individual steps right will still fail most ten-step problems, because the errors multiply. Tools, code execution, and step-by-step checking help — but they help by adding structure around the model, not by fixing the model itself.", cn: "第三，它们在需要长链条可靠推理的任务上很吃力。一个单步正确率 95% 的模型，在十步的问题上仍然大多会失败，因为误差会相乘。工具、代码执行、逐步核对都有帮助——但它们的帮助方式是给模型加上一套外部结构，而不是修好模型本身。" },
        { en: "Fourth, they are not grounded in the world. They do not touch objects, run experiments, or feel consequences. Everything they know came through text or images, which means everything they know is second-hand.", cn: "第四，它们并不扎根于真实世界。它们不触摸物体、不做实验、不承担后果。它们知道的一切都来自文本或图像——也就是说，它们知道的一切都是二手的。" },
        { en: "None of this makes them useless. Quite the opposite: knowing exactly where the limits are is what makes a tool safe to use. Use a language model where language is the problem — drafting, summarising, translating, explaining. Check it where facts matter. And remember that fluent is not the same as correct.", cn: "这些都不意味着它们没用。恰恰相反：清楚地知道边界在哪里，才是让一个工具可以被安全使用的前提。在「语言本身是问题」的地方使用它——起草、摘要、翻译、讲解；在事实至关重要的地方核对它。并且记住：流畅不等于正确。" }
      ],
      keyWords: [
        { w: "model", p: "/ˈmɒdl/", c: "模型" },
        { w: "predict", p: "/prɪˈdɪkt/", c: "预测" },
        { w: "hallucinate", p: "/həˈluːsɪneɪt/", c: "（模型）产生幻觉" }
      ],
      questions: [
        { q: "What is a language model's basic job?", a: "Predicting the next token, based on all the text that came before it." },
        { q: "Why do models \"hallucinate\"?", a: "Because they are optimised for fluent prediction rather than truth, and have no built-in way to check facts." },
        { q: "Why do long reasoning tasks cause trouble?", a: "Because small per-step error rates multiply across a long chain of steps." }
      ]
    }
  ];

  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(NEW);
})();
