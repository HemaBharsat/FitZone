import React from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import Image from "../../src/assets/images/image.jpg";
import Play from "../../src/assets/images/play-button.png";

const OurStory = ({ setPlayState }) => {
  return (
    <Stack
      alignItems="center"
      mt="35px"
      justifyContent="center"
      p="20px"
      id="ourstory"
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
          Discover the Heart Behind FitZone Gym: Our Journey to Wellness
        </Typography>
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "60px", xs: "30px" } }}
          mb="30px"
          textAlign="center"
          color="white"
        >
          Know Us
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={6}>
            <Box position="relative">
              <img
                src={Image}
                alt="hero-banner"
                className="hero-banner-img2"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <img
                src={Play}
                className="hero-banner-img3"
                onClick={() => {
                  setPlayState(true);
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography
              align="justify"
              color="white"
              fontSize="18px"
              ml="80px"
              mt={{ lg: "20px", xs: "20px" }}
            >
              At FitZone Gym, we understand that fitness is more than just
              physical exercise—it's about connection and camaraderie. That's
              why we've cultivated a vibrant community of like-minded
              individuals who support and motivate each other every step of the
              way. From group classes to social events, we offer numerous
              opportunities for our members to connect, share experiences, and
              celebrate achievements. As we continue to grow and evolve, our
              commitment to excellence remains unwavering. We are continually
              exploring new ways to enhance the member experience, introduce
              innovative programs, and stay at the forefront of fitness trends.
              Our goal is not only to help you reach your fitness goals but also
              to empowr you to lead a healthier, happier life.
              <br />
              Whether you're looking to lose weight, build muscle, improve your
              endurance, or simply adopt a healthier lifestyle, FitZone Gym is
              here to support you every step of the way. Join us on this journey
              toward better health, increased vitality, and a stronger
              community. Together, we'll rewrite the story of fitness and create
              a brighter, healthier future for all.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default OurStory;
