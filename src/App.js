import './App.css';
import Navbar from './component/Navbar'; 
import Forms from './component/forms';
import More from './component/More';
import React, { useState } from "react";  
import Alert from "./component/Alert";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
 
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState('null');
  {mode==="light"? document.body.style.backgroundColor='#bdcdd1':document.body.style.backgroundColor="grey";}
  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },2000);
  }
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showalert(" Dark mode has been enabled","Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#bdcdd1';
      showalert(" Light mode has been enabled","Success");
    }
    }
   return(
    <>
    <Navbar title="TextModifier"  nothing="More" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Forms showalert={showalert} heading ="Write Text Here"/>}/>
        <Route path="/More" element={<More/>}/>
      </Routes>
      </BrowserRouter>
     </div>
    </>
  );
}

export default App;
