export const addToCart = (item) => ({
   type: 'ADD_TO_CART',
   payload: item,
 })

 export const editItemProp = (id, prop, param) => {
   return ({
     type: "EDIT_ITEM_PROP",
     payload: {id, prop, param}
   })
 }

 export const removeFromCart = (id) => {
   return ({
     type: "REMOVE_FROM_CART",
     payload: {id}
   })
 }