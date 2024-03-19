import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { Form } from 'react-bootstrap';
import { uploadVideoApi } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Add({setUploadVideoStatus}) {
  const [show, setShow] = useState(false);
 const [video, setvideo] = useState({
    id:"",
   caption:"",
    imgeUrl:'',
   embedLink:''
 })
 console.log(video);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getembedLink=(e)=>{
 /*  console.log(e.target.value); */
    const link =e.target.value
    console.log(link);

  if(link.startsWith('https://youtu.be/')){
    console.log(link.slice(17,28));
  const link1 = `https://www.youtube.com/embed/${link.slice(17,28)}`
    setvideo({...video,embedLink:link1})

// const getlink =`${link.slice(17,28) }`
  }
  else{
        console.log(link.slice(-11));
       const link1 = `https://www.youtube.com/embed/${link.slice(-11)}`
        setvideo({...video,embedLink:link1}) 
  }
  }
  const handleUpload = async()=>{
    const {id ,caption , imgeUrl ,embedLink} =video
    console.log(id ,caption , imgeUrl ,embedLink);
    if(!id || !caption || !imgeUrl || !embedLink){
      toast.info('please fill the form')

    }else{
      const response = await uploadVideoApi(video)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('video yploaded sucessfully')
        setUploadVideoStatus(response.data)
        setvideo({
          id:"",
          caption:"",
           imgeUrl:"",
          embedLink:""
        })
        handleClose(response);
        
      }
else{
  toast.error('something went wrong')
}
    }

  }


  

  return (
    <>
    <div className='d-flex '>
      <h5 className='me-2 mt-2'> Upload New videos</h5>
    < button className='btn'  onClick={handleShow}> <FontAwesomeIcon icon={faCloudArrowUp} size="2xl" /></button>
    </div>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <FontAwesomeIcon icon={faFilm} className='me-2 text-warning' />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>       <p>please fill the following details</p>
        <Form>
       
          
        <Form.Group  className=' mb-3'>
       
          <Form.Control type="text"  placeholder="enter Video id " onChange={(e)=>setvideo({
            ...video,id:e.target.value
          })}  />
       </Form.Group>

       <Form.Group  className=' mb-3' >
       
       <Form.Control type="text" placeholder="enter the Video caption " onChange={(e)=>setvideo({
            ...video,caption:e.target.value
          })}   />

    </Form.Group>
    <Form.Group  className=' mb-3' >
       
       <Form.Control type="text" placeholder="enter the image  url "  onChange={(e)=>setvideo({
            ...video,imgeUrl:e.target.value
          })} />

    </Form.Group>
    <Form.Group  className=' mb-3'>
       
       <Form.Control type="text" placeholder="enter the youtube link  " onChange={(e)=>
            getembedLink(e) }   />
    </Form.Group>
 
        

          
          
          </Form>
          </Modal.Body>
        <Modal.Footer>

          <button  className='btn btn-light' variant="secondary" onClick={handleClose}>
            Cancel
          </button>
          <button  className='btn btn-warning' variant="primary" onClick={handleUpload}>
            Upload 
          </button>   
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='dark' autoClose={2000} />
    </>   
  )
}

export default Add
// https://youtu.be/3wDiqlTNlfQ?si=8rEXiId2rJYAot5a
// https://youtu.be/3wDiqlTNlfQ?si=i6P1ix120-IjZhO0

// src="https://www.youtube.com/embed/3wDiqlTNlfQ?si=i6P1ix120-IjZhO0" 
/* <iframe width="935" height="526" src="https://www.youtube.com/embed/3wDiqlTNlfQ" title="LEO - Naa Ready Song Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */