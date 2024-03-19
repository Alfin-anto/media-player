//api for uploading video

import Category from "../component/Category"
import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"





export  const uploadVideoApi = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/video`,reqBody)
}  
//api to get uploaded video


 export  const getUploadedVideoApi = async()=>{
   return await commonAPI(`GET`,`${serverURL}/video`,"")
}
//api to delete paricular video

export const deleteAvideo =async (id)=>{
   return  await commonAPI('DELETE',`${serverURL}/video/${id}`,{})

}
//api to add video into history 

export const AddToHistory =async(reqBody)=>{
  return await commonAPI('POST',`${serverURL}/history`,reqBody)
}
//api to get the video from history
export const getAllVideoHistory=async()=>{
   return await commonAPI ('GET',`${serverURL}/history`,"")
} 
//api to delete the video from history

export const deleteAvideoFromHistory =async (id)=>{
   return  await commonAPI('DELETE',`${serverURL}/history/${id}`,{})

}

//api to add a category 
export const addCategoryApi=async(reqBody)=>{
 return  await commonAPI('POST',`${serverURL}/Category`,reqBody)
}
//get api to add a category

export const getCategoryApi=async()=>{
   return await commonAPI(`GET`,`${serverURL}/Category`,"")
}
//api to delete a category
export const deleteCategoryApi=async(id)=>{
   return  await commonAPI('DELETE',`${serverURL}/Category/${id}`,{})
}
//api to get a single video from video,drag and drop into category

export const getVideoApi=async(id)=>{
   return await commonAPI(`GET`,`${serverURL}/video/${id}`,"")
}
//API update a category

export const updateCategoryApi=async(reqBody,id)=>{
   return  await commonAPI('PUT',`${serverURL}/Category/${id}`,reqBody)
}
