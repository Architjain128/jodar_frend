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
import Rating from '@material-ui/lab/Rating';

import nopro from "../files/images/noprofile.jpg"

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
}));

export default function Appprofile() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    // prorating: 3,
    showPassword: false,
  });

//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

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
                    <Chip clickable="true" color="primary" avatar={<Avatar>+</Avatar>} label="Add" size="small"/>
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
