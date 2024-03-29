import { Avatar, Button, Card, CardHeader, IconButton } from "@mui/material";
import React from "react";

const SuggestedUserCard = () => {
  return (
    <CardHeader
      avatar={
        <Avatar src="https://1.bp.blogspot.com/-3Ggysu81LSk/XFHOh3yROPI/AAAAAAADdqQ/A_XWLF_Rus8QQeS-N0WgdgL_3i08bLCNQCLcBGAs/s640/1AU4Y3T.jpg" />
      }
      action={<Button size="small">Follow</Button>}
      title="Komal Negi"
      subheader="@beatch_bitch"
    />
  );
};

export default SuggestedUserCard;
