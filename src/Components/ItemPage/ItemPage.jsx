import React,{useEffect} from "react"
import {useParams,useLocation} from "react-router-dom"
import {is_Category} from "../StateManagement/ActionCreator" 
import {useDispatch} from "react-redux"

const ItemPage = ()=> {
    const dispatch = useDispatch()
    const params = useParams()
    const location = useLocation()
    useEffect(()=>{
     if(params.item){
         dispatch(is_Category(params.item))
     }
     else{
         dispatch(is_Category(null))
     }
    },[])
return (
    <div>

     <h1>Item Page</h1>      
    </div>
)
}
export default ItemPage