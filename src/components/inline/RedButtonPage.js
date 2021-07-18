import React from 'react';

export default function RedButtonPage() {
    return(
        <>
            <h3>
                RedButtonPage
            </h3>
            <div style={{width: '600px', margin: 'auto'}}>
                <pre>                  
                    Файл RedButton.js для создания красной кнопки<br/><br/>
                    import React from 'react'; <br/>

                    export default function RedButton(props) &#123; <br/><br/>

                        &frasl;&frasl; Задаем стили, цвет шрифта будем передавать через проп color <br/>
                        const RedButtonStyle = &#123; <br/>
                        &nbsp; color: props.color, <br/>
                        &nbsp; background: 'red', <br/>
                        &nbsp; outline: 'none', <br/>
                        &nbsp; border: '1px solid red', <br/>
                        &nbsp; borderRadius: '5px', <br/>
                        &nbsp; cursor: 'pointer', <br/>
                        &nbsp; margin: '0.5em', <br/>
                        &nbsp; padding: '0.5em', <br/>
                        &#125;   <br/> <br/>       
                        return ( <br/>
                            &nbsp; &lt;button style=&#123;RedButtonStyle &#125;&gt; <br/>
                            &nbsp;&nbsp;  &#123;props.children&#125; <br/>
                            &nbsp; &lt;/button&gt; <br/>
                        ); <br/>
                        &#125; <br/>
                        <hr/>
                        <span>Использование в файле MainPage.js:</span><br/><br/>
                        &lt;RedButton color="#e1e1e1"&gt; <br/>
                        &nbsp; RedButton <br/>
                        &lt;/RedButton&gt; <br/>
                </pre>    
            </div>            
        </>       
    )
}