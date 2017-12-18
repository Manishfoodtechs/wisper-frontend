import React from 'react'
import classNames from 'classnames'

const LevelItem = (props) => {
  return (
    <div {...props} className={classNames('level-item', props.className)}>
      {props.children}
    </div>
  )
}

export default LevelItem