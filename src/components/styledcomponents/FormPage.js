import React from 'react';
import Form from './Form';
import tags from '../../img/f-tags.png';

export default function FormPage() {
    return(
        <div style={{width: '600px', margin: '20px auto 100px auto'}}>
            <pre>
                В файле Form.js определяем стилизованные компоненты StForm, <br/>
                Button, Input и отрисовываем форму. Можно вынести эти три компонента в <br/>
                отдельный файл и потом импортировать их в Form.js.<br/><br/>
                <hr/>

                Файл Form.js:<br/><br/>

                import React from 'react'; <br/>
                import styled from 'styled-components'; <br/><br/>

            const StForm = styled.form` <br/> 
                &nbsp; color: #1c1c1c;  <br/>
                &nbsp; border: 1px solid #cccccc; <br/>
                &nbsp; box-shadow: 1px 1px 3px 1px #cccccc, <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -1px 1px 3px 1px #cccccc; <br/>
                &nbsp; border-radius: 4px; <br/>
                &nbsp; width: 400px; <br/>
                &nbsp; padding: 15px 0; <br/>
                &nbsp; margin: 10px auto; <br/>
                &nbsp; text-align: center; <br/>
            `; <br/><br/>

            /* Здесь type и value - атрибуты (реквизиты) компонента Button <br/>
            с заранее заданными (статическими) значениями button и Send соответственно: */ <br/><br/>
            const Button = styled.input.attrs(() &#61;&gt;&nbsp;(&#123;   <br/>                            
                    &nbsp;&nbsp; type: 'button', <br/>
                    &nbsp;&nbsp; value: 'Send', <br/>
                &nbsp; &#125;))`   <br/>
                &nbsp; font-family: Verdana; <br/>
                &nbsp; color: white; <br/>
                &nbsp; text-transform: uppercase; <br/>
                &nbsp; padding: 0.2em; <br/>
                &nbsp; border: 1px solid #d4d0d6; <br/>
                &nbsp; background: #d4d0d6; <br/>
                &nbsp; border-radius: 4px; <br/>
                &nbsp; width: 300px; <br/>
                &nbsp; height: 40px; <br/>
                &nbsp; margin: 0.7em; <br/>
                &nbsp; cursor: pointer; <br/><br/>
                &nbsp; &amp;:hover &#123; <br/>
                &nbsp;&nbsp; background: #bdbdbd; <br/>
                &nbsp;&nbsp; border: 1px solid #bdbdbd; <br/>
                &nbsp; &#125; <br/>
            `;  <br/><br/>

            /* Значения атрибутам type, placeholder и пользовательскому атрибуту inputHeight <br/>
            компонента Input передаем через пропы (динамические реквезиты): */ <br/><br/>
            const Input = styled.input.attrs((props) &#61;&gt;&nbsp;(&#123;  <br/>
                    &nbsp;&nbsp; type: props.type, <br/>
                    &nbsp;&nbsp; placeholder: props.placeholder, <br/>
                    &nbsp;&nbsp; inputHeight: props.inputHeight || '30px', <br/>
                    &nbsp; &#125;))`  <br/>
                &nbsp; font-family: Verdana;  <br/>
                &nbsp; padding: 0.2em 0.5em; <br/>
                &nbsp; border: 1px solid #d4d0d6; <br/>
                &nbsp; box-shadow: 1px 1px 3px 1px #d4d0d6; <br/>
                &nbsp; border-radius: 4px; <br/>
                &nbsp; outline: none; <br/>
                &nbsp; width: 280px; <br/>
                &nbsp; height: $&#123;props &#61;&gt; props.inputHeight&#125;; <br/>
                &nbsp; margin: 0.7em; <br/><br/>
                &nbsp; &amp;:-webkit-autofill &#123; /* Цвет фона автозаполнения*/ <br/>
                &nbsp;&nbsp;&nbsp; -webkit-box-shadow: inset 0 0 0 50px #fff; <br/>
                &nbsp; &#125; <br/>
            `;  <br/><br/>    

            export default function Form() &#123; <br/><br/>

            &frasl;&frasl; В первый Input передали свойство inputHeight='60px', <br/>
            &frasl;&frasl; тем самым увеличив высоту поля <br/><br/>

                return ( <br/>
                    &nbsp; &lt;&gt; <br/>
                    &nbsp;&nbsp; &lt;StForm&gt; <br/>
                    &nbsp;&nbsp;&nbsp; &lt;Input type='text' placeholder='Firstname' inputHeight='60px'&gt;  <br/>
                    &nbsp;&nbsp;&nbsp; &lt;Input type='text' placeholder='Lastname'&gt;  <br/>
                    &nbsp;&nbsp;&nbsp; &lt;Input type='password' placeholder='Password'&gt;  <br/>
                    &nbsp;&nbsp;&nbsp; &lt;Button&gt; <br/>
                    &nbsp;&nbsp; &lt;/StForm&gt; <br/>                                      
                    &nbsp;&lt;/&gt; <br/>        
                    );  
                <hr/>
                <span>Обратите внимание, что свойство inputHeight не передается в DOM.</span>
                <br/>
                <img src={tags} alt="form tags"/><br/>
                Использование компонента Form в другом компоненте, например, на этой странице: <br/><br/>
                &lt;Form/&gt; 
            </pre>
            <Form />
            <br/>            
        </div>        
    )
}