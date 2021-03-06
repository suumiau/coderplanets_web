/*
 * TabBar
 */

import React from 'react'
import T from 'prop-types'

import { VIEW } from '@/constant'
import { useDevice } from '@/hooks'
import { buildLog } from '@/utils'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

/* eslint-disable-next-line */
const log = buildLog('c:TabBar:index')

const TabBar = (props) => {
  const { view } = props
  const { isMobile } = useDevice()

  const curMedia = isMobile ? VIEW.MOBILE : VIEW.DESKTOP
  const curView = view === 'auto' ? curMedia : view

  switch (curView) {
    case VIEW.DESKTOP: {
      return <DesktopView {...props} />
    }

    default: {
      // for those mobile, modeline etc ..
      return <MobileView {...props} />
    }
  }
}

TabBar.propTypes = {
  view: T.oneOf(['auto', VIEW.COMMUNITY_CARD, VIEW.MODELINE]),
}

TabBar.defaultProps = {
  view: 'auto',
}

export default React.memo(TabBar)
