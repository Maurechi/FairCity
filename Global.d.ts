import { ethers } from 'ethers'

declare global {
  type Provider = ethers.providers.Web3Provider &
    ethers.providers.JsonRpcProvider &
    ethers.providers.ExternalProvider
  interface Window {
    ethereum: Provider
  }
}
