import React from 'react'

import './Subtitle.css'

export const Subtitle = (props) => {
    return (
        <h5 className="subtitle">{props.text}</h5>
    )
}