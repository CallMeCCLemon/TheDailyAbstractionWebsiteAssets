import { makeStyles } from "@material-ui/core";

import React from "react";
import BlogElement from "./BlogElement";
const useStyles = makeStyles((theme) => ({
  contentContainer: {
    padding: theme.spacing(10),
  },
}));
const CreateBlog: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.contentContainer}>
      <BlogElement fieldName={"Title"} multiline={false} minRows={0} />
      <BlogElement fieldName={"Content"} multiline={true} minRows={10} />
      <BlogElement fieldName={"Summary"} multiline={false} minRows={0} />
      <BlogElement fieldName={"Tags"} multiline={false} minRows={0} />
    </div>
  );
};

export default CreateBlog;
