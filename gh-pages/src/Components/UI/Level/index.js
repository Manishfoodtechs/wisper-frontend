import React from 'react'
import classNames from 'classnames'

const LevelContainer = (props) => {
  return (
    <div {...props} className={classNames('level', props.className)}>
      {props.children}
    </div>
  )
}

export default LevelContainer