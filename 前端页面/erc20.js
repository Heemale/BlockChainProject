if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask 已安装!');
}
	console.log("isMetaMask：",ethereum.isMetaMask);
	let accounts = [];

$(".enableEthereumButton").click(function () {
    getAccount()
});
async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    $('.showAccount').html(account);
	contract.methods.balanceOf(accounts[0]).call({from:accounts[0]}).then(
		function (result) {
			$('.ShowThisAccountBalance').html(result)
		}
	);
}

ethereum.on('accountsChanged', function (accounts) {
    getAccount()
});
ethereum.on('chainChanged', (chainId) => {
    console.log("ChainID为：",chainId.toString())
});

let web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "initialSupply",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "reason",
				"type": "string"
			}
		],
		"name": "Add",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "addTotalSupply",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "reason",
				"type": "string"
			}
		],
		"name": "burn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "reason",
				"type": "string"
			}
		],
		"name": "Burn",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_AdminAdd",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_bool",
				"type": "bool"
			}
		],
		"name": "setAdministrators",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "setFrom",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "setTo",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "setTime",
				"type": "uint32"
			}
		],
		"name": "SetAdministrators",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_departAdd",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_departName",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_bool",
				"type": "bool"
			}
		],
		"name": "setDepartment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "setFrom",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "setTo",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "setTime",
				"type": "uint32"
			}
		],
		"name": "SetDepartment",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "reason",
				"type": "string"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "reason",
				"type": "string"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "administrators",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "departments",
		"outputs": [
			{
				"internalType": "string",
				"name": "departmentName",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "departmentTF",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
var contract = new web3.eth.Contract(contractABI, "0xA830D086E03b351311cbDA3DC9b143290bDE6e7b");
// console.log("methods为：",contract.methods);

/* 逮虾户 隐藏*/
document.getElementById("loading").style.display="none";//隐藏
document.getElementById("loading2").style.display="none";//隐藏
document.getElementById("loading3").style.display="none";//隐藏
document.getElementById("loading4").style.display="none";//隐藏
document.getElementById("loading5").style.display="none";//隐藏

/*1.总供应量*/
function addTotalSupply() {
	let res=document.getElementById('addTotalSupply').value;
	document.getElementById("addTotalSupply").value="";
    console.log("add为："+res);
	/* 逮虾户 显示 */
	document.getElementById("loading").style.display="";
    contract.methods.addTotalSupply(res).send({from:accounts[0]}).then(
        function (result) {
            console.log("add_result:",result);
			/* 逮虾户 隐藏 */
			document.getElementById("loading").style.display="none";//隐藏
        }
    );
}
$(".getTotalSupply").click(function () {
	contract.methods.totalSupply().call({from:accounts[0]}).then(
		function (result) {
			$('.showTotalSupply').html(result)
		}
	);
});
$(".getName").click(function () {
	contract.methods.name().call({from:accounts[0]}).then(
		function (result) {
			$('.showName').html(result)
		}
	);
});
$(".getSymbol").click(function () {
	contract.methods.symbol().call({from:accounts[0]}).then(
		function (result) {
			$('.showSymbol').html(result)
		}
	);
});
$(".getDecimals").click(function () {
	contract.methods.decimals().call({from:accounts[0]}).then(
		function (result) {
			$('.showDecimals').html(result)
		}
	);
});


/*2.添加部门*/
function setDepartment() {
	let resAdd=document.getElementById('setDepartmentAdd').value;
	let resName=document.getElementById('setDepartmentName').value;
	let resBool=document.getElementById('setDepartmentBool').value;
	document.getElementById("setDepartmentAdd").value="";
	document.getElementById("setDepartmentName").value="";
	document.getElementById("setDepartmentBool").value="";
	console.log("新增部门数据为："+resAdd,resName,resBool);
	/* 逮虾户 显示 */
	document.getElementById("loading2").style.display="";
	contract.methods.setDepartment(resAdd,resName,resBool).send({from:accounts[0]}).then(
		function (result) {
			console.log("add_result:",result);
			/* 逮虾户 隐藏 */
			document.getElementById("loading2").style.display="none";//隐藏
		}
	);
}

function setAdministrators() {
	let resAdd=document.getElementById('setAdministratorsAdd').value;
	let resBool=document.getElementById('setAdministratorsBool').value;
	document.getElementById("setAdministratorsAdd").value="";
	document.getElementById("setAdministratorsBool").value="";
	console.log("新增管理员数据为："+resAdd,resBool);
	/* 逮虾户 显示 */
	document.getElementById("loading3").style.display="";
	contract.methods.setAdministrators(resAdd,resBool).send({from:accounts[0]}).then(
		function (result) {
			console.log("add_result:",result);
			/* 逮虾户 隐藏 */
			document.getElementById("loading3").style.display="none";//隐藏
		}
	);
}

/*4.转账*/
function transfer() {
	let resAdd=document.getElementById('recipient').value;
	let resAmount=document.getElementById('amount').value;
	let resReason=document.getElementById('reason').value;
	document.getElementById("recipient").value="";
	document.getElementById("amount").value="";
	document.getElementById("reason").value="";
	console.log("转账数据为："+resAdd,resAmount,resReason);
	/* 逮虾户 显示 */
	document.getElementById("loading4").style.display="";
	contract.methods.transfer(resAdd,resAmount,resReason).send({from:accounts[0]}).then(
		function (result) {
			console.log("transfer_result:",result);
			/* 逮虾户 隐藏 */
			document.getElementById("loading4").style.display="none";//隐藏
		}
	);
}

function burn() {
	let resAdd=document.getElementById('BurnFrom').value;
	let resAmount=document.getElementById('BurnAmount').value;
	let resReason=document.getElementById('BurnReason').value;
	document.getElementById("BurnFrom").value="";
	document.getElementById("BurnAmount").value="";
	document.getElementById("BurnReason").value="";
	console.log("销毁的数据为："+resAdd,resAmount,resReason);
	/* 逮虾户 显示 */
	document.getElementById("loading5").style.display="";
	contract.methods.burn(resAdd,resAmount,resReason).send({from:accounts[0]}).then(
		function (result) {
			console.log("burn_result:",result);
			/* 逮虾户 隐藏 */
			document.getElementById("loading5").style.display="none";//隐藏
		}
	);
}

/*4.余额、getDepartment、getAdministrators*/
function getBalance() {
	let resAdd=document.getElementById('getBalance').value;
	console.log("查询地址为："+resAdd);
	contract.methods.balanceOf(resAdd).call({from:accounts[0]}).then(
		function (result) {
			console.log("学分为："+result);
			$('.showBalance').html("学分为："+result)
		}
	);
}
function getDepartment() {
	let resAdd=document.getElementById('getDepartment').value;
	console.log("查询地址为："+resAdd);
	contract.methods.departments(resAdd).call({from:accounts[0]}).then(
		function (result) {
			console.log("是否为相关部门："+result.departmentTF);
			$('.showDepartment').html("名字："+result.departmentName+ " || 是否为部门：" +result.departmentTF)
		}
	);
}function getAdministrators() {
	let resAdd=document.getElementById('getAdministrators').value;
	console.log("查询地址为："+resAdd);
	contract.methods.administrators(resAdd).call({from:accounts[0]}).then(
		function (result) {
			console.log("是否为管理员："+result);
			$('.showAdministrators').html("是否为管理员："+result)
		}
	);
}


$(".getEventTansfer").click(function () {
	contract.getPastEvents('Transfer', {
		// filter: {from: "0x990f7F8AabF6cC7B13b27f074Bce0D572c58D532"},
		fromBlock: 0,
		toBlock: 'latest'
	}, function(error, events){
		console.log("-------------------------------------");
		$('.showEventTansfer').html("");
		events.forEach(element => {
			/*
            * 转成JSON格式字符串，再将字符串转化json对象：
            * */
			var jsonData = JSON.stringify(element.returnValues);
			var json = JSON.parse(jsonData);
			var json = eval("(" + jsonData + ")");
			var json = (new Function("return " + jsonData))();

			console.log("Event Transfer：",json);
			$('.showEventTansfer').prepend(
				"<p>"
				+ "部门：" + json.from.slice(0,6) + "..." + json.from.substring(38)
				+ " 受益人：" + json.to.slice(0,6) + "..." + json.to.substring(38)
				+ " 分数：" + json.value
				+ "  加分原因：" +json.reason + "</p>"
			);
		});
	});
});

$(".getEventBurn").click(function () {
	contract.getPastEvents('Burn', {
		// filter: {from: "0x990f7F8AabF6cC7B13b27f074Bce0D572c58D532"},
		fromBlock: 0,
		toBlock: 'latest'
	}, function(error, events){
		console.log("-------------------------------------");
		$('.showEventBurn').html("");
		events.forEach(element => {
			/*
            * 转成JSON格式字符串，再将字符串转化json对象：
            * */
			var jsonData = JSON.stringify(element.returnValues);
			var json = JSON.parse(jsonData);
			var json = eval("(" + jsonData + ")");
			var json = (new Function("return " + jsonData))();

			console.log("Event Burn：",json);
			$('.showEventBurn').prepend(
				"<p>"
				+ "部门：" + json.sender.slice(0,6) + "..." + json.sender.substring(38)
				+ " 受害人：" + json.from.slice(0,6) + "..." + json.from.substring(38)
				+ " 分数：" + json.value
				+ "  扣分原因：" +json.reason + "</p>"
			);
		});
	});
});

$(".getEventAdd").click(function () {
	contract.getPastEvents('Add', {
		fromBlock: 0,
		toBlock: 'latest'
	}, function(error, events){
		console.log("-------------------------------------");
		$('.showEventAdd').html("");
		events.forEach(element => {
			/*
            * 转成JSON格式字符串，再将字符串转化json对象：
            * */
			var jsonData = JSON.stringify(element.returnValues);
			var json = JSON.parse(jsonData);
			var json = eval("(" + jsonData + ")");
			var json = (new Function("return " + jsonData))();

			console.log("Event add：",json);
			$('.showEventAdd').prepend(
				"<p>"
				+ "from：" + json.from.slice(0,6) + "..." + json.from.substring(38)
				+ " to：" + json.to.slice(0,6) + "..." + json.to.substring(38)
				+ " 数量：" + json.value
				+ " 原因：" + json.reason + "</p>"
			);
		});
	});
});


function timeConverter(timestamp,num){//num:0 YYYY-MM-DD  num:1  YYYY-MM-DD hh:mm:ss // timestamp:时间戳
	timestamp = timestamp+'';
	timestamp = timestamp.length==10?timestamp*1000:timestamp;
	//10位的时间戳要*1000，时间戳是ms？？
	var date = new Date(timestamp);
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	//如果月份<10前面+0，否则直接打印m本身
	m = m < 10 ? ('0' + m) : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	var h = date.getHours();
	h = h < 10 ? ('0' + h) : h;
	var minute = date.getMinutes();
	var second = date.getSeconds();
	minute = minute < 10 ? ('0' + minute) : minute;
	second = second < 10 ? ('0' + second) : second;
	if(num==0){
		return y + '-' + m + '-' + d;
	}else{
		return y + '-' + m + '-' + d +' '+ h +':'+ minute +':' + second;
	}
}