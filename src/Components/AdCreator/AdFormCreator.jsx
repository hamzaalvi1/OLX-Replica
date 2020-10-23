import React,{useContext,useEffect} from "react"
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
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
    setAge(event.target.value);
  };
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
              <form>
                
              <div style = {{border: "1px solid lightgrey",padding: "25px",width: "900px"}}>
              <Typography variant = "body1 " className = {classes.heading} >
              INCLUDE SOME DETAILS</Typography>
              <Typography variant = "body2" >
              Make*</Typography>      
              <FormControl >
              <NativeSelect
                id="demo-customized-select-native"
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
          <option aria-label="None" value="" />
    {items.map((category,index)=><option key = {index} value = {category}>{category}</option>)}
        </NativeSelect>
      </FormControl>
      <TextField className = {classes.textfield}
          label="Ad title*"
          type="text"
          variant="outlined"
          helperText="Mention the key features of your item (e.g. brand, model, age, type)"
        
        />
        <div style = {{marginTop: "20px"}}>
        <Typography variant = "body2" >
          Condition*</Typography>      
        <div style ={{display: "flex",flexDirection:"row", width: "150px", justifyContent: "space-evenly"}}>
        <Button variant="outlined" className= {classes.btn}>Old</Button>
        <Button variant="outlined" className= {classes.btn}>New</Button>
        </div>
        </div>
        <div style = {{marginTop: "20px"}}>
        <TextField className = {classes.multiline}
          id="outlined-multiline-static"
          label="Description *"
          multiline
          rows={5}
          variant="outlined"
          helperText = "A minimum length of 20 characters is required. Please edit the field."
        />
        </div>
       
        
      
      </div>
      <div style = {{border: "1px solid lightgrey",padding: "25px",width: "900px"}}>
             <Typography variant = "body1" className = {classes.heading} >SELECT PRICE</Typography>
             <TextField className = {classes.textfield}
          label="Price *"
          type="number"
          variant="outlined"
        
        />
        </div>
        <div style = {{border: "1px solid lightgrey",padding: "25px",width: "900px"}}>
        <Typography variant = "body1" className = {classes.heading} >UPLOAD YOUR 4 PHOTOS</Typography>
         <label htmlFor="icon-button-file">
         <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <AddAPhotoIcon style = {{fontSize:"62px",color:"#478582",border: "2px solid #478582",padding:"20px"}}/>
        </IconButton>
      </label>
      <label htmlFor="icon-button-file">
         <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <AddAPhotoIcon style = {{fontSize:"62px",color:"#478582",border: "2px solid #478582",padding:"20px"}}/>
        </IconButton>
      </label>
      <label htmlFor="icon-button-file">
         <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <AddAPhotoIcon style = {{fontSize:"62px",color:"#478582",border: "2px solid #478582",padding:"20px"}}/>
        </IconButton>
      </label>
      <label htmlFor="icon-button-file">
         <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
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
                id="demo-customized-select-native"
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
          <option aria-label="None" value="" />
    {items.map((category,index)=><option key = {index} value = {category}>{category}</option>)}
        </NativeSelect>
      </FormControl>
        </div>
        <div style = {{border: "1px solid lightgrey",padding: "25px",width: "900px"}}>
        <Typography variant = "body1" className = {classes.heading}>REVIEW YOUR DETAILS</Typography>
        <TextField className = {classes.textfield}
          label="Name *"
          type="text"
          variant="outlined"
        
        />
        <Typography variant = "h6" className ={classes.heading}>
        Let's verify your account
        </Typography>
        <TextField className = {classes.textfield}
          label="Phone Number *"
          type="number"
          variant="outlined"
        
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
        <Button variant="contained" size="large"  style={{color : "#478582"}}>
          POST Now
        </Button> 
          </div>
          
      </form>       
        </div>
    )
}
export default AdFormCreator