import React from 'react'
import R from 'ramda'

import MenuBar from './MenuBar'
import NormalMenuList from './NormalMenuList'
import SortableMenuList from './SortableMenuList'

import { Wrapper } from './styles/menu_list'
import { onSortMenuEnd } from './logic'

const MenuList = ({
  items,
  pin,
  sortOptActive,
  activeRaw,
  forceRerender,
  showHeaderShadow,
}) => {
  const pinedCommunities = R.filter(R.propEq('raw', 'home'), items)
  const sortableCommunities = R.reject(R.propEq('raw', 'home'), items)

  return (
    <Wrapper>
      {pinedCommunities.map(item => (
        <MenuBar
          key={item.raw}
          pin={pin}
          item={item}
          activeRaw={activeRaw}
          dropShadow={showHeaderShadow}
        />
      ))}
      {!sortOptActive ? (
        <NormalMenuList
          communities={sortableCommunities}
          pin={pin}
          activeRaw={activeRaw}
          forceRerender={forceRerender}
        />
      ) : (
        <SortableMenuList
          communities={sortableCommunities}
          sortOptActive={sortOptActive}
          pin={pin}
          activeRaw={activeRaw}
          forceRerender={forceRerender}
          onSortEnd={onSortMenuEnd}
        />
      )}
    </Wrapper>
  )
}

export default MenuList
