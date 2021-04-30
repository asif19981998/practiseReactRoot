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
import "./CreateDoctor.css"
function CreateDoctor() {
   
    const [doctor, setdoctor] = useState({fullName:"",phoneNo:"",bmdcNumber:"",email:"",password:"",gender:"",department:""})
    
   
    useEffect(() => {
        // console.log(doctor)
        // return () => {
        //     cleanup
        // }
    }, [doctor])
    const handleSave =()=>{
        console.log(doctor)
     }
    return (

        <div className="create-doctor container">
            <h1>Create Doctor</h1>
           <form  noValidate autoComplete="off" className="form">
      
           <TextField
            label="Full Name"
            name="fullName"
            value={doctor.fullName}
            onChange={e=>setdoctor({...doctor,fullName:e.target.value})}
            type="text"
            margin="dense"
            variant="outlined"
        />
           <TextField
            name="phoneNo"
            label="Phone No"
            value={doctor.phoneNo}
            onChange={e=>setdoctor({...doctor,phoneNo:e.target.value})}
            type="text"
            margin="dense"
            variant="outlined"
           />
           <TextField
            name="email"
            label="Email"
            value={doctor.email}
            onChange={e=>setdoctor({...doctor,email:e.target.value})}
            type="email"
            margin="dense"
            variant="outlined"
           />
           <TextField
            name="password"
            label="Password"
            value={doctor.password}
            onChange={e=>setdoctor({...doctor,password:e.target.value})}
            type="password"
            margin="dense"
            variant="outlined"
           />
            <TextField
            name="bmdcNumber"
            label="BMDC Number"
            value={doctor.bmdcNumber}
            onChange={e=>setdoctor({...doctor,bmdcNumber:e.target.value})}
            type="password"
            margin="dense"
            variant="outlined"
           />


           <div  className="radio-area">
           <FormLabel component="legend">Gender:</FormLabel>
            <RadioGroup row aria-label="gender" name="gender" value={doctor.gender} onChange={e=>setdoctor({...doctor,gender:e.target.value})} >
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
          onChange={e=>setdoctor({...doctor,department:e.target.value})} 
        >
          <option aria-label="None" value="" />
          <option value={"cardiology"}>Cardiology</option>
          <option value={"laser"}>Laser</option>
          <option value={"medicine"}>Medicine</option>
        </Select>
      </FormControl>
       
            
       
        </form>  
        <seciton className="submitButton">
        <Button  variant="contained" color="primary" onClick={handleSave}>
        Submit
        </Button>
        </seciton>
        </div>
    )
}

export default CreateDoctor
