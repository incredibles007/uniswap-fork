require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.6.6",
  networks: {
    localhost: {
      url: `http://127.0.0.1:8545/`,
      accounts: [`0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`]
    },
    kovanTest: {
      url: `https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
      accounts: [`60eb516bc7bc86bfe9c2ed0468cbef9441e5fa3e78a343263642aabcb96abfd2`]
    }
  }
};
