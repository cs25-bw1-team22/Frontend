import React from 'react';
import './App.css';
import Login from './components/login-page/Login-Page';
import Register from './components/register-page/Register';
import { Route, Redirect } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';


// const ProtectedRoute = ({component: Component, ...rest}) => {
//   return <Route {...rest} render={props => {
//     if(localStorage.getItem('token')) {
//       return <Component {...props} />;
//     } else { 
//       return <Redirect to='/login'/>;
//     }
//   }}/>;
// };


// const PrivateRoute = ({component: Component, ...rest}) => {
//   return <Route {...rest} render={props => {
//     if(localStorage.getItem('token')) {
//       return <Component {...props} />;
//     } else { 
//       return <Redirect to='/login'/>;
//     }
//   }}/>;
// };

function App() {
  return (
    <div className="App">
      
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
