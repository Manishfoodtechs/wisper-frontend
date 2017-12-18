import React from 'react'
import classNames from 'classnames'

const Level = (props) => {
  const levelClass = (props.right) ? 'level-right' : 'level-left'

  return (
    <div {...props} className={classNames(levelClass, props.className)}>
      {props.children}
    </div>
  )
}

export default Level