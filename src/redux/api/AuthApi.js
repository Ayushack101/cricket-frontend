import { API } from "./utils";
//login api 
export const loginApi =async (info)=>{
    try {
        const infoData = JSON.stringify(info)
      const {data } =await API.post("/login.php",infoData,{
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(data?.success){
        return {error: null, data: {token: data?.token, user: data?.user}}
      }
      
    } catch (error) {
        const errorMessage = error?.response?.data?.message || "An unexpected error occured";
      return { error: errorMessage, data: null };
    }
  }
  // register APi
  export const RegisterApi=async (info)=>{
        try {
            // console.log("function call api : ",info)
            const infoData = JSON.stringify(info);
            const {data}=await API.post("/user_register.php",infoData,{
                headers:{
                    "Content-Type":"application/json",
                }
            });
            if(data?.success){
                return{error:null,data:data}
            }
        } catch (error) {
            const errorMessage = error?.response?.data?.message || "An unexpected error occured";
            return { error: errorMessage, data: null };
        }
  }