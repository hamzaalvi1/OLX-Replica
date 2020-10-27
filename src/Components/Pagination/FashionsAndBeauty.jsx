import React,{useContext} from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import NestedList from "../NestedList/NestedList"
import NestedCards from "../NestedList/NestedCards"
import {GlobalContext} from "../Context/GlobalState"
import {useLocation} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    flexContainer: {
        display:"flex",
        flexDirection: "row",
        width: "auto",
        justifyContent: "space-between",
    
    },
    title:{fontWeight: "bold",margin: "5px",color: "#003554",fontSize: "25px"},

  }));

const FashionsAndBeauty = ()=>{
    const classes = useStyles()
    const gblContext = useContext(GlobalContext)
    const {MenuList} = gblContext
    const location = useLocation()
    const nestedCategory = MenuList.find((nestedList)=> location.pathname.slice(1) === nestedList.path)
    
    return(
        <div style = {{margin: "20px"}}>
            <Typography variant = "h5" className = {classes.title}>Fashions in Karachi</Typography>
            <div className = {classes.flexContainer} >
             <NestedList nestedList = {nestedCategory} />
             <NestedCards/>
            </div>
        </div>
    )
}
export default FashionsAndBeauty