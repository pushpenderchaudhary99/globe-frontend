import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const NavigationMenu = [
  { title: "Home", icon: <HomeIcon />, path: "/" },
  { title: "Chats", icon: <ChatIcon />, path: "/chats" },
  { title: "Vids", icon: <VideoLibraryIcon />, path: "/vids" },

  {
    title: "Notifications",
    icon: <NotificationsIcon />,
    path: "/notifications",
  },

  { title: "Profile", icon: <AccountCircleIcon />, path: "/profile" },
  { title: "Create", icon: <ControlPointIcon />, path: "/create" },
];

export default NavigationMenu;
