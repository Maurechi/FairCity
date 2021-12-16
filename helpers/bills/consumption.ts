import { ethers } from 'ethers'
import FairHomeBillArtifacts from '../../artifacts/contracts/FairHomeBills.sol/FairHomeBills.json'
import { FairHomeBills } from '../../typechain-types/FairHomeBills'

const consumption = async (provider: Provider, ammount: string) => {
  const billContract = new ethers.Contract(
    '0xfBF037DafE11262dA786D7cEAc558BEd3fcdCF35',
    FairHomeBillArtifacts.abi,
    provider.getSigner()
  ) as FairHomeBills

  try {
    const res = await billContract.consumption(
      ethers.utils.parseUnits(ammount, 'wei')
    )
    return res
  } catch (e) {
    const error = e as Error
    throw new Error(error.message)
  }
}

export default consumption
