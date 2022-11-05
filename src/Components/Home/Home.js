import React from "react";
// import Header from "../Header/Header";
import Feeds from "../Feeds/feeds";
import SideBar from "../SideBar/SideBar";
import RightBar from "../RightBar/rightBar";
import NavBar from "../navBar/navBar";
import { Box, Stack } from "@mui/material";
import Add from "../Add/Add";
import { Route, Routes, Outlet } from "react-router-dom";
function Home() {
  return (
    <div>
      <Box>
        <NavBar></NavBar>
        <Stack
          direction="row"
          spacing={{ md: 3 }}
          justifyContent="space-between"
        >
          <Box  sx={{display:{xs:"none",md:"block"}}} width="30%">

          <SideBar></SideBar>
          </Box>
          <Box >
            <Outlet></Outlet>
          </Box>
        </Stack>
        <Add></Add>
      </Box>
    </div>
  );
}

export default Home;
