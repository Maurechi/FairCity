import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { ethers } from 'ethers'
import { accountVar, providerVar } from '../graphql/Vars'

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: '08a8ca52c56b4a9da70acdaf961240e6', // required
    },
  },
}

// request Wallet Connect Access
// export const requestWCAccount = async () => {
//   console.log('request')
//   const web3Modal = new Web3Modal({ providerOptions })
//   const provider = (await web3Modal.connectTo(
//     'walletconnect'
//   )) as WalletConnectProvider
//   console.log('provider', provider)
//   const [account] = provider.accounts
//   providerVar(provider)
//   accountVar(account)
//   return { provider, account }
// }

//  request MetaMask Access
export async function requestMetaMaskAccount() {
  if (window.ethereum?.request) {
    const web3modal = new Web3Modal()
    const connection = await web3modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const [account] = await provider.listAccounts()
    providerVar(provider as Provider)
    accountVar(account)
    console.log('account: ', account)
    console.log('provider: ', provider)
    return { provider, account }
  }

  throw new Error(
    'Missing install Metamask. Please access https://metamask.io/ to install extension on your browser'
  )
}
