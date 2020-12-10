// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount, string memory reason) external returns (bool);
    function burn(address account, uint256 amount,string memory reason) external returns(bool);
    
    event Transfer(address indexed from, address indexed to, uint256 value,string reason);
    event Burn(address indexed sender,address indexed from,uint256 value,string reason);
        
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event SetPermissions(address indexed setFrom,address indexed setTo);
}
