export const setCurrency = (content) => ({
  type: 'SET_CURRENCY',
  payload: content,
});

export const setCurrencyy = (content) => {
  return dispatch => {
    console.log('signing out')
    return dispatch(
      {
        type: 'SET_CURRENCY',
        payload: content,
      }
     );
  };
};

export const setPage = (content) => ({
  type: 'SET_PAGE',
  page: content,
});