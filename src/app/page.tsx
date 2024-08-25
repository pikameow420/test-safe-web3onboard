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
    <div>
      <main>
        <h1>
          Welcome to this demo of{'Safe Apps Integration with Web3-Onboard'}
          <a href="https://onboard.blocknative.com"> Web3-Onboard!</a>
        </h1>
        <ConnectButton
          connecting={connecting}
          wallet={wallet}
          connect={connect}
          disconnect={disconnect}
        />
       {wallet && <BatchTransaction wallet={wallet} />}
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}