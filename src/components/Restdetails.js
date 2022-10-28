import React from 'react'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';

function Restdetails() {
    const [restaurentList,setRestaurentList] = useState([])
    const params = useParams()

    //for modal
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    //for collapse
      const [open, setOpen] = useState(false);  

    //async and await
    async function fetchData(){
        await fetch('/restaurants.json')
        .then(results =>results.json()
        .then(data=>{
            setRestaurentList(data.restaurants)
        })
        )
    }

    useEffect(()=>{
        fetchData()
    },[])
    const restaurant = restaurentList.find(restDetail=>restDetail.id == params.id)
  return (

    <>
    {
      restaurant?
(      <Row className='my-3'>
        <Col md={3}>
        <Image className=' p-3 ' src= {restaurant.photograph} fluid/>
        </Col>
        <Col className='ms-5 ' md={6}>
        <ListGroup className='p-3'>
      <ListGroup.Item className="fs-4">{restaurant.name}</ListGroup.Item>
      <ListGroup.Item>cuisine : {restaurant.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Neighborhood : {restaurant.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Address : {restaurant.address}</ListGroup.Item>
      <ListGroup.Item>
        {/* modal */}
      <Button classname='fs-5' variant="primary" onClick={handleShow}>
      Operating hours
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title>We are available on</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup as="ol" numbered>
      <ListGroup.Item as="li">Tuesday :{restaurant.operating_hours['Tuesday']}</ListGroup.Item>
      <ListGroup.Item as="li">Monday :{restaurant.operating_hours['Monday']}</ListGroup.Item>
      <ListGroup.Item as="li">Wednesday :{restaurant.operating_hours['Wednesday']}</ListGroup.Item>
      <ListGroup.Item as="li">Thursday :{restaurant.operating_hours['Thursday']}</ListGroup.Item>
      <ListGroup.Item as="li">Friday :{restaurant.operating_hours['Friday']}</ListGroup.Item>
      <ListGroup.Item as="li">Saturday :{restaurant.operating_hours['Saturday']}</ListGroup.Item>
      <ListGroup.Item as="li">Sunday :{restaurant.operating_hours['Sunday']}</ListGroup.Item>
        </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
       {/* reviews */}
       <Button className='ms-3 text-black'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Customer reviews
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {
          restaurant.reviews.map(item=>
          <div>
            <h5 >{item.name} ,Rating:{item.rating}</h5>
            <h6 style ={{line_height:2 }}>{item.comments}</h6>

          </div>
          )
          }
        </div>
      </Collapse>
      </ListGroup.Item>
        </ListGroup>
        </Col>
      </Row>
):'null'    }
    </>
    
  )
}

export default Restdetails