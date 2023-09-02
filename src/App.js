import './App.css';
import Login from './components/otp/OTP';
import OTPValidation from './components/otp/OTPValidation';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
      
      <BrowserRouter>
       
         <Routes>
            
            <Route path='' element={<Login/>  }></Route> 
            <Route path='/otpvalidation' element={<OTPValidation/> }></Route>

         </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
