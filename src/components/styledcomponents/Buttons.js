import styled, {keyframes} from 'styled-components';

const BaseButton = styled.button`
font-size: 1rem;
font-weight: bold;
text-transform: uppercase;
color: #fff;
cursor: pointer;
margin: 0.5em;
padding: 0.5em 0;
width: 150px;
height: 40px;
background: #466e9c;
outline: none;
border: none;
border-radius: 4px;
transition: 0.2s;

&:hover {
  transform: scale(1.05);
}
`;

const changingTheColor = keyframes`
  0% {
    background: #466e9c;
  }
  25% {
    background: #79A1CE;
  }
  50% {
    background: #8FADCE;
  }
  75% {
    background: #F7E5A6;
  }
  100% {
    background: #EFCF60;
  }
`;
/* Переопределяем стили базового компонента BaseButton */
const AnimatedButton = styled(BaseButton)`
  font-size: 0.9rem;
  font-weight: 300;
  background: #3b83bd;
  text-transform:none;
  animation: ${changingTheColor} 2s linear infinite alternate;
  `;
  
export { AnimatedButton, BaseButton };