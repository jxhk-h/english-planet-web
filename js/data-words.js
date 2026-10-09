/* 单词数据（上）—— 学前 / 小学 / 初中 / 高中
   字段说明：
     w  单词        p  音标        s  词性      c  中文释义
     e  英文例句    t  例句译文
     f  变形（复数 / 过去式 / 比较级等，可选）
     ph 常见搭配（用 ｜ 分隔多条，可选）
     sy 近义词      an 反义词       rt 词根词缀    tp 易混提示 / 记忆点
   可选字段只在确实有价值时才写，界面会按存在与否渲染。
   下集（四级 / 六级 / 考研 / 雅思）在 data-words-2.js 里 push 进来。 */
window.WORD_DATA = {
  levels: [
    /* ==================== 学前 ==================== */
    {
      id: "preschool", name: "学前", en: "Preschool", emoji: "🐣",
      color: "#FF8FA3", color2: "#FFD3DC",
      desc: "身边最常见的东西：颜色、数字、动物、家人。看图就能记住。",
      groups: [
        { name: "颜色 Colors", emoji: "🎨", words: [
          {w:"red",p:"/red/",s:"adj. & n.",c:"红色的；红色",e:"The apple is red.",t:"这个苹果是红色的。",ph:"in red 穿红衣服｜red light 红灯"},
          {w:"blue",p:"/bluː/",s:"adj. & n.",c:"蓝色的；蓝色",e:"The sky is blue today.",t:"今天天空是蓝色的。",ph:"blue sky 蓝天｜feel blue 情绪低落"},
          {w:"yellow",p:"/ˈjeləʊ/",s:"adj. & n.",c:"黄色的；黄色",e:"I have a yellow hat.",t:"我有一顶黄色的帽子。",ph:"yellow light 黄灯"},
          {w:"green",p:"/ɡriːn/",s:"adj. & n.",c:"绿色的；绿色",e:"The leaves are green in spring.",t:"春天叶子是绿色的。",ph:"green tea 绿茶｜green light 绿灯"},
          {w:"black",p:"/blæk/",s:"adj. & n.",c:"黑色的；黑色",e:"My cat is black and white.",t:"我的猫是黑白相间的。",ph:"black and white 黑白的"},
          {w:"white",p:"/waɪt/",s:"adj. & n.",c:"白色的；白色",e:"She has white shoes.",t:"她有一双白色的鞋。",ph:"white snow 白雪"},
          {w:"pink",p:"/pɪŋk/",s:"adj. & n.",c:"粉红色的；粉红色",e:"The little pig is pink.",t:"这只小猪是粉红色的。"},
          {w:"orange",p:"/ˈɒrɪndʒ/",s:"adj. & n.",c:"橙色的；橙子",e:"I like orange juice.",t:"我喜欢橙汁。",ph:"orange juice 橙汁"},
          {w:"purple",p:"/ˈpɜːpl/",s:"adj. & n.",c:"紫色的；紫色",e:"This flower is purple.",t:"这朵花是紫色的。"},
          {w:"brown",p:"/braʊn/",s:"adj. & n.",c:"棕色的；棕色",e:"The bear is big and brown.",t:"这只熊又大又是棕色的。"},
          {w:"gray",p:"/ɡreɪ/",s:"adj. & n.",c:"灰色的；灰色",e:"The sky looks gray before rain.",t:"下雨前天空看起来灰蒙蒙的。",tp:"英式拼写是 grey，两种都对。"},
          {w:"gold",p:"/ɡəʊld/",s:"n. & adj.",c:"金子；金色的",e:"She won a gold medal.",t:"她赢得了一枚金牌。",ph:"gold medal 金牌"},
          {w:"silver",p:"/ˈsɪlvə/",s:"n. & adj.",c:"银；银色的",e:"The moon looks silver at night.",t:"夜里月亮看起来是银色的。",ph:"silver medal 银牌"},
          {w:"colorful",p:"/ˈkʌləfl/",s:"adj.",c:"色彩丰富的",e:"The garden is full of colorful flowers.",t:"花园里开满了五颜六色的花。",ph:"a colorful life 多彩的生活",rt:"color(颜色) + -ful(充满……的)"}
        ]},
        { name: "数字 Numbers", emoji: "🔢", words: [
          {w:"one",p:"/wʌn/",s:"num.",c:"一",e:"I have one nose.",t:"我有一个鼻子。",ph:"one by one 一个接一个"},
          {w:"two",p:"/tuː/",s:"num.",c:"二",e:"A cat has two ears.",t:"猫有两只耳朵。",ph:"in two 分成两半"},
          {w:"three",p:"/θriː/",s:"num.",c:"三",e:"We can see three birds.",t:"我们能看到三只鸟。"},
          {w:"four",p:"/fɔː/",s:"num.",c:"四",e:"A car has four wheels.",t:"汽车有四个轮子。"},
          {w:"five",p:"/faɪv/",s:"num.",c:"五",e:"I have five fingers on one hand.",t:"我一只手上有五根手指。"},
          {w:"six",p:"/sɪks/",s:"num.",c:"六",e:"There are six eggs in the box.",t:"盒子里有六个鸡蛋。"},
          {w:"seven",p:"/ˈsevn/",s:"num.",c:"七",e:"A rainbow has seven colors.",t:"彩虹有七种颜色。"},
          {w:"eight",p:"/eɪt/",s:"num.",c:"八",e:"My sister is eight years old.",t:"我妹妹八岁了。"},
          {w:"nine",p:"/naɪn/",s:"num.",c:"九",e:"Nine ducks are in the water.",t:"九只鸭子在水里。"},
          {w:"ten",p:"/ten/",s:"num.",c:"十",e:"I can count to ten.",t:"我能数到十。"},
          {w:"eleven",p:"/ɪˈlevn/",s:"num.",c:"十一",e:"There are eleven players in a football team.",t:"一支足球队有十一名队员。",tp:"不是 oneteen，eleven / twelve 是特殊形式，要单独记。"},
          {w:"twelve",p:"/twelv/",s:"num.",c:"十二",e:"A year has twelve months.",t:"一年有十二个月。"},
          {w:"twenty",p:"/ˈtwenti/",s:"num.",c:"二十",e:"Twenty children are in the classroom.",t:"教室里有二十个孩子。"},
          {w:"first",p:"/fɜːst/",s:"num. & adj.",c:"第一；第一的",e:"He is the first to arrive.",t:"他是第一个到的。",ph:"at first 起初｜first of all 首先",sy:"initial",an:"last"}
        ]},
        { name: "动物 Animals", emoji: "🐼", words: [
          {w:"cat",p:"/kæt/",s:"n.",c:"猫",e:"The cat is sleeping on the sofa.",t:"猫在沙发上睡觉。",f:"cats"},
          {w:"dog",p:"/dɒɡ/",s:"n.",c:"狗",e:"My dog can run very fast.",t:"我的狗跑得很快。",f:"dogs",ph:"walk the dog 遛狗"},
          {w:"bird",p:"/bɜːd/",s:"n.",c:"鸟",e:"A bird is singing in the tree.",t:"一只鸟在树上唱歌。",f:"birds"},
          {w:"fish",p:"/fɪʃ/",s:"n.",c:"鱼",e:"Fish live in the water.",t:"鱼生活在水里。",f:"fish（复数常不变）",tp:"两条鱼是 two fish；只有说多种鱼时才用 fishes。"},
          {w:"duck",p:"/dʌk/",s:"n.",c:"鸭子",e:"The duck can swim well.",t:"这只鸭子游泳游得很好。",f:"ducks"},
          {w:"rabbit",p:"/ˈræbɪt/",s:"n.",c:"兔子",e:"The rabbit likes carrots.",t:"兔子喜欢胡萝卜。",f:"rabbits"},
          {w:"bear",p:"/beə/",s:"n.",c:"熊",e:"That bear is very big.",t:"那只熊非常大。",f:"bears"},
          {w:"pig",p:"/pɪɡ/",s:"n.",c:"猪",e:"The pig is eating its food.",t:"猪在吃它的食物。",f:"pigs"},
          {w:"cow",p:"/kaʊ/",s:"n.",c:"奶牛",e:"A cow gives us milk.",t:"奶牛给我们牛奶。",f:"cows"},
          {w:"monkey",p:"/ˈmʌŋki/",s:"n.",c:"猴子",e:"Monkeys love bananas.",t:"猴子喜欢香蕉。",f:"monkeys"},
          {w:"tiger",p:"/ˈtaɪɡə/",s:"n.",c:"老虎",e:"The tiger has orange fur with black lines.",t:"老虎有带黑色条纹的橙色皮毛。",f:"tigers"},
          {w:"elephant",p:"/ˈelɪfənt/",s:"n.",c:"大象",e:"An elephant has a long nose.",t:"大象有一个长鼻子。",f:"elephants"},
          {w:"lion",p:"/ˈlaɪən/",s:"n.",c:"狮子",e:"The lion is called the king of animals.",t:"狮子被称为百兽之王。",f:"lions"},
          {w:"panda",p:"/ˈpændə/",s:"n.",c:"熊猫",e:"Pandas eat bamboo every day.",t:"熊猫每天吃竹子。",f:"pandas"}
        ]},
        { name: "家人 Family", emoji: "👨‍👩‍👧", words: [
          {w:"mom",p:"/mɒm/",s:"n.",c:"妈妈",e:"Mom is cooking dinner.",t:"妈妈在做晚饭。",tp:"mom 是美式，英式口语用 mum。"},
          {w:"dad",p:"/dæd/",s:"n.",c:"爸爸",e:"Dad reads a book to me.",t:"爸爸读书给我听。"},
          {w:"baby",p:"/ˈbeɪbi/",s:"n.",c:"婴儿",e:"The baby is smiling at me.",t:"宝宝在对我笑。",f:"babies"},
          {w:"sister",p:"/ˈsɪstə/",s:"n.",c:"姐姐；妹妹",e:"My sister is my good friend.",t:"我的姐姐是我的好朋友。",f:"sisters",tp:"sister 不分姐姐妹妹，要区分得说 elder / younger sister。"},
          {w:"brother",p:"/ˈbrʌðə/",s:"n.",c:"哥哥；弟弟",e:"My brother likes football.",t:"我哥哥喜欢足球。",f:"brothers",tp:"同样不分兄与弟，elder / younger brother 才区分。"},
          {w:"grandma",p:"/ˈɡrænmɑː/",s:"n.",c:"奶奶；外婆",e:"Grandma tells very good stories.",t:"奶奶讲很好听的故事。",tp:"正式说法是 grandmother，英语里不分奶奶和外婆。"},
          {w:"grandpa",p:"/ˈɡrænpɑː/",s:"n.",c:"爷爷；外公",e:"Grandpa walks in the park every day.",t:"爷爷每天在公园散步。",tp:"正式说法是 grandfather。"},
          {w:"family",p:"/ˈfæməli/",s:"n.",c:"家庭",e:"I love my family very much.",t:"我非常爱我的家人。",f:"families",ph:"family tree 家谱｜family member 家庭成员"},
          {w:"friend",p:"/frend/",s:"n.",c:"朋友",e:"You are my best friend.",t:"你是我最好的朋友。",f:"friends",ph:"make friends 交朋友",an:"enemy"},
          {w:"home",p:"/həʊm/",s:"n. & adv.",c:"家；在家",e:"We go home at five o'clock.",t:"我们五点回家。",ph:"go home 回家｜at home 在家",tp:"go home 中间不加 to，因为这里的 home 是副词。"},
          {w:"uncle",p:"/ˈʌŋkl/",s:"n.",c:"叔叔；舅舅；姑父",e:"My uncle works in a hospital.",t:"我叔叔在医院工作。",f:"uncles",tp:"父系母系的男性长辈都叫 uncle。"},
          {w:"aunt",p:"/ɑːnt/",s:"n.",c:"阿姨；姑姑；婶婶",e:"My aunt lives in Beijing.",t:"我姑姑住在北京。",f:"aunts"},
          {w:"cousin",p:"/ˈkʌzn/",s:"n.",c:"堂（表）兄弟姐妹",e:"I have three cousins.",t:"我有三个堂（表）兄弟姐妹。",f:"cousins",tp:"cousin 同时指堂和表、男和女，全看语境。"},
          {w:"pet",p:"/pet/",s:"n.",c:"宠物",e:"A cat is a good pet for a quiet home.",t:"猫适合安静的家庭当宠物。",f:"pets",ph:"keep a pet 养宠物"}
        ]}
      ]
    },

    /* ==================== 小学 ==================== */
    {
      id: "primary", name: "小学", en: "Primary School", emoji: "🎒",
      color: "#FFA94D", color2: "#FFE0B8",
      desc: "上学要用、吃饭要吃、出门能见的词，都是小学阶段的核心词。",
      groups: [
        { name: "学习用品 School", emoji: "✏️", words: [
          {w:"book",p:"/bʊk/",s:"n.",c:"书",e:"This book has many nice pictures.",t:"这本书有很多漂亮的插图。",f:"books",ph:"read a book 读书"},
          {w:"pencil",p:"/ˈpensl/",s:"n.",c:"铅笔",e:"May I borrow your pencil?",t:"我可以借你的铅笔吗？",f:"pencils",ph:"a pencil box 铅笔盒"},
          {w:"ruler",p:"/ˈruːlə/",s:"n.",c:"尺子",e:"I use a ruler to draw lines.",t:"我用尺子画直线。",f:"rulers"},
          {w:"eraser",p:"/ɪˈreɪzə/",s:"n.",c:"橡皮",e:"I need an eraser for my mistake.",t:"我需要一块橡皮来擦掉错字。",f:"erasers",tp:"英式英语里橡皮叫 rubber，美式叫 eraser。"},
          {w:"bag",p:"/bæɡ/",s:"n.",c:"书包；袋子",e:"My school bag is very heavy.",t:"我的书包很重。",f:"bags"},
          {w:"desk",p:"/desk/",s:"n.",c:"课桌",e:"Put your books on the desk.",t:"把书放在课桌上。",f:"desks"},
          {w:"chair",p:"/tʃeə/",s:"n.",c:"椅子",e:"Please sit on this chair.",t:"请坐在这把椅子上。",f:"chairs"},
          {w:"notebook",p:"/ˈnəʊtbʊk/",s:"n.",c:"笔记本",e:"I write new words in my notebook.",t:"我把新单词写在笔记本上。",f:"notebooks",rt:"note(笔记) + book(本子)"},
          {w:"crayon",p:"/ˈkreɪən/",s:"n.",c:"蜡笔",e:"She draws with a red crayon.",t:"她用红色蜡笔画画。",f:"crayons"},
          {w:"blackboard",p:"/ˈblækbɔːd/",s:"n.",c:"黑板",e:"The teacher writes on the blackboard.",t:"老师在黑板上写字。",f:"blackboards",rt:"black(黑) + board(板)"},
          {w:"pen",p:"/pen/",s:"n.",c:"钢笔；圆珠笔",e:"Please write it down with a pen.",t:"请用钢笔把它写下来。",f:"pens",tp:"pencil 是铅笔（能擦），pen 是钢笔 / 圆珠笔（不能擦）。"},
          {w:"glue",p:"/ɡluː/",s:"n. & v.",c:"胶水；粘贴",e:"Use glue to stick the paper here.",t:"用胶水把纸粘在这里。",f:"glues / glued / gluing"},
          {w:"scissors",p:"/ˈsɪzəz/",s:"n.",c:"剪刀",e:"Be careful with the scissors.",t:"用剪刀要小心。",tp:"永远是复数形式，一副剪刀是 a pair of scissors。"},
          {w:"marker",p:"/ˈmɑːkə/",s:"n.",c:"马克笔",e:"She writes her name with a marker.",t:"她用马克笔写名字。",f:"markers"}
        ]},
        { name: "食物 Food", emoji: "🍎", words: [
          {w:"apple",p:"/ˈæpl/",s:"n.",c:"苹果",e:"An apple a day keeps you healthy.",t:"一天一个苹果，身体健康。",f:"apples",ph:"apple juice 苹果汁"},
          {w:"banana",p:"/bəˈnɑːnə/",s:"n.",c:"香蕉",e:"The monkey eats a banana.",t:"猴子吃了一根香蕉。",f:"bananas"},
          {w:"bread",p:"/bred/",s:"n.",c:"面包",e:"I have bread and milk for breakfast.",t:"我早餐吃面包喝牛奶。",tp:"不可数名词，一片面包是 a piece of bread。"},
          {w:"milk",p:"/mɪlk/",s:"n.",c:"牛奶",e:"Milk is good for your bones.",t:"牛奶对你的骨骼有好处。",tp:"不可数，一杯牛奶是 a glass of milk。"},
          {w:"rice",p:"/raɪs/",s:"n.",c:"米饭；大米",e:"We eat rice every evening.",t:"我们每天晚上吃米饭。",tp:"不可数，一粒米叫 a grain of rice。"},
          {w:"egg",p:"/eɡ/",s:"n.",c:"蛋；鸡蛋",e:"My mother cooks two eggs for me.",t:"妈妈给我煮了两个鸡蛋。",f:"eggs"},
          {w:"cake",p:"/keɪk/",s:"n.",c:"蛋糕",e:"We ate a big cake at the party.",t:"我们在聚会上吃了一个大蛋糕。",f:"cakes"},
          {w:"water",p:"/ˈwɔːtə/",s:"n.",c:"水",e:"Please drink more water every day.",t:"请每天多喝水。",tp:"不可数，一杯水是 a glass of water。"},
          {w:"noodle",p:"/ˈnuːdl/",s:"n.",c:"面条",e:"These noodles taste really good.",t:"这些面条真好吃。",f:"noodles（常用复数）",tp:"说吃面条一般用复数：a bowl of noodles。"},
          {w:"juice",p:"/dʒuːs/",s:"n.",c:"果汁",e:"She drinks a glass of juice.",t:"她喝了一杯果汁。",tp:"不可数，一杯果汁是 a glass of juice。"},
          {w:"meat",p:"/miːt/",s:"n.",c:"肉",e:"He does not eat meat.",t:"他不吃肉。",tp:"不可数。注意 meat（肉）和 meet（遇见）同音不同义。"},
          {w:"soup",p:"/suːp/",s:"n.",c:"汤",e:"The soup is hot and tastes nice.",t:"这汤很烫，味道很好。",ph:"a bowl of soup 一碗汤"},
          {w:"vegetable",p:"/ˈvedʒtəbl/",s:"n.",c:"蔬菜",e:"You should eat more vegetables.",t:"你应该多吃蔬菜。",f:"vegetables"},
          {w:"fruit",p:"/fruːt/",s:"n.",c:"水果",e:"Fresh fruit is good for you.",t:"新鲜水果对你有好处。",ph:"fresh fruit 新鲜水果",tp:"作总称时不可数（eat fruit），指种类时才用复数 fruits。"}
        ]},
        { name: "天气与自然 Weather", emoji: "🌤️", words: [
          {w:"sunny",p:"/ˈsʌni/",s:"adj.",c:"晴朗的",e:"It is a sunny day today.",t:"今天是个晴天。",rt:"sun(太阳) + -ny"},
          {w:"rainy",p:"/ˈreɪni/",s:"adj.",c:"下雨的",e:"We stay at home on rainy days.",t:"下雨天我们待在家里。",rt:"rain(雨) + -y(多……的)"},
          {w:"cloudy",p:"/ˈklaʊdi/",s:"adj.",c:"多云的",e:"The sky is cloudy this morning.",t:"今天早上天空多云。",rt:"cloud(云) + -y"},
          {w:"windy",p:"/ˈwɪndi/",s:"adj.",c:"有风的",e:"It is windy, so hold your hat.",t:"风很大，抓住你的帽子。",rt:"wind(风) + -y"},
          {w:"snow",p:"/snəʊ/",s:"n. & v.",c:"雪；下雪",e:"Children play in the snow.",t:"孩子们在雪里玩耍。",ph:"heavy snow 大雪"},
          {w:"tree",p:"/triː/",s:"n.",c:"树",e:"There is a tall tree near my house.",t:"我家附近有一棵高树。",f:"trees",ph:"plant trees 种树"},
          {w:"flower",p:"/ˈflaʊə/",s:"n.",c:"花",e:"This flower smells very sweet.",t:"这朵花闻起来很香。",f:"flowers"},
          {w:"river",p:"/ˈrɪvə/",s:"n.",c:"河流",e:"Many fish live in this river.",t:"很多鱼生活在这条河里。",f:"rivers"},
          {w:"mountain",p:"/ˈmaʊntɪn/",s:"n.",c:"山",e:"We climbed the mountain last week.",t:"我们上周爬了那座山。",f:"mountains",ph:"climb a mountain 爬山"},
          {w:"sky",p:"/skaɪ/",s:"n.",c:"天空",e:"Birds fly high in the sky.",t:"鸟儿在天空中飞得很高。",ph:"in the sky 在天空中",tp:"通常要加 the，说 in the sky。"},
          {w:"rainbow",p:"/ˈreɪnbəʊ/",s:"n.",c:"彩虹",e:"A rainbow appeared after the rain.",t:"雨后出现了一道彩虹。",f:"rainbows",rt:"rain(雨) + bow(弓) → 雨中的弓"},
          {w:"cloud",p:"/klaʊd/",s:"n.",c:"云",e:"There is not a single cloud in the sky.",t:"天空中没有一朵云。",f:"clouds"},
          {w:"grass",p:"/ɡrɑːs/",s:"n.",c:"草；草地",e:"The children are sitting on the grass.",t:"孩子们坐在草地上。",tp:"不可数名词，草没有复数。"},
          {w:"leaf",p:"/liːf/",s:"n.",c:"叶子",e:"One yellow leaf fell from the tree.",t:"一片黄叶从树上落了下来。",f:"leaves",tp:"复数是 leaves，不是 leafs。"}
        ]},
        { name: "动作 Actions", emoji: "🏃", words: [
          {w:"run",p:"/rʌn/",s:"v.",c:"跑；经营",e:"He can run one kilometer in five minutes.",t:"他五分钟能跑一公里。",f:"ran / run / running",ph:"run away 跑开｜run a company 经营公司"},
          {w:"jump",p:"/dʒʌmp/",s:"v. & n.",c:"跳",e:"The frog can jump very high.",t:"青蛙能跳得很高。",f:"jumped / jumping",ph:"jump up 跳起来"},
          {w:"swim",p:"/swɪm/",s:"v.",c:"游泳",e:"I learned to swim last summer.",t:"我去年夏天学会了游泳。",f:"swam / swum / swimming",ph:"go swimming 去游泳",tp:"要双写 m 再加 ing：swimming。"},
          {w:"read",p:"/riːd/",s:"v.",c:"读；阅读",e:"She reads a story before bed.",t:"她睡前读一个故事。",f:"read / read / reading",ph:"read aloud 朗读",tp:"过去式拼写和原形一样，但读音变成 /red/。"},
          {w:"write",p:"/raɪt/",s:"v.",c:"写",e:"Please write your name here.",t:"请在这里写上你的名字。",f:"wrote / written / writing",ph:"write down 写下来",tp:"注意与 right（正确的、右边）读音相同。"},
          {w:"sing",p:"/sɪŋ/",s:"v.",c:"唱歌",e:"We sing songs in music class.",t:"我们在音乐课上唱歌。",f:"sang / sung / singing"},
          {w:"dance",p:"/dɑːns/",s:"v. & n.",c:"跳舞；舞蹈",e:"They dance together happily.",t:"他们开心地一起跳舞。",f:"danced / dancing"},
          {w:"draw",p:"/drɔː/",s:"v.",c:"画画；拉",e:"I can draw a cute panda.",t:"我会画一只可爱的熊猫。",f:"drew / drawn / drawing",ph:"draw a picture 画一幅画"},
          {w:"play",p:"/pleɪ/",s:"v.",c:"玩；演奏；参加（运动）",e:"The children play in the playground.",t:"孩子们在操场上玩。",f:"played / playing",ph:"play football 踢足球｜play the piano 弹钢琴",tp:"球类运动前不加 the，乐器前要加 the。"},
          {w:"sleep",p:"/sliːp/",s:"v. & n.",c:"睡觉",e:"A baby needs a lot of sleep.",t:"婴儿需要很多睡眠。",f:"slept / sleeping",ph:"go to sleep 入睡"},
          {w:"walk",p:"/wɔːk/",s:"v. & n.",c:"走路；散步",e:"We walk to school every day.",t:"我们每天走路上学。",f:"walked / walking",ph:"take a walk 散步"},
          {w:"eat",p:"/iːt/",s:"v.",c:"吃",e:"We eat lunch at twelve.",t:"我们十二点吃午饭。",f:"ate / eaten / eating",ph:"eat out 出去吃",tp:"eat 后面直接跟食物，不加介词。"},
          {w:"drink",p:"/drɪŋk/",s:"v. & n.",c:"喝；饮料",e:"Drink some water after running.",t:"跑步之后喝点水。",f:"drank / drunk / drinking",ph:"soft drink 软饮料"},
          {w:"listen",p:"/ˈlɪsn/",s:"v.",c:"听",e:"Listen to the teacher carefully.",t:"认真听老师讲。",f:"listened / listening",ph:"listen to music 听音乐",tp:"listen 后面必须加 to 才能跟宾语：listen to music。"}
        ]}
      ]
    },

    /* ==================== 初中 ==================== */
    {
      id: "junior", name: "初中", en: "Junior High", emoji: "🏫",
      color: "#5CC98F", color2: "#C9F0DA",
      desc: "从「生活词」过渡到「表达词」，能描述心情、讲清身边的事。",
      groups: [
        { name: "日常与校园 Daily Life", emoji: "📅", words: [
          {w:"breakfast",p:"/ˈbrekfəst/",s:"n.",c:"早餐",e:"A good breakfast helps you think better.",t:"一顿好早餐能让你思维更清晰。",ph:"have breakfast 吃早餐",tp:"三餐名词前一般不加冠词：have breakfast / lunch / dinner。"},
          {w:"homework",p:"/ˈhəʊmwɜːk/",s:"n.",c:"作业",e:"I finish my homework before dinner.",t:"我在晚饭前完成作业。",rt:"home + work",tp:"不可数名词，不能说 a homework。"},
          {w:"library",p:"/ˈlaɪbrəri/",s:"n.",c:"图书馆",e:"The library is quiet in the afternoon.",t:"下午图书馆很安静。",f:"libraries",ph:"in the library 在图书馆"},
          {w:"weekend",p:"/ˌwiːkˈend/",s:"n.",c:"周末",e:"What do you usually do at the weekend?",t:"你周末通常做什么？",ph:"at / on the weekend 在周末"},
          {w:"exercise",p:"/ˈeksəsaɪz/",s:"n. & v.",c:"锻炼；练习",e:"Regular exercise makes you stronger.",t:"规律的锻炼使你更强壮。",f:"exercises / exercised",ph:"do exercise 做运动"},
          {w:"hobby",p:"/ˈhɒbi/",s:"n.",c:"爱好",e:"Collecting stamps is my hobby.",t:"收集邮票是我的爱好。",f:"hobbies"},
          {w:"journey",p:"/ˈdʒɜːni/",s:"n.",c:"旅程",e:"The journey took about three hours.",t:"这段旅程大约花了三个小时。",f:"journeys",sy:"trip",tp:"journey 强调「路程、过程」；trip 强调「一次往返」。"},
          {w:"medicine",p:"/ˈmedsn/",s:"n.",c:"药；医学",e:"Take the medicine after meals.",t:"饭后服药。",ph:"take medicine 吃药",tp:"吃药是 take medicine，不是 eat medicine。"},
          {w:"neighbor",p:"/ˈneɪbə/",s:"n.",c:"邻居",e:"Our new neighbor is very friendly.",t:"我们的新邻居很友好。",f:"neighbors",tp:"英式拼写多一个 u：neighbour。"},
          {w:"schedule",p:"/ˈʃedjuːl/",s:"n. & v.",c:"日程表；安排",e:"My schedule is full this week.",t:"我这周的日程排满了。",f:"schedules",ph:"on schedule 按时",tp:"美式读 /ˈskedʒuːl/，英式读 /ˈʃedjuːl/。"},
          {w:"uniform",p:"/ˈjuːnɪfɔːm/",s:"n.",c:"校服；制服",e:"We wear a school uniform every day.",t:"我们每天穿校服。",f:"uniforms",rt:"uni-(一) + form(形式) → 统一样式"},
          {w:"exam",p:"/ɪɡˈzæm/",s:"n.",c:"考试",e:"I have a maths exam tomorrow.",t:"我明天有一场数学考试。",f:"exams",ph:"pass an exam 通过考试｜fail an exam 不及格",sy:"test"},
          {w:"club",p:"/klʌb/",s:"n.",c:"俱乐部；社团",e:"She joined the English club.",t:"她加入了英语社团。",f:"clubs",ph:"join a club 加入社团"},
          {w:"calendar",p:"/ˈkælɪndə/",s:"n.",c:"日历",e:"I marked the date on my calendar.",t:"我在日历上标了那个日期。",f:"calendars"}
        ]},
        { name: "性格与心情 Feelings", emoji: "😊", words: [
          {w:"brave",p:"/breɪv/",s:"adj.",c:"勇敢的",e:"It was brave of you to speak up.",t:"你能站出来说话很勇敢。",f:"braver / bravest",sy:"courageous",an:"timid"},
          {w:"honest",p:"/ˈɒnɪst/",s:"adj.",c:"诚实的",e:"An honest answer is always better.",t:"诚实的回答总是更好。",sy:"truthful",an:"dishonest",tp:"h 不发音，读音开头就是 /ɒ/。"},
          {w:"patient",p:"/ˈpeɪʃnt/",s:"adj. & n.",c:"有耐心的；病人",e:"Be patient; the bus will come soon.",t:"耐心点，公交车很快就会来。",f:"more patient / most patient",sy:"tolerant",an:"impatient"},
          {w:"nervous",p:"/ˈnɜːvəs/",s:"adj.",c:"紧张的",e:"I felt nervous before the exam.",t:"考试前我感到很紧张。",sy:"anxious",an:"calm"},
          {w:"excited",p:"/ɪkˈsaɪtɪd/",s:"adj.",c:"兴奋的",e:"The kids were excited about the trip.",t:"孩子们对这次旅行很兴奋。",ph:"be excited about 对……感到兴奋",tp:"修饰人用 excited，修饰事物用 exciting。"},
          {w:"lonely",p:"/ˈləʊnli/",s:"adj.",c:"孤独的",e:"He felt lonely in the new city.",t:"他在新城市里感到孤独。",f:"lonelier / loneliest",sy:"isolated",tp:"lonely 是「孤独（心情）」；alone 是「独自一人（客观）」。"},
          {w:"polite",p:"/pəˈlaɪt/",s:"adj.",c:"有礼貌的",e:"It is polite to say thank you.",t:"说谢谢是有礼貌的。",f:"more polite / most polite",an:"rude"},
          {w:"curious",p:"/ˈkjʊəriəs/",s:"adj.",c:"好奇的",e:"Children are curious about everything.",t:"孩子对一切都感到好奇。",ph:"be curious about 对……好奇",rt:"cur(关心) + -ious → 什么都想知道"},
          {w:"confident",p:"/ˈkɒnfɪdənt/",s:"adj.",c:"自信的",e:"She is confident about her English.",t:"她对她的英语很自信。",ph:"be confident of / about 对……有信心",an:"insecure"},
          {w:"grateful",p:"/ˈɡreɪtfl/",s:"adj.",c:"感激的",e:"I am grateful for your help.",t:"我很感激你的帮助。",ph:"be grateful to sb. for sth.",sy:"thankful"},
          {w:"shy",p:"/ʃaɪ/",s:"adj.",c:"害羞的",e:"He is too shy to speak in class.",t:"他太害羞了，不敢在课上发言。",f:"shier / shyest",sy:"bashful",an:"outgoing"},
          {w:"generous",p:"/ˈdʒenərəs/",s:"adj.",c:"慷慨的",e:"She is generous with her time.",t:"她很慷慨地拿出自己的时间。",an:"mean",rt:"gener(出身) + -ous → 出身高贵 → 大方"},
          {w:"disappointed",p:"/ˌdɪsəˈpɔɪntɪd/",s:"adj.",c:"失望的",e:"I was disappointed with the result.",t:"我对这个结果很失望。",ph:"be disappointed at / with 对……失望",rt:"dis-(否定) + appoint(指定) + -ed"},
          {w:"proud",p:"/praʊd/",s:"adj.",c:"自豪的；骄傲的",e:"My parents are proud of me.",t:"我父母为我感到自豪。",f:"prouder / proudest",ph:"be proud of 为……自豪",an:"ashamed"}
        ]},
        { name: "科技与设备 Technology", emoji: "💻", words: [
          {w:"computer",p:"/kəmˈpjuːtə/",s:"n.",c:"电脑",e:"He uses a computer to do his homework.",t:"他用电脑做作业。",f:"computers",ph:"on the computer 在电脑上",rt:"compute(计算) + -er(物)"},
          {w:"internet",p:"/ˈɪntənet/",s:"n.",c:"互联网",e:"The internet connects people around the world.",t:"互联网把世界各地的人连接起来。",ph:"surf the internet 上网",rt:"inter-(之间) + net(网)",tp:"写作中一般大写并带 the：the Internet。"},
          {w:"email",p:"/ˈiːmeɪl/",s:"n. & v.",c:"电子邮件；发邮件",e:"I sent you an email this morning.",t:"我今天早上给你发了一封邮件。",f:"emails",ph:"send an email 发邮件",rt:"e-(电子) + mail(邮件)"},
          {w:"screen",p:"/skriːn/",s:"n.",c:"屏幕",e:"Don't look at the screen for too long.",t:"不要长时间盯着屏幕。",f:"screens"},
          {w:"website",p:"/ˈwebsaɪt/",s:"n.",c:"网站",e:"This website helps you learn English.",t:"这个网站帮助你学英语。",f:"websites",rt:"web(网) + site(地点)"},
          {w:"program",p:"/ˈprəʊɡræm/",s:"n. & v.",c:"程序；节目；编程",e:"He wrote a small program by himself.",t:"他自己写了一个小程序。",f:"programs",ph:"TV program 电视节目",tp:"英式拼写是 programme，但指计算机程序时英式也用 program。"},
          {w:"machine",p:"/məˈʃiːn/",s:"n.",c:"机器",e:"This machine can make coffee in one minute.",t:"这台机器一分钟就能做好咖啡。",f:"machines",rt:"源自希腊语 mekhane（装置）"},
          {w:"camera",p:"/ˈkæmərə/",s:"n.",c:"相机",e:"She took photos with a new camera.",t:"她用一台新相机拍了照片。",f:"cameras",ph:"take a photo with a camera 用相机拍照"},
          {w:"message",p:"/ˈmesɪdʒ/",s:"n. & v.",c:"消息；发消息",e:"I got your message just now.",t:"我刚刚收到你的消息。",f:"messages",ph:"leave a message 留言｜text message 短信"},
          {w:"keyboard",p:"/ˈkiːbɔːd/",s:"n.",c:"键盘",e:"My keyboard has a broken key.",t:"我的键盘有一个键坏了。",f:"keyboards",rt:"key(键) + board(板)"},
          {w:"software",p:"/ˈsɒftweə/",s:"n.",c:"软件",e:"This software can check your spelling.",t:"这个软件能检查拼写。",rt:"soft(软) + ware(制品)",tp:"不可数名词，没有复数。反义词是 hardware（硬件）。",an:"hardware"},
          {w:"download",p:"/ˌdaʊnˈləʊd/",s:"v. & n.",c:"下载",e:"I downloaded a new game last night.",t:"我昨晚下载了一个新游戏。",f:"downloaded / downloading",rt:"down(向下) + load(装载)",an:"upload"},
          {w:"password",p:"/ˈpɑːswɜːd/",s:"n.",c:"密码",e:"Never tell anyone your password.",t:"永远不要告诉别人你的密码。",f:"passwords",rt:"pass(通过) + word(词)"},
          {w:"robot",p:"/ˈrəʊbɒt/",s:"n.",c:"机器人",e:"This robot can clean the whole room.",t:"这个机器人能打扫整个房间。",f:"robots"}
        ]},
        { name: "环境与社会 World", emoji: "🌏", words: [
          {w:"pollution",p:"/pəˈluːʃn/",s:"n.",c:"污染",e:"Air pollution is a serious problem.",t:"空气污染是一个严重的问题。",ph:"air pollution 空气污染",rt:"pollute(污染) + -ion",tp:"不可数名词。"},
          {w:"recycle",p:"/ˌriːˈsaɪkl/",s:"v.",c:"回收利用",e:"We should recycle paper and glass.",t:"我们应该回收纸张和玻璃。",f:"recycled / recycling",rt:"re-(再) + cycle(循环)"},
          {w:"environment",p:"/ɪnˈvaɪrənmənt/",s:"n.",c:"环境",e:"We must protect the environment.",t:"我们必须保护环境。",ph:"protect the environment 保护环境",rt:"environ(围绕) + -ment"},
          {w:"energy",p:"/ˈenədʒi/",s:"n.",c:"能量；能源",e:"The sun gives us clean energy.",t:"太阳给我们提供清洁能源。",f:"energies",ph:"save energy 节约能源",tp:"表示「精力」时不可数：full of energy。"},
          {w:"protect",p:"/prəˈtekt/",s:"v.",c:"保护",e:"Trees protect the soil from wind.",t:"树木保护土壤免受风的侵蚀。",f:"protected / protecting",ph:"protect ... from ... 保护……免受……",sy:"guard",an:"harm"},
          {w:"government",p:"/ˈɡʌvənmənt/",s:"n.",c:"政府",e:"The government built a new library.",t:"政府建了一座新图书馆。",f:"governments",rt:"govern(统治) + -ment",tp:"易漏字母：是 govern + ment，中间有个 e。"},
          {w:"volunteer",p:"/ˌvɒlənˈtɪə/",s:"n. & v.",c:"志愿者；自愿做",e:"Many volunteers helped clean the river.",t:"许多志愿者帮忙清理了这条河。",f:"volunteers / volunteered",ph:"volunteer to do sth. 自愿做某事"},
          {w:"community",p:"/kəˈmjuːnəti/",s:"n.",c:"社区；群体",e:"Our community has a small garden.",t:"我们社区有一个小花园。",f:"communities",rt:"common(共同) 同源 → 共同生活的人群"},
          {w:"culture",p:"/ˈkʌltʃə/",s:"n.",c:"文化",e:"Food is an important part of culture.",t:"食物是文化的重要组成部分。",f:"cultures",rt:"cult(耕作) + -ure → 培育出来的东西"},
          {w:"tradition",p:"/trəˈdɪʃn/",s:"n.",c:"传统",e:"Eating dumplings at New Year is a tradition.",t:"过年吃饺子是一种传统。",f:"traditions",ph:"by tradition 按照传统",rt:"tra-(转移) + dit(给) + -ion → 一代代传下来的"},
          {w:"waste",p:"/weɪst/",s:"v. & n.",c:"浪费；废物",e:"Don't waste water.",t:"不要浪费水。",f:"wasted / wasting",ph:"waste time 浪费时间｜waste paper 废纸",tp:"与 waist（腰）同音不同义。"},
          {w:"resource",p:"/rɪˈsɔːs/",s:"n.",c:"资源",e:"Water is a precious resource.",t:"水是一种宝贵的资源。",f:"resources",ph:"natural resources 自然资源",rt:"re-(再) + source(源泉)"},
          {w:"public",p:"/ˈpʌblɪk/",s:"adj. & n.",c:"公共的；公众",e:"We should keep public places clean.",t:"我们应该保持公共场所清洁。",ph:"in public 当众｜public transport 公共交通",an:"private"},
          {w:"society",p:"/səˈsaɪəti/",s:"n.",c:"社会",e:"Everyone has a role in society.",t:"每个人在社会中都有自己的角色。",f:"societies",rt:"soci(同伴) + -ety"}
        ]}
      ]
    },

    /* ==================== 高中 ==================== */
    {
      id: "senior", name: "高中", en: "Senior High", emoji: "📘",
      color: "#4DABF7", color2: "#CDE7FF",
      desc: "高考阅读与写作的高频词，偏向抽象概念、社会议题和描写用语。",
      groups: [
        { name: "学习与研究 Study", emoji: "🔬", words: [
          {w:"analysis",p:"/əˈnæləsɪs/",s:"n.",c:"分析",e:"Our analysis shows a clear change.",t:"我们的分析显示出明显的变化。",f:"analyses",ph:"data analysis 数据分析",rt:"ana-(彻底) + lys(松开) → 彻底拆开来看",tp:"复数是 analyses，不是 analysies。"},
          {w:"theory",p:"/ˈθɪəri/",s:"n.",c:"理论",e:"This theory explains many facts.",t:"这个理论解释了许多事实。",f:"theories",ph:"in theory 理论上",an:"practice"},
          {w:"research",p:"/rɪˈsɜːtʃ/",s:"n. & v.",c:"研究",e:"Her research focuses on clean water.",t:"她的研究聚焦于清洁水源。",ph:"do research on 对……进行研究",rt:"re-(反复) + search(寻找)"},
          {w:"evidence",p:"/ˈevɪdəns/",s:"n.",c:"证据",e:"There is strong evidence for this idea.",t:"这个观点有强有力的证据。",ph:"evidence for / of ……的证据",rt:"e-(向外) + vid(看) + -ence → 能看见的东西",tp:"不可数名词，不能说 an evidence，要说 a piece of evidence。"},
          {w:"literature",p:"/ˈlɪtrətʃə/",s:"n.",c:"文学；文献",e:"He reads English literature every night.",t:"他每晚读英国文学作品。",rt:"liter(字母) + -ature → 由文字构成的东西"},
          {w:"experiment",p:"/ɪkˈsperɪmənt/",s:"n. & v.",c:"实验",e:"The experiment failed at first.",t:"这个实验起初失败了。",f:"experiments",ph:"carry out an experiment 做一个实验",rt:"ex-(向外) + peri(尝试) + -ment"},
          {w:"conclusion",p:"/kənˈkluːʒn/",s:"n.",c:"结论",e:"We reached the same conclusion.",t:"我们得出了相同的结论。",f:"conclusions",ph:"draw a conclusion 得出结论",rt:"con-(共同) + clus(关闭) + -ion → 收口"},
          {w:"hypothesis",p:"/haɪˈpɒθəsɪs/",s:"n.",c:"假设",e:"The data supports his hypothesis.",t:"数据支持他的假设。",f:"hypotheses",rt:"hypo-(下面) + thesis(放置) → 垫在底下当地基的说法",tp:"复数是 hypotheses，读音也跟着变。"},
          {w:"method",p:"/ˈmeθəd/",s:"n.",c:"方法",e:"This method saves a lot of time.",t:"这个方法节省了大量时间。",f:"methods",ph:"a method of doing sth.",rt:"meta-(沿着) + hodos(路) → 沿着路走"},
          {w:"knowledge",p:"/ˈnɒlɪdʒ/",s:"n.",c:"知识",e:"Knowledge comes from practice.",t:"知识来源于实践。",rt:"know(知道) + -ledge",tp:"不可数名词。表示某方面的知识用 knowledge of。"},
          {w:"data",p:"/ˈdeɪtə/",s:"n.",c:"数据",e:"The data shows a clear upward trend.",t:"数据显示出明显的上升趋势。",f:"data（原为 datum 的复数）",rt:"拉丁语 datum 的复数形式",tp:"原为复数，现在单复数动词都有人用；正式写作里用复数更规范。"},
          {w:"survey",p:"/ˈsɜːveɪ/",s:"n. & v.",c:"调查",e:"We did a survey among 300 students.",t:"我们在 300 名学生中做了一项调查。",f:"surveys",ph:"carry out a survey 开展调查",rt:"sur-(在上) + vey(看) → 俯视一遍"},
          {w:"essay",p:"/ˈeseɪ/",s:"n.",c:"文章；随笔",e:"She wrote a short essay about her hometown.",t:"她写了一篇关于家乡的小短文。",f:"essays",ph:"write an essay 写一篇文章"},
          {w:"debate",p:"/dɪˈbeɪt/",s:"n. & v.",c:"辩论",e:"The class had a debate on school uniforms.",t:"班上就校服问题进行了一场辩论。",f:"debates / debated",ph:"under debate 在争论中",rt:"de-(彻底) + bate(打击) → 唇枪舌剑"}
        ]},
        { name: "抽象概念 Concepts", emoji: "💭", words: [
          {w:"freedom",p:"/ˈfriːdəm/",s:"n.",c:"自由",e:"Freedom comes with responsibility.",t:"自由伴随着责任。",rt:"free(自由) + -dom（名词后缀）",an:"slavery"},
          {w:"justice",p:"/ˈdʒʌstɪs/",s:"n.",c:"公正；正义",e:"People fought for justice and equality.",t:"人们为公正和平等而斗争。",rt:"just(公正) + -ice"},
          {w:"responsibility",p:"/rɪˌspɒnsəˈbɪləti/",s:"n.",c:"责任",e:"Taking care of the family is his responsibility.",t:"照顾家庭是他的责任。",f:"responsibilities",ph:"take responsibility for 对……负责",rt:"respons(回应) + -ibility → 必须回应的事"},
          {w:"opportunity",p:"/ˌɒpəˈtjuːnəti/",s:"n.",c:"机会",e:"Don't miss this good opportunity.",t:"不要错过这个好机会。",f:"opportunities",ph:"an opportunity to do sth.",rt:"op-(向着) + port(港口) → 顺风进港",sy:"chance"},
          {w:"challenge",p:"/ˈtʃælɪndʒ/",s:"n. & v.",c:"挑战",e:"Learning a language is a challenge.",t:"学一门语言是一项挑战。",f:"challenges / challenged",ph:"face a challenge 面对挑战"},
          {w:"achievement",p:"/əˈtʃiːvmənt/",s:"n.",c:"成就",e:"Winning the prize was a great achievement.",t:"获奖是一项了不起的成就。",f:"achievements",rt:"achieve(达到) + -ment"},
          {w:"attitude",p:"/ˈætɪtjuːd/",s:"n.",c:"态度",e:"A positive attitude helps you succeed.",t:"积极的态度帮助你成功。",f:"attitudes",ph:"attitude towards 对……的态度"},
          {w:"ability",p:"/əˈbɪləti/",s:"n.",c:"能力",e:"She has the ability to lead the team.",t:"她有能力带领这个团队。",f:"abilities",ph:"the ability to do sth.",rt:"able → abil + -ity",an:"inability"},
          {w:"ambition",p:"/æmˈbɪʃn/",s:"n.",c:"抱负；志向",e:"His ambition is to become a doctor.",t:"他的志向是成为一名医生。",f:"ambitions",rt:"ambi-(四周) + it(走) → 四处奔走求取"},
          {w:"confidence",p:"/ˈkɒnfɪdəns/",s:"n.",c:"信心；信任",e:"Practice gives you confidence.",t:"练习给你信心。",ph:"have confidence in 对……有信心",rt:"con-(完全) + fid(相信) + -ence"},
          {w:"creativity",p:"/ˌkriːeɪˈtɪvəti/",s:"n.",c:"创造力",e:"This job needs creativity, not just rules.",t:"这份工作需要创造力，不只是遵守规则。",rt:"create(创造) + -ivity"},
          {w:"courage",p:"/ˈkʌrɪdʒ/",s:"n.",c:"勇气",e:"It takes courage to admit your mistake.",t:"承认错误需要勇气。",ph:"take courage 鼓起勇气",rt:"cour(心) + -age → 心里的东西",sy:"bravery"},
          {w:"wisdom",p:"/ˈwɪzdəm/",s:"n.",c:"智慧",e:"Wisdom grows with experience.",t:"智慧随经验增长。",rt:"wise → wis + -dom",tp:"注意拼写：不是 wiseness，而是 wisdom。"},
          {w:"value",p:"/ˈvæljuː/",s:"n. & v.",c:"价值；珍视",e:"Honesty has great value in a team.",t:"诚实在团队中很有价值。",f:"values / valued",ph:"of great value 很有价值",rt:"val(值得、强壮) + -ue"}
        ]},
        { name: "社会与发展 Society", emoji: "🏙️", words: [
          {w:"citizen",p:"/ˈsɪtɪzn/",s:"n.",c:"公民；市民",e:"Every citizen has the right to vote.",t:"每个公民都有投票权。",f:"citizens",ph:"a senior citizen 老年人",rt:"cit(城市) + -izen → 城里的人"},
          {w:"education",p:"/ˌedʒuˈkeɪʃn/",s:"n.",c:"教育",e:"Education changes people's lives.",t:"教育改变人们的生活。",ph:"higher education 高等教育",rt:"e-(向外) + duc(引导) + -ation → 把人引导出来"},
          {w:"technology",p:"/tekˈnɒlədʒi/",s:"n.",c:"科技",e:"Technology has changed how we work.",t:"科技改变了我们的工作方式。",f:"technologies",rt:"techn(技艺) + -ology(学科)"},
          {w:"population",p:"/ˌpɒpjuˈleɪʃn/",s:"n.",c:"人口",e:"The city's population is over ten million.",t:"这座城市的人口超过一千万。",ph:"population growth 人口增长",rt:"popul(人民) + -ation"},
          {w:"globalization",p:"/ˌɡləʊbəlaɪˈzeɪʃn/",s:"n.",c:"全球化",e:"Globalization brings both chances and risks.",t:"全球化带来机遇也带来风险。",rt:"globe(地球) + -al + -ization"},
          {w:"sustainable",p:"/səˈsteɪnəbl/",s:"adj.",c:"可持续的",e:"We need a sustainable way of living.",t:"我们需要可持续的生活方式。",ph:"sustainable development 可持续发展",rt:"sus-(在下) + tain(握住) + -able → 能撑住的"},
          {w:"inequality",p:"/ˌɪnɪˈkwɒləti/",s:"n.",c:"不平等",e:"Income inequality is a global issue.",t:"收入不平等是一个全球性问题。",f:"inequalities",rt:"in-(不) + equality(平等)",an:"equality"},
          {w:"urbanization",p:"/ˌɜːbənaɪˈzeɪʃn/",s:"n.",c:"城市化",e:"Urbanization has brought many changes.",t:"城市化带来了许多变化。",rt:"urban(城市的) + -ization"},
          {w:"welfare",p:"/ˈwelfeə/",s:"n.",c:"福利；福祉",e:"The school cares about students' welfare.",t:"学校关心学生的福祉。",rt:"well(好) + fare(行进) → 过得好"},
          {w:"reform",p:"/rɪˈfɔːm/",s:"n. & v.",c:"改革；改造",e:"The education reform changed many schools.",t:"教育改革改变了许多学校。",f:"reforms / reformed",rt:"re-(再) + form(形式) → 重新塑形"},
          {w:"poverty",p:"/ˈpɒvəti/",s:"n.",c:"贫困",e:"Millions of people still live in poverty.",t:"数百万人仍生活在贫困之中。",ph:"live in poverty 生活贫困",an:"wealth"},
          {w:"migration",p:"/maɪˈɡreɪʃn/",s:"n.",c:"迁移；移民",e:"Bird migration happens every autumn.",t:"鸟类迁徙每年秋天都会发生。",rt:"migr(移动) + -ation"},
          {w:"diversity",p:"/daɪˈvɜːsəti/",s:"n.",c:"多样性",e:"Cultural diversity makes the city rich.",t:"文化多样性让这座城市更丰富。",rt:"di-(分开) + vers(转) + -ity → 各不相同",an:"uniformity"},
          {w:"ethics",p:"/ˈeθɪks/",s:"n.",c:"伦理；道德准则",e:"Medical ethics guide doctors' decisions.",t:"医学伦理指导医生的决策。",rt:"eth(习俗) + -ics(学科)",tp:"指「伦理学」这门学科时用单数动词；指「道德准则」时用复数动词。"}
        ]},
        { name: "描写用词 Descriptive", emoji: "✨", words: [
          {w:"abundant",p:"/əˈbʌndənt/",s:"adj.",c:"丰富的",e:"The region has abundant natural resources.",t:"该地区自然资源丰富。",ph:"be abundant in 在……方面丰富",rt:"ab-(来自) + und(波浪) + -ant → 像波浪一样涌来",an:"scarce"},
          {w:"delicate",p:"/ˈdelɪkət/",s:"adj.",c:"精致的；微妙的",e:"The vase has a delicate pattern.",t:"这个花瓶有精致的花纹。",rt:"delic(愉悦) + -ate → 令人愉悦的精细",an:"rough"},
          {w:"tremendous",p:"/trəˈmendəs/",s:"adj.",c:"巨大的",e:"She made tremendous progress this year.",t:"她今年取得了巨大的进步。",rt:"trem(颤抖) + -endous → 大得让人颤抖",sy:"enormous"},
          {w:"vivid",p:"/ˈvɪvɪd/",s:"adj.",c:"生动的；鲜明的",e:"He gave a vivid description of the sea.",t:"他对大海做了生动的描述。",rt:"viv(生命) + -id → 有生命力的"},
          {w:"subtle",p:"/ˈsʌtl/",s:"adj.",c:"微妙的；细微的",e:"There is a subtle difference between the two words.",t:"这两个词之间有细微的差别。",tp:"b 不发音，读 /ˈsʌtl/。"},
          {w:"splendid",p:"/ˈsplendɪd/",s:"adj.",c:"壮丽的；极好的",e:"We watched a splendid sunrise.",t:"我们看了壮丽的日出。",rt:"splend(发光) + -id",sy:"magnificent"},
          {w:"gentle",p:"/ˈdʒentl/",s:"adj.",c:"温和的；轻柔的",e:"A gentle wind moved the leaves.",t:"一阵轻柔的风吹动了树叶。",f:"gentler / gentlest",an:"harsh"},
          {w:"vigorous",p:"/ˈvɪɡərəs/",s:"adj.",c:"强有力的；精力充沛的",e:"He took vigorous exercise every morning.",t:"他每天早上做剧烈运动。",rt:"vigor(活力) + -ous"},
          {w:"mysterious",p:"/mɪˈstɪəriəs/",s:"adj.",c:"神秘的",e:"The old house looks mysterious at night.",t:"这座老房子夜里看起来很神秘。",rt:"mystery → mysteri + -ous"},
          {w:"magnificent",p:"/mæɡˈnɪfɪsnt/",s:"adj.",c:"宏伟的；壮丽的",e:"They visited a magnificent palace.",t:"他们参观了一座宏伟的宫殿。",rt:"magn(大) + fic(做) + -ent → 做得很大的"},
          {w:"impressive",p:"/ɪmˈpresɪv/",s:"adj.",c:"令人印象深刻的",e:"Her speech was short but impressive.",t:"她的演讲简短却令人印象深刻。",rt:"im-(向内) + press(压) + -ive → 压进脑子里"},
          {w:"remarkable",p:"/rɪˈmɑːkəbl/",s:"adj.",c:"非凡的；显著的",e:"The team made remarkable progress.",t:"这个团队取得了显著进步。",rt:"re-(再) + mark(标记) + -able → 值得反复标记的",sy:"extraordinary"},
          {w:"severe",p:"/sɪˈvɪə/",s:"adj.",c:"严重的；严厉的",e:"The city suffered a severe storm.",t:"这座城市遭遇了一场严重的风暴。",f:"severer / severest",sy:"serious",tp:"与 sever（切断）只差一个 e，别写混。"},
          {w:"flexible",p:"/ˈfleksəbl/",s:"adj.",c:"灵活的；可弯曲的",e:"Our plan should stay flexible.",t:"我们的计划应该保持灵活。",rt:"flex(弯曲) + -ible（能……的）",an:"rigid"}
        ]}
      ]
    }
  ]
};
