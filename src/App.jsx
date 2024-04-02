import React, { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import OurStory from "./components/OurStory";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <HeroBanner />
      <OurStory setPlayState={setPlayState} />
      <Programs />
      <Testimonials />
      <ContactUs />
      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </Box>
  );
};

export default App;
