import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-right: 6px;
`
export const Item = styled.div`
  ${css.flex('align-center')};
  margin-left: 12px;
`
export const Divider = styled.div`
  background-color: ${theme('thread.articleDigest')};
  height: 10px;
  width: 1px;
  opacity: 0.6;
  margin-left: 12px;
`
export const ViewsText = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-left: 5px;
`
export const Text = styled(ViewsText)`
  cursor: pointer;
  ${Item}:hover & {
    color: ${theme('thread.articleTitle')};
  }
`
const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(14)};
  transition: fill 0.25s;
`
export const ViewdIcon = styled(Icon)``
export const LikeIcon = styled(Icon)`
  ${css.size(13)};

  ${Item}:hover & {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
export const NotifyIcon = styled(Icon)`
  ${css.size(15)};

  ${Item}:hover & {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
export const ReportIcon = styled(Icon)`
  ${css.size(13)};

  ${Item}:hover & {
    fill: ${theme('baseColor.red')};
    cursor: pointer;
  }
`
