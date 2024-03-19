import React from 'react'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState,useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import VideoCard from '../component/VideoCard'
import { addCategoryApi, deleteCategoryApi, getCategoryApi, getVideoApi, updateCategoryApi } from '../services/allAPI';

function Category({videoDrag,setVideoDrag}) {
  const[deleteCategoryStatus,setDeleteCategoryStatus]=useState(false)

  const [addCategoryStatus,setaddCategoryStatus]=useState((false))
  //delete 
 //state to store the category
 const[CategoryName, setCategoryName]=useState("")
  const [allCategory, setAllCategory] = useState([]);
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCategoryAdd =async() =>{
     if(CategoryName){
      let reqBody={
        Category: CategoryName,
        allVideos:[]
      }
      //adding  category
    const response= await addCategoryApi(reqBody)
   console.log(response);
   if(response.status>=200 && response.status<300){
    alert('category add successfully')
    setaddCategoryStatus(true)
    handleClose()
   }else{
    alert('something went wrong')
   }
    }
    else{
      alert("please enter the category name")
    }
     }
     //FUNCTION TO GET CATEGORY
     const getAllCategory = async() =>{
      const response=await getCategoryApi()
      console.log(response);
      setAllCategory(response.data)
      // console.log(allCategory);

     }

     //function to prevent  the lose of data
 const dragOver=(e)=>{
   e.preventDefault()
 }
 const  videoDrop = async(e,CategoryId)=>{
  console.log(`category id is ${CategoryId}`);
  const videoid= e.dataTransfer.getData("videoId")
  console.log(`video id is ${videoid}`);

  //particular video
  const {data} =await getVideoApi(videoid)
    console.log(data);
//select category
    const selectedCategory = allCategory.find((item)=>item.id==CategoryId)

    // console.log(selectedCategory);
    if(selectedCategory.allVideos.find(item=>item.id==videoid)){
      alert('video alredy exist')
    }else{
      selectedCategory.allVideos.push(data)
    }



  //function to update the category
  await updateCategoryApi(selectedCategory,CategoryId)
  getAllCategory()


 }
 //fuction to remove cards from category list
const dragStart =(e,CategoryId,videoId) => {
  console.log(`category id ${CategoryId}`);

  let dataShared={
    CategoryId,videoId
  }
  e.dataTransfer.setData("dataShared",JSON.stringify(dataShared))
}

     //function to delete category
   const handleDeleteCategory = async(id) =>{
   const response=await deleteCategoryApi(id)
   console.log(response);
    setaddCategoryStatus(true)
    setDeleteCategoryStatus(true)
    
   }

  useEffect(() =>{
    getAllCategory()
    setaddCategoryStatus(false)
    setDeleteCategoryStatus(false) 
    setVideoDrag(false)
  

  },[addCategoryStatus,deleteCategoryStatus,videoDrag])

 
  return (
    <>

   <div className='d-flex justify-content-center align-item-center mb-5 mt-5'>
  
    < button className='btn btn-warning w-100'  onClick={handleShow}>   Add New  Category <FontAwesomeIcon icon={faCloudArrowUp} size="2xl" /> </button>
    </div>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>  <FontAwesomeIcon icon={faPen} className='me-3' />Category Name</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
  <Form className='border border-secondary rounded p-3'>
    <p>New Category</p>

       
    <Form.Group  className=' mb-3'>
       
       <Form.Control type="text" onChange={(e)=>setCategoryName(e.target.value) } placeholder="enter the categoey  "  />
    </Form.Group>


  </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleCategoryAdd}>
            Add 
          </Button>
        </Modal.Footer>
      </Modal>




{allCategory?.length>0?
allCategory.map((item)=>(
  <div className='border border-secondary w-100 p-3 rounded mt-3' droppable="true" onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item.id)}>


  <div className="d-flex justify-cnontent-center align-item-center">
<p>{item.Category}</p>
<button onClick={()=>handleDeleteCategory(item.id)} className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrashCan} /></button>
</div>

  <Row>
{item.allVideos.length>0?
item.allVideos.map((card)=>(
<Col sm={12} draggable onDragStart={(e)=>dragStart(e, item.id,card.id)}>
  <VideoCard displayVideo={card} ispresent={true}/>
  </Col>))
    :null}

  </Row>
</div>
))
 :<p> no category added yet</p>
}

    </>
  )
}

export default Category


