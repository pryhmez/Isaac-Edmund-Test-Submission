const initialState = [];

export default function user(state = initialState, action) {
    // console.log(action)
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { ...action.payload }];

      break;
    case "EDIT_ITEM_PROP":
     console.log(action.payload);

      return state.map((item) => {
        if (item.id == action.payload.id) {
          return {
            ...item,
            [action.payload.prop]: action.payload.param,
          };
        } else {
          return item;
        }
      });
    case "REMOVE_FROM_CART":
      return state.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
}
