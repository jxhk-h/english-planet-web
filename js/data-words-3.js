/* 单词数据（拓展一）—— 学前 / 小学 / 初中 / 高中 各再增 2 个主题组
   本文件不新建级别，而是按 levelId 把新分组并进 data-words.js 已建好的级别里。
   字段说明同 data-words.js：
     w 单词  p 音标  s 词性  c 中文  e 英文例句  t 例句译文
     f 变形  ph 常见搭配（多条用 ｜ 分隔）  sy 近义  an 反义  rt 词根词缀  tp 易混提示 */
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

  var EXTRA = [

    /* ==================== 学前 · 新增 ==================== */
    {
      levelId: "preschool",
      groups: [
        { name: "身体与五官 Body", emoji: "🧍", words: [
          {w:"head",p:"/hed/",s:"n.",c:"头",e:"I put a hat on my head.",t:"我把帽子戴在头上。",f:"heads",ph:"shake my head 摇头",tp:"head 也能指「负责人」：the head of the school。"},
          {w:"hair",p:"/heə/",s:"n.",c:"头发",e:"Her hair is long and black.",t:"她的头发又长又黑。",tp:"hair 通常不可数，不说 a hair（除非指一根头发）。"},
          {w:"eye",p:"/aɪ/",s:"n.",c:"眼睛",e:"Open your eyes and look here.",t:"睁开眼看看这里。",f:"eyes",ph:"big eyes 大眼睛"},
          {w:"ear",p:"/ɪə/",s:"n.",c:"耳朵",e:"The rabbit has two long ears.",t:"这只兔子有两只长耳朵。",f:"ears"},
          {w:"nose",p:"/nəʊz/",s:"n.",c:"鼻子",e:"The dog has a wet nose.",t:"这只狗的鼻子是湿的。",f:"noses"},
          {w:"mouth",p:"/maʊθ/",s:"n.",c:"嘴",e:"Open your mouth, please.",t:"请张开嘴。",f:"mouths",tp:"复数读 /maʊðz/，读音会变。"},
          {w:"face",p:"/feɪs/",s:"n. & v.",c:"脸；面对",e:"Wash your face in the morning.",t:"早上洗洗脸。",f:"faces",ph:"face to face 面对面"},
          {w:"hand",p:"/hænd/",s:"n.",c:"手",e:"Raise your hand if you know.",t:"知道的话请举手。",f:"hands",ph:"hand in 上交｜hand out 分发"},
          {w:"foot",p:"/fʊt/",s:"n.",c:"脚",e:"My foot hurts after the long walk.",t:"走了很久，我的脚疼。",f:"feet",tp:"复数是 feet，不是 foots。"},
          {w:"arm",p:"/ɑːm/",s:"n.",c:"手臂",e:"He broke his left arm.",t:"他左手臂骨折了。",f:"arms"},
          {w:"leg",p:"/leɡ/",s:"n.",c:"腿",e:"The chair has three legs.",t:"这把椅子有三条腿。",f:"legs"},
          {w:"tooth",p:"/tuːθ/",s:"n.",c:"牙齿",e:"My tooth hurts a little.",t:"我的一颗牙有点疼。",f:"teeth",tp:"复数是 teeth，不是 tooths。"},
          {w:"finger",p:"/ˈfɪŋɡə/",s:"n.",c:"手指",e:"I count with my fingers.",t:"我用手指来数数。",f:"fingers"},
          {w:"body",p:"/ˈbɒdi/",s:"n.",c:"身体",e:"Water is good for your body.",t:"水对身体有好处。",f:"bodies"}
        ]},
        { name: "玩具与游戏 Toys", emoji: "🧸", words: [
          {w:"ball",p:"/bɔːl/",s:"n.",c:"球",e:"Let us play with the ball.",t:"我们来玩球吧。",f:"balls",ph:"play ball 玩球"},
          {w:"doll",p:"/dɒl/",s:"n.",c:"娃娃",e:"She sleeps with her doll.",t:"她抱着娃娃睡觉。",f:"dolls"},
          {w:"kite",p:"/kaɪt/",s:"n.",c:"风筝",e:"We fly a kite in spring.",t:"我们在春天放风筝。",f:"kites",ph:"fly a kite 放风筝"},
          {w:"car",p:"/kɑː/",s:"n.",c:"小汽车",e:"The red car is fast.",t:"这辆红色小汽车很快。",f:"cars",ph:"by car 坐小汽车"},
          {w:"boat",p:"/bəʊt/",s:"n.",c:"小船",e:"The boat is on the lake.",t:"小船在湖上。",f:"boats"},
          {w:"plane",p:"/pleɪn/",s:"n.",c:"飞机",e:"The plane is in the sky.",t:"飞机在天上。",f:"planes",ph:"by plane 坐飞机"},
          {w:"train",p:"/treɪn/",s:"n.",c:"火车",e:"The train goes very fast.",t:"火车跑得很快。",f:"trains"},
          {w:"toy",p:"/tɔɪ/",s:"n.",c:"玩具",e:"This toy is my favourite.",t:"这个玩具是我的最爱。",f:"toys",ph:"a toy shop 玩具店"},
          {w:"game",p:"/ɡeɪm/",s:"n.",c:"游戏",e:"Let us play a game together.",t:"我们一起玩个游戏吧。",f:"games",ph:"play a game 玩游戏"},
          {w:"balloon",p:"/bəˈluːn/",s:"n.",c:"气球",e:"The balloon is red and round.",t:"这个气球又红又圆。",f:"balloons"},
          {w:"block",p:"/blɒk/",s:"n.",c:"积木",e:"I build a tower with blocks.",t:"我用积木搭了一座塔。",f:"blocks",ph:"building blocks 积木"},
          {w:"puzzle",p:"/ˈpʌzl/",s:"n.",c:"拼图",e:"We finish the puzzle together.",t:"我们一起拼好了拼图。",f:"puzzles"},
          {w:"gift",p:"/ɡɪft/",s:"n.",c:"礼物",e:"This gift is for you.",t:"这份礼物送给你。",f:"gifts",sy:"present",ph:"a birthday gift 生日礼物"},
          {w:"drum",p:"/drʌm/",s:"n.",c:"鼓",e:"He can play the drum.",t:"他会打鼓。",f:"drums",ph:"play the drum 打鼓"}
        ]}
      ]
    },

    /* ==================== 小学 · 新增 ==================== */
    {
      levelId: "primary",
      groups: [
        { name: "水果与饮料 Fruits", emoji: "🍊", words: [
          {w:"pear",p:"/peə/",s:"n.",c:"梨",e:"This pear is sweet and juicy.",t:"这个梨又甜又多汁。",f:"pears"},
          {w:"grape",p:"/ɡreɪp/",s:"n.",c:"葡萄",e:"I like to eat a grape after lunch.",t:"午饭后我喜欢吃一颗葡萄。",f:"grapes",ph:"a bunch of grapes 一串葡萄"},
          {w:"peach",p:"/piːtʃ/",s:"n.",c:"桃子",e:"The peach is soft and sweet.",t:"这个桃子又软又甜。",f:"peaches"},
          {w:"watermelon",p:"/ˈwɔːtəmelən/",s:"n.",c:"西瓜",e:"We share a watermelon in summer.",t:"夏天我们分吃一个西瓜。",f:"watermelons"},
          {w:"lemon",p:"/ˈlemən/",s:"n.",c:"柠檬",e:"The lemon tastes sour.",t:"这个柠檬尝起来很酸。",f:"lemons"},
          {w:"cherry",p:"/ˈtʃeri/",s:"n.",c:"樱桃",e:"She puts a cherry on the cake.",t:"她在蛋糕上放了一颗樱桃。",f:"cherries"},
          {w:"strawberry",p:"/ˈstrɔːbəri/",s:"n.",c:"草莓",e:"This strawberry is very red.",t:"这颗草莓很红。",f:"strawberries"},
          {w:"mango",p:"/ˈmæŋɡəʊ/",s:"n.",c:"芒果",e:"The mango is sweet and yellow.",t:"这个芒果又甜又黄。",f:"mangoes",tp:"复数加 -es：mangoes。"},
          {w:"tomato",p:"/təˈmɑːtəʊ/",s:"n.",c:"西红柿",e:"My mother cooks a tomato soup.",t:"妈妈煮了一锅番茄汤。",f:"tomatoes",tp:"复数加 -es：tomatoes。"},
          {w:"tea",p:"/tiː/",s:"n.",c:"茶",e:"Grandpa drinks tea every morning.",t:"爷爷每天早上喝茶。",ph:"a cup of tea 一杯茶"},
          {w:"coffee",p:"/ˈkɒfi/",s:"n.",c:"咖啡",e:"Dad likes coffee with milk.",t:"爸爸喜欢加奶的咖啡。",ph:"black coffee 黑咖啡"},
          {w:"soda",p:"/ˈsəʊdə/",s:"n.",c:"汽水",e:"Cold soda tastes great in summer.",t:"夏天喝冰汽水很爽。",f:"sodas"},
          {w:"candy",p:"/ˈkændi/",s:"n.",c:"糖果",e:"Too much candy is bad for teeth.",t:"糖吃太多对牙齿不好。",f:"candies"},
          {w:"ice",p:"/aɪs/",s:"n.",c:"冰",e:"Put some ice in the water.",t:"往水里放些冰。",ph:"ice cream 冰淇淋"}
        ]},
        { name: "运动与爱好 Sports", emoji: "⚽", words: [
          {w:"sport",p:"/spɔːt/",s:"n.",c:"运动",e:"My favourite sport is football.",t:"我最喜欢的运动是足球。",f:"sports",ph:"do sport 做运动"},
          {w:"football",p:"/ˈfʊtbɔːl/",s:"n.",c:"足球",e:"The boys play football after school.",t:"男孩们放学后踢足球。",rt:"foot(脚) + ball(球)"},
          {w:"basketball",p:"/ˈbɑːskɪtbɔːl/",s:"n.",c:"篮球",e:"He plays basketball with his friends.",t:"他和朋友们打篮球。",rt:"basket(篮子) + ball(球)"},
          {w:"tennis",p:"/ˈtenɪs/",s:"n.",c:"网球",e:"We play tennis on Sundays.",t:"我们每周日打网球。",ph:"a tennis court 网球场"},
          {w:"volleyball",p:"/ˈvɒlibɔːl/",s:"n.",c:"排球",e:"The girls play volleyball on the beach.",t:"女孩们在沙滩上打排球。",rt:"volley(飞击) + ball(球)"},
          {w:"race",p:"/reɪs/",s:"n. & v.",c:"赛跑；比赛",e:"He wins the running race.",t:"他赢得了赛跑。",f:"races",ph:"a running race 赛跑"},
          {w:"team",p:"/tiːm/",s:"n.",c:"队伍",e:"Our team has five players.",t:"我们队有五名队员。",f:"teams",ph:"a football team 足球队"},
          {w:"win",p:"/wɪn/",s:"v.",c:"赢",e:"I hope we win the game.",t:"我希望我们能赢这场比赛。",f:"won / winning",an:"lose",rt:"winn(争取) → 争取到就赢"},
          {w:"skate",p:"/skeɪt/",s:"v.",c:"滑冰",e:"Children skate on the ice in winter.",t:"冬天孩子们在冰上滑冰。",f:"skated / skating",ph:"go skating 去滑冰"},
          {w:"climb",p:"/klaɪm/",s:"v.",c:"爬",e:"We climb the hill on Saturday.",t:"我们周六去爬山。",f:"climbed / climbing",ph:"climb a mountain 爬山"},
          {w:"ride",p:"/raɪd/",s:"v.",c:"骑",e:"She can ride a bike.",t:"她会骑自行车。",f:"rode / riding",ph:"ride a bike 骑自行车"},
          {w:"hike",p:"/haɪk/",s:"v. & n.",c:"远足",e:"They hike in the forest.",t:"他们在森林里远足。",f:"hiked / hiking",ph:"go hiking 去远足"},
          {w:"camp",p:"/kæmp/",s:"n. & v.",c:"营地；露营",e:"We camp by the river in summer.",t:"夏天我们在河边露营。",f:"camps / camping",ph:"summer camp 夏令营"},
          {w:"chess",p:"/tʃes/",s:"n.",c:"国际象棋",e:"Grandpa teaches me to play chess.",t:"爷爷教我下国际象棋。",ph:"play chess 下棋"}
        ]}
      ]
    },

    /* ==================== 初中 · 新增 ==================== */
    {
      levelId: "junior",
      groups: [
        { name: "身体与健康 Health", emoji: "🩺", words: [
          {w:"fever",p:"/ˈfiːvə/",s:"n.",c:"发烧",e:"He has a fever and stays in bed.",t:"他发烧了，躺在床上。",ph:"have a fever 发烧"},
          {w:"cough",p:"/kɒf/",s:"v. & n.",c:"咳嗽",e:"She coughs all night.",t:"她咳了一整夜。",f:"coughed",ph:"a bad cough 严重的咳嗽"},
          {w:"headache",p:"/ˈhedeɪk/",s:"n.",c:"头痛",e:"I have a headache this morning.",t:"今天早上我头疼。",rt:"head(头) + ache(痛)",ph:"have a headache 头疼"},
          {w:"hospital",p:"/ˈhɒspɪtl/",s:"n.",c:"医院",e:"The hospital is near our school.",t:"医院在我们学校附近。",f:"hospitals",ph:"go to hospital 去医院"},
          {w:"doctor",p:"/ˈdɒktə/",s:"n.",c:"医生",e:"The doctor asks me to rest.",t:"医生让我休息。",f:"doctors",sy:"physician"},
          {w:"nurse",p:"/nɜːs/",s:"n.",c:"护士",e:"The nurse is very kind to children.",t:"这位护士对孩子很和善。",f:"nurses"},
          {w:"disease",p:"/dɪˈziːz/",s:"n.",c:"疾病",e:"Clean water prevents many diseases.",t:"干净的水能预防许多疾病。",f:"diseases",rt:"dis-(不) + ease(舒适) → 不舒服即生病"},
          {w:"injury",p:"/ˈɪndʒəri/",s:"n.",c:"受伤",e:"He missed the match because of an injury.",t:"他因伤错过了比赛。",f:"injuries",rt:"in-(进入) + jur(伤害) + -y"},
          {w:"diet",p:"/ˈdaɪət/",s:"n.",c:"饮食",e:"A good diet keeps you healthy.",t:"良好的饮食让你保持健康。",f:"diets",ph:"go on a diet 节食"},
          {w:"vitamin",p:"/ˈvɪtəmɪn/",s:"n.",c:"维生素",e:"Fruit gives us vitamin C.",t:"水果给我们提供维生素 C。",f:"vitamins"},
          {w:"recover",p:"/rɪˈkʌvə/",s:"v.",c:"恢复",e:"She will recover in a week.",t:"她一周后就会康复。",f:"recovered / recovering",rt:"re-(重新) + cover(覆盖) → 重新复原"},
          {w:"treatment",p:"/ˈtriːtmənt/",s:"n.",c:"治疗",e:"The treatment takes three months.",t:"治疗需要三个月。",f:"treatments",rt:"treat(治疗) + -ment(名词后缀)"},
          {w:"stress",p:"/stres/",s:"n. & v.",c:"压力",e:"Too much stress is bad for health.",t:"压力太大对健康有害。",ph:"under stress 在压力之下"},
          {w:"health",p:"/helθ/",s:"n.",c:"健康",e:"Exercise is good for your health.",t:"运动对你的健康有好处。",rt:"heal(治愈) + -th(名词后缀)"}
        ]},
        { name: "旅行与交通 Travel", emoji: "🚌", words: [
          {w:"travel",p:"/ˈtrævl/",s:"v. & n.",c:"旅行",e:"I want to travel around the world.",t:"我想环游世界。",f:"travelled / travelling",ph:"travel by train 坐火车旅行"},
          {w:"ticket",p:"/ˈtɪkɪt/",s:"n.",c:"票",e:"Please show me your ticket.",t:"请出示你的车票。",f:"tickets",ph:"a train ticket 火车票"},
          {w:"airport",p:"/ˈeəpɔːt/",s:"n.",c:"机场",e:"We arrived at the airport early.",t:"我们早早到了机场。",f:"airports",rt:"air(空中) + port(港口)"},
          {w:"station",p:"/ˈsteɪʃn/",s:"n.",c:"车站",e:"The bus station is over there.",t:"公交车站就在那边。",f:"stations"},
          {w:"bus",p:"/bʌs/",s:"n.",c:"公共汽车",e:"I take the bus to school.",t:"我坐公交车上学。",f:"buses",ph:"by bus 坐公交"},
          {w:"subway",p:"/ˈsʌbweɪ/",s:"n.",c:"地铁",e:"The subway is fast and cheap.",t:"地铁又快又便宜。",sy:"metro",ph:"take the subway 坐地铁"},
          {w:"taxi",p:"/ˈtæksi/",s:"n.",c:"出租车",e:"We took a taxi to the hotel.",t:"我们打车去了酒店。",f:"taxis",ph:"take a taxi 打车"},
          {w:"bicycle",p:"/ˈbaɪsɪkl/",s:"n.",c:"自行车",e:"He goes to work by bicycle.",t:"他骑自行车上班。",f:"bicycles",sy:"bike",rt:"bi-(两) + cycle(轮)"},
          {w:"road",p:"/rəʊd/",s:"n.",c:"公路",e:"The road is busy in the morning.",t:"早上这条路很繁忙。",f:"roads",ph:"on the road 在路上"},
          {w:"map",p:"/mæp/",s:"n.",c:"地图",e:"I read the map on my phone.",t:"我在手机上看地图。",f:"maps",ph:"a map of China 中国地图"},
          {w:"passport",p:"/ˈpɑːspɔːt/",s:"n.",c:"护照",e:"Do not forget your passport.",t:"别忘了带护照。",f:"passports",rt:"pass(通过) + port(关口)"},
          {w:"hotel",p:"/həʊˈtel/",s:"n.",c:"旅馆",e:"We stayed in a small hotel.",t:"我们住在一家小旅馆。",f:"hotels",ph:"stay at a hotel 住旅馆"},
          {w:"luggage",p:"/ˈlʌɡɪdʒ/",s:"n.",c:"行李",e:"My luggage is too heavy.",t:"我的行李太重了。",tp:"luggage 不可数，不能说 luggages。"},
          {w:"sightseeing",p:"/ˈsaɪtsiːɪŋ/",s:"n.",c:"观光",e:"We spent the day sightseeing.",t:"我们花了一天时间观光。",rt:"sight(景物) + seeing(看)",ph:"go sightseeing 去观光"}
        ]}
      ]
    },

    /* ==================== 高中 · 新增 ==================== */
    {
      levelId: "senior",
      groups: [
        { name: "文化与艺术 Arts", emoji: "🎭", words: [
          {w:"art",p:"/ɑːt/",s:"n.",c:"艺术",e:"She studies art at college.",t:"她在大学学习艺术。",f:"arts",ph:"works of art 艺术品"},
          {w:"music",p:"/ˈmjuːzɪk/",s:"n.",c:"音乐",e:"Music makes me feel calm.",t:"音乐让我感到平静。",ph:"pop music 流行音乐"},
          {w:"painting",p:"/ˈpeɪntɪŋ/",s:"n.",c:"绘画",e:"This painting hangs in the museum.",t:"这幅画挂在博物馆里。",f:"paintings",rt:"paint(画) + -ing"},
          {w:"sculpture",p:"/ˈskʌlptʃə/",s:"n.",c:"雕塑",e:"The sculpture is made of stone.",t:"这座雕塑是石头做的。",f:"sculptures"},
          {w:"museum",p:"/mjuˈziːəm/",s:"n.",c:"博物馆",e:"We visited a history museum.",t:"我们参观了一家历史博物馆。",f:"museums"},
          {w:"gallery",p:"/ˈɡæləri/",s:"n.",c:"画廊",e:"Her works are shown in a gallery.",t:"她的作品在一家画廊展出。",f:"galleries"},
          {w:"theatre",p:"/ˈθɪətə/",s:"n.",c:"剧院",e:"We watched a play at the theatre.",t:"我们在剧院看了一场戏。",f:"theatres"},
          {w:"opera",p:"/ˈɒprə/",s:"n.",c:"歌剧",e:"She sings in a famous opera.",t:"她在一部著名歌剧里演唱。",f:"operas"},
          {w:"novel",p:"/ˈnɒvl/",s:"n.",c:"小说",e:"This novel has three hundred pages.",t:"这本小说有三百页。",f:"novels",sy:"fiction"},
          {w:"poetry",p:"/ˈpəʊətri/",s:"n.",c:"诗歌",e:"He writes poetry in his free time.",t:"他空闲时写诗。",rt:"poet(诗人) + -ry(集合名词)"},
          {w:"author",p:"/ˈɔːθə/",s:"n.",c:"作者",e:"The author lives in a small town.",t:"这位作者住在一个小镇上。",f:"authors",sy:"writer"},
          {w:"masterpiece",p:"/ˈmɑːstəpiːs/",s:"n.",c:"杰作",e:"The film is a real masterpiece.",t:"这部电影是真正的杰作。",f:"masterpieces",rt:"master(大师) + piece(作品)"},
          {w:"aesthetic",p:"/iːsˈθetɪk/",s:"adj.",c:"审美的",e:"The design has great aesthetic value.",t:"这个设计有很高的审美价值。",rt:"aesthet(感知) + -ic"},
          {w:"heritage",p:"/ˈherɪtɪdʒ/",s:"n.",c:"遗产",e:"The old town is a cultural heritage.",t:"这座古镇是一份文化遗产。",rt:"herit(继承) + -age(名词后缀)"}
        ]},
        { name: "态度与心理 Mindset", emoji: "💗", words: [
          {w:"optimistic",p:"/ˌɒptɪˈmɪstɪk/",s:"adj.",c:"乐观的",e:"She stays optimistic after the failure.",t:"失败之后她依然乐观。",an:"pessimistic",rt:"optim(最好) + -istic"},
          {w:"pessimistic",p:"/ˌpesɪˈmɪstɪk/",s:"adj.",c:"悲观的",e:"Do not be so pessimistic about the future.",t:"别对未来这么悲观。",an:"optimistic",rt:"pessim(最坏) + -istic"},
          {w:"motivated",p:"/ˈməʊtɪveɪtɪd/",s:"adj.",c:"有动力的",e:"The students feel motivated to study.",t:"学生们学习很有动力。",rt:"mot(移动) + -ivate + -ed"},
          {w:"determined",p:"/dɪˈtɜːmɪnd/",s:"adj.",c:"坚定的",e:"He is determined to finish the race.",t:"他决心跑完这场比赛。",rt:"de-(完全) + termin(界限) + -ed"},
          {w:"persistent",p:"/pəˈsɪstənt/",s:"adj.",c:"坚持不懈的",e:"Her persistent effort finally paid off.",t:"她坚持不懈的努力终于有了回报。",rt:"per-(贯穿) + sist(站立) + -ent"},
          {w:"sympathetic",p:"/ˌsɪmpəˈθetɪk/",s:"adj.",c:"同情的",e:"He was sympathetic to the crying child.",t:"他对哭泣的孩子表示同情。",rt:"sym-(共同) + path(感受) + -etic"},
          {w:"tolerant",p:"/ˈtɒlərənt/",s:"adj.",c:"宽容的",e:"We should be tolerant of different ideas.",t:"我们应该宽容不同的想法。",sy:"open-minded",rt:"toler(忍受) + -ant"},
          {w:"humble",p:"/ˈhʌmbl/",s:"adj.",c:"谦逊的",e:"He stays humble after winning.",t:"赢了之后他依然谦逊。",an:"arrogant"},
          {w:"sincere",p:"/sɪnˈsɪə/",s:"adj.",c:"真诚的",e:"Her thanks were warm and sincere.",t:"她的感谢温暖而真诚。",sy:"genuine"},
          {w:"anxious",p:"/ˈæŋkʃəs/",s:"adj.",c:"焦虑的",e:"She feels anxious before the exam.",t:"考试前她感到焦虑。",rt:"anx(焦虑) + -ious",tp:"常用搭配是 anxious about：anxious about the result。"},
          {w:"frustrated",p:"/frʌˈstreɪtɪd/",s:"adj.",c:"沮丧的",e:"He felt frustrated by the slow progress.",t:"进展缓慢让他很沮丧。",rt:"frustr(徒劳) + -ated"},
          {w:"enthusiastic",p:"/ɪnˌθjuːziˈæstɪk/",s:"adj.",c:"热情的",e:"The children are enthusiastic about the trip.",t:"孩子们对这次旅行很热情。",rt:"en-(使) + thus(神) + -iastic"},
          {w:"indifferent",p:"/ɪnˈdɪfrənt/",s:"adj.",c:"漠不关心的",e:"He is indifferent to praise.",t:"他对赞扬无动于衷。",rt:"in-(不) + differ(不同) + -ent"},
          {w:"resilient",p:"/rɪˈzɪliənt/",s:"adj.",c:"有韧性的",e:"Children are often more resilient than adults.",t:"孩子往往比大人更有韧性。",rt:"re-(回) + sil(跳) + -ient"}
        ]}
      ]
    }
  ];

  var failed = [];
  EXTRA.forEach(function (e) {
    if (!addGroups(e.levelId, e.groups)) failed.push(e.levelId);
  });
  if (failed.length) {
    if (window.console && console.warn) console.warn("data-words-3: 未找到级别 " + failed.join(", "));
  }
})();
