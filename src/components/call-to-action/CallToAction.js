import React from 'react'

import Title from './../title/title'
import './CallToAction.css'

export const CallToAction = (props) => {
    return (
        <div className="call-to-action">
           <div className="call-to-action-content">
                <Title text={props.title} />
           </div>
        </div>
    )
}
