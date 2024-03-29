import { Avatar, Button, Card, IconButton } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import PostCard from "../Posts/PostCard";
const Feeds = () => {
  const handelOpenCreatePostModel = () => {
    alert("Open Post Model");
  };
  return (
    <div className="px-20">
      <section className="py-5 flex item-center p-5 rounded-b-md">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar sx={{ width: "5rem", height: "5rem" }}>
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>New</p>
        </div>
        {/* Stories  */}
        {[1, 1, 1, 1].map((item) => (
          <StoryCircle />
        ))}
      </section>

      <section className="w-[full] flex flex-col  justify-center pt-5 space-y-5">
        {[1, 2, 3, 4, 5].map((post) => (
          <PostCard key={post} />
        ))}
      </section>
    </div>
  );
};

export default Feeds;
