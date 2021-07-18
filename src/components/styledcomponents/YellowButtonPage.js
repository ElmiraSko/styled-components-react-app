import React from 'react';
import YellowButton from './YellowButton';

export default function YellowButtonPage() {
    return(
            <div style={{width: '600px', margin: '20px auto 100px auto'}}>
                <pre>
                    В файле YellowButton.js определяем стилизованный компонент StyledButton <br/>
                    и отрисовываем две кнопки этого компонента. Одна кнопка имеет отрибут primary, <br/>
                    вторая без атрибута. Можно вынести StyledButton в отдельный файл и потом
                    импортировать его.<br/><br/>
                    <hr/>
                    Файл YellowButton.js: <br/><br/>

                    import React from 'react'; <br/>
                    import styled from 'styled-components'; <br/><br/>

                    // Стилизованная кнопка StyledButton <br/>
                        const StyledButton = styled.button` <br/>
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

                    export default function YellowButton() &#123; <br/><br/>
                        
                        return ( <br/>
                            &lt;&gt; <br/>
                            &nbsp; &lt;StyledButton primary&gt; // атрибут primary меняет цвет кнопки<br/>
                            &nbsp;&nbsp;&nbsp; YellowButton // название кнопки 'зашито' в коде<br/>
                            &nbsp; &lt;/StyledButton&gt; <br/><br/>

                            &nbsp; &lt;StyledButton&gt; <br/>
                            &nbsp;&nbsp;&nbsp; Button <br/>
                            &nbsp; &lt;/StyledButton&gt; <br/>            
                            &lt;/&gt; <br/>        
                            );  
                        <hr/>
                        Использование: <br/><br/>
                        &nbsp;  &lt;YellowButton /&gt; <br/>             
                </pre>
                <YellowButton />
        </div> 
    )
}