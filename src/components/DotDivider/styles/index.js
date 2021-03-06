import styled from 'styled-components'
import { theme } from '@/utils'

export const Wrapper = styled.div`
  width: ${({ radius }) => `${radius}px`};
  height: ${({ radius }) => `${radius}px`};
  border-radius: 100%;
  background-color: ${theme('thread.articleDigest')};

  margin-left: ${({ space }) => `${space}px`};
  margin-right: ${({ space }) => `${space}px`};
  display: block;
`

export const Holder = 1
