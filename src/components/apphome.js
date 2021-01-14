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

    this.getalljob2info=this.getalljob2info.bind(this)
 }

 getalljob2info = async () =>{
    const d1 = await axios.get('http://localhost:6050/alljobposted')
    // console.log(d1.data.dataa)
    this.setState({datagetjob:d1.data.dataAA})
//   console.log(d1.data.dataAA)

}

async componentDidMount(){
    this.getalljob2info()
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
        <DataTableh datagetjob={this.state.datagetjob} ></DataTableh>
    </Container>
  )};
}
