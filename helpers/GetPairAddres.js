const { FACTORY_ADDRESS, INIT_CODE_HASH } = require('@uniswap/sdk')
const { pack, keccak256 } = require ('@ethersproject/solidity')
const { getCreate2Address } = require ('@ethersproject/address')

const dai = '0xc7ad46e0b8a400bb3c915120d284aafba8fc4735' // change me!
const weth = '0xc778417e063141139fce010982780140aa0cd5ab' // change me!

const pair = getCreate2Address(
  FACTORY_ADDRESS,
  keccak256(['bytes'], [pack(['address', 'address'], [dai, weth])]),
  INIT_CODE_HASH
)

console.log('Pair address is:', pair)