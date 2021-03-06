import React, { useEffect, useRef, useState } from 'react'

import CustomScroller from '@/components/CustomScroller'

import renderContent from './renderContent'

import { Wrapper } from '../styles/content'
import { getMobileContentHeight } from '../styles/metrics'
import { toggleSwipeAviliable, toggleHeaderTextVisiable } from '../logic'

const Content = ({ visible, options, type, attachment, attUser, mmType }) => {
  const ref = useRef(null)

  const [topEnterTimer, setTopEnterTimer] = useState(null)
  const [topHeaderTextTimer, setTopHeaderTextTimer] = useState(null)

  /*
   * reset when content visiable
   * scroll to top always
   */
  useEffect(() => {
    if (visible && ref?.current) {
      ref.current.scrollIntoView()
    }
  }, [visible, ref])

  return (
    <CustomScroller
      direction="vertical"
      height={`calc(${getMobileContentHeight(options)} - 30px)`}
      showShadow={false}
      onTopEnter={() => {
        /*
         * 当马上下滑又回到顶部时，清除下滑 setTimeout 定时, 否则速度过快会导致
         * headerTextVisiable 因为时间差被错误的置为 true
         */
        if (topHeaderTextTimer) {
          clearTimeout(topHeaderTextTimer)
          setTopHeaderTextTimer(null)
        }
        // 回到顶部时马上影藏 Title 文字
        toggleHeaderTextVisiable(false)

        /*
         * 这里的 0.8s 是防止从底部快速上滑到顶部时造成意外关闭
         * 有了这 0.8s, 就可以等滑动结束再判断
         *
         * 注意这个值是在桌面浏览器上反复试出的最佳值，过大或过小都不自然
         */
        const topEnterTimer = setTimeout(() => {
          toggleSwipeAviliable('Down', true)
        }, 800)

        /*
         * 这里的 timer 是为了防止一进入 panel 就下滑导致的时间差将 topEnter
         * 置为 true，导致误判
         */
        setTopEnterTimer(topEnterTimer)
      }}
      onTopLeave={() => {
        /**
         * 这里的 Timer 是用于当 panel 向下滑动一段时间后才显示
         * header 文字（如果有的话）。因为 customScroller 当前无法
         * 在回调中暴露出滑动的 offset 距离，所以这里的 timer 是一种妥协
         *
         * 更好的做法应该是根据 customScroller 已经滑动的距离来判断是否
         * 显示 headerText 文字。
         */
        const topHeaderTextTimer = setTimeout(() => {
          toggleHeaderTextVisiable(true)
        }, 1000)
        setTopHeaderTextTimer(topHeaderTextTimer)

        if (topEnterTimer) {
          clearTimeout(topEnterTimer)
          setTopEnterTimer(null)
        }

        toggleSwipeAviliable('Down', false)
      }}
      onBottomEnter={() => toggleSwipeAviliable('Up', true)}
      onBottomLeave={() => toggleSwipeAviliable('Up', false)}
      autoHide
    >
      <Wrapper ref={ref}>
        {renderContent(type, attachment, attUser, mmType)}
      </Wrapper>
    </CustomScroller>
  )
}

export default React.memo(Content)
