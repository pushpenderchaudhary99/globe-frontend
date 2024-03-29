import React from "react";
import navigationMenu from "./navigationData";
import { Avatar, Button, Divider, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";
import GLOBE_LOGO from "../../assets/globe_logo.png";
const Sidebar = () => {
  const navigation = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="card h-screen flex flex-col justify-between py-5 ">
      <div className="space-y-8 pl-5">
        <div className="">
          <img
            src={GLOBE_LOGO}
            alt="Globe - Connecting Generations"
            className="h-[6rem] w-[16rem] items-center object-cover mx-[-2rem]"
          />
          {/* <span className="logo font-bold text-5xl font-serif">Globe</span> */}
        </div>
        <div className="space-y-8">
          {navigationMenu.map((item) => (
            <div
              key={item.title}
              className="flex space-x-3 items-center cursor-pointer "
              onClick={() => navigation(`${item.path}`)}
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Divider />
        <div className="pl-5 flex items-center justify-between pt-5">
          <div className="flex items-center space-x-3">
            <Avatar
              sx={{ width: "3.5rem", height: "3.5rem", objectFit: "cover" }}
              src="https://images.pexels.com/photos/247297/pexels-photo-247297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ></Avatar>
            <div>
              <p className="font-bold">Kavaya Sharma</p>
              <p className="opacity-70">@theladylove</p>
            </div>
          </div>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreHorizIcon sx={{ fontSize: "2rem", color: "black" }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Account Settings</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
