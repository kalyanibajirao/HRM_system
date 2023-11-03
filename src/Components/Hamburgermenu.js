import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../Components/logo.png";
import Groups3OutlinedIcon from "@mui/icons-material/Groups3Outlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import WorkOffOutlinedIcon from "@mui/icons-material/WorkOffOutlined";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import PersonIcon from "@mui/icons-material/Person";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TollOutlinedIcon from "@mui/icons-material/TollOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function HamburgerMenu() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Navigation Function
  let navigate = useNavigate();

  //   Handling Events on Clicking of Icon
  const handleClick = async (item) => {
    navigate(item.link);
  };
  const listItemData = [
    {
      text: "Admin",
      icon: <SupervisorAccountOutlinedIcon />,
      link: "/",
    },
    {
      text: "PIM",
      icon: <Groups3OutlinedIcon />,
      link: "/pim",
    },
    {
      text: "Leave",
      icon: <WorkOffOutlinedIcon />,
      link: "/leave",
    },
    {
      text: "Time",
      icon: <AvTimerOutlinedIcon />,
      link: "/time",
    },
    {
      text: "My Info",
      icon: <PersonIcon />,
      link: "/myinfo",
    },
    {
      text: "DashBoard",
      icon: <HomeOutlinedIcon />,
      link: "/dashboard",
    },
    {
      text: "Directory",
      icon: <PortraitOutlinedIcon />,
      link: "/directory",
    },
    {
      text: "Maintenance",
      icon: <SettingsOutlinedIcon />,
      link: "/maintenance",
    },
    {
      text: "Buzz",
      icon: <TollOutlinedIcon />,
      link: "/buzz",
    },
  ];

  return (
    <Box>
      <AppBar position="fixed" open={open}>
        <Toolbar style={{ background: "#ED7014" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" noWrap component="div">
              PIM
            </Typography>
            <Button
              variant="filled"
              sx={{
                ml: "1250px",
                borderRadius: "50px",
                color: "#ffffff",
                textTransform: "none",
                background: "inherit",
              }}
            >
              <AccountCircleIcon sx={{ mr: "10px" }} />
              user
              <ArrowDropDownIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ display: "inline", borderRadius: "50px" }}>
          <img
            src={Logo}
            alt="logo"
            height="60px"
            style={{ margin: "auto" }}
          ></img>{" "}
          {/*Top logo*/}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search" />
              </ListItem>
            </List>
            <IconButton
              onClick={handleDrawerClose}
              sx={{
                ml: "60px",
                background: "#ED7014",
                color: "white",
                height: "40px",
                mt: "10px",
              }}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </Box>
        </DrawerHeader>
        <Divider />
        <List>
          {listItemData.map((item, text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{ display: "block", justifyContent: "space-between" }}
            >
              <ListItemButton
                onClick={() => handleClick(item)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "5px",

                  backgroundColor: `${item.link ? "inherit" : "#ED7014"}`,
                  transition: "background-color 0.3s ease-out 100ms",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#ED7014",
                    borderRadius: "50px",
                  },
                  "&:active": {
                    backgroundColor: "white",
                    borderRadius: "50px",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
