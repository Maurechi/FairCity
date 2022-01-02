// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract FairHomeBills {
    address payable public immutable companyAddress;
    address public immutable clientAddress;
    uint256 public constant COSTPERKWH = 100;
    uint256 public totalKWHUsed;
    uint256 public currentKWHOwed;
    uint256 private accountBalance;

    event SettledBalance(string message, uint256 balance);

    constructor(address _client) {
        companyAddress = payable(msg.sender);
        clientAddress = _client;
    }

    modifier onlyClient() {
        require(msg.sender == clientAddress, "only client");
        _;
    }

    function consumption(uint256 _ammount) external onlyClient {
        totalKWHUsed += _ammount;
        currentKWHOwed += _ammount;
    }

    function viewAccountBalance() external returns (uint256) {
        return accountBalance = currentKWHOwed * COSTPERKWH;
    }

    receive() external payable {
        accountBalance -= msg.value;
        uint256 _accountBalance = accountBalance;
        currentKWHOwed = _accountBalance / COSTPERKWH;
        emit SettledBalance("Your account Balance:", _accountBalance);
    }

    function withdraw() external payable {
        require(msg.sender == companyAddress, "only company");
        (bool success, ) = msg.sender.call{value: address(this).balance}("");
        require(success, "Failed to send Ether");
    }
}
