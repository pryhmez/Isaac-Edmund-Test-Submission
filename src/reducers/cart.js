const initialState = [];
 
 export default function user(state = initialState, action) {
   switch (action.type) {
      case "ADD_TO_CART":

            return [...state, {...action.payload}];

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
 