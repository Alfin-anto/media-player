import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { deleteAvideoFromHistory, getAllVideoHistory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function WatchHistory() {
  const [HistoryVideos,setHistoryVideos]=useState([])
//function to get all videos in the history
  const getHistory=async()=>{
   const response=  await getAllVideoHistory()
    //  console.log(response);
    setHistoryVideos(response.data)
  }
const[deleteVideo,setDeleteVideo]=useState(false)

  console.log(HistoryVideos);



const handleDelete=async(id)=>{
  const response= await deleteAvideoFromHistory(id)
if (response.status>=200 && response.status<300){
  setDeleteVideo(true)
  // console.log(response);
}else{
  toast.error('something went wrong')
}
  // console.log(response);
}
useEffect(()=>{
  getHistory()
  setDeleteVideo(false)

},[deleteVideo])


  return (
    <>
     <div className='d-flex justify-content-between align-items-center mx-5 p-4'>
      <h3>Watch HISTORY</h3>
      <h5> <Link style={{textDecoration:'none',color:'white'}}to={'/home'}>

      <FontAwesomeIcon icon={faArrowLeft}beatFade />   Back to home </Link></h5>
      
     </div>
     <div className='d-flex justify-content-between align-items-center mx-5 p-4'>
   { HistoryVideos?.length>0?
    <table className='table'>
        <thead>
          <tr>
            
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
          </tr>
          </thead> 
          <tbody>
            {HistoryVideos?.map((item, index)=>(
               <tr>
               <td>{index+1}</td>
               <td>{item.caption}</td>
               <td><a href={item.url} target='_blank'>{item.url}</a></td>
               <td>{item.timeStamp}</td>
               <td>
                 <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
               </td>
     
             </tr>
            ))}
          </tbody>

     </table>:<p className='text-danger'>no History</p>}
     </div>
     <ToastContainer position='top-center' theme='dark' autoClose={2000} />
    </>
  )
}

export default WatchHistory
