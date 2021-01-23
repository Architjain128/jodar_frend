import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import axios from 'axios';

export default class  AddJob extends Component {
 constructor(props)
 {
     super(props)
     let newDate = new Date()
     let date = newDate.getDate();
     let month = newDate.getMonth() + 1;
     let year = newDate.getFullYear();
     let datata=`${date}/${month}/${year}`
     this.state={
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
    this.onChange=this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
 }
 onChange(event) {
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]: value}, () => {
        // console.log(this.state)
    })
} 
onSubmit(e) {
    e.preventDefault();

    const newJob = {
        UserId:this.state.jodar_id,
        Company_name:this.state.comname,
        email:this.state.email,
        Title:this.state.title,
        Descri:this.state.des,
        Maxappli:this.state.maxapp,
        Maxposi:this.state.maxpos,
        Deadline:this.state.deadline,
        Job_Type:this.state.jtype,
        Job_Dura:this.state.jdur,
        Job_Sal:this.state.sala,
        Skill_Req:this.state.skilltok,
        Rating:0,
        sumRating:0,
        Ondate:this.state.ondate,
    }

    // console.log(newJob)
    axios.post('http://localhost:6050/addjob', newJob)
        .then(res => {
            // console.log("ok")
            // console.log(res.data)
            if(res.data.status === '201')
            {
                alert("ok add")
                window.location.reload()
            }
            else
            {
                alert("Error")
                window.location.reload()
            }
        })
        .catch(err=>{
            alert("Ooops something gone wrong")
            window.location.reload()
            // console.log(err)
        })

    this.setState({
        comname:"",
        email:"",
        ondate:"",
        jodar_id:"",
        title:"",
        des:"",
        maxapp:"",
        maxpos:"",
        deadline:"",
        jtype:"",
        jdur:"",
        sala:"",
        skilltok:""
    });
}

render (){
  return (
      <Container>
          <br/>
            
          <br/>
          <Typography variant="h4">Fill Form To Create Job Listing </Typography>

          <br/>

        {/* <FormControl fullWidth > */}
        <TextField required fullWidth id="standard-basic" label="Job Title" name="title" onChange = {this.onChange}/>
        <br/>
        <br/>
        <TextField required fullWidth id="standard-basic" multiline label="Description" name="des"onChange = {this.onChange}/>
        <br/>
        <br/>
        <TextField required fullWidth id="standard-basic" label="Max Applicant" name="maxapp" onChange = {this.onChange}/>
        <br/>
        <br/>
        <TextField required fullWidth id="standard-basic" label="Max Postions" name="maxpos" onChange = {this.onChange}/>
        <br/>
        <br/>
        <TextField required fullWidth id="standard-basic" label="Salary" onChange = {this.onChange} name="sala"/>
        <br/>
        <br/>
        <br/>
        <NativeSelect required fullWidth label="Job Type" name="jtype" value={this.state.jtype} onChange = {this.onChange} textAlign='left' id="demo-simple-select-placeholder-label"  displayEmpty
        //   className={classes.selectEmpty}
        >
          {/* <option value={1}>Choose Job Type</option> */}
          <option value={1}>Full Time</option>
          <option value={2}>Part Time</option>
          <option value={3}>Work From Home</option>
        </NativeSelect>
        <FormHelperText>Default Job Type is Full Time</FormHelperText>

        <br/>
       
        <NativeSelect required fullWidth label="Job Duration" name="jdur" value={this.state.jdur} onChange = {this.onChange} textAlign='left' id="demo-simple-select-placeholder-label"  displayEmpty
        //   className={classes.selectEmpty}
        >
          {/* <option value={}>Choose Job Duration</option> */}
          <option value={7}>Indefined</option>
          <option value={1}>1 month</option>
          <option value={2}>2 months</option>
          <option value={3}>3 months</option>
          <option value={4}>4 months</option>
          <option value={5}>5 months</option>
          <option value={6}>6 months</option>
        </NativeSelect>
        <FormHelperText>Default Job Type is Indefined</FormHelperText>        
        <br/>
        <TextField required fullWidth id="standard-basic" label="Deadline" name="deadline"onChange = {this.onChange}/>
        <FormHelperText> "DD/MM/YYYY : hh:mm" (24 hour format) only</FormHelperText>
        <br/>
        <TextField required fullWidth id="standard-basic" label="Skills" onChange = {this.onChange} name="skilltok" />
        <FormHelperText>Add multiple skill by seprating them through semicolon (;)</FormHelperText>
        <br/>
        <br/>
        <Button variant="contained" color="primary" onClick = {this.onSubmit} >Create</Button>

        {/* </FormControl> */}
        <br/>
        <br/>
        <Box color="black" css={{ bgcolor: '#e2e2e2', p: 1,textAlign:'left',border:'black',borderRadius:'5px',margin:'20px'}}>
                <Typography variant="caption">By Company Name</Typography>
                <Typography variant="subtitle2">{this.props.data1[0]}</Typography>
            </Box>
          <Box color="black" css={{ bgcolor: '#e2e2e2', p: 1,textAlign:'left',border:'black',borderRadius:'5px',margin:'20px'}}>
                <Typography variant="caption">From Email</Typography>
                <Typography variant="subtitle2">{this.props.data1[2]}</Typography>
            </Box>
          <Box color="black" css={{ bgcolor: '#e2e2e2', p: 1,textAlign:'left',border:'black',borderRadius:'5px',margin:'20px'}}>
                <Typography variant="caption"> On Date</Typography>
                <Typography variant="subtitle2">{this.state.ondate}</Typography>
            </Box>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

    </Container>
  )};
}
