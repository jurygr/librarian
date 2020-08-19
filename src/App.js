import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from './pages/Books';
import Home from './pages/Home';
import Error from './pages/Error';
import './App.css';


class App extends Component{
  render(){
  return (
    <Router>
        <>
            <Switch>
              <Route exact path="/librarian" component={Home} />
              <Route exact path="/books/:id" component={Books} />
              <Route component={Error} />
            </Switch>
        </>
      </Router>
  )
  } 
}

export default App;