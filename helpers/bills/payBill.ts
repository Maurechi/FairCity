import { ethers } from 'ethers'
import FairHomeBillArtifacts from '../../artifacts/contracts/FairHomeBills.sol/FairHomeBills.json'
import { FairHomeBills } from '../../typechain-types/FairHomeBills'

const payBill = async (provider: Provider, ammount: string) => {
  const electricContract = new ethers.Contract(
    '0xfBF037DafE11262dA786D7cEAc558BEd3fcdCF35',
    FairHomeBillArtifacts.abi,
    provider.getSigner()
  ) as FairHomeBills

  try {
    const res = electricContract.settleBalance({
      // value: ethers.utils.parseUnits('10000000', 'wei'),
      value: ethers.utils.parseEther('0.0055'),
      gasLimit: ethers.utils.parseUnits('31000', 'wei'),
    })
    return res
  } catch (e) {
    const error = e as Error
    console.log(error)
    throw new Error(error.message)
  }
}

export default payBill
