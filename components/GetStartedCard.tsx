import { useReactiveVar } from '@apollo/client'
import { providerVar } from '../graphql/Vars'
import {
  requestWCAccount,
  requestMetaMaskAccount,
} from '../helpers/requestAccount'
import Metamask from './assets/icons/Metamask'
import { Button } from './common'
import { AnimatedBox, Box } from './common/Boxes'
import Text from './common/Text'
import checkWindow from '../helpers/checkWindow'

const GetStartedCard = () => {
  const definedWindow = checkWindow()
  const onClick = async (wallet: string) => {
    if (wallet === 'metamask') {
      if (window.ethereum) {
        requestMetaMaskAccount()
      } else {
        window.open('https://metamask.io/')
      }
    }
    // if (wallet === 'walletconnect') {
    //   requestWCAccount()
    // }
  }
  return (
    <Box>
      <AnimatedBox
        padding='7rem'
        justify='space-around'
        align='center'
        flexDirection='column'
        background='white'
        radius='8px'
        width='100%'
        initial={{ x: 3000 }}
        animate={{ x: 0, maxWidth: 'none' }}
        exit={{
          x: -1000,
          position: 'absolute',
          top: `${definedWindow && window.innerWidth > 501 ? 'auto' : '17rem'}`,
          maxWidth: '0px',
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 300,
          duration: 300,
        }}
      >
        <Metamask />
        <Text
          size='2.5rem'
          sizeDesktop='3.2rem'
          align='center'
          maxWidth='45rem'
          margin='2.4rem 0 3.2rem 0'
        >
          'Get started by connecting with Metamask'
        </Text>
        <Button
          onClick={() => onClick('metamask')}
          text={
            definedWindow && window.ethereum
              ? 'Connect with Metamask'
              : 'Download Metamask'
          }
        />
      </AnimatedBox>
      {/* <AnimatedBox
        padding='7rem'
        justify='space-around'
        align='center'
        flexDirection='column'
        background='white'
        radius='8px'
        width='100%'
        initial={{ x: 3000 }}
        animate={{ x: 0, maxWidth: 'fit-content' }}
        exit={{
          x: -1000,
          position: 'absolute',
          top: `${definedWindow && window.innerWidth > 501 ? 'auto' : '17rem'}`,
          maxWidth: '0px',
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 300,
          duration: 300,
        }}
      >
        <Metamask />
        <Text
          size='2.5rem'
          sizeDesktop='3.2rem'
          align='center'
          maxWidth='45rem'
          margin='2.4rem 0 3.2rem 0'
        >
          'Get started by connecting with Wallet Connect'
        </Text>
        <Button
          onClick={() => onClick('walletconnect')}
          text='Connect with Wallet Connect'
        />
      </AnimatedBox> */}
    </Box>
  )
}

export default GetStartedCard
