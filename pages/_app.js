import "./../styles/globals.css";
import Leyout from "./../src/components/layout";
import AppContext from "./../src/components/context/context";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { forwardRef } from "react"
  const  MyApp = forwardRef(({ Component, pageProps },ref) => {
  const [isAuth,setIsAuth] = useState(false)
 
   useEffect(() => {
  const token =   JSON.parse(localStorage.getItem("token"))
     if(token){
       setIsAuth(true)
    }
 },[setIsAuth])

  return (
    <AppContext.Provider value={{ isAuth , setIsAuth}}>
      <Leyout >
        <Component {...pageProps}  ref={ref}/>
      </Leyout>
    </AppContext.Provider>
  );
})

export default MyApp;
