// import data from "./data.json";
import React, { useState } from "react";
import Fuse from "fuse.js";
import  {DataGrid}  from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Modal from '@material-ui/core/Modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import nopro from "../files/images/noprofile.jpg"
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "rgb(78,94,186)",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  root1: {
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  media: {
    height:0,
    paddingTop: '56.25%', // 16:9
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  table: {
    minWidth: 600,
  },
}));




export default function SettingsPage(props) {
  const classes = useStyles();
  const [titira, settitira] = useState("1");
  const [titi, settiti] = useState("1");
  const [titidu, settitidu] = useState("1");
  const [titidura, settitidura] = useState("8");
  const [titity, settitity] = useState("All");
  console.log(props.data)
  const [searchData, setSearchData] = useState(props.data);
  var sdfg = props.data;
  const [datasci, setDatasci] = useState(false);

  // const columns = [
  //   { field: 'Title', headerName: 'Title', description: 'Title of job',width: 140,headerAlign: 'center' },
  //   { field: 'RecName', headerName: 'Recruiter', description: 'Name of company who posted job',width: 140,headerAlign: 'center' },
  //   { field: 'Rating', headerName: 'Rating',headerAlign: 'center',description: 'Rating of company', type : 'number', width: 100},
  //   { field: 'Salary', headerName: 'Salary',headerAlign: 'center',description: 'Salary of job', type : 'number', width: 120 },
  //   { field: 'Type', headerName: 'Type',description: 'Job Type',headerAlign: 'center', width: 120 },
  //   { field: 'Duration', headerName: 'Duration',headerAlign: 'center', type :'number',description: 'In months', width: 120 },
  //   { field: 'Deadline', headerName: 'Deadline',headerAlign: 'center',description: 'Deadline to apply', width: 160 },
  //   { field: 'id', headerName: 'Id',headerAlign: 'center',hide: true },
  //   {
  //     field: "none",
  //     headerName: "Status",
  //     headerAlign: 'center',
  //     width: 100,
  //     description: 'Click to apply',
  //     disableClickEventBubbling: true,
  //     renderCell: (params: CellParams) => {
  //       const onClick = () => {
  //         const api: GridApi = params.api;
  //         const fields = api
  //           .getAllColumns()
  //           .map((c) => c.field)
  //           .filter((c) => c !== "__check__" && !!c);
  //         const thisRow = {};
  
  //         fields.forEach((f) => {
  //           thisRow[f] = params.getValue(f);
  //         });
  //         // console.log(thisRow)
  //         // alert(thisRow.id);
  //         localStorage.setItem('Jodar_jobapp',thisRow.id)
  //         window.location.href="/applyjob"
  //       };
  //       return  <Button onClick={onClick} width='140' color="primary" variant="contained">Apply</Button>
  //     }
  //   },
  // ];
  const searchItem = (query) => {
    if (!query) {
      sdfg = props.data;
      return;
    }
    const fuse = new Fuse(props.data, {
      keys: ["Title"]
    });
    const result = fuse.search(query);
    const finalResult = [];
    if (result.length) {
      result.forEach((item) => {
        finalResult.push(item.item);
      });
      sdfg = finalResult;
    } else {
      sdfg = [];
    }
    setDatasci(true)
  };
  
  const handlesortsal=(e)=>{
    settiti(e.target.value)
    settitira("1")
    settitidu('1')

    if(e.target.value===2)
    sdfg.sort((a,b) => (a.Salary - b.Salary))
    if(e.target.value===3)
    sdfg.sort((a,b) => (b.Salary - a.Salary))
  }
  const handlesortra=(e)=>{
    settitira(e.target.value)
    settiti("1")
    settitidu('1')

    if(e.target.value===2)
    sdfg.sort(function(a,b) {
      let g=a.Rating
      let h=b.Rating
      if(a.Rating==="NaN")g=6
      if(b.Rating==="NaN")h=6
      return g - h
    })
    if(e.target.value===3)
    sdfg.sort(function(a,b) {
      let g=a.Rating
      let h=b.Rating
      if(a.Rating==="NaN")g=-1
      if(b.Rating==="NaN")h=-1
      return h-g
    })
  }
   const handlesortdu=(e)=>{
    settitidu(e.target.value)
    settiti("1")
    settitira("1")

    if(e.target.value===2)
    sdfg.sort(function(a,b) {
      let g=a.Duration
      let h=b.Duration
      if(g==="Indefinite")g=7
      if(h==="Indefinite")h=7
      return g - h
    })
    if(e.target.value===3)
    sdfg.sort(function(a,b) {
      let g=a.Duration
      let h=b.Duration
      if(g==="Indefinite")g=7
      if(h==="Indefinite")h=7
      return  h-g
    })
  }

  const handlefilty=(e)=>{
    settitity(e.target.value)
    settitidura('8')

    console.log(e.target.value)
    if(e.target.value==="Full Time")
    {
      const aaa = props.data
      sdfg = aaa.filter(function(a){ return a.Type === "Full Time" })
    }
    else if(e.target.value == "Part Time")
    {
      const aaa = props.data
      sdfg = aaa.filter(function(a){return a.Type === "Part Time"})
    }
    else if(e.target.value == "Work From Home")
    {
      const aaa = props.data
      sdfg = aaa.filter(function(a){return a.Type === "Work From Home"})
    }
    else
    sdfg = props.data
  }

  const handlefildura=(e)=>{
    settitidura(e.target.value)
    settitity('All')

    if(e.target.value === '1')
    {
      const aaa = props.data
      sdfg = aaa.filter(function(a){ return a.Duration < 1 })
    }
    else if(e.target.value === '2' )
    {
      const aaa = props.data
      sdfg = aaa.filter(function(a){return a.Duration < 2})
    }
    else if(e.target.value === '3')
    {
      const aaa = props.data
      sdfg = aaa.filter(function(a){return a.Duration < 3})
    }
    else if(e.target.value === '4')
    {
      const aaa = props.data
      sdfg = aaa.filter(function(a){return a.Duration < 4})
    }
    else if(e.target.value === '5')
    {
      const aaa = props.data
      sdfg = aaa.filter(function(a){return a.Duration < 5})
    }
    else if(e.target.value === '6')
    {
      const aaa = props.data
      sdfg = aaa.filter(function(a){return a.Duration < 6})
    }
    else if(e.target.value === '7')
    {
      const aaa = props.data
      sdfg = aaa.filter(function(a){return a.Duration < 7})
    }
    else
    sdfg = props.data
  }

  return (
    <div>
       <InputLabel id="demo-simple-select-label">Filter by Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={titity}
          onChange={handlefilty}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Full Time">Full Time</MenuItem>
          <MenuItem value="Part Time">Part Time</MenuItem>
          <MenuItem value="Work From Home">Work From Home</MenuItem>
        </Select>
      <br/>
      <br/>
       <InputLabel id="demo-simple-select-label">Filter by Duration</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={titidura}
          onChange={handlefildura}
        >
          <MenuItem value="8">All</MenuItem>
          <MenuItem value="1">less than 1 month</MenuItem>
          <MenuItem value="2">less than 2 months</MenuItem>
          <MenuItem value="3">less than 3 months</MenuItem>
          <MenuItem value="4">less than 4 months</MenuItem>
          <MenuItem value="5">less than 5 months</MenuItem>
          <MenuItem value="6">less than 6 months</MenuItem>
          <MenuItem value="7">less than 7 months</MenuItem>
          
        </Select>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Typography variant="h6"><b> Fuzzy Search</b></Typography>
      <div className="search-container">
        <input
          type="search"
          onChange={(e) => searchItem(e.target.value)}
          placeholder="Search by Title"
        />
      </div>
      <br/>
      <br/>
            <Typography variant="h6"><b> Sorting</b></Typography>
       <br/>
       <br/>
       <InputLabel id="demo-simple-select-label">Sorting by Rating</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={titira}
          onChange={handlesortra}
        >
          <MenuItem value={1}>None</MenuItem>
          <MenuItem value={2}>Asc</MenuItem>
          <MenuItem value={3}>Des</MenuItem>
        </Select>
      <br/>
      <br/>
       <InputLabel id="demo-simple-select-label">Sorting by Salary</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={titi}
          onChange={handlesortsal}
        >
          <MenuItem value={1}>None</MenuItem>
          <MenuItem value={2}>Asc</MenuItem>
          <MenuItem value={3}>Des</MenuItem>
        </Select>
      <br/>
      <br/>
       <InputLabel id="demo-simple-select-label">Sorting by Duration</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={titidu}
          onChange={handlesortdu}
        >
          <MenuItem value={1}>None</MenuItem>
          <MenuItem value={2}>Asc</MenuItem>
          <MenuItem value={3}>Des</MenuItem>
        </Select>
      <br/>
       <br/>
      
      <br/>
      <br/>

    <div style={{ height: 650, width: '100%' }}> 
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customize table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Recruiter</StyledTableCell>
            <StyledTableCell>Rating</StyledTableCell>
            <StyledTableCell>Salary</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Duration</StyledTableCell>
            <StyledTableCell align="right">Deadline</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {sdfg.map((row) => (
              <StyledTableRow>
                  <StyledTableCell >{row.Title}</StyledTableCell>
                  <StyledTableCell align="right">{row.RecName}</StyledTableCell>
                  <StyledTableCell align="right">{row.Rating}</StyledTableCell>
                  <StyledTableCell align="right">{row.Salary}</StyledTableCell>
                  <StyledTableCell align="right">{row.Type}</StyledTableCell>
                  <StyledTableCell align="right">{row.Duration}</StyledTableCell>
                  <StyledTableCell align="right">{row.Deadline}</StyledTableCell>
                  <StyledTableCell align="right"><Button>staa</Button></StyledTableCell>
              </StyledTableRow>
            ))}
            {
              !sdfg.length &&
              <StyledTableRow>
                  <StyledTableCell ><Chip variant="outlined" color="secondary" size="small" label="None" /></StyledTableCell>
                  <StyledTableCell align="right"><Chip variant="outlined" color="secondary" size="small" label="None" /></StyledTableCell>
                  <StyledTableCell align="right"><Chip variant="outlined" color="secondary" size="small" label="None" /></StyledTableCell>
                  <StyledTableCell align="right"><Chip variant="outlined" color="secondary" size="small" label="None" /></StyledTableCell>
                  <StyledTableCell align="right"><Chip variant="outlined" color="secondary" size="small" label="None" /></StyledTableCell>
                  <StyledTableCell align="right"><Chip variant="outlined" color="secondary" size="small" label="None" /></StyledTableCell>
                  <StyledTableCell align="right"><Chip variant="outlined" color="secondary" size="small" label="None" /></StyledTableCell>
                  <StyledTableCell align="right"><Button>staa</Button></StyledTableCell>
                  <StyledTableCell ></StyledTableCell>
              </StyledTableRow>
              
            }
        </TableBody>
      </Table>
    </TableContainer>
      {/* <DataGrid rows={datasci?searchData:props.data}  columns={columns} showToolbar autoPageSize onCellClick /> */}
      </div>
    </div>
  );
};
