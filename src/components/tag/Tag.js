import React from 'react'

import './Tag.css'

export const Tag = (props) => {
    return (
       <div className="tag">
           <span>{props.text}</span>
       </div>
    )
}