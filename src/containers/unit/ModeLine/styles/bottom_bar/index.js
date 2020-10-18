import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  position: fixed;
  left: 0;
  bottom: 0px;
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  width: 100%;
  height: 28px;
  background: #0e3b4a;
  z-index: ${css.zIndex.modeLine};
  box-shadow: ${({ isMenuActive }) =>
    !isMenuActive ? '' : '-5px 6px 37px -8px rgba(0, 0, 0, 0.42)'};
`
export const ItemsWrapper = styled.div`
  ${css.flex('justify-between', 'align-center')};
  height: 100%;
  padding-top: 2px;
  width: auto;
  flex-grow: 1;
  height: 100%;
  padding-top: 4px;
  margin-left: 25px;
  margin-right: 18px;
`
export const MenuIcon = styled(Img)`
  fill: ${({ active }) => (active ? '#2ca1a2' : theme('thread.articleTitle'))};
  width: 15px;
  height: 15px;

  :last-child {
    margin-right: 0;
  }
`