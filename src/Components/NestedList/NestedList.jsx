import React,{useState} from "react"
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse'
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
    root: {
        width: 350,
      },
      nested: {
        paddingLeft: theme.spacing(3),
        "&:nth-last-of-type(1)":{
            borderBottom: "1px solid grey"
        }
    },
    title:{fontWeight: "bold",margin: "5px",color: "#003554",fontSize: "18px"},
     
  }));

 const NestedList = (props)=>{
     const {nestedList} = props
     console.log(nestedList)
     const classes = useStyles()
  const [open,setIsOpen] = useState(true)
  const [isLocationOpen,setIsLocationOpen] = useState(true)

  const toggleOpen = ()=>{
      setIsOpen(!open)
  }
  const locationtoggleOpen = ()=>{
    setIsLocationOpen(!isLocationOpen)
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
        
    </List>
         </div>

     )
 }
 export default NestedList