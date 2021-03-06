import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

import { Tail as TailBase } from './index'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  cursor: pointer;
  ${css.size(36)};
  position: relative;
`
export const Avatar = styled(Img)`
  ${css.circle(36)};
  fill: ${theme('thread.articleTitle')};
  opacity: ${theme('avatarOpacity')};
`
export const Tail = styled(TailBase)`
  ${Wrapper}:hover & {
    left: -6px;
    transform: rotate(-18deg);
  }
`
