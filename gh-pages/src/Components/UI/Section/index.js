import React from 'react'
import classNames from 'classnames'

const Section = (props) => {
  return (
    <div {...props} className={classNames("section", props.className)}>
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}

export default Section