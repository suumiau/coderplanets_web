import { useEffect } from 'react'

import { buildLog } from '@/utils'
// import S from './service'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:SponsorContent')

export const toggleBannerVisiable = (bannerVisiable) =>
  store.mark({ bannerVisiable })

// ###############################
// init & uninit handlers
// ###############################

export const useInit = (_store) => {
  useEffect(() => {
    store = _store
    log('useInit: ', store)
    // return () => store.reset()
  }, [_store])
}
