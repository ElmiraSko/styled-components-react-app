import React from 'react';
import RedButton from './inline/RedButton';
import GreenButton from './cssfile/GreenButton';
import YellowButton from './styledcomponents/YellowButton';
import Yellow2Button from './styledcomponents/Yellow2Button';
import form from '../img/form.png';
import animate from '../img/animate.png';
import { Link } from 'react-router-dom';

export default function MainPage() {

    return (
        <>
            <div className="main">
                <h3>
                    Стилизация компонентов. Styled components
                </h3>
                <ol>
                    <li>
                        <Link to="/red-button-page" className='main-link'>                
                            <RedButton color="#e1e1e1" >
                                RedButton
                            </RedButton>                
                            <span> - у кнопки RedButton inline стили;</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/green-button-page" className='main-link'>
                            <GreenButton>
                                GreenButton
                            </GreenButton>
                            <span> - у кнопки GreenButton стили в отдельном css файле;</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/yellow-button-page" className='main-link'>
                            <YellowButton />
                        </Link>
                        <div style={{marginLeft: '0.5em',}}> YellowButton стилизован при помощи styled-components.
                            Для этого необходимо предварительно подключить эту библиотеку к проекту:<br/>
                                npm i styled-components;
                        </div>
                    </li>
                    <li>
                        <Link to="/yellow2-button-page" className='main-link'>
                            <Yellow2Button buttonTitle="Подробнее">
                                Yellow-2
                            </Yellow2Button >
                            <span> - здесь показана работа с атрибутами;</span>
                        </Link>
                    </li>
                    <li>
                        <span style={{marginLeft: '0.5em',}}> Далее, пример маленькой формы:</span>   
                        <Link to="/form-page" className='main-link'>
                            <img src={form} alt="form image"/>       
                        </Link>
                    </li>
                    <li>
                        <span style={{marginLeft: '0.5em',}}>
                            Расширение стилей базового компонента:</span>
                        <Link to="/animated-button-page" className='main-link'>
                            <img src={animate} alt="animate button"/>                        
                        </Link>
                    </li>
                </ol>
            </div>
        </>        
    );
}