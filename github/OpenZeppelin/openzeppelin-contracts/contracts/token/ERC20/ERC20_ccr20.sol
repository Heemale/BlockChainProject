// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

import "../../GSN/Context.sol";
import "./IERC20.sol";
import "../../math/SafeMath.sol";

contract ERC20_ccr20 is Context, IERC20 {
    using SafeMath for uint256;

    mapping (address => uint256) private _balances;
        /*-------------------ccr code---------------------*/
    address private _owner;
    mapping (address => bool) public administrators;
    mapping (address => department) public departments;
    struct department {
        string departmentName;
        bool departmentTF;
    }
        /*-------------------ccr code---------------------*/
    
    uint256 private _totalSupply;
    string private _name;
    string private _symbol;
    uint8 private _decimals;

    constructor (string memory name_, string memory symbol_) public {
        _name = name_;
        _symbol = symbol_;
        _decimals = 1;
        _owner = msg.sender;
    }

    function owner() public view returns (address) {
        return _owner;
    }
    function name() public view returns (string memory) {
        return _name;
    }
    function symbol() public view returns (string memory) {
        return _symbol;
    }
    function decimals() public view returns (uint8) {
        return _decimals;
    }
    function totalSupply() public view override returns (uint256) {
        return _totalSupply;
    }
    function balanceOf(address account) public view override returns (uint256) {
        return _balances[account];
    }
    
    
        /*-------------------ccr code---------------------*/
    function addDepartment(address _departAdd,string memory _departName) public {
        require(administrators[msg.sender] == true || _owner == msg.sender, "ERC20: 非管理员或者所有者，您没有权限");        
        departments[_departAdd].departmentName = _departName;
        departments[_departAdd].departmentTF = true;
        emit SetPermissions(msg.sender,_departAdd);
    }
    function setAdministrators(address _AdminAdd) public {
        require(_owner == msg.sender, "ERC20: 非管理员，您没有权限");        
        administrators[_AdminAdd] = true;
        emit SetPermissions(msg.sender,_AdminAdd);
    }
        /*-------------------ccr code---------------------*/


    function transfer(address recipient, uint256 amount,string memory reason) public virtual override returns (bool) {
        _transfer(_msgSender(), recipient, amount, reason);
        return true;
    }
    function _transfer(address sender, address recipient, uint256 amount, string memory reason) internal virtual {
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(
            departments[sender].departmentTF == true ||
            administrators[sender] == true ||
            _owner == sender, 
            "ERC20: 非相关部门，您没有权限");
        require(recipient != address(0), "ERC20: transfer to the zero address");
        
        _beforeTokenTransfer(sender, recipient, amount);
        _balances[sender] = _balances[sender].sub(amount, "ERC20: 转账金额超过余额");
        _balances[recipient] = _balances[recipient].add(amount);
        emit Transfer(sender, recipient, amount, reason);
    }



    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");
        _beforeTokenTransfer(address(0), account, amount);
        _totalSupply = _totalSupply.add(amount);
        _balances[account] = _balances[account].add(amount);
        emit Transfer(address(0), account, amount,"初始化");
    }
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");
        _beforeTokenTransfer(account, address(0), amount);
        _balances[account] = _balances[account].sub(amount, "ERC20: burn amount exceeds balance");
        _totalSupply = _totalSupply.sub(amount);
        emit Transfer(account, address(0), amount,"销毁");
    }
    function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual { }
}
