// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

import "../../GSN/Context.sol";
import "./IERC721.sol";
import "./IERC721Metadata.sol";
import "./IERC721Enumerable.sol";
import "./IERC721Receiver.sol";
import "../../introspection/ERC165.sol";
import "../../math/SafeMath.sol";
import "../../utils/Address.sol";
import "../../utils/EnumerableSet.sol";
import "../../utils/EnumerableMap.sol";
import "../../utils/Strings.sol";

/* 
    1.tokenByIndex:通过下标来获取tokenId
    2.tokenOfOwnerByIndex:通过账户和下标来获取tokenId
    3.tokenURI:通过TokenId查询TokenURI
*/


contract certificate721 is Context, ERC165, IERC721, IERC721Metadata, IERC721Enumerable {
    using SafeMath for uint256;
    using Address for address;
    using EnumerableSet for EnumerableSet.UintSet;
    using EnumerableMap for EnumerableMap.UintToAddressMap;
    using Strings for uint256;

    bytes4 private constant _ERC721_RECEIVED = 0x150b7a02;
    mapping (address => EnumerableSet.UintSet) private _holderTokens;
    mapping (uint256 => string) private _tokenURIs;
    EnumerableMap.UintToAddressMap private _tokenOwners;

    /*1.token、名称、符号、host*/
    string private _name;
    string private _symbol;
    string private _baseURI;
    address private _host;

    bytes4 private constant _INTERFACE_ID_ERC721 = 0x80ac58cd;
    bytes4 private constant _INTERFACE_ID_ERC721_METADATA = 0x5b5e139f;
    bytes4 private constant _INTERFACE_ID_ERC721_ENUMERABLE = 0x780e9d63;

    constructor (string memory name_, string memory symbol_) public {
        _name = name_;
        _symbol = symbol_;
        _host = msg.sender;

        _registerInterface(_INTERFACE_ID_ERC721);
        _registerInterface(_INTERFACE_ID_ERC721_METADATA);
        _registerInterface(_INTERFACE_ID_ERC721_ENUMERABLE);
    }
    modifier onlyHost {
        require(msg.sender == _host,"不是合约所有者无法操作");
        _;
    }
    
    
    /*2.token名称、符号、总发行量*/
    function name() public view override returns (string memory) {
        return _name;
    }
    function symbol() public view override returns (string memory) {
        return _symbol;
    }
    function totalSupply() public view override returns (uint256) {
        return _tokenOwners.length();
    }


    /*3.查证书数量，证书所属人*/
    function balanceOf(address owner) public view override returns (uint256) {
        require(owner != address(0), "ERC721: balance query for the zero address");
        return _holderTokens[owner].length();
    }
    function ownerOf(uint256 tokenId) public view override returns (address) {
        return _tokenOwners.get(tokenId, "ERC721: owner 查询不到证书");
    }
    
    
    /*4.通过tokenID查询tokenUID*/
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI 查询不到证书");
        string memory _tokenURI = _tokenURIs[tokenId];

        if (bytes(_baseURI).length == 0) {
            return _tokenURI;
        }
        if (bytes(_tokenURI).length > 0) {
            return string(abi.encodePacked(_baseURI, _tokenURI));
        }

        return string(abi.encodePacked(_baseURI, tokenId.toString()));
    }
    function baseURI() internal view returns (string memory) {
        return _baseURI;
    }
    
    
    /*5.查询某人的指定证书，在合约里面的ID*/
    function tokenOfOwnerByIndex(address owner, uint256 index) public view override returns (uint256) {
        return _holderTokens[owner].at(index);
    }
    /* 删除了当前代币，此代币位置被最后一个替代 */
    function tokenByIndex(uint256 index) public view override returns (uint256) {
        (uint256 tokenId, ) = _tokenOwners.at(index);
        return tokenId;
    }


    /*7.销毁*/
    function _burn(uint256 tokenId) internal virtual {
        address owner = ownerOf(tokenId);
        _beforeTokenTransfer(owner, address(0), tokenId);

        if (bytes(_tokenURIs[tokenId]).length != 0) {
            delete _tokenURIs[tokenId];
        }

        _holderTokens[owner].remove(tokenId);
        _tokenOwners.remove(tokenId);
        emit Burn(_msgSender(), tokenId, uint32(block.timestamp));
    }



    function _exists(uint256 tokenId) internal view returns (bool) {
        return _tokenOwners.contains(tokenId);
    }
    function _isOwner(address spender, uint256 tokenId) internal view returns (bool) {
        require(_exists(tokenId), "ERC721: operator 查询不到证书");
        address owner = ownerOf(tokenId);
        return (spender == owner);
    }
    function _safeMint(address to, uint256 tokenId) internal virtual {
        _safeMint(to, tokenId, "");
    }
    function _safeMint(address to, uint256 tokenId, bytes memory _data) internal virtual {
        _mint(to, tokenId);
        require(_checkOnERC721Received(address(0), to, tokenId, _data), "ERC721: transfer to non ERC721Receiver implementer");
    }
    function _mint(address to, uint256 tokenId) internal virtual {
        require(to != address(0), "ERC721: mint to the zero address");
        require(!_exists(tokenId), "ERC721: token already minted");
        _beforeTokenTransfer(address(0), to, tokenId);
        _holderTokens[to].add(tokenId);
        _tokenOwners.set(tokenId, to);
        emit Add(_msgSender(),to, tokenId, uint32(block.timestamp));
    }



    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
        require(_exists(tokenId), "ERC721Metadata: URI set 查询不到证书");
        _tokenURIs[tokenId] = _tokenURI;
    }
    function _setBaseURI(string memory baseURI_) internal virtual {
        _baseURI = baseURI_;
    }
    function _checkOnERC721Received(address from, address to, uint256 tokenId, bytes memory _data)
        private returns (bool)
    {
        if (!to.isContract()) {
            return true;
        }
        bytes memory returndata = to.functionCall(abi.encodeWithSelector(
            IERC721Receiver(to).onERC721Received.selector,
            _msgSender(),
            from,
            tokenId,
            _data
        ), "ERC721: transfer to non ERC721Receiver implementer");
        bytes4 retval = abi.decode(returndata, (bytes4));
        return (retval == _ERC721_RECEIVED);
    }
    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal virtual { }
}
