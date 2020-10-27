import React,{useState} from "react"
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';

import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
    root: {
        width: 350,
      backgroundColor: "#f7f9f8"

      },
      nested: {
        paddingLeft: theme.spacing(3),
        "&:nth-last-of-type(1)":{
            borderBottom: "1px solid grey"
        }
    },
    title:{fontWeight: "bold",margin: "5px",color: "#003554",fontSize: "18px"},
    textfield: {
     margin: "4px",
      
     "& .MuiInputBase-input":{
       width: "8ch",
       height: "1.2ch"
     },
     '& label.Mui-focused': {
        color: '#478582',
       },
       '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {

          border: '3px solid #478582',
          },
        },
    },
    btn:{
      color: "#003034",
      border: "1px solid #003034",
      
    },
     
  }));

 const NestedList = (props)=>{
     const {nestedList} = props
     console.log(nestedList)
     const classes = useStyles()
  const [open,setIsOpen] = useState(false)
  const [isLocationOpen,setIsLocationOpen] = useState(false)
  const [isPriceOpen,setIsPriceOpen] = useState(false)
  const [isConditionOpen,setIsConditionOpen] = useState(false)



  const toggleOpen = ()=>{
      setIsOpen(!open)
  }
  const locationtoggleOpen = ()=>{
    setIsLocationOpen(!isLocationOpen)
}
const priceToggleOpen = ()=>{
  setIsPriceOpen(!isPriceOpen)
}
const condtionToggleOpen = ()=>{
  setIsConditionOpen(!isConditionOpen)
}

    return (
         <div >
<List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" style={{borderBottom: "1px solid grey",fontWeight: "bold",color: "#003554",fontSize: "16px"}}>
          Filters
        </ListSubheader>
      }
      className = {classes.root}
    >
    <ListItem button  >
        
        <Typography variant = "h6"  className = {classes.title}  >
        CATEGORIES    
        </Typography>

      </ListItem>
      <ListItem button onClick = {toggleOpen}>
        
        <ListItemText  primary={nestedList.title}  />
        {open ? <ExpandLess /> : <ExpandMore />}

      </ListItem>
      
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
         {nestedList.items.map((item)=>(
              <ListItem button className={classes.nested} key = {item}>           
              <ListItemText primary={item} />
            </ListItem>
         ))}
        </List>
      </Collapse>
      <ListItem button >
        
      <Typography variant = "h6"  className = {classes.title}  >
        LOCATIONS    
        </Typography>

      </ListItem>
      <ListItem button onClick = {locationtoggleOpen}>
        
        <ListItemText  primary="Pakistan"  />
        {isLocationOpen ? <ExpandLess /> : <ExpandMore />}

      </ListItem>
      <Collapse in={isLocationOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
         {["Karachi","Lahore","Islamabad","Hyderabad","KPK","Gwaddar","Faisalabad","Muree","Quetta"].map((item)=>(
              <ListItem button className={classes.nested} key = {item}>           
              <ListItemText primary={item} />
            </ListItem>
         ))}
        </List>
      </Collapse>
      <ListItem button onClick = {priceToggleOpen} >
        
      <Typography variant = "h6"  className = {classes.title}  >
        PRICE    
        </Typography>
        <ListItem>
          <ListItemText  />
      {isPriceOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>              
      </ListItem>
      <Collapse in={isPriceOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
         <ListItem>
         <form  noValidate autoComplete="off">
      <div style ={{display: "flex",justifyContent: "space-around",alignItems: "center"}}>
      <TextField className = {classes.textfield}
          label="Min *"
          type="number"
          variant="outlined"
          name = "price"
          />
          <TextField className = {classes.textfield}
          label="Max *"
          type="number"
          variant="outlined"
          name = "price"
          />
        <Button startIcon={<ChevronRightIcon/>} variant="contained" size="small" type ="submit"  style={{color : "#478582",height: "40px"}}>
           Search 
        </Button>
      </div>
      </form>
         </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick = {condtionToggleOpen} >
        
      <Typography variant = "h6"  className = {classes.title}  >
        CONDITION    
        </Typography>
        <ListItemText/>
        {isConditionOpen ? <ExpandLess /> : <ExpandMore />}
        
      </ListItem>
      
      <Collapse in={isConditionOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
         <ListItem>
         <div style ={{display: "flex",flexDirection:"row", width: "150px", justifyContent: "space-evenly"}}>
        <Button variant="outlined" className= {classes.btn}>Old</Button>
        <Button variant="outlined" className= {classes.btn}>New</Button>
        </div>
         </ListItem>
        </List>
      </Collapse>
     
    </List>
         </div>

     )
 }
 export default NestedList