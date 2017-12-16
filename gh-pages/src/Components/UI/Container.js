import React from 'react'

import './Container.css'

const Container = (props) => {
  return (
    <div className="UI__Container">
      {props.children}
    </div>
  )
}

export default Container