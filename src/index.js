import React from 'react';
import {render} from 'react-dom'; //importing only the render method 
import StorePicker from './components/StorePicker'; //relative path
import './css/style.css';

render(<StorePicker />, document.querySelector('#main'));


