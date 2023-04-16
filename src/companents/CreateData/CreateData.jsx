import React, { useState } from 'react'
import { Button, Col, Container,Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import createData from '../../dynamikAxios/dynamikAxios'


const CreateData = () => {

  
  
  const[title , setTitle] = useState("")
  const[location , setLocation] = useState("")
  const[price , setPrice] = useState("")
  const[sale , setSale] = useState("")
  const[img , setImg] = useState("")
  const navigate = useNavigate()



  
  
  const createAllData = async () => {
  
  let data = {
      
    title:title,
    location:location,
    price:price,
    sale:sale,
    img:img
    }

  
    let url = "https://xurshidbek-server.onrender.com/data"
    await createData(url, data)
  .then((res) => {
    if(res.status === 201){
      alert("succes")
      setTitle("")
      setLocation("")
      setPrice("")
      setSale("")
      setImg("")
      navigate("/table")
    }
  }) 
}



 

  return (
    <>



    
    <Container>
      <Row className='justify-content-center mt-5'>
        <Col xs={7}>
          <h1 style={{textAlign:"center"}}>Hello create page</h1>
     
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
      
        <Form.Control type="text"  placeholder="Hotel Name" onChange={(e) => setTitle(e.target.value)} />
      
      {title.length < 1 ? <p style={{color:"red"}}>Error</p> : <p style={{color:"blue"}}>succes</p>}

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text"  placeholder="text" onChange={(e) => setLocation(e.target.value)} />
        {location.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"blue"}}>success</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text"  placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
        {price.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"blue"}}>success</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>amount</Form.Label>
        <Form.Control type="text"  placeholder="amount" onChange={(e) => setSale(e.target.value)} />
        {sale.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"blue"}}>success</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Img</Form.Label>
        <Form.Control type="text"  placeholder="img" onChange={(e) => setImg(e.target.value)} />
        {img.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"blue"}}>success</p>}
      </Form.Group>
      {title.length  < 2 ?
               <Button style={{width:"100%" }}variant="danger"> Submit </Button>:<Button style={{width:"100%"}} variant="primary" onClick={createAllData}>
              Submit
            </Button> 
          }
      {/* <Button style={{width: "100%"}} variant="primary" onClick={createAllData} type="submit">
        Submit
      </Button> */}
    </Form>
        </Col>
      </Row>
    </Container>
   
    </>
  )
}

export default CreateData