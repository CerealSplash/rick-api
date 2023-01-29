import { Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { FetchingComponent } from "./FetchingComponent";
import axios from "axios";
import { context, Context } from "./Context";
import { Router } from "./Router";


function App() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    const data = async () => {
      const res = await axios.get("");
    };
  }, []);

  return (
    <Context>
      <Router />
    </Context>
  );
}

export default App;
