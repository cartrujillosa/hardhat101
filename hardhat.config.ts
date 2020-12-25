import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      { version: "0.7.3", settings: {} },
      { version: "0.6.8", settings: {} }
    ],
  },
  // networks: {
  //   hardhat: {},
  //   rinkeby: {
  //     url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
  //     accounts: [RINKEBY_PRIVATE_KEY],
  //   },
  // },
  // npx hardhat verify-contract --contract-name Counter --address 0xF0E6Ea29799E85fc1A97B7b78382fd034A6d7864
  // etherscan: {
  //   // Your API key for Etherscan
  //   // Obtain one at https://etherscan.io/
  //   apiKey: ETHERSCAN_API_KEY,
  // },
};
export default config;
