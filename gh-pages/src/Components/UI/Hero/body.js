import React from 'react'
import classNames from 'classnames'

const HeroBody = (props) => {
  return (
    <div {...props} className={classNames('hero-body', props.className)}>
      {props.children}
    </div>
  )
}

export default HeroBody