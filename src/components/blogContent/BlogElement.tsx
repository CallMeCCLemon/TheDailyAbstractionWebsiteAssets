import React from "react";
import { makeStyles, TextField, Typography } from "@material-ui/core";
type BlogElementProps = {
  fieldName: string;
  multiline: boolean;
  minRows: number;
};
const useStyles = makeStyles((theme) => ({
  fieldContainer: {
    padding: theme.spacing(3),
  },
}));
const BlogElement = (props: BlogElementProps) => {
  const classes = useStyles();
  return (
    <div className={classes.fieldContainer}>
      <Typography variant={"h5"}>{`${props.fieldName}:`}</Typography>
      <TextField
        fullWidth
        label={`${props.fieldName}:`}
        id={`${props.fieldName}Id`}
        variant="outlined"
        multiline={props.multiline}
        minRows={props.minRows}
      />
    </div>
  );
};

export default BlogElement;
