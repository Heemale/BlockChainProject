// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "../../github/OpenZeppelin/openzeppelin-contracts/contracts/token/ERC721/certificate721.sol";
import "../../github/OpenZeppelin/openzeppelin-contracts/contracts/utils/Counters.sol";

contract graduation_ccr721 is certificate721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    /*ccr:学生属性和tokenID绑定*/
    struct student {
        string _studenName;
        string _studenSex;
        string _studenBirthday;
        string _beginAndEndTime;
        string _academy;
        string _title;
        uint32 _timestamp;
    }
    mapping(uint256 => student ) public students;

    constructor() public certificate721("清华大学", "硕士研究生") {}

    /*1.新增证书*/
    function addItem(
        address player, string memory tokenURI,
        string memory studenName,string memory studenSex,
        string memory studenBirthday,
        string memory beginAndEndTime,
        string memory academy,string memory title
        )
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);
        
        students[newItemId]._studenName = studenName;
        students[newItemId]._studenSex = studenSex;
        students[newItemId]._studenBirthday = studenBirthday;
        students[newItemId]._beginAndEndTime = beginAndEndTime;
        students[newItemId]._academy = academy;
        students[newItemId]._title = title;
        students[newItemId]._timestamp= uint32(block.timestamp);

        return newItemId;
    }
    
    /*2.查询证书*/
    function getItem(uint256 _ItemId) public view returns (
        string memory, string memory, string memory,
        string memory,string memory,uint32
        ) {
        return (
        students[_ItemId]._studenName,
        students[_ItemId]._studenSex,
        students[_ItemId]._studenBirthday,
        students[_ItemId]._beginAndEndTime,
        students[_ItemId]._academy,
        students[_ItemId]._timestamp);
    }
    
    /*3.销毁证书*/
    function burn(uint256 tokenId) public returns(bool _bool) {
        _burn(tokenId);
        
        students[tokenId]._studenName = "";
        students[tokenId]._studenSex = "";
        students[tokenId]._studenBirthday = "";
        students[tokenId]._beginAndEndTime = "";
        students[tokenId]._academy = "";
        students[tokenId]._timestamp = 0;
        
        return _bool;
    }
    
}