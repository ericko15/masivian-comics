import {Card, CardContent, CardHeader, makeStyles, Typography} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import React, {FC} from "react";

const useStyles = makeStyles((theme) => ({
  imageContent: {
    position: 'relative',
    paddingBottom: '56.2%',
  },
  image: {
    position: 'absolute',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
  card: {
    maxWidth: 750,
    minWidth: 600,
    [theme.breakpoints.down('sm')]: {
      minWidth: 450,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: 250,
    }
  }
}));

interface IProps {
  title: string
  subtitle: string
  image: string
  score?: number
}

export const ComicCard: FC<IProps> = ({title, subtitle, image, score = 0}) => {

  const classes = useStyles();
  return (
    <Card classes={{root: classes.card}}>
      <CardHeader title={title} subheader={subtitle}/>
      <CardContent>
        <div className={classes.imageContent}>
          <img alt={title} src={image} className={classes.image}/>
        </div>
        <Typography style={{marginTop: 10}} component="legend">
          Deja tu calificación
        </Typography>
        <Rating
          name="score"
          value={score}
        />
      </CardContent>
    </Card>
  )
}
