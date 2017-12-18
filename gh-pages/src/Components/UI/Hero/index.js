import React from 'react'
import classNames from 'classnames'

const Hero = (props) => {
  return (
    <div {...props} className={classNames('hero', props.className)}>
      {props.children}
    </div>
  )
}

export default Hero