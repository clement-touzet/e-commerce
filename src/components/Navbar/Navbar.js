import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/ClemmoshopImage.jpg";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.AppBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.AppBar} color="inherit">
            <img
              src={logo}
              alt="Clemmmoshop.js"
              height="25px"
              className={classes.image}
            />
            Clemmoshop.js
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="show car items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
