import {
  BookmarkBorderOutlined,
  ExploreOutlined,
  HomeOutlined,
  MessageOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();
  let [hover, setHover] = useState(1);
  return (
    <Box
      sx={{
        width: "65%",
        display: "flex",
        justifyContent: "space-evenly",
        padding: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

        backgroundColor: "#e9e9e9",
      }}
    >
      <Box>
        <IconButton
          sx={{
            "&:hover": {
              boxShadow: 2,
              color:"#1F3541"
            },
            backgroundColor: hover === 1 ? "#1F3541" : "",
            
          }}
          onClick={() => {
            navigate("/home/dash");
            setHover(1);
          }}
        >
          <HomeOutlined
            sx={{ color:hover === 1 ? "white" : "#1F3541","&:hover":{color:"#1F3541"} }}
            fontSize="medium"
          ></HomeOutlined>
        </IconButton>
      </Box>
      <Box>
        <IconButton
          sx={{
            "&:hover": {
              boxShadow: 2,
              color:"#1F3541"
            },
            backgroundColor: hover === 2 ? "#1F3541" : "",
            
          }}
          onClick={() => {
            navigate("/home/trending");
            setHover(2);
          }}
        >
          <ExploreOutlined
            sx={{ color:hover === 2 ? "white" : "#1F3541","&:hover":{color:"#1F3541"} }}
            fontSize="medium"
          ></ExploreOutlined>
        </IconButton>
      </Box>

      <Box>
        <IconButton
          sx={{
            "&:hover": {
              boxShadow: 2,
              color:"#1F3541"
            },
            backgroundColor: hover === 3 ? "#1F3541" : "",
            
          }}
          onClick={() => {
            navigate("/home/messages");
            setHover(3);
          }}
        >
          <MessageOutlined
            sx={{ color:hover === 3 ? "white" : "#1F3541","&:hover":{color:"#1F3541"} }}
            fontSize="medium"
          ></MessageOutlined>
        </IconButton>
      </Box>
      <Box>
        <IconButton
          sx={{
            "&:hover": {
              boxShadow: 2,
              color:"#1F3541"
            },
            backgroundColor: hover === 4 ? "#1F3541" : "",
            
          }}
          onClick={() => {
            
            setHover(4);
          }}
        >
          <NotificationsNoneOutlined
            sx={{ color:hover === 4 ? "white" : "#1F3541","&:hover":{color:"#1F3541"} }}
            fontSize="medium"
          ></NotificationsNoneOutlined>
        </IconButton>
      </Box>
      <Box>
        <IconButton
          sx={{
            "&:hover": {
              boxShadow: 2,
              color:"#1F3541"
            },
            backgroundColor: hover === 5 ? "#1F3541" : "",
            
          }}
          onClick={() => {
            navigate("/home/saved");
            setHover(5);
          }}
        >
          <BookmarkBorderOutlined
            sx={{ color:hover === 5 ? "white" : "#1F3541","&:hover":{color:"#1F3541"} }}
            
          ></BookmarkBorderOutlined>
        </IconButton>
      </Box>
    </Box>
  );
}

export default TopBar;
