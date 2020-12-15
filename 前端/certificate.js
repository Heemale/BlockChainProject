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
				"name": "matchTpye",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "studentName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "studenNum",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "medals",
		"outputs": [
			{
				"internalType": "string",
				"name": "_matchTpye",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_studentName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_studenNum",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "_awardTime",
				"type": "uint32"
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
var contract = new web3.eth.Contract(contractABI, "0xba9A45D879BC52fCe8b5d4522FEdf06cc13c0599");


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


/*2.addItem*/
function addItem() {
	let player=document.getElementById('addPlayer').value;
	let tokenURI=document.getElementById('addTokenURI').value;
	let matchTpye=document.getElementById('addmatchTpye').value;
	let studentName=document.getElementById('addstudentName').value;
	let studenNum=document.getElementById('addstudenNum').value;
	// document.getElementById("addPlayer").value="";
	// document.getElementById("addTokenURI").value="";
	// document.getElementById("addmatchTpye").value="";
	// document.getElementById("addstudentName").value="";
	// document.getElementById("addstudenNum").value="";
	console.log("获奖学生数据为："+player,tokenURI,matchTpye,studentName,studenNum);
	contract.methods.addItem(player,tokenURI,matchTpye,studentName,studenNum).send({from:accounts[0]}).then(
		function (result) {
			console.log("add_result:",result);
			$('.showadd').html(result.status)
		}
	);
}

function getItem() {
	let resItemId = document.getElementById('getItem').value;
	console.log("查询TokenId为：" + resItemId);

	contract.methods.getItem(resItemId).call({from: accounts[0]}).then(
		function (result2) {

			if (result2[3] == 0){
				$('.showItem').html("<p>"+ "令牌不存在" + "</p>")
			} else {

	contract.methods.tokenURI(resItemId).call({from: accounts[0]}).then(
		function (result) {
			$('.showItem').html("<p>"
				+ "头衔：" +result + " "
				+ "比赛种类：" +result2[0] +" "
				+ "学生姓名：" + result2[1] +" "
				+"学生学号：" + result2[2] +" "
				+"时间戳：" + result2[3] + "</p>")
					});
			}

		});
}
function burn() {
	let resItemId = document.getElementById('burn').value;
	console.log("查询TokenId为：" + resItemId);

	contract.methods.getItem(resItemId).call({from: accounts[0]}).then(
		function (result2) {

			if (result2[3] == 0){
				$('.showburn').html("<p>"+ "令牌不存在" + "</p>")
			}
			else{

				contract.methods.ownerOf(resItemId).call({from: accounts[0]}).then(
					function (result3) {
						if (result3  == accounts[0]){
							contract.methods.burn(resItemId).send({from: accounts[0]}).then(
								function (result) {
									console.log(result);
									$('.showburn').html(result.status)
								}
							);
						} else {
							$('.showburn').html("<p>"+ "您不是令牌所有者" + "</p>")
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
				$('.showOwnerOf').html("<p>"+ "令牌不存在" + "</p>")
			} else {

				contract.methods.ownerOf(resItemId).call({from: accounts[0]}).then(
					function (result) {
						console.log(result);
						$('.showOwnerOf').html(result)
					}
				);
			}

		});




}
