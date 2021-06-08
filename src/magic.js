import { Magic } from 'magic-sdk';
import Web3 from 'web3';

// const BSCOptions = {
//   rpcUrl: 'https://bsc-dataseed.binance.org/', // Smart Chain RPC URL
//   chainId: 56, // Smart Chain chain id
// };

const BSCOptions = {
  rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/', // Smart Chain - Testnet RPC URL
  chainId: 97, // Smart Chain - Testnet chain id
};

// Setting network to Rinkeby
export const magicMatic = new Magic(
  process.env.REACT_APP_MAGIC_PUBLISHABLE_KEY,
  {
    network: BSCOptions,
  }
);

export const maticWeb3 = new Web3(magicMatic.rpcProvider);

// Setting network to Ethereum
export const magicEthereum = new Magic(
  process.env.REACT_APP_MAGIC_PUBLISHABLE_KEY
);
magicEthereum.network = 'ethereum';

export const ethWeb3 = new Web3(magicEthereum.rpcProvider);
