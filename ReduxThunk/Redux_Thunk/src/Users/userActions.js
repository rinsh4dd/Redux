import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";
import axios from "axios"

export function fetchUserRequest() {
  return {
    type: FETCH_USER_REQUEST,
  };
}

export function fetchUserSuccess(users) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
}

export function fetchUserFailure(error) {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
}

export function fetchUsers(){
    return (dispatch)=>{
        dispatch(fetchUserRequest)
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response=>{
        
        const users = response.data
        console.log("Fetched users:", users); 
        dispatch(fetchUserSuccess(users))
      })
      .catch((error)=>{
        const ErrorMsg = error.message
        dispatch(fetchUserFailure(ErrorMsg))
      })
    }
}