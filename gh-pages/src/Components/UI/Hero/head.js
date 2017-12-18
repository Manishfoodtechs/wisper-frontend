import React from 'react'
import classNames from 'classnames'

const HeroHead = (props) => {
  return (
    <div {...props} className={classNames('hero-head', props.className)}>
      {props.children}
    </div>
  )
}

export default HeroHead