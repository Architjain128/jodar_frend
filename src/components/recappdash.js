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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Rating from '@material-ui/lab/Rating'
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
    this.onChange=this.onChange.bind(this)
    this.getjobinfo=this.getjobinfo.bind(this)
    this.ondeljob=this.ondeljob.bind(this)
    this.onupjob=this.onupjob.bind(this)
    this.backMA=this.backMA.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.handleChange2=this.handleChange2.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
 }
 getjobinfo = async () =>{
    const d1 = await axios.get('http://localhost:6050/user/'+this.state.jodar_id)
    const d2 = await axios.get('http://localhost:6050/getjob/'+this.state.bid)
    const dalist = await axios.get('http://localhost:6050/alljobslisting/'+this.state.bid)
    const mahadata =[];
    for(let i=0;i<dalist.data.dalljoblisting.length;i++)
    {
        const p = dalist.data.dalljoblisting[i];
        const puser = await axios.get('http://localhost:6050/user/'+ p["UserId"])
        const pedu = await axios.get('http://localhost:6050/alledu/'+ p["UserId"])
        const pskill = await axios.get('http://localhost:6050/allskill/'+ p["UserId"])
        const ppdf = await axios.get('http://localhost:6050/downloadpdf/'+ p["UserId"])
        // console.log(p)
        // console.log(puser)
        // console.log(pedu)
        // console.log(pskill)
        // console.log(ppdf)


        let aedu =""
        for(let i=0;i<pedu.data.data4.length;i++)
        {
            aedu = aedu + pedu.data.data4[i].Edu + ";" + pedu.data.data4[i].Edus + ";" + pedu.data.data4[i].Edue + ";" 
        }
        let askill =""
        for(let i=0;i<pskill.data.data3.length;i++)
        {
            askill = askill + pskill.data.data3[i].Spec + ";" 
        }
        const pa = {UserId:p["UserId"],Status:p["Status"],Datejoon:p["Datejoon"],Sop:p["Sop"],Resume:ppdf.data.pdf,Rating:puser.data.data1.reset_token,sumRating:puser.data.data1.expire,fname:puser.data.data1.Firstname,lname:puser.data.data1.Lastname,uedu:aedu,uskill:askill}
        if(pa.Rating===0)Rating="NaN"
        else{
            pa.Rating = pa.sumRating/pa.Rating
        }
        // console.log(pa)
        mahadata.push(pa)
    }
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(mahadata)


    // [
    //     {
    //       "UserId": "5ff9fb0d25bb0e2dea385be5",
    //       "Status": "pending",
    //       "Datejoon": "19/1/2021",
    //       "Sop": "wagRs",
    //       "Resume": "http://localhost:6050/pdf/5ff9fb0d25bb0e2dea385be5.pdf",
    //       "Rating": null,
    //       "fname": "Archit",
    //       "lname": "Jain",
    //       "uedu": "ar;ar;ar;arc;2019;2020;arch;2000;present;archit;2000;4554;iiit;2109;6544;",
    //       "uskill": "food;sleep;code;js;do;chess;"
    //     },
    //     {
    //       "UserId": "5ff9f87aae5ae8253d6c6084",
    //       "Status": "pending",
    //       "Datejoon": "19/1/2021",
    //       "Sop": "ssrhyk",
    //       "Resume": "false",
    //       "Rating": null,
    //       "fname": "Archit",
    //       "lname": "Jain",
    //       "uedu": "reactjs;reactjs;reactjs;",
    //       "uskill": "reactjs;"
    //     }
    //   ]

    const dd1 = [];
    const dd2 = [];
    console.log(d1.data)
    console.log(d2.data.data5)
    const sktok = d2.data.data5.Skill_Req.split(";");
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(sktok)
    this.setState({skilltok:sktok,comname:d1.data.data1.company_name,Title:d2.data.data5.Title,deadline:d2.data.data5.Deadline,des:d2.data.data5.Descri,maxapp:d2.data.data5.Maxappli,maxpos:d2.data.data5.Maxposi,jtype:d2.data.data5.Job_Type,jdur:d2.data.data5.Job_Dura,sala:d2.data.data5.Job_Sal})
}

async componentDidMount(){
    this.getjobinfo()
}

backMA(){
    window.location.href='/marketplace'
}
handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]: value}, () => {
        console.log(this.state)
    })
};
handleChange2 = (event) => {
    this.setState({uptarval:event.target.value})
};
onChange(event) {
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]: value}, () => {
        console.log(this.state)
    })
}
ondeljob(){
    axios.delete('http://localhost:6050/deljob/'+this.state.bid)
    .then(res => {
        console.log("ok")
        console.log(res.data)
        if(res.data.status === '201')
        {
            alert("Job deleted")
            window.location.href='/marketplace'
        }
        else
        {
            alert("Error")
            window.location.reload()
        }
    })
    .catch(err=>{
        console.log(err)
    })
} 
onupjob(){
   let a = this.state.maxapp;
   let b = this.state.maxpos;
   let c = this.state.deadline;
   let az = this.state.maxappz;
   let bz = this.state.maxposz;
   let cz = this.state.deadlinez;
   console.log(a)
   console.log(b)
   console.log(c)
   console.log(az)
   console.log(bz)
   console.log(cz)
   console.log(a)
   console.log(b)
   console.log(c)
   if(a != az && az!="")a=az
   if(b != bz && bz!="")b=bz
   if(c != cz && cz!="")c=cz
    const newJob = {
        Maxappli:a,
        Maxposi:b,
        Deadline:c,
    }
    console.log(newJob)
    axios.put('http://localhost:6050/upjob/'+this.state.bid, newJob)
    .then(res => {
        console.log("ok")
        console.log(res.data)
        if(res.data.status === '201')
        {
            alert("Job updated")
            window.location.reload()
        }
        else
        {
            alert("Error")
            window.location.reload()
        }
    })
    .catch(err=>{
        console.log(err)
    })
    this.setState({maxappz:"",maxposz:"",deadlinez:""});
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
            <Box color="black" css={{ bgcolor: '#e2e2e2', p: 1,textAlign:'left',border:'black',borderRadius:'5px',margin:'20px'}}>
                <Typography variant="caption">Company Name</Typography>
                <Typography variant="subtitle2">{this.state.comname}</Typography>
            </Box>
            <br/>
            <br/>
            <Paper elevation={3} >
                <Typography variant="h3">{this.state.Title}</Typography><br/>
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
                <Typography variant="body2">Choose field and enter new value in textbox and smash update</Typography>
                <br/>
                {/* <RadioGroup name="field" value={this.state.uptar} onChange={this.handleChange}>
                    <FormControlLabel value="appy" control={<Radio />} label="Maximun Applicants" />
                    <FormControlLabel value="posi" control={<Radio />} label="Maximum Positions" />
                    <FormControlLabel value="dead" control={<Radio />} label="Deadline" />
                </RadioGroup> */}
                <br/>
                <TextField variant="outlined" label="Max applicant" name="maxappz" onChange={this.handleChange}></TextField>
                <TextField variant="outlined" label="Max Position" name="maxposz" onChange={this.handleChange}></TextField>
                <TextField variant="outlined" label="Deadline" name="deadlinez" onChange={this.handleChange}></TextField>
                <br/>
                <Button onClick={this.onupjob} color="primary" variant="contained">Update</Button>
                <br/>
            </Paper>
            <br/>
            <br/>
            <Button onClick={this.ondeljob} color="secondary" variant="contained">Delete</Button>
            <br/>
            <br/>
               

                <Paper>

                    <Box>
                        hihi
                    </Box>

                </Paper>

        </Container>
  )};
}
