import React from 'react'

import getButtonClass from './getButtonClass'

const getButtonType = (props) => {
  switch (props.type) {
    case 'button':
      return 'button'
    default:
      return 'a'
  }
}

const Button = (props) => {
  const ButtonTag = getButtonType(props)
  return (
    <ButtonTag {...props} className={getButtonClass(props)}>{props.children}</ButtonTag>
  )
}

export default Button