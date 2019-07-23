import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './views/Header';
import Section from './components/Section';
import Join from './views/Join';


const App = props => {
    return (
        <div id='app'>
            <Header/>
            <Section minHeight={20} padding={5}>
                <Join/>
            </Section>
        </div>
    );
};

export default App;