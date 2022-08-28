import React from 'react'
import './SidebarOption.css'

const SidebarOption = ({active,text,Icon}) => {
    // here we are passing in text and Icon component
    // {} means destructuring the text and Icon
  return (
    // we used --active according to BEM convention, we use this to modify the state of the sidebarOption
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        <Icon/>
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption