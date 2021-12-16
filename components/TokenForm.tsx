import { useState, useEffect, useCallback } from 'react'
import { AnimatedBox, Box, Button, Input, Text } from './common'
import LERC20Artifacts from '../artifacts/contracts/LERC20.sol/LERC20.json'
import { ethers } from 'ethers'

import { LERC20 } from '../types/LERC20'
import { accountAtom, providerAtom } from '../Atoms'
import { useAtom } from 'jotai'
import { AnimatePresence } from 'framer-motion'
import Loader from './Loader'
import Toast from './Toast'

const TokenForm = () => {
  const [account] = useAtom(accountAtom)
  const [provider] = useAtom(providerAtom)
  const [recipient, setRecipient] = useState<string>('')
  const [amount, setAmount] = useState<number | string>('')
  const [balance, setBalance] = useState('')
  const [name, setName] = useState<string>('')
  const [symbol, setSymbol] = useState<string>('')
  const [txnHash, setTxnHash] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [sent, setSent] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [tokenAddress, setTokenAddress] = useState<string>('')
  const getBalance = async () => {
    if (tokenAddress === '' || !ethers.utils.isAddress(tokenAddress)) {
      setError('Please add Valid ERC-20 or LERC-20 Token Address')
      setTxnHash('')
      return setBalance('')
    } else if (ethers.utils.isAddress(tokenAddress)) {
      setTxnHash('')
      setError('')
      if (typeof window.ethereum !== 'undefined') {
        const contract = new ethers.Contract(
          tokenAddress,
          LERC20Artifacts.abi,
          provider as Provider
        ) as LERC20
        const balance = await contract.balanceOf(account!)
        const contractName = await contract.name()
        const contractSymbol = await contract.symbol()
        setBalance(ethers.utils.formatEther(balance))
        setName(contractName)
        setSymbol(contractSymbol)
      }
    }
  }

  async function sendToken() {
    if (!account || !amount) return

    if (typeof window.ethereum !== 'undefined') {
      setError('')

      const signer = provider?.getSigner()
      const contract = new ethers.Contract(
        tokenAddress,
        LERC20Artifacts.abi,
        signer
      ) as LERC20
      try {
        const transaction = await contract.transfer(
          recipient,
          ethers.utils.parseEther(amount.toString())
        )
        setLoading(true)
        const done = await transaction.wait()
        setLoading(false)
        setTxnHash(done.transactionHash)
        setSent(true)
        setTimeout(() => {
          setSent(false)
        }, 3000)
        resetForm()
      } catch (error: unknown) {
        setLoading(false)
        const err = error as Error
        setError(err.message)
      }
    }
  }

  const resetForm = useCallback(() => {
    setBalance('')
    setAmount('')
    setRecipient('')
  }, [])
  const submitForm = () => {
    setBalance('')
    setTxnHash('')
    if (tokenAddress === '' || !ethers.utils.isAddress(tokenAddress))
      return setError('Please add Valid ERC-20 or LERC-20 Token Address')
    if (recipient === '' || !ethers.utils.isAddress(recipient))
      return setError('Please add Valid Recipient Address')
    if (amount === '') return setError('Please add Amount')
    sendToken()
  }
  useEffect(() => {
    if (account) {
      resetForm()
    }
  }, [account, resetForm])
  return (
    <AnimatedBox
      position='relative'
      flexDirection='column'
      width='35rem'
      radius='8px'
      initial={{ x: 3000 }}
      animate={{ x: 0 }}
      exit={{ x: -3000, position: 'absolute' }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 300,
        duration: 300,
      }}
    >
      <AnimatePresence>
        <Box
          background='white'
          z='10'
          paddingDesktop='7rem'
          padding='4rem 7rem'
          justify='space-around'
          flexDirection='column'
          radius='8px'
          align='center'
          gap='4rem'
        >
          {loading && <Loader />}
          {sent && <Toast text={`Transfer Sent Succesfully.`} />}
          <Button hover text='Get Balance' onClick={getBalance} />
          <Box flexDirection='column' gap='2rem'>
            <Input
              onChange={(e) => setTokenAddress(e.target.value)}
              value={tokenAddress}
              placeholder='Token address'
            />
            <Input
              onChange={(e) => setRecipient(e.target.value)}
              value={recipient}
              placeholder='Recipient address'
            />
            <Input
              type='number'
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder='Amount'
            />
          </Box>
          <Button hover text='Send Token' onClick={submitForm} />
        </Box>
        {balance && (
          <AnimatedBox
            width='100%'
            background='#02acd1'
            justify='center'
            radius='0 0 8px 8px'
            padding='1rem 1rem'
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
              type: 'spring',
              damping: 12,
              stiffness: 120,
              duration: 250,
            }}
          >
            <Text align='center' color='white' size='1.6rem'>
              Your Balance of {name}: {balance} {symbol}
            </Text>
          </AnimatedBox>
        )}
        {txnHash && (
          <AnimatedBox
            width='100%'
            background='#02acd1'
            justify='center'
            radius='0 0 8px 8px'
            overflow='scroll'
            padding='1rem 1rem'
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
              type: 'spring',
              damping: 12,
              stiffness: 120,
              duration: 250,
            }}
          >
            <Text align='center' color='white' size='1.6rem'>
              Transaction Hash: {txnHash}
            </Text>
          </AnimatedBox>
        )}
        {error && (
          <AnimatedBox
            width='100%'
            background='#bf1414'
            radius='0 0 8px 8px'
            padding='1rem 1rem'
            justify='center'
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
              type: 'spring',
              damping: 12,
              stiffness: 120,
              duration: 250,
            }}
          >
            <Text align='center' color='white' size='1.6rem'>
              {error}
            </Text>
          </AnimatedBox>
        )}
      </AnimatePresence>
    </AnimatedBox>
  )
}

export default TokenForm
