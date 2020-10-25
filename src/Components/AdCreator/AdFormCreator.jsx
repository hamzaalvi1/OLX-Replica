import React,{useContext,useEffect,useState} from "react"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {GlobalContext} from "../Context/GlobalState"
import {useParams} from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Typography from "@material-ui/core/Typography"
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import IconButton from "@material-ui/core/IconButton"
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import {FireStore} from "../FireBase/firebase"


const BootstrapInput = withStyles((theme) => ({
    
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: "30ch",
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
  
  
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 600,
      border:  "1px solid lightgrey",
      padding: theme.spacing(1)
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    title:{fontWeight: "bold",margin: "5px",color: "#003554",fontSize: "25px"},
    listItem : {
        border: "1px solid lightgrey"
    },
    
    textfield: {
      marginTop: "2ch",
      display: "block",
      
     "& .MuiInputBase-input":{
       width: "30ch",
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
    multiline: {
      "& .MuiInputBase-input":{
        width: "30ch",
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
    input: {
      display: 'none',
    },
    heading: {
      color:"#012f33",
      fontSize: "20px",
      fontWeight: "bold"
    }
  }));



const AdFormCreator = ()=>{
    const classes = useStyles();
    const gblContext = useContext(GlobalContext)
    const {setIsCategory,MenuList} = gblContext
    const params = useParams()
    const {category} = params
    const photoHandler =(evt)=>{
      evt.persist();
      let reader = new FileReader();
      let file = evt.target.files[0];   
      reader.onloadend = ()=>{
        setAdCreatorData({...adCreatorData,[evt.target.name]:file.name})
      }    
     reader.readAsDataURL(file)
    }
   const onAdCreatorDataSubmit = (evt) => {
     evt.preventDefault()
     if(adCreatorData.title !== "" || adCreatorData.description !== "" || adCreatorData.price !== "" || adCreatorData.username !== ""
       || adCreatorData.phoneNumber !== "" || adCreatorData.location !== "" || adCreatorData.itemCategory !== "" ){
        console.log(adCreatorData)
        FireStore.collection("ads").add(adCreatorData)
        .then((docRef)=> console.log(docRef))
        .catch((err)=> console.log(err))
        setAdCreatorData({title: "",description: "",price: "",username: "",phoneNumber:"",itemCategory: "",location:""})
       
       }
       else{
         alert("All Fields are mandatory please fill all fields")
       }
      }
  const [adCreatorData,setAdCreatorData] = useState({
  title: "",
  description: "",
  price: "",
  username: "",
  phoneNumber: "",
  itemCategory: "",
  location: "",
  photo1: "",
  photo2: "",
  photo3: "",
  photo4: "" })
  const [state, setState] = React.useState({
    checkedA: true,
  });
  const switchHandleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

    const nestedCategory = MenuList.find((nestCtgry)=> nestCtgry.path === category)
    const {items} = nestedCategory 
    useEffect(()=>{
    if(category){
        setIsCategory(category)
    }
    else{
        setIsCategory(null)
    }
       
      
    },[setIsCategory,category])
    return(
        <div style = {{display:"flex",flexDirection: "column",alignItems: "center",justifyContent: "center", padding: "20px"}}>
             <Typography variant = "h5" className = {classes.title}>
              POST YOUR AD</Typography>
             <div style = {{border: "1px solid lightgrey",padding: "25px",width: "900px"}}>
             <Typography variant = "body1" className = {classes.heading} >
              SELECTED CATEGORY</Typography>
              </div>
              <form onSubmit= {(evt)=> onAdCreatorDataSubmit(evt)}>
                
              <div style = {{border: "1px solid lightgrey",padding: "25px",width: "900px"}}>
              <Typography variant = "body1 " className = {classes.heading} >
              INCLUDE SOME DETAILS</Typography>
              <Typography variant = "body2" >
              Make*</Typography>      
              <FormControl >
              <NativeSelect
                name = "itemCategory"
                value={adCreatorData.itemCategory}
                onChange = {(evt)=>setAdCreatorData({...adCreatorData,[evt.target.name]:evt.target.value})}
               
                input={<BootstrapInput />}
              >
          <option aria-label="None" value="" />
    {items.map((category,index)=><option key = {index} value = {category}>{category}</option>)}
        </NativeSelect>
      </FormControl>
      <TextField className = {classes.textfield}
          name = "title"
          label="Ad title*"
          type="text"
          variant="outlined"
          helperText="Mention the key features of your item (e.g. brand, model, age, type)"
          value = {adCreatorData.title}
          onChange = {(evt)=>setAdCreatorData({...adCreatorData,[evt.target.name]:evt.target.value})}
       />
        <div style = {{marginTop: "20px"}}>
        <Typography variant = "body2" >
          Condition*</Typography>      
        <div style ={{display: "flex",flexDirection:"row", width: "150px", justifyContent: "space-evenly"}}>
        <Button variant="outlined" onClick = {()=>setAdCreatorData({...adCreatorData,condition: "old"})} className= {classes.btn}>Old</Button>
        <Button variant="outlined" onClick = {()=>setAdCreatorData({...adCreatorData,condition: "new"})} className= {classes.btn}>New</Button>
        </div>
        </div>
        <div style = {{marginTop: "20px"}}>
        <TextField className = {classes.multiline}
          name = "description"
          id="outlined-multiline-static"
          label="Description *"
          multiline
          rows={5}
          variant="outlined"
          helperText = "A minimum length of 20 characters is required. Please edit the field."
          value = {adCreatorData.description}
          onChange = {(evt)=>setAdCreatorData({...adCreatorData,[evt.target.name]:evt.target.value})}
          
       />
        </div>
       
        
      
      </div>
      <div style = {{border: "1px solid lightgrey",padding: "25px",width: "900px"}}>
             <Typography variant = "body1" className = {classes.heading} >SELECT PRICE</Typography>
             <TextField className = {classes.textfield}
          label="Price *"
          type="number"
          variant="outlined"
          name = "price"
          value = {adCreatorData.price}
          onChange = {(evt)=>setAdCreatorData({...adCreatorData,[evt.target.name]:evt.target.value})}
                     
        />
        </div>
        <div style = {{border: "1px solid lightgrey",padding: "25px",width: "900px"}}>
        <Typography variant = "body1" className = {classes.heading} >UPLOAD YOUR 4 PHOTOS</Typography>
         <label htmlFor="icon-button-file">
         <input accept="image/*"  name = "photo1"className={classes.input} id="icon-button-file" type="file"
         onChange= {(evt)=>photoHandler(evt)} />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <AddAPhotoIcon style = {{fontSize:"62px",color:"#478582",border: "2px solid #478582",padding:"20px"}}/>
        </IconButton>
      </label>
      <label htmlFor="icon-button-file-2">
         <input accept="image/*" className={classes.input} id="icon-button-file-2" name = "photo2"  type="file"
         onChange= {(evt)=>photoHandler(evt)} />
        <IconButton color="primary" aria-label="upload picture" component="span" >
          <AddAPhotoIcon style = {{fontSize:"62px",color:"#478582",border: "2px solid #478582",padding:"20px"}}/>
        </IconButton>
      </label>
      <label htmlFor="icon-button-file-3">
         <input accept="image/*" className={classes.input} id="icon-button-file-3"  type="file" name = "photo3"
         onChange= {(evt)=>photoHandler(evt)} />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <AddAPhotoIcon style = {{fontSize:"62px",color:"#478582",border: "2px solid #478582",padding:"20px"}}/>
        </IconButton>
      </label>
      <label htmlFor="icon-button-file-4">
         <input accept="image/*" className={classes.input} id="icon-button-file-4"  type="file" name= "photo4" 
         onChange= {(evt)=>photoHandler(evt)} />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <AddAPhotoIcon style = {{fontSize:"62px",color:"#478582",border: "2px solid #478582",padding:"20px"}}/>
        </IconButton>
      </label>
        </div>
        <div style = {{border: "1px solid lightgrey",padding: "25px",width: "900px"}}>
        <Typography variant = "body1" className = {classes.heading} >
              CONFIRM YOUR LOCATION</Typography>
              <Typography variant = "body2" >
              Location *</Typography>      
              <FormControl >
              <NativeSelect
                name = "location"
                value={adCreatorData.location}
                onChange = {(evt)=>setAdCreatorData({...adCreatorData,[evt.target.name]:evt.target.value})}
                
                input={<BootstrapInput />}
              >
          <option aria-label="None" value="" />
    {["Karachi","Lahore","Islamabad","Hyderabad","KPK","Gwaddar","Faisalabad","Muree","Quetta"].map((category,index)=><option key = {index} value = {category}>{category}</option>)}
        </NativeSelect>
      </FormControl>
        </div>
        <div style = {{border: "1px solid lightgrey",padding: "25px",width: "900px"}}>
        <Typography variant = "body1" className = {classes.heading}>REVIEW YOUR DETAILS</Typography>
        <TextField className = {classes.textfield}
          name = "username"
          label="username *"
          type="text"
          variant="outlined"
          value = {adCreatorData.username}
          onChange = {(evt)=>setAdCreatorData({...adCreatorData,[evt.target.name]:evt.target.value})}
          
        
        />
        <Typography variant = "h6" className ={classes.heading}>
        Let's verify your account
        </Typography>
        <TextField className = {classes.textfield}
          name = "phoneNumber" 
          label="Phone Number *"
          type="number"
          variant="outlined"
          value = {adCreatorData.phoneNumber}
          onChange = {(evt)=>setAdCreatorData({...adCreatorData,[evt.target.name]:evt.target.value})}
          
        />
        <div style = {{display: "flex",justifyContent: "space-between",width:"320px",alignItems:"center"}}>
        <Typography variant = "body1">
        Show my phone number on my ads
        </Typography> 
        <Switch style ={{color : "#478582"}}
        
        checked={state.checkedA}
        onChange={switchHandleChange}
        name="checkedA"
        color = "default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
        </div>
        </div>
        <div style = {{border: "1px solid lightgrey",padding: "25px",width: "900px"}}>
        <Button variant="contained" size="large" type ="submit"  style={{color : "#478582"}}>
          POST Now
        </Button> 
          </div>
          
      </form>       
        </div>
    )
}
export default AdFormCreator