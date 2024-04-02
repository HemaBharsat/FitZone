import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        mt: "20px",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          columns={16}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={8}>
            <Typography color="white" variant="subtitle1">
              {`${new Date().getFullYear()} | FitZone | All rights reserved`}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography color="white" variant="subtitle1" textAlign="right">
              <span style={{ marginRight: "10px" }}>Terms of Service</span>
              <span>|</span>
              <span style={{ marginLeft: "10px" }}>Privacy Policy</span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
