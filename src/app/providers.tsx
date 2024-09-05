'use client'

import { Web3OnboardProvider } from "@web3-onboard/react";
import {web3Onboard} from "./web3onboard";
import SafeProvider from '@safe-global/safe-apps-react-sdk'

export default function Web3Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <SafeProvider>{children}</SafeProvider>
    </Web3OnboardProvider>
  );
}