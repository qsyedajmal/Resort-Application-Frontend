import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'
import { PiSmileyLight, PiSmileySadLight } from "react-icons/pi";
import { useAppContext } from '../context/Context';

export default function OTPValidation() {

    const formik = useFormik({
    
        initialValues:{
            otp:'',
        },


      })

    const [correct, setCorrect] = useState(false)  

    const [otp, setOTP] = useState('')

    const [style, setStyle] = useState('')
    const [cursor, setCursor] = useState('cursor-not-allowed hover:opacity-50')

    const appContext = useAppContext()

    const params = useParams()

    const navigate = useNavigate()


    
    // let style = 'border-gray-600'


    const handleOnchange = (event)=>{
     
      setOTP(event.target.value)
      console.log(event.target.value)
      console.log(otp)
      // console.log( typeof(event.target.value) )
      // console.log( typeof(appContext.otp.toString()) )
      if(event.target.value===appContext.otp.toString())
      {
        setCorrect(true);
        setStyle('border-green-600 border-2')
        setCursor('cursor-pointer hover:opacity-100')
        //  style='border-red-600 border-2'
      }
      else
      {
        setCorrect(false)
        setStyle('border-red-600 border-2')
      }
      
    }

    const handleOnclick = () =>{
      if(correct){
        navigate('/homepage')
      }
      
    }

  return (
    <div className='w-full h-screen bg-gradient-to-b from-white to-blue-400'>

      <div className='max-w-screen-lg  2xl:max-w-screen-xl w-full h-full flex flex-col mx-auto justify-center items-center px-4 md:px-0'>

      {/* onSubmit={formik.handleSubmit}  */}
        <form className=' flex flex-col mx-auto w-full md:w-1/3 border-2 border-gray-600 shadow-lg shadow-gray-400 rounded-3xl p-14 justify-center' >
            
             <div className='flex justify-center '>
              {correct ? <PiSmileyLight size={45} className='text-green-500'/> : <PiSmileySadLight size={45} className='text-red-600'/>}   
             </div>

             <label htmlFor="otp" className='text-center pb-4 text-xl'></label>
             <input type="text" name="otp" id="otp" placeholder='Enter your OTP' className={`p-2 border-2 border-gray-600 focus:outline-none  rounded-lg mb-2 bg-transparent ${style}`} 
              onChange={handleOnchange} value={otp} maxLength={6}/>


             {/* <div>{appContext.otp}</div> */}
             

             <button type='button' onClick={handleOnclick} className={`bg-black text-white p-2 mt-5 rounded-lg ${cursor}`}>SUBMIT</button>

        </form>

      </div>

    </div>
  )
}
