// import data from "./data.json";
import React, { useState } from "react";
import Fuse from "fuse.js";
import  {DataGrid}  from '@material-ui/data-grid';

const SettingsPage = (props) => {

    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    // console.log(props.data)
  const [searchData, setSearchData] = useState(props.data);
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
      <DataGrid rows={searchData} columns={props.columns} showToolbar autoPageSize onCellClick />
      </div>
    </div>
  );
};

export default SettingsPage;