import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import DataTable from './rectable'


export default class  Applicationlist extends Component {
 constructor(props)
 {
     super(props)
     let newDate = new Date()
     let date = newDate.getDate();
     let month = newDate.getMonth() + 1;
     let year = newDate.getFullYear();
     let datata=`${date}/${month}/${year}`
     this.state={
         dataalljob:"",
         comname:this.props.data1[0],
         email:this.props.data1[2],
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
    const d1 = await axios.get('http://localhost:6050/alljob/'+this.state.jodar_id)
    console.log(d1.data.data1)
    this.setState({dataalljob:d1.data.data1})
}

async componentDidMount(){
    this.getalljobinfo()
}
  
//  onChange(event) {
//     let name = event.target.name
//     let value = event.target.value
//     this.setState({[name]: value}, () => {
//         console.log(this.state)
//     })
// } 
// onSubmit(e) {
//     e.preventDefault();

//     const newJob = {
//         UserId:this.state.jodar_id,
//         Company_name:this.state.comname,
//         email:this.state.email,
//         Title:this.state.title,
//         Descri:this.state.des,
//         Maxappli:this.state.maxapp,
//         Maxposi:this.state.maxpos,
//         Deadline:this.state.deadline,
//         Job_Type:this.state.jtype,
//         Job_Dura:this.state.jdur,
//         Job_Sal:this.state.sala,
//         Skill_Req:this.state.skilltok,
//         Rating:0,
//         sumRating:0,
//         Ondate:this.state.ondate,
//     }

//     console.log(newJob)
//     axios.post('http://localhost:6050/addjob', newJob)
//         .then(res => {
//             console.log("ok")
//             console.log(res.data)
//             if(res.data.status === '201')
//             {
//                 ///////
//                 alert("ok add")
//             }
//             else
//             {
//                 alert("Error")
//                 // window.location.reload()
//             }
//         })
//         .catch(err=>{
//             console.log(err)
//         })

//     this.setState({
//         comname:"",
//         email:"",
//         ondate:"",
//         jodar_id:"",
//         title:"",
//         des:"",
//         maxapp:"",
//         maxpos:"",
//         deadline:"",
//         jtype:"",
//         jdur:"",
//         sala:"",
//         skilltok:""
//     });
// }

// myapp =(
//     <div >

//       <TableContainer component={Paper}>
//       <Table  aria-label="customize table">
//         <TableHead style={{ backgroundColor: "rgb(78,94,186)", color: "rgb(250,250,250)",}}>
//           <TableRow>
//             <TableCell color="white"><b>Title</b></TableCell>
//             <TableCell align="center"><b>Max Applicants</b></TableCell>
//             <TableCell align="center"><b>Max Postions</b></TableCell>
//             <TableCell align="center"><b>Posted on</b></TableCell>
//             <TableCell align="right"><b>Options</b></TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//             <TableRow>
//             <TableCell>Title</TableCell>
//                 <TableCell align="center">Max Applicants</TableCell>
//                 <TableCell align="center">Max Postions</TableCell>
//                 <TableCell align="center">Posted on</TableCell>
//                 <TableCell align="right"><Button variant="contained" color="default">View</Button></TableCell>
//             </TableRow>
//             {/* {props.datax.map((row) => (
//               <TableRow>
//                   <TableCell >{row.Edu}</TableCell>
//                   <TableCell align="right">{row.Edus}</TableCell>
//                   <TableCell align="right">{row.Edue}</TableCell>
//               </TableRow>
//             ))} */}
//             {
//               !1 &&
//               <TableRow>
//                   <TableCell ><Chip variant="outlined" color="secondary" size="small" label="None" /></TableCell>
//                   <TableCell align="right"><Chip variant="outlined" color="secondary" size="small" label="None" /></TableCell>
//                   <TableCell align="right"><Chip variant="outlined" color="secondary" size="small" label="None" /></TableCell>
//               </TableRow>
              
//             }
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//   )

render (){
  return (
      <Container>
        <br/>
            <Box color="black" css={{ bgcolor: '#e2e2e2', p: 1,textAlign:'left',border:'black',borderRadius:'5px',margin:'20px'}}>
                <Typography variant="caption">Company Name</Typography>
                <Typography variant="subtitle2">{this.props.data1[0]}</Typography>
            </Box>
        <br/>
        <Typography variant="h4">My Created Jobs</Typography>
        <br/>
        <DataTable dataalljob={this.state.dataalljob}></DataTable>
    </Container>
  )};
}
