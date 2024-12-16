import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { sidebarData } from "../static/sidebarData";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ContactlessIcon from "@mui/icons-material/Contactless";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import sidebarStyle from "./sidebar.module.scss";
import CurrencyRates from "../components/CurrencyRates";

const drawerWidth = 240;

function Sidebar(props) {
  const loc = useLocation();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleClick = () => {
    setIsClosing(false);
  };

  const drawer = (
    <div>
      <Toolbar>
        <span className={sidebarStyle.logo}>Fenace manager</span>
      </Toolbar>
      <Divider />
      <List>
        {sidebarData?.map((item, index) => (
          <Link to={item.link} key={index} onClick={() => handleClick()}>
            <ListItem
              disablePadding
              className={`${sidebarStyle.item} ${
                loc.pathname === item.link && sidebarStyle.active
              }`}
            >
              <ListItemButton>
                <ListItemIcon>
                  {item.link === "/transactions" && (
                    <ReceiptLongIcon sx={{ fontSize: 30 }} />
                  )}
                  {item.link === "/addtransactions" && (
                    <ContactlessIcon sx={{ fontSize: 30 }} />
                  )}
                  {item.link === "/converter" && (
                    <SsidChartIcon sx={{ fontSize: 30 }} />
                  )}
                  {item.link === "/" && <DataUsageIcon sx={{ fontSize: 30 }} />}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <CurrencyRates />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          p: 2,
        }}
      >
        <div className={sidebarStyle.outlet}>
          <Outlet />
        </div>
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
