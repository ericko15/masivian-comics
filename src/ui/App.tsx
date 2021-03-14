import React, {useEffect} from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import {Header} from "./Header";
import {ComicCard} from "./ComicCard";

const useStyles = makeStyles({
  content: {
    height: 'calc(100vh - 64px)',
    padding: '0 50px'
  }
});

const App = () => {
  const classes = useStyles();

  useEffect(() => {

  }, [])

  return (
    <>
      <Header/>
      <Grid container justify="center" alignItems="center" classes={{root: classes.content}}>
        <Grid item>
          <ComicCard title="title" image="" subtitle=""/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
