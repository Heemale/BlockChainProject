// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "../../github/OpenZeppelin/openzeppelin-contracts/contracts/token/ERC721/certificate721.sol";
import "../../github/OpenZeppelin/openzeppelin-contracts/contracts/utils/Counters.sol";

contract ccrMedals is certificate721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    /*ccr:获奖学生属性和tokenID绑定*/
    /* URI信息：年份-排名（如：2019-冠军） */
    struct medal {
        string _matchTpye;
        string _studentName;
        string _studenNum;
        uint32 _awardTime;
    }
    mapping(uint256 => medal ) public medals;

    constructor() public certificate721("英语国才杯", "Gifted") {}

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
    
    /*2.查询奖牌*/
    function getItem(uint256 _ItemId) public view returns (
        string memory, string memory,string memory, uint
        ) {
        return (
        medals[_ItemId]._matchTpye,
        medals[_ItemId]._studentName,
        medals[_ItemId]._studenNum,
        medals[_ItemId]._awardTime);
    }
    
    /*3.销毁奖牌*/
    function burn(uint256 tokenId) public returns(bool _bool) {
        require(_isOwner(_msgSender(), tokenId), "ERC721: 令牌只能被所有者销毁");
        _burn(tokenId);
        medals[tokenId]._matchTpye = "";
        medals[tokenId]._studentName = "";
        medals[tokenId]._studenNum = "";
        medals[tokenId]._awardTime = 0;

        return _bool;
    }
    
}