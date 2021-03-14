import {AppBar, Button, makeStyles, Toolbar, Typography} from "@material-ui/core";
import React, {FC} from "react";

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

interface IProps {
  onNewComic(): void | Promise<void>
}

export const Header: FC<IProps> = ({onNewComic}) => {
  const classes = useStyles()

  return (
    <AppBar position="sticky">
      <Toolbar classes={{root: classes.toolbar}}>
        <Typography variant="h6">
          Masivian Comics
        </Typography>
        <Button color="inherit" onClick={onNewComic}>Nuevo comic</Button>
      </Toolbar>
    </AppBar>
  )
}
