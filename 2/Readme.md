# ETH_AVAX_Mod3 Contract

## Overview
This Solidity smart contract implements a basic ERC20-like token named "Rupees" (`Rs`). It allows token minting by the contract owner, token transfers between addresses, and token burning.

## Details

### Token Details
- **Name**: Rupees
- **Symbol**: Rs
- **Decimals**: 18

### Owner
The contract owner has special privileges to mint new tokens.

### Functions

#### `mint`
Allows the contract owner to mint new tokens and assign them to a specified address.

#### `transfer`
Enables token holders to transfer tokens to another address.

#### `burn`
Allows token holders to burn (destroy) their own tokens.

## Events
The contract emits the following events:
- `Transfer`: Fired when tokens are transferred between addresses.
- `Mint`: Fired when new tokens are minted.
- `Burn`: Fired when tokens are burned.


## Developer
- **Author**: [Agrim Justa]
- **Contact**: [agrimjusta@gmail.com]
