"use client";

import safeModule from "@web3-onboard/gnosis";
import injectedModule from "@web3-onboard/injected-wallets";
import { init } from "@web3-onboard/react";

const injected = injectedModule();

const safe = safeModule({
  whitelistedDomains: [/^https:\/\/.*\.safe\.global$/,/^https:\/\/.*\.coinshift\.global$/,     /^http:\/\/localhost:3000$/],
});



const web3Onboard = init({
  // An array of wallet modules that you would like to be presented to the user to select from when connecting a wallet.
  wallets: [injected, safe],
  // An array of Chains that your app supports
  chains: [
    {
      // hex encoded string, eg '0x1' for Ethereum Mainnet
      id: "0x1",
      // string indicating chain namespace. Defaults to 'evm' but will allow other chain namespaces in the future
      namespace: "evm",
      // the native token symbol, eg ETH, BNB, MATIC
      token: "ETH",
      // used for display, eg Ethereum Mainnet
      label: "Ethereum Mainnet",
      // used for network requests
      rpcUrl: `https://rpc.ankr.com/eth`,
      blockExplorerUrl: `https://etherscan.io`,
    },
    {
      id: 42161,
      token: "ARB-ETH",
      label: "Arbitrum One",
      rpcUrl: "https://rpc.ankr.com/arbitrum",
      blockExplorerUrl: `https://arbiscan.io`,
    },
    {
      id: "0xa4ba",
      token: "ARB",
      label: "Arbitrum Nova",
      rpcUrl: "https://nova.arbitrum.io/rpc",
      blockExplorerUrl: `https://nova-explorer.arbitrum.io`,
    },
    {
      id: "0x89",
      token: "MATIC",
      label: "Matic Mainnet",
      rpcUrl: "https://matic-mainnet.chainstacklabs.com",
      blockExplorerUrl: `https://polygonscan.com`,
    },
  ],
  appMetadata: {
    // The name of your dApp
    name: "Web3Onboard Example",
    // SVG icon string, with height or width (whichever is larger) set to 100% or a valid image URL
    icon: "<svg></svg>",
    // Optional wide format logo (ie icon and text) to be displayed in the sidebar of connect modal. Defaults to icon if not provided
    logo: "<svg></svg>",
    // The description of your app
    description: "Demo app for Web3-Onboard and Safe Apps SDK",
    // url that points to more information about app
    explore: "http://mydapp.io/about",
  },



});


console.log("Available wallet modules:", web3Onboard.state.get().wallets);




export { web3Onboard };
