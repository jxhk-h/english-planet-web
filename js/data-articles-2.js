/* 文章数据（第 2 批）—— 儿童故事 8 篇（入门 2 / 中级 2 / 高级 4）
   追加进 window.ARTICLE_DATA；字段口径与 data-articles.js 完全一致
   （id/cat/level/title/titleCn/emoji/summary/minutes/body/keyWords/questions）。
   全部为原创故事；本文件只新增，不修改任何已有文章。 */
(function () {
  "use strict";

  var NEW = [
    {
      id: "seed-pocket", cat: "story", level: "入门", emoji: "🌱", minutes: 3,
      title: "The Boy with a Pocket Full of Seeds",
      titleCn: "口袋里装满种子的男孩",
      summary: "丹不收集石头和邮票，只收集种子。三年后，学校后面那座光秃秃的荒山，成了孩子们口中的「丹的山」。",
      body: [
        { en: "In a small village there was a boy named Dan. He had a strange habit: he never came home with an empty pocket. There was always a seed in it.", cn: "在一个小村庄里，有个男孩叫丹。他有个奇怪的习惯：回家时口袋里从不空着，里面总有一颗种子。" },
        { en: "Most boys collected stones or stamps. Dan collected seeds. Apple seeds from a lunch box, melon seeds from a kitchen table, and tiny seeds he could not even name.", cn: "大多数男孩收集石头或邮票，丹收集种子。饭盒里的苹果籽、餐桌上的瓜子，还有他说不出名字的细小种子。" },
        { en: "One spring morning, the teacher said the hill behind the school was bare and ugly. \"Somebody should do something,\" she said. Nobody moved.", cn: "一个春天的早晨，老师说学校后面那座山光秃秃的，很难看。「应该有人做点什么，」她说。没有人动。" },
        { en: "The next day, Dan walked up the hill with his pocket full of seeds. He pushed them into the soil one by one, until his hands were black with dirt. He did the same the next week, and the week after that.", cn: "第二天，丹口袋里装满种子，走上了那座山。他把种子一颗一颗按进土里，直到双手沾满黑泥。下个星期他这样做，再下个星期也是。" },
        { en: "Nobody noticed. Seeds are like that. You cannot see anything for a long time, and then one morning the hill is green.", cn: "没有人注意到。种子就是这样：很长时间里你什么也看不见，然后某一个早晨，山就绿了。" },
        { en: "Three years later, the hill was covered with apple trees, sunflowers and wild melons. The village children called it \"Dan's Hill\". And Dan? He still walks with seeds in his pocket — because a pocket is a small place, but what you share from it can cover a whole hill.", cn: "三年后，山上长满了苹果树、向日葵和野甜瓜。村里的孩子们叫它「丹的山」。丹呢？他走路时口袋里依然装着种子——因为口袋是个很小的地方，但从里面分享出去的东西，可以铺满一整座山。" }
      ],
      keyWords: [
        { w: "seed", p: "/siːd/", c: "种子" },
        { w: "pocket", p: "/ˈpɒkɪt/", c: "口袋" },
        { w: "share", p: "/ʃeə/", c: "分享" }
      ],
      questions: [
        { q: "What did Dan keep in his pocket?", a: "Seeds of all kinds — apple seeds, melon seeds, and seeds he could not name." },
        { q: "What did the teacher say about the hill?", a: "She said it was bare and ugly, and somebody should do something." },
        { q: "How long did it take before people noticed a change?", a: "About three years." }
      ]
    },
    {
      id: "moon-boat", cat: "story", level: "入门", emoji: "⛵", minutes: 3,
      title: "The Boat That Sailed to the Moon",
      titleCn: "划向月亮的船",
      summary: "莉莉把纸船放下水，说要去月亮。船没有到月亮，却先救了一只受伤的小鸟。",
      body: [
        { en: "Lily made a paper boat and put it in the river behind her house. \"Where are you going?\" asked her father. \"To the moon,\" said Lily.", cn: "莉莉做了一只纸船，把它放进屋后的小河里。「你要去哪儿？」爸爸问。「去月亮，」莉莉说。" },
        { en: "Her father did not laugh. He only said, \"That is a long trip. Do you have enough food?\" Lily put two biscuits in the boat. Then she set it on the water.", cn: "爸爸没有笑。他只说：「那可是很长的路。你带够吃的了吗？」莉莉往船里放了两块饼干，然后把船放到了水面上。" },
        { en: "The river carried the boat slowly. A duck swam over and looked at it. \"The moon is not on this river,\" said the duck. \"I know,\" said Lily. \"But it is a nice river.\"", cn: "河水慢慢地带着小船走。一只鸭子游过来看了看。「月亮不在河上，」鸭子说。「我知道，」莉莉说，「可这是一条很美的河。」" },
        { en: "At the bend, the boat stopped beside a tall tree. A bird was crying because its wing hurt. Lily used a leaf to make a soft bed for the bird.", cn: "在河湾处，小船停在一棵大树旁。一只小鸟在哭，因为它的翅膀受伤了。莉莉用一片叶子给小鸟做了一张柔软的床。" },
        { en: "The bird said, \"If you wait until I can fly, I will show you the way.\" So Lily waited. The sun went down, and the moon came up — big and round above the water.", cn: "小鸟说：「如果你等我到能飞，我就给你指路。」于是莉莉等着。太阳落下，月亮升起来——又大又圆，挂在水面上方。" },
        { en: "Lily looked at the moon and laughed. \"I don't need a boat to reach you,\" she said. \"I only needed to look up.\"", cn: "莉莉看着月亮笑了。「我不需要一条船才能到你身边，」她说，「我只需要抬起头。」" },
        { en: "She carried her paper boat home. It had never reached the moon, but it had helped a bird — and that seemed like a better trip.", cn: "她把纸船带回了家。它从来没有到过月亮，但它帮了一只小鸟——那似乎是更好的一趟旅程。" }
      ],
      keyWords: [
        { w: "boat", p: "/bəʊt/", c: "小船" },
        { w: "river", p: "/ˈrɪvə/", c: "河流" },
        { w: "moon", p: "/muːn/", c: "月亮" }
      ],
      questions: [
        { q: "Where did Lily want to go?", a: "She wanted to go to the moon." },
        { q: "What did she find on the way?", a: "A bird with an injured wing." },
        { q: "What did she learn at the end?", a: "She did not need a boat — she only needed to look up. 想看月亮，只需抬头。" }
      ]
    },
    {
      id: "library-cat", cat: "story", level: "中级", emoji: "🐈‍⬛", minutes: 4,
      title: "The Cat Who Guarded the Library",
      titleCn: "守着图书馆的猫",
      summary: "石街图书馆有一只黑猫，谁也不知道她从哪儿来。她要做的不是帮人找书，而是陪着人。老馆员退休时，在抽屉里留下一张字条。",
      body: [
        { en: "Every library has a rule. The library on Stone Street had a cat.", cn: "每座图书馆都有一条规矩。石街上的图书馆，规矩是一只猫。" },
        { en: "Her name was Ink, because she was black and because she slept on the newspapers. Nobody knew where she came from. One winter morning she was simply there, sitting on the returns desk like she had been hired.", cn: "她叫墨墨，因为她很黑，也因为她总睡在报纸上。谁也不知道她从哪儿来。一个冬天的早晨，她就那么出现了，坐在还书台上，像是被雇来的一样。" },
        { en: "The librarian, Mr. Feng, was not a cat person. He tried to make her leave. He opened the door. Ink walked out, waited for him to close the door, and came back through the window. After the fourth time, he gave up and put a small blanket in the corner.", cn: "馆员冯先生不是个喜欢猫的人。他试过赶她走：把门打开。墨墨走出去，等他关上门，再从窗户回来。第四次之后，他放弃了，在角落里放了一条小毯子。" },
        { en: "Ink had her own ideas about the job. She did not help people find books. What she did was sit with them. When a student was close to tears over an exam, Ink sat on his notes. When an old man came to read the newspapers alone, Ink sat on his feet. When a child could not reach the top shelf, Ink looked at the shelf and meowed until someone taller came.", cn: "墨墨对这份工作有自己的想法。她不帮人找书，她做的事是陪着人。当一个学生为考试快要哭出来时，墨墨坐在他的笔记上。当一个老人独自来看报纸时，墨墨坐在他的脚边。当一个孩子够不到最上面一层书架时，墨墨就盯着那层架子喵喵叫，直到有更高的人过来。" },
        { en: "Years passed. Mr. Feng retired, and a young librarian took his place. On her first morning, she found a note in the desk drawer, in Mr. Feng's handwriting: \"Rule one: the cat is not a cat. She is staff.\"", cn: "多年过去，冯先生退休了，一位年轻馆员接替他。上班第一个早晨，她在抽屉里发现一张字条，是冯先生的笔迹：「第一条规矩：这只猫不是猫，她是员工。」" },
        { en: "The new librarian kept the blanket. Ink kept the corner. And the library on Stone Street kept its quiet, warm, slightly hairy kind of peace.", cn: "新馆员保留了那条毯子，墨墨保住了那个角落。石街上的图书馆，也保住了它那种安静、温暖、略带毛茸茸的安宁。" }
      ],
      keyWords: [
        { w: "library", p: "/ˈlaɪbrəri/", c: "图书馆" },
        { w: "corner", p: "/ˈkɔːnə/", c: "角落" },
        { w: "staff", p: "/stɑːf/", c: "员工" }
      ],
      questions: [
        { q: "Why was the cat named Ink?", a: "Because she was black and because she slept on the newspapers." },
        { q: "How did Ink \"help\" people?", a: "By sitting with them — she kept people company." },
        { q: "What did Mr. Feng's note say?", a: "\"Rule one: the cat is not a cat. She is staff.\"" }
      ]
    },
    {
      id: "two-trees", cat: "story", level: "中级", emoji: "🌳", minutes: 4,
      title: "The Two Trees on the Hill",
      titleCn: "山丘上的两棵树",
      summary: "一棵松树嘲笑桃树「给出去太多」。一场大风之后，笔直的松树断了，歪歪的桃树活了下来。",
      body: [
        { en: "Two trees grew on the same hill, ten steps apart. One was a pine. The other was a peach tree.", cn: "同一座山丘上长着两棵树，相距十步。一棵是松树，另一棵是桃树。" },
        { en: "The pine was proud of its patience. \"I do not hurry,\" it said. \"I grow a little every year, and I will still be here in a hundred years.\" The peach tree said nothing. In spring it was busy with flowers. In summer it was busy with fruit. In autumn it was busy with children who climbed it for the sweetest peaches on the hill.", cn: "松树为自己的耐心感到骄傲。「我不着急，」它说，「我每年长一点，一百年后我还会在这儿。」桃树什么也没说。春天它忙着开花，夏天它忙着结果，秋天它忙着接待那些为了山上最甜的桃子而爬上来的孩子们。" },
        { en: "\"You are too loud,\" said the pine. \"You give everything away. Your fruit is gone in three weeks. Your flowers fall in the wind. What will you have left?\"", cn: "「你太吵了，」松树说，「你什么都给出去。你的果子三周就没了，你的花被风吹落。你还剩下什么？」" },
        { en: "The peach tree thought about it. \"Left?\" it said. \"I will have the children.\"", cn: "桃树想了想。「剩下什么？」它说，「我会剩下这些孩子。」" },
        { en: "One winter, a terrible storm came. The pine, tall and stiff, broke in the middle. It had grown up straight and proud, but it had never learned to bend. The peach tree, small and crooked, bent almost to the ground — and survived.", cn: "有一年冬天，来了一场可怕的暴风雨。高大僵直的松树从中间折断了。它一直笔直而骄傲地生长，却从没学会弯腰。矮小歪斜的桃树几乎贴到了地面——它活了下来。" },
        { en: "In spring, the pine was still lying on the grass. The peach tree put out its flowers as usual, and the children came back. One of them, a girl in a red coat, sat down next to the broken pine and said, \"Don't be sad. You can still be a bench.\"", cn: "春天，松树还躺在草地上。桃树像往常一样开满了花，孩子们也回来了。其中一个穿红外套的女孩坐在断掉的松树旁边说：「别难过，你还可以当一张长凳。」" },
        { en: "The pine learned something that spring: it is not only height that makes a tree important, and not only years that make a life. What you give away is what stays.", cn: "那个春天，松树明白了一件事：让一棵树重要的不只是高度，让一生有意义的不只是年岁。你给出去的，才是留下来的。" }
      ],
      keyWords: [
        { w: "pine", p: "/paɪn/", c: "松树" },
        { w: "bend", p: "/bend/", c: "弯曲" },
        { w: "survive", p: "/səˈvaɪv/", c: "活下来；幸存" }
      ],
      questions: [
        { q: "What did the pine think of the peach tree?", a: "It thought the peach tree gave everything away too fast, and would have nothing left." },
        { q: "Why did the pine break in the storm?", a: "Because it was tall and stiff and had never learned to bend." },
        { q: "What is the lesson of the story?", a: "What you give away is what stays. 给出去的，才是留下来的。" }
      ]
    },
    {
      id: "clockmaker", cat: "story", level: "高级", emoji: "🕰️", minutes: 5,
      title: "The Clockmaker of Quiet Street",
      titleCn: "静街的钟表匠",
      summary: "沈师傅能听出钟表两分钟的误差，却总比该关店的时间晚一小时。他说：钟是给大家的，必须准；日子是自己的，可以慢一点。",
      body: [
        { en: "On Quiet Street, between a bakery and a bicycle shop, there was a small clock shop with a wooden sign that said: \"Mr. Shen. Clocks. Since 1961.\"", cn: "静街上，面包店和自行车铺之间，有一家小小的钟表店，木牌上写着：「沈师傅。钟表。始于 1961 年。」" },
        { en: "Mr. Shen was seventy-eight and could hear things other people could not. He could hear a clock running two minutes fast. He could hear a spring that had lost a little of its strength, the way a singer loses a high note after a long day. People came from three streets away with clocks that nobody else could fix.", cn: "沈师傅七十八岁，能听见别人听不见的东西。他能听出一只钟快了两分钟。他能听出一根发条少了一点力气——就像歌手在忙碌一天后唱不上去那个高音。人们从三条街外赶来，带着别人修不好的钟。" },
        { en: "A young man once asked him the secret. Mr. Shen took a watch apart on the table — forty-one pieces, laid out in a row — and pointed to a tiny wheel. \"Every part of a clock does one thing,\" he said. \"It only does that one thing. That is why it works.\"", cn: "曾有一个年轻人问他秘诀。沈师傅在桌上把一块手表拆开——四十一个零件，排成一行——然后指着一个很小的齿轮。「钟表的每一个零件只做一件事，」他说，「它只做那一件事，所以它才走得准。」" },
        { en: "\"But you always run late,\" said the young man. \"The bakery closes at six and you never leave before seven.\"", cn: "「可您总是晚，」年轻人说，「面包店六点关门，您从没在七点前离开过。」" },
        { en: "Mr. Shen smiled. \"That is different,\" he said. \"A clock is for everyone, so it must be exact. A life is for one person, so it can be a little late.\"", cn: "沈师傅笑了。「那不一样，」他说，「钟是给大家的，所以必须精确。日子是一个人的，所以可以晚一点。」" },
        { en: "When Mr. Shen finally retired, he gave the young man his tools and one piece of advice: \"Fix the small parts first. The big parts take care of themselves.\"", cn: "沈师傅终于退休时，把工具交给了那个年轻人，并留下了一句忠告：「先修小的零件。大的零件会自己照顾好自己。」" },
        { en: "The wooden sign is still there. It is not exact. It says \"Since 1961\", and nobody has ever wanted to change it.", cn: "那块木牌还在。它并不精确：上面写着「始于 1961 年」，而从来没有人想过要改。" }
      ],
      keyWords: [
        { w: "clock", p: "/klɒk/", c: "钟表" },
        { w: "exact", p: "/ɪɡˈzækt/", c: "精确的" },
        { w: "part", p: "/pɑːt/", c: "零件；部分" }
      ],
      questions: [
        { q: "What could Mr. Shen hear that others could not?", a: "He could hear a clock running two minutes fast, or a spring that had lost some of its strength." },
        { q: "Why did he say he was always late leaving the shop?", a: "Because \"a life is for one person, so it can be a little late.\"" },
        { q: "What advice did he give the young man?", a: "\"Fix the small parts first. The big parts take care of themselves.\"" }
      ]
    },
    {
      id: "kite-maker", cat: "story", level: "高级", emoji: "🪁", minutes: 5,
      title: "The Kite Maker Who Never Flew a Kite",
      titleCn: "不会放风筝的做风筝人",
      summary: "周师傅做了五十年风筝，每只都能飞，他自己却从没放过。他能凭风筝的动作，判断出握线的是谁。",
      body: [
        { en: "Old Zhou made kites for fifty years. He made kites shaped like swallows, like butterflies, and once, for a bet, a kite shaped like a customer's dog. Every kite he made could fly. That was the rule.", cn: "周师傅做了五十年风筝。他做过燕子形状的、蝴蝶形状的，还有一次为了打赌，做过一只照着客人家的狗做的风筝。他做的每一只风筝都能飞。这是规矩。" },
        { en: "The strange thing was this: Old Zhou had never flown a kite himself. As a boy, he had fallen from a wall and hurt his leg, and since then he did not like heights — not even the height of his own roof.", cn: "奇怪的是：周师傅自己从来没有放过风筝。小时候，他从一堵墙上摔下来伤了腿，从那以后就不喜欢高处——连自家屋顶的高度都不喜欢。" },
        { en: "\"How can you make something that flies if you never fly it?\" a customer asked once.", cn: "「您从不放风筝，怎么能做出会飞的东西？」有一次，一位客人问。" },
        { en: "Old Zhou did not answer with words. He took down a bamboo frame, held it up against the light, and turned it slowly. \"The kite tells me,\" he said at last. \"You hold it and you feel where the wind wants to go. It is not about flying. It is about listening to the wind.\"", cn: "周师傅没有用话来回答。他取下一个竹骨架，举起来对着光，慢慢转动。「风筝会告诉我，」他终于说，「你握着它，就能感觉到风想往哪儿走。这跟飞不飞没关系，跟听不听风有关系。」" },
        { en: "Every year, on the first day of spring, the whole town went up to the hill to fly kites. Old Zhou stayed at the bottom, selling his kites and looking up. People thought he was sad. He was not. He could tell, from the way a kite moved, exactly who was holding the string — the impatient ones, the careful ones, the beginners who pulled too hard.", cn: "每年春天第一天，全镇的人都会上山放风筝。周师傅留在山下，一边卖风筝一边抬头看。大家以为他难过，他并不。他能凭风筝的动作，准确判断出线握在谁手里——是急躁的人、谨慎的人，还是拉得太用力的新手。" },
        { en: "One spring, a girl came back down the hill with a broken kite. \"It's mine,\" she said. \"I made it myself. It's terrible.\" Old Zhou looked at it carefully. It was, in fact, terrible. He took a small knife and made three cuts and one new hole. Then he handed it back. \"Now it will fly,\" he said. And it did.", cn: "有一年春天，一个女孩带着一只坏掉的风筝下了山。「这是我的，」她说，「我自己做的，很糟糕。」周师傅仔细看了看。它确实很糟糕。他拿出一把小刀，割了三下，又开了一个新孔，然后把风筝递回去。「现在它能飞了，」他说。它真的飞起来了。" },
        { en: "That evening, the girl asked him, \"Why didn't you just give me one of yours?\" Old Zhou looked at the hill, where a hundred kites were still dancing in the last of the light. \"Because a kite that flies for you is a kite,\" he said. \"A kite that flies because of you is something else.\"", cn: "那天傍晚，女孩问他：「您为什么不直接送我一只您做的呢？」周师傅望向山上——一百只风筝还在最后一缕光里起舞。「因为替你飞的风筝，只是一只风筝，」他说，「因你而飞的风筝，就是别的东西了。」" }
      ],
      keyWords: [
        { w: "kite", p: "/kaɪt/", c: "风筝" },
        { w: "wind", p: "/wɪnd/", c: "风" },
        { w: "string", p: "/strɪŋ/", c: "线；细绳" }
      ],
      questions: [
        { q: "Why had Old Zhou never flown a kite?", a: "Because he had fallen and hurt his leg as a boy, and did not like heights." },
        { q: "How did he make sure his kites would fly?", a: "By holding the frame and feeling where the wind wanted to go — \"listening to the wind.\"" },
        { q: "Why didn't he give the girl one of his own kites?", a: "Because he wanted her own kite to fly: \"A kite that flies because of you is something else.\"" }
      ]
    },
    {
      id: "lighthouse", cat: "story", level: "高级", emoji: "🗼", minutes: 5,
      title: "The Last Lighthouse Keeper",
      titleCn: "最后的灯塔守夜人",
      summary: "灯塔自动化之后，黄师傅还是每天黄昏爬上一百一十二级台阶。游客拍灯塔，镇上的人拍那块石头。",
      body: [
        { en: "For a hundred and forty years, someone had always been living in the lighthouse at Cape Grey. Then the light was automated, and the last keeper, a man named Huang, was offered a choice: stay on as caretaker, or retire with a full pension.", cn: "一百四十年来，灰角灯塔里一直住着人。后来灯塔实现了自动化，最后一位守塔人——一个姓黄的男人——得到了两个选择：留下来做看护，或者拿全额退休金离开。" },
        { en: "He chose to stay. He had no family nearby and no plans. Every evening at sunset he still climbed the one hundred and twelve steps, even though a machine now did the work.", cn: "他选择留下。他身边没有家人，也没有什么打算。每天黄昏，他仍然爬那一百一十二级台阶，尽管现在干活的是机器。" },
        { en: "\"Why do you still go up?\" a visiting inspector asked him. \"The light does not need me,\" said Huang. \"But the stairs do. If nobody walks on them, they get cold. And I need the view.\"", cn: "「您为什么还要上去？」一位来检查的官员问他。「灯不需要我，」黄师傅说，「但台阶需要。如果没人走，它们会变冷。而且我需要那个视野。」" },
        { en: "As the years passed, the town on the other side of the bay grew. A hotel was built, then a road, then a small airport. Tourists began to come and photograph the lighthouse. They loved it. They loved the idea of a lighthouse.", cn: "年复一年，海湾对岸的小镇大了起来。先建了旅馆，然后是公路，再后来是一个小机场。游客开始来拍这座灯塔。他们喜欢它，喜欢「灯塔」这个概念。" },
        { en: "What they did not always love was Huang. He was silent, his hands smelled of oil, and he did not know how to answer questions like \"What is the meaning of the lighthouse?\" He answered, \"It shows the way,\" and went back up the stairs.", cn: "他们不总是喜欢黄师傅。他不爱说话，手上总有油味，也不知道怎么回答「灯塔的意义是什么」这类问题。他回答：「它指路。」然后就回到了台阶上。" },
        { en: "When Huang died, at eighty-nine, the town held a small ceremony. The mayor gave a speech about tradition and the sea. Then a young woman — a lifeguard who had grown up in the town — asked to speak. \"Every summer when I was a child,\" she said, \"my grandmother told me: if you are ever lost on the water, look for the light. I never needed it. But I always looked. And I want to say: for twenty years, the man who kept that light was standing on the stairs, and he never once knew that we were looking at him. So — thank you, Mr. Huang.\"", cn: "黄师傅八十九岁去世时，镇上办了一场小小的仪式。镇长讲了传统与海。然后一位年轻女性——一位在镇上长大的救生员——请求发言。「我小时候，每年夏天，」她说，「奶奶都告诉我：如果你在水上迷了路，就找那道光。我从没真的需要过它，但我总是会看。我想说一句：二十年里，守着那道光的人就站在台阶上，他从来不知道我们正在看着他。所以——谢谢您，黄师傅。」" },
        { en: "They put his name on a small stone at the bottom of the stairs. Tourists photograph the lighthouse every day. Very few of them photograph the stone. But the people who live there always do.", cn: "他们在台阶底下的一块小石头上刻了他的名字。游客每天拍灯塔，很少有人拍那块石头。但住在那里的人，每次都会拍。" }
      ],
      keyWords: [
        { w: "lighthouse", p: "/ˈlaɪthaʊs/", c: "灯塔" },
        { w: "stair", p: "/steə/", c: "台阶" },
        { w: "light", p: "/laɪt/", c: "灯光" }
      ],
      questions: [
        { q: "Why did Huang keep climbing the stairs after the lighthouse was automated?", a: "Because he thought the stairs needed someone to walk on them — and he needed the view." },
        { q: "How did tourists treat Huang?", a: "They loved the lighthouse, but they did not always know how to talk to him." },
        { q: "Why do the local people always photograph the small stone?", a: "Because they remember the keeper, not just the building." }
      ]
    },
    {
      id: "counting-rain", cat: "story", level: "高级", emoji: "🌧️", minutes: 5,
      title: "The Girl Who Counted the Rain",
      titleCn: "数雨点的女孩",
      summary: "奶奶教她看云识天气，梅记下了两千三百条笔记。后来她发现老规律正在失效——因为它们是为另一种气候写的。",
      body: [
        { en: "When Mei was eight, her grandmother taught her to read the weather. Not from a screen — from the sky. \"Dark clouds over the east mean rain by evening,\" she said. \"And if the ants carry their eggs up the hill, the rain will be heavy.\"", cn: "梅八岁那年，奶奶教她看天气。不是从屏幕上，而是从天上。「东边压黑云，傍晚就有雨，」她说，「要是蚂蚁把卵往山上搬，雨就大。」" },
        { en: "Mei began to write everything down in a notebook: the date, the clouds, the ants, the rain. At first she was wrong more often than right. But she kept the notebook, because her grandmother had said something she never forgot: \"A wrong guess you write down becomes a useful one. A wrong guess you forget stays wrong forever.\"", cn: "梅开始把所有事记在本子上：日期、云、蚂蚁、雨。起初她错的比对的还多。但她一直记着，因为奶奶说过一句她永远忘不掉的话：「写下来的错猜，会变成有用的东西；忘掉的错猜，永远是错的。」" },
        { en: "By the time she was fifteen, Mei's notebook had 2,300 entries. She could look at a cloud and give an answer within five seconds. But she also noticed something that worried her: the old rules were slipping. The ants carried their eggs up the hill, and no rain came. Rain came on days when the sky was nearly clear.", cn: "到十五岁时，梅的笔记本已有两千三百条记录。她看一眼云，五秒内就能给出判断。但她也注意到一件让她不安的事：老规律正在失灵。蚂蚁搬着卵上了山，雨却没来；而在天几乎放晴的日子，雨却来了。" },
        { en: "She brought the notebook to her geography teacher. He read it for an hour and then said, \"Mei, these records are better than anything we have here. There is a weather station forty kilometres away that has been measuring for thirty years. Let's write to them.\"", cn: "她把笔记本拿给地理老师看。他读了一个小时，然后说：「梅，这些记录比我们手里的任何资料都好。四十公里外有个气象站，已经观测了三十年。我们给他们写封信吧。」" },
        { en: "Nobody in the town understood why a weather station should care about a girl's notebook. But the station did care. They compared her records with theirs and found the same thing: the patterns her grandmother had taught her were built for a climate that no longer existed — in the same place, on the same hill.", cn: "镇上没人明白气象站为什么会在意一个女孩的笔记本。但气象站确实在意。他们把自己的记录和她的对比，发现了同一件事：奶奶教给她的那些规律，是为一种已经不存在的天气写的——在同一个地方，同一座山上。" },
        { en: "Mei is nineteen now, and she studies meteorology at university. The old notebook is in a glass case in the town library, next to a note in her handwriting: \"My grandmother's rules are not wrong. They are from a different time. Rules are not answers. They are questions. If you write down the answers, the questions will change — and you will be the first to know.\"", cn: "梅现在十九岁，在大学读气象学。那本旧笔记本放在镇图书馆的玻璃柜里，旁边贴着她手写的一张字条：「奶奶的规律没有错，它们只是来自另一个时代。规律不是答案，是问题。如果你把答案记下来，问题就会改变——而你会是第一个知道的人。」" },
        { en: "And she still counts the rain. Every day. Because it is very hard to know that a thing is changing, she says, unless somebody is standing outside, counting it.", cn: "她依然在数雨点。每一天。她说，因为要想知道一件事正在改变，是很难的，除非有人一直站在外面，数着它。" }
      ],
      keyWords: [
        { w: "rain", p: "/reɪn/", c: "雨" },
        { w: "notebook", p: "/ˈnəʊtbʊk/", c: "笔记本" },
        { w: "record", p: "/ˈrekɔːd/", c: "记录" }
      ],
      questions: [
        { q: "What did Mei's grandmother teach her?", a: "How to read the weather from the sky — clouds, and even the movement of ants." },
        { q: "What worried Mei as she grew older?", a: "The old weather rules were no longer working." },
        { q: "What is the main idea of Mei's note?", a: "Rules are not answers but questions; if you record what you see, you will be the first to notice when the world changes." }
      ]
    }
  ];

  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(NEW);
})();
