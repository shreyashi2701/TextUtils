
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      // document.title = 'TextUtils-Dark Mode';
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      // document.title = 'TextUtils-Light Mode';
    }
  }
  return (
    <>
     <Router>
    <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
 <Route exact path="/" element={<TextForm heading="Enter text" mode={mode} showAlert={showAlert}/>}></Route>
 {/* <Route exact path="/About" element={<About mode={mode}/>}></Route> */}
 <Route exact path="/TextUtils" element={<TextForm heading="Enter text" mode={mode} showAlert={showAlert}/>}></Route>
 </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
