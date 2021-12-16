import { useReactiveVar } from '@apollo/client'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { accountVar, providerVar } from '../../graphql/Vars'
import { checkWindow } from '../../helpers'
const StyledMainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 8rem;
`

const MainWrapper: React.FC = ({ children }) => {
  const provider = useReactiveVar(providerVar)
  const definedWindow = checkWindow()

  definedWindow &&
    window.ethereum?.on('accountsChanged', async function (accounts: string[]) {
      accountVar(accounts[0])
      console.log('changed account to: ', accounts[0])
    })

  provider?.on('connect', (info: { chainId: number }) => {
    console.log('info: ', info)
  })
  provider?.on('disconnect', (error: { code: number; message: string }) => {
    console.log('error', error)
    accountVar(null)
  })
  provider?.on('accountsChanged', (accounts: string[]) => {
    console.log('changed')
    accountVar(accounts[0])
  })

  return <StyledMainWrapper>{children}</StyledMainWrapper>
}

export default MainWrapper
