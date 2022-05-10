{
  "manifestVersion": "3.2",
  "admin": {
    "address": "0x51C65cd0Cdb1A8A8b79dfc2eE965B1bA0bb8fc89",
    "txHash": "0x8035714bcb73a990aee7c20e39e4c986a1ad5c2e02e96cbc650eaf79d0b87884"
  },
  "proxies": [
    {
      "address": "0x8fC8CFB7f7362E44E472c690A6e025B80E406458",
      "txHash": "0xa1e223af3c149363a76004e1debb2fb1511c09bf026d863f388e9841288214c4",
      "kind": "transparent"
    },
    {
      "address": "0x359570B3a0437805D0a71457D61AD26a28cAC9A2",
      "txHash": "0x4ac067ba4a97908efb2e3adcfc8f599fb099ee11909064d8d1e61880762aaf2e",
      "kind": "transparent"
    }
  ],
  "impls": {
    "5574875dc36097ce3c0c26e8ec61e40de6f24dc1dc2001abdbd397390df27f68": {
      "address": "0x87006e75a5B6bE9D1bbF61AC8Cd84f05D9140589",
      "txHash": "0x1e59a58db01edd0cdf70de3abb89f30b3581073e46e02a558f3c70f4b3f97863",
      "layout": {
        "storage": [
          {
            "label": "_initialized",
            "offset": 0,
            "slot": "0",
            "type": "t_bool",
            "contract": "Initializable",
            "src": "contracts\\treasury.sol:24"
          },
          {
            "label": "_initializing",
            "offset": 1,
            "slot": "0",
            "type": "t_bool",
            "contract": "Initializable",
            "src": "contracts\\treasury.sol:29"
          },
          {
            "label": "__gap",
            "offset": 0,
            "slot": "1",
            "type": "t_array(t_uint256)50_storage",
            "contract": "ContextUpgradeable",
            "src": "contracts\\treasury.sol:84"
          },
          {
            "label": "__gap",
            "offset": 0,
            "slot": "51",
            "type": "t_array(t_uint256)50_storage",
            "contract": "ERC165Upgradeable",
            "src": "contracts\\treasury.sol:313"
          },
          {
            "label": "_roles",
            "offset": 0,
            "slot": "101",
            "type": "t_mapping(t_bytes32,t_struct(RoleData)503_storage)",
            "contract": "AccessControlUpgradeable",
            "src": "contracts\\treasury.sol:395"
          },
          {
            "label": "__gap",
            "offset": 0,
            "slot": "102",
            "type": "t_array(t_uint256)49_storage",
            "contract": "AccessControlUpgradeable",
            "src": "contracts\\treasury.sol:620"
          },
          {
            "label": "__gap",
            "offset": 0,
            "slot": "151",
            "type": "t_array(t_uint256)1000_storage",
            "contract": "AdminRole",
            "src": "contracts\\treasury.sol:663"
          },
          {
            "label": "__gap",
            "offset": 0,
            "slot": "1151",
            "type": "t_array(t_uint256)1000_storage",
            "contract": "CollateralManagement",
            "src": "contracts\\treasury.sol:969"
          }
        ],
        "types": {
          "t_address": {
            "label": "address",
            "numberOfBytes": "20"
          },
          "t_array(t_uint256)1000_storage": {
            "label": "uint256[1000]",
            "numberOfBytes": "32000"
          },
          "t_array(t_uint256)49_storage": {
            "label": "uint256[49]",
            "numberOfBytes": "1568"
          },
          "t_array(t_uint256)50_storage": {
            "label": "uint256[50]",
            "numberOfBytes": "1600"
          },
          "t_bool": {
            "label": "bool",
            "numberOfBytes": "1"
          },
          "t_bytes32": {
            "label": "bytes32",
            "numberOfBytes": "32"
          },
          "t_mapping(t_address,t_bool)": {
            "label": "mapping(address => bool)",
            "numberOfBytes": "32"
          },
          "t_mapping(t_bytes32,t_struct(RoleData)503_storage)": {
            "label": "mapping(bytes32 => struct AccessControlUpgradeable.RoleData)",
            "numberOfBytes": "32"
          },
          "t_struct(RoleData)503_storage": {
            "label": "struct AccessControlUpgradeable.RoleData",
            "members": [
              {
                "label": "members",
                "type": "t_mapping(t_address,t_bool)",
                "offset": 0,
                "slot": "0"
              },
              {
                "label": "adminRole",
                "type": "t_bytes32",
                "offset": 0,
                "slot": "1"
              }
            ],
            "numberOfBytes": "64"
          },
          "t_uint256": {
            "label": "uint256",
            "numberOfBytes": "32"
          }
        }
      }
    },
    "f434ef31afbe3c627503326bb1bdc36a35ee3982514ffc4cd84df5c7d4604190": {
      "address": "0xC7143d5bA86553C06f5730c8dC9f8187a621A8D4",
      "txHash": "0x282539f032639361d3a622794db54a3a20879915d18a6d7dac216e54011d8847",
      "layout": {
        "storage": [
          {
            "label": "_initialized",
            "offset": 0,
            "slot": "0",
            "type": "t_bool",
            "contract": "Initializable",
            "src": "contracts\\buddy.sol:238"
          },
          {
            "label": "_initializing",
            "offset": 1,
            "slot": "0",
            "type": "t_bool",
            "contract": "Initializable",
            "src": "contracts\\buddy.sol:243"
          },
          {
            "label": "__gap",
            "offset": 0,
            "slot": "1",
            "type": "t_array(t_uint256)50_storage",
            "contract": "ContextUpgradeable",
            "src": "contracts\\buddy.sol:963"
          },
          {
            "label": "_supportedInterfaces",
            "offset": 0,
            "slot": "51",
            "type": "t_mapping(t_bytes4,t_bool)",
            "contract": "ERC165Upgradeable",
            "src": "contracts\\buddy.sol:292"
          },
          {
            "label": "__gap",
            "offset": 0,
            "slot": "52",
            "type": "t_array(t_uint256)49_storage",
            "contract": "ERC165Upgradeable",
            "src": "contracts\\buddy.sol:335"
          },
          {
            "label": "_holderTokens",
            "offset": 0,
            "slot": "101",
            "type": "t_mapping(t_address,t_struct(UintSet)1436_storage)",
            "contract": "ERC721Upgradeable",
            "src": "contracts\\buddy.sol:1798"
          },
          {
            "label": "_tokenOwners",
            "offset": 0,
            "slot": "102",
            "type": "t_struct(UintToAddressMap)1864_storage",
            "contract": "ERC721Upgradeable",
            "src": "contracts\\buddy.sol:1801"
          },
          {
            "label": "_tokenApprovals",
            "offset": 0,
            "slot": "104",
            "type": "t_mapping(t_uint256,t_address)",
            "contract": "ERC721Upgradeable",
            "src": "contracts\\buddy.sol:1804"
          },
          {
            "label": "_operatorApprovals",
            "offset": 0,
            "slot": "105",
            "type": "t_mapping(t_address,t_mapping(t_address,t_bool))",
            "contract": "ERC721Upgradeable",
            "src": "contracts\\buddy.sol:1807"
          },
          {
            "label": "tokenIdToProp",
            "offset": 0,
            "slot": "106",
            "type": "t_mapping(t_uint256,t_array(t_string_storage)dyn_storage)",
            "contract": "ERC721Upgradeable",
            "src": "contracts\\buddy.sol:1810"
          },
          {
            "label": "propTovalue",
            "offset": 0,
            "slot": "107",
            "type": "t_mapping(t_uint256,t_mapping(t_string_memory_ptr,t_array(t_string_storage)dyn_storage))",
            "contract": "ERC721Upgradeable",
            "src": "contracts\\buddy.sol:1813"
          },
          {
            "label": "_name",
            "offset": 0,
            "slot": "108",
            "type": "t_string_storage",
            "contract": "ERC721Upgradeable",
            "src": "contracts\\buddy.sol:1816"
          },
          {
            "label": "_symbol",
            "offset": 0,
            "slot": "109",
            "type": "t_string_storage",
            "contract": "ERC721Upgradeable",
            "src": "contracts\\buddy.sol:1819"
          },
          {
            "label": "_tokenURIs",
            "offset": 0,
            "slot": "110",
            "type": "t_mapping(t_uint256,t_string_storage)",
            "contract": "ERC721Upgradeable",
            "src": "contracts\\buddy.sol:1822"
          },
          {
            "label": "_baseURI",
            "offset": 0,
            "slot": "111",
            "type": "t_string_storage",
            "contract": "ERC721Upgradeable",
            "src": "contracts\\buddy.sol:1825"
          },
          {
            "label": "__gap",
            "offset": 0,
            "slot": "112",
            "type": "t_array(t_uint256)41_storage",
            "contract": "ERC721Upgradeable",
            "src": "contracts\\buddy.sol:2366"
          },
          {
            "label": "______gap",
            "offset": 0,
            "slot": "153",
            "type": "t_array(t_uint256)1000_storage",
            "contract": "NFT721Core",
            "src": "contracts\\buddy.sol:2415"
          },
          {
            "label": "tokenIdToCreator",
            "offset": 0,
            "slot": "1153",
            "type": "t_mapping(t_uint256,t_address_payable)",
            "contract": "NFT721Creator",
            "src": "contracts\\buddy.sol:2426"
          },
          {
            "label": "______gap",
            "offset": 0,
            "slot": "1154",
            "type": "t_array(t_uint256)999_storage",
            "contract": "NFT721Creator",
            "src": "contracts\\buddy.sol:2511"
          },
          {
            "label": "creatorToIPFSHashToMinted",
            "offset": 0,
            "slot": "2153",
            "type": "t_mapping(t_address,t_mapping(t_string_memory_ptr,t_bool))",
            "contract": "NFT721Metadata",
            "src": "contracts\\buddy.sol:2527"
          },
          {
            "label": "______gap",
            "offset": 0,
            "slot": "2154",
            "type": "t_array(t_uint256)999_storage",
            "contract": "NFT721Metadata",
            "src": "contracts\\buddy.sol:2595"
          },
          {
            "label": "treasury",
            "offset": 0,
            "slot": "3153",
            "type": "t_address_payable",
            "contract": "TreasuryNode",
            "src": "contracts\\buddy.sol:2379"
          },
          {
            "label": "__gap",
            "offset": 0,
            "slot": "3154",
            "type": "t_array(t_uint256)2000_storage",
            "contract": "TreasuryNode",
            "src": "contracts\\buddy.sol:2403"
          },
          {
            "label": "tokenAddress",
            "offset": 0,
            "slot": "5154",
            "type": "t_mapping(t_address,t_bool)",
            "contract": "NFT721Mint",
            "src": "contracts\\buddy.sol:2614"
          },
          {
            "label": "mintFee",
            "offset": 0,
            "slot": "5155",
            "type": "t_uint256",
            "contract": "NFT721Mint",
            "src": "contracts\\buddy.sol:2615"
          },
          {
            "label": "updateFee",
            "offset": 0,
            "slot": "5156",
            "type": "t_uint256",
            "contract": "NFT721Mint",
            "src": "contracts\\buddy.sol:2616"
          },
          {
            "label": "mapTokenIds",
            "offset": 0,
            "slot": "5157",
            "type": "t_mapping(t_uint256,t_mapping(t_address,t_array(t_uint256)dyn_storage))",
            "contract": "NFT721Mint",
            "src": "contracts\\buddy.sol:2617"
          },
          {
            "label": "conversionAddress",
            "offset": 0,
            "slot": "5158",
            "type": "t_address",
            "contract": "NFT721Mint",
            "src": "contracts\\buddy.sol:2618"
          },
          {
            "label": "nextTokenId",
            "offset": 0,
            "slot": "5159",
            "type": "t_uint256",
            "contract": "NFT721Mint",
            "src": "contracts\\buddy.sol:2619"
          },
          {
            "label": "deviationPercentage",
            "offset": 0,
            "slot": "5160",
            "type": "t_uint256",
            "contract": "NFT721Mint",
            "src": "contracts\\buddy.sol:2620"
          },
          {
            "label": "______gap",
            "offset": 0,
            "slot": "5161",
            "type": "t_array(t_uint256)1000_storage",
            "contract": "NFT721Mint",
            "src": "contracts\\buddy.sol:2841"
          },
          {
            "label": "_owner",
            "offset": 0,
            "slot": "6161",
            "type": "t_address",
            "contract": "Ownable",
            "src": "contracts\\buddy.sol:1702"
          },
          {
            "label": "testAddress",
            "offset": 0,
            "slot": "6162",
            "type": "t_address",
            "contract": "Buddy",
            "src": "contracts\\buddy.sol:2860"
          }
        ],
        "types": {
          "t_address": {
            "label": "address",
            "numberOfBytes": "20"
          },
          "t_address_payable": {
            "label": "address payable",
            "numberOfBytes": "20"
          },
          "t_array(t_bytes32)dyn_storage": {
            "label": "bytes32[]",
            "numberOfBytes": "32"
          },
          "t_array(t_string_storage)dyn_storage": {
            "label": "string[]",
            "numberOfBytes": "32"
          },
          "t_array(t_struct(MapEntry)1538_storage)dyn_storage": {
            "label": "struct EnumerableMapUpgradeable.MapEntry[]",
            "numberOfBytes": "32"
          },
          "t_array(t_uint256)1000_storage": {
            "label": "uint256[1000]",
            "numberOfBytes": "32000"
          },
          "t_array(t_uint256)2000_storage": {
            "label": "uint256[2000]",
            "numberOfBytes": "64000"
          },
          "t_array(t_uint256)41_storage": {
            "label": "uint256[41]",
            "numberOfBytes": "1312"
          },
          "t_array(t_uint256)49_storage": {
            "label": "uint256[49]",
            "numberOfBytes": "1568"
          },
          "t_array(t_uint256)50_storage": {
            "label": "uint256[50]",
            "numberOfBytes": "1600"
          },
          "t_array(t_uint256)999_storage": {
            "label": "uint256[999]",
            "numberOfBytes": "31968"
          },
          "t_array(t_uint256)dyn_storage": {
            "label": "uint256[]",
            "numberOfBytes": "32"
          },
          "t_bool": {
            "label": "bool",
            "numberOfBytes": "1"
          },
          "t_bytes32": {
            "label": "bytes32",
            "numberOfBytes": "32"
          },
          "t_bytes4": {
            "label": "bytes4",
            "numberOfBytes": "4"
          },
          "t_mapping(t_address,t_array(t_uint256)dyn_storage)": {
            "label": "mapping(address => uint256[])",
            "numberOfBytes": "32"
          },
          "t_mapping(t_address,t_bool)": {
            "label": "mapping(address => bool)",
            "numberOfBytes": "32"
          },
          "t_mapping(t_address,t_mapping(t_address,t_bool))": {
            "label": "mapping(address => mapping(address => bool))",
            "numberOfBytes": "32"
          },
          "t_mapping(t_address,t_mapping(t_string_memory_ptr,t_bool))": {
            "label": "mapping(address => mapping(string => bool))",
            "numberOfBytes": "32"
          },
          "t_mapping(t_address,t_struct(UintSet)1436_storage)": {
            "label": "mapping(address => struct EnumerableSetUpgradeable.UintSet)",
            "numberOfBytes": "32"
          },
          "t_mapping(t_bytes32,t_uint256)": {
            "label": "mapping(bytes32 => uint256)",
            "numberOfBytes": "32"
          },
          "t_mapping(t_bytes4,t_bool)": {
            "label": "mapping(bytes4 => bool)",
            "numberOfBytes": "32"
          },
          "t_mapping(t_string_memory_ptr,t_array(t_string_storage)dyn_storage)": {
            "label": "mapping(string => string[])",
            "numberOfBytes": "32"
          },
          "t_mapping(t_string_memory_ptr,t_bool)": {
            "label": "mapping(string => bool)",
            "numberOfBytes": "32"
          },
          "t_mapping(t_uint256,t_address)": {
            "label": "mapping(uint256 => address)",
            "numberOfBytes": "32"
          },
          "t_mapping(t_uint256,t_address_payable)": {
            "label": "mapping(uint256 => address payable)",
            "numberOfBytes": "32"
          },
          "t_mapping(t_uint256,t_array(t_string_storage)dyn_storage)": {
            "label": "mapping(uint256 => string[])",
            "numberOfBytes": "32"
          },
          "t_mapping(t_uint256,t_mapping(t_address,t_array(t_uint256)dyn_storage))": {
            "label": "mapping(uint256 => mapping(address => uint256[]))",
            "numberOfBytes": "32"
          },
          "t_mapping(t_uint256,t_mapping(t_string_memory_ptr,t_array(t_string_storage)dyn_storage))": {
            "label": "mapping(uint256 => mapping(string => string[]))",
            "numberOfBytes": "32"
          },
          "t_mapping(t_uint256,t_string_storage)": {
            "label": "mapping(uint256 => string)",
            "numberOfBytes": "32"
          },
          "t_string_memory_ptr": {
            "label": "string",
            "numberOfBytes": "32"
          },
          "t_string_storage": {
            "label": "string",
            "numberOfBytes": "32"
          },
          "t_struct(Map)1546_storage": {
            "label": "struct EnumerableMapUpgradeable.Map",
            "members": [
              {
                "label": "_entries",
                "type": "t_array(t_struct(MapEntry)1538_storage)dyn_storage",
                "offset": 0,
                "slot": "0"
              },
              {
                "label": "_indexes",
                "type": "t_mapping(t_bytes32,t_uint256)",
                "offset": 0,
                "slot": "1"
              }
            ],
            "numberOfBytes": "64"
          },
          "t_struct(MapEntry)1538_storage": {
            "label": "struct EnumerableMapUpgradeable.MapEntry",
            "members": [
              {
                "label": "_key",
                "type": "t_bytes32",
                "offset": 0,
                "slot": "0"
              },
              {
                "label": "_value",
                "type": "t_bytes32",
                "offset": 0,
                "slot": "1"
              }
            ],
            "numberOfBytes": "64"
          },
          "t_struct(Set)1050_storage": {
            "label": "struct EnumerableSetUpgradeable.Set",
            "members": [
              {
                "label": "_values",
                "type": "t_array(t_bytes32)dyn_storage",
                "offset": 0,
                "slot": "0"
              },
              {
                "label": "_indexes",
                "type": "t_mapping(t_bytes32,t_uint256)",
                "offset": 0,
                "slot": "1"
              }
            ],
            "numberOfBytes": "64"
          },
          "t_struct(UintSet)1436_storage": {
            "label": "struct EnumerableSetUpgradeable.UintSet",
            "members": [
              {
                "label": "_inner",
                "type": "t_struct(Set)1050_storage",
                "offset": 0,
                "slot": "0"
              }
            ],
            "numberOfBytes": "64"
          },
          "t_struct(UintToAddressMap)1864_storage": {
            "label": "struct EnumerableMapUpgradeable.UintToAddressMap",
            "members": [
              {
                "label": "_inner",
                "type": "t_struct(Map)1546_storage",
                "offset": 0,
                "slot": "0"
              }
            ],
            "numberOfBytes": "64"
          },
          "t_uint256": {
            "label": "uint256",
            "numberOfBytes": "32"
          }
        }
      }
    }
  }
}
