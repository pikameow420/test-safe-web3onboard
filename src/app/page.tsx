'use client'

import { useEffect } from 'react'
import { useConnectWallet, useWallets } from '@web3-onboard/react'
import ConnectButton from './components/connect-button'
import BatchTransaction from './components/batch-transaction'
import { web3Onboard } from './web3onboard'
import { useSafeAppsSDK } from '@safe-global/safe-apps-react-sdk'

export default function Home() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const {safe, sdk} = useSafeAppsSDK()

  // Function for Safe connection
  useEffect(() => {
    // Check if we're in a Safe environment and attempt to connect
    if (safe) {
      const connectToSafe = async () => {
        try {
           const wallets = await connect({
            autoSelect: { label: 'Safe', disableModals: true }
          });
          console.log("Connected to Safe:", wallets);
          return wallets;
        } catch (error) {
          console.error("Failed to connect to Safe:", error);
          return null;
        }
        };
        connectToSafe()
    }
  }, [safe, connect]);

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