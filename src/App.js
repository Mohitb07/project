import { useState } from "react";

import { Box, Typography } from "@mui/material";
import axios from "axios";

import Card from "../src/components/card";
import Board from "./components/board";
import { MASTER_API_URL } from "./api";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  const handleUserProjectMap = async () => {
    let empId = sessionStorage.getItem("empId");
    let groupCode = sessionStorage.getItem("groupCode");
    const userprojectmap = {
      empId,
      groupCode,
    };
    const response = await axios.post(
      `${MASTER_API_URL}/upm/save`,
      userprojectmap
    );
    console.log("do something with response", response.data);
    setData(response.data);
  };

  console.log("data", data);

  return (
    <div className="App">
      <h1>Timesheet</h1>

      <main className="flexbox">
        <Box>
          <Typography className="name">
            <p>Employee Id : </p>
          </Typography>
          <Typography className="name1">
            <p>Group Code: </p>
          </Typography>
        </Box>

        <Board id="form-1" className="form">
          {/* this coming from backend */}
          <h2>Available Projects</h2>
          <Card id="card-1" className="card" draggable="true">
            <p>Project 1</p>
          </Card>
          <Card id="card-2" className="card" draggable="true">
            <p>Project 2</p>
          </Card>
          <Card id="card-3" className="card" draggable="true">
            <p>Project 3</p>
          </Card>
          <Card id="card-3" className="card" draggable="true">
            <p>Project 4</p>
          </Card>
          <Card id="card-4" className="card" draggable="true">
            <p>Demo</p>
          </Card>
          <Card id="card-5" className="card" draggable="true">
            <p>Demo</p>
          </Card>
        </Board>
        <Board id="form-2" className="form">
          <h2>Selected Projects</h2>
          {/* <Card id="card-2" className="card" draggable="true">
    <p>CAFCS</p>
  </Card> */}
        </Board>
      </main>
      <div className="button">
        <button onClick={handleUserProjectMap}>Save</button>
      </div>
    </div>
  );
}

export default App;
