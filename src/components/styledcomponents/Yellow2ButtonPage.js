import React from 'react';
import Yellow2Button from './Yellow2Button';
import { Link } from 'react-router-dom';

export default function Yellow2ButtonPage() {

    return(
        <div style={{width: '600px', margin: '20px auto 100px auto'}}>
            <pre>
                В файле Yellow2Button.js определяем стилизованный компонент StyledButton2 <br/>
                и отрисовываем две кнопки этого компонента. Одна кнопка имеет отрибут primary, <br/>
                вторая без атрибута. Можно вынести StyledButton2 в отдельный файл и потом
                импортировать его.<br/><br/>
                <hr/>

                Файл Yellow2Button.js:<br/><br/>
                import React from 'react'; <br/>
                import styled from 'styled-components'; <br/><br/>
                &frasl;&frasl; Стилизованная кнопка с заданными атрибутами: width, color, value <br/>

                const StyledButton2 = styled.button.attrs((props) &#61;&gt; (&#123;<br/>
                &nbsp;&nbsp; width: props.width || '140px', &frasl;&frasl; Дефолтное значение 140px<br/>
                &nbsp;&nbsp; color: props.color || '', <br/>
                &nbsp;&nbsp; value: props.value || 'button2', <br/>
                &nbsp; &#125;))` <br/>
                &nbsp; font-size: 1em; <br/>
                &nbsp; letter-spacing: 2px; <br/>
                &nbsp; text-transform: uppercase; <br/>
                &nbsp; color: $&#123;(props) &#61;&gt; <br/>
                &nbsp;&nbsp; props.primary ? '#f0f0f0' : '#1c1c1c'&#125; <br/>
                &nbsp; cursor: pointer; <br/>
                &nbsp; margin: 0.5em; <br/>
                &nbsp; padding: 0.5em 0; <br/>
                &nbsp; width: 182px; <br/>
                &nbsp; background: $&#123;(props) &#61;&gt; <br/>
                &nbsp;&nbsp; props.primary ? '#F2D027' : '#f0f0f0f'&#125; <br/>
                &nbsp; outline: none; <br/>
                &nbsp; border: none; <br/>
                &nbsp; border-radius: 4px; <br/>
                &nbsp; transition: 0.2s; <br/><br/>

                &nbsp; &amp;:hover &#123; <br/>
                &nbsp;&nbsp; transform: scale(1.05); <br/>
                &nbsp; &#125;`; <br/><br/>

                export default function Yellow2Button(props) &#123; <br/><br/>
                &frasl;&frasl; buttonTitle - свойство (проп), которое будем передавать <br/>
                &frasl;&frasl; при использовании компонента Yellow2Button<br/>
                const buttonTitle = props.buttonTitle; <br/><br/>                    

                &frasl;&frasl; При отрисовке кнопок задаем значения атрибутам width и color <br/>
                return ( <br/>
                    &lt;&gt; <br/>
                    &nbsp; &lt;StyledButton2 width='130px' color='primery'&gt; <br/>
                    &nbsp;&nbsp;&nbsp; &#123;props.children&#125; &frasl;&frasl; название кнопки передаем как дочерний компонент<br/>
                    &nbsp; &lt;/StyledButton2&gt; <br/><br/>

                    &nbsp; &lt;StyledButton2 width='200px'&gt; <br/>
                    &nbsp;&nbsp;&nbsp; &#123;buttonTitle&#125; &frasl;&frasl; название кнопки передаем через проп<br/>
                    &nbsp; &lt;/StyledButton2&gt; <br/>            
                    &lt;/&gt; <br/>        
                    );  
                <hr/>
                Использование компонента Yellow2Button в другом компоненте, например, на этой странице: <br/><br/>
                &lt;Yellow2Button buttonTitle="На главную"&gt; <br/>
                &nbsp;&nbsp; Кнопка   &frasl;&frasl;дочерний элемент <br/>
                &lt;/Yellow2Button &gt;    <br/>      
            </pre>
            <Link to="/" className='main-link'>
                <Yellow2Button buttonTitle="На главную" buttonWidth='200px'>
                    Кнопка
                </Yellow2Button >
            </Link>
        </div>        
    )
}