import axios from "axios"
import { API_URL } from '../../config/api';


export const getUser = async()=>{
  try{
      const res = await axios.get(`${API_URL}/user/getUser`, {
      withCredentials: true,
      });
      if(res.data.success){
        return (res.data.user._id);
      }
      else{
        console.warn("Failed to fetch user", res.data.message);
      }
  }catch(err){
    return ("Error fetching user " , err.message);
  }
}


 export const getUserRole = async()=>{
        try{
          const res = await axios.get(`${API_URL}/user/getUserRole`,{
            withCredentials: true
            });
            if(res.data.success){
                return (res.data.role)
            }
            else{
                console.warn("Failed to fetch Role", res.data.message);
            }
          }catch(err){
            console.error("Error fetching user role" ,err.message );
          }
        }; 
 export default {
getUserRole,
getUser
 }