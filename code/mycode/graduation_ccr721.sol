// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "../../github/OpenZeppelin/openzeppelin-contracts/contracts/token/ERC721/certificate721.sol";
import "../../github/OpenZeppelin/openzeppelin-contracts/contracts/utils/Counters.sol";

contract graduation_ccr721 is certificate721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    /*ccr:学生属性和tokenID绑定*/
    /* URI信息：Student's name */
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

    constructor() public certificate721("清华大学", "硕士研究生") {}

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
    
    /*2.查询证书*/
    function getItem(uint256 _ItemId) public view returns (
        string memory, string memory,string memory,
        string memory,string memory,uint32
        ) {
        return (
        certificates[_ItemId]._studenSex,
        certificates[_ItemId]._studenBirthday,
        certificates[_ItemId]._beginTime,
        certificates[_ItemId]._endTime,
        certificates[_ItemId]._academy,
        certificates[_ItemId]._timestamp);
    }
    
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
    
}