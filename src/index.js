import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {MoralisProvider} from 'react-moralis'

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;  
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

ReactDOM.render(
  //<React.StrictMode>
  <MoralisProvider appId="jviLk3o17v2Cx0GzPM7DJ1J7WBWPVbCGUq5xZ605" serverUrl="https://tyz69nnwnkbh.usemoralis.com:2053/server">
  <Router>
    <App />
    </Router>
    </MoralisProvider>
//</React.StrictMode>
,
  document.getElementById('root')
);
