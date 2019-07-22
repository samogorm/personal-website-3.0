import React from 'react'

import './Avatar.css'

export const Avatar = (props) => {
    return (
       <div className="avatar">
            <img 
                className="avatar-image" 
                alt={props.alt} 
                src={props.src} 
            />
       </div>
    )
}