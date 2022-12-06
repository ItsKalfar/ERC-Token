const { ethers } = require("hardhat");

const networkConfig = {
  default: {
    name: "hardhat",
    tokenName: "StellarToken",
    symbol: "ST",
    decimals: "18",
    totalSupply: ethers.utils.parseEther("10000000"),
  },
  31337: {
    name: "localhost",
    tokenName: "StellarToken",
    symbol: "ST",
    decimals: "18",
    totalSupply: ethers.utils.parseEther("10000000"),
  },
  5: {
    name: "goerli",
    tokenName: "ArsyToken",
    symbol: "ARSY",
    decimals: "18",
    totalSupply: ethers.utils.parseEther("10000000"),
  },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChains,
};
