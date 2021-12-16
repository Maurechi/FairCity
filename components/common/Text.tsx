import styled from 'styled-components'
interface Props {
  sizeDesktop?: string
  size?: string
  align?: string
  margin?: string
  maxWidth?: string
  color?: string
}
const Text = styled.p<Props>`
  font-size: ${({ size }) => size};
  text-align: ${({ align }) => align};
  margin: ${({ margin }) => margin};
  color: ${({ color }) => color};
  max-width: ${({ maxWidth }) => maxWidth};
  @media (min-width: ${({ theme }) => theme.media.md}) {
    font-size: ${({ sizeDesktop }) => sizeDesktop};
  }
`
export default Text
