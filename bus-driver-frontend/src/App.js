import React from 'react';
import './App.css';
import NavBar from './components/navbar/Navbar'
import Login from './components/login-page/Login-Page';
import Register from './components/register-page/Register';
import { Route, Redirect } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <NavBar />

      <header className="App-header">
        
      <Route path="/Register" component={Register} />
      <Route exact path="/Login" component={Login} />
      {/* <Register /> */}
      {/* <Login /> */}

      {/* <ProtectedRoute path="/Game-Page" component={Game-Page} /> */}
      
      </header>
    </div>
  );
}

export default App;
