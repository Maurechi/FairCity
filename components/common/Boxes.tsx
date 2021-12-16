import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
interface BoxProps {
  display?: string
  padding?: string
  paddingDesktop?: string
  gap?: string
  top?: string
  bottom?: string
  right?: string
  margin?: string
  position?: string
  border?: string
  front?: boolean
  overflow?: string
  align?: string
  justify?: string
  width?: string
  height?: string
  fontColor?: string
  background?: string
  flexDirection?: string
  radius?: string
  z?: string
  hiddenOnMobile?: boolean
  hiddenOnDesktop?: boolean
}
export const Box = styled.div<BoxProps>`
  display: ${({ display }) => display || 'flex'};
  padding: ${({ padding }) => padding};
  overflow: ${({ overflow }) => overflow};
  margin: ${({ margin }) => margin};
  color: ${({ color }) => color};

  flex-direction: ${({ flexDirection }) => flexDirection};
  gap: ${({ gap }) => gap};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  border: ${({ border }) => border};
  z-index: ${({ front }) => front && '10'};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ background }) => background};
  z-index: ${({ z }) => z};
  border-radius: ${({ radius }) => radius};
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    padding: ${({ paddingDesktop }) => paddingDesktop};
  }
  ${({ hiddenOnMobile }) =>
    hiddenOnMobile &&
    css`
      @media (max-width: ${({ theme }) => theme.media.sm}) {
        display: none;
      }
    `}
  ${({ hiddenOnDesktop }) =>
    hiddenOnDesktop &&
    css`
      @media (min-width: ${({ theme }) => theme.media.sm}) {
        display: none;
      }
    `}
`
export const CenterBox = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  left: 0;
`
export const AnimatedBox = styled(motion.div)<BoxProps>`
  display: ${({ display }) => display || 'flex'};
  padding: ${({ padding }) => padding};
  flex-direction: ${({ flexDirection }) => flexDirection};
  gap: ${({ gap }) => gap};
  position: ${({ position }) => position};
  overflow: ${({ overflow }) => overflow};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  color: ${({ color }) => color};
  border: ${({ border }) => border};
  z-index: ${({ front }) => front && '10'};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ background }) => background};
  z-index: ${({ z }) => z};
  border-radius: ${({ radius }) => radius}; ;
`
interface GridProps extends BoxProps {
  columns?: string
  items?: string
}
export const GridBox = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  width: ${({ width = '100%' }) => width};
`
