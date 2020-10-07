import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './components/Login';
import Dashboard from './components/Dashboard';



function App() {

  const [userList ,setUserList] = React.useState([]); 

  useEffect (() => {
    console.log(userList)
    fetch('http://taskplanner.centralus.azurecontainer.io:8080/users')
      .then(response => response.json())
      .then(data => {
          console.log(data)
          data.map(user => {
            console.log(user)
            setUserList(userList => [...userList, user]);
          })
      });
  }, []);
  
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Dashboard">
            <Dashboard userList={userList}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
