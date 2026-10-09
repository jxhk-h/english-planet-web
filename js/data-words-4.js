/* 单词数据（拓展二）—— 大学四级 / 大学六级 / 考研英语 / 雅思核心 各再增 2 个主题组
   按 levelId 把新分组并进 data-words-2.js 已建好的级别里。字段说明同 data-words.js。 */
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

    /* ==================== 大学四级 · 新增 ==================== */
    {
      levelId: "cet4",
      groups: [
        { name: "环境与能源 Environment", emoji: "🌱", words: [
          {w:"carbon",p:"/ˈkɑːbən/",s:"n.",c:"碳",e:"Burning coal releases carbon into the air.",t:"烧煤会把碳释放到空气中。",ph:"carbon dioxide 二氧化碳"},
          {w:"solar",p:"/ˈsəʊlə/",s:"adj.",c:"太阳能的",e:"Solar power is clean and endless.",t:"太阳能既清洁又取之不尽。",rt:"sol(太阳) + -ar",ph:"solar energy 太阳能"},
          {w:"fossil",p:"/ˈfɒsl/",s:"n.",c:"化石",e:"Fossil fuels will not last forever.",t:"化石燃料不会永远用不完。",ph:"fossil fuel 化石燃料"},
          {w:"climate",p:"/ˈklaɪmət/",s:"n.",c:"气候",e:"The climate here is warm and wet.",t:"这里的气候温暖湿润。",rt:"clim(倾斜) + -ate → 地球倾斜形成的气候带",ph:"climate change 气候变化"},
          {w:"drought",p:"/draʊt/",s:"n.",c:"干旱",e:"The drought lasted for six months.",t:"干旱持续了六个月。",an:"flood"},
          {w:"flood",p:"/flʌd/",s:"n. & v.",c:"洪水",e:"The flood damaged many houses.",t:"洪水毁坏了许多房屋。",f:"floods",an:"drought"},
          {w:"greenhouse",p:"/ˈɡriːnhaʊs/",s:"n.",c:"温室",e:"Greenhouse gases warm the earth.",t:"温室气体使地球变暖。",rt:"green(绿) + house(房子)",ph:"greenhouse gas 温室气体"},
          {w:"atmosphere",p:"/ˈætməsfɪə/",s:"n.",c:"大气层",e:"The atmosphere protects us from the sun.",t:"大气层保护我们免受太阳伤害。",rt:"atmo(气) + sphere(球)"},
          {w:"turbine",p:"/ˈtɜːbaɪn/",s:"n.",c:"涡轮机",e:"Each turbine can power a small town.",t:"每台涡轮机可为一个小镇供电。",rt:"turb(旋转) + -ine"},
          {w:"fuel",p:"/ˈfjuːəl/",s:"n.",c:"燃料",e:"The plane needs a lot of fuel.",t:"飞机需要大量燃料。",f:"fuels"},
          {w:"smog",p:"/smɒɡ/",s:"n.",c:"烟雾",e:"Smog hangs over the big city.",t:"烟雾笼罩着这座大城市。",rt:"smoke + fog 合成词"},
          {w:"deforestation",p:"/ˌdiːˌfɒrɪˈsteɪʃn/",s:"n.",c:"滥伐森林",e:"Deforestation destroys animal homes.",t:"滥伐森林毁掉了动物的家园。",rt:"de-(去除) + forest(森林) + -ation"},
          {w:"irrigation",p:"/ˌɪrɪˈɡeɪʃn/",s:"n.",c:"灌溉",e:"Irrigation makes the desert farm land.",t:"灌溉让沙漠变成了农田。",rt:"ir-(进入) + rig(浇水) + -ation"},
          {w:"coal",p:"/kəʊl/",s:"n.",c:"煤",e:"This country still burns a lot of coal.",t:"这个国家仍然烧很多煤。"}
        ]},
        { name: "媒体与传播 Media", emoji: "📡", words: [
          {w:"media",p:"/ˈmiːdiə/",s:"n.",c:"媒体",e:"The media reported the story at once.",t:"媒体立刻报道了这件事。",tp:"media 是复数形式，单数是 medium。"},
          {w:"broadcast",p:"/ˈbrɔːdkɑːst/",s:"v. & n.",c:"广播",e:"They broadcast the match live.",t:"他们直播了这场比赛。",f:"broadcast / broadcasting",rt:"broad(广) + cast(投)"},
          {w:"journalist",p:"/ˈdʒɜːnəlɪst/",s:"n.",c:"记者",e:"The journalist asked a hard question.",t:"记者问了一个尖锐的问题。",rt:"journal(日报) + -ist(人)"},
          {w:"headline",p:"/ˈhedlaɪn/",s:"n.",c:"标题",e:"The headline caught my eye.",t:"那条标题吸引了我的注意。",f:"headlines",rt:"head(头) + line(行)"},
          {w:"advertisement",p:"/ədˈvɜːtɪsmənt/",s:"n.",c:"广告",e:"The advertisement is on every wall.",t:"这则广告贴满了每一面墙。",f:"advertisements",sy:"ad",rt:"ad-(向) + vert(转) + -isement"},
          {w:"audience",p:"/ˈɔːdiəns/",s:"n.",c:"观众",e:"The audience clapped for a long time.",t:"观众鼓了很久的掌。",rt:"audi(听) + -ence"},
          {w:"publish",p:"/ˈpʌblɪʃ/",s:"v.",c:"出版",e:"The book will publish next spring.",t:"这本书明年春天出版。",f:"published / publishing",rt:"publ(公众) + -ish"},
          {w:"edition",p:"/ɪˈdɪʃn/",s:"n.",c:"版本",e:"The first edition sold out quickly.",t:"第一版很快就卖完了。",f:"editions",rt:"edit(编辑) + -ion"},
          {w:"coverage",p:"/ˈkʌvərɪdʒ/",s:"n.",c:"报道",e:"The event got wide media coverage.",t:"这件事得到了广泛的媒体报道。",rt:"cover(覆盖) + -age"},
          {w:"publicity",p:"/pʌbˈlɪsəti/",s:"n.",c:"宣传",e:"The film got a lot of publicity.",t:"这部电影得到了大量宣传。",rt:"public(公众) + -ity"},
          {w:"transmit",p:"/trænzˈmɪt/",s:"v.",c:"传送",e:"The station transmits news every hour.",t:"电台每小时播送一次新闻。",f:"transmitted / transmitting",rt:"trans-(跨越) + mit(送)"},
          {w:"subscription",p:"/səbˈskrɪpʃn/",s:"n.",c:"订阅",e:"My subscription ends this month.",t:"我的订阅这个月到期。",f:"subscriptions",rt:"sub-(下面) + script(写) + -ion"},
          {w:"podcast",p:"/ˈpɒdkɑːst/",s:"n.",c:"播客",e:"I listen to a podcast on the bus.",t:"我在公交车上听播客。",f:"podcasts",rt:"iPod + broadcast 合成词"},
          {w:"viral",p:"/ˈvaɪrəl/",s:"adj.",c:"病毒式传播的",e:"The video went viral in one day.",t:"那个视频一天之内就火了。",ph:"go viral 迅速走红"}
        ]}
      ]
    },

    /* ==================== 大学六级 · 新增 ==================== */
    {
      levelId: "cet6",
      groups: [
        { name: "法律与伦理 Law", emoji: "⚖️", words: [
          {w:"legislation",p:"/ˌledʒɪsˈleɪʃn/",s:"n.",c:"立法",e:"New legislation protects the workers.",t:"新的立法保护工人。",rt:"legis(法律) + lat(带来) + -ion"},
          {w:"verdict",p:"/ˈvɜːdɪkt/",s:"n.",c:"裁决",e:"The jury reached a verdict quickly.",t:"陪审团很快作出了裁决。",rt:"ver(真) + dict(说)"},
          {w:"plaintiff",p:"/ˈpleɪntɪf/",s:"n.",c:"原告",e:"The plaintiff asked for compensation.",t:"原告要求赔偿。",an:"defendant"},
          {w:"defendant",p:"/dɪˈfendənt/",s:"n.",c:"被告",e:"The defendant denied the charge.",t:"被告否认了指控。",rt:"defend(辩护) + -ant(人)",an:"plaintiff"},
          {w:"testimony",p:"/ˈtestɪməni/",s:"n.",c:"证词",e:"Her testimony changed the case.",t:"她的证词改变了案件的走向。",rt:"test(见证) + -mony"},
          {w:"jurisdiction",p:"/ˌdʒʊərɪsˈdɪkʃn/",s:"n.",c:"司法管辖权",e:"The case is outside our jurisdiction.",t:"这个案子不在我们的管辖范围内。",rt:"juris(法律) + dict(说) + -ion"},
          {w:"liability",p:"/ˌlaɪəˈbɪləti/",s:"n.",c:"责任",e:"The company accepted liability for the damage.",t:"公司承担了损害的赔偿责任。",rt:"li(捆绑) + -ability"},
          {w:"sanction",p:"/ˈsæŋkʃn/",s:"n. & v.",c:"制裁",e:"The government imposed a sanction on the firm.",t:"政府对这家公司实施了制裁。",f:"sanctions"},
          {w:"compliance",p:"/kəmˈplaɪəns/",s:"n.",c:"合规",e:"Compliance with the rules is required.",t:"必须遵守这些规定。",rt:"com-(完全) + pli(折叠) + -ance"},
          {w:"statute",p:"/ˈstætʃuːt/",s:"n.",c:"法规",e:"The statute took effect last year.",t:"这项法规去年生效。",f:"statutes",rt:"stat(站立) + -ute → 立起来的规定"},
          {w:"arbitration",p:"/ˌɑːbɪˈtreɪʃn/",s:"n.",c:"仲裁",e:"They settled the dispute by arbitration.",t:"他们通过仲裁解决了争端。",rt:"arbitr(裁决) + -ation"},
          {w:"misconduct",p:"/ˌmɪsˈkɒndʌkt/",s:"n.",c:"不当行为",e:"He was fired for serious misconduct.",t:"他因严重的不当行为被解雇。",rt:"mis-(错误) + conduct(行为)"},
          {w:"transparency",p:"/trænsˈpærənsi/",s:"n.",c:"透明度",e:"The public demands greater transparency.",t:"公众要求更高的透明度。",rt:"trans-(穿过) + par(显现) + -ency"},
          {w:"accountability",p:"/əˌkaʊntəˈbɪləti/",s:"n.",c:"问责",e:"The report calls for more accountability.",t:"这份报告呼吁加强问责。",rt:"account(账目) + -ability"}
        ]},
        { name: "心理与行为 Mind", emoji: "🧠", words: [
          {w:"cognitive",p:"/ˈkɒɡnətɪv/",s:"adj.",c:"认知的",e:"Sleep affects cognitive performance.",t:"睡眠影响认知表现。",rt:"cogn(知道) + -itive"},
          {w:"perception",p:"/pəˈsepʃn/",s:"n.",c:"知觉",e:"Colour changes our perception of size.",t:"颜色会改变我们对大小的感知。",rt:"per-(完全) + cept(抓) + -ion"},
          {w:"stimulus",p:"/ˈstɪmjələs/",s:"n.",c:"刺激",e:"Light is a stimulus for the eye.",t:"光是眼睛的一种刺激。",f:"stimuli",tp:"复数是 stimuli，不是 stimuluses。"},
          {w:"impulse",p:"/ˈɪmpʌls/",s:"n.",c:"冲动",e:"He bought the car on impulse.",t:"他一冲动就买了那辆车。",ph:"on impulse 一时冲动"},
          {w:"subconscious",p:"/ˌsʌbˈkɒnʃəs/",s:"adj.",c:"潜意识的",e:"Habits live in the subconscious mind.",t:"习惯存在于潜意识之中。",rt:"sub-(下) + conscious(有意识的)"},
          {w:"mindfulness",p:"/ˈmaɪndfulnəs/",s:"n.",c:"正念",e:"Mindfulness helps reduce daily stress.",t:"正念有助于减轻日常压力。",rt:"mind(心) + -ful + -ness"},
          {w:"empathy",p:"/ˈempəθi/",s:"n.",c:"共情",e:"Good doctors show empathy to patients.",t:"好医生对病人有共情。",rt:"em-(在内) + path(感受) + -y"},
          {w:"temperament",p:"/ˈtemprəmənt/",s:"n.",c:"气质",e:"The twins have very different temperaments.",t:"这对双胞胎气质很不同。",f:"temperaments",rt:"temper(调和) + -ament"},
          {w:"compulsion",p:"/kəmˈpʌlʃn/",s:"n.",c:"强迫感",e:"She felt a compulsion to check the door.",t:"她忍不住非要去检查门。",rt:"com-(加强) + puls(推) + -ion"},
          {w:"phobia",p:"/ˈfəʊbiə/",s:"n.",c:"恐惧症",e:"He has a phobia of high places.",t:"他有恐高症。",rt:"phob(恐惧) + -ia"},
          {w:"morale",p:"/məˈrɑːl/",s:"n.",c:"士气",e:"The morale rose after the win.",t:"赢球之后士气高涨了。",ph:"raise morale 提振士气"},
          {w:"burnout",p:"/ˈbɜːnaʊt/",s:"n.",c:"职业倦怠",e:"Long hours of work led to burnout.",t:"长时间工作导致了倦怠。",rt:"burn(烧) + out(尽)"},
          {w:"introvert",p:"/ˈɪntrəvɜːt/",s:"n.",c:"内向的人",e:"An introvert enjoys quiet evenings.",t:"内向的人喜欢安静的夜晚。",an:"extrovert",rt:"intro-(向内) + vert(转)"},
          {w:"assertive",p:"/əˈsɜːtɪv/",s:"adj.",c:"果断自信的",e:"She is assertive in meetings.",t:"她在会上敢于表达。",rt:"as-(去) + sert(连接) + -ive"}
        ]}
      ]
    },

    /* ==================== 考研英语 · 新增 ==================== */
    {
      levelId: "kaoyan",
      groups: [
        { name: "高频副词 Adverbs", emoji: "📈", words: [
          {w:"substantially",p:"/səbˈstænʃəli/",s:"adv.",c:"大幅地",e:"Costs rose substantially last year.",t:"去年成本大幅上升。",rt:"sub-(下) + stant(站立) + -ially"},
          {w:"considerably",p:"/kənˈsɪdərəbli/",s:"adv.",c:"相当大地",e:"The plan improved considerably.",t:"这个方案有了相当大的改进。",rt:"consider(考虑) + -ably"},
          {w:"increasingly",p:"/ɪnˈkriːsɪŋli/",s:"adv.",c:"越来越",e:"Work is increasingly done online.",t:"工作越来越多地在网上完成。",rt:"in-(进入) + creas(生长) + -ingly"},
          {w:"remarkably",p:"/rɪˈmɑːkəbli/",s:"adv.",c:"显著地",e:"The two studies agree remarkably well.",t:"这两项研究高度一致。",rt:"re-(再) + mark(标记) + -ably"},
          {w:"precisely",p:"/prɪˈsaɪsli/",s:"adv.",c:"精确地",e:"We must define the term precisely.",t:"我们必须精确地定义这个术语。",rt:"pre-(先) + cis(切) + -ely"},
          {w:"merely",p:"/ˈmɪəli/",s:"adv.",c:"仅仅",e:"This is merely one possible answer.",t:"这仅仅是其中一种可能的答案。",rt:"mere(仅仅) + -ly"},
          {w:"rarely",p:"/ˈreəli/",s:"adv.",c:"很少",e:"Such cases are rarely seen.",t:"这类情况很少见到。",an:"frequently"},
          {w:"invariably",p:"/ɪnˈveəriəbli/",s:"adv.",c:"总是",e:"He invariably arrives ten minutes early.",t:"他总是提前十分钟到。",rt:"in-(不) + vari(变化) + -ably"},
          {w:"virtually",p:"/ˈvɜːtʃuəli/",s:"adv.",c:"几乎",e:"The two versions are virtually the same.",t:"这两个版本几乎一样。",rt:"virtu(效力) + -ally"},
          {w:"exceedingly",p:"/ɪkˈsiːdɪŋli/",s:"adv.",c:"极其",e:"The task is exceedingly difficult.",t:"这项任务极其困难。",rt:"ex-(出) + ceed(走) + -ingly"},
          {w:"marginally",p:"/ˈmɑːdʒɪnəli/",s:"adv.",c:"略微",e:"The second result is marginally better.",t:"第二个结果略微好一些。",rt:"margin(边缘) + -ally"},
          {w:"drastically",p:"/ˈdræstɪkli/",s:"adv.",c:"急剧地",e:"The price dropped drastically.",t:"价格急剧下跌。",rt:"drast(行动) + -ically"},
          {w:"tentatively",p:"/ˈtentətɪvli/",s:"adv.",c:"试探性地",e:"We tentatively agree with the view.",t:"我们暂时同意这个观点。",rt:"tent(尝试) + -atively"},
          {w:"presumably",p:"/prɪˈzjuːməbli/",s:"adv.",c:"大概",e:"Presumably the data are correct.",t:"这些数据大概是对的。",rt:"pre-(先) + sum(取) + -ably"}
        ]},
        { name: "论证动词 Argument", emoji: "🔧", words: [
          {w:"substantiate",p:"/səbˈstænʃieɪt/",s:"v.",c:"证实",e:"The data substantiate his claim.",t:"这些数据证实了他的说法。",f:"substantiated / substantiating",rt:"sub-(下) + stant(站立) + -iate → 站得住脚"},
          {w:"corroborate",p:"/kəˈrɒbəreɪt/",s:"v.",c:"印证",e:"Two studies corroborate the finding.",t:"两项研究印证了这一发现。",f:"corroborated / corroborating",rt:"cor-(共同) + robor(力量) + -ate"},
          {w:"delineate",p:"/dɪˈlɪnieɪt/",s:"v.",c:"勾勒",e:"The paper delineates three main trends.",t:"这篇论文勾勒出三大趋势。",f:"delineated / delineating",rt:"de-(完全) + line(线) + -ate"},
          {w:"elucidate",p:"/ɪˈluːsɪdeɪt/",s:"v.",c:"阐明",e:"The author elucidates the theory clearly.",t:"作者清楚地阐明了这一理论。",f:"elucidated / elucidating",rt:"e-(出) + lucid(明亮) + -ate"},
          {w:"postulate",p:"/ˈpɒstjuleɪt/",s:"v.",c:"假定",e:"Economists postulate a rational buyer.",t:"经济学家假定买方是理性的。",f:"postulated / postulating",rt:"postul(要求) + -ate"},
          {w:"refute",p:"/rɪˈfjuːt/",s:"v.",c:"反驳",e:"The evidence refutes that view.",t:"这些证据驳倒了那个观点。",f:"refuted / refuting",rt:"re-(回) + fute(打)"},
          {w:"concede",p:"/kənˈsiːd/",s:"v.",c:"承认",e:"He concedes that the method has limits.",t:"他承认这种方法有局限。",f:"conceded / conceding",rt:"con-(完全) + cede(让步)"},
          {w:"vindicate",p:"/ˈvɪndɪkeɪt/",s:"v.",c:"证明正确",e:"Later research vindicated her idea.",t:"后来的研究证明她的想法是对的。",f:"vindicated / vindicating",rt:"vin(力量) + dic(说) + -ate"},
          {w:"extrapolate",p:"/ɪkˈstræpəleɪt/",s:"v.",c:"外推",e:"We cannot extrapolate from one case.",t:"我们不能从一个案例外推。",f:"extrapolated / extrapolating",rt:"extra-(外) + pol(推) + -ate"},
          {w:"synthesize",p:"/ˈsɪnθəsaɪz/",s:"v.",c:"综合",e:"The review synthesizes fifty studies.",t:"这篇综述综合了五十项研究。",f:"synthesized / synthesizing",rt:"syn-(共同) + thes(放置) + -ize"},
          {w:"scrutinize",p:"/ˈskruːtənaɪz/",s:"v.",c:"细查",e:"Reviewers scrutinize every number.",t:"评审会细查每一个数字。",f:"scrutinized / scrutinizing",rt:"scrutin(翻找) + -ize"},
          {w:"exemplify",p:"/ɪɡˈzemplɪfaɪ/",s:"v.",c:"例证",e:"This case exemplifies the problem.",t:"这个案例例证了该问题。",f:"exemplified / exemplifying",rt:"exempl(样例) + -ify"},
          {w:"juxtapose",p:"/ˌdʒʌkstəˈpəʊz/",s:"v.",c:"并置对比",e:"The essay juxtaposes two arguments.",t:"这篇文章把两种论点并置对比。",f:"juxtaposed / juxtaposing",rt:"juxta-(旁边) + pose(放)"},
          {w:"reconcile",p:"/ˈrekənsaɪl/",s:"v.",c:"调和",e:"It is hard to reconcile the two results.",t:"很难调和这两个结果。",f:"reconciled / reconciling",rt:"re-(再) + con-(共同) + cile(召集)"}
        ]}
      ]
    },

    /* ==================== 雅思核心 · 新增 ==================== */
    {
      levelId: "ielts",
      groups: [
        { name: "工作与发展 Career", emoji: "💼", words: [
          {w:"salary",p:"/ˈsæləri/",s:"n.",c:"薪水",e:"The salary is paid every month.",t:"薪水按月发放。",f:"salaries",sy:"wage"},
          {w:"wage",p:"/weɪdʒ/",s:"n.",c:"工资",e:"The hourly wage rose to twelve dollars.",t:"时薪涨到了十二美元。",f:"wages",ph:"hourly wage 时薪"},
          {w:"recruit",p:"/rɪˈkruːt/",s:"v.",c:"招聘",e:"The firm recruits ten graduates a year.",t:"这家公司每年招聘十名毕业生。",f:"recruited / recruiting",rt:"re-(再) + cru(生长) + -it"},
          {w:"applicant",p:"/ˈæplɪkənt/",s:"n.",c:"申请人",e:"Each applicant must send a form.",t:"每位申请人都必须寄一份表格。",f:"applicants",rt:"ap-(向) + plic(折叠) + -ant(人)"},
          {w:"workforce",p:"/ˈwɜːkfɔːs/",s:"n.",c:"劳动力",e:"Half the workforce works from home.",t:"一半的员工在家办公。",rt:"work(工作) + force(力量)"},
          {w:"productivity",p:"/ˌprɒdʌkˈtɪvəti/",s:"n.",c:"生产率",e:"Productivity grew by three percent.",t:"生产率增长了百分之三。",rt:"pro-(向前) + duct(引导) + -ivity"},
          {w:"entrepreneur",p:"/ˌɒntrəprəˈnɜː/",s:"n.",c:"创业者",e:"The entrepreneur started with one shop.",t:"这位创业者从一家小店起步。",f:"entrepreneurs",rt:"entre-(之间) + pren(取) + -eur(人)"},
          {w:"freelance",p:"/ˈfriːlɑːns/",s:"adj. & v.",c:"自由职业的",e:"She works as a freelance designer.",t:"她是一名自由职业设计师。",ph:"go freelance 做自由职业"},
          {w:"workload",p:"/ˈwɜːkləʊd/",s:"n.",c:"工作量",e:"His workload doubled this year.",t:"他今年的工作量翻了一倍。",f:"workloads",rt:"work(工作) + load(负担)"},
          {w:"redundancy",p:"/rɪˈdʌndənsi/",s:"n.",c:"裁员",e:"The factory announced two hundred redundancies.",t:"工厂宣布裁员两百人。",rt:"re-(再) + dund(溢出) + -ancy"},
          {w:"appraisal",p:"/əˈpreɪzl/",s:"n.",c:"评估",e:"The yearly appraisal is in December.",t:"年度评估在十二月。",f:"appraisals",rt:"ap-(向) + prais(价值) + -al"},
          {w:"mentorship",p:"/ˈmentɔːʃɪp/",s:"n.",c:"导师制",e:"The company offers mentorship to newcomers.",t:"公司为新员工提供导师制。",rt:"mentor(导师) + -ship"},
          {w:"turnover",p:"/ˈtɜːnəʊvə/",s:"n.",c:"人员流动率",e:"High turnover costs the firm money.",t:"高流动率让公司损失金钱。",rt:"turn(转) + over(过)"},
          {w:"remuneration",p:"/rɪˌmjuːnəˈreɪʃn/",s:"n.",c:"报酬",e:"The job offers good remuneration.",t:"这份工作的报酬不错。",rt:"re-(回) + muner(礼物) + -ation"}
        ]},
        { name: "语言与学习 Language", emoji: "🗣️", words: [
          {w:"vocabulary",p:"/vəˈkæbjələri/",s:"n.",c:"词汇",e:"Reading builds a large vocabulary.",t:"阅读能积累大量词汇。",f:"vocabularies",rt:"voc(叫) + -abulary"},
          {w:"grammar",p:"/ˈɡræmə/",s:"n.",c:"语法",e:"English grammar is not that hard.",t:"英语语法没那么难。",rt:"gram(写) + -mar"},
          {w:"fluency",p:"/ˈfluːənsi/",s:"n.",c:"流利",e:"Practice brings fluency in speaking.",t:"练习能让口语变得流利。",rt:"flu(流) + -ency"},
          {w:"accent",p:"/ˈæksent/",s:"n.",c:"口音",e:"She speaks with a soft accent.",t:"她说话带一点轻柔的口音。",f:"accents",rt:"ac-(向) + cent(唱)"},
          {w:"dialect",p:"/ˈdaɪəlekt/",s:"n.",c:"方言",e:"This dialect has its own words.",t:"这种方言有自己的词汇。",f:"dialects",rt:"dia-(之间) + lect(说)"},
          {w:"bilingual",p:"/ˌbaɪˈlɪŋɡwəl/",s:"adj.",c:"双语的",e:"Bilingual children switch easily.",t:"双语儿童切换语言很容易。",rt:"bi-(两) + lingu(语言) + -al"},
          {w:"immersion",p:"/ɪˈmɜːʃn/",s:"n.",c:"沉浸式学习",e:"Immersion is the fastest way to learn.",t:"沉浸式学习是最快的学习方式。",rt:"im-(进入) + mers(沉) + -ion"},
          {w:"comprehension",p:"/ˌkɒmprɪˈhenʃn/",s:"n.",c:"理解",e:"Reading comprehension improves with practice.",t:"阅读理解会随着练习提高。",rt:"com-(完全) + prehend(抓住) + -ion"},
          {w:"pronunciation",p:"/prəˌnʌnsiˈeɪʃn/",s:"n.",c:"发音",e:"Her pronunciation is very clear.",t:"她的发音非常清楚。",rt:"pro-(向前) + nunci(宣布) + -ation"},
          {w:"proficiency",p:"/prəˈfɪʃnsi/",s:"n.",c:"熟练程度",e:"He reached advanced proficiency in French.",t:"他的法语达到了高级水平。",rt:"pro-(向前) + fic(做) + -iency"},
          {w:"lexicon",p:"/ˈleksɪkən/",s:"n.",c:"词库",e:"The lexicon of science grows each year.",t:"科学词汇每年都在增长。",rt:"lex(词) + -icon"},
          {w:"syntax",p:"/ˈsɪntæks/",s:"n.",c:"句法",e:"Syntax decides how words fit together.",t:"句法决定词如何组合在一起。",rt:"syn-(共同) + tax(排列)"},
          {w:"semantics",p:"/sɪˈmæntɪks/",s:"n.",c:"语义学",e:"Semantics studies the meaning of words.",t:"语义学研究词的意义。",rt:"semant(意义) + -ics"},
          {w:"articulate",p:"/ɑːˈtɪkjuleɪt/",s:"v.",c:"清晰表达",e:"She can articulate her ideas well.",t:"她能很好地清晰表达自己的想法。",f:"articulated / articulating",rt:"articul(关节) + -ate → 把话一节一节说清"}
        ]}
      ]
    }
  ];

  var failed = [];
  EXTRA.forEach(function (e) {
    if (!addGroups(e.levelId, e.groups)) failed.push(e.levelId);
  });
  if (failed.length) {
    if (window.console && console.warn) console.warn("data-words-4: 未找到级别 " + failed.join(", "));
  }
})();
