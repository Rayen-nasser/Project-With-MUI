import React, { useState } from "react";
import Sidebar from "./components/Sidebar"
import Freed from "./components/Feed"
import Navbar from "./components/Navbar"
import Rightbar from "./components/Rightbar"
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Add from "./components/Add";



function App() {
  const [mode, setMode] = useState("light")

  const darkTheme = createTheme ({
    palette:{
        mode:mode,
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
        <Stack direction="row" spacing={0} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
          <Freed/>
          <Rightbar/>
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
  );
}

export default  App
