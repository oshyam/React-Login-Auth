//import useState from react
import React,{useState} from 'react';

// import logo from './logo.svg';
import './App.css';

//import Dashboard from './Dashboard';
import Dashboard from './Components/Dashborad';
//import Preferences from './Components/Preferences';
import Preferences from './Components/Preferences';

//import react router dom
import { BrowserRouter,Routes, Route,Link} from 'react-router-dom';

//import Login
import Login from './Components/Login';

//import custom hook
import useToken from './Components/App/useToken'



function App() {

  //reused custom hook
  const { token, setToken } = useToken();



  //conditional rednering to validate token and auth
  if(!token){
    return(
      <Login setToken={setToken}/>
    )
  }


  return (
    <div className="wrapper">
      <h1>SendMed.com</h1>
      <AppRoutes/>
    </div>
  );
}


//routes 
function AppRoutes() {
  return (
    <div>
          <BrowserRouter>
      <Routes>
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="preferences" element={<Preferences/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
