import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Router>
    <Switch>
      <Route path ="/" exact component={Home}/>
      <Route path ="/:board" component={App}/>
    </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);
