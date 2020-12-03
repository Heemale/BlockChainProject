// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "../../github/OpenZeppelin/openzeppelin-contracts/contracts/token/ERC721/certificate721.sol";
import "../../github/OpenZeppelin/openzeppelin-contracts/contracts/utils/Counters.sol";

contract Medals is certificate721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    /*ccr:获奖学生属性和tokenID绑定*/
    struct student {
        string _matchTpye;
        string _studentName;
        string _studenNum;
        uint _awardTime;
    }
    mapping(uint256 => student ) public students;

    constructor() public certificate721("2019英语国才杯", "Gold") {}

    /*1.新增证书*/
    function addItem(
        address player, string memory tokenURI,
        string memory matchTpye,string memory studentName,
        string memory studenNum
        )
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);
        
        students[newItemId]._matchTpye = matchTpye;
        students[newItemId]._studentName = studentName;
        students[newItemId]._studenNum = studenNum;
        students[newItemId]._awardTime = uint32(block.timestamp);

        return newItemId;
    }
    
    /*2.查询证书*/
    function getItem(uint256 _ItemId) public view returns (
        string memory, string memory,string memory, uint
        ) {
        return (
        students[_ItemId]._matchTpye,
        students[_ItemId]._studentName,
        students[_ItemId]._studenNum,
        students[_ItemId]._awardTime);
    }
    
    /*3.销毁证书*/
    function burn(uint256 tokenId) public returns(bool _bool) {
        _burn(tokenId);
        
        students[tokenId]._matchTpye = "";
        students[tokenId]._studentName = "";
        students[tokenId]._studenNum = "";
        students[tokenId]._awardTime = 0;
        
        return _bool;
    }
    
}