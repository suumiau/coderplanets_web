import React from 'react'

import { ICON } from '@/config'
import { useMedia } from '@/hooks'

import {
  Wrapper,
  ArrowWrapper,
  Icon,
  NaviInfo,
  Navi,
  Hint,
} from '../styles/perv/bottom'

const Bottom = ({ disabled, pageNumber, onChange }) => {
  const { mobile } = useMedia()
  const iconSrc = !mobile
    ? `${ICON}/shape/arrow.svg`
    : `${ICON}/shape/arrow-simple.svg`

  return (
    <>
      {disabled ? (
        <Wrapper disabled>
          <ArrowWrapper>
            <Icon src={iconSrc} />
          </ArrowWrapper>
          <NaviInfo disabled>
            <Hint>第 1 页</Hint>
            <Navi>上一页</Navi>
          </NaviInfo>
        </Wrapper>
      ) : (
        <Wrapper onClick={() => onChange(pageNumber - 1)}>
          <ArrowWrapper>
            <Icon src={iconSrc} />
          </ArrowWrapper>
          <NaviInfo>
            <Hint>第 {pageNumber - 1} 页</Hint>
            <Navi>上一页</Navi>
          </NaviInfo>
        </Wrapper>
      )}
    </>
  )
}

export default React.memo(Bottom)
