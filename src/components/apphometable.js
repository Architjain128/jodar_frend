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
  const [sop, setsop] = React.useState(null);
 

  let allmyapp = new Map();
  for(let i=0;i<props.datajj.length;i++)
  {
    const p = props.datajj[i]
    allmyapp.set(p["JobId"], 1 );
  }
  let allapp = new Map();
  for(let i=0;i<props.dataall.length;i++)
  {
    const p = props.dataall[i]
    allapp.set(p["_id"], p["total"]);
  }
  let accapp = new Map();
  for(let i=0;i<props.dataacc.length;i++)
  {
    const p = props.dataacc[i]
    accapp.set(p["_id"], p["total"]);
  }
  const antyj = [];
  for(let i=0;i<props.datagetjob.length;i++)
  {
      const p = props.datagetjob[i]
      console.log(p)
      const pa = {id:p["_id"],Title:p["Title"],RecName:p["Company_name"],sumRating:p["sumRating"],Rating:p["Rating"],Salary:p["Job_Sal"],Duration:p["Job_Dura"],Type:p["Job_Type"],Deadline:p["Deadline"],Status:"Apply",Maxappli:p["Maxappli"],Maxposi:p["Maxposi"]}
      // console.log(pa)
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
      
      let temp = allapp.get(pa.id)
      if(!temp)temp = 0
      if(pa.Maxappli - temp <= 0 ) 
      pa.Status="Application Full"
      temp = accapp.get(pa.id)
      if(!temp)temp = 0
      if(pa.Maxposi - temp <= 0 ) 
      pa.Status="Position Full"
      temp = allmyapp.get(pa.id)
      if(!temp)temp = 0
      if(temp===1)
      pa.Status="Applied"

      console.log(pa)

      let newDate = new Date()
      let date = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();
      let hour = newDate.getHours();
      let minutes = newDate.getMinutes();

      let deadd=p.Deadline.split(" ");
      let datede = deadd[0].split("/");
      let timede = deadd[1].split(":");
      
      // if(pa.Salary>=value[0] && pa.Salary<=value[1]){
      if(datede[2]>=year)
      {
          if(datede[1]>=month)
          {
              if(datede[0]>=date)
              {
                  if(timede[0]>=hour)
                  {
                      if(timede[1]>=minutes)
                      {
                        antyj.push(pa)
                      }
                  }
              }
          }
      }
    // }
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
      <SettingsPage data={antyj} dataall={props.dataall} dataacc={props.dataacc} ></SettingsPage>
    </div>
  );
}
