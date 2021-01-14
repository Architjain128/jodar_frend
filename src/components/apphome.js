import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import DataTableh from './apphometable'
export default class  Apphome extends Component {
 constructor(props)
 {
     super(props)
     let newDate = new Date()
     let date = newDate.getDate();
     let month = newDate.getMonth() + 1;
     let year = newDate.getFullYear();
     let datata=`${date}/${month}/${year}`
     this.state={
         datagetjob:"",
         namemy:this.props.data1[0],
         email:'',
         ondate:datata,
         jodar_id:localStorage.getItem('Jodar_id'),
         title:"",
         des:"",
         maxapp:"",
         maxpos:"",
         deadline:"",
         jtype:"1",
         jdur:"7",
         sala:"",
         skilltok:"",
        }
    // this.onChange=this.onChange.bind(this)
    // this.onSubmit = this.onSubmit.bind(this)
    this.getalljobinfo=this.getalljobinfo.bind(this)
 }

 getalljobinfo = async () =>{
    const d1 = await axios.get('http://localhost:6050/getalljob/')
    console.log(d1.data.dataa)
    this.setState({datagetjob:d1.data.dataa})
}

async componentDidMount(){
    this.getalljobinfo()
}

render (){
  return (
      <Container>
        <br/>
            <Box color="black" css={{ bgcolor: '#e2e2e2', p: 1,textAlign:'left',border:'black',borderRadius:'5px',margin:'20px'}}>
                <Typography variant="caption">Viewing as</Typography>
                <Typography variant="subtitle2">{this.state.namemy}</Typography>
            </Box>
        <br/>
        <Typography variant="h4">All Jobs</Typography>
        <br/>
        <DataTableh dataa={this.state.datagetjob} ></DataTableh>
    </Container>
  )};
}
