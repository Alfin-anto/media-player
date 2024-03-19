import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getUploadedVideoApi,getCategoryApi,updateCategoryApi } from '../services/allAPI'


function View({uploadVideoStatus,setVideoDrag}) {
  const [video,setVideo] =useState([])
const [deleteAvideoStatus,setDeleteAvideoStatus]=useState({})
  const getVideos =async()=>{
    const response =await getUploadedVideoApi()
    // console.log(response);

     const {data}=response
    //  console.log(data);
    setVideo(data)
  }
  console.log(video);
  const dragOver= (e)=>{
    e.preventDefault()
  }
  const videoDrop=async(e)=>{
    const{CategoryId,videoId}=JSON.parse(e.dataTransfer.getData("dataShared"))
    console.log(CategoryId,videoId);

    const{data}=await getCategoryApi()
    //access the obj
    let selectedCategory=data.find((item)=>item.id==CategoryId)
   let result=selectedCategory.allVideos.filter((item)=>item.id!=videoId)
  console.log(result);
  let newCategory ={
    Category:selectedCategory.Category,allVideos:result,id:CategoryId
  }

    await updateCategoryApi(CategoryId,newCategory)
    setVideoDrag(true)
  }

  

  useEffect(()=>{
       getVideos()
       setDeleteAvideoStatus(false)
       
  },[uploadVideoStatus,deleteAvideoStatus])
  //content will be fetched when a page is loads
  return (
    <>
          <Row className='w-100' droppable="true" onDragOver={(e)=>dragOver(e)}   onDrop={(e)=>videoDrop(e)}>
          {   video?.length>0?
              video?.map((item)=>(
                <Col sm={12} md={6} lg={4} xl={3}>
                <VideoCard displayVideo={item} setDeleteAvideoStatus={setDeleteAvideoStatus}/>
              
              </Col>
              )):<p className='text-warining fa-3'>no video UPLOADED YET</p>   
            }
          </Row>
          
    </>
        )
  }

export default View
