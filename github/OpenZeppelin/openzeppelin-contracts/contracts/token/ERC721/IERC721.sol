// SPDX-License-Identifier: MIT

pragma solidity >=0.6.2 <0.8.0;

import "../../introspection/IERC165.sol";

interface IERC721 is IERC165 {
    event Burn(address indexed from, uint256 indexed tokenId,uint32 burnTime);
    event Add(address indexed from, address indexed to,uint256 indexed tokenId,uint32 addTime);

    function balanceOf(address owner) external view returns (uint256 balance);
    function ownerOf(uint256 tokenId) external view returns (address owner);
}
