# Connect APIs to your Smart Contracts using Chainlink Keppers

## Install the Dependencies and Dotenv

```shell
npm install
```
## Create .env file

```shell
RINKEBY_URL=''
PRIVATE_KEY=''
ETHERSCAN_API =''
```
## Compiling the Smart Contracts

```shell
npx hardhat compile
```

## Deploy Smart Contracts on Rinkeby Network

```shell
npx hardhat run --network rinkeby scripts/deploy.js
```

## Verify Smart Contracts on Etherscan

```shell
npx hardhat verify --network rinkeby <SMART_CONTRACT_DEPLOYED> "10" "0xECe365B379E1dD183B20fc5f022230C044d51404" "0x6168499c0cFfCaCD319c818142124B7A15E857ab"
```

## Deployed contracts
https://rinkeby.etherscan.io/address/0x86B450550049c5A63ab40FA89080D477F2184EC4#code
