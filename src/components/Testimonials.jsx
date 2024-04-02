import React, { useState } from "react";
import { createTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, MobileStepper, Stack } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import img1 from "../../src/assets/images/1.jpg";
import img2 from "../../src/assets/images/2.jpg";
import img3 from "../../src/assets/images/3.jpg";
import img4 from "../../src/assets/images/4.jpg";

const theme = createTheme({
  palette: {
    warning: {
      main: "#ed6c02",
    },
  },
});

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const reviews = [
  {
    name: "John Morgan",
    location: "USA",
    review: `The atmosphere at this gym is unbeatable! From the moment I walk in, I'm greeted with positivity and motivation. The trainers are incredibly knowledgeable and supportive, always pushing me to do my best. Plus, the variety of classes keeps me engaged and excited to come back for more. Highly recommend!`,
    img: img1,
  },
  {
    name: "Ellie Anderson",
    location: "USA",
    review: `As someone who's always been intimidated by the idea of going to the gym, I can't express how grateful I am to have found this place. The staff is incredibly welcoming and non-judgmental, making me feel comfortable and supported every step of the way. Thanks to their guidance, I've gained confidence in myself and my abilities.`,
    img: img2,
  },
  {
    name: "Nia Adebayo",
    location: "USA",
    review: `I've been a member at this gym for over a year now, and I can honestly say it's changed my life. Not only have I seen significant improvements in my strength and endurance, but I've also made lifelong friends here. The sense of community is unmatched, and I'm grateful to be a part of it.`,
    img: img3,
  },
  {
    name: "Enzo Capri",
    location: "USA",
    review: `This gym truly goes above and beyond to cater to its members' needs. Whether you're a beginner or a seasoned athlete, there's something here for everyone. The facilities are top-notch, the equipment is well-maintained, and the classes are both challenging and enjoyable. It's no wonder I look forward to my workouts here every day!`,
    img: img4,
  },
];

const Testimonials = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = reviews.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Stack
      alignItems="center"
      mt="35px"
      mb="70px"
      justifyContent="center"
      p="20px"
      sx={{ backgroundColor: "black" }}
      id="testimonials"
    >
      <Box
        sx={{
          mt: { lg: "30px", xs: "20px" },
          ml: { lg: "20px", sm: "50px" },
        }}
        position="relative"
        p="20px"
      >
        <Typography
          sx={{ fontSize: { lg: "30px", xs: "15px" } }}
          textAlign="center"
          color="#ed6c02"
        >
          Real Stories from Our Happy Customers
        </Typography>
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "60px", xs: "30px" } }}
          mb="30px"
          textAlign="center"
          color="white"
        >
          Testimonials
        </Typography>
        <Box
          sx={{
            border: "1px solid #ed6c02",
            borderRadius: "18px",
            padding: "16px",
          }}
        >
          <AutoPlaySwipeableViews
            axis={"x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {reviews.map((review, index) => (
              <Card key={index} sx={{ backgroundColor: "black" }}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      color: "white",
                    }}
                  >
                    <img
                      src={review.img}
                      alt={review.name}
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        marginRight: "10px",
                        border: "2px solid #ed6c02",
                      }}
                    />
                    <div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color="white"
                      >
                        {review.name}
                      </Typography>
                      <Typography variant="subtitle2" color="white">
                        {review.location}
                      </Typography>
                    </div>
                  </Box>
                  <Typography fontSize="18px" color="white" align="justify">
                    {review.review}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            sx={{ bgcolor: "black" }}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Box>
                <Button
                  variant="outlined"
                  color="warning"
                  endIcon={<ArrowForwardIosIcon />}
                  onClick={handleNext}
                >
                  Next
                </Button>
                <KeyboardArrowRight onClick={handleNext} />
              </Box>
            }
            backButton={
              <Box>
                <Button
                  variant="outlined"
                  color="warning"
                  startIcon={<ArrowBackIosNewIcon />}
                  onClick={handleBack}
                >
                  Back
                </Button>
                <KeyboardArrowLeft onClick={handleBack} />
              </Box>
            }
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default Testimonials;
