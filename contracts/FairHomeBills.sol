// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract FairHomeBills {
    address public companyAddress;
    address public clientAddress;
    uint public costPerKWH;
    uint public totalKWHUsed;
    uint public currentKWHOwed;
    uint private accountBalance;

    constructor(uint _cost, address _client) {
        costPerKWH = _cost;
        companyAddress = msg.sender;
        clientAddress = _client;
    }
    
    modifier onlyClient {
        require(msg.sender == clientAddress, "only client");
        _;
    }

    function consumption(uint _ammount) external onlyClient { 
        totalKWHUsed += _ammount;
        currentKWHOwed += _ammount;
    }

    function viewAccountBalance() external returns (uint) {
        return accountBalance = currentKWHOwed * costPerKWH;
    }

    function settleBalance() external payable returns (uint) {
        accountBalance -= msg.value;
        currentKWHOwed = accountBalance / costPerKWH;
        return accountBalance;
    }
}

