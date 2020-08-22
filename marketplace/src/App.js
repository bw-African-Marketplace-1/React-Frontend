import React from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';
import NavMenu from './Components/NavMenu';
import PrivateRoute from './utils/PrivateRoute';
import ItemDashboard from './Components/ItemDashboard';
import AddItem from './Components/AddItem';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
       <NavMenu />
       <Switch>
         <PrivateRoute exact path = '/marketplace' component={ItemDashboard} />
         <PrivateRoute exact path = '/add' component={AddItem} />
         <Route exact path ="/login" component={Login} />
         <Route path ='/signup' component={SignUp}/>
       </Switch>
    </div>
  );
};

export default App;
