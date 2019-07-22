import React from 'react'

import './Paragraph.css'

export const Paragraph = (props) => {
    return (
        <p className="paragraph">{props.text}</p>
    )
}