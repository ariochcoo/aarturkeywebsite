import React, { useContext, useEffect } from "react";
import { Tab, Nav } from "react-bootstrap";

//Material Uı element
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
//import { useNavigate } from "react-router-dom";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import LoginIcon from "@mui/icons-material/Login";

//Components
import PostForm from "../forms/PostForm";
import PostTable from "../tables/PostTable";
import PostPage from "../pages/PostPage";

//Context
import { LanguageContext } from "../../context/LanguageContext";
import { PostContext } from "../../context/PostContext";
import EditPost from "../forms/EditPost";
// import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const Admin = () => {
  // eslint-disable-next-line no-unused-vars
  const [siteLanguage, setSiteLanguage] = useContext(LanguageContext);
  const { event, setEvent } = useContext(PostContext);

  useEffect(() => {
    setSiteLanguage("English");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteLanguage]);

  // const navigate = useNavigate();

  // const routeChange = () => {
  //   navigate("/");
  // };

  return (
    <div>
      <Tab.Container
        id="left-tabs-example"
        activeKey={event}
        onSelect={(k) => setEvent(k)}
      >
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          <AppBar
            position="fixed"
            sx={{
              width: `calc(100% - ${drawerWidth}px)`,
              ml: `${drawerWidth}px`,
            }}
          >
            <Toolbar className="menu">
              <Typography variant="h6" noWrap component="div">
                Editor Panel
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar>
              <Nav.Link href="/">
                <LoginIcon
                  fontSize="large"
                  color="info"
                  sx={{ ml: 1, mr: 1 }}
                />
                Back to Home
              </Nav.Link>
            </Toolbar>
            <Divider />
            {/* <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}

            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="form">Add New Post</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="table">Post List</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tableForm">Statics</Nav.Link>
              </Nav.Item>
            </Nav>
          </Drawer>
          <Box
            component="main"
            sx={{
              flexGrow: 2,

              p: 2,
            }}
          >
            <Toolbar />

            <Tab.Content>
              <Tab.Pane eventKey="form">
                <PostForm />
              </Tab.Pane>
              <Tab.Pane eventKey="table">
                <PostTable />
              </Tab.Pane>
              <Tab.Pane eventKey="tableForm">
                <PostPage />
              </Tab.Pane>
              <Tab.Pane eventKey="postpage">
                <PostPage />
              </Tab.Pane>
              <Tab.Pane eventKey="editpost">
                <EditPost />
              </Tab.Pane>
            </Tab.Content>
          </Box>
        </Box>
      </Tab.Container>
    </div>
  );
};

export default Admin;
