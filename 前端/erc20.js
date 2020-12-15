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
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
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
				"internalType": "uint32",
				"name": "setTime",
				"type": "uint32"
			}
		],
		"name": "SetPermissions",
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
var contract = new web3.eth.Contract(contractABI, "0x6cA1b41D569aa949894e717386eB244e9d01Ba4e");
// console.log("methods为：",contract.methods);

/*1.总供应量*/
function addTotalSupply() {
	let res=document.getElementById('addTotalSupply').value;
	document.getElementById("addTotalSupply").value="";
    console.log("add为："+res);
    contract.methods.addTotalSupply(res).send({from:accounts[0]}).then(
        function (result) {
            console.log("add_result:",result);
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
	contract.methods.setDepartment(resAdd,resName,resBool).send({from:accounts[0]}).then(
		function (result) {
			console.log("add_result:",result);
		}
	);
}

function setAdministrators() {
	let resAdd=document.getElementById('setAdministratorsAdd').value;
	let resBool=document.getElementById('setAdministratorsBool').value;
	document.getElementById("setAdministratorsAdd").value="";
	document.getElementById("setAdministratorsBool").value="";
	console.log("新增管理员数据为："+resAdd,resBool);
	contract.methods.setAdministrators(resAdd,resBool).send({from:accounts[0]}).then(
		function (result) {
			console.log("add_result:",result);
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
	contract.methods.transfer(resAdd,resAmount,resReason).send({from:accounts[0]}).then(
		function (result) {
			console.log("transfer_result:",result);
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
	contract.methods.burn(resAdd,resAmount,resReason).send({from:accounts[0]}).then(
		function (result) {
			console.log("burn_result:",result);
		}
	);
}

/*4.余额、getDepartment、getAdministrators*/
function getBalance() {
	let resAdd=document.getElementById('getBalance').value;
	console.log("查询地址为："+resAdd);
	contract.methods.balanceOf(resAdd).call({from:accounts[0]}).then(
		function (result) {
			$('.showBalance').html(result)
		}
	);
}
function getDepartment() {
	let resAdd=document.getElementById('getDepartment').value;
	console.log("查询地址为："+resAdd);
	contract.methods.departments(resAdd).call({from:accounts[0]}).then(
		function (result) {
			console.log(result);
			$('.showDepartment').html(result.departmentName+ " " +result.departmentTF)
		}
	);
}function getAdministrators() {
	let resAdd=document.getElementById('getAdministrators').value;
	console.log("查询地址为："+resAdd);
	contract.methods.administrators(resAdd).call({from:accounts[0]}).then(
		function (result) {
			$('.showAdministrators').html(result)
		}
	);
}

function getEventBurn(){}

function getEventTansfer(){}


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

