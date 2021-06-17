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

  console.log("Deploying UniswapV2Factory on", hre.network.name, "network...")
  // This is my account address
  const feeSetterAddress = "0x1BfC443DE53B8B1c3f488DCf797f412f36552c07"
  // We get the contract to deploy
  const UniswapV2Factory = await hre.ethers.getContractFactory("UniswapV2Factory");
  const uniswapV2Factory = await UniswapV2Factory.deploy(feeSetterAddress);
  await uniswapV2Factory.deployed();

  console.log("UniswapV2Factory deployed to:", uniswapV2Factory.address);
  // UniswapV2Factory deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3

  let token1Address, token2Address;
  if (hre.network.name === "hardhat")
  {
    console.log("Deploying Token1 and Token2")
    const Token1 = await hre.ethers.getContractFactory("Token1");
    const Token2 = await hre.ethers.getContractFactory("Token2");
    const token1Factory = await Token1.deploy();
    const token2Factory = await Token2.deploy();

    console.log("Token 1 is deployed to address: ", token1Factory.address)
    console.log("Token 2 is deployed to address: ", token2Factory.address)
  
    token1Address = token1Factory.address
    token2Address = token2Factory.address  
  }
  else if (hre.network.name == "ropstenTest")
  {
    // Ropsten ERC20Token1
    token1Address = "0x8d1ddfe0860b9e6632579400aebf7735684c8bce"
    // Meter-ERC20
    token2Address = "0x8f9ec10f71afc10b123234e470d625713fc59514"
  }
  else {
    throw new Error(`Invalid network ${hre.network.name}`)
  }

  console.log(`Creating factory pair: [${token1Address}, ${token2Address}]`)

  let pairAddress = await uniswapV2Factory.createPair(token1Address, token2Address)
  console.log(`UniswapV2Pair address: `, pairAddress)
  pairAddress = await uniswapV2Factory.getPair(token1Address, token2Address);
  console.log(`UniswapV2Factory.getPair(token1: ${token1Address}, token2: ${token2Address})`, pairAddress)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
