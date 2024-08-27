'use client'

import Image from 'next/image'
import { useConnectWallet } from '@web3-onboard/react'
import { ethers } from 'ethers'
import ConnectButton from './components/connect-button'
import BatchTransaction from './components/batch-transaction'

export default function Home() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

  // create an ethers provider
  let ethersProvider

  if (wallet) {
    ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')
  }
  
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
       {wallet && <BatchTransaction wallet={wallet} />}
      </main>
    </div>
  )
}