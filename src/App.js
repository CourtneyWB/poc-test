import React from "react";
import './App.css';
import  List  from './ListFolder/List';
import Form from './FormFolder/Form';
import MainHeader from './MainHeaderFolder/MainHeader';
import { BrowserRouter as Router,Switch,Route,Link, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div>

<Router>
        <div>
          <nav>
               <p>Test Application     <Link style={{color:'#000000'}} to="/List">List</Link>      <Link style={{color:'#000000'}}to="/Form">Form</Link></p> 
          </nav>
  
          <Switch>
            <Route path="/List">
              <List />
            </Route>
            <Route path="/Form">
              <Form />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <MainHeader/> */}
      </div>
  );
}

export default App;
