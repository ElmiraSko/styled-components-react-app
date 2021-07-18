import React from 'react';
import '../cssfile/GreenButton.css';

export default function GreenButton(props) {
    
    return (
        <button className='green-button'>
            {props.children}
        </button>
  );
}