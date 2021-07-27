import '@nomiclabs/hardhat-ethers';
import '@openzeppelin/hardhat-upgrades';

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: 'moonbase',
  networks: {
    moonbase: {
      url: 'https://rpc.testnet.moonbeam.network',
      accounts: ['90121808028adae9d38f0ad2ab29929bb4a7dbed40aaa02e1b5f49572a297066'],
      gas: 2100000
    },
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/9f93acc51f924486b1f0a74a1d8168d2',
      accounts: ['7540d48032c731b3a17947b63a04763492d84aef854246d355a703adc9b54ce9'],
    }
  },
};
