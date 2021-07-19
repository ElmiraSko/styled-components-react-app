import React from 'react';
import styled from 'styled-components';
  
const StForm = styled.form`  
    color: #1c1c1c;  
    border: 1px solid #cccccc;
    box-shadow: 1px 1px 3px 1px #cccccc,
                -1px 1px 3px 1px #cccccc;
    border-radius: 4px;
    width: 400px;
    padding: 15px 0;
    margin: 10px auto;
    text-align: center;
`; 
const Input = styled.input.attrs((props) => 
    ({  
        type: props.type,
        placeholder: props.placeholder,
        inputHeight: props.inputHeight || '30px',
    }))`  
    font-family: Verdana; 
    padding: 0.2em 0.5em;
    border: 1px solid #d4d0d6;
    box-shadow: 1px 1px 3px 1px #d4d0d6;
    border-radius: 4px;
    outline: none;
    width: 280px;
    height: ${props => props.inputHeight};
    margin: 0.7em;
    &:-webkit-autofill {
        -webkit-box-shadow: inset 0 0 0 50px #fff; /* Цвет фона автозаполнения*/
    }
`; 
const Button = styled.input.attrs(() => 
    ({  
        type: 'button',
        value: 'Send',
    }))`  
    font-family: Verdana;
    color: white;
    text-transform: uppercase;
    padding: 0.2em;
    border: 1px solid #d4d0d6;
    background: #d4d0d6;
    border-radius: 4px;
    width: 300px;
    height: 40px;
    margin: 0.7em;
    cursor: pointer;
    &:hover {
        background: #bdbdbd;
        border: 1px solid #bdbdbd;
      }
`; 

export default function Form() { 
  
return (
    <>       
    <StForm>
        <Input type='text' placeholder='Firstname' inputHeight='60px' />
        <Input type='text' placeholder='Lastname' />
        <Input type='password' placeholder='Password' />
        <Button />
    </StForm>
    </>  
)
}