import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NativeSelect from '@material-ui/core/NativeSelect';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ChatBubble from '@material-ui/icons/ChatBubble';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import {useHistory,useLocation} from "react-router-dom";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import OLXlogo from "../../Assets/OLX.png"
const useStyles = makeStyles((theme) => ({

  title:{
      color: "#003034",
      fontWeight:"bolder",
      fontSize: "25px",
      fontStyle: "italic",
      marginRight: theme.spacing(2)   
  },
  select:{
      width: "25ch",
      padding: theme.spacing(1),
      color: "grey",
     "& .MuiNativeSelect-icon": {
       color: "#003034",
       fontSize: "30px",
      },
      "&&&:before": {
        borderBottom: "none"
      },
      "&&:after": {
        borderBottom: "none"
      }
      
   
  },
  
  selectParent:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #003034",
    borderRadius: theme.shape.borderRadius,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    width: "28ch",
    backgroundColor: "white"
   },
  
  inputInput: {
    padding: theme.spacing(1.5),
    width: "50ch",
    color: "#003034"
   
  },
 
  search: {
    display: "flex",
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    '&:hover': {
      backgroundColor: "white",
    },
    marginLeft: 0,
    width: "auto",
    border: "2px solid #003034",
   
    "&:focus":{
      outline:"none"   
    }
  },
  searchIcon:{
    backgroundColor: "#003034",    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(0.8),
    
  },
  notifyIcons: {
    color:"#003034",
    fontSize: "32px",
    
  },
  backBtn: {
    color:"#003034",
    fontSize: "30px",
    marginRight: "12px",
    marginLeft: "5px"
  },
 
  sellButton:{
    color: "#003034",
    fontWeight: "Bolder",
    fontSize: "15px",
    width: "13ch",
    borderRadius: "4ch",
    backgroundColor: "white",
    border: "5px solid",
    borderLeftColor: "yellow",
    borderBottomColor: "yellow",
    borderRightColor: "#3977fe",
    borderTopColor: "#3977fe",
    marginLeft: theme.spacing(2),
    '&:hover': {
      backgroundColor: "#f7f9f8",
    }
  },
 
}));

const Navbar = ()=>  {
  const history = useHistory()
  const classes = useStyles();
  const location = useLocation()
  const mainToolbarStyling = {display:"flex",justifyContent:"space-evenly",alignItems: "center",height: "70px"} 
  const [city, selectCity] = React.useState('');
  const handleChange = (event) => {
    selectCity(event.target.value);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" style = {{backgroundColor: "#f7f9f8",height: "70px"}}> 
      <div style={location.pathname !== "/AdCreator" ? mainToolbarStyling : null}>
      
        <Toolbar>
        {location.pathname === "/AdCreator" ?
          <div>
          <IconButton onClick = {()=>history.push("/")}>
          <KeyboardBackspaceIcon className = {classes.backBtn} />
          </IconButton></div> : null}        
          <img src = {OLXlogo} style = {{cursor: "pointer"}} width ="50px" alt = "olx" onClick = {()=>history.push("/")}/>
          { location.pathname !== "/AdCreator" ?
         <div className = {classes.selectParent}>
        <SearchIcon style = {{color: "#003034",}}fontSize = "large"/>
        <NativeSelect className = {classes.select}
          IconComponent = {KeyboardArrowDownIcon}        
          value={city}
          onChange={handleChange}
        >
          <option value="" disabled>
                  Search City.......
          </option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect> 
          </div> : null }
           {location.pathname !== "/AdCreator" ?
          <div className={classes.search}>
                               
            <InputBase
              placeholder="Find Cars,Mobile Phones and more...."
              classes={{
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className = {classes.searchIcon}>
           <SearchIcon style = {{color: "#f7f9f8"}}fontSize = "large"/>
           </div> 
        
          </div>
          :null}
          {location.pathname !== "/AdCreator" ?
          <div style={{marginLeft: "22px"}}>         
          <IconButton   >
                <ChatBubble className = {classes.notifyIcons}  />
            </IconButton>
            <IconButton  >
                <NotificationsIcon className = {classes.notifyIcons} />
            </IconButton>
            <IconButton  >
                <AccountCircleIcon className = {classes.notifyIcons} />
            </IconButton>
            
            <Button onClick = {()=> history.push("/AdCreator")}
            startIcon = {<AddIcon/>}
           variant="contained"
           color="primary"
           className = {classes.sellButton}
          >SELL</Button>
          </div>
           : null}
        </Toolbar>
        </div>
      </AppBar>
      
        </div>
       

  );
}
export default Navbar