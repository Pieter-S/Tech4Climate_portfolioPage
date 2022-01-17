import ReactDOM from 'react-dom'
import React from 'react'
import './index.css';
import App from "./App";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";


ReactDOM.render(
    
<Routes>
<App />
</Routes>,
 document.getElementById('root'));