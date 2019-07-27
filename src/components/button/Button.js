import React from 'react'

import './Button.css'

const _renderIcon = (icon) => {
    if (icon !== null) {
        return (
            <i className={icon}></i>
        )
    }
}

const _scrollToElement = (element) => {
    element = document.querySelector(element);
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

const _renderExternalLink = (props) => {
    return (
        <a
            href={props.link}
            className={`button button-${props.type}`}
            style={{
                background: props.primaryColour,
                color: props.secondaryColour
            }}
        >
            {_renderIcon(props.icon)}
            {props.label}
        </a>
    )
}

const _renderScrollLink = (props) => {
    return(
        <a
            className={`button button-${props.type}`}
            onClick={() => _scrollToElement(props.link)}
            style={{
                background: props.primaryColour,
                color: props.secondaryColour
            }}
        >
            {_renderIcon(props.icon)}
            {props.label}
        </a>
    )
}

export const Button = (props) => {
    return props.scrollTo ? _renderScrollLink(props) : _renderExternalLink(props);
}