// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const WETHFactory = await hre.ethers.getContractFactory("WETH");
  const wethFactory = await WETHFactory.deploy();
  await wethFactory.deployed();

  console.log("WETHFactory deployed to:", wethFactory.address);
  const FACTORY_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  const WETH_ADDRESS = wethFactory.address

  const UniswapV2Router02Factory = await hre.ethers.getContractFactory("UniswapV2Router02")
  const uniswapV2Router02Factory = await UniswapV2Router02Factory.deploy(FACTORY_ADDRESS, WETH_ADDRESS)
  await uniswapV2Router02Factory.deployed();

  console.log("UniswapV2Router02Factory is deploed to:", uniswapV2Router02Factory.address)

  // WETHFactory deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
  // UniswapV2Router02Factory is deploed to: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
