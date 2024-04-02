import React from "react";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo1.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          gap: { sm: "122px", xs: "40px" },
          mt: { sm: "32px", xs: "20px" },
          justifyContent: "none",
        }}
        px="20px"
      >
        <Link to="/" smooth={true} offset={0} duration={500}>
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "270px",
              height: "45px",
              margin: "0 20px",
            }}
          />
        </Link>
        <Stack
          direction="row"
          gap="40px"
          fontSize="24px"
          fontWeight={300}
          alignItems="flex-end"
        >
          <Link
            to="/"
            smooth={true}
            offset={0}
            duration={500}
            style={{
              textDecoration: "none",
              color: "#ffffff",
              borderBottom: "3px solid #EDB518",
            }}
          >
            Home
          </Link>
          <Link
            to="ourstory"
            smooth={true}
            offset={0}
            duration={500}
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Our Story
          </Link>
          <Link
            to="programs"
            smooth={true}
            offset={0}
            duration={500}
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Programs
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            offset={0}
            duration={500}
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Testimonials
          </Link>
          <Link
            to="contactus"
            smooth={true}
            offset={0}
            duration={500}
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Contact Us
          </Link>
        </Stack>
      </Stack>
    </nav>
  );
};

export default Navbar;
