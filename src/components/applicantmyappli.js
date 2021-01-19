import React, { Component } from 'react'
import {Container} from '@material-ui/core';
import axios from 'axios';
import Dashboard from './dashboard';



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
                table of cur job<br/>
                table of applied job<br/>
                table of rejected job<br/>
            </Container>
        )
    }
}

export default Mydashappli

