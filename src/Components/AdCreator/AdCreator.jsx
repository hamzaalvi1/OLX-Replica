import React, {useContext} from "react"
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from "@material-ui/core/Typography"
import {GlobalContext} from "../Context/GlobalState"
import {useHistory} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 600,
      border:  "1px solid lightgrey",
      padding: theme.spacing(2)
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    title:{fontWeight: "bold",margin: "5px",color: "#003554",fontSize: "25px"},
    listItem : {
        border: "1px solid lightgrey"
    }
    
  }));
const AdCreator  = ()=>{
    const history = useHistory()
    const gblContext = useContext(GlobalContext)
    const {MenuList} = gblContext
    const classes = useStyles();
   
    const handleClick = (menuPath) => {
       history.push(`/AdCreator/${menuPath}`)
    };
  
    return (
      <div style = {{display:"flex",flexDirection: "column",alignItems: "center",justifyContent: "center", padding: "20px"}}> 
          <Typography variant = "h5" className = {classes.title}>
              POST YOUR AD</Typography> 
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader"
          style = {{fontWeight: "bold",color: "#003554",fontSize: "18px"}}>
              CHOOSE A CATEGORY
          </ListSubheader>
        }
        className={classes.root}
      >
        {MenuList.map((menu)=>{
            return(
                <ListItem button className = {classes.listItem} key = {menu.id} button onClick={()=>handleClick(menu.path)}>
          <ListItemIcon>
              <img src={menu.src} alt={menu.title} width = "40px"/>
          </ListItemIcon>          
          <ListItemText primary= {menu.title} />
          
        </ListItem>
        
            )
        })}
                 
      </List>
      </div>
    );}
export default AdCreator