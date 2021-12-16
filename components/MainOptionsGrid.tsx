import { MainGridLink } from '.'
import { GridBox, AnimatedBox } from './common/Boxes'
import { AnimatePresence } from 'framer-motion'
const links = [
  { href: '/groceries', text: 'Groceries' },
  { href: '/homebills', text: 'Home Bills' },
  { href: '/transport', text: 'Public Transport' },
  { href: '/technicalchecks', text: 'Technical Checks' },
  { href: '/groceries', text: 'Trade' },
  { href: '/groceries', text: 'Trade' },
  { href: '/groceries', text: 'Trade' },
  { href: '/groceries', text: 'Trade' },
]
const MainOptionsGrid = () => {
  return (
    <GridBox as='nav' columns='4'>
      <AnimatePresence>
        {links.map((link, i) => (
          <AnimatedBox
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', delay: i * 0.1 }}
          >
            <MainGridLink href={link.href} text={link.text} />
          </AnimatedBox>
        ))}
      </AnimatePresence>
    </GridBox>
  )
}

export default MainOptionsGrid
