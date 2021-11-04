import {useState} from "react";

//custom hook
export default function useToken(){
    const [token,setToken] = useState();

    const getToken=()=>{
        const tokenString  = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token;
        };


    const saveToken=userToken=>{
            sessionStorage.setItem('token',JSON.stringify(userToken))
            setToken(userToken.token);
        };
    
    return {
        setToken:saveToken,
        token
    }
                        
}