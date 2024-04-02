import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/home.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const theme = createTheme({
  palette: {
    warning: {
      main: "#ed6c02",
    },
  },
});

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "30px", xs: "20px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="60px"
      color="#ED8518"
    >
      Work Hard. Play Hard.
      <br />
      <span> Live Fully.</span>
    </Typography>
    <Typography
      fontSize="22px"
      fontFamily="Alegreya"
      lineHeight="35px"
      color="#F5F7F7"
    >
      "The Home of the World's Best Training." <br />
      This isn't just a tagline; it's a commitment.
    </Typography>
    <Stack
      marginTop="20px"
      padding="14px"
      width="180px"
      background="#ED8518"
      color="white"
    >
      <Button
        variant="outlined"
        href="#programs"
        color="warning"
        endIcon={<ArrowForwardIosIcon />}
      >
        Explore
      </Button>
    </Stack>
    <Typography
      fontWeight={600}
      color="#f794aa"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography>
    <img
      src={HeroBannerImage}
      alt="hero-banner"
      className="hero-banner-img"
      style={{
        flex: "1 1 0%",
        maxWidth: "100%",
        height: "auto",
        order: { lg: 2, xs: 1 },
        marginTop: "35px",
      }}
    />
  </Box>
);

export default HeroBanner;
