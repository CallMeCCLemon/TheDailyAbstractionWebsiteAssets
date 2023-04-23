import React from "react";
import BlogEntry from "./BlogEntry";
import {Button, makeStyles, MobileStepper} from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  tileLayout: {
    justifyContent: "center"
  }
})

const Blog = () => {
  const numBlogEntriesToShow = 5;
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  const backButton = <Button size={"small"} onClick={handleBack} disabled={activeStep === 0}>
    Previous Blog
  </Button>

  const nextButton = <Button onClick={handleNext} disabled={activeStep === numBlogEntriesToShow}>
    Next Blog
  </Button>

  return <div className={classes.tileLayout}>
    <MobileStepper variant={"progress"}
                   backButton={backButton}
                   nextButton={nextButton}
                   steps={10}
                   activeStep={activeStep}/>
    <BlogEntry title={"Test Blog Entry Title"} body={"This is some blog body content."}/>
  </div>
}

export default Blog;
