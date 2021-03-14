import {AppBar, Button, makeStyles, Toolbar, Typography} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar classes={{root: classes.toolbar}}>
        <Typography variant="h6">
          Masivian Comics
        </Typography>
        <Button color="inherit">Nuevo comic</Button>
      </Toolbar>
    </AppBar>
  )
}
