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
      pa.Duration = "Indefinte"
      if(pa.Rating==0)
      pa.Rating = "NaN"
      if(pa.Rating!=0)
      pa.Rating = pa.sumRating/pa.Rating
      if(pa.Salary>=value[0] && pa.Salary<=value[1])
      antyj.push(pa)
  }
  // const rows = [
  //   { id: '1', Title: 'Snow', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
  //   { id: '2', Title: 'now', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
  //   { id: '3', Title: 'ow', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
  //   { id: '4', Title: 'w', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
  //   { id: '5', Title: 'aSnow', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
  //   { id: '6', Title: 'bSnow', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
  //   { id: '7', Title: 'cSnow', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
  //   { id: '8', Title: 'cSnow', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
  //   { id: '9', Title: 'cSnow', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
  //   { id: '10', Title: 'cSnow', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
  //   { id: '11', Title: 'cSnow', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
  //   ];

  return (
    <div style={{ height: 400, width: '100%' }}>
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
      <SettingsPage data={antyj}></SettingsPage>
    </div>
  );
}
