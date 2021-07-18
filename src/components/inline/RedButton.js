import React from 'react';

export default function RedButton(props) {

    // инлайн стили
    const RedButtonStyle = {
        color: props.color,
        background: 'red',
        // backgroundImg: 'url(' + props.imgUrl + ')',
        outline: 'none',
        border: '1px solid red',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '0.5em',
        padding: '0.5em',
    }
    
    return (
        <button style={RedButtonStyle}>
            {props.children}
        </button>
  );
}
