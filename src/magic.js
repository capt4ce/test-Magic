import { Magic } from 'magic-sdk';
import Web3 from 'web3';

// Setting network to Rinkeby
export const magicMatic = new Magic(REACT_APP_MAGIC_PUBLISHABLE_KEY_TEST, {
  network: 'rinkeby',
});
magicMatic.network = 'rinkeby';

export const maticWeb3 = new Web3(magicMatic.rpcProvider);

// Setting network to Ethereum
export const magicEthereum = new Magic(REACT_APP_MAGIC_PUBLISHABLE_KEY);
magicEthereum.network = 'ethereum';

export const ethWeb3 = new Web3(magicEthereum.rpcProvider);
