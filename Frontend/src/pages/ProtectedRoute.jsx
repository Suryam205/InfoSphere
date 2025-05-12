import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { API_URL } from '../config/api';


const ProtectedRoute = ({children}) => {
    const [isAuth , setIsAuth] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const verifyUser = async () => {
            try{
                const res = await axios.get(`${API_URL}/user/verify`, {
                    withCredentials: true
                });
                setIsAuth(res.data.success);
            }catch(error){
                setIsAuth(false);
                console.log(error.message)
            }finally{
                setLoading(false);
            }
        };
        verifyUser();
    } , []);

    if (loading) {
        return <p>Loading...</p>;
      }

    if(!isAuth){
        return  <Navigate to="/signin" />;
    }

    return children;
  
}

export default ProtectedRoute
