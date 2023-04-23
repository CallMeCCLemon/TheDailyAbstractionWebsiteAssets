import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500
  },
  title: {
    fontSize: 24
  }
});

export interface BlogEntryProps {
  title: string;
  body: string;
}

const BlogEntry = (props: BlogEntryProps) => {
  const classes = useStyles();

  return <Card className={classes.root}>
    <CardContent>
      <Typography className={classes.title} gutterBottom>
        {props.title}
      </Typography>
      <Typography>
        {props.body}
      </Typography>
    </CardContent>
  </Card>
}

export default BlogEntry;