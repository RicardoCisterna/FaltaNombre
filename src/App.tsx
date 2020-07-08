import React from "react";
import {Route} from 'react-router'
import Login from './containers/auth/Login'
import Register from './containers/auth/Register'
import NewsFeed from './containers/NewsFeed'
import NavBar from './components/NavBar'
import Profile from './containers/Users/Profile'

import "./App.css";

function App() {
  return (
   <div>
     <Route component={NavBar} path='/app' exact={false}  />
     <Route component={Login} path='/' exact={true}/>
     <Route component={Register} path='/Register' exact={true}/>
     <Route component={NewsFeed} path='/app/newsfeed' exact={true} />
     <Route component={Profile} path='/app/user/profile' exact={true}  />
     
   </div>
  );
}

export default App;
