import './App.css';
import ContextProvider from './components/context/Context';
import Home from './components/home/Home';
import Login from './components/otp/OTP';
import OTPValidation from './components/otp/OTPValidation';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
       
      <ContextProvider>

         <BrowserRouter>
       
          <Routes>
          
            <Route path='' element={<Login/>  }></Route> 
            <Route path='/otpvalidation' element={<OTPValidation/> }></Route>
            <Route path='/homepage' element={ <Home/> }></Route>
           

          </Routes>

         </BrowserRouter>

      </ContextProvider>
      
    </div>
  );
}

export default App;
