/*
* Informer store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:Informer')
/* eslint-enable no-unused-vars */

const Informer = t
  .model('Informer', {
    showModal: t.optional(t.boolean, false),
    curView: t.optional(
      t.enumeration('curView', ['overview', 'form']),
      'overview'
    ),
    type: t.optional(t.string, ''),
    message: t.optional(t.string, ''),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get viewingData() {
      return self.root.viewingData
    },
  }))
  .actions(self => ({
    show() {
      self.show = true
    },
    toastDone(options) {
      self.root.toast('success', R.merge({ position: 'topCenter' }, options))
    },
    toastError(options) {
      self.root.toast('error', R.merge({ position: 'topCenter' }, options))
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default Informer
