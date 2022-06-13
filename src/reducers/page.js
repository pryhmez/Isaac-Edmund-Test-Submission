
const initialState = {
   pageId: 0
 };
 
 export default function user(state = initialState, action) {
   switch (action.type) {
     case 'SET_PAGGE':
       console.log(action)
       return {
         ...state,
         pageId: action.pageId
         
       };
       break;
     default:
       return state;
   }
 }
 
 