# Solidity Calculator with Basic Front End

## Overview

This project implements a simple calculator using Solidity smart contracts for arithmetic operations, along with a basic front end for user interaction. It allows users to perform addition, subtraction, multiplication, and division operations on a decentralized application (dApp).

### Features

- Addition, subtraction, multiplication, and division operations.
- Smart contract written in Solidity (`BasicMath.sol`).
- Basic web front end (`index.html`, `app.js`, `styles.css`) for user interface.
- Integration with MetaMask for transaction management on Ethereum blockchain.

## Project Structure

The project consists of several main components:

- **Smart Contract**: 
  - `contracts/BasicMath.sol`: Defines arithmetic operations using Solidity. It includes functions for addition, subtraction, multiplication, and division. Operations are performed using unsigned integers (`uint256`) for simplicity and demonstration purposes.

- **Front End**:
  - `index.html`: Provides the HTML structure for the calculator UI. It includes input fields for operands, buttons for each operation, and areas to display results.
  - `app.js`: Handles user interaction with the calculator UI. It communicates with the Ethereum blockchain via Web3.js, interacting with the deployed `BasicMath` contract to execute operations and handle transactions.
  - `styles.css`: Contains basic styles to improve the visual presentation and usability of the calculator UI.

- **Deployment Scripts**:
  - `truffle-config.js`: Configuration file for Truffle framework. It specifies the network settings (e.g., development environment) and compiler version used for deploying Solidity contracts.
  - `migrations/2_deploy_contracts.js`: Truffle migration script responsible for deploying the `BasicMath` contract to the specified network (e.g., Ganache local blockchain).

## Installation and Setup

### Prerequisites

Before starting, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [Truffle Framework](https://www.trufflesuite.com/truffle) (v5.x or later)
- [Ganache](https://www.trufflesuite.com/ganache) or other Ethereum client for local blockchain development.
- [MetaMask](https://metamask.io/) browser extension for Ethereum wallet and transaction management.

### Steps to Install and Run

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-folder>


2. **Install dependencies**:

    ```bash
    npm install


3. **Compile contracts**:

    ```bash
    truffle compile

4. **Deploy contracts**:

    ```bash
    truffle migrate
Ensure Ganache is running and configured to listen on localhost:8545 (default).

5.**Start the development server**:

    ```bash
    npm start
Open your browser and navigate to http://localhost:3000 to access the calculator UI.

6.**Connect MetaMask**:

Open MetaMask and configure it to connect to your local Ganache blockchain (Custom RPC with http://localhost:8545 or http://localhost:7545).
Import accounts from Ganache into MetaMask for testing.
## Developer
- **Author**: [Agrim Justa]
- **Contact**: [agrimjusta@gmail.com]
