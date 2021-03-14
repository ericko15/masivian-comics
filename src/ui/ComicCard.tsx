import {Card, CardContent, CardHeader, makeStyles, Typography} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import React, {FC, useState} from "react";

const useStyles = makeStyles((theme) => ({
  imageContent: {
    position: 'relative',
  },
  image: {
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
}

export const ComicCard: FC<IProps> = ({title, subtitle, image}) => {
  const [score, setScore] = useState(0)

  const classes = useStyles();

  const handleChangeScore = (e: any, value: any) => setScore(value)

  return (
    <Card classes={{root: classes.card}} elevation={3}>
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
          onChange={handleChangeScore}
        />
      </CardContent>
    </Card>
  )
}
