'use client'

import { useState } from 'react'
import { useSafeAppsSDK } from '@safe-global/safe-apps-react-sdk'
import { WalletState } from '@web3-onboard/core'
import { useSendUSDC } from '../useSendUSDC'

interface BatchTransactionProps {
  wallet?: WalletState
}

const BatchTransaction: React.FC<BatchTransactionProps> = ({ wallet }) => {
  const { sdk } = useSafeAppsSDK()
  const [usdcAmount, setUsdcAmount] = useState('')
  const [txHash, setTxHash] = useState<string | null>(null)
  const {sendUSDC, isPending, isError} = useSendUSDC()
  const [safeTxHash, setSafeTxHash] = useState<string | null>(null)


  const handleSend = async () => {
      try {
      const transactions = await sendUSDC(usdcAmount)
      const { safeTxHash } = await sdk.txs.send({
        txs: transactions,
      })
      console.log('Transaction sent:', safeTxHash)
      setTxHash(safeTxHash)
    } catch (err) {
      console.error('Failed to send transaction:', err)
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Batch Transaction</h2>
      <div className="flex items-center">
        <input
          type="text"
          value={usdcAmount}
          onChange={(e) => setUsdcAmount(e.target.value)}
          placeholder="USDC Amount"
          className="p-2 border rounded mr-2 text-black"
          min={0}
          step={0.000001}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-400 transition-colors disabled:bg-gray-400"
          onClick={handleSend}
          disabled={isPending || !usdcAmount}
        >
          {isPending ? 'Sending...' : 'Send USDC'}
        </button>
      </div>
      {/* {txHash && (
        <div className="mt-4">
          <a
            href={getBlockExplorerLink(txHash) || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View transaction on block explorer
          </a>
        </div>
      )} */}
      {isError && <div className="text-red-500 mt-4">Error sending USDC</div>}
    </div>
  )
}

export default BatchTransaction