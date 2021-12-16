import { makeVar } from '@apollo/client'
import WalletConnectProvider from '@walletconnect/web3-provider'

export const accountVar = makeVar<string | null>(null)
export const providerVar = makeVar<Provider | null>(null)
