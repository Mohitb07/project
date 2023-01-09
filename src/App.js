
import './App.css';
import Card from '../src/components/card';
import Board from "./components/board";
import { Grid, Box, Typography } from '@mui/material';
import UserprojectmapService from './Services/UserprojectmapService';
import { useState } from 'react';


const userprojectmap =(e) => {
  e.preventDefault();
  let empId = sessionStorage.getItem("empId");
  let groupCode = sessionStorage.getItem("groupCode");
  const userprojectmap={
    empId,groupCode, 
  };
  UserprojectmapService.adduser(userprojectmap);

}


function App() {
  return (
    <div className="App">
      <h1>Timesheet</h1>
           
      <main className='flexbox'>
        <Box>
          <Typography className="name" >
            <p>Employee Id : </p>
          </Typography>
          <Typography className="name1" >
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
      <div className='button'>
        <button onClick={userprojectmap}>Save</button>
      </div>
    </div>
  );
}

export default App;
