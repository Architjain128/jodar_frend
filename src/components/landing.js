import React, { Component } from 'react'
import { NavLink} from 'react-router-dom';
import {Grid,Paper,Container,Box,Button} from '@material-ui/core';
import '../files/css/landing.css'
import CompanyName from "../files/images/companyname.png"


class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Container>
                <Box 
                bgcolor="white"
                boxShadow="10"
                borderColor="black"
                borderRadius="15px"
                textAlign="center"
                p='30px'
                mt='50px'
                >
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                        <img src={CompanyName} alt="website company name" style={{width:"90%"}}></img>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper >
                                <NavLink to="/login" style={{ textDecoration: 'none' }}>
                                    <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    id="landloginbutton"
                                    onClick 
                                    >
                                    Login
                                    </Button>
                                </NavLink>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper >
                                <NavLink to="/signup" style={{ textDecoration: 'none' }}>
                                    <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    id="landloginbutton"
                                    >
                                    Sign Up
                                    </Button>
                                </NavLink>
                            </Paper>
                        </Grid>
                        
                    </Grid>
                </Box>
            </Container>
        )
    }
}

export default LandingPage

