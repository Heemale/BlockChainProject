 

 

 

 

 

# BlockChainProject



***基于区块链的成绩认证***



![区块链技术支持的K-12系统框架中的远程教育过程](https://i.loli.net/2020/12/07/vEeDjFS9RTIwU68.jpg)



前言

1.1成绩认证的现状

1.2.1区块链技术与成绩认证的匹配度分析

1.2.2区块链技术与成绩认证的应用案例

1.2.3成绩认证+区块链面临的挑战

1.3方案设计

  1.3.1总体设计

  1.3.2业务设计

  1.3.3主要功能

  1.3.4架构设计

1.4关键技术及方法

  1.4.1合约内容

  1.4.2后端技术

4.内容架构 

​	4.1应用层

​		4.1.1数字身份模块

​		（1）管理人员准入

​		（2）访问控制

​		4.1.2服务模块

​		（1）主要功能组件 

​		（2）服务模块的工作思路

​		（3）服务模块的用途

​	4.2安全模块

​		4.2.1合约安全

​		（1）安全开发 

​		（2）安全审计 

​		（3）安全测试 







### 前言

​	区块链作为继大数据、云计算、人工智能、虚拟现实、5G等技术后又一项对未来信息化发展产生重大影响的新兴技术，有望推动人类从信息互联网时代步入价值互联网时代，在全球科技创新和产业变革中的重要作用日趋突显。区块链技术应用已延伸到数字金融、物联网、智能制造、供应链管理、数字资产交易等多个领域。全球主要国家都在加快布局区块链技术发展，我国也将区块链提升到核心技术自主创新重要突破口的国家战略高度。中共中央政治局2019年10月24日就区块链技术发展现状和趋势进行第十八次集体学习。习近平总书记在主持学习时强调，区块链技术的集成应用在新的技术革新和产业变革中起着重要作用。我们要把区块链作为核心技术自主创新的重要突破口，明确主攻方向，加大投入力度，着力攻克一批关键核心技术，加快推动区块链技术和产业创新发展。随后，各地陆续颁布与区块链相关政策文件，“区块链+”成为众多行业和地区重点扶植领域。

​	目前，区块链技术在成绩认证领域的应用仍处于探索和起步阶段。我国成绩认证具有服务部门多、内容量大、使用环节多、覆盖用户多等突出特点，利用区块链去中心化、互信任、防篡改、可追溯的特点来实现学校、学生、用人单位、培训机构，比赛单位等多方参与、资源共享、数据可信、成本节约、安全监督具有重要而迫切的现实意义和广阔的应用前景

​	有必要找准制约成绩认证的难点、痛点问题，结合区块链技术特点和支撑能力，分析适合我国成绩认证的框架结构和应用领域，提出我国区块链+成绩认证的推进思路，为教育用人行业转型升级注入新动能、激发新活力，加快培养高素质人才。

​	本文档，面向成绩认证领域现状和技术现状，深入分析了当前阶段成绩认证面临的造假、步骤繁琐等痛点，结合区块链技术优势提出了基于区块链的成绩认证业务流程，并分析了该方案在学校育人、企业用人方面的应用扩展。

![image-20201207215310296](https://i.loli.net/2020/12/07/bKeLFsfSOJUwCTo.png)

充分接受知识，简化管理，创造更多通过游戏化和奖励来学习的激励措施是拥抱区块链技术的教育机构的成就。为了在竞争激烈的环境中生存，学校，学院和大学必须迈出创新和整合区块链的第一步。

正如人工智能，物联网和扩展现实等其他新兴技术一样，区块链技术也不断突破界限，并推出了跨行业的解决方案，这些解决方案超出了其最初的金融和加密货币关注范围。它的主要优势是可以分散存储的功能，存储信息的不变性，可追溯性和透明性。

这些优势不属于促进安全交易的范围，而是允许创建复杂的生态系统，使用户可以公开协作，交换数据，参与协议，并且可以通过获得加密货币的奖励来获得更好的结果。由于传统的教育模式效率低下，证书和教育记录的访问受限以及笔录的有效性，教育是正在发展壮大但仍面临挑战的顶级行业之一，这些问题可以通过基于区块链的软件轻松解决。

区块链通过在分散的分类账中存储和提供通用的凭证访问权限，通过智能合约优化教育流程以及激励学生学习加密货币奖励来应对这些挑战。请继续阅读以了解更多有关在教育中引入区块链如何带来确定利益的信息。

#### 什么是区块链？

简单来说，区块链是一种点对点的分布式账本，用于存储信息并跟踪交易。区块链社区的每个成员都有自己的信息副本。随后将信息记录到称为块的单元中，并通过强大的加密技术进行保护，从而创建数据链。区块链系统架构不允许更改块，因此每个动作和事件都可以追溯到其起源。

区块链可以存储有关各方之间的协议，其凭证，交易以及以数字形式呈现的任何其他信息的数据。由于此信息是分布式且高度安全的，因此任何欺诈活动的尝试都可以被区块链社区的成员看到。这为区块链集成到的任何类型的生态系统创建了信任和透明性。

 

![img](https://i.loli.net/2020/12/07/OAHP6MLSvltEeNu.png)

 

#### 区块链如何工作？

区块链是一个平台，可确保所存储信息的完整性并维持生态系统成员之间的交互。以下是其工作方式的高级概述：

1.每个成员都维护自己的区块链节点，其中包含附加到网络的所有事件和数据的完整历史记录，包括凭证，身份，证书等。

2.网络的每次更新都需要在链的末尾创建一个新块。区块链协议规定了如何记录，验证和分发这些块。

3.采用共识机制来验证每个创建的区块，区块链网络的成员将决定是否将其添加到链中。

4.一旦创建并确认了一个块，就无法将其撤销。区块链上的所有条目都是永久且安全地存储的。这允许社区成员跟踪交易的完整历史记录以及区块链中的任何其他修改。

5.智能合约是网络成员之间已编程了条件的一种特殊类型的协议，可确保在各方收到协议之前，它们都已得到满足。智能合约消除了第三方和中间人参与协议解决的需要。

6.加密货币交易在区块链生态系统中发挥着非常重要的作用，激励社区的所有成员做出宝贵的贡献并参与整个系统的开发。

区块链技术的这些关键支柱为其在包括教育在内的不同行业中使用奠定了基础。它有可能创造一个全球环境，使学习材料，出版物，学生学分和成绩单易于获得。它还可以为问责，激励以及教师，学生和其他参与者之间的交流引入新的创新方式。

 

 

 

### 1.2.1区块链技术与成绩认证的匹配度分析

教育行业面临的挑战已经拖了多年。这包括低效的基于纸张的记录保存流程，缺乏透明度，不良的学生和老师问责制，没有真正动机促使学生学习和在课堂上表现良好，以及由于伪造而对教育功绩和学位缺乏信任。区块链有能力通过提供以下详细描述的切实解决方案来影响教育并应对这些挑战。

![一个人拿着一个带有文件的文件夹来解决教育行业的挑战](https://i.loli.net/2020/12/07/8lk7hHQ5xOPUpVg.jpg)

#####   1.增强和透明的记录保存

  使用不可变的区块链存储，注册服务商的学校办公室只需创建一次学生记录。此后，教育系统的所有参与者都可以使用它，甚至可以在各个机构之间共享它。每个任务，任务，参加学校和课外活动都作为块附加到学生的数字记录中，并在学生的个人资料中查看。因此，教师，辅导员和学校管理人员对学生的学习过程有鸟瞰图。

  除了维护学生记录外，区块链系统还可用于监督和促进学校，学院和大学的认证，保护知识产权并消除文凭和成绩单的伪造。基于区块链的教育记录可以轻松访问并快速转移到其他机构和组织，包括潜在的雇主。

  学生要做的就是共享一个链接或他们的数字地址，以访问他们的个人资料。这种类型的系统可确保凭据和学生记录的完全真实性，因为带有签名的完整更改历史记录存储在区块链上。

 

#####   2.智能合约推动的学生问责制

教师可以使用区块链智能合约与学生就完成任务达成数字协议。协议中详细说明了所有作业要求，包括说明，条件，截止日期和截止日期。学生完成任务并满足协议中的所有条款后，可以自动授予他们访问课程下一部分的权限，或获得学分和结业证书。

  最终，智能合约可以在传统教室设置中提供个性化学习中发挥重要作用，并且还可以创建传统教育系统中缺少的激励因素。

 

#####   3.激励学生和老师取得更大的成就

  加密货币和令牌化学分可用于创建有效的奖励系统，以激励学生，并通过创建新的学习材料和参与研究来鼓励教师为教育过程做出贡献。可以对智能合约进行编程，以针对完成的任务以加密货币颁发奖励。通过向表现优异的人给予特别的奖励，教师将能够进一步激励学生。

  最终，区块链技术可以充分利用现代教育中的游戏化元素，并将其提升到一个新的水平。代币化的学分可用于偿还学生贷款，购买学校用品，学习材料以及支付其他教育费用。完成某些专业并获得大学文凭的奖励可以大大减少在没有完成大学意愿的情况下辍学的学生人数。

 

#####   4.学习成绩跟踪和个性化

  归功于区块链数据存储提供的透明性，教育者拥有更多可用于监视和控制学生表现的资源。在使用智能合约及其输出作为确定学生苦苦挣扎的工具的同时，学校可以提供完全定制的学习环境。整个学区的机构都可以访问记录在区块链上的学生成绩数据，并用于改善教育实践。

  在全球范围内，这种系统可以汇总地区、省和国家/地区级别的绩效统计信息，并提高学校，学院和大学之间的健康竞争，其最终目标是提供最佳的教育水平。

 

#####   5.介绍可验证的终身学生成绩单

  我们所有人都经历了从教育机构获取成绩单的麻烦。这是一个非常耗时的过程，涉及多个方面来验证凭据并编制完整的学术记录。区块链可以在需要时为学生提供在线数字成绩单。这份可核实的学生终生成绩单可以包含有关所有教育成就的信息，并简化凭据验证，从而使学生在学校之间的转学更加容易。

 

#####   6.为学生提供教育成就档案袋

一个教育性的区块链平台可以允许学生创建自己的数字档案袋，以存储他们所有的教育价值，例如：

 

​	1.获得专业/副修及学位

​	2.经实践证明的能力

​	3.完成的课程证书

​	4.取得成就的微证书

​	5.额外的学分和奖励

​	6.测试成绩和出勤记录。

可以公开共享该档案袋，以证明学生有大学录取的资格，或者由寻找工作机会的学生发送给雇主。最终，可以建立一个潜在候选人的通用数据库，并且公司可以寻找表现最好的学生，从而为在学校取得更好的表现提供了更多的动力。

 

![img](https://i.loli.net/2020/12/07/v1ltbph4HBFGgDq.png)

 

 

### 1.2.2区块链技术与成绩认证的应用案例

区块链应用在教育领域仍然很少，主要是因为它们与金融科技解决方案和加密货币的发展紧密相关。但是，许多创新型初创公司和全球公司开始向全球学校提供区块链支持的教育服务。以下是一些具体示例。

![一个人介绍了基于智能合约协议的教育区块链解决方案](https://i.loli.net/2020/12/07/2dR7z6Pkq3lb5gO.jpg)

###  

##### 区块证书：教育证书管理

[Blockcerts](https://www.blockcerts.org/)是一个开放标准的平台，用于存储和验证数字证书（包括成绩单和证书）。它的区块链网络可以存储从文凭到转移记录到成绩分数的任何内容。这将创建一个通用的生态系统，用于创建，发布，查看和验证有关学生的学术历史的信息。使用该平台，大学可以确保学生记录的可信度，同时潜在的雇主可以查看整个学生档案，包括他们的奖励和成就，并对候选人的优势，能力，知识和经验有更好的了解。

##### APPII：简历制作人向雇主展示经过验证的教育功绩

[APPII](https://appii.io/)是职业经历验证者和招聘平台。候选人可以通过增加学历，学历，成就和经验轻松制作简历。区块链网络用于通过与教育机构共享来验证候选人的学历。机器学习还用于将简历中提供的所有数据与需要相应技能的工作机会进行匹配。由于该信息已通过区块链技术和密码学进行验证和保护，因此雇主对候选人的知识和经验更加信任。

##### ODEM：教育产品和服务市场

[ODEM](https://odem.cloud/)是基于区块链的在线教育平台，提供可负担得起的学习课程，可以根据学生的喜好进行定制。学生可以直接与学术专业人士交流，并商定最佳的学习体验。该平台使用具有区块链功能的支付系统和智能合约来激励和奖励学生的学习努力，并激励教师也开设更好的课程。学生获得的所有证书都安全地存储在区块链上。因此，可以轻松地在社交媒体上访问和共享它们，或在数字CV中作为证明提供它们。

##### 索尼全球教育：数字笔录管理

[索尼全球教育部](https://blockchain.sonyged.com/)允许多个教育机构在分布式分类帐中共享其学生的成就。区块链网络充当每个学生终生数字笔录的存储，以后可以在大学之间进行转移时使用。索尼的意图是进一步开发平台，并为下一代教育生态系统构建基础设施，在该生态系统中，师生双方都可以合作并获得加密货币的奖励。

##### BitDegree：具有游戏化体验的在线教育平台

[BitDegree](https://www.bitdegree.org/)提供有关软件和技术的在线课程。鼓励学生使用代币奖学金来学习。该平台具有一个游戏化的环境，可以为每个学习者分配一个角色，并通过完成任务来导航虚拟世界。在学习和完成课程方面取得显著成就将获得他们的奖励和认可，这些潜在的雇主也在平台上注册。所有学术证书都存储在区块链上，并累积在学生的个人资料中。希望以崭新的眼光聘请新技术专家的公司可以跟踪学生的学习进度，并为最合适的候选人提供他们的团队一席之地。

##### 学科：个性化学习管理系统

[Disciplina](http://disciplina.ru/)使用区块链技术来跟踪学生的学习进度。根据学生在课堂上的表现，参加课外活动和其他成就的程度为每个学生分配分数。在平台上注册的学校和学院使用这些分数来个性化学习过程并为每门课程制定特殊计划。Disciplina还旨在简化学生与教师之间的交流，并引入方便的工具进行评估，评分和评论。招聘机构和雇主也可以在平台上注册以找到潜在的候选人。

 

 

 

 

 

 

### 1.2.3成绩认证+区块链面临的挑战 

尽管采用区块链技术在教育领域的优势显而易见，但不愿进行革命性变革的教育工作者对此犹豫不决。这并不奇怪，因为在机构面前出现了许多明显的挑战，这些挑战使他们无法从其旧版软件解决方案过渡。

![一个人在完成教育过程中面临挑战](https://i.loli.net/2020/12/07/IlBXTCogfZdhkru.jpg)

现在已根植于大多数教育系统中的**传统解决方案**可能成为采用区块链的强大障碍。许多学校依靠离线文档管理系统和学生信息系统来记录和存储教育资料。机构已投入大量资金来创建基础结构和设置此软件，并将其集成到他们的流程中。更不用说，工作人员已经接受过操作这些系统的培训，因此他们很难过渡到分散式解决方案。

**区块链的可扩展性**是阻碍其融入教育等多元化和大规模生态系统的主要原因之一。向区块链添加的数据块越多，工作速度就越慢，因为开始花费更多时间来分析所有数据历史记录。当然，如今分布式账本技术正在变得更具可扩展性，发明了提高交易处理速度的新方法，但是许多潜在的区块链用户宁愿不等待，而是坚持熟悉的理由。

**高初始成本**是区块链在教育领域缓慢增长的另一个主要原因，因为教育部门中很少有决策者对区块链是什么以及如何使整个系统受益有清晰的认识。他们看到的是成本：更改环境，建立基础架构的成本，区块链开发本身的成本以及员工的区块链培训。从长远来看，很难预见区块链集成的实际财务收益，包括减少管理，记录保存以及通过引入加密支付和奖励而获得的额外收益。

教育是发展扎根的地方。正是由于这个原因，该部门必须是最先进的，教育者必须不断地寻求创新。区块链有望对教育产生深远影响，带来透明，优化和简化普通流程等优势。它增强了记录保存能力，并为学生学习和掌握新技能提供了更强大的动力。

 

 

### 1.3.2业务设计

#### 1.3.2.1业务流程

##### 业务流程1：（毕业证书）

基于区块链的可信毕业证书用于高校给学生发放区块链毕业证书，以取代纸质证照，并通过区块链保存不可篡改的发证、查证记录，使各参与主体共同建造、共同维护、共同监督，从而满足各参与主体的监督权、增强毕业证书的客观性与可信度。

从业务功能上来说，可信区块链毕业证书应用包括登记、发证、查验几个环节，
如图1-2所示。

登记环节由学生在高校网站指定页面将账户地址提交给学校，完成实名登记，申请区块链毕业证书；

发证环节由学生完成毕业论文达到毕业条件时，由学校发放区块链毕业证书；

查验环节由学生向雇主提供指向的数字文凭的链接，雇主在区块链对证书进行查询，验证证书的真伪。

1.登记

实现区块链毕业证书所有者的申请工作。学生根据个人在高校网站指定页面将账户地址提交给学校，完成实名登记、申请区块链毕业证书的业务。

2.发证

实现学生区块链毕业证书的发放。学生完成毕业论文达到毕业条件时，由学校发放区块链毕业证书。

具体流程如下：

（1）学校为学生申请一个唯一标识（证书ID）

（2）学校将学生信息将唯一标识绑定在一起，区块链完成共识过程，实现个人证书的记账、生成基于区块链的唯一性的证书。

3.查验

雇主通过区块链对学生证书的真伪性进行确认。

流程如下：

（1）学生向雇主提供指向的数字文凭的链接。

（2）雇主在区块链对毕业证书进行查询，验证毕业证书是否为高校官方所发放。

学生---address--->学校---token--->学生---address--->雇主---address--->contract--->ture

--------------------------------------------------------------------------------------------------
##### 业务流程2：（学分认证）缺扣分

基于区块链的学分认证用于高校给学生进行学分认证，通过区块链保存不可篡改的加分、扣分记录，使学校，学生共同建造、共同维护、共同监督，从而满足学生的知情权和监督权、增强学分认证的客观性与可信度。

从业务功能上来说，包含以下几个步骤：

（1）高校创建合约之后，可以增加几个备用的管理员账户，这几个管理员账户和所有人一样拥有操控合约的最高权限，添加管理员的操作将记录到合约的事件当中。

（2）管理员对相关部门进行登记、认证，添加相关部门的操作将记录到合约的事件当中。经过认证之后相关部门就可以对学生的学分进行增加和扣除的处理，但是相应的操作都会被记录到合约的时间当中。

（3）学生完成了指定的任务，达到了添加学分的条件，相关部门将scoreCoin奖励给学生（相关部门将scoreCoin发送到学生的账户上），并且将此操作记录到合约的事件当中，学生可以立即查询到scoreCoin的余额和加分的数值和原因。

（4）学生违反了某些规定，触发了扣分的条件，相关部门将scoreCoin从学生账户上扣除，并且将此操作记录到合约的事件当中，学生可以立即查询到scoreCoin的余额和扣分的数值和原因。

--------------------------------------------------------------------------------------------------
##### 业务流程3：（比赛奖牌）

基于区块链的比赛令牌用于比赛主办方给学生进行比赛成绩认证，通过区块链颁发不可替代性的代币，增强比赛奖牌的客观性与可信度。

从业务功能上来说，包含以下几个步骤：

（1）比赛主办方创建合约，定下，比赛的名字、奖牌的类型。

（2）比赛结束之后，评选出名次之后，获奖学生将自己的个人账户上报给比赛方，比赛主办方为学生申请一个唯一标识（奖牌ID），并将将学生信息将唯一标识绑定在一起，区块链完成共识过程，实现个人奖牌的记账、生成基于区块链的唯一性的获奖令牌。

（3）学生或者雇主可以通过奖牌的ID和比赛合约的地址查询到奖牌的信息。

（4）只有学生本人可以对奖牌进行销毁。



 

### 1.4关键技术及方法

####    1.4.1.1统计学分合约

  学校部署统计学分合约，生成合约实例之后，会初始化得到一些代币，代币的多少对应为学分的多少，如果代币数量不足，可以通过addTotalsupply来增加代币的数量，调用addTotalsupply方法时会被记录在合约的事件（event）里面，被永久保存在区块链中。部署合约的人为合约的所有人。

  所有人可以通过setAdministrators方法，增加几个备用的管理员账户，管理员账户和所有者一样有操控合约的最高权限。调用setAdministrators方法时会被记录在合约的事件（event）里面。

  管理员可以通过addDepartment方法，给相关部门进行身份认证，再将代币转账给相关部门，之后，相关部门就可以按照加分要求将代币转账给学生，以此给学生加学分，学生账户代币数量的多少对应为学生学分的多少。调用addDepartment方法时会被记录在合约的事件（event）里面。

  合约里面规定了只有合约创建者、管理员以及相关部门才能进行转账，也就是只有经过认证的部门才能给学生加学分，并且学生不能将学分转赠给其他人。每次转账也就是每次加学分的时候，都会被event记录下来。

  任何人都可以进行账户余额的查询，这样学分的信息就会公开透明，学生能够知晓学分的多少，以及加分的理由。

 

 

####    1.4.1.2毕业证书合约

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

 

 

#### 1.4.1.3比赛奖牌合约

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

内容架构由应用层、服务层、核心层、基础层和安全机制组成，

#### 4.1应用层

#### 4.1.1数字身份模块：

区块链技术通过密码学及共识算法解决了链上数据的信任问题，其中身份权限问题可通过数字身份解决。数字身份模块负责合约各参与方的身份管理和身份认证，确认用户对资源的访问、操作权限，保障合约访问控制策略的可靠运行。数字身份模块包括管理人员准入和访问控制功能组件。

##### （1）管理人员准入：

为保证合约管理人员行为所属人可追溯，管理人员身份与实体身份一一对应，做到管理人员行为所属人可追溯。

##### （2）访问控制：

权限控制功能组件是合约安全的重要部分，功能包括用户身份管理、用户角色管理和权限配置。按操控资源的权限不同定义多个角色，按角色授权不同用户操控资源的权限及安全规则，使用户只能在有限范围内进行写入、读取和使用数据资源，而在其读取范围外的数据则会进行加密保护。

 合约的参与成员之间权限、职责、资源、合作形式都形成共识，在彼此信任的平台上，实现授权管理、授权部门、发放代币和扣除代币等业务。保证各个业务操作都清晰明确。

##### a.权限控制模型

学分认证合约建议使用RPI（Role-Permission-Interface）权限控制模型①，设置角色、权限、接口四类对象。

账号和角色的对应关系是1:N，一个账号能对应多个角色，每个账号使用独立且拥有唯一的公私钥对，发起交易时使用私钥进行签名，实现交易的可控及后续监管的追溯。

权限的大小按照普通用户、相关部门、系统管理员及所有者递增。用户只能调用该权限下合约的接口

##### b.角色和权限设计

①合约所有者 拥有认证管理人员和相关部门的权限。拥有发放和销毁令牌的权限，并且能自主增发令牌。拥有查看每笔交易和查看身份的权限，一般只参与授权，不参与运作管理

②管理员 权力等同于合约所有者

③相关部门 拥有发放和销毁令牌的权限，但是不能自主增发令牌。不参与授权、参与运作管理

④普通用户 拥有查看每笔交易和查看身份的权限，不参与授权、不参与运作管理

 

#### 4.1.2服务模块

##### （1）主要功能组件

##### a.业务引擎 

业务引擎功能组件负责向各参与方包括业务查询服务。

业务查询为各参与方提供转账记录查询，销毁记录查询，授权记录查询，用户余额查询，授权信息查询。可通过账户地址查询用户余额，授权信息。

##### b.权限配置 

权限配置功能组件为相关合约方法配置操作权限，只有授权用户才能够操作相关方法。

##### （2）服务模块的工作思路

一旦进行了交易，交易的内容将被永久保存，为后续审核，溯源、评价等提供基础依据。

##### （3）服务模块的用途

##### a.信息溯源 

合约的事件中记录了相关人员的信息，可以通过事件来获取当时的用户交易信息。

##### b.事故定责

如果相关部门操作失误，或者没有履行变动学分的责任，可以通过信息溯源追责相关负责人，对信息进行纠正。

 

#### 4.5安全模块

#### 4.5.1合约安全

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

 

 

 