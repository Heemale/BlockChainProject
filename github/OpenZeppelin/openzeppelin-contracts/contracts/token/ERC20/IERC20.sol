// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount, string memory reason) external returns (bool);
    function burn(address account, uint256 amount,string memory reason) external returns(bool);
    
    event Transfer(address indexed from, address indexed to, uint256 value,string reason);
    event Burn(address indexed sender,address indexed from,uint256 value,string reason);
    event Add(address indexed from, address indexed to, uint256 value,string reason);
        
    event SetDepartment(address indexed setFrom,address indexed setTo,bool status,uint32 setTime);
    event SetAdministrators(address indexed setFrom,address indexed setTo,bool status,uint32 setTime);
}