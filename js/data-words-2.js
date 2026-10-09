/* 单词数据（下）—— 大学四级 / 大学六级 / 考研英语 / 雅思核心
   本文件把 4 个模块 push 进 data-words.js 建好的 window.WORD_DATA.levels。
   字段说明同上集。 */
(function () {
  var levels = [
    /* ==================== 大学四级 ==================== */
    {
      id: "cet4", name: "大学四级", en: "CET-4", emoji: "🎓",
      color: "#9775FA", color2: "#DDD3FF",
      desc: "四六级与考研阅读的高频词，按「校园职场 / 经济 / 科技 / 动词」四类整理。",
      groups: [
        { name: "校园与职场 Campus & Career", emoji: "💼", words: [
          {w:"academic",p:"/ˌækəˈdemɪk/",s:"adj.",c:"学术的；学业的",e:"Her academic record is excellent.",t:"她的学业成绩非常优秀。",ph:"academic year 学年",rt:" academ(学园) + -ic",sy:"scholarly"},
          {w:"campus",p:"/ˈkæmpəs/",s:"n.",c:"校园",e:"Many students live on campus.",t:"许多学生住在校园里。",f:"campuses",ph:"on campus 在校园内"},
          {w:"resume",p:"/ˈrezjumeɪ/",s:"n.",c:"简历",e:"Please send your resume to us.",t:"请把你的简历发给我们。",f:"resumes",tp:"作「简历」时读 /ˈrezjumeɪ/；作「恢复」的动词 resume 读 /rɪˈzjuːm/，读音不同。",sy:"CV"},
          {w:"interview",p:"/ˈɪntəvjuː/",s:"n. & v.",c:"面试；采访",e:"She did well in the job interview.",t:"她在求职面试中表现很好。",f:"interviews",ph:"a job interview 求职面试",rt:"inter-(相互) + view(看)"},
          {w:"employ",p:"/ɪmˈplɔɪ/",s:"v.",c:"雇用；使用",e:"The company employs over 500 people.",t:"这家公司雇用了五百多人。",f:"employed / employing",ph:"be employed in 从事于",rt:"em-(进入) + ploy(折叠) → 卷进来干活",an:"dismiss"},
          {w:"profession",p:"/prəˈfeʃn/",s:"n.",c:"职业",e:"Teaching is a respected profession.",t:"教师是一个受尊重的职业。",f:"professions",ph:"by profession 就职业而言",rt:"pro-(公开) + fess(说) + -ion → 公开宣称的身份"},
          {w:"qualification",p:"/ˌkwɒlɪfɪˈkeɪʃn/",s:"n.",c:"资格；学历",e:"He has the right qualifications for the job.",t:"他具备这份工作所需的资历。",f:"qualifications",rt:"qual(性质) + -ification → 使具备条件"},
          {w:"scholarship",p:"/ˈskɒləʃɪp/",s:"n.",c:"奖学金；学术",e:"She won a full scholarship.",t:"她获得了全额奖学金。",f:"scholarships",rt:"scholar(学者) + -ship(身份/状态)"},
          {w:"seminar",p:"/ˈsemɪnɑː/",s:"n.",c:"研讨会；研讨课",e:"I attended a seminar on climate change.",t:"我参加了一个关于气候变化的研讨会。",f:"seminars",rt:"semin(种子) + -ar → 播下种子的地方"},
          {w:"internship",p:"/ˈɪntɜːnʃɪp/",s:"n.",c:"实习；实习期",e:"He found an internship at a bank.",t:"他在一家银行找到了实习机会。",f:"internships",rt:"intern(实习生) + -ship"},
          {w:"career",p:"/kəˈrɪə/",s:"n.",c:"职业生涯",e:"She built a career in software design.",t:"她在软件设计领域开创了职业生涯。",f:"careers",ph:"career path 职业道路"},
          {w:"colleague",p:"/ˈkɒliːɡ/",s:"n.",c:"同事",e:"My colleagues are easy to work with.",t:"我的同事们很容易共事。",f:"colleagues",rt:"col-(共同) + league(联盟) → 同一阵营的人",tp:"中后段是 -league，别拼成 -leg。"},
          {w:"promotion",p:"/prəˈməʊʃn/",s:"n.",c:"晋升；促销",e:"She got a promotion last month.",t:"她上个月升职了。",f:"promotions",ph:"get a promotion 得到晋升",rt:"pro-(向前) + mot(移动) + -ion"},
          {w:"deadline",p:"/ˈdedlaɪn/",s:"n.",c:"截止日期",e:"We must meet the deadline.",t:"我们必须赶上截止日期。",f:"deadlines",ph:"meet / miss a deadline 赶上 / 错过截止期",rt:"dead(死的) + line(线) → 越线即死"}
        ]},
        { name: "经济与商业 Economy", emoji: "💰", words: [
          {w:"economy",p:"/ɪˈkɒnəmi/",s:"n.",c:"经济；节约",e:"The economy grew by three percent.",t:"经济增长了百分之三。",f:"economies",rt:"eco(家) + nom(管理) → 管家之道"},
          {w:"finance",p:"/ˈfaɪnæns/",s:"n. & v.",c:"金融；财务；提供资金",e:"He works in finance in Shanghai.",t:"他在上海从事金融工作。",f:"finances / financed",ph:"public finance 公共财政"},
          {w:"budget",p:"/ˈbʌdʒɪt/",s:"n. & v.",c:"预算",e:"The project went over budget.",t:"这个项目超出了预算。",f:"budgets",ph:"on a tight budget 预算紧张"},
          {w:"investment",p:"/ɪnˈvestmənt/",s:"n.",c:"投资",e:"Education is the best investment.",t:"教育是最好的投资。",f:"investments",ph:"make an investment 进行投资",rt:"in-(进入) + vest(衣服) + -ment → 给钱「穿上衣服」"},
          {w:"expense",p:"/ɪkˈspens/",s:"n.",c:"费用；开支",e:"Travel expenses will be paid by the company.",t:"差旅费由公司支付。",f:"expenses",ph:"at the expense of 以……为代价",rt:"ex-(向外) + pens(称重、支付) + -e",tp:"expense 指「花费的钱」；cost 更泛指「代价」。"},
          {w:"profit",p:"/ˈprɒfɪt/",s:"n. & v.",c:"利润；获利",e:"The shop made a small profit this year.",t:"这家店今年有少量利润。",f:"profits",ph:"make a profit 盈利",an:"loss",tp:"注意与 prophet（先知）拼写相近但意思无关。"},
          {w:"consumer",p:"/kənˈsjuːmə/",s:"n.",c:"消费者",e:"Consumers want better service.",t:"消费者想要更好的服务。",f:"consumers",rt:"con-(完全) + sum(拿取) + -er"},
          {w:"market",p:"/ˈmɑːkɪt/",s:"n. & v.",c:"市场；推销",e:"The company entered the Asian market.",t:"公司进入了亚洲市场。",f:"markets",ph:"on the market 在售"},
          {w:"corporation",p:"/ˌkɔːpəˈreɪʃn/",s:"n.",c:"大公司；法人",e:"He works for a large corporation.",t:"他在一家大公司工作。",f:"corporations",rt:"corpor(身体) + -ation → 一个「法人身体」"},
          {w:"revenue",p:"/ˈrevənjuː/",s:"n.",c:"收入；税收",e:"The company's revenue doubled.",t:"公司的收入翻了一番。",rt:"re-(回) + ven(来) + -ue → 回来的钱",sy:"income"},
          {w:"negotiate",p:"/nɪˈɡəʊʃieɪt/",s:"v.",c:"谈判；协商",e:"The two sides are negotiating a new contract.",t:"双方正在协商一份新合同。",f:"negotiated / negotiating",ph:"negotiate with sb. 与某人谈判",rt:"neg-(不) + oti(闲暇) + -ate → 不得闲，忙着谈"},
          {w:"currency",p:"/ˈkʌrənsi/",s:"n.",c:"货币；流通",e:"The local currency has become stronger.",t:"当地货币走强了。",f:"currencies",rt:"curr(跑) + -ency → 流通的东西"},
          {w:"inflation",p:"/ɪnˈfleɪʃn/",s:"n.",c:"通货膨胀",e:"Inflation has pushed prices up.",t:"通货膨胀推高了物价。",rt:"in-(向内) + flat(吹) + -ion → 吹胀",an:"deflation"},
          {w:"transaction",p:"/trænˈzækʃn/",s:"n.",c:"交易",e:"Each transaction is recorded automatically.",t:"每笔交易都会被自动记录。",f:"transactions",rt:"trans-(穿越) + act(做) + -ion → 双方过手"}
        ]},
        { name: "科技与创新 Technology", emoji: "🤖", words: [
          {w:"innovation",p:"/ˌɪnəˈveɪʃn/",s:"n.",c:"创新",e:"Innovation is the key to growth.",t:"创新是增长的关键。",f:"innovations",rt:"in-(进入) + nov(新) + -ation"},
          {w:"digital",p:"/ˈdɪdʒɪtl/",s:"adj.",c:"数字的",e:"We live in a digital age.",t:"我们生活在数字时代。",rt:"digit(手指、数字) + -al",an:"analogue"},
          {w:"algorithm",p:"/ˈælɡərɪðəm/",s:"n.",c:"算法",e:"The algorithm decides what you see.",t:"算法决定你能看到什么。",f:"algorithms"},
          {w:"automation",p:"/ˌɔːtəˈmeɪʃn/",s:"n.",c:"自动化",e:"Automation has changed many jobs.",t:"自动化改变了许多工作。",rt:"auto-(自己) + mat(动) + -ion"},
          {w:"device",p:"/dɪˈvaɪs/",s:"n.",c:"设备；装置",e:"This device can measure air quality.",t:"这个设备可以测量空气质量。",f:"devices",tp:"注意与 devise（动词，设计）差一个字母。"},
          {w:"network",p:"/ˈnetwɜːk/",s:"n. & v.",c:"网络",e:"The network covers the whole city.",t:"这个网络覆盖全城。",f:"networks",rt:"net(网) + work(工作物)"},
          {w:"virtual",p:"/ˈvɜːtʃuəl/",s:"adj.",c:"虚拟的；实际上的",e:"Students can join a virtual classroom.",t:"学生可以加入虚拟课堂。",rt:"virtu(力量、德行) + -al",sy:"simulated"},
          {w:"artificial",p:"/ˌɑːtɪˈfɪʃl/",s:"adj.",c:"人工的；人造的",e:"Artificial intelligence is developing fast.",t:"人工智能发展很快。",rt:"art(技艺) + fic(做) + -ial → 用技术做出来的",an:"natural"},
          {w:"efficiency",p:"/ɪˈfɪʃnsi/",s:"n.",c:"效率",e:"New machines improved our efficiency.",t:"新机器提高了我们的效率。",rt:"ef-(向外) + fic(做) + -iency",an:"inefficiency"},
          {w:"renewable",p:"/rɪˈnjuːəbl/",s:"adj.",c:"可再生的",e:"Wind is a renewable source of energy.",t:"风是一种可再生能源。",ph:"renewable energy 可再生能源",rt:"re-(再) + new(新) + -able",an:"non-renewable"},
          {w:"database",p:"/ˈdeɪtəbeɪs/",s:"n.",c:"数据库",e:"All customer records are kept in a database.",t:"所有客户记录都存在数据库里。",f:"databases",rt:"data(数据) + base(库)"},
          {w:"interface",p:"/ˈɪntəfeɪs/",s:"n.",c:"界面；接口",e:"The interface is simple enough for beginners.",t:"这个界面对初学者来说足够简单。",f:"interfaces",rt:"inter-(之间) + face(面) → 两者之间的接触面"},
          {w:"hardware",p:"/ˈhɑːdweə/",s:"n.",c:"硬件",e:"The hardware is old but still works well.",t:"硬件旧了，但依然运行良好。",rt:"hard(硬) + ware(制品)",an:"software"},
          {w:"wireless",p:"/ˈwaɪələs/",s:"adj.",c:"无线的",e:"The hotel offers free wireless internet.",t:"这家酒店提供免费无线网络。",rt:"wire(线) + -less(无)",an:"wired"}
        ]},
        { name: "高频动词 Key Verbs", emoji: "✅", words: [
          {w:"acquire",p:"/əˈkwaɪə/",s:"v.",c:"获得；习得",e:"Children acquire language very quickly.",t:"儿童学习语言的速度非常快。",f:"acquired / acquiring",ph:"acquire knowledge 获取知识",rt:"ac-(向) + quir(寻求) → 去求得",sy:"obtain"},
          {w:"adapt",p:"/əˈdæpt/",s:"v.",c:"适应；改编",e:"It takes time to adapt to a new place.",t:"适应新环境需要时间。",f:"adapted / adapting",ph:"adapt to 适应",rt:"ad-(向) + apt(合适) → 变得合适",tp:"adapt to 是「适应」；adopt 是「采纳、收养」，只差一个字母。"},
          {w:"accomplish",p:"/əˈkʌmplɪʃ/",s:"v.",c:"完成；实现",e:"She accomplished her goal in one year.",t:"她用一年时间实现了目标。",f:"accomplished / accomplishing",ph:"accomplish a task 完成任务",rt:"ac-(加强) + com(完全) + pl(填满) → 填满",sy:"achieve"},
          {w:"appreciate",p:"/əˈpriːʃieɪt/",s:"v.",c:"感激；欣赏；理解",e:"I really appreciate your support.",t:"我非常感激你的支持。",f:"appreciated / appreciating",rt:"ap-(向) + preci(价值) + -ate → 看出价值",tp:"后面接事不接人：I appreciate your help（不说 appreciate you）。"},
          {w:"assume",p:"/əˈsjuːm/",s:"v.",c:"假设；认为；承担",e:"Let's assume the story is true.",t:"我们假设这个故事是真的。",f:"assumed / assuming",ph:"assume responsibility 承担责任",rt:"as-(向) + sum(拿) → 拿过来当作前提"},
          {w:"convince",p:"/kənˈvɪns/",s:"v.",c:"说服；使信服",e:"He convinced me to try again.",t:"他说服我再试一次。",f:"convinced / convincing",ph:"convince sb. of sth. 使某人相信某事",rt:"con-(完全) + vinc(征服) → 彻底征服对方"},
          {w:"demonstrate",p:"/ˈdemənstreɪt/",s:"v.",c:"证明；演示；示威",e:"The study demonstrates a clear link.",t:"这项研究证明了明确的关联。",f:"demonstrated / demonstrating",rt:"de-(完全) + monstr(显示) + -ate",sy:"show"},
          {w:"emphasize",p:"/ˈemfəsaɪz/",s:"v.",c:"强调",e:"The teacher emphasized the main point.",t:"老师强调了重点。",f:"emphasized / emphasizing",rt:"em-(使) + phas(显示) + -ize",sy:"stress"},
          {w:"maintain",p:"/meɪnˈteɪn/",s:"v.",c:"维持；保养；坚持认为",e:"It is important to maintain good habits.",t:"保持好习惯很重要。",f:"maintained / maintaining",ph:"maintain that ... 坚持认为……",rt:"main(手) + tain(握住) → 一直握住"},
          {w:"participate",p:"/pɑːˈtɪsɪpeɪt/",s:"v.",c:"参与",e:"All students may participate in the contest.",t:"所有学生都可以参加这次比赛。",f:"participated / participating",ph:"participate in 参加",rt:"part(部分) + cip(拿) + -ate → 拿到自己的一份",tp:"participate 后面要加 in，不能直接跟宾语。"},
          {w:"establish",p:"/ɪˈstæblɪʃ/",s:"v.",c:"建立；确立",e:"The school was established in 1952.",t:"这所学校建于 1952 年。",f:"established / establishing",ph:"establish a company 创办公司",rt:"e-(出) + stabl(站稳) + -ish → 站稳脚跟"},
          {w:"identify",p:"/aɪˈdentɪfaɪ/",s:"v.",c:"识别；确认",e:"Researchers identified three main causes.",t:"研究者确认了三个主要原因。",f:"identified / identifying",ph:"identify with 认同",rt:"ident(相同) + -ify → 认出是同一个"},
          {w:"involve",p:"/ɪnˈvɒlv/",s:"v.",c:"涉及；使参与",e:"The job involves a lot of travel.",t:"这份工作涉及大量出差。",f:"involved / involving",ph:"be involved in 参与其中",rt:"in-(向内) + volv(卷) → 卷进去"},
          {w:"obtain",p:"/əbˈteɪn/",s:"v.",c:"获得",e:"You must obtain permission first.",t:"你必须先获得许可。",f:"obtained / obtaining",rt:"ob-(向着) + tain(握住) → 拿到手",sy:"acquire"}
        ]}
      ]
    },

    /* ==================== 大学六级 ==================== */
    {
      id: "cet6", name: "大学六级", en: "CET-6", emoji: "🏆",
      color: "#E64980", color2: "#FFD1E0",
      desc: "六级全量词表 4426 词：前 84 词为手写精讲（带词根与辨析），其余按首字母索引浏览。",
      groups: [
        { name: "高阶名词 Advanced Nouns", emoji: "📐", words: [
          {w:"consensus",p:"/kənˈsensəs/",s:"n.",c:"共识",e:"The two sides finally reached a consensus.",t:"双方最终达成了共识。",f:"consensuses",ph:"reach a consensus 达成共识",rt:"con-(共同) + sens(感觉) + -us → 感觉一致"},
          {w:"dilemma",p:"/dɪˈlemə/",s:"n.",c:"困境；两难",e:"She faced a difficult dilemma.",t:"她面临一个艰难的困境。",f:"dilemmas",rt:"di-(二) + lemma(前提) → 两个前提都成立，选哪个都难"},
          {w:"hierarchy",p:"/ˈhaɪərɑːki/",s:"n.",c:"等级制度",e:"The company has a flat hierarchy.",t:"这家公司的层级结构很扁平。",f:"hierarchies",rt:"hier(神圣) + arch(统治) → 神圣的统治次序"},
          {w:"incentive",p:"/ɪnˈsentɪv/",s:"n.",c:"激励；动力",e:"Higher pay is a strong incentive.",t:"更高的薪酬是一种强有力的激励。",f:"incentives",ph:"an incentive to do sth.",rt:"in-(使) + cent(唱) + -ive → 唱起调子鼓动"},
          {w:"intuition",p:"/ˌɪntjuˈɪʃn/",s:"n.",c:"直觉",e:"Her intuition told her something was wrong.",t:"她的直觉告诉她出事了。",rt:"in-(向内) + tuit(看) + -ion → 向内一看",an:"reasoning"},
          {w:"paradox",p:"/ˈpærədɒks/",s:"n.",c:"悖论",e:"It is a paradox that the poor pay more.",t:"穷人反而付得更多，这是个悖论。",f:"paradoxes",rt:"para-(相反) + dox(观点) → 与常识相反的观点"},
          {w:"phenomenon",p:"/fəˈnɒmɪnən/",s:"n.",c:"现象",e:"This social phenomenon deserves attention.",t:"这一社会现象值得关注。",f:"phenomena",rt:"phan(显现) + -omenon → 显现出来的东西",tp:"复数是 phenomena，很常考。"},
          {w:"spectrum",p:"/ˈspektrəm/",s:"n.",c:"范围；光谱",e:"Opinions cover a wide spectrum.",t:"观点涵盖的范围很广。",f:"spectra / spectrums",rt:"spect(看) + -rum → 看得见的一条带"},
          {w:"threshold",p:"/ˈθreʃhəʊld/",s:"n.",c:"门槛；临界值",e:"Income above this threshold is taxed.",t:"超过这一门槛的收入要纳税。",f:"thresholds",rt:"thresh(踩谷) + hold(保持) → 门口踩踏的地方"},
          {w:"privilege",p:"/ˈprɪvəlɪdʒ/",s:"n.",c:"特权；荣幸",e:"It is a privilege to work with you.",t:"能与你共事是我的荣幸。",f:"privileges",rt:"priv(私人) + leg(法律) + -e → 专为个人立的法"},
          {w:"controversy",p:"/ˈkɒntrəvɜːsi/",s:"n.",c:"争议",e:"The new policy caused much controversy.",t:"新政策引发了很大争议。",f:"controversies",ph:"beyond controversy 无可争议",rt:"contro-(相反) + vers(转) + -y → 各说各话"},
          {w:"constraint",p:"/kənˈstreɪnt/",s:"n.",c:"限制；约束",e:"Time constraints forced us to stop.",t:"时间上的限制迫使我们停下来。",f:"constraints",ph:"under constraint 受约束",rt:"con-(共同) + strain(拉紧) → 被拉紧",sy:"restriction"},
          {w:"prestige",p:"/preˈstiːʒ/",s:"n.",c:"声望；威信",e:"The award added to her prestige.",t:"这个奖项提升了她的声望。",rt:"pre-(在前) + stig(压) + -e → 压在前面的分量"},
          {w:"magnitude",p:"/ˈmæɡnɪtjuːd/",s:"n.",c:"巨大；量级",e:"Few people understand the magnitude of the problem.",t:"很少人明白这个问题的严重程度。",rt:"magn(大) + -itude（程度）"}
        ]},
        { name: "高阶形容词 Advanced Adjectives", emoji: "🎭", words: [
          {w:"ambiguous",p:"/æmˈbɪɡjuəs/",s:"adj.",c:"模糊的；有歧义的",e:"His answer was deliberately ambiguous.",t:"他的回答故意含糊其辞。",rt:"ambi-(两边) + ig(走) + -uous → 两边都能走",an:"explicit"},
          {w:"coherent",p:"/kəʊˈhɪərənt/",s:"adj.",c:"连贯的",e:"She gave a clear and coherent argument.",t:"她给出了清晰连贯的论证。",rt:"co-(共同) + her(粘) + -ent → 粘在一起的",an:"incoherent"},
          {w:"feasible",p:"/ˈfiːzəbl/",s:"adj.",c:"可行的",e:"Is this plan really feasible?",t:"这个计划真的可行吗？",rt:"feas(做) + -ible（能……的）",sy:"practicable"},
          {w:"inevitable",p:"/ɪnˈevɪtəbl/",s:"adj.",c:"不可避免的",e:"Change is inevitable in life.",t:"生活中变化不可避免。",rt:"in-(不) + evit(避开) + -able → 避不开的",sy:"unavoidable"},
          {w:"intrinsic",p:"/ɪnˈtrɪnsɪk/",s:"adj.",c:"内在的；固有的",e:"Curiosity has intrinsic value.",t:"好奇心具有内在价值。",rt:"intrin-(内部) + -sic",an:"extrinsic"},
          {w:"notorious",p:"/nəʊˈtɔːriəs/",s:"adj.",c:"臭名昭著的",e:"The road is notorious for accidents.",t:"这条路因事故频发而声名狼藉。",ph:"be notorious for 因……而恶名昭著",tp:"notorious 是贬义；famous 是褒义，别混用。"},
          {w:"plausible",p:"/ˈplɔːzəbl/",s:"adj.",c:"看似合理的",e:"That sounds like a plausible explanation.",t:"那听起来是个合理的解释。",rt:"plaus(拍手) + -ible → 值得鼓掌的说法",tp:"plausible 只表示「听起来合理」，不保证是真的。"},
          {w:"redundant",p:"/rɪˈdʌndənt/",s:"adj.",c:"多余的；被裁员的",e:"Please delete the redundant words.",t:"请删除多余的词。",rt:"re-(再) + und(波浪) + -ant → 一波又一波，多余",sy:"superfluous"},
          {w:"sophisticated",p:"/səˈfɪstɪkeɪtɪd/",s:"adj.",c:"复杂的；精密的；老练的",e:"The lab uses sophisticated equipment.",t:"这个实验室使用精密的设备。",rt:"sophist(智者) + -icated → 经过调教的"},
          {w:"versatile",p:"/ˈvɜːsətaɪl/",s:"adj.",c:"多才多艺的；多用途的",e:"Bamboo is a versatile material.",t:"竹子是一种用途广泛的材料。",rt:"vers(转) + -atile → 什么都能转"},
          {w:"comprehensive",p:"/ˌkɒmprɪˈhensɪv/",s:"adj.",c:"全面的；综合的",e:"The report gives a comprehensive review.",t:"这份报告给出了全面的评述。",rt:"com-(完全) + prehend(抓住) + -ive → 全抓进来",tp:"comprehensive 是「全面的」；comprehensible 是「可理解的」。"},
          {w:"profound",p:"/prəˈfaʊnd/",s:"adj.",c:"深刻的；深远的",e:"The book had a profound effect on me.",t:"这本书对我产生了深远的影响。",rt:"pro-(向前) + found(底) → 深到底",sy:"deep"},
          {w:"rigorous",p:"/ˈrɪɡərəs/",s:"adj.",c:"严格的；严谨的",e:"The study followed a rigorous method.",t:"这项研究采用了严谨的方法。",rt:"rigor(僵硬、严格) + -ous",sy:"strict"},
          {w:"controversial",p:"/ˌkɒntrəˈvɜːʃl/",s:"adj.",c:"有争议的",e:"It remains a controversial topic.",t:"它仍是一个有争议的话题。",rt:"contro-(相反) + vers(转) + -ial"}
        ]},
        { name: "高阶动词 Advanced Verbs", emoji: "⚙️", words: [
          {w:"advocate",p:"/ˈædvəkeɪt/",s:"v. & n.",c:"提倡；拥护者",e:"Many experts advocate early education.",t:"许多专家提倡早期教育。",f:"advocated / advocating",rt:"ad-(向) + voc(喊) + -ate → 向着某方呼喊",sy:"support"},
          {w:"alleviate",p:"/əˈliːvieɪt/",s:"v.",c:"减轻；缓解",e:"The medicine helped alleviate the pain.",t:"这种药有助于减轻疼痛。",f:"alleviated / alleviating",rt:"al-(向) + lev(轻) + -iate → 使变轻",an:"aggravate"},
          {w:"anticipate",p:"/ænˈtɪsɪpeɪt/",s:"v.",c:"预料；预期",e:"We anticipate a rise in demand.",t:"我们预计需求会上升。",f:"anticipated / anticipating",rt:"anti-(前) + cip(拿) + -ate → 提前拿到手",sy:"expect"},
          {w:"compensate",p:"/ˈkɒmpenseɪt/",s:"v.",c:"补偿；弥补",e:"Nothing can compensate for lost time.",t:"什么都无法弥补失去的时间。",f:"compensated / compensating",ph:"compensate for 弥补",rt:"com-(共同) + pens(称重) + -ate → 两边称平"},
          {w:"contemplate",p:"/ˈkɒntəmpleɪt/",s:"v.",c:"沉思；考虑",e:"He sat there contemplating his future.",t:"他坐在那里思考自己的未来。",f:"contemplated / contemplating",rt:"con-(共同) + templ(神庙) + -ate → 在神庙里观想",sy:"ponder"},
          {w:"deteriorate",p:"/dɪˈtɪəriəreɪt/",s:"v.",c:"恶化",e:"Her health began to deteriorate.",t:"她的健康状况开始恶化。",f:"deteriorated / deteriorating",rt:"deterior(更坏) + -ate",an:"improve"},
          {w:"facilitate",p:"/fəˈsɪlɪteɪt/",s:"v.",c:"促进；使便利",e:"The app facilitates daily communication.",t:"这个应用方便了日常交流。",f:"facilitated / facilitating",rt:"facil(容易) + -itate → 使变容易"},
          {w:"implement",p:"/ˈɪmplɪment/",s:"v. & n.",c:"实施；执行；工具",e:"The school will implement the new rules.",t:"学校将实施这些新规定。",f:"implemented / implementing",rt:"im-(向内) + ple(填满) + -ment → 填进去、落实"},
          {w:"integrate",p:"/ˈɪntɪɡreɪt/",s:"v.",c:"整合；融入",e:"We should integrate theory with practice.",t:"我们应该把理论和实践结合起来。",f:"integrated / integrating",ph:"integrate into 融入",rt:"in-(不) + teg(触碰) + -rate → 变得无法分割",an:"separate"},
          {w:"undermine",p:"/ˌʌndəˈmaɪn/",s:"v.",c:"削弱；损害",e:"Rumors can undermine public trust.",t:"谣言会损害公众信任。",f:"undermined / undermining",rt:"under(下面) + mine(挖矿) → 从底下挖空",sy:"weaken"},
          {w:"contradict",p:"/ˌkɒntrəˈdɪkt/",s:"v.",c:"反驳；与……矛盾",e:"The new data contradicts the earlier report.",t:"新数据与先前的报告相矛盾。",f:"contradicted / contradicting",rt:"contra-(相反) + dict(说) → 说相反的话"},
          {w:"elaborate",p:"/ɪˈlæbəreɪt/",s:"v. & adj.",c:"详细阐述；精心制作的",e:"Could you elaborate on that point?",t:"你能详细说明一下那一点吗？",f:"elaborated / elaborating",ph:"elaborate on 详述",rt:"e-(向外) + labor(劳动) + -ate → 下功夫做出来"},
          {w:"reinforce",p:"/ˌriːɪnˈfɔːs/",s:"v.",c:"加强；强化",e:"The results reinforce our earlier findings.",t:"这些结果强化了我们先前的发现。",f:"reinforced / reinforcing",rt:"re-(再) + in-(向内) + force(力量)"},
          {w:"speculate",p:"/ˈspekjuleɪt/",s:"v.",c:"推测；投机",e:"Reporters speculated about the reason.",t:"记者们对原因进行了推测。",f:"speculated / speculating",ph:"speculate on / about 推测",rt:"spec(看) + -ulate → 四处看、猜",tp:"speculate 猜的意味很重，正式写作里要标明是推测。"}
        ]},
        { name: "学术与思辨 Academic", emoji: "📊", words: [
          {w:"criterion",p:"/kraɪˈtɪəriən/",s:"n.",c:"标准",e:"Price is not the only criterion.",t:"价格不是唯一的标准。",f:"criteria",rt:"crit(判断) + -erion → 用来判断的东西",tp:"复数是 criteria，很常考：《标准》是 met the criteria。"},
          {w:"empirical",p:"/ɪmˈpɪrɪkl/",s:"adj.",c:"经验的；实证的",e:"The claim lacks empirical support.",t:"这一说法缺乏实证支持。",rt:"em-(在内) + pir(尝试) + -ical → 亲自试出来的",an:"theoretical"},
          {w:"paradigm",p:"/ˈpærədaɪm/",s:"n.",c:"范式；典范",e:"The discovery created a new paradigm.",t:"这一发现创造了一种新范式。",f:"paradigms",rt:"para-(并列) + deigm(展示) → 并排展示的样板"},
          {w:"correlation",p:"/ˌkɒrəˈleɪʃn/",s:"n.",c:"相关性",e:"There is a strong correlation between the two.",t:"两者之间有很强的相关性。",ph:"correlation between A and B",rt:"cor-(共同) + relation(关系)",tp:"相关不等于因果（correlation is not causation），学术写作常考这个点。"},
          {w:"statistics",p:"/stəˈtɪstɪks/",s:"n.",c:"统计；统计数字",e:"The statistics tell a surprising story.",t:"这些统计数据说明了一个令人惊讶的情况。",rt:"stat(状态) + -istics",tp:"指「统计学」时用单数动词；指「统计数据」时用复数动词。"},
          {w:"methodology",p:"/ˌmeθəˈdɒlədʒi/",s:"n.",c:"方法论；研究方法",e:"The paper explains its methodology clearly.",t:"这篇论文清楚地说明了它的研究方法。",f:"methodologies",rt:"method(方法) + -ology(学科)",tp:"methodology 是「方法体系」，单一方法只能说 method。"},
          {w:"implication",p:"/ˌɪmplɪˈkeɪʃn/",s:"n.",c:"含义；影响；牵连",e:"The findings have important implications.",t:"这些发现具有重要的启示意义。",f:"implications",ph:"have implications for 对……有影响",rt:"im-(向内) + plic(折叠) + -ation → 折在里面没明说的东西"},
          {w:"discrepancy",p:"/dɪsˈkrepənsi/",s:"n.",c:"差异；不一致",e:"There is a discrepancy between the two reports.",t:"两份报告之间存在不一致。",f:"discrepancies",ph:"discrepancy between A and B",rt:"dis-(分开) + crep(响) + -ancy → 响声不齐"},
          {w:"rationale",p:"/ˌræʃəˈnɑːl/",s:"n.",c:"理由；依据",e:"He explained the rationale behind the decision.",t:"他解释了这个决定背后的理由。",f:"rationales",rt:"rational(理性的) + -e",tp:"ratio 是比例，rationale 是理由，拼写相似别弄混。"},
          {w:"scrutiny",p:"/ˈskruːtəni/",s:"n.",c:"细看；审查",e:"The plan came under close scrutiny.",t:"这个计划受到了严格的审查。",ph:"under scrutiny 受到审查",rt:"scrut(翻找废物) + -iny → 翻来覆去地看"},
          {w:"assumption",p:"/əˈsʌmpʃn/",s:"n.",c:"假设；承担",e:"The theory rests on a weak assumption.",t:"这个理论建立在一个薄弱的假设之上。",f:"assumptions",ph:"on the assumption that 假定……",rt:"assume → assumpt + -ion"},
          {w:"inference",p:"/ˈɪnfərəns/",s:"n.",c:"推论；推断",e:"We can draw an inference from these numbers.",t:"我们可以从这些数字中推出结论。",f:"inferences",ph:"draw an inference 作出推断",rt:"in-(向内) + fer(带) + -ence → 把信息带进来得出结论"},
          {w:"validity",p:"/vəˈlɪdəti/",s:"n.",c:"有效性；正确性",e:"Some scholars question the validity of the test.",t:"一些学者质疑这项测试的有效性。",rt:"valid(有效的) + -ity",an:"invalidity"},
          {w:"bias",p:"/ˈbaɪəs/",s:"n. & v.",c:"偏见；偏差",e:"The sample may contain a selection bias.",t:"这个样本可能存在选择偏差。",f:"biases",ph:"bias against 对……的偏见",sy:"prejudice",tp:"实验语境里译为「偏差」，社会语境里译为「偏见」。"}
        ]}
      ]
    },

    /* ==================== 考研英语 ==================== */
    {
      id: "kaoyan", name: "考研英语", en: "Postgraduate Entrance Exam", emoji: "🎯",
      color: "#F59F00", color2: "#FFE9B8",
      desc: "考研英语一 / 二阅读与完形的高频词，以及学术论证必备的连接语。",
      groups: [
        { name: "核心名词 Key Nouns", emoji: "📌", words: [
          {w:"stance",p:"/stæns/",s:"n.",c:"立场；态度",e:"The author takes a critical stance on the policy.",t:"作者对该政策持批判立场。",f:"stances",ph:"take a stance on 对……表态",rt:"st(站) + -ance → 站的位置",sy:"position"},
          {w:"notion",p:"/ˈnəʊʃn/",s:"n.",c:"观念；概念",e:"This notion has been challenged by recent studies.",t:"这一观念已被近期研究挑战。",f:"notions",rt:"not(知道) + -ion → 所知道的东西",sy:"concept"},
          {w:"dimension",p:"/dɪˈmenʃn/",s:"n.",c:"维度；方面；尺寸",e:"The problem has an economic dimension too.",t:"这个问题还有经济层面的维度。",f:"dimensions",rt:"di-(分开) + mens(量) + -ion → 量出来的方向"},
          {w:"capacity",p:"/kəˈpæsəti/",s:"n.",c:"能力；容量",e:"The human brain has a remarkable capacity for learning.",t:"人脑具有惊人的学习能力。",f:"capacities",ph:"the capacity to do sth.",rt:"cap(容纳) + -acity",tp:"capacity 偏「容量 / 承载能力」，ability 偏「会不会做」。"},
          {w:"mechanism",p:"/ˈmekənɪzəm/",s:"n.",c:"机制；机理；机构",e:"Scientists are studying the mechanism of memory.",t:"科学家正在研究记忆的机制。",f:"mechanisms",rt:"mechan(机器) + -ism"},
          {w:"agenda",p:"/əˈdʒendə/",s:"n.",c:"议程；待办事项",e:"Climate change tops the political agenda.",t:"气候变化是政治议程的首要议题。",rt:"ag(做) + -enda（该做的事）",tp:"原为拉丁语复数，现在通常当单数用。"},
          {w:"prospect",p:"/ˈprɒspekt/",s:"n.",c:"前景；可能性",e:"The prospect of working abroad appeals to her.",t:"出国工作的前景吸引着她。",f:"prospects",ph:"in prospect 在望",rt:"pro-(向前) + spect(看) → 向前看"},
          {w:"pursuit",p:"/pəˈsjuːt/",s:"n.",c:"追求；追逐",e:"In pursuit of profit, some firms ignore safety.",t:"为了追求利润，一些公司忽视安全。",ph:"in pursuit of 追求",rt:"pur-(向前) + suit(跟随) → 一直跟着"},
          {w:"prevalence",p:"/ˈprevələns/",s:"n.",c:"普遍；流行程度",e:"The prevalence of online shopping keeps rising.",t:"网络购物的普及程度持续上升。",rt:"pre-(前) + val(强壮) + -ence → 势头压过一切",sy:"popularity"},
          {w:"integrity",p:"/ɪnˈteɡrəti/",s:"n.",c:"诚信；完整",e:"Academic integrity is non-negotiable.",t:"学术诚信没有商量的余地。",rt:"in-(不) + teg(触碰) + -rity → 不能被破坏",tp:"既指人的「正直」，也指物的「完整」，阅读里两种都可能出现。"},
          {w:"skeptic",p:"/ˈskeptɪk/",s:"n.",c:"怀疑者",e:"Even skeptics admit the data is strong.",t:"连怀疑者也承认数据很有力。",f:"skeptics",rt:"skept(观察) + -ic",tp:"美式拼写 skeptic，英式 sceptic。"},
          {w:"vulnerability",p:"/ˌvʌlnərəˈbɪləti/",s:"n.",c:"脆弱性；易受伤害",e:"The report highlights the vulnerability of small farms.",t:"报告强调了小农场的脆弱性。",f:"vulnerabilities",rt:"vulner(创伤) + -ability"},
          {w:"benchmark",p:"/ˈbentʃmɑːk/",s:"n. & v.",c:"基准；标杆",e:"This test is the benchmark for the whole industry.",t:"这项测试是整个行业的基准。",f:"benchmarks",rt:"bench(工作台) + mark(记号) → 台面上刻的基准线"},
          {w:"trade-off",p:"/ˈtreɪd ɒf/",s:"n.",c:"权衡；取舍",e:"There is always a trade-off between speed and accuracy.",t:"速度与准确性之间总要有所取舍。",f:"trade-offs",rt:"trade(交换) + off → 换掉一头保另一头",tp:"常考搭配：a trade-off between A and B。"}
        ]},
        { name: "核心动词 Key Verbs", emoji: "🔧", words: [
          {w:"attribute",p:"/əˈtrɪbjuːt/",s:"v. & n.",c:"把……归因于；属性",e:"Researchers attribute the change to better nutrition.",t:"研究者把这一变化归因于营养改善。",f:"attributed / attributing",ph:"attribute A to B 把 A 归因于 B",rt:"at-(向) + tribut(给予) + -e → 归给"},
          {w:"derive",p:"/dɪˈraɪv/",s:"v.",c:"源于；取得",e:"Many English words derive from Latin.",t:"许多英语词源自拉丁语。",f:"derived / deriving",ph:"derive from 起源于｜derive sth. from 从……中得到",rt:"de-(从) + riv(河) → 从河里引出来"},
          {w:"entail",p:"/ɪnˈteɪl/",s:"v.",c:"需要；意味着",e:"Such a plan would entail great risk.",t:"这样的计划会带来很大风险。",f:"entailed / entailing",rt:"en-(使) + tail(切) → 切进去、牵涉",tp:"阅读里常译为「意味着 / 牵涉」，不是「包含」那么简单。"},
          {w:"impose",p:"/ɪmˈpəʊz/",s:"v.",c:"强加；征收",e:"The government imposed a new tax on imports.",t:"政府对进口商品征收了新税。",f:"imposed / imposing",ph:"impose sth. on sb. 把某事强加于人",rt:"im-(向内) + pos(放) → 硬放上去"},
          {w:"invoke",p:"/ɪnˈvəʊk/",s:"v.",c:"援引；唤起；祈求",e:"The lawyer invoked an old law.",t:"律师援引了一条旧法律。",f:"invoked / invoking",rt:"in-(向内) + vok(喊) → 把……喊出来"},
          {w:"pertain",p:"/pəˈteɪn/",s:"v.",c:"关于；属于",e:"These rules pertain to all staff members.",t:"这些规定适用于全体员工。",f:"pertained / pertaining",ph:"pertain to 与……有关",rt:"per-(贯穿) + tain(握住) → 一直握在手里"},
          {w:"presume",p:"/prɪˈzjuːm/",s:"v.",c:"假定；推测",e:"I presume you have read the report.",t:"我猜你已经读过那份报告了。",f:"presumed / presuming",rt:"pre-(预先) + sum(拿) → 先拿定主意",tp:"presume 比 assume 多一层「有一定根据的推测」。"},
          {w:"refrain",p:"/rɪˈfreɪn/",s:"v.",c:"克制；忍住",e:"Consumers should refrain from buying fake goods.",t:"消费者应当克制自己，不去购买假货。",f:"refrained / refraining",ph:"refrain from doing sth. 忍住不做某事",rt:"re-(向后) + frin(勒住) + -e",tp:"refrain from 后面接动名词，不接不定式。"},
          {w:"resort",p:"/rɪˈzɔːt/",s:"v. & n.",c:"诉诸；求助；度假地",e:"Some students resort to memorizing answers.",t:"有些学生诉诸死记答案。",f:"resorted / resorting",ph:"resort to 诉诸于｜as a last resort 作为最后手段",rt:"re-(反复) + sort(出去) → 反复往外跑"},
          {w:"tackle",p:"/ˈtækl/",s:"v.",c:"处理；应对",e:"The city is tackling its traffic problem.",t:"这座城市正在处理它的交通问题。",f:"tackled / tackling",rt:"原义「抓住、扭倒」，引申为「对付」",sy:"address"},
          {w:"yield",p:"/jiːld/",s:"v. & n.",c:"产生；让步；产量",e:"The experiment yielded surprising results.",t:"这个实验产生了出人意料的结果。",f:"yielded / yielding",ph:"yield to 让步于",rt:"原义「交出」，引申为「产出」",tp:"一词多义：产出（结果）/ 让步 / 产量，靠搭配判断。"},
          {w:"endorse",p:"/ɪnˈdɔːs/",s:"v.",c:"支持；认可；背书",e:"Several scientists endorsed the proposal.",t:"几位科学家支持这项提议。",f:"endorsed / endorsing",rt:"en-(在上) + dors(背) + -e → 在背面签字"},
          {w:"embody",p:"/ɪmˈbɒdi/",s:"v.",c:"体现；具体表现",e:"The building embodies the spirit of the age.",t:"这座建筑体现了那个时代的精神。",f:"embodied / embodying",rt:"em-(使) + body(身体) → 给个身体"},
          {w:"embrace",p:"/ɪmˈbreɪs/",s:"v. & n.",c:"接受；拥抱；包含",e:"Firms must embrace new technology to survive.",t:"企业必须拥抱新技术才能生存。",f:"embraced / embracing",rt:"em-(进入) + brace(手臂) → 抱进怀里"}
        ]},
        { name: "核心形容词 Key Adjectives", emoji: "🎨", words: [
          {w:"reluctant",p:"/rɪˈlʌktənt/",s:"adj.",c:"不情愿的",e:"Many firms are reluctant to spend on research.",t:"许多公司不愿在研究上花钱。",ph:"be reluctant to do sth. 不愿做某事",rt:"re-(反) + luct(挣扎) + -ant → 心里在挣扎",an:"willing"},
          {w:"apparent",p:"/əˈpærənt/",s:"adj.",c:"明显的；表面上的",e:"It soon became apparent that the plan would fail.",t:"很快就能看出这个计划会失败。",rt:"ap-(向) + par(出现) + -ent → 显现出来的",tp:"两层意思：① 明显的 ② 表面上如此（未必真），靠语境判断。"},
          {w:"explicit",p:"/ɪkˈsplɪsɪt/",s:"adj.",c:"明确的；直白的",e:"The instructions were clear and explicit.",t:"说明清楚而明确。",rt:"ex-(向外) + plic(折叠) + -it → 完全摊开",an:"implicit"},
          {w:"implicit",p:"/ɪmˈplɪsɪt/",s:"adj.",c:"含蓄的；隐含的",e:"There is an implicit assumption in his argument.",t:"他的论证里有一个隐含的假设。",rt:"im-(向内) + plic(折叠) + -it → 折在里面",an:"explicit",tp:"implicit 与 explicit 是一对，阅读里经常对照出现。"},
          {w:"tentative",p:"/ˈtentətɪv/",s:"adj.",c:"暂定的；试探性的",e:"We reached a tentative agreement.",t:"我们达成了一个临时协议。",rt:"tent(尝试) + -ative"},
          {w:"prudent",p:"/ˈpruːdnt/",s:"adj.",c:"谨慎的；精明的",e:"It would be prudent to keep some money aside.",t:"留一些钱备用是明智的。",rt:"prud(有远见) + -ent",sy:"cautious",an:"reckless"},
          {w:"benign",p:"/bɪˈnaɪn/",s:"adj.",c:"良性的；温和的",e:"Fortunately, the tumour was benign.",t:"幸运的是，那个肿瘤是良性的。",rt:"ben(好) + -ign → 性质好的",an:"malignant"},
          {w:"adverse",p:"/ˈædvɜːs/",s:"adj.",c:"不利的；相反的",e:"Adverse weather delayed the flight.",t:"恶劣天气导致航班延误。",ph:"adverse effect 不利影响",rt:"ad-(向) + vers(转) → 转过脸去",tp:"adverse（不利的）与 averse（厌恶的）只差一个字母，别写混。"},
          {w:"eligible",p:"/ˈelɪdʒəbl/",s:"adj.",c:"有资格的；符合条件的",e:"Only full-time students are eligible for the grant.",t:"只有全日制学生才有资格申请这项资助。",ph:"be eligible for 有资格获得",rt:"e-(出) + lig(挑选) + -ible → 能挑出来的",an:"ineligible"},
          {w:"immune",p:"/ɪˈmjuːn/",s:"adj.",c:"免疫的；不受影响的",e:"No industry is immune to the change.",t:"没有一个行业能不受这一变化影响。",ph:"be immune to 对……免疫 / 不受……影响",rt:"im-(不) + mun(义务) → 不承担义务"},
          {w:"prone",p:"/prəʊn/",s:"adj.",c:"易于……的",e:"Young drivers are prone to take risks.",t:"年轻司机容易冒险。",ph:"be prone to 易于……",rt:"原义「俯卧的」→ 身不由己朝向一边",tp:"系动词后常用 prone to doing 或 prone to + 名词。"},
          {w:"susceptible",p:"/səˈseptəbl/",s:"adj.",c:"易受影响的；敏感的",e:"Children are more susceptible to advertising.",t:"儿童更容易受广告影响。",ph:"be susceptible to 易受……影响",rt:"sus-(在下) + cept(拿) + -ible → 容易被拿走"},
          {w:"viable",p:"/ˈvaɪəbl/",s:"adj.",c:"可行的；能存活的",e:"The plan is not financially viable.",t:"这个计划在财务上不可行。",rt:"vi(生命) + -able → 活得下去的",sy:"feasible"},
          {w:"tangible",p:"/ˈtændʒəbl/",s:"adj.",c:"切实的；可触摸的",e:"The project brought tangible benefits to the village.",t:"这个项目给村子带来了实实在在的好处。",rt:"tang(触摸) + -ible",an:"intangible"}
        ]},
        { name: "论证连接语 Discourse Markers", emoji: "🧭", words: [
          {w:"albeit",p:"/ˌɔːlˈbiːɪt/",s:"conj.",c:"尽管；虽然（后接短语）",e:"The plan worked, albeit slowly.",t:"计划奏效了，尽管速度很慢。",rt:"al(虽然) + be + it",tp:"albeit 后面接短语，不接完整从句；接从句要用 although。"},
          {w:"thereby",p:"/ˌðeəˈbaɪ/",s:"adv.",c:"从而；由此",e:"He cut costs, thereby saving the company.",t:"他削减了成本，从而救了公司。",rt:"there(那) + by(通过) → 借由那一点",tp:"常接 -ing 分词，表示前一句的结果，是考研阅读高频词。"},
          {w:"whereas",p:"/ˌweərˈæz/",s:"conj.",c:"然而；尽管（表对比）",e:"Some value speed, whereas others value accuracy.",t:"有人看重速度，而另一些人看重准确性。",rt:"where + as",tp:"whereas 表对比，不是转折，也不接原因。"},
          {w:"hence",p:"/hens/",s:"adv.",c:"因此；从此",e:"The data was incomplete; hence the conclusion is weak.",t:"数据不完整，因此结论不牢靠。",rt:"原义「从这里」→ 因此",sy:"therefore"},
          {w:"notwithstanding",p:"/ˌnɒtwɪθˈstændɪŋ/",s:"prep. & adv.",c:"尽管；虽然",e:"Notwithstanding the risks, the project went ahead.",t:"尽管有风险，项目还是继续了。",rt:"not(不) + with + standing → 挡也挡不住",tp:"可置句首或句末，是考研阅读里典型的「让步」信号词。"},
          {w:"insofar",p:"/ˌɪnsəˈfɑː/",s:"adv.",c:"在……范围内",e:"The claim is valid insofar as the data is reliable.",t:"只要数据可靠，这个说法就成立。",ph:"insofar as 就……而言",rt:"in(在) + so(那么) + far(远) → 到那么远的程度",tp:"多为 insofar as 连用，表示「在……限度内」。"},
          {w:"whereby",p:"/weəˈbaɪ/",s:"adv.",c:"凭借；借以",e:"They set up a system whereby errors are reported.",t:"他们建立了一套报告错误的机制。",rt:"where(哪里) + by(通过) → 通过这个方式",tp:"常跟在表示方式的名词后（a method whereby…）。"},
          {w:"namely",p:"/ˈneɪmli/",s:"adv.",c:"即；也就是",e:"Only one person applied, namely Tom.",t:"只有一个人申请，也就是汤姆。",rt:"name(名字) + -ly → 说出来是谁"},
          {w:"notably",p:"/ˈnəʊtəbli/",s:"adv.",c:"尤其；值得注意的是",e:"Several cities, notably Shanghai, saw rapid growth.",t:"几个城市，尤其是上海，增长迅速。",rt:"note(注意) + -ably"},
          {w:"conversely",p:"/ˈkɒnvɜːsli/",s:"adv.",c:"相反地",e:"Prices rose in big cities; conversely, they fell in small towns.",t:"大城市物价上涨；相反，小城镇物价下降。",rt:"con-(共同) + vers(转) + -ely → 转过来说",sy:"on the contrary"},
          {w:"subsequently",p:"/ˈsʌbsɪkwəntli/",s:"adv.",c:"随后；后来",e:"The rule was published and subsequently revised.",t:"这条规则发布后又被修订。",rt:"sub-(随后) + sequ(跟随) + -ently",an:"previously"},
          {w:"arguably",p:"/ˈɑːɡjuəbli/",s:"adv.",c:"可以说；大概",e:"This is arguably the best solution available.",t:"这可以说是现有最好的方案。",rt:"argue(论证) + -ably → 可以论证地说",tp:"语气是「有理由这么说」，比 certainly 弱，是学术写作的稳妥措辞。"},
          {w:"fundamentally",p:"/ˌfʌndəˈmentəli/",s:"adv.",c:"根本上；基本上",e:"The two approaches are fundamentally different.",t:"这两种方法有本质上的不同。",rt:"fund(底部) + -amentally"},
          {w:"ultimately",p:"/ˈʌltɪmətli/",s:"adv.",c:"最终；归根结底",e:"Ultimately, the decision rests with the users.",t:"归根结底，决定权在用户手里。",rt:"ultim(最远) + -ately",sy:"in the end"}
        ]}
      ]
    },

    /* ==================== 雅思核心 ==================== */
    {
      id: "ielts", name: "雅思核心", en: "IELTS Core", emoji: "🌍",
      color: "#0CA678", color2: "#C4F0E3",
      desc: "雅思听说读写四大话题词 + 小作文图表描述专用词，按场景分组。",
      groups: [
        { name: "教育与社会 Education", emoji: "🎓", words: [
          {w:"curriculum",p:"/kəˈrɪkjələm/",s:"n.",c:"课程体系",e:"The school has revised its science curriculum.",t:"学校修订了科学课程体系。",f:"curricula / curriculums",ph:"on the curriculum 在课程表上",rt:"curr(跑) + -iculum → 要跑完的路线",tp:"复数为 curricula，写作里用 curricula 更正式。"},
          {w:"tuition",p:"/tjuˈɪʃn/",s:"n.",c:"学费；授课",e:"Tuition fees have risen sharply.",t:"学费大幅上涨。",ph:"tuition fees 学费",rt:"tuit(看顾) + -ion → 看顾你的学问"},
          {w:"literacy",p:"/ˈlɪtərəsi/",s:"n.",c:"识字率；读写能力",e:"The country's literacy rate has improved greatly.",t:"这个国家的识字率有了很大提升。",rt:"liter(字母) + -acy",an:"illiteracy"},
          {w:"discipline",p:"/ˈdɪsəplɪn/",s:"n. & v.",c:"纪律；学科；训练",e:"Good discipline helps students stay focused.",t:"良好的纪律有助于学生保持专注。",f:"disciplines",rt:"discip(学习) + -line → 训练出来的状态",tp:"一词两义：学校教育里是「纪律」，学术语境里是「学科」。"},
          {w:"assessment",p:"/əˈsesmənt/",s:"n.",c:"评估；考核",e:"Continuous assessment is fairer than one final exam.",t:"持续评估比一次性期末考试更公平。",f:"assessments",rt:"as-(旁) + sess(坐) + -ment → 坐在旁边仔细看"},
          {w:"peer",p:"/pɪə/",s:"n.",c:"同龄人；同行",e:"Teenagers are strongly influenced by their peers.",t:"青少年深受同龄人影响。",f:"peers",ph:"peer pressure 同伴压力｜peer review 同行评议"},
          {w:"mentor",p:"/ˈmentɔː/",s:"n. & v.",c:"导师；指导",e:"A good mentor can change a student's path.",t:"一位好导师能改变学生的道路。",f:"mentors",sy:"adviser"},
          {w:"enrolment",p:"/ɪnˈrəʊlmənt/",s:"n.",c:"注册人数；入学",e:"Enrolment in online courses has doubled.",t:"在线课程的注册人数翻了一番。",rt:"en-(使) + roll(名册) + -ment → 记入名册",tp:"美式拼写常作 enrollment（少一个 l）。"},
          {w:"lecture",p:"/ˈlektʃə/",s:"n. & v.",c:"讲座；讲课",e:"Students attend lectures and tutorials each week.",t:"学生每周上大课和辅导课。",f:"lectures",ph:"give / attend a lecture 开 / 听讲座",rt:"lect(读) + -ure → 读给你听"},
          {w:"tutorial",p:"/tjuˈtɔːriəl/",s:"n.",c:"辅导课；教程",e:"Each tutorial has only eight students.",t:"每节辅导课只有八名学生。",f:"tutorials",rt:"tutor(导师) + -ial",tp:"雅思听力里 lecture（大课）与 tutorial（小课）常配对出现。"},
          {w:"plagiarism",p:"/ˈpleɪdʒərɪzəm/",s:"n.",c:"抄袭；剽窃",e:"Plagiarism leads to serious penalties.",t:"抄袭会导致严厉的处罚。",rt:"plagi(拐走) + -arism → 把别人的东西拐走"},
          {w:"vocational",p:"/vəʊˈkeɪʃənl/",s:"adj.",c:"职业的；职业技能的",e:"Vocational training prepares students for specific jobs.",t:"职业培训为学生从事特定工作做准备。",ph:"vocational education 职业教育",rt:"voc(喊) + -ational → 被职业「召唤」"},
          {w:"extracurricular",p:"/ˌekstrəkəˈrɪkjələ/",s:"adj.",c:"课外的",e:"Extracurricular activities build teamwork skills.",t:"课外活动培养团队合作能力。",rt:"extra-(之外) + curricular(课程的)"},
          {w:"graduate",p:"/ˈɡrædʒuət/",s:"n. & v.",c:"毕业生；毕业",e:"She graduated from a top university.",t:"她毕业于一所顶尖大学。",f:"graduates / graduated",ph:"graduate from 毕业于",tp:"动词读 /ˈɡrædʒueɪt/，名词读 /ˈɡrædʒuət/，重音和尾音都不同。"}
        ]},
        { name: "环境与城市 Environment & City", emoji: "🏙️", words: [
          {w:"emission",p:"/ɪˈmɪʃn/",s:"n.",c:"排放；排放物",e:"The city aims to cut carbon emissions by half.",t:"这座城市的目标是把碳排放削减一半。",f:"emissions",ph:"carbon emissions 碳排放",rt:"e-(向外) + miss(送) + -ion → 送出去的东西",tp:"谈环保时几乎总是复数 emissions。"},
          {w:"habitat",p:"/ˈhæbɪtæt/",s:"n.",c:"栖息地",e:"Wetlands are a vital habitat for birds.",t:"湿地是鸟类重要的栖息地。",f:"habitats",rt:"habit(居住) + -at → 居住的地方"},
          {w:"species",p:"/ˈspiːʃiːz/",s:"n.",c:"物种",e:"Several species have disappeared from the river.",t:"好几种物种已经从这条河里消失了。",f:"species（单复数同形）",rt:"spec(看) + -ies → 看上去有别的样子",tp:"单复数同形：one species / many species。"},
          {w:"ecosystem",p:"/ˈiːkəʊsɪstəm/",s:"n.",c:"生态系统",e:"Coral reefs support a rich ecosystem.",t:"珊瑚礁滋养着丰富的生态系统。",f:"ecosystems",rt:"eco(生态) + system(系统)"},
          {w:"conservation",p:"/ˌkɒnsəˈveɪʃn/",s:"n.",c:"保护；保存",e:"Wildlife conservation needs long-term funding.",t:"野生动物保护需要长期资金支持。",rt:"con-(共同) + serv(保持) + -ation"},
          {w:"congestion",p:"/kənˈdʒestʃən/",s:"n.",c:"拥堵；充血",e:"Traffic congestion wastes millions of hours a year.",t:"交通拥堵每年浪费数百万小时。",ph:"traffic congestion 交通拥堵",rt:"con-(共同) + gest(搬运) + -ion → 全挤在一起"},
          {w:"infrastructure",p:"/ˈɪnfrəstrʌktʃə/",s:"n.",c:"基础设施",e:"The city invested heavily in public infrastructure.",t:"这座城市在公共基础设施上投入巨大。",rt:"infra-(下部) + structure(结构)"},
          {w:"suburb",p:"/ˈsʌbɜːb/",s:"n.",c:"郊区",e:"Many families moved to the suburbs for more space.",t:"许多家庭为了更大的居住空间搬到了郊区。",f:"suburbs",ph:"in the suburbs 在郊区",rt:"sub-(靠近) + urb(城市) → 挨着城的",an:"city centre"},
          {w:"municipal",p:"/mjuːˈnɪsɪpl/",s:"adj.",c:"市政的",e:"The municipal government rebuilt the park.",t:"市政府重建了这座公园。",rt:"mun(职责) + -icipal → 承担城市职责的"},
          {w:"landfill",p:"/ˈlændfɪl/",s:"n.",c:"垃圾填埋场",e:"Most of the waste ends up in landfill.",t:"大部分垃圾最终进了填埋场。",f:"landfills",rt:"land(土地) + fill(填满)"},
          {w:"deplete",p:"/dɪˈpliːt/",s:"v.",c:"耗尽；枯竭",e:"Overfishing has depleted fish stocks.",t:"过度捕捞已经使鱼类资源枯竭。",f:"depleted / depleting",rt:"de-(去除) + plet(填满) → 把填满的东西掏空",sy:"exhaust"},
          {w:"contaminate",p:"/kənˈtæmɪneɪt/",s:"v.",c:"污染；弄脏",e:"Chemicals have contaminated the groundwater.",t:"化学品已经污染了地下水。",f:"contaminated / contaminating",rt:"con-(一起) + tamin(接触) + -ate → 接触后变脏",tp:"contaminate 强调「被有害物混入」，比 pollute 更具体。"},
          {w:"biodiversity",p:"/ˌbaɪəʊdaɪˈvɜːsəti/",s:"n.",c:"生物多样性",e:"Protecting biodiversity benefits agriculture too.",t:"保护生物多样性对农业也有好处。",rt:"bio(生命) + diversity(多样性)"},
          {w:"footprint",p:"/ˈfʊtprɪnt/",s:"n.",c:"足迹；碳足迹",e:"Cycling can reduce your carbon footprint.",t:"骑车可以降低你的碳足迹。",f:"footprints",ph:"carbon footprint 碳足迹",rt:"foot(脚) + print(印记)"}
        ]},
        { name: "健康与生活 Health & Life", emoji: "🩺", words: [
          {w:"nutrition",p:"/njuˈtrɪʃn/",s:"n.",c:"营养",e:"Good nutrition is the basis of good health.",t:"良好的营养是健康的基础。",rt:"nutri(滋养) + -tion"},
          {w:"obesity",p:"/əʊˈbiːsəti/",s:"n.",c:"肥胖",e:"Childhood obesity has become a global concern.",t:"儿童肥胖已成为全球关注的问题。",rt:"obese → obes + -ity"},
          {w:"sedentary",p:"/ˈsedntri/",s:"adj.",c:"久坐的",e:"A sedentary lifestyle raises the risk of heart disease.",t:"久坐的生活方式会增加患心脏病的风险。",ph:"sedentary lifestyle 久坐的生活方式",rt:"sed(坐) + -entary"},
          {w:"chronic",p:"/ˈkrɒnɪk/",s:"adj.",c:"慢性的；长期的",e:"Millions live with chronic pain.",t:"数百万人长期忍受慢性疼痛。",ph:"chronic disease 慢性病",rt:"chron(时间) + -ic → 拖很久的",an:"acute",tp:"chronic 是「长期、慢性」；acute 是「急性、剧烈」。"},
          {w:"immunity",p:"/ɪˈmjuːnəti/",s:"n.",c:"免疫力",e:"Vaccination builds immunity against the virus.",t:"接种疫苗能建立对病毒的免疫力。",ph:"immunity to 对……的免疫力",rt:"im-(不) + mun(义务) + -ity"},
          {w:"therapy",p:"/ˈθerəpi/",s:"n.",c:"治疗；疗法",e:"She is receiving therapy for her back.",t:"她正在接受背部治疗。",f:"therapies",rt:"therap(照料) + -y"},
          {w:"symptom",p:"/ˈsɪmptəm/",s:"n.",c:"症状；征兆",e:"A dry cough is a common symptom.",t:"干咳是一种常见症状。",f:"symptoms",rt:"sym-(一起) + ptom(落下) → 一起出现的迹象"},
          {w:"hygiene",p:"/ˈhaɪdʒiːn/",s:"n.",c:"卫生",e:"Hand hygiene prevents many infections.",t:"手部卫生能预防很多感染。",rt:"源自希腊健康女神 Hygieia"},
          {w:"insomnia",p:"/ɪnˈsɒmniə/",s:"n.",c:"失眠",e:"Stress is a common cause of insomnia.",t:"压力是失眠的常见原因。",rt:"in-(不) + somn(睡眠) + -ia（病） → 睡不着的病",an:"hypersomnia"},
          {w:"epidemic",p:"/ˌepɪˈdemɪk/",s:"n. & adj.",c:"流行病；流行的",e:"The epidemic spread quickly through the region.",t:"这种流行病在该地区迅速蔓延。",f:"epidemics",rt:"epi-(在上) + dem(人民) + -ic → 落在众人身上的",tp:"epidemic（地区性流行）与 pandemic（全球大流行），后者前缀 pan- 表示「全」。"},
          {w:"wellbeing",p:"/ˌwelˈbiːɪŋ/",s:"n.",c:"身心健康；福祉",e:"Regular breaks improve mental wellbeing.",t:"规律休息有助于改善心理健康。",rt:"well(好) + being(存在)"},
          {w:"lifestyle",p:"/ˈlaɪfstaɪl/",s:"n.",c:"生活方式",e:"A healthy lifestyle is easier said than done.",t:"健康的生活方式说起来容易做起来难。",f:"lifestyles",rt:"life(生活) + style(方式)"},
          {w:"calorie",p:"/ˈkæləri/",s:"n.",c:"卡路里；热量单位",e:"The drink contains only ten calories.",t:"这种饮料只含十卡路里。",f:"calories",ph:"count calories 计算热量"},
          {w:"remedy",p:"/ˈremədi/",s:"n. & v.",c:"疗法；补救办法",e:"There is no simple remedy for this problem.",t:"这个问题没有简单的解决办法。",f:"remedies",rt:"re-(再) + med(治疗) + -y → 再治一次的办法"}
        ]},
        { name: "数据与图表 Data & Charts", emoji: "📈", words: [
          {w:"proportion",p:"/prəˈpɔːʃn/",s:"n.",c:"比例；部分",e:"A large proportion of students work part-time.",t:"很大一部分学生做兼职。",f:"proportions",ph:"the proportion of ……的比例",rt:"pro-(向前) + portion(部分) → 各部分之间的配比"},
          {w:"percentage",p:"/pəˈsentɪdʒ/",s:"n.",c:"百分比",e:"The percentage of women in science is rising.",t:"科学领域女性的比例正在上升。",f:"percentages",rt:"per(每) + cent(百) + -age",tp:"percentage 前面不加具体数字：a high percentage；具体数字用 percent（30 percent）。"},
          {w:"fluctuate",p:"/ˈflʌktʃueɪt/",s:"v.",c:"波动；起伏",e:"Prices fluctuated between 20 and 30 dollars.",t:"价格在 20 到 30 美元之间波动。",f:"fluctuated / fluctuating",rt:"fluct(波浪) + -uate → 像波浪一样",tp:"小作文写趋势的核心词，常配 between A and B 使用。"},
          {w:"plateau",p:"/ˈplætəʊ/",s:"n. & v.",c:"（图表）趋于平稳；高原",e:"After 2010, the figures plateaued.",t:"2010 年之后，数字趋于平稳。",f:"plateaus / plateaued",rt:"原义「高原」→ 平坦不上升",tp:"图表题里 plateau 表示「不再增长也不下降」，很有用。"},
          {w:"surge",p:"/sɜːdʒ/",s:"n. & v.",c:"激增；飙升",e:"There was a sharp surge in online sales.",t:"线上销售额出现了激增。",f:"surges / surged",ph:"a surge in ……的激增",sy:"soar"},
          {w:"decline",p:"/dɪˈklaɪn/",s:"v. & n.",c:"下降；拒绝",e:"Car ownership declined steadily after 2005.",t:"2005 年之后汽车保有量持续下降。",f:"declined / declining",ph:"a decline in ……的下降",rt:"de-(向下) + clin(倾斜) → 向下倾",an:"increase"},
          {w:"peak",p:"/piːk/",s:"n. & v.",c:"峰值；达到顶峰",e:"Sales peaked in December and then fell.",t:"销售额在十二月达到峰值，随后回落。",f:"peaks / peaked",ph:"reach a peak 达到顶峰",an:"trough"},
          {w:"trough",p:"/trɒf/",s:"n.",c:"低谷；波谷",e:"The figure hit a trough in 2009.",t:"该数字在 2009 年跌到低谷。",f:"troughs",an:"peak",tp:"trough 是「谷」，与 peak（峰）成对，图表题必备。"},
          {w:"steadily",p:"/ˈstedəli/",s:"adv.",c:"稳步地；持续地",e:"The number rose steadily over the decade.",t:"这个数字十年间稳步上升。",rt:"steady → steadi + -ly",sy:"consistently"},
          {w:"respectively",p:"/rɪˈspektɪvli/",s:"adv.",c:"分别地",e:"The figures were 30 and 45 percent respectively.",t:"这两个数字分别是 30% 和 45%。",rt:"respect(各自) + -ively",tp:"respectively 要求前后顺序严格一一对应，用错会张冠李戴。"},
          {w:"negligible",p:"/ˈneɡlɪdʒəbl/",s:"adj.",c:"微不足道的",e:"The difference was negligible.",t:"这个差别微不足道。",rt:"neglect → neglig + -ible → 可以忽略的",an:"significant"},
          {w:"predominant",p:"/prɪˈdɒmɪnənt/",s:"adj.",c:"占主导的；主要的",e:"Farming was the predominant activity in the region.",t:"农业是该地区的主导活动。",ph:"predominant role 主导作用",rt:"pre-(前) + dominant(统治的)"},
          {w:"comprise",p:"/kəmˈpraɪz/",s:"v.",c:"由……组成；构成",e:"The course comprises six modules.",t:"这门课由六个模块组成。",f:"comprised / comprising",rt:"com-(一起) + pris(抓) → 抓在一起",tp:"comprise = consist of，但不用被动式：不说 be comprised of（虽然现在也有人这么用）。"},
          {w:"constitute",p:"/ˈkɒnstɪtjuːt/",s:"v.",c:"构成；占",e:"Women constitute half of the workforce.",t:"女性占劳动力的一半。",f:"constituted / constituting",rt:"con-(一起) + stitu(建立) + -e → 一起立起来"}
        ]}
      ]
    }
  ];

  window.WORD_DATA = window.WORD_DATA || { levels: [] };
  window.WORD_DATA.levels = window.WORD_DATA.levels.concat(levels);
})();
