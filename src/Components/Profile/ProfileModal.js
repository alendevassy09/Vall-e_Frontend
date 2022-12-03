import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Fab,
  IconButton,
  Modal,
  styled,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { openUpdate } from "../../Redux/profileModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { Close, Home, School, Work } from "@mui/icons-material";
import PropTypes from "prop-types";
import Posts from "../Posts/Post";
import axios from "../../Axios/axios";
import { useState } from "react";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

function ProfileModal() {
  const token = localStorage.getItem("userToken");
  const posts = useSelector((state) => state.post.post);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.singleProfile.singleProfile);

  const open = useSelector((state) => state.profileModal.open);
  const setOpen = (openModal) => {
    dispatch(
      openUpdate({
        open: openModal,
      })
    );
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    console.log("hererererer", user.user);
    if (user.user !== undefined) {
      axios
        .get("/modalProfile", { headers: { token, id: user.user._id } })
        .then((response) => {
          console.log("this is the details", response);
          setFollowers(response.data.followers);
          setFollowing(response.data.following);
        });
    }
  }, [user]);
  return (
    <>
      <Tooltip
        onClick={(e) => {
          setOpen(true);
        }}
        title="New Post"
        sx={{
          display: "none",
          backgroundColor: "#1F3541",
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        sx={{ outline: "none" }}
        onClose={(e) => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          height={"auto"}
          bgcolor="white"
          borderRadius={1}
          p={3}
          sx={{
            outline: "none",
            padding: 3,
            width: { xs: "100%", md: "70%" },
            height: { md: "88vh", xs: "100%" },
            overflowY: { xs: "scroll", md: "hidden" },
            "&::-webkit-scrollbar": {
              width: "5px",
            },

            "&::-webkit-scrollbar-track": {
              boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
              webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(0,0,0,.1)",
            },
          }}
        >
          <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
            <IconButton
              onClick={(e) => {
                setOpen(false);
              }}
              size="large"
            >
              <Close sx={{ marginLeft: "auto" }} />
            </IconButton>
          </Box>
          <Box
            width={"100%"}
            display={"flex"}
            sx={{
              flexDirection: { md: "row", xs: "column" },
              height: { md: "100%" },
            }}
            justifyContent={"space-between"}
          >
            <Box sx={{ width: { md: "50%", xs: "100%" } }}>
              <Card
                sx={{
                  width: "100%",
                  maxHeight: 370,
                  borderRadius: 2,
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="auto"
                  sx={{ maxHeight: 250 }}
                  image={
                    Object.keys(user).length !== 0
                      ? user.user.cover
                        ? `https://res.cloudinary.com/dcytixl43/image/upload/v1667718830/${user.user.cover}.png`
                        : `https://res.cloudinary.com/dcytixl43/image/upload/v1667718830/profile_pic/tyye6ctzdt8c9qqhegdj.png`
                      : `https://res.cloudinary.com/dcytixl43/image/upload/v1667718830/profile_pic/tyye6ctzdt8c9qqhegdj.png`
                  }
                />

                <Box sx={{ display: "flex" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={
                      Object.keys(user).length !== 0
                        ? user.user.profile
                          ? `https://res.cloudinary.com/dcytixl43/image/upload/v1667718830/${user.user.profile}.png`
                          : `https://res.cloudinary.com/dcytixl43/image/upload/v1667718830/profile_pic/tyye6ctzdt8c9qqhegdj.png`
                        : `https://res.cloudinary.com/dcytixl43/image/upload/v1667718830/profile_pic/tyye6ctzdt8c9qqhegdj.png`
                    }
                    sx={{
                      width: 130,
                      height: 130,
                      position: "relative",
                      bottom: 50,
                      left: 6,
                      border: "solid",
                      borderWidth: "large",
                      borderColor: "white",
                    }}
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontSize: { md: "2rem", xs: "1.5rem" } }}
                      component="div"
                    >
                      {Object.keys(user).length !== 0
                        ? user.user.firstName + " " + user.user.LastName
                        : ""}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        {followers} Followers
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {following} Following
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Bio" {...a11yProps(0)} />
                  <Tab label="Location" {...a11yProps(1)} />
                  <Tab label="Webpage" {...a11yProps(2)} />
                </Tabs>
              </Box>

              <TabPanel value={value} index={0}>
                {Object.keys(user).length !== 0 ? (
                  <Box>
                    {user.user.worksAt ? (
                      <Box display={"flex"}>
                        <Work
                          fontSize="small"
                          sx={{ color: "grey", marginRight: 1 }}
                        ></Work>
                        <Typography>Works at:{user.user.worksAt}</Typography>
                      </Box>
                    ) : (
                      <Box display={"flex"}>
                        <Work
                          fontSize="small"
                          sx={{ color: "grey", marginRight: 1 }}
                        ></Work>
                        <Typography>Works at: Not Available </Typography>
                      </Box>
                    )}

                    {user.user.studiedAt ? (
                      <Box display={"flex"}>
                        <School
                          fontSize="small"
                          sx={{ color: "grey", marginRight: 1 }}
                        ></School>
                        <Typography>
                          Studied at:{user.user.studiedAt}
                        </Typography>
                      </Box>
                    ) : (
                      <Box display={"flex"}>
                        <School
                          fontSize="small"
                          sx={{ color: "grey", marginRight: 1 }}
                        ></School>
                        
                        <Typography>Studied at: Not Available </Typography>
                       
                      </Box>
                    )}
                    {user.user.liveAt ? (
                      <Box display={"flex"}>
                        <Home
                          fontSize="small"
                          sx={{ color: "grey", marginRight: 1 }}
                        ></Home>
                        <Typography>Lives at:{user.user.liveAt}</Typography>
                      </Box>
                    ) : (
                      <Box display={"flex"}>
                        <Home
                          fontSize="small"
                          sx={{ color: "grey", marginRight: 1 }}
                        ></Home>
                        <Typography>Lives at: Not Available </Typography>
                      </Box>
                    )}
                  </Box>
                ) : (
                  <Typography>Not Available</Typography>
                )}
              </TabPanel>
              <TabPanel value={value} index={1}>
                Location
              </TabPanel>
              <TabPanel value={value} index={2}>
                WebPage
              </TabPanel>
            </Box>
            <Box
              sx={{
                width: { md: "49%", xs: "100%" },

                height: "85%",
                overflowY: "scroll",
                overflowX: "hidden",
                "&::-webkit-scrollbar": {
                  width: "5px",
                },

                "&::-webkit-scrollbar-track": {
                  boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                  webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "rgba(0,0,0,.1)",
                },
                gap: 1,
              }}
            >
              {posts.map((obj) => {
                return (
                  <Box sx={{ width: "100%", marginBottom: { xs: 1, md: 0 } }}>
                    <Posts key={obj._id} id={obj._id} data={obj}></Posts>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </StyledModal>
    </>
  );
}

export default ProfileModal;
