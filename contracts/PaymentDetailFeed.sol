// SPDX-License-Identifier: UNLICENSED

import "@openzeppelin/contracts/access/Ownable.sol";

pragma solidity ^0.8.0;

contract DataFeed is Ownable{

    event PaymentDetail(uint buddyTokenID, address paymentToken, uint paymentTokenID);

    function paymentDetail(uint buddyTokenID, address paymentToken, uint paymentTokenID) external onlyOwner {
        emit PaymentDetail(buddyTokenID, paymentToken, paymentTokenID);
    }
}

