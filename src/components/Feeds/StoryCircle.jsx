import { Avatar } from "@mui/material";
import React from "react";

const StoryCircle = () => {
  return (
    <div className="flex flex-col items-center mr-4 cursor-pointer">
      <Avatar
        sx={{ width: "5rem", height: "5rem", objectFit: "contain" }}
        src="https://cdn.gulte.com/wp-content/uploads/2021/01/Neha-Malik-bikini-pics_13-819x1024.jpg"
      />

      <p>@beach_bitch</p>
    </div>
  );
};

export default StoryCircle;
