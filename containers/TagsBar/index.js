/*
 *
 * TagsBar
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import { ICON_CMD } from '../../config'
import { withGuardian } from '../../components/HOC'

import { Wrapper, TagItem, TagDot, TagTitle, AllTagIcon } from './styles'

import {
  makeDebugger,
  storePlug,
  sortByColor,
  THREAD,
  TOPIC,
  Trans,
} from '../../utils'
import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:TagsBar')
/* eslint-enable no-unused-vars */

class TagsBarContainer extends React.Component {
  constructor(props) {
    super(props)

    const { tagsBar, thread, topic, active } = props
    logic.init(tagsBar, thread, topic, active)
  }

  onSelect(tag) {
    const { onSelect } = this.props

    logic.onTagSelect(tag)
    onSelect(tag)
  }

  render() {
    const { tagsBar } = this.props
    const { tagsData, activeTagData } = tagsBar

    const sortedTags = sortByColor(tagsData)

    return (
      <Wrapper>
        {activeTagData.title ? (
          <TagItem
            onClick={this.onSelect.bind(this, { id: '', title: '', color: '' })}
          >
            <AllTagIcon src={`${ICON_CMD}/all_tags.svg`} />
            <TagTitle>全部</TagTitle>
          </TagItem>
        ) : null}

        {sortedTags.map(tag => (
          <TagItem
            key={tag.id}
            onClick={this.onSelect.bind(this, {
              id: tag.id,
              title: tag.title,
              color: tag.color,
            })}
          >
            <TagDot
              color={tag.color}
              active={activeTagData.title}
              title={tag.title}
            />
            <TagTitle
              active={activeTagData.title}
              title={tag.title}
              color={tag.color}
            >
              {Trans(tag.title)}
            </TagTitle>
          </TagItem>
        ))}
      </Wrapper>
    )
  }
}

TagsBarContainer.propTypes = {
  tagsBar: PropTypes.object.isRequired,
  thread: PropTypes.string,
  topic: PropTypes.string,
  /*
     tags: PropTypes.arrayOf(
     PropTypes.shape({
     color: PropTypes.string,
     title: PropTypes.string,
     })
     ).isRequired,
   */

  /*
     active: PropTypes.shape({
     color: PropTypes.string,
     title: PropTypes.string,
     }),
   */
  onSelect: PropTypes.func.isRequired,
  // https://www.npmjs.com/package/prop-types
  active: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
  }),
}

TagsBarContainer.defaultProps = {
  thread: THREAD.POST,
  topic: TOPIC.POST,
  active: {},
}

export default withGuardian(
  inject(storePlug('tagsBar'))(observer(TagsBarContainer))
)
