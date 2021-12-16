import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { Box, Text } from '.'

const LogoImg = styled.img`
  height: 4.4rem;
  width: 4.4rem;
  object-fit: cover;
  cursor: pointer;
`
const LogoLink = styled(Link)`
  z-index: 20;
`

const Logo = () => {
  return (
    <LogoLink href='/'>
      <Box>
        <LogoImg src='/assets/images/logo.jpg' />
        <Text>FairCity</Text>
      </Box>
    </LogoLink>
  )
}

export default Logo
