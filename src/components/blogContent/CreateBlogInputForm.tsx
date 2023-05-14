import { Button, makeStyles } from "@material-ui/core";

import React from "react";
import BlogElement from "./BlogElement";
const useStyles = makeStyles((theme) => ({
  contentContainer: {
    padding: theme.spacing(10),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  postButton: {
    background: theme.palette.primary.main,
  },
}));
const CreateBlogInputForm: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.contentContainer}>
      <BlogElement fieldName={"Title"} multiline={false} minRows={0} />
      <BlogElement fieldName={"Content"} multiline={true} minRows={10} />
      <BlogElement fieldName={"Summary"} multiline={false} minRows={0} />
      <BlogElement fieldName={"Tags"} multiline={false} minRows={0} />

      <div className={classes.buttonContainer}>
        <Button className={classes.postButton}>Create</Button>
      </div>
    </div>
  );
};

export default CreateBlogInputForm;
