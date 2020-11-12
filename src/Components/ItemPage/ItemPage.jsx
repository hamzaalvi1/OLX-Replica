import React,{useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import {is_Category} from "../StateManagement/ActionCreator"

import {useDispatch,useSelector} from "react-redux"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Carousel from 'react-bootstrap/Carousel'

const ItemPage = ()=> {
    const params = useParams()

    const adReducerState = useSelector(state=> state.adReducer)
    const filterAd = adReducerState.length ? adReducerState : []
    const ad = filterAd.filter(adDetail =>  adDetail.title === params.item) 
    console.log(ad[0])

    const dispatch = useDispatch()
    const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }    
    useEffect(()=>{
     if(params.item){
         dispatch(is_Category(params.item))
     }
     else{
         dispatch(is_Category(null))
     }
    },[])
return (
    <div >
      <Grid container justify="space-around" >
       <Grid item xs={12} sm={12} md = {7} lg = {7} >
        <div style = {{padding: "20px"}}>    
       <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ad[0] ? ad[0].photo1: null}
          alt="First slide"
        />
        
      </Carousel.Item>
      
    </Carousel>
    </div>
       </Grid>
       <Grid item xs={12} sm={12} md = {5} lg = {5} >
       <div style = {{border: "1px solid lightgrey",padding: "25px",margin: "10px",borderRadius: "5px",backgroundColor: "#f7f9f8"}}> 
       <Typography variant = "h5" style={{fontWeight: "bold",color: "#003554"}} >ITEM DETAIL:</Typography>
        <Typography variant = "h6" style={{fontWeight: "bold",color: "#003554"}} >{ ad[0] ? `Rs ${ad[0].price}` : "loading" }</Typography>
        <Typography variant = "body1" style ={{color: "grey"}} >{ ad[0] ?  ad[0].title : "loading" }</Typography>
        <Typography variant = "body1" style ={{color: "grey"}} >Condition: { ad[0] ?  ad[0].condition : "loading" }</Typography>
        <Typography variant = "body1" style ={{color: "grey"}} > { ad[0] ?  ad[0].description : "loading" }</Typography>


             
        </div>
        <div style = {{border: "1px solid lightgrey",padding: "25px",margin: "10px",borderRadius: "5px",backgroundColor: "#f7f9f8"}}>
        <Typography variant = "h5" style={{fontWeight: "bold",color: "#003554"}} >SELLER DESCRIPTION:</Typography>
        <Typography variant = "body1" style ={{color: "grey"}} >User: { ad[0] ?  ad[0].username : "loading" }</Typography>
        <Typography variant = "body1" style ={{color: "grey"}} >Contact No: { ad[0] ?  ad[0].phoneNumber : "loading" }</Typography>
              
        </div>
        <div style = {{border: "1px solid lightgrey",padding: "25px",margin: "10px",borderRadius: "5px",backgroundColor: "#f7f9f8"}}>
        <Typography variant = "h5" style={{fontWeight: "bold",color: "#003554"}} >LOCATION:</Typography>
             
             
        </div>     
       </Grid>
       </Grid>     
    </div>
)
}
export default ItemPage