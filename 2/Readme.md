# ETH_AVAX_Mod3 Token Contract

This repository contains a Solidity smart contract `ETH_AVAX_Mod3` that implements an ERC-20 token named "Rupees" (symbol: Rs) on the Ethereum blockchain.

## Contract Details

- **Contract Name:** ETH_AVAX_Mod3
- **Token Name:** Rupees
- **Token Symbol:** Rs
- **Solidity Version:** ^0.8.0
- **License:** MIT License

## Description

The `ETH_AVAX_Mod3` contract extends from OpenZeppelin's ERC20 standard, implementing functionalities for token minting and burning.

## Functionality

1. **Constructor**
   - Initializes the token with an initial supply of 1,000,000 tokens minted to the contract deployer.

2. **Minting**
   - Function `mint(address to, uint256 amount)` allows the owner to mint additional tokens and assign them to a specified address.

3. **Burning**
   - Function `burn(uint256 amount)` allows any token holder to burn their own tokens, reducing the total supply.

## Owner Functionality

- The contract has an `owner` address set during deployment.
- Only the owner can execute the `mint` function to create new tokens.
- Token holders can burn their own tokens using the `burn` function.

## Usage

To deploy and interact with this contract, you can follow these steps:

1. Deploy the contract on a development or mainnet Ethereum network.
2. Use a wallet or a script to interact with the contract functions:
   - Mint new tokens using the `mint` function.
   - Burn tokens using the `burn` function.

## Development

To set up this project locally for development or testing:

1. Clone this repository.
2. Install required dependencies, including Solidity compiler and OpenZeppelin contracts.
3. Compile the `ETH_AVAX_Mod3.sol` contract.
4. Deploy the contract to your desired Ethereum network for testing or production.


## Developer
- **Author**: Agrim Justa
- **Contact**: agrimjusta@gmail.com
