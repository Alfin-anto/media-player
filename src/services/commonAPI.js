import axios from "axios";



export   const commonAPI = async(httpmethode,url,reqBody)=>{
    let reqConfig = {

        method:httpmethode,
        url,
        data:reqBody,
        Headers:{
           " Content-Type":"application/json"
    }

    }
   return await axios(reqConfig).then((result)=>{
    return result } )
    .catch((error)=>{
        return error
    })
}