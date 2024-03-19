import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { AddToHistory, deleteAvideo } from '../services/allAPI';
function VideoCard({displayVideo,setDeleteAvideoStatus,ispresent}) {

  // console.log(displayVideo);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {
    setShow(true);
    let caption =displayVideo.caption
    let url =displayVideo.embedLink
    let time = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-GB', {
     year:"numeric",month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'
    }).format(time)


let reqBody ={
  caption,url,timeStamp
}
 const  response = await AddToHistory(reqBody)
 console.log(response);
}

//function to delete a video
 const   handleDelete=async(id)=>{
    const response= await deleteAvideo(id)
    setDeleteAvideoStatus(true)
    console.log(response);
  }
  //function to drag
  const videoDrag=(e,id)=>{
    console.log(`card with id ${id} have dragged`);
    e.dataTransfer.setData("videoId",id)
  }
  return (
    <>
      <Card  style={{ width: '100%' }} draggable onDragStart={(e)=>videoDrag(e,displayVideo.id)}>
      <Card.Img  variant="top " width={'100%'}  height={'300px'} src={displayVideo?.imgeUrl} />
      <Card.Body className='d-felx justify-content-between align-items-center'>
    
        <Card.Text>
        {displayVideo?.caption}
        </Card.Text>
{  !ispresent && <Button onClick={()=>handleDelete(displayVideo.id)} variant="danger" className='ms-auto'><FontAwesomeIcon icon={faTrashCan} /></Button>}
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <iframe width="100%" height="526" src={`${displayVideo?.embedLink}?autoplay=1`} title="Oh My Baby Full Video Song |Guntur Kaaram Songs |Mahesh Babu | Trivikram |Thaman S |S. Radha Krishna" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard
