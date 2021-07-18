import React from 'react';
import styled from 'styled-components';
  
const StyledButton2 = styled.button.attrs((props) => ({
  width: props.width || '140px',
  color: props.color || '',
  value: props.value || 'button2'
}))`
  font-size: 0.9em;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${(props) =>
    props.color === 'primery' ? '#f0f0f0' : '#1c1c1c'};
  cursor: pointer;
  margin: 0.5em;
  padding: 0.5em 0;
  width: ${(props) => props.width};
  background: ${(props) =>
    props.color === 'primery'? '#B5A343' : '#B4B4B4'};
  outline: none;
  border: none;
  border-radius: 4px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export default function Yellow2Button(props) {

  const buttonTitle = props.buttonTitle;
  const buttonWidth = props.buttonWidth;

return (
  <>
    <StyledButton2 width='130px' color='primery'>
        {props.children}
     </StyledButton2> 
    <StyledButton2 width={buttonWidth}>
      {buttonTitle}
    </StyledButton2>
  </>
)
}