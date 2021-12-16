import { useReactiveVar } from '@apollo/client'
import type { NextPage } from 'next'
import Link from 'next/link'
import { GetStartedCard, MainOptionsGrid } from '../components'
import { AnimatedBox, PageWrapper, Text } from '../components/common'

import { accountVar } from '../graphql/Vars'

const Home: NextPage = () => {
  const account = useReactiveVar(accountVar)
  return (
    <PageWrapper>
      {account ? (
        <GetStartedCard />
      ) : (
        <>
          <Text as='h1'>Welcome to FairCity</Text>
          <MainOptionsGrid />
        </>
      )}
    </PageWrapper>
  )
}

export default Home
