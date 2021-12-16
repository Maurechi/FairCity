import { NextPage } from 'next'
import Link from 'next/link'
import { PageWrapper, Text } from '../components/common'

const Groceries: NextPage = () => {
  return (
    <PageWrapper>
      <Text as='h1'>Groceries Page</Text>
      <Text as='h2'>You will find all groceries here</Text>
      <Link href='/'>Home</Link>
    </PageWrapper>
  )
}

export default Groceries
