/* 单词数据（学前扩充）—— 幼儿启蒙高频词
 *
 * 口径说明（重要）：学前**没有**可用的公开词书 —— KyleBing 词库里最低只有「人教小学三年级」，
 * 学前（托班 / 小班 / 中班 / 大班）不存在任何官方词表。因此这一批是**自建口径**：
 * 按幼儿日常生活里最先接触的九类事物手写整理，每个词都给出音标、词性、中文、英文例句和译文。
 * 不冒充「官方词表」，也不标注任何并不存在的来源。
 *
 * 与 data-words.js 里已有的手写 84 词（颜色 / 数字 / 动物 / 家人 / 身体与五官 / 玩具与游戏）
 * 严格不重复；本文件只做追加，不改动任何既有内容。
 *
 * 字段说明：
 *   w 单词   p 音标   s 词性   c 中文释义   e 英文例句   t 例句译文
 *   f 变形（复数等，可选）   ph 常见搭配（用 ｜ 分隔多条，可选）
 * 其余字段（sy 近义词 / an 反义词 / rt 词根词缀 / tp 易混提示）在学前阶段价值不大，
 * 只在确实需要提醒时才写 —— 源数据没有依据的一律不编。
 */
(function () {
  "use strict";

  var W = window.WORD_DATA = window.WORD_DATA || { levels: [] };

  function addGroups(levelId, groups) {
    for (var i = 0; i < W.levels.length; i++) {
      if (W.levels[i].id === levelId) {
        W.levels[i].groups = W.levels[i].groups.concat(groups);
        return true;
      }
    }
    return false;
  }

  var GROUPS = [
    /* ==================== 水果 ==================== */
    { name: "水果 Fruits", emoji: "🍎", words: [
      {w:"apple",p:"/ˈæpl/",s:"n.",c:"苹果",e:"I eat an apple every day.",t:"我每天吃一个苹果。",f:"apples",ph:"apple juice 苹果汁｜an apple tree 一棵苹果树"},
      {w:"banana",p:"/bəˈnɑːnə/",s:"n.",c:"香蕉",e:"The monkey likes bananas.",t:"猴子喜欢香蕉。",f:"bananas"},
      {w:"pear",p:"/peə/",s:"n.",c:"梨",e:"This pear is sweet and juicy.",t:"这个梨又甜又多汁。",f:"pears"},
      {w:"grape",p:"/ɡreɪp/",s:"n.",c:"葡萄",e:"A grape is small and round.",t:"葡萄又小又圆。",f:"grapes"},
      {w:"peach",p:"/piːtʃ/",s:"n.",c:"桃子",e:"The peach is soft and pink.",t:"桃子又软又粉。",f:"peaches"},
      {w:"watermelon",p:"/ˈwɔːtəmelən/",s:"n.",c:"西瓜",e:"Watermelon is cool in summer.",t:"夏天吃西瓜很凉爽。",f:"watermelons",tp:"一个词说清了 water(水) + melon(瓜) —— 水分很多的瓜就是西瓜。"},
      {w:"lemon",p:"/ˈlemən/",s:"n.",c:"柠檬",e:"The lemon tastes sour.",t:"柠檬尝起来是酸的。",f:"lemons"},
      {w:"cherry",p:"/ˈtʃeri/",s:"n.",c:"樱桃",e:"I have two cherries in my hand.",t:"我手里有两颗樱桃。",f:"cherries",tp:"复数要把 y 变 i 再加 es：cherry → cherries。"},
      {w:"strawberry",p:"/ˈstrɔːbəri/",s:"n.",c:"草莓",e:"The strawberry is red and sweet.",t:"草莓又红又甜。",f:"strawberries"},
      {w:"mango",p:"/ˈmæŋɡəʊ/",s:"n.",c:"芒果",e:"A mango is yellow inside.",t:"芒果里面是黄色的。",f:"mangoes"},
      {w:"coconut",p:"/ˈkəʊkənʌt/",s:"n.",c:"椰子",e:"The coconut is hard outside.",t:"椰子外面很硬。",f:"coconuts"},
      {w:"plum",p:"/plʌm/",s:"n.",c:"李子",e:"The plum is small and purple.",t:"李子又小又紫。",f:"plums"},
      {w:"pineapple",p:"/ˈpaɪnæpl/",s:"n.",c:"菠萝",e:"Pineapple is sweet and yellow.",t:"菠萝又甜又黄。",f:"pineapples",tp:"pine(松树) + apple(苹果) —— 长得像松果的苹果。"},
      {w:"melon",p:"/ˈmelən/",s:"n.",c:"甜瓜",e:"This melon smells very sweet.",t:"这个甜瓜闻起来很香。",f:"melons"}
    ]},

    /* ==================== 食物 ==================== */
    { name: "食物 Food", emoji: "🍚", words: [
      {w:"rice",p:"/raɪs/",s:"n.",c:"米饭；大米",e:"We eat rice for lunch.",t:"我们午饭吃米饭。",ph:"a bowl of rice 一碗米饭"},
      {w:"bread",p:"/bred/",s:"n.",c:"面包",e:"Mom gives me bread for breakfast.",t:"妈妈给我面包当早餐。",ph:"a piece of bread 一片面包"},
      {w:"milk",p:"/mɪlk/",s:"n.",c:"牛奶",e:"I drink milk every morning.",t:"我每天早上喝牛奶。",ph:"a glass of milk 一杯牛奶"},
      {w:"egg",p:"/eɡ/",s:"n.",c:"鸡蛋",e:"The egg is white and round.",t:"鸡蛋又白又圆。",f:"eggs",ph:"a boiled egg 一个煮鸡蛋"},
      {w:"cake",p:"/keɪk/",s:"n.",c:"蛋糕",e:"My birthday cake is big.",t:"我的生日蛋糕很大。",f:"cakes",ph:"a birthday cake 生日蛋糕"},
      {w:"noodle",p:"/ˈnuːdl/",s:"n.",c:"面条",e:"These noodles are very long.",t:"这些面条很长。",f:"noodles",tp:"说面条时常用复数 noodles：一碗面条是 a bowl of noodles。"},
      {w:"soup",p:"/suːp/",s:"n.",c:"汤",e:"The soup is hot and good.",t:"这汤又热又好喝。",ph:"chicken soup 鸡汤"},
      {w:"meat",p:"/miːt/",s:"n.",c:"肉",e:"Dad likes to eat meat.",t:"爸爸喜欢吃肉。",tp:"meat 和 meet（遇见）读音一样，拼写不同，别写混。"},
      {w:"candy",p:"/ˈkændi/",s:"n.",c:"糖果",e:"One candy is enough for me.",t:"一颗糖对我来说就够了。",f:"candies"},
      {w:"juice",p:"/dʒuːs/",s:"n.",c:"果汁",e:"I like orange juice.",t:"我喜欢橙汁。",ph:"orange juice 橙汁｜apple juice 苹果汁"},
      {w:"water",p:"/ˈwɔːtə/",s:"n.",c:"水",e:"Please drink more water.",t:"请多喝水。",ph:"a glass of water 一杯水"},
      {w:"cheese",p:"/tʃiːz/",s:"n.",c:"奶酪",e:"The mouse likes cheese.",t:"老鼠喜欢奶酪。"},
      {w:"honey",p:"/ˈhʌni/",s:"n.",c:"蜂蜜",e:"Honey is sweet.",t:"蜂蜜是甜的。"},
      {w:"cookie",p:"/ˈkʊki/",s:"n.",c:"曲奇饼干",e:"The cookie is round and sweet.",t:"曲奇饼干又圆又甜。",f:"cookies"}
    ]},

    /* ==================== 衣物 ==================== */
    { name: "衣物 Clothes", emoji: "👕", words: [
      {w:"hat",p:"/hæt/",s:"n.",c:"帽子（有帽檐的）",e:"My hat is on the chair.",t:"我的帽子在椅子上。",f:"hats",tp:"hat 通常指有帽檐的帽子；cap 指鸭舌帽、便帽。"},
      {w:"cap",p:"/kæp/",s:"n.",c:"鸭舌帽；便帽",e:"He wears a blue cap.",t:"他戴着一顶蓝色的鸭舌帽。",f:"caps"},
      {w:"shirt",p:"/ʃɜːt/",s:"n.",c:"衬衫",e:"Dad's shirt is white.",t:"爸爸的衬衫是白色的。",f:"shirts"},
      {w:"coat",p:"/kəʊt/",s:"n.",c:"外套；大衣",e:"Put on your coat, it is cold.",t:"穿上外套，天冷了。",f:"coats",ph:"put on a coat 穿上外套"},
      {w:"dress",p:"/dres/",s:"n.",c:"连衣裙",e:"Her dress is pink.",t:"她的连衣裙是粉色的。",f:"dresses"},
      {w:"skirt",p:"/skɜːt/",s:"n.",c:"短裙",e:"The skirt is very pretty.",t:"这条短裙很漂亮。",f:"skirts"},
      {w:"pants",p:"/pænts/",s:"n.",c:"裤子",e:"These pants are too long.",t:"这条裤子太长了。",tp:"英语里裤子常用复数 pants，一条裤子是 a pair of pants。"},
      {w:"shoe",p:"/ʃuː/",s:"n.",c:"鞋",e:"My shoes are new.",t:"我的鞋子是新的。",f:"shoes",ph:"a pair of shoes 一双鞋"},
      {w:"sock",p:"/sɒk/",s:"n.",c:"袜子",e:"I have two blue socks.",t:"我有两只蓝色的袜子。",f:"socks",ph:"a pair of socks 一双袜子"},
      {w:"glove",p:"/ɡlʌv/",s:"n.",c:"手套",e:"Wear gloves in winter.",t:"冬天要戴手套。",f:"gloves",ph:"a pair of gloves 一副手套"},
      {w:"scarf",p:"/skɑːf/",s:"n.",c:"围巾",e:"The scarf keeps my neck warm.",t:"围巾让我的脖子很暖和。",f:"scarves",tp:"复数是 scarves，不是 scarfs。"},
      {w:"jacket",p:"/ˈdʒækɪt/",s:"n.",c:"夹克；短外套",e:"This jacket has two pockets.",t:"这件夹克有两个口袋。",f:"jackets"},
      {w:"boot",p:"/buːt/",s:"n.",c:"靴子",e:"My boots are for rainy days.",t:"我的靴子是下雨天穿的。",f:"boots"},
      {w:"sweater",p:"/ˈswetə/",s:"n.",c:"毛衣",e:"Grandma made me a sweater.",t:"奶奶给我织了一件毛衣。",f:"sweaters"}
    ]},

    /* ==================== 家居 ==================== */
    { name: "家居 Home Things", emoji: "🏠", words: [
      {w:"bed",p:"/bed/",s:"n.",c:"床",e:"I sleep in my bed at night.",t:"我晚上在自己的床上睡觉。",f:"beds",ph:"go to bed 上床睡觉"},
      {w:"door",p:"/dɔː/",s:"n.",c:"门",e:"Please close the door.",t:"请把门关上。",f:"doors",ph:"open the door 开门"},
      {w:"window",p:"/ˈwɪndəʊ/",s:"n.",c:"窗户",e:"Look out of the window.",t:"往窗外看。",f:"windows",ph:"open the window 开窗"},
      {w:"chair",p:"/tʃeə/",s:"n.",c:"椅子",e:"Sit on the chair, please.",t:"请坐在椅子上。",f:"chairs"},
      {w:"table",p:"/ˈteɪbl/",s:"n.",c:"桌子",e:"The book is on the table.",t:"书在桌子上。",f:"tables",ph:"on the table 在桌上"},
      {w:"lamp",p:"/læmp/",s:"n.",c:"台灯",e:"Turn on the lamp, it is dark.",t:"打开台灯，天黑了。",f:"lamps"},
      {w:"clock",p:"/klɒk/",s:"n.",c:"钟；挂钟",e:"The clock says seven.",t:"钟上显示七点。",f:"clocks",tp:"clock 是钟（能挂能摆）；watch 是手表（能戴在手上）。"},
      {w:"cup",p:"/kʌp/",s:"n.",c:"杯子",e:"This cup is full of milk.",t:"这个杯子装满了牛奶。",f:"cups"},
      {w:"bowl",p:"/bəʊl/",s:"n.",c:"碗",e:"My bowl is empty now.",t:"我的碗现在空了。",f:"bowls"},
      {w:"spoon",p:"/spuːn/",s:"n.",c:"勺子",e:"Eat the soup with a spoon.",t:"用勺子喝汤。",f:"spoons"},
      {w:"box",p:"/bɒks/",s:"n.",c:"盒子",e:"The box is full of toys.",t:"盒子里装满了玩具。",f:"boxes",ph:"a toy box 玩具箱"},
      {w:"key",p:"/kiː/",s:"n.",c:"钥匙",e:"I lost my key.",t:"我把钥匙弄丢了。",f:"keys"},
      {w:"mirror",p:"/ˈmɪrə/",s:"n.",c:"镜子",e:"I see my face in the mirror.",t:"我在镜子里看到自己的脸。",f:"mirrors"},
      {w:"sofa",p:"/ˈsəʊfə/",s:"n.",c:"沙发",e:"The cat is on the sofa.",t:"猫在沙发上。",f:"sofas"}
    ]},

    /* ==================== 交通 ==================== */
    { name: "交通工具 Transport", emoji: "🚌", words: [
      {w:"bus",p:"/bʌs/",s:"n.",c:"公共汽车",e:"The bus is full of people.",t:"公共汽车上挤满了人。",f:"buses",ph:"take a bus 坐公交｜by bus 乘公交"},
      {w:"bike",p:"/baɪk/",s:"n.",c:"自行车",e:"I ride my bike to the park.",t:"我骑自行车去公园。",f:"bikes",ph:"ride a bike 骑自行车"},
      {w:"ship",p:"/ʃɪp/",s:"n.",c:"轮船",e:"The ship is on the sea.",t:"轮船在海上。",f:"ships"},
      {w:"taxi",p:"/ˈtæksi/",s:"n.",c:"出租车",e:"We took a taxi home.",t:"我们坐出租车回家。",f:"taxis",ph:"take a taxi 打车"},
      {w:"truck",p:"/trʌk/",s:"n.",c:"卡车",e:"The truck is big and heavy.",t:"卡车又大又重。",f:"trucks"},
      {w:"rocket",p:"/ˈrɒkɪt/",s:"n.",c:"火箭",e:"The rocket flies to the moon.",t:"火箭飞向月球。",f:"rockets"},
      {w:"road",p:"/rəʊd/",s:"n.",c:"马路；道路",e:"Look both ways before you cross the road.",t:"过马路前要看两边。",f:"roads",ph:"cross the road 过马路"},
      {w:"wheel",p:"/wiːl/",s:"n.",c:"轮子",e:"A bike has two wheels.",t:"自行车有两个轮子。",f:"wheels"},
      {w:"ticket",p:"/ˈtɪkɪt/",s:"n.",c:"票",e:"I have a ticket for the train.",t:"我有一张火车票。",f:"tickets",ph:"a bus ticket 公交车票"},
      {w:"van",p:"/væn/",s:"n.",c:"面包车；小货车",e:"The van is white and small.",t:"面包车又白又小。",f:"vans"},
      {w:"tractor",p:"/ˈtræktə/",s:"n.",c:"拖拉机",e:"The farmer drives a tractor.",t:"农民开拖拉机。",f:"tractors"},
      {w:"helicopter",p:"/ˈhelɪkɒptə/",s:"n.",c:"直升机",e:"The helicopter flies in the sky.",t:"直升机在天上飞。",f:"helicopters",tp:"长单词可以拆着记：heli(旋转) + copter(翅膀)。"},
      {w:"jeep",p:"/dʒiːp/",s:"n.",c:"吉普车",e:"The jeep goes up the hill.",t:"吉普车开上山。",f:"jeeps"},
      {w:"sled",p:"/sled/",s:"n.",c:"雪橇",e:"We ride a sled in the snow.",t:"我们在雪地里滑雪橇。",f:"sleds"}
    ]},

    /* ==================== 自然与天气 ==================== */
    { name: "自然与天气 Nature", emoji: "☀️", words: [
      {w:"sun",p:"/sʌn/",s:"n.",c:"太阳",e:"The sun is bright today.",t:"今天阳光很亮。",ph:"the sun 太阳｜in the sun 在阳光下"},
      {w:"moon",p:"/muːn/",s:"n.",c:"月亮",e:"The moon is round tonight.",t:"今晚月亮是圆的。",ph:"the moon 月亮"},
      {w:"star",p:"/stɑː/",s:"n.",c:"星星",e:"I can see one star in the sky.",t:"我能看见天上一颗星星。",f:"stars"},
      {w:"sky",p:"/skaɪ/",s:"n.",c:"天空",e:"The sky is blue and clear.",t:"天空又蓝又晴。",ph:"in the sky 在天上"},
      {w:"cloud",p:"/klaʊd/",s:"n.",c:"云",e:"A white cloud looks like a sheep.",t:"一朵白云看起来像绵羊。",f:"clouds"},
      {w:"rain",p:"/reɪn/",s:"n.",c:"雨",e:"The rain is falling down.",t:"雨正在下。",ph:"heavy rain 大雨｜in the rain 在雨中"},
      {w:"snow",p:"/snəʊ/",s:"n.",c:"雪",e:"The snow is white and cold.",t:"雪又白又冷。",ph:"play in the snow 在雪里玩"},
      {w:"wind",p:"/wɪnd/",s:"n.",c:"风",e:"The wind blows my hat away.",t:"风把我的帽子吹走了。"},
      {w:"tree",p:"/triː/",s:"n.",c:"树",e:"A bird is in the tree.",t:"一只鸟在树上。",f:"trees",ph:"climb a tree 爬树"},
      {w:"flower",p:"/ˈflaʊə/",s:"n.",c:"花",e:"This flower smells good.",t:"这朵花很香。",f:"flowers"},
      {w:"grass",p:"/ɡrɑːs/",s:"n.",c:"草",e:"The grass is green in spring.",t:"春天草是绿的。"},
      {w:"leaf",p:"/liːf/",s:"n.",c:"叶子",e:"One leaf falls from the tree.",t:"一片叶子从树上落下。",f:"leaves",tp:"复数是 leaves —— 词尾 f 变 ves。"},
      {w:"river",p:"/ˈrɪvə/",s:"n.",c:"河",e:"Fish swim in the river.",t:"鱼在河里游。",f:"rivers"},
      {w:"sea",p:"/siː/",s:"n.",c:"大海",e:"The sea is deep and blue.",t:"大海又深又蓝。",ph:"by the sea 在海边"}
    ]},

    /* ==================== 动作 ==================== */
    { name: "动作 Verbs", emoji: "🏃", words: [
      {w:"run",p:"/rʌn/",s:"v.",c:"跑",e:"I can run very fast.",t:"我能跑得很快。",f:"ran / running",ph:"run away 跑开"},
      {w:"jump",p:"/dʒʌmp/",s:"v.",c:"跳",e:"The rabbit can jump high.",t:"兔子能跳得很高。",f:"jumped / jumping",ph:"jump up 跳起来"},
      {w:"eat",p:"/iːt/",s:"v.",c:"吃",e:"Let's eat the cake together.",t:"我们一起吃蛋糕吧。",f:"ate / eating",ph:"eat up 吃光"},
      {w:"drink",p:"/drɪŋk/",s:"v.",c:"喝",e:"Drink some water, please.",t:"请喝点水。",f:"drank / drinking"},
      {w:"sleep",p:"/sliːp/",s:"v.",c:"睡觉",e:"Babies sleep a lot.",t:"婴儿睡得多。",f:"slept / sleeping"},
      {w:"sing",p:"/sɪŋ/",s:"v.",c:"唱歌",e:"We sing a song together.",t:"我们一起唱一首歌。",f:"sang / singing",ph:"sing a song 唱首歌"},
      {w:"dance",p:"/dɑːns/",s:"v.",c:"跳舞",e:"She likes to dance with music.",t:"她喜欢跟着音乐跳舞。",f:"danced / dancing"},
      {w:"read",p:"/riːd/",s:"v.",c:"读；看书",e:"I read a book every night.",t:"我每晚读一本书。",f:"read / reading"},
      {w:"write",p:"/raɪt/",s:"v.",c:"写",e:"Write your name here.",t:"在这里写你的名字。",f:"wrote / writing",tp:"write 和 right（右边；正确）读音一样，拼写不同。"},
      {w:"draw",p:"/drɔː/",s:"v.",c:"画画",e:"I draw a cat on the paper.",t:"我在纸上画了一只猫。",f:"drew / drawing"},
      {w:"swim",p:"/swɪm/",s:"v.",c:"游泳",e:"Fish swim in the water.",t:"鱼在水里游。",f:"swam / swimming"},
      {w:"fly",p:"/flaɪ/",s:"v.",c:"飞",e:"Birds fly in the sky.",t:"鸟在天上飞。",f:"flew / flying"},
      {w:"walk",p:"/wɔːk/",s:"v.",c:"走；散步",e:"We walk to school together.",t:"我们一起走路去学校。",f:"walked / walking",ph:"walk to school 走路去学校"},
      {w:"play",p:"/pleɪ/",s:"v.",c:"玩",e:"Let's play in the garden.",t:"我们去花园里玩吧。",f:"played / playing",ph:"play with toys 玩玩具"}
    ]},

    /* ==================== 情绪与礼貌 ==================== */
    { name: "情绪与礼貌 Feelings", emoji: "😊", words: [
      {w:"happy",p:"/ˈhæpi/",s:"adj.",c:"开心的；快乐的",e:"I am happy to see you.",t:"见到你真开心。",an:"sad"},
      {w:"sad",p:"/sæd/",s:"adj.",c:"伤心的；难过的",e:"She feels sad today.",t:"她今天很难过。",an:"happy"},
      {w:"angry",p:"/ˈæŋɡri/",s:"adj.",c:"生气的",e:"Dad is angry about the mess.",t:"爸爸对乱糟糟很生气。"},
      {w:"tired",p:"/ˈtaɪəd/",s:"adj.",c:"累的；疲倦的",e:"I am tired after the game.",t:"玩完游戏我很累。"},
      {w:"hungry",p:"/ˈhʌŋɡri/",s:"adj.",c:"饿的",e:"The baby is hungry now.",t:"宝宝现在饿了。"},
      {w:"thirsty",p:"/ˈθɜːsti/",s:"adj.",c:"渴的",e:"I am thirsty after running.",t:"跑完步我很渴。"},
      {w:"scared",p:"/skeəd/",s:"adj.",c:"害怕的",e:"The little cat is scared.",t:"小猫害怕了。",sy:"afraid"},
      {w:"hello",p:"/həˈləʊ/",s:"interj.",c:"你好",e:"Hello, nice to meet you.",t:"你好，很高兴认识你。",ph:"say hello 打招呼"},
      {w:"goodbye",p:"/ˌɡʊdˈbaɪ/",s:"interj.",c:"再见",e:"Goodbye, see you tomorrow.",t:"再见，明天见。",ph:"say goodbye 道别"},
      {w:"sorry",p:"/ˈsɒri/",s:"adj.",c:"抱歉的；对不起",e:"I am sorry for being late.",t:"很抱歉我迟到了。",ph:"say sorry 道歉"},
      {w:"please",p:"/pliːz/",s:"adv.",c:"请",e:"Please close the window.",t:"请关上窗户。",tp:"please 用在句首或句尾表示「请」：Please sit down. / Sit down, please."},
      {w:"thanks",p:"/θæŋks/",s:"interj.",c:"谢谢",e:"Thanks for your help.",t:"谢谢你的帮助。",sy:"thank you"},
      {w:"smile",p:"/smaɪl/",s:"v.",c:"微笑",e:"She has a big smile on her face.",t:"她脸上挂着大大的笑容。",f:"smiled / smiling"},
      {w:"love",p:"/lʌv/",s:"v.",c:"爱；喜爱",e:"I love my family.",t:"我爱我的家人。"}
    ]},

    /* ==================== 学习与文具 ==================== */
    { name: "学习与文具 School", emoji: "✏️", words: [
      {w:"pen",p:"/pen/",s:"n.",c:"钢笔；笔",e:"This pen is blue.",t:"这支钢笔是蓝色的。",f:"pens"},
      {w:"pencil",p:"/ˈpensl/",s:"n.",c:"铅笔",e:"My pencil is short now.",t:"我的铅笔现在很短了。",f:"pencils",rt:"penc(笔) + -il → 铅笔"},
      {w:"book",p:"/bʊk/",s:"n.",c:"书",e:"I like this picture book.",t:"我喜欢这本图画书。",f:"books",ph:"a picture book 图画书｜read a book 看书"},
      {w:"ruler",p:"/ˈruːlə/",s:"n.",c:"尺子",e:"My ruler is thirty centimeters long.",t:"我的尺子有三十厘米长。",f:"rulers",rt:"rule(测量) + -er(工具) → 量长度的工具"},
      {w:"bag",p:"/bæɡ/",s:"n.",c:"包；书包",e:"My bag is heavy today.",t:"我的书包今天很重。",f:"bags",ph:"a school bag 书包"},
      {w:"eraser",p:"/ɪˈreɪzə/",s:"n.",c:"橡皮",e:"May I use your eraser?",t:"我可以用一下你的橡皮吗？",f:"erasers",rt:"erase(擦掉) + -er(工具) → 擦东西的工具"},
      {w:"crayon",p:"/ˈkreɪən/",s:"n.",c:"蜡笔",e:"I draw with a red crayon.",t:"我用红色蜡笔画画。",f:"crayons"},
      {w:"desk",p:"/desk/",s:"n.",c:"书桌",e:"There are two books on my desk.",t:"我的书桌上有两本书。",f:"desks"},
      {w:"school",p:"/skuːl/",s:"n.",c:"学校",e:"Our school is near the park.",t:"我们的学校在公园附近。",f:"schools",ph:"go to school 去上学"},
      {w:"teacher",p:"/ˈtiːtʃə/",s:"n.",c:"老师",e:"My teacher is very kind.",t:"我的老师很和蔼。",f:"teachers",rt:"teach(教) + -er(人) → 教的人"},
      {w:"student",p:"/ˈstjuːdnt/",s:"n.",c:"学生",e:"He is a good student.",t:"他是个好学生。",f:"students"},
      {w:"paper",p:"/ˈpeɪpə/",s:"n.",c:"纸",e:"Give me a piece of paper, please.",t:"请给我一张纸。",ph:"a piece of paper 一张纸"},
      {w:"glue",p:"/ɡluː/",s:"n.",c:"胶水",e:"Use glue to stick the paper.",t:"用胶水把纸粘起来。"},
      {w:"scissors",p:"/ˈsɪzəz/",s:"n.",c:"剪刀",e:"Be careful with the scissors.",t:"用剪刀要小心。",tp:"剪刀在英语里总是复数 scissors，一把剪刀是 a pair of scissors。"}
    ]}
  ];

  if (!addGroups("preschool", GROUPS)) {
    if (window.console && console.warn) console.warn("[data-words-preschool] preschool level not found");
  }
})();
