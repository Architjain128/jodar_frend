import * as React from 'react';
import {Redirect} from 'react-router-dom'
import  {DataGrid}  from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import Dashyy from './recappdash';

export default function DataTable(props) {
  const columns = [
    { field: 'Title', headerName: 'Title', description: 'Title of job posted',width: 150,headerAlign: 'center' },
    { field: 'Maxappli', headerName: 'Max Applicants',headerAlign: 'center',description: 'Maximunm application that can be applied', type : 'number', width: 150  },
    { field: 'Maxposi', headerName: 'Max Positions',headerAlign: 'center', type :'number',description: 'Maximun accepted application', width: 150 },
    { field: 'Ondate', headerName: 'Posted On',headerAlign: 'center',description: 'Date of creating listing', width: 150 },
    { field: 'id', headerName: 'Options', hide: true ,headerAlign: 'center'},
    {
      field: "none",
      headerName: "Options",
      headerAlign: 'center',
      width: 150,
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
          localStorage.setItem('Jodar_joblist',thisRow.id)
          // return alert(thisRow.id);
          window.location.href='/joblist'
        };
  
        return <Button onClick={onClick} width='140' color="primary" variant="contained">View</Button>;
      }
    },
  ];
const anty = [];
  for(let i=0;i<props.dataalljob.length;i++)
  {
      const p = props.dataalljob[i]
      console.log(p)
      const pa = {id:p["_id"],Title:p["Title"],Maxappli:p["Maxappli"],Maxposi:p["Maxposi"],Ondate:p["Ondate"]}
      console.log(pa)
      anty.push(pa)
  }
  // const rows = [
  //     { id: 'a', Title: 'Snow', Maxappli: 1, Maxposi: 1,Ondate : "12/1/2010"},
  //     { id: 'b', Title: 'anow', Maxappli: 10, Maxposi: 10,Ondate : "12/1/2010" },
  //     { id: 3, Title: 'Anow', Maxappli: 2, Maxposi: 2 ,Ondate : "12/1/2010"},
  //     { id: 4, Title: '1now', Maxappli: 22, Maxposi: 22,Ondate : "12/1/2010" },
  //     { id: 5, Title: 'bnow', Maxappli: 1002, Maxposi: 1002,Ondate : "12/1/2010"},
  //     { id: 6, Title: '10now', Maxappli: 10, Maxposi: 10 ,Ondate : "12/1/2010"},
  //   ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={anty} columns={columns}  autoPageSize onCellClick />
    </div>
  );
}
