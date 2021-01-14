import React, { Component } from 'react'
import {Container} from '@material-ui/core';
import axios from 'axios';
import Dashboard from './dashboard';



class Appliboard extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            userid:localStorage.getItem("Jodar_id"),
            data1:"####",
            data2:"ratin",
            data3:[],
            data4:[],
            data4a:[],
            data4b:[],
            data4c:[],
        }
        this.getinfo = this.getinfo.bind(this);
    }
    getinfo = async () =>{
        // alert("ok")
        const d4 = await axios.get('http://localhost:6050/alledu/'+this.state.userid)
        const d3 = await axios.get('http://localhost:6050/allskill/'+this.state.userid)
        const d1 = await axios.get('http://localhost:6050/user/'+this.state.userid)
        // const d4 = await axios.get('http://localhost:6050/alledu/'+this.state.userid)
        const dd1 = [];
        const dd3 = [];
        const dd4 = [];
        dd1.push(d1.data.data1.Firstname)
        dd1.push(d1.data.data1.Lastname)
        dd1.push(d1.data.data1.email)
        dd1.push(d1.data.data1.signup_time)
        for(let i=0;i<d3.data.data3.length;i++)
        {
            dd3.push(d3.data.data3[i].Spec)
        }
        for(let i=0;i<d4.data.data4.length;i++)
        {
            dd4.push({Edu:d4.data.data4[i].Edu,Edus:d4.data.data4[i].Edus,Edue:d4.data.data4[i].Edue})
        }
        
        this.setState({data1:dd1,data3:dd3,data4:dd4})
    }

    async componentDidMount(){
        this.getinfo()
    }
    render() {

        return (
            <Container>
                <Dashboard data1={this.state.data1} data2={this.state.data2} data3={this.state.data3} data4={this.state.data4} ></Dashboard>
            </Container>
        )
    }
}

export default Appliboard

