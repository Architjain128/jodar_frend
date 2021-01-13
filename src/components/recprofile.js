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

export default function Recprofile(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [jodar_id, setJodarID] = React.useState(localStorage.getItem("Jodar_id"));
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [values, setValues] = React.useState({
    biobio: '',
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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


  const onbioSubmit =()=>{
    const newbio = {
      UserId : jodar_id,
      Bio : values.biobio,
    }
    console.log(newbio)
        axios.post('http://localhost:6050/addbio', newbio)
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

  const onupSubmit =()=>{
    const newbio = {
      UserId : jodar_id,
      Bio : values.biobio,
    }
    console.log(newbio)
        axios.put('http://localhost:6050/upbio/'+jodar_id, newbio)
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

  const addbio=(
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add a Bio</h2>
      <TextField
        variant="standard"
        margin="normal"
        required
        multiline
        name="new_skill"
        label="Enter Bio"
        type="text"
        id="new_skill"
        onChange = {handleChange('biobio')}
        />
      <Button
      type="submit"
      variant="contained"
      color="primary"
      id="addbio"
      onClick = {onbioSubmit}
      >Add Bio</Button>
    </div>
  )
  const upbio=(
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add a new Bio</h2>
      <TextField
        variant="standard"
        margin="normal"
        required
        multiline
        name="new_skill"
        label="Enter Bio"
        type="text"
        id="new_skill"
        onChange = {handleChange('biobio')}
        />
      <Button
      type="submit"
      variant="contained"
      color="primary"
      id="addbio"
      onClick = {onupSubmit}
      >Update Bio</Button>
    </div>
  )
const bio=(
  <div>
      
        <Box
        boxShadow="1"
        borderRadius={12}
        textAlign="center"
        p='10px'
        >
            <Typography variant="h6">Bio</Typography>
            <Divider/>
            <Divider/>
            <br/>
            <Typography>{props.data2}</Typography>
            <br/>
        <Chip clickable="true"  onClick={handleOpen2} color="primary" avatar={<Avatar>+</Avatar>} label="Update Bio"/>
        <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
        {upbio}
        </Modal>
          </Box>
    
    {/* {
      !props.data2.Bio &&
      <div>
        <Box
        boxShadow="1"
        borderRadius={12}
        textAlign="center"
        p='10px'
        >
            <Typography variant="h6">Bio</Typography>
            <Divider/>
            <Divider/>
            <br/>
              <Chip variant="outlined" color="secondary"  label="None" />
              <br/>
              <br/>
              <Chip clickable="true"  onClick={handleOpen} color="primary" avatar={<Avatar>+</Avatar>} label="Add Bio" />
              <br/>
              <br/>
          </Box>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
        {addbio}
        </Modal>
      </div>
    } */}
  </div>
)




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
      {/* <div> */}
      <Box color='#fafafa'>
        <Typography variant="caption">Account made on</Typography>
        <Typography variant="h5">{props.data1[3]}</Typography>
      </Box>
      <Box color="black" css={{ bgcolor: '#e2e2e2', p: 1,textAlign:'left',border:'black',borderRadius:'5px',margin:'20px',width:500}}>
        <Typography variant="caption">Company Name</Typography>
        <Typography variant="h5">{props.data1[0]}</Typography>
      </Box>
      <Box color="black" css={{ bgcolor: '#e2e2e2', p: 1,textAlign:'left',border:'black',borderRadius:'5px',margin:'20px',width:500}}>
        <Typography variant="caption">Email</Typography>
        <Typography variant="h5">{props.data1[2]}</Typography>
      </Box>
      <Box color="black" css={{ bgcolor: '#e2e2e2', p: 1,textAlign:'left',border:'black',borderRadius:'5px',margin:'20px',width:500}}>
        <Typography variant="caption">Contact Namber</Typography>
        <Typography variant="h5">{props.data1[1]}</Typography>
      </Box>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                {/* <TextField
                disabled
                label="Company Name"
                id="companyame"
                variant="filled"
                defaultValue={props.data1[0]}
                /><br/><br/>
                <TextField
                disabled
                label="Email"
                id="email"
                variant="filled"
                defaultValue={props.data1[2]}
                />
                <br/><br/>
                <TextField
                disabled
                label="Contact Number"
                id="contact_number"
                variant="filled"
                defaultValue={props.data1[2]}
                />
                <br/>
                <br/> */}
            <div>
              {bio}
            </div>
            </FormControl>
               
    </div>
    </Container>
  );
}
