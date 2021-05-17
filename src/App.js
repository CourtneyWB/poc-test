import React from "react";
import './App.css';
import { Route } from 'react-router-dom';
import  { List }  from './List';
import  *  as Form from './Form';
import MainHeader from './MainHeader';


function App() {
  return (
    <div>
      <MainHeader/>
      <Route path='./List'>
      <List/>
      </Route>
      <Route path='./Form'>
      <Form/>
      </Route>
      </div>
  );
}

export default App;
