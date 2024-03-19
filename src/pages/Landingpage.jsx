import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Landingpage() {
  const navigateByurl =useNavigate()
  return (
    <>
     <Row className='d-flex justify-content-center align-item-center mt-5 mb-5 '>
       <Col lg={1}></Col>
       <Col  lg={5}>
        <h2 style={{marginBottom:'70px'}}>Welcome to <span className='text-warning mb-4'> Media 
          player</span></h2>
        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ab veritatis non, quos numquam id nobis fuga magnam atque quam maxime illo porro explicabo tempore! Vel quia recusandae voluptate sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corporis alias accusantium non ea tenetur nisi impedit, nobis deleniti in animi! Enim, atque quia! Blanditiis voluptatibus esse illo obcaecati incidunt.</p>
        <button onClick= {()=>navigateByurl('/home')} className='btn btn-warning ms-5 mt-5'>Get Start<i class="fa-solid fa-arrow-right"></i></button>
       </Col>
       <Col lg={1}></Col>
       <Col lg={5}>
        <img src='https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif'></img>
       </Col>
     </Row>
   <div className='container d-flex align-items-center justify-content-center mt-5 flex-column'>
    <h3>Features</h3>
    <div className='d-flex align-item-center justify-content-center'>

    <Card className='p-4 ms-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/4c/1a/52/4c1a52e76ecb222ace05df67dff0796a.gif" style={{height:'200px',width:'100%'}} />
      <Card.Body>
        <Card.Title>Manging video</Card.Title>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
     
      </Card.Body>
    </Card>
    
    <Card className='p-4 ms-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/4c/1a/52/4c1a52e76ecb222ace05df67dff0796a.gif"  height={'200px'} width={'100%'} />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
 
      </Card.Body>
    </Card>
    
    <Card className='p-4 ms-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/4c/1a/52/4c1a52e76ecb222ace05df67dff0796a.gif" height={'200px'} width={'100%'} />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
   
      </Card.Body>
    </Card>
    </div>
   </div>
   <br/> <br/> <br/>
   <Row >

  <Col lg={1}></Col>
  <Col style={{border:' 1px solid white'}} lg={10}>

<Row>


<Col lg ={1}></Col>
  <Col  lg ={5}>

    <h3 className='p-3' style={{color:'orange', marginBottom:'20px',padding:'10px',}}>Simple fast and PowerFul</h3>
  
    <h6 className='mt-4'><span style={{fontSize:'30px'}}>play everything : </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur temporibus quidem delectus? Nobis mollitia velit eveniet repellendus,</h6>

<h6 className='mt-4'><span style={{fontSize:'30px'}}>play everything : </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur temporibus quidem delectus? Nobis mollitia velit eveniet repellendus, </h6>

<h6 className='mt-4'><span style={{fontSize:'30px'}}>play everything : </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur temporibus quidem delectus? Nobis mollitia velit eveniet repellendus, </h6><br/>

  </Col>
  <Col lg ={1}></Col>
 
  <Col className='d-flex jutify-content-center align-item-center' lg ={4}>
  <iframe style={{paddingTop:'40px',}}  width="690" height="416" src="https://www.youtube.com/embed/WWr9086eWtY" title="LEO - Ordinary Person Lyric | Thalapathy Vijay, Anirudh Ravichander, Lokesh Kanagaraj, NikhitaGandhi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </Col>
  <Col lg ={1}></Col>


</Row>

  </Col>
  
  <Col lg={1}></Col>



   </Row>
<br/> <br/> <br/>
    </>
  )
}

export default Landingpage
