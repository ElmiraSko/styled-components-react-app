import React from 'react';
import styled from 'styled-components';
  
/* Стилизованный компонент должен быть за пределами функции
    иначе получаем предупреждение в консоли: 
 The component styled.form with the id of "sc-oeezt" has been created dynamically. 
 You may see this warning because you've called styled inside another component. ...
 */
const StyledButton = styled.button`
  font-size: 1em;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${(props) =>
    props.primary ? '#f0f0f0' : '#1c1c1c'};
  cursor: pointer;
  margin: 0.5em;
  padding: 0.5em 0;
  width: 182px;
  background: ${(props) =>
    props.primary ? '#F2D027' : '#f0f0f0f'};
  outline: none;
  border: none;
  border-radius: 4px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export default function YellowButton() {

return (
    <>
        <StyledButton primary>
            YellowButton
        </StyledButton>

        <StyledButton>
            Button
        </StyledButton>            
    </>        
);
}