import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App'; 
import senatorsList from './data/senators.json';

ReactDOM.render(<App senators = {senatorsList} />, document.getElementById('root'));