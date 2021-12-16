import { useReactiveVar } from '@apollo/client'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { accountVar } from '../graphql/Vars'
import {
  requestMetaMaskAccount,
  requestWCAccount,
} from '../helpers/requestAccount'
// import { useAtom } from 'jotai'
// import { accountAtom, buttonTextAtom, providerAtom } from '../Atoms'
import { Box, Button, Logo } from './common'

const StyledNavbar = styled.nav`
  height: 8rem;
  padding: 0rem 5rem;
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 10;
  align-items: center;
  background: linear-gradient(90deg, #f7f8bf, #f7f7f5 35%, #e2f1f5) no-repeat;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyBorder};
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    justify-content: space-between;
    padding: 0rem 10rem;
  }
`

export const Navbar = () => {
  // const [account, setAccount] = useAtom(accountAtom)
  const account = useReactiveVar(accountVar)
  // const [, setProvider] = useAtom(providerAtom)
  const [buttonText, setButtonText] = useState('')

  useEffect(() => {
    account
      ? setButtonText(
          `${account.substring(0, 6)}...${account.substring(
            account.length - 4
          )}`
        )
      : setButtonText('Connect To Wallet')
  }, [account, setButtonText])
  return (
    <StyledNavbar>
      <Logo />
      <Box hiddenOnMobile>
        <Button text={buttonText} withIcon onClick={requestMetaMaskAccount} />
      </Box>
    </StyledNavbar>
  )
}
