import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CoffeeSharpIcon from "@mui/icons-material/CoffeeSharp";
import { Box, Typography } from "@mui/material";
import { TranscribeOutlined } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        bgcolor: "#1A1A19",
        color: "white",
          p: 2 
      }}
     
    >
      <div className="footer-icons">
        {/* icons */}
        <a
          href="https://www.instagram.com/anshul_shrivas____13/"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/anshul-shrivas-63a087247/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/anshul-132002"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.buymeacoffee.com/anshulcOdes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CoffeeSharpIcon />
        </a>
      </div>

      <Typography
        variant="h6"
        sx={{
          fontSize: "0.8rem", // Reduced font size
          "@media (max-width:600px)": {
            fontSize: "0.7rem", // Further adjust font size for smaller screens
          },
        }}
      >
        All Rights Reserved &copy; Anshul Shrivas
      </Typography>
    </Box>
  );
};

export default Footer;
