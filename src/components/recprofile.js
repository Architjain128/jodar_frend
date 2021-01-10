import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
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

export default function Recprofile() {
  const classes = useStyles();
  // const [values, setValues] = React.useState({
  //   amount: '',
  //   password: '',
  //   weight: '',
  //   weightRange: '',
  //   showPassword: false,
  // });

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

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
                <TextField
                label="Company Name"
                id="companyame"
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
                {/* <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                    labelWidth={70}
                />
                </FormControl> */}

                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <TextField
                    label="Contact Number"
                    id="contact_number"
                    variant="outlined"
                    />
                </FormControl>


                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <TextField
                    label="Bio"
                    id="bio"
                    multiline
                    row={4}
                    variant="outlined"
                    />
                </FormControl>
                <Button variant="contained" color="primary" component="span">Update</Button>

      </div>
    </div>
    </Container>
  );
}
