import React from 'react';
import {AnimatedButton, BaseButton} from './Buttons';

export default function AnimatedButtonPage() {
    return(
        <div style={{width: '600px', margin: '20px auto 100px auto'}}>
            <pre>
                Файл Buttons.js:<br/><br/>

                import styled, &#123;keyframes&#125; from 'styled-components'; <br/><br/>

                const BaseButton = styled.button` <br/>
                &nbsp; font-size: 1rem; <br/>
                &nbsp; font-weight: bold; <br/>
                &nbsp; text-transform: uppercase; <br/>
                &nbsp; color: #fff; <br/>
                &nbsp; cursor: pointer; <br/>
                &nbsp; margin: 0.5em; <br/>
                &nbsp; padding: 0.5em 0; <br/>
                &nbsp; width: 150px; <br/>
                &nbsp; height: 40px; <br/>
                &nbsp; background: #466e9c; <br/>
                &nbsp; outline: none; <br/>
                &nbsp; border: none; <br/>
                &nbsp; border-radius: 4px; <br/>
                &nbsp; transition: 0.2s; <br/><br/>

                &nbsp; &amp;:hover &#123; <br/>
                &nbsp;&nbsp; transform: scale(1.05); <br/>
                &nbsp; &#125;`; <br/><br/>

                const changingTheColor = keyframes` <br/>
                &nbsp; 0% &#123; <br/>
                &nbsp;&nbsp; background: #466e9c; <br/>
                &nbsp; &#125; <br/>
                &nbsp; 25% &#123; <br/>
                &nbsp;&nbsp; background: #79A1CE; <br/>
                &nbsp; &#125; <br/>
                &nbsp; 50% &#123; <br/>
                &nbsp;&nbsp; background: #8FADCE; <br/>
                &nbsp; &#125; <br/>
                &nbsp; 75% &#123; <br/>
                &nbsp;&nbsp; background: #F7E5A6; <br/>
                &nbsp; &#125; <br/>
                &nbsp; 100% &#123; <br/>
                &nbsp; background: #EFCF60; <br/>
                &nbsp; &#125; <br/>
                `; <br/><br/>
                /* Переопределяем стили базового компонента BaseButton */ <br/>
                const AnimatedButton = styled(BaseButton)` <br/>
                &nbsp; font-size: 0.9rem; <br/>
                &nbsp; font-weight: 300; <br/>
                &nbsp; background: #3b83bd; <br/>
                &nbsp; text-transform:none; <br/>
                &nbsp; animation: $&#123;changingTheColor&#125; 2s linear infinite alternate; <br/>
                `;     <br/>           
                export &#123; BaseButton, AnimatedButton &#125;; <br/><br/>
                <hr/>
                Использование компонентов BaseButton и AnimatedButton в другом компоненте, 
                например, на этой странице: <br/><br/>
                &lt;BaseButton&gt; <br/>
                &nbsp;&nbsp; BaseButton <br/>
                &lt;/BaseButton&gt;    <br/>  

                &lt;AnimatedButton&gt; <br/>
                &nbsp;&nbsp; Animated button <br/>
                &lt;/AnimatedButton&gt;    <br/>               
            </pre> 

            <BaseButton>
                BaseButton
            </BaseButton>
            <AnimatedButton> 
                Animated button
            </AnimatedButton>             
        </div>           
    )
}