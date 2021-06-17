// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {


  let FACTORY_ADDRESS, WETH_ADDRESS
  if (hre.network.name == "hardhat")
  {     
    FACTORY_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

    const WETHFactory = await hre.ethers.getContractFactory("WETH");
    const wethFactory = await WETHFactory.deploy();
    await wethFactory.deployed();
    WETH_ADDRESS = wethFactory.address
  
    console.log("WETHFactory deployed to:", wethFactory.address);
  }
  else if (hre.network.name == "ropstenTest")
  {
    FACTORY_ADDRESS = "0xe83dF27eF92d95C883cB0f22d8Be5f4E35500Ad3"
    WETH_ADDRESS = "0xb603cea165119701b58d56d10d2060fbfb3efad8"
  }
  
  console.log("Deploying UniswapV2Router02 on ", hre.network.name)
  const UniswapV2Router02Factory = await hre.ethers.getContractFactory("UniswapV2Router02")
  const uniswapV2Router02Factory = await UniswapV2Router02Factory.deploy(FACTORY_ADDRESS, WETH_ADDRESS)
  await uniswapV2Router02Factory.deployed();

  console.log("UniswapV2Router02Factory is deployed to:", uniswapV2Router02Factory.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
