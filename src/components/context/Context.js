import { createContext, useContext, useState } from "react";

//Creating a context
const appContext = createContext()

//creating a custom hook to make code more readable
export const useAppContext = () => useContext(appContext)

//Sharing the created context with other components
export default function ContextProvider({ children }) 
{
   //putting some state in the context

   const [otp,setOTP] = useState('')


   return(
    <appContext.Provider value={{otp,setOTP}} >
        {children}
    </appContext.Provider>
   )
}