// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "../../github/OpenZeppelin/openzeppelin-contracts/contracts/token/ERC721/certificate721.sol";
import "../../github/OpenZeppelin/openzeppelin-contracts/contracts/utils/Counters.sol";

contract graduation_ccr721 is certificate721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    /*ccr:学生属性和tokenID绑定*/
    struct certificate {
        string _studenName;
        string _studenSex;
        string _studenBirthday;
        string _beginAndEndTime;
        string _academy;
        string _title;
        uint32 _timestamp;
    }

    mapping(uint256 => certificate ) public certificates;

    constructor() public certificate721("清华大学", "硕士研究生") {}

    /*1.新增证书*/
    function addItem(
        address player, string memory tokenURI,
        string memory studenName,string memory studenSex,
        string memory studenBirthday,
        string memory beginAndEndTime,
        string memory academy,string memory title
        )
        public onlyHost
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);
        
        certificates[newItemId]._studenName = studenName;
        certificates[newItemId]._studenSex = studenSex;
        certificates[newItemId]._studenBirthday = studenBirthday;
        certificates[newItemId]._beginAndEndTime = beginAndEndTime;
        certificates[newItemId]._academy = academy;
        certificates[newItemId]._title = title;
        certificates[newItemId]._timestamp= uint32(block.timestamp);

        return newItemId;
    }
    
    /*2.查询证书*/
    function getItem(uint256 _ItemId) public view returns (
        string memory, string memory, string memory,
        string memory,string memory,uint32
        ) {
        return (
        certificates[_ItemId]._studenName,
        certificates[_ItemId]._studenSex,
        certificates[_ItemId]._studenBirthday,
        certificates[_ItemId]._beginAndEndTime,
        certificates[_ItemId]._academy,
        certificates[_ItemId]._timestamp);
    }
    
    /*3.销毁证书*/
    function burn(uint256 tokenId) public returns(bool _bool) {
        _burn(tokenId);
        require(_isOwner(_msgSender(), tokenId), "ERC721: 证书只能被所有者销毁");        
        certificates[tokenId]._studenName = "";
        certificates[tokenId]._studenSex = "";
        certificates[tokenId]._studenBirthday = "";
        certificates[tokenId]._beginAndEndTime = "";
        certificates[tokenId]._academy = "";
        certificates[tokenId]._timestamp = 0;
      
        return _bool;
    }
    
}