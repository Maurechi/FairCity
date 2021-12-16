import styled from 'styled-components'

const PageWrapper = styled.section`
  /* padding: 0 5rem; */
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    /* padding: 5rem 10rem 0 10rem; */
  }
`
export default PageWrapper
