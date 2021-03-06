import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flexColumn()};
  width: 200px;
  margin-left: 40px;
  color: ${theme('thread.articleDigest')};
`
export const SubDesc = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  margin-top: 12px;
  margin-bottom: 8px;
  line-height: 20px;
  opacity: 0.8;
`
export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #004353;
  margin-top: ${({ top }) => `${top}px` || '25px'};
  margin-bottom: ${({ bottom }) => `${bottom}px` || '15px'};
  opacity: 0.6;
`
export const PublishIcon = styled(Img)`
  fill: ${theme('button.fg')};
  ${css.size(16)};
  margin-right: 10px;
`
export const PublishBtnWrapper = styled.div`
  margin-left: 2px;
  margin-right: 2px;
`
export const Footer = styled.div`
  ${css.flex('justify-center')};
`
