import React,{useContext,useEffect} from "react"
import {GlobalContext} from "../Context/GlobalState"
import {useParams} from "react-router-dom"
const AdFormCreator = ()=>{
    const gblContext = useContext(GlobalContext)
    const {setIsCategory} = gblContext
    const params = useParams()
    const {category} = params
    useEffect(()=>{
    if(category){
        setIsCategory(category)
    }
    else{
        setIsCategory(null)
    }
       
      
    },[setIsCategory,category])
    return(
        <div>
              <h1>AdFormCreator Page {category}</h1>
        </div>
    )
}
export default AdFormCreator