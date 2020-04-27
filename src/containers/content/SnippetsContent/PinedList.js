import React from 'react'

import { ICON_BASE } from '@config'
import { uid } from '@utils'

import NaviMenu from '@components/NaviMenu'

import { Wrapper } from './styles/pined_list'

const menu = [
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/javascript.png`,
    title: 'Java',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    // 非 IT，设计类的网站
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/ruby.png`,
    title: 'Ruby',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/clojure.png`,
    title: 'Clojure',
    total: Math.floor(Math.random() * 100) + 1,
  },
]

const PinedList = () => {
  return (
    <Wrapper>
      <NaviMenu
        items={menu}
        // onSelect={(id, type) => menuOnSelect(id, type)}
        // initActiveMenuId={initActiveMenuId}
        withDivider={false}
      />
    </Wrapper>
  )
}

export default React.memo(PinedList)
