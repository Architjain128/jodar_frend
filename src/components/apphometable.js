import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Redirect} from 'react-router-dom'
import  {DataGrid}  from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import SettingsPage from "./fuzzyse";
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';



export default function DataTableh(props) {
  const [value, setValue] = React.useState([0, 200000]);
  const [sop, setsop] = React.useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const antyj = [];
  for(let i=0;i<props.datagetjob.length;i++)
  {
      const p = props.datagetjob[i]
      console.log(p)
      const pa = {id:p["_id"],Title:p["Title"],RecName:p["Company_name"],sumRating:p["sumRating"],Rating:p["Rating"],Salary:p["Job_Sal"],Duration:p["Job_Dura"],Type:p["Job_Type"],Deadline:p["Deadline"]}
      console.log(pa)
      if(pa.Type==1)
      pa.Type = "Full Time"
      if(pa.Type==2)
      pa.Type = "Part Time"
      if(pa.Type==3)
      pa.Type = "Work From Home"
      if(pa.Duration==7)
      pa.Duration = "Indefinite"
      if(pa.Rating==0)
      pa.Rating = "NaN"
      if(pa.Rating!=0)
      pa.Rating = pa.sumRating/pa.Rating
      if(pa.Salary>=value[0] && pa.Salary<=value[1])
      antyj.push(pa)
  }
// console.log(1 + antyj)
  // const rows = [
  //   { id: '2', Title: 'now', RecName:'rejng', Rating: 0,Salary:201,Duration:1,Deadline : "12/1/2010",Type : "Full Time"},
  //   { id: '3', Title: 'ow', RecName:'rejng', Rating: 5,Salary:220,Duration:2,Deadline : "12/1/2010",Type : "Part Time"},
  //   { id: '4', Title: 'w', RecName:'rejng', Rating: 4.8,Salary:202,Duration:3,Deadline : "12/1/2010",Type : "Part Time"},
  //   { id: '1', Title: 'Snow', RecName:'rejng', Rating:3.2,Salary:210,Duration:5,Deadline : "12/1/2010",Type : "Full Time"},
  //   { id: '5', Title: 'aSnow', RecName:'rejng', Rating: 1,Salary:200,Duration:6,Deadline : "12/1/2010",Type : "Work From Home"},
  //   { id: '11', Title: 'cSnow', RecName:'rejng', Rating: "NaN",Salary:220,Duration:1,Deadline : "12/1/2010",Type : "Full Time"},
  //   { id: '6', Title: 'bSnow', RecName:'rejng', Rating:1.4,Salary:700,Duration:"Indefinite",Deadline : "12/1/2010",Type : "Part Time"},
  //   { id: '7', Title: 'cSnow', RecName:'rejng', Rating: 2,Salary:280,Duration:1,Deadline : "12/1/2010",Type : "Full Time"},
  //   { id: '8', Title: 'cSnow', RecName:'rejng', Rating: 3,Salary:200,Duration:1,Deadline : "12/1/2010",Type : "Work From Home"},
  //   { id: '9', Title: 'cSnow', RecName:'rejng', Rating: 0.9,Salary:200,Duration:1,Deadline : "12/1/2010",Type : "Part Time"},
  //   { id: '10', Title: 'cSnow', RecName:'rejng', Rating: 3.3,Salary:200,Duration:1,Deadline : "12/1/2010",Type : "Full Time"},
  // ];

  return (
    <div style={{ height: 400, width: '100%' }}>
    <br/>
      <Typography variant="h6"><b> Filtering</b></Typography>
    <br/>
      <Typography id="range-slider" gutterBottom>
        Salary Range
      </Typography>
      <Box><b>Lower limit</b> {value[0]}</Box>
      <Box><b>Upper limit</b> {value[1]}</Box>
      <Slider
        value={value}
        min={0}
        step={10}
        max={200000}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
      <br/>
      <br/>
      <SettingsPage data={antyj}></SettingsPage>
    </div>
  );
}
