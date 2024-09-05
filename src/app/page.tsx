'use client'

import { useEffect } from 'react'
import { useConnectWallet } from '@web3-onboard/react'
import ConnectButton from './components/connect-button'
import BatchTransaction from './components/batch-transaction'
import { web3Onboard, connectToSafe } from './web3onboard'

export default function Home() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

  useEffect(() => {
    // Log available wallets on component mount
    console.log("Available wallets:", web3Onboard.state.get().wallets);

    // Check if we're in a Safe environment and attempt to connect
    if (window.parent !== window) {
      console.log('Potentially running in a Safe App');
      connectToSafe();
    }
  }, []);

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