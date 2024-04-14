import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PostCard from "../Posts/PostCard";
import UserVideosCard from "../Vids/UserVideosCard";

const tabs=[
  {value:"post",name:"post"},
  {value:"videos",name:"videos"},
  {value:"saved",name:"saved"},
  {value:"repost",name:"repost"}
]

const posts=[1,1,1,1];
const videos=[1,1,1,1];
const savedPost=[1,1,1,1]

const Profile = () => {
    const {id}=useParams();
    
  const [value, setValue] = React.useState('post');
const handleChange=(event,newValue)=>{
setValue(newValue);
}

  return (
  <Card className="my-10 w-[70%]">

<div className="rounded-md">
  <div className="h-[15rem]">
    <img className="w-full h-full rounded-t-md "  src="https://th.bing.com/th?id=OIP.77NPig8j3TSuroTxFoJhiAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />

  </div>

</div>

<div className=" px-5 flex justify-between items-start mt-5 has-[5rem]:" >

  <Avatar className="transform -translate-y-24" sx={{width:"10rem",height:'10rem'}}
    src="https://th.bing.com/th/id/OIP.bFo-l8DCl6wJfbu8NDP2rwHaH8?w=185&h=198&c=7&r=0&o=5&pid=1.7"/>

    {true?<Button sx={{borderRadius:"20px"}} variant="outlined">Edit Profile</Button>:
    <Button sx={{borderRadius:"20px"}} variant="outlined">Follow</Button>}
</div>
<div className=" transform -translate-y-20 p-5">
  <div >
     <h1 className="py-1 font-bold  text-xl">Enjoy the Nature</h1>
     <p>@traveller</p>
  </div>
  <div className="flex gap-5  font-bold items-center py-3">
      <span>50 posts</span>
      <span>450 followers</span>
      <span>5 following</span>
</div>
<div>
  <p>Remember that happiness is a way of travel – not a destination</p>
</div>
<section>
<Box sx={{ width: '100%', borderBottom:1, borderColor:"divider" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        
        {tabs.map((item)=><Tab value={item.value} label={item.name} />)}
        
      </Tabs>
    </Box>
    <div className="flux justify-center"> 
    {value==="post"? (
    <div className="flex justify-center flex-wrap gap-2 my-10">
                              
{posts.map((item)=>(<div className="border border-slate-100 rounded-md">
  <PostCard />
  </div>))} 

    </div>
    ):value==="videos"?<div className="flex justify-center flex-wrap gap-2 my-10">
      {videos.map((item)=><UserVideosCard/>)}
        
    </div>:value==="saved"? (<div className="space-y-5 w-[-70%] my-10">
                              
      {savedPost.map((item)=>(<div className="border border-slate-100 rounded-md">
         <PostCard />
        </div>))}
                              
     </div>)
        
    :(
      <div>Repost</div>
    )}

    </div>
</section>
  </div>
  </Card>
)};

export default Profile;
