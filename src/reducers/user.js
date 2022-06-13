const initialState = {};

export default function user(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      //  console.log(action)
      return {
      //   ...state,
        ...action
    };
      break;
    case "SIGN_OUT":
      console.log('======outty====')
      return {
      };
      break;
    default:
      return state;
  }
}
