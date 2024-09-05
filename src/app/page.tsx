'use client'

import { useEffect } from 'react'
import { useConnectWallet, useWallets } from '@web3-onboard/react'
import ConnectButton from './components/connect-button'
import BatchTransaction from './components/batch-transaction'
import { web3Onboard } from './web3onboard'

export default function Home() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const allWallets = web3Onboard.state.get().wallets
  // Function to attempt Safe connection
  const connectToSafe = async () => {
  try {
    console.log("Available wallet modules:", allWallets);
    console.log(allWallets.map((wallet)=>wallet?.label))
    const wallets = await web3Onboard.connectWallet({
      autoSelect: { label: 'safe', disableModals: true }
    });
    console.log("Connected to Safe:", wallets);
    return wallets;
  } catch (error) {
    console.error("Failed to connect to Safe:", error);
    return null;
  }
  };

  useEffect(() => {
    // Log available wallets on component mount
    console.log("Available wallets:", web3Onboard.state.get().wallets);

    // Check if we're in a Safe environment and attempt to connect
    if (window.parent !== window) {
      console.log('Potentially running in a Safe App');
      connectToSafe();
    }
  }, [connectToSafe]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-2xl font-bold">
          Welcome to this demo of Safe Apps Integration with Web3-Onboard!
        </h1>
        <ConnectButton
          connecting={connecting}
          wallet={wallet}
          connect={connect}
          disconnect={disconnect}
        />
        {wallet && <BatchTransaction />}
      </main>
    </div>
  )
}