// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  console.log("Deploying BonesToken on", hre.network.name, "network...")

  const BonesToken = await hre.ethers.getContractFactory("BonesToken");
  const bonesTokenFactory = await BonesToken.deploy();
  await bonesTokenFactory.deployed();

  console.log("BonesToken deployed to:", bonesTokenFactory.address);
  // UniswapV2Factory deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3

  let UNISWAP_ROUTER_ADDRESS,
    UNISWAP_PAIR_ADDRESS,
    ROUTER_FORK_ADDRESS,
    PAIR_FORK_ADDRES,
    BONUS_TOKEN_ADDRESS;

  if (hre.network.name === "hardhat") {
  }
  else if (hre.network.name == "ropstenTest") {
    UNISWAP_ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
    UNISWAP_PAIR_ADDRESS = ""
  }
  else {
    throw new Error(`Invalid network ${hre.network.name}`)
  }

  const LiquidityMigrator = await hre.ethers.getContractFactory("LiquidityMigrator");
  const liquidityMigratorFactory = await LiquidityMigrator.deploy(
    PAIR_ADDRESS,
    ROUTER_ADDRESS,
    ROUTER_FORK_ADDRESS,
    PAIR_FORK_ADDRES,
    BONUS_TOKEN_ADDRESS
  );

  await liquidityMigratorFactory.deployed();

  console.log("LiquidityMigrator is deployed at:", liquidityMigratorFactory.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
