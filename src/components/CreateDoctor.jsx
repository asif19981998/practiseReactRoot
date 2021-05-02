import React,{useState,useEffect} from 'react'

import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Joi from "joi-browser"
import "./CreateDoctor.css"
import { error } from 'jquery';
function CreateDoctor() {
   
    const [doctor, setdoctor] = useState({fullName:"",phoneNo:"",bmdcNumber:"",email:"",password:"",gender:"",department:""})
    
    const [errors,seterrors]=useState({})
    
    useEffect(() => {
        
    }, [doctor])

    const schema={
      fullName:Joi.string().required().label("Full Name"),
      phoneNo:Joi.string().required(),
      bmdcNumber:Joi.string().required(),
      email:Joi.string().required().label("Email"),
      password:Joi.string().required(),
      gender:Joi.string().required(),
      department:Joi.string().required(),
      
    }
    const validate=()=>{
      const abortEarly = {abortEarly:false}
      const {error} = Joi.validate(doctor,schema,abortEarly)
      if(!error) return null;
      const errors = {};
      for(var item of error.details) errors[item.path[0]] = item.message;
      console.log(errors)
      return errors;

      // **********  Without Joi ******
      // console.log(data)
      // const errors = {}
      // if(doctor.fullName.trim()===""){
      //   errors.fullName = "Full Name is Required"
      // }
      // if(doctor.email.trim()===""){
      //   errors.email = "Email is Required"
      // }
      // return Object.keys(errors).length ==0 ? null : errors;
    }
   
   
   
    const handleSave =()=>{
        const errors = validate()
        seterrors(errors || {})
        console.log(errors)
        if (errors) return;
        // server call
        console.log(doctor)
     }
     const validateProperty=({name,value})=>{
    
          const obj ={[name]:value}
          const new_schema = {[name]:schema[name]}
          const {error}= Joi.validate(obj,new_schema);
          return error ? error.details[0].message:null
     
      
      
          // if(name === "fullName"){
          //   if(value.trim()=="") return "Full Name is Required";
          // }
          // if(name == "email"){
          //   if(value.trim()=="") return "Email is Required"
          // }
     }

     const handleChange=(input)=>{
      const errors_copy = {...errors}
     
         const errorMessage = validateProperty(input)
        if(errorMessage) errors_copy[input.name]=errorMessage
        else delete errors_copy[input.name]
       
      
       
       seterrors(errors_copy)
       setdoctor({...doctor,[input.name]:input.value})
       
     }
    return (

        <div className="create-doctor container">
            <h1>Create Doctor</h1>
           <form  noValidate autoComplete="off" className="form">
      
           <TextField
            label="Full Name"
            name="fullName"
            value={doctor.fullName}
            onChange={e=>handleChange(e.target)}
            type="text"
            margin="dense"
            variant="outlined"
        />
        {errors.fullName && <div style={{color:"red"}}>{errors.fullName}</div>}
           <TextField
            name="phoneNo"
            label="Phone No"
            value={doctor.phoneNo}
            onChange={e=>handleChange(e.target)}
            type="text"
            margin="dense"
            variant="outlined"
           />
           <TextField
            name="email"
            label="Email"
            value={doctor.email}
            onChange={e=>handleChange(e.target)}
            type="email"
            margin="dense"
            variant="outlined"
           />
           {errors.email && <div style={{color:"red"}}>{errors.email}</div>}
           <TextField
            name="password"
            label="Password"
            value={doctor.password}
            onChange={e=>handleChange(e.target)}
            type="password"
            margin="dense"
            variant="outlined"
           />
            <TextField
            name="bmdcNumber"
            label="BMDC Number"
            value={doctor.bmdcNumber}
            onChange={e=>handleChange(e.target)}
            type="text"
            margin="dense"
            variant="outlined"
           />


           <div  className="radio-area">
           <FormLabel component="legend">Gender:</FormLabel>
            <RadioGroup row aria-label="gender" name="gender" value={doctor.gender} onChange={e=>handleChange(e.target)} >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
               
           </RadioGroup>
           </div>
           <FormControl variant="outlined" >
        <InputLabel htmlFor="department">Department</InputLabel>
        <Select
          native
          label="Department"
          inputProps={{
            name: 'department',
            id: 'department',
          }}
          value={doctor.department}
          onChange={e=>handleChange(e.target)}
        >
          <option aria-label="None" value="" />
          <option value={"cardiology"}>Cardiology</option>
          <option value={"laser"}>Laser</option>
          <option value={"medicine"}>Medicine</option>
        </Select>
      </FormControl>
       
            
      <seciton className="submitButton">
        <Button disabled={validate()} variant="contained" color="primary" onClick={handleSave}>
         Submit
        </Button>
       
        </seciton>
        </form>  
      
        </div>
    )
}

export default CreateDoctor
