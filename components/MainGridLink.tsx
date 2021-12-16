import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('https://www.pdxeng.ch/wp-content/uploads/2018/04/Blockchain-Cities.jpg');
  background-position: center;
  color: white;
  width: 100%;
  height: 100%;
  font-size: 2.5rem;
`
const HoverLink = styled(StyledLink)`
  position: absolute;
  transition: all 0.3s ease;
  opacity: 0;
  background: url('https://miro.medium.com/max/800/1*n_c9lFfJHS0lIyhT37lnbA.jpeg');
  z-index: 10;
  &:hover {
    opacity: 1;
  }
`
const Container = styled.div`
  position: relative;
  height: 20vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`
interface Props {
  text?: string
  href?: string
}
const MainGridLink = ({ text, href }: Props) => {
  return (
    <Link href={href}>
      <Container>
        <StyledLink>{text}</StyledLink>
        <HoverLink>{text}</HoverLink>
      </Container>
    </Link>
  )
}

export default MainGridLink
