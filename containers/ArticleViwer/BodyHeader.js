import React from 'react'

import { ICON_CMD } from '../../config'
import { Popover } from '../../components'
import ArticleOptions from './ArticleOptions'

import {
  Wrapper,
  MoreWrapper,
  MoreIcon,
  LinkFrom,
  RefinedLabel,
  LinkSource,
  RefinedIcon,
  RefinedText,
} from './styles/body_header'

// import { Wrapper } from './styles/body_header'

const BodyHeader = ({ data, thread }) => (
  <Wrapper>
    <MoreWrapper>
      <Popover
        content={<ArticleOptions thread={thread} />}
        placement="bottomLeft"
        trigger="click"
      >
        <div>
          <MoreIcon src={`${ICON_CMD}/more.svg`} />
        </div>
      </Popover>
    </MoreWrapper>
    {data.linkAddr ? (
      <LinkFrom href={data.linkAddr} target="_blank" rel="noopener noreferrer">
        <div>转载自:&nbsp;</div>
        <LinkSource>{data.linkAddr}</LinkSource>
      </LinkFrom>
    ) : null}
    <RefinedLabel>
      <RefinedIcon src={`${ICON_CMD}/diamond_frame.svg`} />
      <RefinedText>精 华</RefinedText>
    </RefinedLabel>
  </Wrapper>
)

export default BodyHeader
