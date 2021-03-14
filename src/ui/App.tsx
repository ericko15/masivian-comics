import React, {useCallback, useEffect, useState} from 'react';
import {CircularProgress, Grid, makeStyles} from "@material-ui/core";
import {Header} from "./Header";
import {ComicCard} from "./ComicCard";
import {container} from "../di/conatiner";
import {IComicModel} from "../models/ComicModel";

const useStyles = makeStyles({
  content: {
    height: 'calc(100vh - 64px)',
    padding: '0 50px'
  }
});

const App = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false)
  const [comic, setComic] = useState<IComicModel | null>(null)

  const handleLoadComic = useCallback(async () => {
    setLoading(true)
    setComic(null)
    const result = await container.getComicUseCase.execute()
    if (!result.isFailure) {
      setComic(result.value)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    handleLoadComic()
  }, [handleLoadComic])

  return (
    <>
      <Header onNewComic={handleLoadComic}/>
      <Grid container justify="center" alignItems="center" classes={{root: classes.content}}>
        <Grid item style={{padding: '25px 0'}}>
          {loading && (
            <CircularProgress/>
          )}
          {comic !== null && !loading && (
            <ComicCard
              title={comic.title}
              image={comic.img}
              subtitle={comic.alt}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
