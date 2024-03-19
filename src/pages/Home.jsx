import React, { useState } from 'react'
import Add from '../component/Add'
import { Link } from 'react-router-dom'
import View from '../component/View'
import Category from '../component/Category'
import './Home.css'
function Home() {
  const [uploadVideoStatus,setUploadVideoStatus]= useState({})
  const[videoDrag,setVideoDrag]=useState(false)
  return (
    <>
<div className="container d-flex justify-content-between align-items-center mt-5">
<Add setUploadVideoStatus={setUploadVideoStatus}/>
<Link to={'/WatchHistory'} id='link'>Watch History</Link>

</div>
<div className='row'>
<div className='col-md-9 p-4'>
  <h4>All video</h4>
  <View uploadVideoStatus={uploadVideoStatus}/>
</div>
<div className='col-md-3 px-4 '>
  <Category setVideoDrag={setVideoDrag}
  videoDrag={videoDrag}
  />
</div>

</div>
    </>
  )
}

export default Home
