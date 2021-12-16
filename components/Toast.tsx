import Check from '../assets/images/Check'
import { AnimatedBox, Text } from './common'

const Toast = ({ text }: { text: string }) => {
  return (
    <AnimatedBox
      align='center'
      gap='2rem'
      height='7rem'
      background='#02acd1'
      padding='1rem 4rem'
      color='white'
      radius='35px'
      position='absolute'
      initial={{ top: '-16rem', opacity: 0 }}
      animate={{ top: '-8rem', opacity: 1 }}
      exit={{ top: '-16rem', opacity: 0 }}
      transition={{
        type: 'spring',
        damping: 15,
        stiffness: 120,
        duration: 250,
      }}
    >
      <Check width='2.5rem' />
      <Text size='1.6rem'>{text}</Text>
    </AnimatedBox>
  )
}

export default Toast
