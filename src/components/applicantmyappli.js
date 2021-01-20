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
            appliedjob:"",
            workingjob:"",
            rejectedjob:"",  
        }
        this.getinfo = this.getinfo.bind(this);
    }
    getinfo = async () =>{
        // console.log(props)
        const appliedjobvar = [];
        const workingjobvar = [];
        const rejectedjobvar = [];
        // for(let i=0;i<props.datajj.length;i++)
        // {
        //     const p = props.datajj[i]
        //     const pa = {jobid:p["JobId"],userid:p["UserId"],Title:p["Title"],RecName:p["Company_name"],Rating:p["Rating"],Salary:p["Job_Sal"],Dateapp:p["Datejoon"],Datejoin:p["Datejoin"],Status:p["Status"]}
        //     if(pa.Rating === 0)pa.Rating = "NaN"
        //     if(pa.Status === "applied")appliedjobvar.push(pa)
        //     if(pa.Status === "rejected")rejectedjobvar.push(pa)
        //     if(pa.Status === "accepted")workingjobvar.push(pa)
        // }
        this.setState({appliedjob:appliedjobvar,workingjob:workingjobvar,rejectedjob:rejectedjobvar})
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

