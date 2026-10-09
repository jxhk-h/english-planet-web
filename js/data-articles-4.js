/* 文章数据（第 4 批）—— 新闻杂志 8 篇（入门 3 / 中级 3 / 高级 2）
   追加进 window.ARTICLE_DATA；字段口径与 data-articles.js 完全一致。
   体裁为「趋势报道 / 现象解读」，事实陈述保持克制，数字均取公开可查的常见口径并在文中标明为估算。
   本文件只新增，不修改任何已有文章。本批完成后文章总数 36 篇。 */
(function () {
  "use strict";

  var NEW = [
    {
      id: "bike-bus", cat: "news", level: "入门", emoji: "🚲", minutes: 3,
      title: "The Bike Bus That Rolls to School",
      titleCn: "骑车上学队",
      summary: "一群孩子一起骑车上学，有固定路线、固定站点和志愿者家长。它解决的不是交通问题，而是「一个人不敢骑」的问题。",
      body: [
        { en: "In some cities, children do not take a bus to school. They ride a bike — all together, in a group, with adults at the front and at the back. It is called a bike bus.", cn: "在一些城市，孩子们不是坐公交上学，而是骑自行车——一整群一起骑，前后有大人护送。这被称为「骑车巴士」。" },
        { en: "The idea started with a simple problem. Many parents want their children to cycle to school, but they worry about traffic. Riding alone feels dangerous. Riding in a group of twenty or thirty children, all moving at the same slow speed, feels completely different — and it is.", cn: "这个想法源于一个简单的问题。很多家长希望孩子骑车上学，却担心路上的车流。一个人骑很危险；而二三十个孩子一起骑、以同样缓慢的速度前进，感觉完全不同——而且事实上也确实不同。" },
        { en: "A bike bus runs on a fixed route, like a real bus. It has stops. It has a timetable. Children join at their stop and leave at their stop. Parents take turns riding along as volunteers, and nobody pays.", cn: "骑车巴士像真正的公交一样有固定路线、有站点、有时刻表。孩子们在自己那一站加入，到自己那一站离开。家长轮流充当志愿护送者，全程不收费。" },
        { en: "The idea appeared first in Europe and has since spread to cities in many countries. In the morning you can sometimes see one: a long line of children on bikes, bells ringing, taking up the whole lane, moving at about twelve kilometres an hour.", cn: "这个做法最早出现在欧洲，后来传播到许多国家的城市。早晨有时你能看到这样一支队伍：一长串自行车上的孩子，铃声响成一片，占满整条车道，以每小时十二公里左右的速度前进。" },
        { en: "The benefits are not only about exercise. Children who cycle to school arrive more awake. They learn to move safely in traffic — a skill they will need as adults. And the street becomes quieter and cleaner for everyone who lives on it.", cn: "好处不只是锻炼身体。骑车到校的孩子更清醒；他们学会在车流中安全穿行——这是成年后必需的技能。而对住在街边的人来说，街道变得更安静、更干净了。" },
        { en: "There are difficulties too. A bike bus needs volunteers, safe routes, and permission from the local government. In cities built around cars, one morning bike bus can produce one morning of complaints. But the complaints usually fade — and the line of children usually gets longer.", cn: "困难也有。骑车巴士需要志愿者、安全的路线，以及地方政府的许可。在以汽车为中心建起来的城市里，一支骑车队伍往往先招来一早晨的抱怨。但抱怨通常会淡下去，而队伍通常会变长。" }
      ],
      keyWords: [
        { w: "bike", p: "/baɪk/", c: "自行车" },
        { w: "route", p: "/ruːt/", c: "路线" },
        { w: "volunteer", p: "/ˌvɒlənˈtɪə/", c: "志愿者" }
      ],
      questions: [
        { q: "What is a bike bus?", a: "A group of children cycling to school together on a fixed route, with adult volunteers." },
        { q: "Why do parents prefer it to children riding alone?", a: "Because riding in a large, slow-moving group is much safer and easier for drivers to see." },
        { q: "What problems do bike buses face?", a: "They need volunteers, safe routes and official permission, and they can cause complaints in car-centred cities." }
      ]
    },
    {
      id: "repair-cafe", cat: "news", level: "入门", emoji: "🔧", minutes: 3,
      title: "The Repair Café: Fixing Things Together",
      titleCn: "修补咖啡馆：一起把东西修好",
      summary: "2009 年从阿姆斯特丹开始的一种活动：带上坏掉的东西，志愿者帮你免费修。修的东西不多，但习惯正在扩散。",
      body: [
        { en: "In 2009, in Amsterdam, a woman named Martine Postma organised the first Repair Café. The idea was simple: people bring broken things, and volunteers help them fix those things — for free.", cn: "2009 年，在阿姆斯特丹，一位名叫玛蒂娜·波斯特玛的女性组织了第一家「修补咖啡馆」。想法很简单：人们带来坏掉的东西，志愿者帮他们免费修好。" },
        { en: "At that first café there were tables for electronics, clothes, furniture and bicycles. Volunteers sat with tools. Visitors brought a lamp that did not work, a chair with a broken leg, a jacket with a torn sleeve. Together they opened it up, found the problem, and fixed it.", cn: "在第一家咖啡馆里，有修理电器、衣服、家具和自行车的桌子。志愿者带着工具坐镇。来的人带来不亮的台灯、断了腿的椅子、破了袖子的外套。他们一起把东西拆开，找到毛病，然后修好。" },
        { en: "The idea spread quickly. There are now thousands of Repair Cafés around the world, in libraries, community centres and church halls. Some open once a month. Some open every week. All of them work in the same way.", cn: "这个想法传播得很快。如今全世界有成千上万家修补咖啡馆，开在图书馆、社区中心和教会活动室里。有的每月一次，有的每周一次。它们的运作方式都一样。" },
        { en: "Why does it matter? Because a large share of what we throw away is not actually broken beyond repair. A toaster with a broken switch, a shirt missing a button, a bike with a loose brake — most of these can be fixed in twenty minutes with the right tool and someone who knows how.", cn: "为什么这重要？因为我们扔掉的东西里，很大一部分其实并没有坏到不能修。开关坏了的烤面包机、掉了扣子的衬衫、刹车松了的自行车——只要有合适的工具和一个懂行的人，大部分二十分钟就能修好。" },
        { en: "Repair Cafés have another purpose too, and the people who run them will tell you it is the more important one. They are places where people talk. An older volunteer who repaired radios for forty years sits next to a teenager who has never held a screwdriver. Something gets passed on that has nothing to do with the toaster.", cn: "修补咖啡馆还有另一个目的，而办活动的人会告诉你，那才是更重要的一个：这里是人说话的地方。修了四十年收音机的老志愿者，坐在从没拿过螺丝刀的少年旁边。有些东西被传递下去，而那和烤面包机无关。" },
        { en: "The number of things repaired at these cafés is small compared with what the world throws away. But the point is not the number. The point is the habit — and the habit is spreading.", cn: "和全世界扔掉的东西相比，这些咖啡馆修好的东西数量很少。但重点不在数量，而在习惯——而这个习惯正在扩散。" }
      ],
      keyWords: [
        { w: "repair", p: "/rɪˈpeə/", c: "修理" },
        { w: "volunteer", p: "/ˌvɒlənˈtɪə/", c: "志愿者" },
        { w: "fix", p: "/fɪks/", c: "修好；固定" }
      ],
      questions: [
        { q: "What happens at a Repair Café?", a: "People bring broken items and volunteers help them fix those items, for free." },
        { q: "Where and when did the first Repair Café open?", a: "In Amsterdam in 2009, organised by Martine Postma." },
        { q: "What is the \"more important\" purpose the article mentions?", a: "Bringing people together and passing on practical skills." }
      ]
    },
    {
      id: "night-library", cat: "news", level: "入门", emoji: "🌙", minutes: 3,
      title: "Libraries After Dark",
      titleCn: "天黑之后的图书馆",
      summary: "越来越多的公共图书馆开出了「夜间自习室」：没有馆员，刷卡进门，灯和暖气开着。有人需要的，不只是一本书。",
      body: [
        { en: "Most libraries close in the evening. For students who share a small flat, or for people who work during the day, this is a problem. In a growing number of cities, public libraries are trying a different answer: reading rooms that stay open late — and in some cases, through the night.", cn: "大多数图书馆晚上就关门了。对合租小房子的学生、或者白天要上班的人来说，这是个问题。在越来越多的城市，公共图书馆正在尝试另一种答案：开到很晚的自习室——有些甚至整夜开放。" },
        { en: "The idea is not new everywhere. Many university libraries have long extended their hours during exam periods. What is newer is that public libraries are experimenting with it — for everyone, not only for students.", cn: "这个做法并非处处都是新事物。许多大学图书馆在考试季一直有延长开放的传统。更新的一点是：公共图书馆也在尝试，而且是对所有人开放，不只面向学生。" },
        { en: "A late-night reading room usually works differently from the main library. There are no staff at the desks. You enter with a card. Lights and heating are on, the shelves are open, and cameras watch the door. Some have a machine for hot drinks.", cn: "夜间自习室通常和主馆的运作方式不同。服务台没有馆员，你刷卡进门。灯和暖气开着，书架开放取阅，门口有监控。有些还配有热饮机。" },
        { en: "The people who use these rooms are not only readers. There are students, of course. There are also people who need a quiet place to finish work, people living in temporary housing, and people who simply do not have a warm, safe room of their own. A library that stays open is, for them, something more than a library.", cn: "使用这些房间的人不只是在读书的人。当然有学生，也有需要一个安静地方把工作做完的人，有住在临时住所里的人，还有根本没有一间属于自己的温暖安全房间的人。对他们来说，一座开着的图书馆，不只是图书馆。" },
        { en: "There are costs, and they are real. Keeping a building open costs money, and staff cannot be there all night. That is why many of these projects are limited, funded by local government or donations, and watched carefully to see whether people actually come.", cn: "成本是实实在在的。让一栋建筑持续开放要花钱，而且不可能整夜安排馆员值守。所以很多这类项目规模有限，靠地方政府或捐款支持，并且被仔细观测：到底有没有人来。" },
        { en: "Early experience suggests they do. In several places, the quietest hours of the night turn out to be the hours when the reading room is most full — and most silent. Which is, if you think about it, exactly what a library is supposed to be.", cn: "早期的经验显示：人会来。在好几个地方，夜里最安静的时段，恰恰是自习室坐得最满、也最安静的时段。仔细想想，这正是一座图书馆本来的样子。" }
      ],
      keyWords: [
        { w: "library", p: "/ˈlaɪbrəri/", c: "图书馆" },
        { w: "open", p: "/ˈəʊpən/", c: "开放的；开着的" },
        { w: "quiet", p: "/ˈkwaɪət/", c: "安静的" }
      ],
      questions: [
        { q: "Why are some libraries opening late-night reading rooms?", a: "Because many people need a safe, quiet place outside normal opening hours." },
        { q: "How is a night reading room different from the main library?", a: "There are no staff on duty; people enter with a card and the room is watched by cameras." },
        { q: "Who uses these rooms?", a: "Students, people finishing work, people in temporary housing, and anyone without a quiet room of their own." }
      ]
    },
    {
      id: "four-day-week", cat: "news", level: "中级", emoji: "📅", minutes: 4,
      title: "The Four-Day Workweek Experiment",
      titleCn: "四天工作制的实验",
      summary: "冰岛、英国等地的试验显示：少上一天班，产出并没有下降。原因不是「五天活四天干完」，而是很多时间本来就不是在工作。",
      body: [
        { en: "For about a hundred years, the five-day workweek has been the standard in most of the world. It was not always so — six days was common before that. Now some companies and governments are asking whether five days is still the right number.", cn: "大约一百年来，五天工作制是大多数地方的标准。但并非一直如此——在那之前，六天工作制很常见。现在，一些公司和政府正在问：五天这个数字还对吗？" },
        { en: "The modern experiments began in earnest in the 2010s. In Iceland, between 2015 and 2019, public workplaces tested shorter weeks — around 35 to 36 hours — with pay unchanged. Researchers who studied the results reported that productivity stayed the same or improved, and that workers reported much lower stress.", cn: "现代意义上的实验从 2010 年代认真开始。在冰岛，2015 至 2019 年间，公共部门的工作场所试行了更短的工作周——大约 35 到 36 小时——工资不变。研究结果的研究者报告说：生产率持平或有所提高，员工报告的压力的明显下降。" },
        { en: "A larger trial followed in the United Kingdom in 2022, when more than sixty companies gave their staff a four-day week for six months, again with no cut in pay. Most of the companies decided to keep the new schedule afterwards. Staff reported better sleep and less burnout; most companies found that revenue was about the same, or higher.", cn: "更大规模的试验随后在英国展开：2022 年，六十多家公司让员工执行为期六个月的四天工作制，同样不降薪。试验结束后，大多数公司决定保留新安排。员工报告睡眠更好、倦怠更少；多数公司发现营收大致持平，甚至更高。" },
        { en: "The pattern across these trials is consistent: the change does not work by squeezing five days of work into four. It works by removing the parts of the week that were never really work — unnecessary meetings, long approval chains, the habit of sitting in an office in order to be seen.", cn: "这些试验呈现出的规律相当一致：缩短工时之所以行得通，不是因为把五天的活挤进四天，而是因为删掉了那些本来就不算工作的部分——不必要的会议、冗长的审批链、为了「被看见」而坐在办公室里的习惯。" },
        { en: "Not every job fits the model. If you teach a class, drive a bus, or work in a hospital ward, your presence is the job. In those workplaces the idea usually takes another form: fewer days but longer shifts, or a shorter week for some roles and not others. That is much harder to organise fairly.", cn: "并非所有工作都适合这个模型。如果你要上课、开公交，或在医院病房里工作，「在场」本身就是工作内容。在这类岗位上，通常只能采取别的形式：天数减少但每班更长，或者对部分岗位实行、对另一部分不实行。要做到公平，难得多。" },
        { en: "So the honest answer is: the four-day week works well for some kinds of work, in some kinds of companies, under some conditions. What the experiments have really shown is not that four is better than five. It is that the number of days was never based on evidence in the first place — and now we have some.", cn: "所以诚实的答案是：四天工作制在某些类型的工作、某些类型的公司、某些条件下确实可行。这些实验真正说明的，不是「四比五好」，而是——工作天数这个数字，从一开始就没有建立在证据之上。而现在，我们有了一些证据。" }
      ],
      keyWords: [
        { w: "workweek", p: "/ˈwɜːkwiːk/", c: "工作周" },
        { w: "productivity", p: "/ˌprɒdʌkˈtɪvəti/", c: "生产率" },
        { w: "burnout", p: "/ˈbɜːnaʊt/", c: "职业倦怠" }
      ],
      questions: [
        { q: "What did the Iceland trials between 2015 and 2019 find?", a: "Productivity stayed the same or improved, and workers reported much lower stress." },
        { q: "How does a shorter week produce the same results?", a: "By removing things that were never real work, such as unnecessary meetings and long approval chains." },
        { q: "Which jobs are hardest to fit into a four-day week?", a: "Jobs where presence is the job — teaching, driving, or hospital work, for example." }
      ]
    },
    {
      id: "vertical-forest", cat: "news", level: "中级", emoji: "🌲", minutes: 4,
      title: "Cities That Grow Forests on Their Walls",
      titleCn: "把森林种在墙上的城市",
      summary: "米兰两栋公寓楼上种着几百棵树。它能降温、吸尘、给鸟虫安家——但造价也明显更高，所以扩散得很慢。",
      body: [
        { en: "In Milan, Italy, two apartment towers stand side by side in a crowded district. What makes them unusual is not their shape. It is what is growing on them: several hundred trees and thousands of shrubs, planted on balconies up the sides of the buildings.", cn: "在意大利米兰，两栋公寓楼并排立在密集的街区里。让它们特别的不是外形，而是长在它们身上的东西：几百棵树和成千上万株灌木，种在楼体两侧的阳台上。" },
        { en: "The project, called Bosco Verticale — \"Vertical Forest\" — was completed in 2014 and designed by the architect Stefano Boeri. Each apartment has at least one tree on its balcony. The plants are not decoration; they are part of the building's system.", cn: "这个名为「垂直森林」的项目于 2014 年建成，由建筑师斯特凡诺·博埃里设计。每套公寓的阳台上至少有一棵树。这些植物不是装饰，而是整栋楼运行系统的一部分。" },
        { en: "The idea has several goals. Plants shade the building in summer, so it needs less air conditioning. They absorb carbon dioxide and dust from the air. They give insects and birds somewhere to live in the middle of a dense city. And they change how a city feels — which is not a small thing.", cn: "这个想法有几个目标。夏天植物为楼体遮阴，减少空调需求；它们吸收空气中的二氧化碳和粉尘；在密集的城市中心为昆虫和鸟类提供栖息之处；它们还改变了一座城市给人的感觉——这不是一件小事。" },
        { en: "Growing a forest on a tower is much harder than planting a park. The structure must be calculated for the weight of soil, water and trees. Each plant needs irrigation, and the irrigation must be designed so that water does not leak into the walls. Wind at the height of a tower is much stronger than at ground level, so the species must be chosen carefully. In the early years, gardeners work from the building itself to check every tree.", cn: "在高层上种森林，比建一座公园难得多。结构必须按土壤、水和树木的重量来计算；每株植物都需要灌溉，而灌溉系统必须设计得不让水渗进墙体；高处的风比地面强得多，所以树种必须精心挑选。最初几年，园艺师要从楼体上作业，逐棵检查。" },
        { en: "The costs are high — noticeably higher than for a conventional building of the same size. That is why the approach has spread slowly, and why most of the well-known examples are in places where developers were willing to pay for a landmark.", cn: "造价很高——明显高于同等规模的常规建筑。这就是这种做法扩散缓慢的原因，也是大多数知名案例都出现在「开发商愿意为地标买单」的地方的原因。" },
        { en: "Whether \"vertical forests\" become common or stay rare, they are asking a question that cities will have to answer anyway: if we build higher and denser, where does the living world go? The answer, at Bosco Verticale, is: up.", cn: "无论「垂直森林」会变得普遍还是依然罕见，它们提出的问题是城市迟早要回答的：如果我们越建越高、越建越密，那么活着的世界该去哪里？在「垂直森林」，答案是：往上。" }
      ],
      keyWords: [
        { w: "tower", p: "/ˈtaʊə/", c: "塔楼；高楼" },
        { w: "balcony", p: "/ˈbælkəni/", c: "阳台" },
        { w: "shade", p: "/ʃeɪd/", c: "遮阴；阴凉处" }
      ],
      questions: [
        { q: "What is unusual about the two towers in Milan?", a: "Hundreds of trees and thousands of shrubs are planted on their balconies." },
        { q: "What benefits do the plants provide?", a: "They shade the building, absorb dust and carbon dioxide, and give wildlife a home in the city." },
        { q: "Why has the idea spread slowly?", a: "Because it costs noticeably more than a conventional building of the same size." }
      ]
    },
    {
      id: "plastic-treaty", cat: "news", level: "中级", emoji: "🥤", minutes: 4,
      title: "The Long Fight Against Single-Use Plastic",
      titleCn: "与一次性塑料的漫长较量",
      summary: "第一波行动盯上了塑料袋和吸管，效果不错。但更大的问题是：要不要限制新塑料的生产本身。",
      body: [
        { en: "Plastic was invented to be useful, and it succeeded. It is light, cheap, strong, and it does not react with most things. Those same properties, unfortunately, are also the problem. Plastic lasts.", cn: "塑料被发明出来是为了有用，而它确实做到了。它轻、便宜、结实，而且不与大多数东西发生反应。不幸的是，同样的这些特性也正是问题所在：塑料会一直存在。" },
        { en: "Estimates vary, but the amounts are enormous. Many millions of tonnes of plastic waste end up in rivers and oceans every year. Some of it is collected and recycled; a much larger share is burned, buried, or simply lost. In water it breaks into smaller and smaller pieces — microplastics — which have now been found in soil, in rain, and in small amounts in human blood.", cn: "估算各不相同，但数量极为庞大。每年有数以千万吨计的塑料垃圾进入河流与海洋。其中一部分被回收利用，更大一部分被焚烧、填埋，或者干脆不知所踪。在水里，它碎成越来越小的碎片——微塑料——如今已在土壤、雨水中被发现，也在人体血液中被检出微量存在。" },
        { en: "The first big wave of action focused on single-use items, especially bags, straws and food containers. Many countries and cities banned them or started charging for them. The results in some places were surprisingly quick: bag use dropped sharply within months, and reusable bags became normal.", cn: "第一波大规模行动针对一次性用品，尤其是塑料袋、吸管和餐盒。许多国家和城市禁止了它们，或开始收费。有些地方的效果快得出乎意料：几个月内塑料袋使用量大幅下降，自带购物袋成了常态。" },
        { en: "But single-use items are only a small part of the total. Packaging, construction materials, textiles and tyres contribute far more. And the world still produces more plastic every year than it did the year before.", cn: "但一次性用品只占总量的一小部分。包装、建材、纺织品和轮胎的贡献要大得多。而且全世界每年的塑料产量仍在逐年增加。" },
        { en: "Because of this, attention has shifted to a bigger question: should the production of new plastic itself be limited? This is where the negotiations get hard. Some countries and campaigners want a global agreement that covers the whole life of plastic, from production to waste. Others argue that limits on production would hurt their economies, and that better recycling is the answer.", cn: "正因如此，注意力转向了一个更大的问题：新塑料的生产本身是否应该受到限制？谈判的难点就在这里。一些国家和倡议者希望达成一份覆盖塑料「全生命周期」的全球协议，从生产直到废弃；另一些则认为限制生产会损害经济，答案应该是更好的回收。" },
        { en: "The debate is not really about plastic. It is about who pays for waste, and how long we are willing to wait for an answer. A plastic bottle will still be here in five hundred years. The decision about what to do can be made much sooner than that — if it is made at all.", cn: "这场争论其实不是关于塑料的。它关乎废弃物由谁买单，以及我们愿意等多久才给出答案。一只塑料瓶五百年后依然会存在。而关于该怎么做的决定，本可以比那早得多——如果它真的被做出的话。" }
      ],
      keyWords: [
        { w: "plastic", p: "/ˈplæstɪk/", c: "塑料" },
        { w: "recycle", p: "/ˌriːˈsaɪkl/", c: "回收利用" },
        { w: "waste", p: "/weɪst/", c: "废弃物；浪费" }
      ],
      questions: [
        { q: "Why is plastic a problem even though it is useful?", a: "Because it lasts — waste stays in the environment for a very long time." },
        { q: "What did the first wave of action focus on?", a: "Single-use items such as bags, straws and food containers." },
        { q: "What is the hard question in the negotiations?", a: "Whether to limit the production of new plastic, rather than only managing the waste." }
      ]
    },
    {
      id: "ai-copyright", cat: "news", level: "高级", emoji: "©️", minutes: 5,
      title: "Who Owns What AI Creates?",
      titleCn: "AI 生成的东西，归谁所有？",
      summary: "现行版权法是为「看得见的复制」写的，而机器训练并没有一个自然的对应类别。答案不会来自技术，而会来自法律——而且要谈很久。",
      body: [
        { en: "In 2011, a wildlife photographer left his camera on a tripod in an Indonesian forest, and a macaque picked it up and took a selfie. The photograph became famous. So did the legal question that followed: can a work that was not created by a human be protected by copyright? The case ended without giving the monkey the copyright — because copyright, in most countries, belongs to human creators.", cn: "2011 年，一位野生动物摄影师把相机留在印尼一片森林里的三脚架上，一只猕猴拿起来拍了张自拍。照片火了，随之而来的法律问题也火了：一件不是由人创作的作品，能受版权保护吗？这场官司最终没有把版权判给那只猴子——因为在大多数国家，版权属于人类创作者。" },
        { en: "Now the same question has returned, in a much larger form. Generative AI systems are trained on enormous bodies of text and images — much of it created by people, and owned or licensed by them. Then the system produces new text and images. Who, if anyone, owns the result? And what do the people whose work was used for training deserve?", cn: "如今，同一个问题以更大的规模回来了。生成式 AI 系统用海量文本和图像进行训练——其中很大一部分由人创作，并由人持有或授权。然后系统产出新的文字和图像。那么，谁（如果有人）拥有这些产物？而那些作品被用于训练的人，又该得到什么？" },
        { en: "On the first question, most authorities agree on one point: a work created purely by a machine, with no human creative input, is generally not protected by copyright. That seems simple until you try to define \"purely\". If a person writes a detailed prompt, adjusts it fifty times, and selects the best result — was that creative work? Courts in different countries have already begun to give different answers.", cn: "关于第一个问题，多数权威机构在一点上意见一致：纯粹由机器生成、不含人类创造性投入的作品，一般不受版权保护。这听起来很简单，直到你试图界定「纯粹」。如果一个人写了详细的提示词，修改了五十次，又从结果中挑出最好的——那算不算创造性劳动？不同国家的法院已经开始给出不同的答案。" },
        { en: "On the second question, the arguments are sharper. AI companies argue that training is a form of reading, and that reading is not infringement. Critics answer that training is not like reading at all — a person reads one book at a time and forgets most of it, while a model is trained on everything at once and can reproduce patterns from it. Several high-profile lawsuits are now working their way through the courts, and their outcomes will shape the industry for years.", cn: "关于第二个问题，争论更尖锐。AI 公司主张：训练是一种「阅读」，而阅读不构成侵权。批评者反驳：训练和阅读完全不同——人一次读一本书，并且会忘掉大部分；而模型是一次性学完所有东西，还能从中复现出模式。目前已有数起备受关注的诉讼在法院推进，其结果将影响这个行业很多年。" },
        { en: "The debate is difficult partly because existing law was built for a world where copying happened in discrete, visible acts: printing a book, pressing a record, making a copy of a film. Machine learning does something the law has no natural category for. It learns statistical structure from millions of works without keeping any of them in a form you could point to.", cn: "这场辩论之所以困难，部分原因在于现行法律是为这样一个世界写的：复制以离散、可见的行为发生——印一本书、压制一张唱片、复制一份胶片。而机器学习做的事，法律里并没有天然对应的类别。它从数以百万计的作品中学到统计结构，却不把其中任何一件以可以指认的形式保存下来。" },
        { en: "Whatever the courts decide, one thing is already clear: the answer will not come from technology, and it will not come from a single country. It will come from law and negotiation — slowly, and probably differently in different places. In the meantime, artists, writers and companies are all making decisions in the fog, which is, historically, how most new technologies have arrived.", cn: "无论法院怎么判，有一点已经很清楚了：答案不会来自技术，也不会来自某一个国家。它来自法律与谈判——缓慢地，而且很可能会因地而异。而在那之前，创作者、作者和公司都在雾中做决定——从历史上看，大多数新技术就是这么到来的。" }
      ],
      keyWords: [
        { w: "copyright", p: "/ˈkɒpiraɪt/", c: "版权" },
        { w: "train", p: "/treɪn/", c: "训练" },
        { w: "prompt", p: "/prɒmpt/", c: "提示词" }
      ],
      questions: [
        { q: "Why did the monkey selfie case matter?", a: "It raised the question of whether a work not created by a human can be protected by copyright." },
        { q: "What do most authorities agree on about AI-generated works?", a: "That purely machine-created works are generally not protected — though defining \"purely\" is very hard." },
        { q: "Why is existing copyright law a poor fit for AI training?", a: "Because it was designed for discrete, visible acts of copying, not for learning statistical patterns from millions of works." }
      ]
    },
    {
      id: "climate-migration", cat: "news", level: "高级", emoji: "🌊", minutes: 5,
      title: "When the Sea Rises, People Move",
      titleCn: "海平面上升，人们往哪里去",
      summary: "国际法里并没有「气候难民」这个类别。而当一片土地真的住不了人时，搬走是唯一的选择——搬去哪里，却没有答案。",
      body: [
        { en: "Sea levels are rising. The cause is not complicated: as the planet warms, ocean water expands, and ice on land — glaciers and ice sheets — melts into the sea. The rate has increased in recent decades, and the direction of the change is not seriously disputed.", cn: "海平面正在上升。原因并不复杂：随着地球变暖，海水膨胀，而陆地上的冰——冰川和冰盖——融化成水流入海洋。近几十年来速度有所加快，而这一变化的方向本身并无严肃争议。" },
        { en: "The consequences are uneven. A small rise means very different things in different places. In some coastal cities, engineers can build higher defences, and the cost is high but manageable. In low-lying island nations and river deltas, there may be no higher ground to defend — the whole country, or the whole district, sits only a metre or two above the sea.", cn: "后果是不均匀的。同样一点上升幅度，在不同地方意味着完全不同的事。在一些沿海城市，工程师可以修建更高的防线，代价高昂但尚可承受。而在低洼的岛国和河流三角洲，可能根本没有更高的地面可守——整个国家、整个地区，只高出海面一两米。" },
        { en: "This is where the human question begins. If a place becomes uninhabitable, the people living there have to move. The numbers involved are large but hard to state precisely, because people move for many reasons at once, and because a decision to leave is rarely caused by the sea alone. Estimates for the coming decades range from tens of millions to hundreds of millions of people, depending on how much the planet warms and how the world responds.", cn: "人的问题就从这里开始。如果一个地方变得无法居住，住在那里的人就必须搬走。涉及的人数很大，但很难说得精确——因为人们搬迁往往同时有多个原因，也因为在多数情况下，「离开」的决定很少只由海水造成。对未来数十年的估算，从数千万人到数亿人不等，取决于地球变暖的程度和世界如何应对。" },
        { en: "Here is the part that surprises many people: international law does not currently recognise \"climate refugee\" as a legal category. The 1951 Refugee Convention protects people who flee persecution based on race, religion, nationality, political opinion, or membership in a particular social group. Someone whose island has become unlivable does not fit that definition. They may have to move — but they have no special legal right to enter another country.", cn: "接下来这一点让很多人意外：国际法目前并不承认「气候难民」这一法律类别。1951 年《难民公约》保护的是因种族、宗教、国籍、政治见解或属于特定社会群体而遭受迫害的人。而一个岛屿变得无法居住的人，并不符合这个定义。他们可能不得不搬走，却没有进入另一个国家的特殊法律权利。" },
        { en: "In practice, most movement is internal. People move from a coast to a city in the same country, or from a rural delta to a larger town nearby. This kind of migration is easier politically, but it puts enormous pressure on the receiving cities, which often lack housing, water and jobs for the people arriving.", cn: "现实中，大部分迁移发生在一国之内：从沿海搬到本国的城市，或从乡村三角洲搬到附近更大的城镇。这种迁移在政治上更容易处理，但会给接收城市带来巨大压力——这些城市往往没有足够的住房、水和就业机会来接纳新来的人。" },
        { en: "There are two ways to respond. One is to prepare: build defences, plan new cities on higher ground, and change the law so that people who lose their homes to the sea have somewhere to go. The other is to slow the warming that drives the whole process. These are not alternatives. The physics of the ocean means that some sea-level rise is already locked in. And the same physics means that what we do now decides how much more there will be.", cn: "应对方式有两条。一条是准备：修建防线，在更高的地方规划新城市，并修改法律，让因海水失去家园的人有处可去。另一条是减缓驱动整个过程的变暖。这两条并不是二选一。海洋的物理规律意味着，一部分海平面上升已经无法避免；而同样的物理规律也意味着，我们现在做的事，决定了未来还会多上升多少。" }
      ],
      keyWords: [
        { w: "sea", p: "/siː/", c: "海；海洋" },
        { w: "rise", p: "/raɪz/", c: "上升" },
        { w: "migrate", p: "/maɪˈɡreɪt/", c: "迁移；迁徙" }
      ],
      questions: [
        { q: "What causes sea levels to rise?", a: "Ocean water expands as it warms, and ice on land melts into the sea." },
        { q: "Why isn't \"climate refugee\" a legal category?", a: "Because the 1951 Refugee Convention covers persecution, not environmental loss." },
        { q: "What two responses does the article describe?", a: "Preparing for the movement (defences, planned cities, legal change) and slowing the warming that drives it." }
      ]
    }
  ];

  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(NEW);
})();
