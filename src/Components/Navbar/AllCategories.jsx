import React, {useContext} from "react"
import {GlobalContext} from "../Context/GlobalState"
import NativeSelect from '@material-ui/core/NativeSelect';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Link,useHistory} from "react-router-dom"
const useStyles = makeStyles((theme) => ({

   allCategories:{
    width: "22ch", 
    padding: theme.spacing(1),
   "& .MuiNativeSelect-icon": {
     color: "black",
     fontSize: "30px",
    },
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    },
    [theme.breakpoints.down('md')]:{
        maxWidth: "20ch", 
        padding: theme.spacing(1),
    }
   } ,
   
   listItem:{
     display: "flex",
     justifyContent: "space-evenly",
     alignItems: "center",
   },
   listItemPara:{
   marginLeft:"4ch",
   cursor:"pointer",
   fontSize: "15px"
  },
  }));
const AllCategories = ()=>{
   const gblContext = useContext(GlobalContext)
   const {MenuList} = gblContext
   const classes = useStyles()
   const history = useHistory()
   const [menuItem, setMenuItem] = React.useState('');
  const menuHandleChange = (evt) => {
    setMenuItem(evt.target.value);
    const findMenu  = MenuList.find((menu)=> evt.target.value === menu.title)
    history.push(findMenu.path)
  };

    return(
        <div style = {{display: "flex",justifyContent: "between"}} >
 
          <NativeSelect className = {classes.allCategories}
          IconComponent = {KeyboardArrowDownIcon}        
          value={menuItem}
          onChange={menuHandleChange}
        >
          <option value="" disabled>
                  ALL CATEGORIES
          </option>
          {MenuList.map((menu)=>
           <option key ={menu.id}>
           {menu.title}
           </option>
           )}
        </NativeSelect>
         
       <div className = {classes.listItem}>
          {[{ title:"Mobile Phones",category: "Mobiles"}
          ,{ title:"Cars",category: "Vehicles"},
          { title:"Motorcycle",category: "Vehicles"}
           ,{ title:"Houses",category: "Property"},
           { title:"TV-Audio-Video",category: "Electronics"},
           { title:"Tablets",category: "Mobiles"}
           ,{ title:"Land & Plots",category: "Property"}].map((item,index)=>{
            return <Typography variant = "body2"  className = {classes.listItemPara} key = {index}>
              <Link to = {`/${item.category}`}>
              {item.title}
              </Link>
              </Typography>
          })}
        </div>
        </div>
    )
}
export default AllCategories