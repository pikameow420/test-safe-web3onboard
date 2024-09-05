"use client"

import React from 'react'
import { WalletState } from '@web3-onboard/core'

interface ConnectButtonProps {
  connecting: boolean
  wallet: WalletState | null
  connect: () => Promise<WalletState[]>
  disconnect: (wallet: WalletState) => Promise<WalletState[]>
}

const ConnectButton: React.FC<ConnectButtonProps> = ({ wallet, connect, disconnect }) => {
  return (
    <button
      className="rounded-full bg-blue-500 text-white text-lg font-semibold py-3 px-6 mt-10 cursor-pointer font-inherit disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={() => (wallet ? disconnect(wallet) : connect())}
    >
      {wallet ? `${wallet.accounts[0].address.slice(0, 6)}...${wallet.accounts[0].address.slice(-4)}` : 'Connect'}
      </button>
  )
}

export default ConnectButton