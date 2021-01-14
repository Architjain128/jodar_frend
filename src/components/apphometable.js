import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'
import  {DataGrid}  from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SettingsPage from "./fuzzyse";
import Slider from '@material-ui/core/Slider';

export default function DataTableh(props) {
  const [value, setValue] = React.useState([0, 200000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const columns = [
    { field: 'Title', headerName: 'Title', description: 'Title of job',width: 140,headerAlign: 'center' },
    { field: 'RecName', headerName: 'Recruiter', description: 'Name of company who posted job',width: 140,headerAlign: 'center' },
    { field: 'Rating', headerName: 'Rating',headerAlign: 'center',description: 'Rating of company', type : 'number', width: 100},
    { field: 'Salary', headerName: 'Salary',headerAlign: 'center',description: 'Salary of job', type : 'number', width: 120 },
    { field: 'Type', headerName: 'Type',description: 'Job Type',headerAlign: 'center', width: 120 },
    { field: 'Duration', headerName: 'Duration',headerAlign: 'center', type :'number',description: 'In months and 7 means indefinite duration', width: 100 },
    { field: 'Deadline', headerName: 'Deadline',headerAlign: 'center',description: 'Deadline to apply', width: 160 },
    {
      field: "none",
      headerName: "Status",
      headerAlign: 'center',
      width: 100,
      description: 'Click corresponding button to update,delete or view this in detail',
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => {
        const onClick = () => {
          const api: GridApi = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          const thisRow = {};
  
          fields.forEach((f) => {
            thisRow[f] = params.getValue(f);
          });
          // localStorage.setItem('Jodar_joblist',thisRow.id)
          return alert(thisRow.id);
        };
  
        return <Button onClick={onClick} width='140' color="primary" variant="contained">Apply</Button>;
      }
    },
  ];
const anty = [];
  // for(let i=0;i<props.datagetjob.length;i++)
  // {
  //     const p = props.datagetjob[i]
  //     console.log(p)
  //     const pa = {id:p["_id"],Title:p["Title"],Maxappli:p["Maxappli"],Maxposi:p["Maxposi"],Ondate:p["Ondate"]}
  //     console.log(pa)
  //     anty.push(pa)
  // }
  const rows = [
    { id: '1', Title: 'Snow', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
    { id: '2', Title: 'now', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
    { id: '3', Title: 'ow', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
    { id: '4', Title: 'w', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
    { id: '5', Title: 'aSnow', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
    { id: '6', Title: 'bSnow', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
    { id: '7', Title: 'cSnow', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
    { id: '8', Title: 'cSnow', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
    { id: '9', Title: 'cSnow', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
    { id: '10', Title: 'cSnow', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
    { id: '11', Title: 'cSnow', RecName:'rejng', Rating: 1,Salary:200,Duration:1,Deadline : "12/1/2010"},
    ];

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
        step={100}
        max={200000}
        // scale={(x) => (x//200000)}
        onChange={handleChange}
        valueLabelDisplay="off"
        aria-labelledby="range-slider"
      />
      <SettingsPage data={rows} columns={columns}></SettingsPage>
    </div>
  );
}
