import React, { useEffect } from 'react'
import {useState } from 'react'
import RestaurentCard from './RestaurentCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {useDispatch, useSelector} from 'react-redux';
import {restaurantLists} from '../actions/restaurantAction';

function Home() {
    const [restaurentList,setRestaurentList] = useState([])
    //async and await
    // async function fetchData(){
    //     await fetch('/restaurants.json')
    //     .then(results =>results.json()
    //     .then(data=>{
    //         setRestaurentList(data.restaurants)
    //     })
    //     )
    // }
    const dispatch = useDispatch()

    const result = useSelector(state =>state.restaurantReducer) //restaurantReducer from store file
    let {restaurant} = result  //restaurant from restaurant reducer js file state
    console.log(restaurant);

    useEffect(()=>{
        // fetchData()
        dispatch(restaurantLists())
    },[])
    return (
        <>
        <Row className='m-5 item-center'>
            {
                restaurant.map(restaurant=>(
                   <Col className='py-3' sm={12} md={6} lg={4} xl={3}>
                    <RestaurentCard data={restaurant}/>
                   </Col>
                ))
            }
        </Row>
        </>
  )
}

export default Home
