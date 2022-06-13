const initialState = {
  currency: "USD",
  symbol: "$",
  page: "all",
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENCY":
      // console.log(action.payload);

      if (action.payload.currency === undefined) {
        return {
          ...state
        }
      } else {
        console.log(action.payload.currency);
        return {
          ...state,
          currency: action.payload.currency,
          symbol: action.payload.symbol
        };
      }

      break;

      case "SET_PAGE":
        console.log(action.page);

        return {
          ...state,
          page: action.page
        }
        break;

    default:
      return state;
  }
}
