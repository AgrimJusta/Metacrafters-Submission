// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BasicMath {

    // Addition
    function add(uint256 a, uint256 b) public pure returns (uint256) {
        return a + b;
    }

    // Subtraction
    function subtract(uint256 a, uint256 b) public pure returns (uint256) {
        return a - b;
    }

    // Multiplication
    function multiply(uint256 a, uint256 b) public pure returns (uint256) {
        return a * b;
    }

    // Division
    function divide(uint256 a, uint256 b) public pure returns (uint256) {
        require(b != 0, "Division by zero is not allowed.");
        return a / b;
    }
}
