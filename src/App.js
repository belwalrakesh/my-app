
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';



// import {
//   BrowserRouter,
//   Routes,
//   Route,
  
// } from "react-router-dom";



function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);

    }, 1111)
  }



  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  }
  return (
  <>
    {/* <BrowserRouter> */}


      <Navbar title="Play with Text" About="About Us" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />
      <Home showAlert={showAlert} mode={mode}/>
      {/* <Routes> */}
       
        {/* <Route exact path="/" element={<Home showAlert={showAlert} mode={mode}/>}/>
        <Route exact path="/about" element={<About title="Play with Text"  mode={mode} />}/> */}
        
      {/* </Routes> */}
    {/* </BrowserRouter> */}

    <Footer mode={mode} />



   

  </>

  );
}

export default App;
