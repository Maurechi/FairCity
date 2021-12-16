import { ethers } from 'ethers'
import FairHomeBillArtifacts from '../../artifacts/contracts/FairHomeBills.sol/FairHomeBills.json'
import { FairHomeBills } from '../../typechain-types/FairHomeBills'

const getBillsContractDetails = async (provider: Provider) => {
  const electricContract = new ethers.Contract(
    '0xfBF037DafE11262dA786D7cEAc558BEd3fcdCF35',
    FairHomeBillArtifacts.abi,
    provider
  ) as FairHomeBills
  const costInEth = ethers.utils.formatEther(
    await electricContract.costPerKWH()
  )
  try {
    const costInWei = (await electricContract.costPerKWH()).toString()
    const KHOwned = (await electricContract.currentKWHOwed()).toString()
    const clientAddress = await electricContract.companyAddress()
    const companyAddress = await electricContract.clientAddress()
    const totalKHUsed = (await electricContract.totalKWHUsed()).toString()
    console.log('costInEth:', costInEth)
    console.log('costInWei:', costInWei)
    console.log('KHOwned:', KHOwned)
    return { costInWei, KHOwned, clientAddress, companyAddress, totalKHUsed }
  } catch (e: unknown) {
    const error = e as Error
    throw new Error(error.message)
  }
}

export default getBillsContractDetails
