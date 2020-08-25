import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './styles/GlobalStyle'
import Content from './styles/Content'
import Title from './styles/Title'
import Card from './styles/Card'
import Grid from './components/Grid'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import {Provider} from 'react-redux'
import configureStore from './redux/store'
import Backtrack from './components/Backtrack';

const store = configureStore()
ReactDOM.render(
  <ThemeProvider theme= {theme}>
   <GlobalStyle/><Provider store= {store}><Content><Title>Sudoku</Title><Card><Grid/></Card><Backtrack/></Content></Provider>
</ThemeProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
