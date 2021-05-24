import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import "./Modal.css"
function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      top:"15% !important",
      left:"50% !important",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
    //   boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      opacity:1,
      zIndex:2,
      
      
    }
    
  }));
function DoctorModal() {
    const classes = useStyles();
  
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setopen] = useState(false)
    const body =(
        <div  className="modal-style">
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <DoctorModal />
    </div>
   )
    const handleOpen=()=>{
        setopen(true)
    }
    const handleClose=()=>{
        setopen(false)
    }
    return (
        <div>
              <button type="button" onClick={handleOpen}>
                 Open Modal
              </button>
            <Modal
            open={open} 
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
                {body}
            </Modal>
        </div>
    )
}

export default DoctorModal
