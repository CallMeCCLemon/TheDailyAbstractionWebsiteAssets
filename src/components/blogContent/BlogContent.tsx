import { makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  "padding-md": {
    padding: theme.spacing(10),
  },
  "padding-sm": {
    padding: theme.spacing(3),
  },
}));
const BlogContet: React.FC = () => {
  const classes = useStyles();
  const contents = ["Title", "Content", "Blurb/Summary", "Tags"];
  return (
    <div className={classes["padding-md"]}>
      {contents.map((content, idx) => (
        <div className={classes["padding-sm"]} key={`${content}-${idx}`}>
          <Typography variant={"h3"}>{`${content}:`}</Typography>
          <TextField
            fullWidth
            label={`${content}:`}
            id={`${content}Id-${idx}`}
            variant="outlined"
            multiline={content === "Content"}
            minRows={content === "Content" ? 10 : 0}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogContet;
