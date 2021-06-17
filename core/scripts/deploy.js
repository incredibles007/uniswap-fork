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

  // Dummy fee setter address
  const feeSetterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  // We get the contract to deploy
  const UniswapV2Factory = await hre.ethers.getContractFactory("UniswapV2Factory");
  const uniswapV2Factory = await UniswapV2Factory.deploy(feeSetterAddress);
  await uniswapV2Factory.deployed();

  console.log("UniswapV2Factory deployed to:", uniswapV2Factory.address);
  // UniswapV2Factory deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3

  // Token 1 is deployed to address:  0x5FbDB2315678afecb367f032d93F642f64180aa3
  // Token 2 is deployed to address:  0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
  let token1Address, token2Address;
  token1Address = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  token2Address = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"

  const pairAddress = await uniswapV2Factory.createPair(token1Address, token2Address)
  console.log("UniswapV2Factory pair hash:", pairAddress.hash)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
