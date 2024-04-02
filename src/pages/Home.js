import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import Programs from "../components/Programs";
import OurStory from "../components/OurStory";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <OurStory />
      <Programs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </Box>
  );
};

export default Home;
