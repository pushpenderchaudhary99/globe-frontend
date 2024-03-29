import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Grid } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import Vids from "../../components/Vids/Vids";
import Chats from "../../components/Chats/Chats";
import Profile from "../../components/Profile/Profile";
import CreateVids from "../../components/Vids/CreateVids";
import CreatePost from "../../components/Posts/CreatePost";
import Feeds from "../../components/Feeds/Feeds";
import HomeRight from "../../components/HomeRight/HomeRight";

const Homepage = () => {
  const location = useLocation();
  return (
    <div className="px-20 w-full">
      <Grid container spacing={0}>
        <Grid item xs={0} lg={3}>
          <div className="sticky top-0">
            <Sidebar />
          </div>
        </Grid>
        <Grid
          lg={location.pathname === "/" ? 6 : 9}
          item
          className="px-5 flex justify-center"
          xs={12}
        >
          <Routes>
            <Route path="/" element={<Feeds />} />
            <Route path="/vids" element={<Vids />} />
            <Route path="/vids-new" element={<CreateVids />} />
            <Route path="/post-new" element={<CreatePost />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/chats" element={<Chats />} />
          </Routes>
        </Grid>
        <Grid item lg={3} className="relative">
          <div className=" top-0 w-full">
            <HomeRight />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
