import { combineReducers } from 'redux'
const initCategoryState = ""
const initState = []
 const adReducer = (state = initState,action)=>{

switch(action.type){
 case "GET_ADS": 
  return [...state,action.payload]
  
  default : 
   return state
}

}
 const categoryReducer = (state = initCategoryState,action)=>{

   switch(action.type){
    case "IS_CATEGORY":
       return state = action.payload
    default:
       return state

   }

}
export default combineReducers({adReducer,categoryReducer})
