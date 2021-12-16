import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { Button, PageWrapper, Text } from '../components/common'
import { useReactiveVar } from '@apollo/client'
import { providerVar } from '../graphql/Vars'
import { requestMetaMaskAccount, shortenAddress } from '../helpers/'
import Link from 'next/link'
import Loader from '../components/Loader'
import { consumption, getBillsContractDetails, payBill } from '../helpers/bills'

interface BillData {
  costInWei: string
  KHOwned: string
  clientAddress: string
  companyAddress: string
  totalKHUsed: string
}

const HomeBills: NextPage = () => {
  const [data, setData] = useState<BillData | null>(null)
  const [loading, setLoading] = useState<Boolean>(true)
  const provider = useReactiveVar(providerVar)

  const setContractInfo = async () => {
    try {
      const data = await getBillsContractDetails(provider)
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (provider) {
      setLoading(true)
      setContractInfo().finally(() => {
        return setLoading(false)
      })
    } else {
      requestMetaMaskAccount()
    }
  }, [provider])

  const onClick = async (amount: string) => {
    const consuming = await consumption(provider, amount)
    setLoading(true)
    setData(null)
    const consumed = await consuming.wait()
    await setContractInfo()
    setLoading(false)
  }

  const pay = async (ammount: string) => {
    const start = await payBill(provider, ammount)
    setLoading(true)
    setData(null)
    await start.wait()
    await setContractInfo()
    setLoading(false)
  }

  return (
    <PageWrapper>
      <Text as='h1'>Try using these services</Text>
      {loading && <Loader text='Loading' />}
      {data && !loading && (
        <>
          <Text>Client Address: {shortenAddress(data.clientAddress)}</Text>
          <Text>Company Address: {data.companyAddress}</Text>
          <Text>Cost per KW: {data.costInWei}</Text>
          <Text>Current KH owned: {data.KHOwned}</Text>
          <Text>Total KH consumption: {data.totalKHUsed}</Text>
        </>
      )}
      <Link href='/'>Go Back</Link>
      <Button text='Take a shower (10 min)' onClick={() => onClick('10')} />
      <Button text='Wash the dishes (5 min)' onClick={() => onClick('5')} />
      <Button text='Pay' onClick={() => pay('5')} />
    </PageWrapper>
  )
}

export default HomeBills
