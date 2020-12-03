// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "../../github/OpenZeppelin/openzeppelin-contracts/contracts/token/ERC20/ERC20_ccr20.sol";

contract credit_ccr20 is ERC20_ccr20 {
    constructor(uint256 initialSupply) public ERC20_ccr20("YGO", "yu") {
        _mint(msg.sender, initialSupply);
    }
}