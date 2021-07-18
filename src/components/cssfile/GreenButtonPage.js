import React from 'react';



export default function GreenButtonPage() {
    return(
        <div style={{width: '600px', margin: 'auto'}}>
            <pre>
                Файл GreenButton.js для создания зеленной кнопки:<br/><br/>
                
                import React from 'react'; <br/>
                import '../cssfile/GreenButton.css'; &frasl;&frasl; Подключение файла со стилями<br/><br/>

                export default function GreenButton(props) &#123; <br/><br/>
                        
                return ( <br/>
                    &nbsp; &lt;button className='green-button' &gt; <br/>
                    &nbsp;&nbsp; &#123;props.children&#125; <br/>
                    &nbsp; &lt;/button&gt; <br/>
                    &nbsp;); <br/>
                &#125; <br/>
                <hr/>
                Файл GreenButton.css:<br/><br/>
                .green-button &#123; <br/>
                &nbsp; color: white; <br/>
                &nbsp; background: green; <br/>
                &nbsp; outline: none; <br/>
                &nbsp; border: 1px solid green; <br/>
                &nbsp; border-radius: 5px; <br/>
                &nbsp; cursor: pointer; <br/>
                &nbsp; margin: 0.5em; <br/>
                &nbsp; padding: 0.5em; <br/>
                &#125;  <br/>
                .green-button:hover &#123; <br/>
                &nbsp; background: #03a803; <br/>
                &nbsp; border: 1px solid #03a803; <br/>
                &#125;
                <hr/>
                Использование GreenButton в файле MainPage.js: <br/><br/>
                &lt;GreenButton &gt; <br/>
                &nbsp; GreenButton <br/>
                &lt;/GreenButton&gt; <br/>
            </pre>                
        </div>           
    )
}