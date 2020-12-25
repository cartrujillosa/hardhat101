# Starting with Hardhat

`Token.sol` from [official documentation](https://hardhat.org/tutorial/).

`Counter.sol` using typescript following [this post](https://rahulsethuram.medium.com/the-new-solidity-dev-stack-buidler-ethers-waffle-typescript-tutorial-f07917de48ae).


## Requirements
```sh
npm init -y
npm install --save-dev hardhat # hardhat
npm install --save-dev ts-node typescript @types/node @types/mocha # typescript
npm install --save-dev hardhat-typechain typechain ts-generator @typechain/ethers-v5 # gives you a full typed interface for your smart contracts
npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai # some plugins
```

## Useful commands
```sh
npx hardhat # init
npx tsc --init # typscript init
npx hardhat compile # compile and generate the Typechain artifacts inside the typechain/ directory
npx hardhat node # default local hardhat network
npx hardhat test
```

## More
Upgradeable SC: [link](https://forum.openzeppelin.com/t/openzeppelin-upgrades-step-by-step-tutorial-for-hardhat/3580)