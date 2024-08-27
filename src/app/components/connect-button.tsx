"use client"

import React from 'react'
import { WalletState } from '@web3-onboard/core'

interface ConnectButtonProps {
  connecting: boolean
  wallet: WalletState | null
  connect: () => Promise<WalletState[]>
  disconnect: (wallet: WalletState) => Promise<WalletState[]>
}

const ConnectButton: React.FC<ConnectButtonProps> = ({ connecting, wallet, connect, disconnect }) => {
  return (
    <button
      className="rounded-full bg-blue-500 text-white text-lg font-semibold py-3 px-6 mt-10 cursor-pointer font-inherit disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={connecting}
      onClick={() => (wallet ? disconnect(wallet) : connect())}
    >
      {connecting ? 'Connecting' : wallet ? 'Disconnect' : 'Connect'}
    </button>
  )
}

export default ConnectButton