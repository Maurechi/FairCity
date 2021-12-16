import RingLoader from 'react-spinners/RingLoader'
import { AnimatedBox, Text } from './common'

const Loader = ({ text }: { text: string }) => {
  return (
    <AnimatedBox
      align='center'
      gap='2rem'
      background='#02acd1'
      padding='1rem 4rem'
      radius='35px'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: 'spring',
        damping: 15,
        stiffness: 120,
        duration: 250,
      }}
    >
      <RingLoader color='white' size={50} />
      <Text color='white' size='1.6rem'>
        {text}
      </Text>
    </AnimatedBox>
  )
}

export default Loader
