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
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { DATE_COL_DEF } from '@material-ui/data-grid';
const nodemailer = require('nodemailer'); 



export default class  Acceptedlist extends Component {
 constructor(props)
 {
     super(props)
     this.state={
         comname:"",
         email:"",
         ondate:"",
         jodar_id:localStorage.getItem('Jodar_id'),
         accmahadata : [],
         accmahadata2 : [],
         sora : "1",
         soda : "1",
         sota : "1",
         sona : "1",
        }
    this.onChange=this.onChange.bind(this)
    this.getjobinfo=this.getjobinfo.bind(this)
    this.backMA=this.backMA.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.handleChange2=this.handleChange2.bind(this)
    this.handlesortra = this.handlesortra.bind(this);
    this.handlesortna = this.handlesortna.bind(this);
    this.handlesortda = this.handlesortda.bind(this);
 }
 getjobinfo = async () =>{
    //  all accepted jobs from applicationd
    const mahadata =[];
    for(let i=0;i<dalist.data.dalljoblisting.length;i++)
    {
        const p = dalist.data.dalljoblisting[i];
        const puser = await axios.get('http://localhost:6050/user/'+ p["UserId"])
        // const pjobi = await {jobdata by job id}      
        const pa = {UserId:p["UserId"],JobId:p["email"],Status:p["Status"],Datejoon:p["Datejoon"],Datejoin:p["Datejoin"],Rating:puser.data.data1.reset_token,sumRating:puser.data.data1.expire,fname:puser.data.data1.Firstname,lname:puser.data.data1.Lastname}
        if(pa.Rating===0)Rating="NaN"
        else{
            pa.Rating = pa.sumRating/pa.Rating
        }
        // console.log(pa)
        mahadata.push(pa)
    }

    this.setState({accmahadata2:mahadata,accmahadata:mahadata})
    // console.log(mahadata)
    // console.log(this.state.accmahadata2)
}

handlesortra=(e)=>{
    this.setState({sora : e.target.value,sona:"1",soda:"1",sota:"1"})
    let tempmahadata = this.state.accmahadata
    if(e.target.value===2)
    tempmahadata.sort(function(a,b) {
      let g=a.Rating
      let h=b.Rating
      if(a.Rating==="NaN")g=6
      if(b.Rating==="NaN")h=6
      return g - h
    })
    if(e.target.value===3)
    tempmahadata.sort(function(a,b) {
      let g=a.Rating
      let h=b.Rating
      if(a.Rating==="NaN")g=-1
      if(b.Rating==="NaN")h=-1
      return h-g
    })
    this.setState({accmahadata2:tempmahadata})
    // console.log(tempmahadata)
  }
  handlesortna=(e)=>{
    this.setState({sona : e.target.value,sora:"1",soda:"1",sota:"1"})
    let tempmahadata = this.state.accmahadata
    if(e.target.value===2)
    tempmahadata.sort(function(a,b) {
        let g=a.fname +" " +a.lname
        let h=b.fname +" " +b.lname
        g=g.toLowerCase();
        h=h.toLowerCase();
        return g.localeCompare(h)
    })
    if(e.target.value===3)
    tempmahadata.sort(function(a,b) {
        let g=a.fname +" " +a.lname
        let h=b.fname +" " +b.lname
        g=g.toLowerCase();
        h=h.toLowerCase();
        return h.localeCompare(g)
    })
    this.setState({accmahadata2:tempmahadata})
    // console.log(tempmahadata)
  }
    handlesortta=(e)=>{
    this.setState({sota : e.target.value,sora:"1",soda:"1",sona:"1"})
    let tempmahadata = this.state.accmahadata
    if(e.target.value===2)
    tempmahadata.sort(function(a,b) {
        let g=a.Title
        let h=b.Title
        g=g.toLowerCase();
        h=h.toLowerCase();
        return g.localeCompare(h)
    })
    if(e.target.value===3)
    tempmahadata.sort(function(a,b) {
        let g=a.Title
        let h=b.Title
        g=g.toLowerCase();
        h=h.toLowerCase();
        return h.localeCompare(g)
    })
    this.setState({accmahadata2:tempmahadata})
    // console.log(tempmahadata)
  }
  handlesortda=(e)=>{
    this.setState({soda : e.target.value,sona:"1",sora:"1",sota:"1"})
    let tempmahadata = this.state.accmahadata
    if(e.target.value===3)
    tempmahadata.sort(function(a,b) {
        let g=a.Datejoon
        let h=a.Datejoon
        let gdeadd=g.split(" ");
        let gdatede = gdeadd[0].split("/");
        let gtimede = gdeadd[1].split(":");
        let hdeadd=h.split(" ");
        let hdatede = hdeadd[0].split("/");
        let htimede = hdeadd[1].split(":");
        if( parseInt(gdatede[2])>= parseInt(hdatede[2]))
        {
            if( parseInt(gdatede[1])>= parseInt(hdatede[1]))
            {
                if( parseInt(gdatede[0])>= parseInt(hdatede[0]))
                {
                    if( parseInt(gtimede[0])>= parseInt(htimede[0]))
                    {
                        if( parseInt(gtimede[1])>= parseInt(htimede[1]))
                        {
                           return -1
                        }
                    }
                }
            }
        }
        return 1
    })
    if(e.target.value==2)
    tempmahadata.sort(function(a,b) {
        let g=a.Datejoon
        let h=a.Datejoon
        let gdeadd=g.split(" ");
        let gdatede = gdeadd[0].split("/");
        let gtimede = gdeadd[1].split(":");
        let hdeadd=h.split(" ");
        let hdatede = hdeadd[0].split("/");
        let htimede = hdeadd[1].split(":");
        if( parseInt(gdatede[2])< parseInt(hdatede[2]))
        {
            if( parseInt(gdatede[1])< parseInt(hdatede[1]))
            {
                if( parseInt(gdatede[0])< parseInt(hdatede[0]))
                {
                    if( parseInt(gtimede[0])< parseInt(htimede[0]))
                    {
                        if( parseInt(gtimede[1])< parseInt(htimede[1]))
                        {
                           return -1
                        }
                    }
                }
            }
        }
        return 1
    })
    this.setState({accmahadata2:tempmahadata})
    console.log(tempmahadata)
    
  }

async componentDidMount(){
    this.getjobinfo()
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



render (){
  return (
        <Container>
            <br/>
            <br/>
            <Box color="black" css={{ bgcolor: '#e2e2e2', p: 1,textAlign:'left',border:'black',borderRadius:'5px',margin:'20px'}}>
                <Typography variant="caption">Company Name</Typography>
                <Typography variant="subtitle2">{this.state.comname}</Typography>
            </Box>
            <br/>
            <br/>
            <br/>
            <br/>

                {
                this.state.accmahadata != []
                ?
                <Box style={{padding:15,borderRadius:5,border:"black 2px solid"}}>
                    <Paper elevation={1} style={{border:"black 5px solid"}}>
                    <br/>
                    <Typography variant="h3"><b>Sorting</b></Typography>
                    <br/>
                    <br/>
                    <InputLabel id="demo-simple-select-label">Sorting by Rating</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.sora}
                        onChange={this.handlesortra}
                    >
                        <MenuItem value={1}>None</MenuItem>
                        <MenuItem value={2}>Asc</MenuItem>
                        <MenuItem value={3}>Des</MenuItem>
                    </Select>
                    <br/>
                    <br/>
                    <InputLabel id="demo-simple-select-label">Sorting by Name</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.sona}
                        onChange={this.handlesortna}
                    >
                        <MenuItem value={1}>None</MenuItem>
                        <MenuItem value={2}>Asc</MenuItem>
                        <MenuItem value={3}>Des</MenuItem>
                    </Select>
                    <br/>
                    <br/>
                    <InputLabel id="demo-simple-select-label">Sorting by joning date</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.soda}
                        onChange={this.handlesortda}
                    >
                        <MenuItem value={1}>None</MenuItem>
                        <MenuItem value={2}>Asc</MenuItem>
                        <MenuItem value={3}>Des</MenuItem>
                    </Select>
                    <br/>
                    <br/>
                    <InputLabel id="demo-simple-select-label">Sorting by job title</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.sota}
                        onChange={this.handlesortta}
                    >
                        <MenuItem value={1}>None</MenuItem>
                        <MenuItem value={2}>Asc</MenuItem>
                        <MenuItem value={3}>Des</MenuItem>
                    </Select>
                    <br/>
                    <br/>
                    </Paper>

                    {/* <hr></hr> */}
                    <br/>
                    <br/>
                    {
                        this.state.accmahadata2.map((row)=>(
                            <div >
                            <Paper elevation={5} style={{border:"grey 3px solid"}}>
                                <br/>
                                <Typography><b>Applicant Name : </b> {row.fname} {row.lname}</Typography><br/>
                                <Typography><b>Rating : </b> {row.Rating} </Typography><br/>
                                <Typography><b>Applied On : </b> {row.Datejoon} </Typography><br/>
                                <Typography><b>Job Title</b> {row.Title}</Typography>
                                <br/>
                                <Typography><b>Job Type</b> {row.Type}</Typography>
                            </Paper>
                            <br/>
                            <br/>
                            </div>
                        ))
                    }
                </Box>
                :
                null
                }
        </Container>
  )};
}
