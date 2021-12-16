import { NextPage } from 'next'
import Link from 'next/link'
import { Button, PageWrapper, Text } from '../components/common'

const Transport: NextPage = () => {
  return (
    <PageWrapper>
      <Text as='h1'>Transport</Text>
      <Text as='h3'>
        FairCity{"'"}s habitants can use public transport while carrying a valid
        FairCity Pass
      </Text>
      <Text>Do you need a new pass?</Text>
      <Button onClick={() => console.log('hola')} text='Issue a new Pass' />
      <Text>Do you have a pass already?</Text>
      <Button onClick={() => console.log('hola')} text='Validate Pass' />
      <Link href={'/'}>Back to Home</Link>
    </PageWrapper>
  )
}

export default Transport
