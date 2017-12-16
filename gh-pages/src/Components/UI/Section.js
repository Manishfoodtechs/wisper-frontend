import React from 'react'

import './Section.css'

const Section = (props) => {
  return (
    <div className="UI__Section" {...props}>
      {props.children}
    </div>
  )
}

export default Section

export const SectionColumn = (props) => {
  return (
    <div className="UI__SectionColumn" {...props}>
      {props.children}
    </div>
  )
}