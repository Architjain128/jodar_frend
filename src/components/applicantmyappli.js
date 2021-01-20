import React, { Component } from 'react'
import {Container} from '@material-ui/core';
import axios from 'axios';
import Dashboard from './dashboard';
import {Typography,Paper} from '@material-ui/core';



class Mydashappli extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            userid:localStorage.getItem("Jodar_id"),
        }
        this.getinfo = this.getinfo.bind(this);
    }
    getinfo = async () =>{
     
    }

    async componentDidMount(){
        this.getinfo()
    }
    render() {

        return (
            <Container>
                <Paper elevation={3}>
                    <br/>
                        <Typography>My Accepted Jobs</Typography>
                        <br/>
                        Table
                        <br/>
                    <br/>
                </Paper>
                <br/>
                <Paper elevation={3}>
                    <br/>
                        <Typography>My Applied Jobs</Typography>
                        <br/>
                        Table
                        <br/>
                    <br/>
                </Paper>
                <br/>
                <Paper elevation={3}>
                    <br/>
                        <Typography>My Rejected Jobs</Typography>
                        <br/>
                        Table
                        <br/>
                    <br/>
                </Paper>
            </Container>
        )
    }
}

export default Mydashappli

