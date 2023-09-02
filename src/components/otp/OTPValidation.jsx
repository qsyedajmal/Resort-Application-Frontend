import React from 'react'
import { useFormik } from 'formik'
import { useParams } from 'react-router'

export default function OTPValidation() {

    const formik = useFormik({
    
        initialValues:{
            otp:'',
        },
      })

    const params = useParams()

  return (
    <div className='w-full h-screen bg-gradient-to-b from-white to-blue-400'>

      <div className='max-w-screen-lg  2xl:max-w-screen-xl w-full h-full flex flex-col mx-auto justify-center items-center px-4 md:px-0'>

      {/* onSubmit={formik.handleSubmit}  */}
        <form className=' flex flex-col mx-auto w-full md:w-1/3 border-2 border-gray-600 shadow-lg shadow-gray-400 rounded-3xl p-14 justify-center '
              method='POST'>

             <label htmlFor="otp" className='text-center pb-4 text-xl'></label>
             <input type="text" name="otp" id="otp" placeholder='Enter your OTP' className='p-2 border-2 border-gray-600 rounded-lg mb-2 bg-transparent' onChange={formik.handleChange} value={formik.values.otp}/>
             

             <button type='submit' className='bg-black text-white p-2 mt-5 rounded-lg'>SEND OTP</button>

        </form>

      </div>

    </div>
  )
}
