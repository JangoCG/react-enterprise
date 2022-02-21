import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import React, { useEffect, useState } from "react";
import {
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  FilePlus as FilePlusIcon,
  List as ListIcon,
  LogOut as LogOutIcon,
  PieChart as PieChartIcon,
  ShoppingCart as ShoppingCartIcon,
} from "react-feather";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

const DashboardSidebarNavigation = () => {
  const classes = useStyles();
  const { url } = useRouteMatch();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  useEffect(() => {}, []);
  return (
    <>
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <Toolbar
            style={{ width: "6rem", height: "auto" }}
            className={classes.toolbar}
          >
            <Link to={`${url}`} className={classes.logoWithLink}>
              Logo
            </Link>
          </Toolbar>
          <Divider />
          <div className={classes.drawerContainer}>
            <List>
              <ListSubheader>Reports</ListSubheader>
              <Link className={classes.link} to={`${url}`}>
                <ListItem button>
                  <ListItemIcon>
                    <PieChartIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Dashboard"} />
                </ListItem>
              </Link>

              {/* Collapsable Menu */}
              <ListSubheader>Management</ListSubheader>
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Products" />
                {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link className={classes.link} to={`${url}/list-products`}>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <ListIcon />
                      </ListItemIcon>
                      <ListItemText primary="List Products" />
                    </ListItem>
                  </Link>
                  <Link className={classes.link} to={`${url}/create-product`}>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <FilePlusIcon />
                      </ListItemIcon>
                      <ListItemText primary="Create Product" />
                    </ListItem>
                  </Link>
                </List>
              </Collapse>

              <Link className={classes.link} to={`${url}/settings-and-privacy`}>
                <ListItem button>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary={"settings and privacy"} />
                </ListItem>
              </Link>
              <a className={classes.link} href={"/"}>
                <ListItem button>
                  <ListItemIcon>
                    <LogOutIcon />
                  </ListItemIcon>
                  <ListItemText primary={"logout"} />
                </ListItem>
              </a>
            </List>
          </div>
        </Drawer>
      </div>
    </>
  );
};

const drawerWidth = 240;
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },

    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    link: { textDecoration: "none", color: "inherit" },
    logoWithLink: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      color: "inherit",
    },
  })
);

export default DashboardSidebarNavigation;
