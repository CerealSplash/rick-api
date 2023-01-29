import { Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { FetchingComponent } from "./FetchingComponent";
import axios from "axios";
import { context, Context } from "./Context";
import { Router } from "./Router";


function App() {
   
  console.log("CerealSplash");
  
  return (
    <Context>
      <Router />
    </Context>
  );
}

export default App;
