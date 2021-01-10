import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Modal from '@material-ui/core/Modal';

import Rating from '@material-ui/lab/Rating';

import nopro from "../files/images/noprofile.jpg"
import axios from 'axios';


function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  media: {
    height:0,
    paddingTop: '56.25%', // 16:9
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));




export default function Appprofile() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [values, setValues] = React.useState({
    specy : "",
    edu : "",
    edus : "",
    edue : "present",
    // prorating: 3,
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const onskillSubmit =()=>{
    const newskill = {
      UserId : localStorage.getItem("Objuserid"),
      Spec : values.specy,
    }
    console.log(newskill)
        axios.post('http://localhost:6050/addskill', newskill)
            .then(res => {
                console.log("ok")
                console.log(res.data)
                alert(res.data.msg)
                window.location.reload()
            })
            .catch(err=>{
                console.log(err)
                alert("error")
            })
    setOpen(false);
  }
  const oneduSubmit =()=>{
    const newedu = {
      UserId : localStorage.getItem("Objuserid"),
      Edu : values.edu,
      Edus : values.edus,
      Edue : values.edue,
    }
    console.log(newedu)
        axios.post('http://localhost:6050/addedu', newedu)
            .then(res => {
                console.log("ok")
                console.log(res.data)
                alert(res.data.msg)
                window.location.reload()
            })
            .catch(err=>{
                console.log(err)
                alert("error")
            })
    setOpen2(false);
  }
  const addskill = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add a skill</h2>
      <TextField
        variant="standard"
        margin="normal"
        required
        name="new_skill"
        label="Enter new Skill"
        type="text"
        id="new_skill"
        onChange = {handleChange('specy')}
        />
      <Button
      type="submit"
      variant="contained"
      color="primary"
      id="addskill"
      onClick = {onskillSubmit}
      >Add skill</Button>
    </div>
  )

  const addedu = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add a Eduction Instance</h2>
      <TextField
        variant="standard"
        margin="normal"
        required
        name="new_edu"
        label="Enter Institution Name"
        type="text"
        id="new_edu"
        onChange = {handleChange('edu')}
        />
        <TextField
        variant="standard"
        margin="normal"
        required
        name="new_edus"
        label="Start Year (YYYY)"
        type="text"
        id="new_edus"
        onChange = {handleChange('edus')}
        />
        <TextField
        variant="standard"
        margin="normal"
        name="new_edue"
        label="End Year (YYYY/present)"
        type="text"
        id="new_edue"
        onChange = {handleChange('edue')}
        />
      <Button
      type="submit"
      variant="contained"
      color="primary"
      id="addedu"
      onClick = {oneduSubmit}
      >Add instance</Button>
    </div>
  )

//   const handleClickShowPassword = () => {
//     setValues({ ...values, showPassword: !values.showPassword });
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

  return (
      <Container>
    <div className={classes.root}>
        <div>
      <Card>
        <CardMedia
            className={classes.media}
            image={nopro}
            title="Profile Photo"
        />
        <CardActions>
        <label disabled>
          Change Profile Image
        </label>
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        </CardActions>
      </Card>
      </div>
      <div>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="read-only" value={3} readOnly />
                </Box>
                <TextField
                label="First Name"
                id="name"
                // className={clsx(classes.margin, classes.textField)}
                InputProps={{
                    readOnly: true
                }}
                variant="outlined"
                /><br/>
                <TextField
                label="Last Name"
                id="name"
                // className={clsx(classes.margin, classes.textField)}
                InputProps={{
                    readOnly: true
                }}
                variant="outlined"
                /><br/>
                <TextField
                label="Email"
                id="email"
                // className={clsx(classes.margin, classes.textField)}
                InputProps={{
                    readOnly: true
                }}
                variant="outlined"
                />
            </FormControl>
               

                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <Box
                    boxShadow="1"
                    borderRadius={12}
                    textAlign="center"
                    p='10px'
                    >
                    <Typography>Education</Typography>
                    <Divider></Divider><br/>

                      <Chip clickable="true"  onClick={handleOpen2} color="primary" avatar={<Avatar>+</Avatar>} label="Add" size="small"/>
                      <Modal
                        open={open2}
                        onClose={handleClose2}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                      >
                        {addedu}
                      </Modal>
                    </Box>
                </FormControl>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <Box
                    boxShadow="1"
                    borderRadius={12}
                    textAlign="center"
                    p='10px'
                    >
                    <Typography>Skills</Typography>
                    <Divider></Divider><br/>
                    
                    <Chip variant="outlined" color="default" size="small" label="nope"/>
                    <Chip variant="outlined" color="default" size="small" label="nope"/>
                    <Chip variant="outlined" color="default" size="small" label="nope"/>
                    <Chip clickable="true"  onClick={handleOpen} color="primary" avatar={<Avatar>+</Avatar>} label="Add" size="small"/>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                    >
                      {addskill}
                    </Modal>
                    </Box>
                </FormControl>
                <br/>
                <br/>
                <Typography >Upload Resume</Typography>
                <Typography ><input accept="image/*" className={classes.input} id="icon-button-file" type="file" /></Typography>
                <br/><br/>
                <Button variant="contained" color="primary" component="span">Update</Button>

      </div>
    </div>
    </Container>
  );
}
