



 

 

 

 

# BlockChainProject



***基于区块链的成绩认证***



![区块链技术支持的K-12系统框架中的远程教育过程](https://i.loli.net/2020/12/07/vEeDjFS9RTIwU68.jpg)

[TOC]

【目录】

┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫

[前言](https://github.com/Heemale/BlockChainProject#%E5%89%8D%E8%A8%80)

 [1.匹配度分析和案例](https://github.com/Heemale/BlockChainProject#1%E5%8C%B9%E9%85%8D%E5%BA%A6%E5%88%86%E6%9E%90%E5%92%8C%E6%A1%88%E4%BE%8B)

​	[1.2.1区块链技术与成绩认证的匹配度分析](https://github.com/Heemale/BlockChainProject#121%E5%8C%BA%E5%9D%97%E9%93%BE%E6%8A%80%E6%9C%AF%E4%B8%8E%E6%88%90%E7%BB%A9%E8%AE%A4%E8%AF%81%E7%9A%84%E5%8C%B9%E9%85%8D%E5%BA%A6%E5%88%86%E6%9E%90)

​	[1.2.2区块链技术与成绩认证的应用案例](https://github.com/Heemale/BlockChainProject#122%E5%8C%BA%E5%9D%97%E9%93%BE%E6%8A%80%E6%9C%AF%E4%B8%8E%E6%88%90%E7%BB%A9%E8%AE%A4%E8%AF%81%E7%9A%84%E5%BA%94%E7%94%A8%E6%A1%88%E4%BE%8B)

​	[1.2.3成绩认证+区块链面临的挑战](https://github.com/Heemale/BlockChainProject#123%E6%88%90%E7%BB%A9%E8%AE%A4%E8%AF%81%E5%8C%BA%E5%9D%97%E9%93%BE%E9%9D%A2%E4%B8%B4%E7%9A%84%E6%8C%91%E6%88%98)

[2业务设计](https://github.com/Heemale/BlockChainProject#2%E4%B8%9A%E5%8A%A1%E8%AE%BE%E8%AE%A1)

​	[2.1业务流程](https://github.com/Heemale/BlockChainProject#21%E4%B8%9A%E5%8A%A1%E6%B5%81%E7%A8%8B)

​	[2.2业务场景](https://github.com/Heemale/BlockChainProject#22%E4%B8%9A%E5%8A%A1%E5%9C%BA%E6%99%AF)

[3关键技术及方法](https://github.com/Heemale/BlockChainProject#3%E5%85%B3%E9%94%AE%E6%8A%80%E6%9C%AF%E5%8F%8A%E6%96%B9%E6%B3%95)

[4内容架构](https://github.com/Heemale/BlockChainProject#4%E5%86%85%E5%AE%B9%E6%9E%B6%E6%9E%84)

​	[4.1应用层](https://github.com/Heemale/BlockChainProject#41%E5%BA%94%E7%94%A8%E5%B1%82)

​	[4.2服务层](https://github.com/Heemale/BlockChainProject#42%E6%9C%8D%E5%8A%A1%E5%B1%82)

​	[4.3安全模块](https://github.com/Heemale/BlockChainProject#43%E5%AE%89%E5%85%A8%E6%A8%A1%E5%9D%97)

[5代码](https://github.com/Heemale/BlockChainProject#5%E4%BB%A3%E7%A0%81)

​	[5.1ERC721类不可替代性代币](https://github.com/Heemale/BlockChainProject#51erc721%E7%B1%BB%E4%B8%8D%E5%8F%AF%E6%9B%BF%E4%BB%A3%E6%80%A7%E4%BB%A3%E5%B8%81)

​	[5.2ERC20类可替代性代币](https://github.com/Heemale/BlockChainProject#52erc20%E7%B1%BB%E5%8F%AF%E6%9B%BF%E4%BB%A3%E6%80%A7%E4%BB%A3%E5%B8%81)

[6前端展示](https://github.com/Heemale/BlockChainProject#6%E5%89%8D%E7%AB%AF%E7%95%8C%E9%9D%A2%E5%B1%95%E7%A4%BA)

┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫

#### 前言

​		早在2016年，工信部颁布的《中国区块链技术和应用发展白皮书》就指出“区块链系统的透明化、数据不可篡改等特征，完全适用于学生征信管理、升学就业、学术、资质证明、产学合作等方面，对教育就业的健康发展具有重要的价值”。那么，区块链到底如何能融于教育，改善教育现存的问题，并最终变革教育呢？我们从以下几个方面可以略窥一二。

​		记录“学有所证”：建立个体学信数据，真正达成产学结合学习的最终目的是服务社会，然而，在年轻人从校园走向社会的道路上存在三道难以逾越的鸿沟。其一，候选人的学历是否真实？其二，就算认证了学历的真实性，该认证真的能代表候选人的知识水平吗？其三，候选人的知识是企业真正需要的吗？

##### 学历认证更简单

​		早在文学经典《围城》中，钱钟书先生便描绘了主人公方鸿渐在海外留学，一事无成，花钱买了一张“克莱登大学”的学历，归国后竟能够以此假学历招摇撞骗。今天，这一问题仍然未得到很好的解决，假证、假学历在人才市场泛滥，其造假成本极低，几百元就能定制一张大学毕业证书，对企业识人用人造成了严重困扰。面对这一问题，国际一流名校携手区块链技术为我们带来了全新的思路。

​		2017年，麻理工学院率先做出尝试，试点的111名毕业生成为第一批可以选择通过手机里的应用程序接收其区块链文凭的学子。[1]学生在下载一个叫Blockcerts Wallet的应用程序后，系统会自动生成公钥—私钥对，并将公钥发送到麻省理工学院，由学校创建数字记录。接下来，将单向哈希（可用于以后验证的数字字符串）添加到区块链。文凭信息本身并没有进入区块链，只是带有时间戳的交易表明麻省理工学院创建了数字记录。最后，麻省理工学院通过电子邮件将其上刻有学生公钥的数字文凭发送给学生。由于学生手机上的应用程序具有其唯一的私钥，学生可以证明该文凭的所有权。使用这一新型的数字文凭系统，雇主和学校等第三方无须联系注册服务商办公室就可以通过使用链接或上载学位信息的文件来轻松验证文凭是否合法。麻省理工学院的注册主任兼高级副院长玛丽·卡拉汉说，麻省理工学院的数字文凭使学生“拥有自己的记录，并能够以安全的方式与他们想分享的任何人共享记录”。

​		无独有偶，在英国，伦敦大学学院也已宣布其区块链技术中心开展了一项试点计划，通过与初创公司Gradbase合作，利用区块链技术开发的学历认证平台，在伦敦大学学院研读金融风险管理课程的学生可以通过平台注册自己的详细学位信息并得到验证。可以看出，世界名校都朝着这方面做出努力探索。另外，一些国家也针对这一问题从上而下地开始行动。肯尼亚政府在饱受学历造假对社会经济带来的负面影响后，联合IBM公司建立了一个基于区块链技术的学历证书网络发布与管理平台，让所有学校、培训机构等都可以在区块链网络上发布学历证书，实现学历证书的透明生产、传递和查验，从而打击文凭造假等非法行为。

##### 学习轨迹更清晰

​		通过区块链技术，学历的真实性得到了验证，那么手中的证书是否能代表真实的知识水平呢？再者，一批手握相同学位证书的学子，如何才能看出谁能脱颖而出呢？在区块链技术下，不仅是最终的“结果”——证书可以上链，得到结果的“过程”同样也可以上链。如果把人们在不同学习阶段取得的成果比喻成一枚枚徽章，那使用区块链技术就能实现“开放徽章”。“开放徽章”是用来呈现个人通过完成特定的项目、课程或者实践活动而获得的技能、兴趣和成就的一种“数字徽章”。区块链的防篡改系统是“开放徽章”最佳的存储空间。最终，见证我们学习成就的不只是那一张学历证书，还可以是一条长长的“徽章走廊”。

​	早在2016年，未来教育研究所（IFTF）和美国高考基金会（ACT）就提出了“学习即赚钱”的未来教育构思，其中心思想源于EduBlocks概念，类似于当前用来记录和评估学生学习的“学分”。在现在数字化教育方式越来越深入推进的趋势下，用线上方式记录学习轨迹变得更加容易。除了跟踪学术学习活动外，这一系统还可以测量和记录非正式学习，比如参与相关培训、比赛、社会实践、课题研究、课外实习等，一连串的EduBlocks形成一个分布式账本，让学生在任何时间、任何地点发生的学习事件都能被一一记录。在毕业时，每个学生都会得到属于自己的个人电子信息数据库，其中包含“赚取”的各种技能，即学生在学习期间获得的所有EduBlocks，它们将被纳入学生在求职面试时所用的简历，也将成为招聘单位选拔人才的重要参考依据。

##### 鼓励“学有所长”：巧用积分机制，升级学习社区

​		在日常的学习工作中，我们总会求助全球知识网络，小到基于在线课程的学习交流平台——同时上这门课程的学员可以通过分享笔记、互动讨论等方式交流心得，大到专业性强的各类学习论坛，如以Github为首的编程类论坛、经管之家等经济类论坛。这类论坛会集了专业能力极强的专家，他们乐于在自己擅长的专业领域里与其他有相同兴趣的人讨论难题，传道解惑。更广泛的是各类问答型社区，以知乎、Quora等知名社区为主导，这类社区由于讨论话题的全面性带来较低的门槛，网民参与度极高，而一些热门答案往往引起极高的关注度。然而，现有的学习社区存在参与度不足、社区环境治理难、抄袭现象严重等问题，严重阻碍了社区的健康发展，区块链技术则成为学习社区热爱者眼中的“救星”。

##### 基于学习积分的激励机制带来社区活跃度

​		当前，学习社区为了激励回答者的回答热情，提升社区活跃度，一般会给优质资料上传者或者答疑者社区币、积分等形式的虚拟奖励。优质资料上传者和答疑者会因为奖励积累得到等级的提升等荣誉，也可以用积分等兑换相应奖励。然而，这一激励系统存在一些问题：其一，在社区里得到的积分不能变现，只能内部消费；其二，由于这些社区都是相互孤立的，A社区的积分对于B社区来说毫无价值；其三，万一哪天社区不运营了，这些积分将全部作废。因为这些问题，相关学习者的积极性非常低，现有学习社区的活跃度也受到很大影响。

​		那么，如何能让学员的优质知识长久保存，并在分享中体现价值？区块链技术的应用或许能为我们找到答案。在区块链上，学习社区成员在学习交流过程中的价值由区块链通用积分体现。通过将自己在学习过程中的优秀作品、笔记、回答等发布到基于区块链的学习社区，利用其不可篡改的特点，所有过程得以长久保存，并得到相应积分奖励，此积分可以实现全球跨社区性流通。成员之间在进行答疑、合作等相互交流的时候，如答疑、合作等，可以通过发布积分悬赏的形式激励其他人参与，或者用自己的积分换取社区学习资料与服务。这一积分体系不仅注重参与量，还可将其他成员的认可纳入衡量标准，比如赞同、感谢、邀请等，进而保证内容质量更高。这样一来，学习社区成员在自我学习、互助交流过程中产生的价值能更好地体现，整个社区的参与度也会大大提升。

##### 结束一考定终身，转变教育评价体系

​		在升学过程中，学生和家长都面临一个困扰：一考定终身。学生生涯中屈指可数的几次大型考试在很大程度上决定了人生的发展路径。未来，在区块链赋能教育后，将改变过去教育评价方式单一的局面，衡量受教育者的标准不再只局限于考试这种存在弊病的固定形式，而是延长至整个教育过程。孩子的每一次成长都会被真实记录并永久保存，教育评价体系由此变得多样化，与之对应的人才培养方式也变得更加个性化，真正做到对个体因材施教，最大限度地发挥每个人的优势。

##### 激励机制贯穿始终，建立终身学习社会

​		从之前的分析可以看出，无论是学习轨迹记录，还是社区积分积累，教育领域是区块链激励制度的最佳运用地之一。展望未来，这种激励具有长期性，甚至会贯穿人的一生。不仅仅是在学校的时间里，在进入社会之后，在工作中也同样需要不断吸收新知识，做到时学时新。在实践运用中，可将这种激励落在实处，比如在体制内，可以尝试将这种学习积分以一定权重纳入考核评职称；在体制外，也可将雇员的学习经历纳入晋升加薪的考核体系，从而让终身学习成为每个人的信仰。

##### 需要突破的瓶颈

​		截至目前，区块链在教育行业落地的项目较少，更多的是战略布局，而不是市场迭代。其需要突破的瓶颈有以下三个。

​		1.资产数字化程度低，先天优势不足。由于教育与线下互动相关性密切，其大部分资源的数字化程度较低，这为教育上链带来了较大的困难，大部分“区块链+教育”现阶段仅为设想，相关应用都只是试验阶段，大规模应用还需等待。但随着现在在线教育的蓬勃兴起，教育行业的数据量会得到不断积累和沉淀，为下一步区块链的进入创造条件。

​		2.变革者的积极性不足。教育作为公益性质较强的领域，其变革推动者往往来自教育部门等政府机关。然而，“区块链+教育”的模式与既有的相关制度是存在一定冲突的，相关部门对“区块链+教育”应用的大规模推广暂持观望态度。例如，个体学信大数据平台在一定程度上与学信网的工作范围重合，作为目前国内在学历认证等方面唯一的认证平台，虽然学信网存在改进空间，但由于几乎不存在竞争，其在接受新技术升级方面的意愿并不是很强。未来，在政府的进一步号召和其他想借机进入市场的企业的双重压力下，区块链在教育领域的变革指日可待。

​		3.责任划分不清晰，相关技术不成熟。教育是万众关心的重点民生问题，每一个举动都牵动千家万户的神经。因此，在这个领域的改革动作也是非常谨慎的，特别是对于技术还没那么成熟的区块链，在现实社会中存在诸多争议。加上学历验证等教育相关应用场景涉及的参与方众多，当这些参与方上链后，相关的机构责任如何划分，相关的教育数据由谁负责，传递信息的过程是否安全，怎么保证不被干预，这些都是需要事前思考的问题。

-------------

#### 现有的问题		

​		目前，区块链技术在成绩认证领域的应用仍处于探索和起步阶段。我国成绩认证具有服务部门多、内容量大、使用环节多、覆盖用户多等突出特点，利用区块链去中心化、互信任、防篡改、可追溯的特点来实现学校、学生、用人单位、培训机构，比赛单位等多方参与、资源共享、数据可信、成本节约、安全监督具有重要而迫切的现实意义和广阔的应用前景

​		有必要找准制约成绩认证的难点、痛点问题，结合区块链技术特点和支撑能力，分析适合我国成绩认证的框架结构和应用领域，提出我国区块链+成绩认证的推进思路，为教育用人行业转型升级注入新动能、激发新活力，加快培养高素质人才。

​		本文档，面向成绩认证领域现状和技术现状，深入分析了当前阶段成绩认证面临的造假、步骤繁琐等痛点，结合区块链技术优势提出了基于区块链的成绩认证业务流程，并分析了该方案在学校育人、企业用人方面的应用扩展。

##### 为什么使用区块链？

​		充分接受知识，简化管理，创造更多通过游戏化和奖励来学习的激励措施是拥抱区块链技术的教育机构的成就。为了在竞争激烈的环境中生存，学校，学院和大学必须迈出创新和整合区块链的第一步。

​		正如人工智能，物联网和扩展现实等其他新兴技术一样，区块链技术也不断突破界限，并推出了跨行业的解决方案，这些解决方案超出了其最初的金融和加密货币关注范围。它的主要优势是可以分散存储的功能，存储信息的不变性，可追溯性和透明性。

​		这些优势不属于促进安全交易的范围，而是允许创建复杂的生态系统，使用户可以公开协作，交换数据，参与协议，并且可以通过获得加密货币的奖励来获得更好的结果。由于传统的教育模式效率低下，证书和教育记录的访问受限以及笔录的有效性，教育是正在发展壮大但仍面临挑战的顶级行业之一，这些问题可以通过基于区块链的软件轻松解决。

​		区块链通过在分散的分类账中存储和提供通用的凭证访问权限，通过智能合约优化教育流程以及激励学生学习加密货币奖励来应对这些挑战。请继续阅读以了解更多有关在教育中引入区块链如何带来确定利益的信息。

##### 什么是区块链？

​		简单来说，区块链是一种点对点的分布式账本，用于存储信息并跟踪交易。区块链社区的每个成员都有自己的信息副本。随后将信息记录到称为块的单元中，并通过强大的加密技术进行保护，从而创建数据链。区块链系统架构不允许更改块，因此每个动作和事件都可以追溯到其起源。

​		区块链可以存储有关各方之间的协议，其凭证，交易以及以数字形式呈现的任何其他信息的数据。由于此信息是分布式且高度安全的，因此任何欺诈活动的尝试都可以被区块链社区的成员看到。这为区块链集成到的任何类型的生态系统创建了信任和透明性。

 

![img](https://i.loli.net/2020/12/07/OAHP6MLSvltEeNu.png)

 

##### 区块链如何工作？

​		区块链是一个平台，可确保所存储信息的完整性并维持生态系统成员之间的交互。以下是其工作方式的高级概述：

​		1.每个成员都维护自己的区块链节点，其中包含附加到网络的所有事件和数据的完整历史记录，包括凭证，身份，证书等。

​		2.网络的每次更新都需要在链的末尾创建一个新块。区块链协议规定了如何记录，验证和分发这些块。

​		3.采用共识机制来验证每个创建的区块，区块链网络的成员将决定是否将其添加到链中。

​		4.一旦创建并确认了一个块，就无法将其撤销。区块链上的所有条目都是永久且安全地存储的。这允许社区成员跟踪交易的完整历史记录以及区块链中的任何其他修改。

​		5.智能合约是网络成员之间已编程了条件的一种特殊类型的协议，可确保在各方收到协议之前，它们都已得到满足。智能合约消除了第三方和中间人参与协议解决的需要。

​		6.加密货币交易在区块链生态系统中发挥着非常重要的作用，激励社区的所有成员做出宝贵的贡献并参与整个系统的开发。

​		区块链技术的这些关键支柱为其在包括教育在内的不同行业中使用奠定了基础。它有可能创造一个全球环境，使学习材料，出版物，学生学分和成绩单易于获得。它还可以为问责，激励以及教师，学生和其他参与者之间的交流引入新的创新方式。

 

 

###  1.匹配度分析和案例

#### 1.2.1区块链技术与成绩认证的匹配度分析

​		教育行业面临的挑战已经拖了多年。这包括低效的基于纸张的记录保存流程，缺乏透明度，不良的学生和老师问责制，没有真正动机促使学生学习和在课堂上表现良好，以及由于伪造而对教育功绩和学位缺乏信任。区块链有能力通过提供以下详细描述的切实解决方案来影响教育并应对这些挑战。

![一个人拿着一个带有文件的文件夹来解决教育行业的挑战](https://i.loli.net/2020/12/07/8lk7hHQ5xOPUpVg.jpg)

#####   （1）增强和透明的记录保存

使用不可变的区块链存储，注册服务商的学校办公室只需创建一次学生记录。此后，教育系统的所有参与者都可以使用它，甚至可以在各个机构之间共享它。每个任务，任务，参加学校和课外活动都作为块附加到学生的数字记录中，并在学生的个人资料中查看。因此，教师，辅导员和学校管理人员对学生的学习过程有鸟瞰图。

除了维护学生记录外，区块链系统还可用于监督和促进学校，学院和大学的认证，保护知识产权并消除文凭和成绩单的伪造。基于区块链的教育记录可以轻松访问并快速转移到其他机构和组织，包括潜在的雇主。

学生要做的就是共享一个链接或他们的数字地址，以访问他们的个人资料。这种类型的系统可确保凭据和学生记录的完全真实性，因为带有签名的完整更改历史记录存储在区块链上。

 

#####   （2）智能合约推动的学生问责制

教师可以使用区块链智能合约与学生就完成任务达成数字协议。协议中详细说明了所有作业要求，包括说明，条件，截止日期和截止日期。学生完成任务并满足协议中的所有条款后，可以自动授予他们访问课程下一部分的权限，或获得学分和结业证书。

最终，智能合约可以在传统教室设置中提供个性化学习中发挥重要作用，并且还可以创建传统教育系统中缺少的激励因素。

 

#####   （3）激励学生和老师取得更大的成就

加密货币和令牌化学分可用于创建有效的奖励系统，以激励学生，并通过创建新的学习材料和参与研究来鼓励教师为教育过程做出贡献。可以对智能合约进行编程，以针对完成的任务以加密货币颁发奖励。通过向表现优异的人给予特别的奖励，教师将能够进一步激励学生。

最终，区块链技术可以充分利用现代教育中的游戏化元素，并将其提升到一个新的水平。代币化的学分可用于偿还学生贷款，购买学校用品，学习材料以及支付其他教育费用。完成某些专业并获得大学文凭的奖励可以大大减少在没有完成大学意愿的情况下辍学的学生人数。

 

#####   （4）学习成绩跟踪和个性化

归功于区块链数据存储提供的透明性，教育者拥有更多可用于监视和控制学生表现的资源。在使用智能合约及其输出作为确定学生苦苦挣扎的工具的同时，学校可以提供完全定制的学习环境。整个学区的机构都可以访问记录在区块链上的学生成绩数据，并用于改善教育实践。

在全球范围内，这种系统可以汇总地区、省和国家/地区级别的绩效统计信息，并提高学校，学院和大学之间的健康竞争，其最终目标是提供最佳的教育水平。

 

#####   （5）介绍可验证的终身学生成绩单

我们所有人都经历了从教育机构获取成绩单的麻烦。这是一个非常耗时的过程，涉及多个方面来验证凭据并编制完整的学术记录。区块链可以在需要时为学生提供在线数字成绩单。这份可核实的学生终生成绩单可以包含有关所有教育成就的信息，并简化凭据验证，从而使学生在学校之间的转学更加容易。

 

#####   （6）为学生提供教育成就档案袋

一个教育性的区块链平台可以允许学生创建自己的数字档案袋，以存储他们所有的教育价值，例如：

​	①获得专业/副修及学位

​	②经实践证明的能力

​	③完成的课程证书

​	④取得成就的微证书

​	⑤额外的学分和奖励

​	⑥测试成绩和出勤记录。

可以公开共享该档案袋，以证明学生有大学录取的资格，或者由寻找工作机会的学生发送给雇主。最终，可以建立一个潜在候选人的通用数据库，并且公司可以寻找表现最好的学生，从而为在学校取得更好的表现提供了更多的动力。

 

![img](https://i.loli.net/2020/12/07/v1ltbph4HBFGgDq.png)

 

 

#### 1.2.2区块链技术与成绩认证的应用案例

区块链应用在教育领域仍然很少，主要是因为它们与金融科技解决方案和加密货币的发展紧密相关。但是，许多创新型初创公司和全球公司开始向全球学校提供区块链支持的教育服务。以下是一些具体示例。

![一个人介绍了基于智能合约协议的教育区块链解决方案](https://i.loli.net/2020/12/07/2dR7z6Pkq3lb5gO.jpg)

###  

##### （1）区块证书：教育证书管理

[Blockcerts](https://www.blockcerts.org/)是一个开放标准的平台，用于存储和验证数字证书（包括成绩单和证书）。它的区块链网络可以存储从文凭到转移记录到成绩分数的任何内容。这将创建一个通用的生态系统，用于创建，发布，查看和验证有关学生的学术历史的信息。使用该平台，大学可以确保学生记录的可信度，同时潜在的雇主可以查看整个学生档案，包括他们的奖励和成就，并对候选人的优势，能力，知识和经验有更好的了解。

##### （2）APPII：简历制作人向雇主展示经过验证的教育功绩

[APPII](https://appii.io/)是职业经历验证者和招聘平台。候选人可以通过增加学历，学历，成就和经验轻松制作简历。区块链网络用于通过与教育机构共享来验证候选人的学历。机器学习还用于将简历中提供的所有数据与需要相应技能的工作机会进行匹配。由于该信息已通过区块链技术和密码学进行验证和保护，因此雇主对候选人的知识和经验更加信任。

##### （3）ODEM：教育产品和服务市场

[ODEM](https://odem.cloud/)是基于区块链的在线教育平台，提供可负担得起的学习课程，可以根据学生的喜好进行定制。学生可以直接与学术专业人士交流，并商定最佳的学习体验。该平台使用具有区块链功能的支付系统和智能合约来激励和奖励学生的学习努力，并激励教师也开设更好的课程。学生获得的所有证书都安全地存储在区块链上。因此，可以轻松地在社交媒体上访问和共享它们，或在数字CV中作为证明提供它们。

##### （4）索尼全球教育：数字笔录管理

[索尼全球教育部](https://blockchain.sonyged.com/)允许多个教育机构在分布式分类帐中共享其学生的成就。区块链网络充当每个学生终生数字笔录的存储，以后可以在大学之间进行转移时使用。索尼的意图是进一步开发平台，并为下一代教育生态系统构建基础设施，在该生态系统中，师生双方都可以合作并获得加密货币的奖励。

##### （5）BitDegree：具有游戏化体验的在线教育平台

[BitDegree](https://www.bitdegree.org/)提供有关软件和技术的在线课程。鼓励学生使用代币奖学金来学习。该平台具有一个游戏化的环境，可以为每个学习者分配一个角色，并通过完成任务来导航虚拟世界。在学习和完成课程方面取得显著成就将获得他们的奖励和认可，这些潜在的雇主也在平台上注册。所有学术证书都存储在区块链上，并累积在学生的个人资料中。希望以崭新的眼光聘请新技术专家的公司可以跟踪学生的学习进度，并为最合适的候选人提供他们的团队一席之地。

##### （6）学科：个性化学习管理系统

[Disciplina](http://disciplina.ru/)使用区块链技术来跟踪学生的学习进度。根据学生在课堂上的表现，参加课外活动和其他成就的程度为每个学生分配分数。在平台上注册的学校和学院使用这些分数来个性化学习过程并为每门课程制定特殊计划。Disciplina还旨在简化学生与教师之间的交流，并引入方便的工具进行评估，评分和评论。招聘机构和雇主也可以在平台上注册以找到潜在的候选人。

 

 

 

 

 

 

#### 1.2.3成绩认证+区块链面临的挑战 

尽管采用区块链技术在教育领域的优势显而易见，但不愿进行革命性变革的教育工作者对此犹豫不决。这并不奇怪，因为在机构面前出现了许多明显的挑战，这些挑战使他们无法从其旧版软件解决方案过渡。

![一个人在完成教育过程中面临挑战](https://i.loli.net/2020/12/07/IlBXTCogfZdhkru.jpg)

​		现在已根植于大多数教育系统中的**传统解决方案**可能成为采用区块链的强大障碍。许多学校依靠离线文档管理系统和学生信息系统来记录和存储教育资料。机构已投入大量资金来创建基础结构和设置此软件，并将其集成到他们的流程中。更不用说，工作人员已经接受过操作这些系统的培训，因此他们很难过渡到分散式解决方案。

​		**区块链的可扩展性**是阻碍其融入教育等多元化和大规模生态系统的主要原因之一。向区块链添加的数据块越多，工作速度就越慢，因为开始花费更多时间来分析所有数据历史记录。当然，如今分布式账本技术正在变得更具可扩展性，发明了提高交易处理速度的新方法，但是许多潜在的区块链用户宁愿不等待，而是坚持熟悉的理由。

​		**高初始成本**是区块链在教育领域缓慢增长的另一个主要原因，因为教育部门中很少有决策者对区块链是什么以及如何使整个系统受益有清晰的认识。他们看到的是成本：更改环境，建立基础架构的成本，区块链开发本身的成本以及员工的区块链培训。从长远来看，很难预见区块链集成的实际财务收益，包括减少管理，记录保存以及通过引入加密支付和奖励而获得的额外收益。

​		**教育是发展扎根的地方**。正是由于这个原因，该部门必须是最先进的，教育者必须不断地寻求创新。区块链有望对教育产生深远影响，带来透明，优化和简化普通流程等优势。它增强了记录保存能力，并为学生学习和掌握新技能提供了更强大的动力。

 

 

### 2.业务设计

#### 2.1业务流程

##### 流程1（毕业证书）

![证书流程](https://i.loli.net/2021/01/04/JWV6ApRxdqlv57X.png)

​		基于区块链的可信毕业证书用于高校给学生发放区块链毕业证书，以取代纸质证书，并通过区块链保存不可篡改的发证、查证记录，使各参与主体共同建造、共同维护、共同监督，从而满足各参与主体的监督权、增强毕业证书的客观性与可信度。

​		从业务功能上来说，可信区块链毕业证书应用包括登记、发证、查验几个环节，如图1-2所示。

​		登记环节由学生在高校网站指定页面将账户地址提交给学校，完成实名登记，申请区块链毕业证书；

​		发证环节由学生完成毕业论文达到毕业条件时，由学校发放区块链毕业证书；

​		查验环节由学生向雇主提供指向的数字文凭的链接，雇主在区块链对证书进行查询，验证证书的真伪。

1.登记

​		实现区块链毕业证书所有者的申请工作。学生根据个人在高校网站指定页面将账户地址提交给学校，完成实名登记、申请区块链毕业证书的业务。

2.发证

​		实现学生区块链毕业证书的发放。学生完成毕业论文达到毕业条件时，由学校发放区块链毕业证书。

具体流程如下：

（1）学校为学生申请一个唯一标识（证书ID）

（2）学校将学生信息将唯一标识绑定在一起，区块链完成共识过程，实现个人证书的记账、生成基于区块链的唯一性的证书。

3.查验

雇主通过区块链对学生证书的真伪性进行确认。

具体流程如下：

（1）学生向雇主提供指向的数字文凭的链接。

（2）雇主在区块链对毕业证书进行查询，验证毕业证书是否为高校官方所发放。

--------------------------------------------------------------------------------------------------
##### 流程2（比赛奖牌）

![奖牌流程](https://i.loli.net/2021/01/04/UBtVTFdkYCNPHLf.png)

​		基于区块链的比赛令牌用于比赛主办方给学生进行比赛成绩认证，通过区块链颁发不可替代性的代币，增强比赛奖牌的客观性与可信度。

​		从业务功能上来说，包含以下几个步骤：

（1）比赛主办方创建合约，定下，比赛的名字、奖牌的类型。

（2）比赛结束之后，评选出名次之后，获奖学生将自己的个人账户上报给比赛方，比赛主办方为学生申请一个唯一标识（奖牌ID），并将将学生信息将唯一标识绑定在一起，区块链完成共识过程，实现个人奖牌的记账、生成基于区块链的唯一性的获奖令牌。

（3）学生或者雇主可以通过奖牌的ID和比赛合约的地址查询到奖牌的信息。

（4）只有学生本人可以对奖牌进行销毁。

--------------------------------------------------------------------------------------------------
##### 流程3（学分认证）

![学分整体流程图](https://i.loli.net/2021/01/04/yIrXgwFBDtb1fMP.png)

​		基于区块链的学分认证用于高校给学生进行学分认证，通过区块链保存不可篡改的加分、扣分记录，使学校，学生共同建造、共同维护、共同监督，从而满足学生的知情权和监督权、增强学分认证的客观性与可信度。

​		从业务功能上来说，包含以下几个步骤：

（1）高校创建合约之后，可以增加几个备用的管理员账户，这几个管理员账户和所有人一样拥有操控合约的最高权限，添加管理员的操作将记录到合约的事件当中。

（2）管理员对相关部门进行登记、认证，添加相关部门的操作将记录到合约的事件当中。经过认证之后相关部门就可以对学生的学分进行增加和扣除的处理，但是相应的操作都会被记录到合约的时间当中。

（3）学生完成了指定的任务，达到了添加学分的条件，相关部门将scoreCoin奖励给学生（相关部门将scoreCoin发送到学生的账户上），并且将此操作记录到合约的事件当中，学生可以立即查询到scoreCoin的余额和加分的数值和原因。

（4）学生违反了某些规定，触发了扣分的条件，相关部门将scoreCoin从学生账户上扣除，并且将此操作记录到合约的事件当中，学生可以立即查询到scoreCoin的余额和扣分的数值和原因。

#### 2.2业务场景

##### 场景1（毕业证书）

①部署合约

![证书部署](https://i.loli.net/2020/12/29/Hsj6FAOfSrxDEU1.png)

②颁发证书

![颁发证书](https://i.loli.net/2020/12/29/4AZoJtzfjELK57s.png)

③查询证书

![查询证书](https://i.loli.net/2021/01/05/AIRv9J1gdwUYz7H.png)

④销毁证书

![销毁证书](https://i.loli.net/2020/12/31/zl1MAYj3fIxqcWh.png)

##### 场景2（比赛奖牌）

①部署合约

![奖牌部署](https://i.loli.net/2020/12/29/yD9Wqdvz2RxEK1V.png)

②颁发奖牌

![颁发奖牌](https://i.loli.net/2020/12/29/7OENti24JYyvjdp.png)

③查询奖牌

![查询奖牌](https://i.loli.net/2021/01/05/gt4kiVrPUjZxMe5.png)

④销毁奖牌

![销毁奖牌](https://i.loli.net/2020/12/29/SCe2MyR7k5Z8QGa.png)

##### 场景3（学分认证）

①.部署

![部署](https://i.loli.net/2020/12/26/zue4mLofMk9DhUE.png)



②.增加代币

![增加代币](https://i.loli.net/2020/12/26/OzJG95esRjBCTEq.png)

③.设置管理

![设置管理](https://i.loli.net/2020/12/26/F7UyOGQRh2JobNe.png)

④.学分变动

![学分变动](https://i.loli.net/2020/12/26/wiYdoWMfNO6cbKh.png)

⑤.查询学分变动记录



![学分变动记录](https://i.loli.net/2020/12/26/asmwr73KRT5GMP4.png)



 

### 3关键技术及方法

####    3.1统计学分合约

  学校部署统计学分合约，生成合约实例之后，会初始化得到一些代币，代币的多少对应为学分的多少，如果代币数量不足，可以通过addTotalsupply来增加代币的数量，调用addTotalsupply方法时会被记录在合约的事件（event）里面，被永久保存在区块链中。部署合约的人为合约的所有人。

  所有人可以通过setAdministrators方法，增加几个备用的管理员账户，管理员账户和所有者一样有操控合约的最高权限。调用setAdministrators方法时会被记录在合约的事件（event）里面。

  管理员可以通过addDepartment方法，给相关部门进行身份认证，再将代币转账给相关部门，之后，相关部门就可以按照加分要求将代币转账给学生，以此给学生加学分，学生账户代币数量的多少对应为学生学分的多少。调用addDepartment方法时会被记录在合约的事件（event）里面。

  合约里面规定了只有合约创建者、管理员以及相关部门才能进行转账，也就是只有经过认证的部门才能给学生加学分，并且学生不能将学分转赠给其他人。每次转账也就是每次加学分的时候，都会被event记录下来。

  任何人都可以进行账户余额的查询，这样学分的信息就会公开透明，学生能够知晓学分的多少，以及加分的理由。

 

 

####    3.2毕业证书合约

  学校部署毕业证书合约时会自动初始化赋值：学校的名称和学生的学位。（例如：清华大学、硕士研究生）

  将ERC721代币中唯一的TokenId和学生的信息绑定在一起，生成了唯一的毕业证书。

  调用totalSupply方法可以查询到这个学校颁发的证书数量。

  调用name和symbol方法查询到学校的名字和证书的类型。

  管理员通过调用addItem方法来给学生颁发毕业证书，往方法里面传入的参数为学生的基本信息（如：姓名，性别，出生日期，入学时间，毕业时间，学院，学位），生成的证书会打上时间戳。调用addItem方法时会被记录在合约的事件（event）里面。

  调用getItem方法，可以通过tokenId（即证书标号）查询到证书的详细信息。

  证书的所有者可以通过burn方法来销毁自己的证书。

  调用balanceOf方法，可以查询学生在这个学校所拥有的证书数量。

  调用ownerOf方法通过tokenId（即证书标号）查询到证书的所有人。

  调用tokenURI方法可以通过证书编号查询到证书所有人的名字。

  调用tokenOfOwnerByIndex方法可以通过证书所有人地址和证书在这个所有人账户上的编号来查询到证书的编号。

 

 

#### 3.3比赛奖牌合约

比赛方部署比赛奖牌合约时初始化赋值：比赛名称和奖牌的种类。（例如：2019届国才杯、金牌）

  将ERC721代币中唯一的TokenId和获奖学生的信息绑定在一起，生成了唯一的奖牌。

  调用totalSupply方法可以查询到这个此次比赛颁发的奖牌数量。

  调用name和symbol方法查询比赛名称和奖牌的种类。

  管理员通过调用addItem方法来给学生颁发奖牌，往方法里面传入的参数为获奖学生的基本信息（如：学生姓名，学生性别，学生学号，比赛种类，学生的账户地址），生成的证书会打上时间戳。调用addItem方法时会被记录在合约的事件（event）里面。

  调用getItem方法，可以通过tokenId（即奖牌编号）查询到证书的详细信息。

  证书的所有者可以通过burn方法来销毁自己的证书。

  调用balanceOf方法，可以查询学生在这次比赛中获得的此类奖牌的数量。

  调用ownerOf方法通过tokenId（即奖牌编号）查询到奖牌的所有人。

  调用tokenURI方法可以通过奖牌编号查询到奖牌所有人的名字。

  调用tokenOfOwnerByIndex方法可以通过奖牌所有人地址和奖牌在这个所有人账户上的编号来查询到奖牌的编号。

 

使用的时候，根据奖项的种类部署相应的合约。

比如根据金牌、银牌、铜牌、潜力奖来部署金牌、银牌、铜牌、潜力奖的合约。

 



###  4.内容架构 

内容架构由用户层、应用层、合约层、网络层和数据层组成。

![image-20210104110735190](https://i.loli.net/2021/01/04/hxbNjKl4AmyIk72.png)

#### 4.1用户层

区块链技术通过密码学及共识算法解决了链上数据的信任问题，其中身份权限问题可通过数字身份解决。数字身份模块负责合约各参与方的身份管理和身份认证，确认用户对资源的访问、操作权限，保障合约访问控制策略的可靠运行。数字身份模块包括管理人员准入和访问控制功能组件。

##### （1）管理人员准入

为保证合约管理人员行为所属人可追溯，管理人员身份与实体身份一一对应，做到管理人员行为所属人可追溯。

##### （2）访问控制

权限控制功能组件是合约安全的重要部分，功能包括用户身份管理、用户角色管理和权限配置。按操控资源的权限不同定义多个角色，按角色授权不同用户操控资源的权限及安全规则，使用户只能在有限范围内进行写入、读取和使用数据资源，而在其读取范围外的数据则会进行加密保护。

 合约的参与成员之间权限、职责、资源、合作形式都形成共识，在彼此信任的平台上，实现授权管理、授权部门、发放代币和扣除代币等业务。保证各个业务操作都清晰明确。

###### a.权限控制模型

学分认证合约建议使用RPI（Role-Permission-Interface）权限控制模型①，设置角色、权限、接口四类对象。

账号和角色的对应关系是1:N，一个账号能对应多个角色，每个账号使用独立且拥有唯一的公私钥对，发起交易时使用私钥进行签名，实现交易的可控及后续监管的追溯。

权限的大小按照普通用户、相关部门、系统管理员及所有者递增。用户只能调用该权限下合约的接口

###### b.角色和权限设计

①合约所有者 拥有认证管理人员和相关部门的权限。拥有发放和销毁令牌的权限，并且能自主增发令牌。拥有查看每笔交易和查看身份的权限，一般只参与授权，不参与运作管理

②管理员 权力等同于合约所有者

③相关部门 拥有发放和销毁令牌的权限，但是不能自主增发令牌。不参与授权、参与运作管理

④普通用户 拥有查看每笔交易和查看身份的权限，不参与授权、不参与运作管理

 

#### 4.2应用层

##### 4.2.1主要功能组件

##### （1）业务引擎 

业务引擎功能组件负责向各参与方包括业务查询服务。

业务查询为各参与方提供转账记录查询，销毁记录查询，授权记录查询，用户余额查询，授权信息查询。可通过账户地址查询用户余额，授权信息。

##### （2）权限配置 

权限配置功能组件为相关合约方法配置操作权限，只有授权用户才能够操作相关方法。

##### （3）服务模块的工作思路

一旦进行了交易，交易的内容将被永久保存，为后续审核，溯源、评价等提供基础依据。

##### 4.2.3服务模块的用途

##### （1）信息溯源 

合约的事件中记录了相关人员的信息，可以通过事件来获取当时的用户交易信息。

##### （2）事故定责

如果相关部门操作失误，或者没有履行变动学分的责任，可以通过信息溯源追责相关负责人，对信息进行纠正。

 

#### 4.3合约层

##### 4.3.1 合约服务模块

智能合约是一种可自动执行的数字化协议，可按照预设合约条款自动执行。智能合约实现身份认证、配置管理、权限管理等功能。合约所有者在部署时生效。

##### 4.3.2 合约访问接口

合约访问接口为应用层发起的查询、交易、配置和监控等操作提供接口服务。

##### 4.3.3合约安全

区块链具有不可篡改的特点，智能合约一旦发布极难修改，合约的安全决定了程序的安全。

智能合约本质上是代码程序，难免会有考虑缺失导致的漏洞。合约安全威胁主要包括可重入攻击、调用深度攻击、交易顺序依赖攻击、整数溢出攻击等。为保障智能合约的安全，应保证开发安全和全面的安全审计。

##### （1）安全开发 

智能合约安全开发包括开发工具、编译工具及安全编程规范等方面的保障。 

a.智能合约应采用规范的工具进行开发和编译，使用安全统一的编译器选项，以便保证编译器所提供的最新的安全保护机制。

b.智能合约的编写应基于严格的安全编程规范。常见的安全编码规范包括弃用一些存在注入或内存破坏危险的第三方函数，采用智能合约的checks-effects-interactions原则进行合约编写等。

c.在智能合约编码中尽可能少地暴露被外部调用的接口。建议采用进程间隔离的技术将智能合约进程与系统隔离，通过socket通信方式远程调用智能合约。

##### （2）安全审计 

在发布智能合约之前，做好全面的安全审计工作，有效防范已知风险。第一，选择对应的虚拟机语言扫描工具对合约代码进行静态扫描，扫描事先建模的漏洞类型；第二，为了避免静态扫描可能产生误报的情况，应邀请安全专家进行交互式代码审计，避免重入攻击、未授权访问攻击、Solidity开发安全等。

##### （3）安全测试 

智能合约部署前必须经过大量的测试，在模拟环境中对智能合约进行攻击测试，挖掘可被利用的漏洞。



#### 4.4网络层

​		区块链的信息传播采用P2P网络，P2P网络是分布式自组织网络，依赖附近的节点来进行信息传输，需要互相暴露对方的IP，若网络中存在一个攻击者，就很容易给其他节点带来安全威胁。针对P2P网络的攻击有日食攻击、窃听攻击、BGP劫持攻击、节点客户端漏洞、拒绝服务攻击等。
P2P网络安全应做到以下几方面：
​		a.在网络传输过程中，使用可靠的加密算法进行传输，防止恶意攻击者对节点网络进行流量窃取或劫持。如开启 JSONRPC 的节点强制使用 HTTPS 传输，而不是 HTTP 协议。
​		b.加强对网络中传输数据的有效性、合理性、安全性进行验证，防止出现整数溢出等情况导致出现数据错误。
​		c.加强节点网络安全性。对重要操作和信息客户端节点做必要的验证。



#### 4.5数据层

​		区块数据是分布在多个节点上的链式结构数据，单一或少部分节点的区块数据篡改不会影响整个区块链的运行。区块链的数据安全风险主要包括：利用数据不可删除的特性进行恶意信息攻击，利用大量垃圾信息进行资源滥用攻击。
针对以上风险，采用多层次的安全保障机制实现数据安全，包括权限控制、数据加密和隐私保护。
（1）权限控制
结合角色设计和权限控制，实现对数据读写权限的过滤，有权力的用户才能操控合约。可对系统资源采用最小权限原则来进行权限管理。
（2）数据加密
加密算法保证区块链的安全和不可篡改性。采用算法复杂度较高的对称加密、非对称加密算法，用密码信封完成加密数据分享。
（3）隐私保护
采用承诺系统、零知识证明、同态加密等方式规避隐私暴露。



### 5.代码

#### 5.1ERC721类不可替代性代币

不可替代性奖牌：

1. 将tokenId作为映射medals的键，将medal即获奖学生数据作为映射medals的值，从而将获奖学生信息与唯一的奖牌进行绑定。

```solidity
	struct medal {
        string _matchTpye;
        string _studentName;
        string _studenNum;
        uint32 _awardTime;
    }
    mapping(uint256 => medal ) public medals;

    /*1.新增奖牌*/
    function addItem(
        address player, string memory tokenURI,
        string memory matchTpye,string memory studentName,
        string memory studenNum
        )
        public onlyHost
        returns (uint256)
    {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);
        
        medals[newItemId]._matchTpye = matchTpye;
        medals[newItemId]._studentName = studentName;
        medals[newItemId]._studenNum = studenNum;
        medals[newItemId]._awardTime = uint32(block.timestamp);

        return newItemId;
    }
```

2.权限

只有合约所有人才能颁发不可替代性的奖牌。

```solidity
    modifier onlyHost {
        require(msg.sender == _host,"不是合约所有者无法操作");
        _;
    }
```

只有不可替代性的奖牌的所有人才能销毁奖牌。

```solidity
    function burn(uint256 tokenId) public returns(bool _bool) {
        require(_isOwner(_msgSender(), tokenId), "ERC721: 令牌只能被所有者销毁");
        _burn(tokenId);
        medals[tokenId]._matchTpye = "";
        medals[tokenId]._studentName = "";
        medals[tokenId]._studenNum = "";
        medals[tokenId]._awardTime = 0;

        return _bool;
    }
```

---------------------

不可替代性证书：

1.将tokenId作为映射certificates的键，将certificate即毕业学生数据作为映射certificates的值，从而将毕业学生信息与不可替代性证书进行绑定。

```solidity
    struct certificate {
        string _studenSex;
        string _studenBirthday;
        string _beginTime;
        string _endTime;
        string _academy;
        string _title;
        uint32 _timestamp;
    }

    mapping(uint256 => certificate ) public certificates;

    /*1.新增证书*/
    function addItem(
        address player, string memory tokenURI,
        string memory studenSex,
        string memory studenBirthday,
        string memory beginTime,
        string memory endTime,
        string memory academy,string memory title
        )
        public onlyHost
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);
        
        certificates[newItemId]._studenSex = studenSex;
        certificates[newItemId]._studenBirthday = studenBirthday;
        certificates[newItemId]._beginTime = beginTime;
        certificates[newItemId]._endTime = endTime;
        certificates[newItemId]._academy = academy;
        certificates[newItemId]._title = title;
        certificates[newItemId]._timestamp= uint32(block.timestamp);

        return newItemId;
    }
```

2.权限

只有合约所有人才能颁发不可替代性的证书。

```solidity
    modifier onlyHost {
        require(msg.sender == _host,"不是合约所有者无法操作");
        _;
    }
```

只有不可替代性的证书的所有人才能销毁证书。

```solidity
    /*3.销毁证书*/
    function burn(uint256 tokenId) public returns(bool _bool) {
        require(_isOwner(_msgSender(), tokenId), "ERC721: 证书只能被所有者销毁");
        _burn(tokenId);
        certificates[tokenId]._studenSex = "";
        certificates[tokenId]._studenBirthday = "";
        certificates[tokenId]._beginTime = "";
        certificates[tokenId]._endTime = "";        
        certificates[tokenId]._academy = "";
        certificates[tokenId]._timestamp = 0;
      
        return _bool;
    }
```

-------

#### 5.2ERC20类可替代性代币

1.部署合约的人为合约所有者，管理员和相关部门的数据结构均是映射类型

```solidity
    address private _owner;
    mapping (address => bool) public administrators;
    mapping (address => department) public departments;
    struct department {
        string departmentName;
        bool departmentTF;
    }
    
    constructor (string memory name_, string memory symbol_) public {
        _name = name_;
        _symbol = symbol_;
        _decimals = 1;
        _owner = msg.sender;
    }
```

2.授权操作

普通用户不能进行授权操作，只有是合约所有人才能设置管理员，授权操作将被记录到事件当中

普通用户不能进行授权操作，只有是合约所有人或者管理员才能设置相关部门，授权操作将被记录到事件当中

```solidity
    function setDepartment(address _departAdd,string memory _departName,bool _bool) public {
        require(administrators[msg.sender] == true || _owner == msg.sender, "ERC20: 非管理员或者所有者，您没有权限设置部门");        
        departments[_departAdd].departmentName = _departName;
        departments[_departAdd].departmentTF = _bool;
        emit SetPermissions(msg.sender,_departAdd,uint32(block.timestamp));
    }
    
    
    function setAdministrators(address _AdminAdd,bool _bool) public {
        require(_owner == msg.sender, "ERC20: 非所有者，您没有权限设置管理员");        
        administrators[_AdminAdd] = _bool;
        emit SetPermissions(msg.sender,_AdminAdd,uint32(block.timestamp));
    }
```

3.加分扣分操作

普通用户不能进行转账和销毁操作，只有是合约所有人、管理员或者是相关部门才能设置进行转账和销毁来进行加分或者扣分，转账或者销毁的操作将被记录到事件当中

```solidity
    function _transfer(address sender, address recipient, uint256 amount, string memory reason) internal virtual {
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(
            departments[sender].departmentTF == true ||
            administrators[sender] == true ||
            _owner == sender, 
            "ERC20: 非相关部门，您没有权限转账");
        require(recipient != address(0), "ERC20: transfer to the zero address");
        _beforeTokenTransfer(sender, recipient, amount);
        _balances[sender] = _balances[sender].sub(amount, "ERC20: 转账金额超过余额");
        _balances[recipient] = _balances[recipient].add(amount);
        emit Transfer(sender, recipient, amount, reason);
    }
    
        function _burn(address sender,address account, uint256 amount,string memory reason) internal virtual {
        require(
            departments[sender].departmentTF == true ||
            administrators[sender] == true ||
            _owner == sender, 
            "ERC20: 非相关部门，您没有权限销毁");       
        require(account != address(0), "ERC20: burn from the zero address");
        _beforeTokenTransfer(account, address(0), amount);
        _balances[account] = _balances[account].sub(amount, "ERC20: 销毁金额超过余额");
        _totalSupply = _totalSupply.sub(amount);
        emit Burn(sender,account, amount,reason);
    }
    
```

4.增发代币

普通用户不能进行增发代币操作，只有是合约所有人才能设置管理员，授权操作将被记录到事件当中

```solidity
    function addTotalSupply(uint256 amount) public returns(bool){
        require(
            administrators[_msgSender()] == true ||
            _owner == _msgSender(), 
            "ERC20: 非管理员，您没有权利增加代币");          
        _mint(_msgSender(),amount);
        return true;
    }

    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");
        _beforeTokenTransfer(address(0), account, amount);
        _totalSupply = _totalSupply.add(amount);
        _balances[account] = _balances[account].add(amount);
        emit Add(address(0), account, amount,"增加代币");
    }
```

### 6.前端界面展示

1.毕业证书

![image-20210104203447612](https://i.loli.net/2021/01/04/Bxlt5GJwSrvUkYO.png)

![image-20210104203554985](https://i.loli.net/2021/01/04/L8A7KPdqpETSyaD.png)-

2.比赛奖牌

![image-20210104204753907](https://i.loli.net/2021/01/04/bpYGEjsgv3kyImz.png)

![image-20210104210735648](https://i.loli.net/2021/01/04/WV5cCqIDjhe7B3Q.png)

3.学分认证

![image-20210104200841869](https://i.loli.net/2021/01/04/hP6aLefORzpCsQ5.png)



![image-20210104200955258](https://i.loli.net/2021/01/04/q2aPk93sBRCVwH5.png)

![image-20210104201008589](https://i.loli.net/2021/01/04/m3p1ldXG9KbiosJ.png)