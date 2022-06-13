import axios from 'axios';
import {apiConfig, client} from '../config/axios';

export const addUser = (
  token,
  id,
  email,
  userName,
  firstName,
  lastName,
  role,
  phone,
  referralCode
) => {

  return {
    type: 'ADD_USER',
    token,
    id,
    userName,
    email,
    firstName,
    lastName,
    role,
    phone,
    userName
  };
};

export const signInUser = ({email, password}) => {
   return dispatch => {
     return new Promise((resolve, reject) => {
 
       axios
         .post('api/auth/signin', {
           email,
           password,
         })
         .then(response => {
           let res = response.data;
           dispatch(
             addUser(
               res.token,
               res.user._id,
               res.user.email,
               res.user.userName,
               res.user.firstName,
               res.user.lastName,
               res.user.role,
               res.user.phone,
               res.user.referralCode,
             ),
           );
 
           if (response) {
             return resolve({status: response.status, message: response.data.message, role: response.data.user.role});
           }
         })
         .catch(err => {
           // dispatch({ type: SIGNUP_USER_FAILED, payload: true });
           const response = err.response;
           return resolve( {status: response.status, message: response.data.message});
 
           // return reject({
           //   message: response.data.message
           //     ? response.data.message
           //     : 'something went wrong',
           //   status: String(response.status),
           //   data: response.data,
           // });
         });
     });
   };
 };
 
 export const signUpUser = ({firstName = "admin", lastName = "admin", email, userName, password, role}) => {
   return dispatch => {
     return new Promise((resolve, reject) => {
 
       axios
         .post( 'api/auth/signup', {
           email,
           password,
           firstName,
           lastName,
           userName,
           phone: '0902283533373',
           role: role
         })
         .then(response => {
           let res = response.data;
           console.log(res, '-------------');
 
           // console.warn(response.data.success)
           let status = response.status;
           let message = response.data.message;
           if (response) {
             return resolve({status, message});
           }
         })
         .catch(err => {
           // dispatch({ type: SIGNUP_USER_FAILED, payload: true });
           console.log(err);
           if (err.response) {
             let message = err.response.data.message;
             let status = err.response.status;
             // console.log(err.response.data.data.name);
             return resolve ({status, message})
           } else if (err.Error == 'Network Error') {
           }
         });
     });
   };
 };
 