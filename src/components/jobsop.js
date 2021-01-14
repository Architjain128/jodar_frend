import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { FormatAlignJustify } from '@material-ui/icons';

export default class  Dashyy extends Component {
 constructor(props)
 {
     super(props)
     this.state={
         bid:localStorage.getItem('Jodar_joblist'),
         comname:"",
         email:"",
         ondate:"",
         jodar_id:localStorage.getItem('Jodar_id'),
         title:"",
         des:"",
         maxappz:"",
         maxposz:"",
         deadlinez:"",
         maxapp:"",
         maxpos:"",
         deadline:"",
         jtype:"",
         jdur:"",
         sala:"",
         skilltok:[],
         points:'',
         uptar:'',
         uptarval:'',
        }
    this.getjobinfo=this.getjobinfo.bind(this)
    this.onapplyjob=this.onapplyjob.bind(this)
    this.backMA=this.backMA.bind(this)
    this.handleChange=this.handleChange.bind(this)
 }
 getjobinfo = async () =>{
    const dAA = await axios.get('http://localhost:6050/alljobposted')
    // const d2 = await axios.get('http://localhost:6050/getjob/'+this.state.bid)
    // const dd1 = [];
    // const dd2 = [];
    // console.log(d1.data)
    // console.log(d2.data.data5)
    // const sktok = d2.data.data5.Skill_Req.split(";");
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    // console.log(sktok)
    // this.setState({skilltok:sktok,comname:d1.data.data1.company_name,Title:d2.data.data5.Title,deadline:d2.data.data5.Deadline,des:d2.data.data5.Descri,maxapp:d2.data.data5.Maxappli,maxpos:d2.data.data5.Maxposi,jtype:d2.data.data5.Job_Type,jdur:d2.data.data5.Job_Dura,sala:d2.data.data5.Job_Sal})
}

async componentDidMount(){
    this.getjobinfo()
}

backMA(){
    window.location.href='/dashboard'
}
handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]: value}, () => {
        console.log(this.state)
    })
};

onapplyjob(){

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

    console.log(newJob)
    axios.post('http://localhost:6050/addjob', newJob)
        .then(res => {
            console.log("ok")
            console.log(res.data)
            if(res.data.status === '201')
            {
                ///////
                alert("ok add")
            }
            else
            {
                alert("Error")
                // window.location.reload()
            }
        })
        .catch(err=>{
            console.log(err)
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
        skilltok:"",
        points:''
    });
}

render (){
  return (
        <Container>
            <br/>
            <Button onClick={this.backMA} color="primary" variant="contained">Back to Dashboard</Button>
        
            <br/>
            <br/>
            <Paper elevation={3} >
                <Typography variant="h4"><b>Recrutier </b>{this.state.comname}</Typography><br/>
                <Typography variant="h5">{this.state.Title}</Typography><br/>
                <Typography variant="body1"><b>Deadline</b> {this.state.deadline}</Typography><br/>
                <Typography variant="body2">{this.state.des}</Typography><br/><Divider variant="middle" />
                <Typography variant="overline"><b>Max applications</b> {this.state.maxapp}</Typography><br/>
                <Typography variant="overline"><b>Max positions</b> {this.state.maxpos}</Typography><br/>
                <Typography variant="overline"><b>Skills Required </b> {this.state.skilltok.map(name => (<Chip variant="outlined" color="default" size="small" label={name} />))}</Typography><br/>
                <Typography variant="overline"><b>Salary</b> {this.state.sala}</Typography><br/><Divider variant="middle" />
                <Typography variant="overline"><b>Job Type</b> {this.state.jtype}</Typography><br/>
                <Typography variant="overline"><b>Job Duration</b> {this.state.jdur}</Typography><br/>
                <Typography variant="overline"><b>Rating</b> {this.state.points}</Typography><br/>

            </Paper>
            <br/>
            <br/>
            <Paper>
                <br/>
                <Typography variant="body2">enter statement of purpose in textbox and smash apply</Typography>
                <br/>
                {/* <RadioGroup name="field" value={this.state.uptar} onChange={this.handleChange}>
                    <FormControlLabel value="appy" control={<Radio />} label="Maximun Applicants" />
                    <FormControlLabel value="posi" control={<Radio />} label="Maximum Positions" />
                    <FormControlLabel value="dead" control={<Radio />} label="Deadline" />
                </RadioGroup> */}
                <br/>
                <TextField variant="outlined"  multiline inputProps={{ maxLength: 250 }} label="Not more than 250 words" name="soppp" onChange={this.handleChange}></TextField>
                <br/>
                <br/>
                <Button onClick={this.onapplyjob} color="primary" variant="contained">Apply</Button>
                <br/>
            </Paper>
            <br/>
            <br/>

        </Container>
  )};
}
