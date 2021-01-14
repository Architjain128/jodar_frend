// import data from "./data.json";
import React, { useState } from "react";
import Fuse from "fuse.js";
import  {DataGrid}  from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';





export default function SettingsPage(props) {

  const [searchData, setSearchData] = useState(props.data);
  const [datasci, setDatasci] = useState(false);
  const columns = [
    { field: 'Title', headerName: 'Title', description: 'Title of job',width: 140,headerAlign: 'center' },
    { field: 'RecName', headerName: 'Recruiter', description: 'Name of company who posted job',width: 140,headerAlign: 'center' },
    { field: 'Rating', headerName: 'Rating',headerAlign: 'center',description: 'Rating of company', type : 'number', width: 100},
    { field: 'Salary', headerName: 'Salary',headerAlign: 'center',description: 'Salary of job', type : 'number', width: 120 },
    { field: 'Type', headerName: 'Type',description: 'Job Type',headerAlign: 'center', width: 120 },
    { field: 'Duration', headerName: 'Duration',headerAlign: 'center', type :'number',description: 'In months', width: 120 },
    { field: 'Deadline', headerName: 'Deadline',headerAlign: 'center',description: 'Deadline to apply', width: 160 },
    { field: 'id', headerName: 'Id',headerAlign: 'center',hide: true },
    {
      field: "none",
      headerName: "Status",
      headerAlign: 'center',
      width: 100,
      description: 'Click to apply',
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
          // console.log(thisRow)
          // alert(thisRow.id);
          localStorage.setItem('Jodar_jobapp',thisRow.id)
          window.location.href="/applyjob"
        };
        return  <Button onClick={onClick} width='140' color="primary" variant="contained">Apply</Button>
      }
    },
  ];
  const searchItem = (query) => {
    if (!query) {
      setSearchData(props.data);
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
      setSearchData(finalResult);
    } else {
      setSearchData([]);
    }
    setDatasci(true)
  };
  
 

  return (
    <div>
      <p className="title"> Fuzzy Search</p>
      <div className="search-container">
        <input
          type="search"
          onChange={(e) => searchItem(e.target.value)}
          placeholder="Search by Title"
        />
      </div>
      <br/>
      <br/>
    <div style={{ height: 650, width: '100%' }}>
      <DataGrid rows={datasci?searchData:props.data} columns={columns} showToolbar autoPageSize onCellClick />
      </div>
    </div>
  );
};
