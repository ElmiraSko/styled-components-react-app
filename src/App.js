import React from 'react';
import { BrowserRouter as Router,
  Switch, Route, Link, } from 'react-router-dom';
import MainPage from './components/MainPage';
import GreenButtonPage from './components/cssfile/GreenButtonPage';
import RedButtonPage from './components/inline/RedButtonPage';
import YellowButtonPage from './components/styledcomponents/YellowButtonPage';
import Yellow2ButtonPage from './components/styledcomponents/Yellow2ButtonPage';
import FormPage from './components/styledcomponents/FormPage';
import AnimatedButtonPage from './components/styledcomponents/AnimatedButtonPage';
import './App.css';

function App() {
  return (
      <Router>
        <header className="header">
          <nav>
            <ul>
              <li className="nav-li">
                <Link to="/" className="nav-link"> Главная </Link>
              </li>
              <li className="nav-li">
                <Link to="/about" className="nav-link"> О чем? </Link>
              </li>
            </ul>
          </nav>
        </header>

        <div style={{minHeight: "calc(100vh - 30px)"}}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/red-button-page">
            <RedButtonPage />
          </Route>
          <Route path="/green-button-page">
            <GreenButtonPage />
          </Route>
          <Route path="/yellow-button-page">
            <YellowButtonPage />
          </Route>
          <Route path="/yellow2-button-page">
            <Yellow2ButtonPage />
          </Route>
          <Route path="/form-page">
            <FormPage />
          </Route>
          <Route path="/animated-button-page">
            <AnimatedButtonPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
        </div>

        <footer>
          <div className="footer">
            {'© '}              
            {new Date().getFullYear()}
            {' Styled-components-app'}
          </div>
        </footer> 
      </Router>                    
  );
}

export default App;

const About = () => 
<>
  <h3>Как стилизовать компоненты </h3>
  <p style={{textAlign:'center'}}>Разбираемся с помощью сайтов:<br/>
  https://reactdev.ru/libs/styled-components <br/>
  https://styled-components.com/docs
  </p>
</>

