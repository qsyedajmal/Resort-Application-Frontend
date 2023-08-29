
 import { useFormik } from 'formik'
import React, { useState } from 'react'

export default function Login
() {

  const[exist,setExist] = useState(false)

  const formik = useFormik({
    
    initialValues:{
        email:'',
        password:'',
    },

    onSubmit : values =>{
        console.log(values)
    }
  })


  return (
    <div className='w-full h-screen bg-gradient-to-b from-white to-blue-400'>

      <div className='max-w-screen-lg  2xl:max-w-screen-xl w-full h-full flex flex-col mx-auto justify-center items-center'>

        <div className='pb-8'>
                <p className='text-4xl font-bold  inline-block '>LOGIN</p>
        </div>

        <form className=' flex flex-col mx-auto w-1/3 border-2 border-gray-600 shadow-lg shadow-gray-400 rounded-3xl p-14 justify-center'
              onSubmit={formik.handleSubmit}>

             <label htmlFor="email" className='text-center pb-4 text-xl'>e-mail</label>
             <input type="email" name="email" id="email" placeholder='Enter your e-mail' className='p-2 border-2 border-gray-600 rounded-lg mb-2 bg-transparent' onChange={formik.handleChange} value={formik.values.email}/>


             <label htmlFor="password" className='text-center pb-4 text-xl'>password</label>
             <input type="password" name="password" id="password"  placeholder='Enter your password' className='p-2 border-2 border-gray-600 rounded-lg mb-2 bg-transparent' onChange={formik.handleChange} value={formik.values.password}/>
             
             {exist && <p className='font-light  inline-block text-red-500'>User credentials already exists</p>
}

             <button type='submit' className='bg-black text-white p-2 mt-5 rounded-lg'>SUBMIT</button>

        </form>

      </div>

    </div>
  )
}
