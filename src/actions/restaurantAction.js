import {R_SUCCESS,R_FAIL} from '../constants/restConstants'
import axios from 'axios';

export const restaurantLists = () =>async(dispatch) =>{

    try{
        const {data} = await axios.get('/restaurants.json')
        console.log(data);
        dispatch({
            type:R_SUCCESS,payload:data.restaurants
        })
    }
    catch(error){
         dispatch({
                type:R_FAIL,error:error
            })
    }
}
