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
		"inputs": [],
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
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "addTime",
				"type": "uint32"
			}
		],
		"name": "Add",
		"type": "event"
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
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "burnTime",
				"type": "uint32"
			}
		],
		"name": "Burn",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "tokenURI",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "studenSex",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "studenBirthday",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "beginTime",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "endTime",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "academy",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "addItem",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_bool",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "certificates",
		"outputs": [
			{
				"internalType": "string",
				"name": "_studenSex",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_studenBirthday",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_beginTime",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_endTime",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_academy",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "_timestamp",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ItemId",
				"type": "uint256"
			}
		],
		"name": "getItem",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "host",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
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
var contract = new web3.eth.Contract(contractABI, "0x2189F69623f5932Bc4566E833269Bf4752a09fD5");


/*1.constant*/
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
$(".getHost").click(function () {
	contract.methods.host().call({from:accounts[0]}).then(
		function (result) {
			$('.showHost').html(result)
		}
	);
});


/* 逮虾户 隐藏*/
document.getElementById("loading").style.display="none";
document.getElementById("loading2").style.display="none";

/*2.addItem*/
function addItem() {
	let player=document.getElementById('addPlayer').value;
	let tokenURI=document.getElementById('addTokenURI').value;
	let studenSex=document.getElementById('studenSex').value;
	let studenBirthday=document.getElementById('studenBirthday').value;
	let beginTime=document.getElementById('beginTime').value;
	let endTime=document.getElementById('endTime').value;
	let academy=document.getElementById('academy').value;
	let title=document.getElementById('title').value;
	$('.showadd').html("");
	console.log("学生证书数据为："+player,tokenURI,studenSex,studenBirthday,beginTime,endTime,academy,title);

	contract.methods.host().call({from:accounts[0]}).then(
		function (result2) {
			if (result2.toLowerCase() == accounts[0]){
				document.getElementById("loading").style.display="";

				contract.methods.addItem(player,tokenURI,studenSex,studenBirthday,beginTime,endTime,academy,title).send({from:accounts[0]}).then(
					function (result) {
						console.log("add_result:",result);
						document.getElementById("addPlayer").value="";
						document.getElementById("addTokenURI").value="";
						document.getElementById("studenSex").value="";
						document.getElementById("studenBirthday").value="";
						document.getElementById("beginTime").value="";
						document.getElementById("endTime").value="";
						document.getElementById("academy").value="";
						document.getElementById("title").value="";
						$('.showadd').html(result.status);
						document.getElementById("loading").style.display="none";
					}
				)

			} else {
				$('.showadd').html("您没有权限");
			}
		}
	);


}

function getItem() {
	let resItemId = document.getElementById('getItem').value;
	console.log("查询TokenId为：" + resItemId);

	contract.methods.getItem(resItemId).call({from: accounts[0]}).then(
		function (result2) {

			if (result2[3] == 0){
				$('.showItem').html("<p>"+ "证书不存在" + "</p>")
			} else {

	contract.methods.tokenURI(resItemId).call({from: accounts[0]}).then(
		function (result) {
			$('.showItem').html("<p>"
				+ "学生名字：" +result + " "
				+ "学生性别：" +result2[0] +" "
				+ "出生时间：" + result2[1] +" "
				+"入学时间：" + result2[2] +" "
				+"毕业时间：" + result2[3] + " "
				+"院系：" + result2[4] + " "
				+"时间戳：" + result2[5] + " "
				+"</p>")
					});
			}

		});
}
function burn() {
	let resItemId = document.getElementById('burn').value;
	$('.showburn').html("");
	console.log("查询TokenId为：" + resItemId);

	contract.methods.getItem(resItemId).call({from: accounts[0]}).then(
		function (result2) {

			if (result2[3] == 0){
				$('.showburn').html("<p>"+ "证书不存在" + "</p>")
			}
			else{

				contract.methods.ownerOf(resItemId).call({from: accounts[0]}).then(
					function (result3) {
						if (result3.toLowerCase()  == accounts[0]){

							/* 逮虾户 显示 */
							document.getElementById("loading2").style.display="";

							contract.methods.burn(resItemId).send({from: accounts[0]}).then(
								function (result) {
									console.log("burn_result:",result);
									$('.showburn').html(result.status);
									/* 逮虾户 隐藏 */
									document.getElementById("loading2").style.display="none";
								}
							);
						} else {
							$('.showburn').html("<p>"+ "您不是证书所有者" + "</p>")
						}


					}
				);

			}

		});

}

function ownerOf() {
	let resItemId = document.getElementById('ownerOf').value;
	console.log("查询TokenId为：" + resItemId);

	contract.methods.getItem(resItemId).call({from: accounts[0]}).then(
		function (result2) {

			if (result2[3] == 0){
				$('.showOwnerOf').html("<p>"+ "证书不存在" + "</p>")
			} else {

				contract.methods.ownerOf(resItemId).call({from: accounts[0]}).then(
					function (result) {
						console.log("所有者:",result);
						$('.showOwnerOf').html(result)
					}
				);
			}

		});


}


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
				+ " tokenId：" + json.tokenId
				+ "  时间戳：" + timeConverter(json.addTime,1) + "</p>"
			);
		});
	});
});

$(".getEventBurn").click(function () {
	contract.getPastEvents('Burn', {
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
				+ " 操作人：" + json.from.slice(0,6) + "..." + json.from.substring(38)
				+ " 证书Id：" + json.tokenId
				+ " 销毁时间：" +timeConverter(json.burnTime,1) + "</p>"
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