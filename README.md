# Forking Uniswap Notes

I created this repository following great tutorial by Justin [Fork Uniswap & Create Your Own Sushiswap | Full Tutorial](https://www.youtube.com/watch?v=U3fTTqHy7F4&t=2s)

Different from the tutorial, I've used hardhat to follow the tutorial.
It has 3 parts contracts
core, periphery, and migrator

## Core
Factory contract creates pairs. Pair tokens must be ERC20 tokens.

## Periphery

Router contract 
## Migrator
Migrator contract

## Notes

First, Deploy core contracts
```
yarn run hardhat run scripts\deploy.js --network kovanTest 
```

```powershell
$ C:\Users\servet\repos\uniswap-fork\core\node_modules\.bin\hardhat run .\scripts\deploy.js --network kovanTest
Deploying UniswapV2Factory on kovanTest network...
UniswapV2Factory deployed to: 0xf3Be7971d7e643358b12CC881BD6817af5b727c3
Creating factory pair: [CollateralERC20, MockERC20]
UniswapV2Factory.getPair(token1: CollateralERC20, token2: MockERC20) 0xebDB7fd1c6F4498F0645a00e9DdcE3cf52491faC
Done in 27.57s.
```
Fork factory address is 
``` 0xf3Be7971d7e643358b12CC881BD6817af5b727c3 ```

Pair address is 
```0xebDB7fd1c6F4498F0645a00e9DdcE3cf52491faC```

Uniswap router address is defined [Uniswap Router02 document](https://uniswap.org/docs/v2/smart-contracts/router02/)
```0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D```

