import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 0,
  },
  media: {
    height: 200,
    [theme.breakpoints.up("md")]: {
      height: 300,
    },
  },
  content: {
    // paddingBottom: 0,
    backgroundColor: "#303030",
  },
  action: {
    // height: ,
    backgroundColor: "#555",
  },
  typo: {
    color: "dodgerblue",
  },
  para: {
    color: "#ddd",
  },
}));

function MediaCard({ title, name, avatar }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={avatar} title={title} />
        <CardContent className={classes.content}>
          <Typography color="primary" gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography className={classes.para} variant="body2" component="p">
            by: {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MediaCard;
