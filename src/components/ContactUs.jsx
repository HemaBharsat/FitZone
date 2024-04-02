import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import "./ContactUs.css";

const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "60d7306f-5f0d-4afc-91f4-3ab2f75c93b5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <Stack mt="30px" p="20px" id="contactus">
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
          Contact Us
        </Typography>
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "60px", xs: "30px" } }}
          mb="30px"
          textAlign="center"
          color="white"
        >
          Get in Touch
        </Typography>

        <Grid container spacing={2} columns={16} color="white">
          <Grid item xs={8}>
            <Box
              sx={{
                padding: "16px",
                ml: "80px",
                alignItems: "center",
              }}
            >
              <Typography fontSize="35px" mt="10px">
                Send us a message
              </Typography>
              <Typography align="justify" fontSize="17px" mt="10px">
                Feel free to reach out through the contact form or find our
                contact information below. Your feedback, questions, and
                suggestions are important to us as we strive to provide
                exceptional service to our university community.
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: "30px" }}>
                <MailOutlineIcon sx={{ mr: 1 }} />
                <Typography fontSize="17px">hemabharsat@gmail.com</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: "15px" }}>
                <CallIcon sx={{ mr: 1 }} />
                <Typography fontSize="17px">+1123-456-7890</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: "15px" }}>
                <AddLocationAltIcon sx={{ mr: 1 }} />
                <Typography fontSize="17px">
                  77 New Avenue, Massachusetts MA 02139, United States
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box
              sx={{
                padding: "16px",
                ml: "80px",
                alignItems: "center",
              }}
            >
              <form onSubmit={onSubmit}>
                <Typography fontSize="17px" mt="10px" mb="10px">
                  Your Name
                </Typography>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input"
                />
                <Typography fontSize="17px" mt="10px" mb="10px">
                  Phone Number
                </Typography>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your Mobile number"
                  className="input"
                />
                <Typography fontSize="17px" mt="10px" mb="10px">
                  Enter your Email Id
                </Typography>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email id"
                  className="input"
                />
                <Typography fontSize="17px" mt="10px" mb="10px">
                  Write your message
                </Typography>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Enter your message"
                  className="input"
                ></textarea>
                <Typography></Typography>
                <button type="submit" className="button">
                  Submit now
                </button>
              </form>
              <br />
              <span>{result}</span>
              <form></form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default ContactUs;
