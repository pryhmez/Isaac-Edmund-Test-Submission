const initialState = [];
 
 export default function user(state = initialState, action) {
   switch (action.type) {
      case "ADD_TO_CART":

         // console.log({...action.payload, count: 1});
         // console.log(state);

         const exists = state.some(item => {
            if(item) {
                console.log( action.payload.id, item);
               return action.payload.id == item.id;
            }
            return false;
          } );

          if(exists) {
             
             let cart = state.map((item, index) => {
                if (action.payload.id == item.id) {
                   return {...item, count: item.count + 1}
                }else {
                   return {...item}
                }
    
              });
              return cart

          } else {
            return [...state, {...action.payload, count: 1}];

          }
          console.log("didnt break")
         //  return [];

          break;
      case "REMOVE_FROM_CART":
          return state.filter(({ id }) => id !== action.id);
      case "EDIT_CART":
          console.log(action.updates)
          return state.map((expense) => {
              if (expense.id == action.id) {
                  return {
                      ...expense,
                      ...action.updates
                  }
              } else {
                  return expense;
              }
          })
      default:
          return state;
  }
 }
 