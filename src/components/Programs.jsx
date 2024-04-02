import React from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Typography,
} from "@mui/material";
import program1Image from "../assets/images/program-1.jpg";
import program2Image from "../assets/images/program2.jpg";
import program3Image from "../assets/images/program-3.jpg";

const itemData = [
  {
    img: program1Image,
    title: "Mind-Body Classes",
    author: "Yoga, Pilates, and meditation classes ",
  },
  {
    img: program2Image,
    title: "Personal Training",
    author: "Extraordinary personal training",
  },
  {
    img: program3Image,
    title: "Corporate Membership",
    author: "Don’t have time to go to the gym? We get the gym to you.",
  },
];

const Programs = () => {
  return (
    <Stack
      className="programs"
      alignItems="center"
      mt="35px"
      justifyContent="center"
      p="20px"
      id="programs"
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
          Transform Your Fitness Journey: Explore Our Diverse Programs
        </Typography>
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "60px", xs: "30px" } }}
          mb="30px"
          textAlign="center"
          color="white"
        >
          What We Offer
        </Typography>
        <ImageList
          cols={3}
          gap={8}
          sx={{
            mt: { lg: "30px", xs: "20px" },
            ml: { sm: "50px" },
            width: "100%", // Set width to 100%
            height: "auto", // Set height to auto
            position: "relative",
            p: "20px",
            justifyContent: "space-between",
          }}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar title={item.title} subtitle={item.author} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

export default Programs;
