import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CoffeeSharpIcon from "@mui/icons-material/CoffeeSharp";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        bgcolor: "#1A1A19",
        color: "white",
        p: 2, // Reduced padding
      }}
    >
      <div className="footer-widget">
        <h4 className="widget-title"><u>H.O Address</u></h4>
        <img
          src="https://lamilano.pizza/wp-content/themes/accreteinfo/img/icon/location.png"
          alt="icon"
        />
        <div className="details">
          <i>402, 4th Floor, Onyx Complex, Nr. Rajhans society, HL College
            road, Navrangpura, Ahmedabad, Gujarat 380006</i>
        </div>
      </div>
      <br />

      <div className="footer-widget widget_link">
        <h4 className="widget-title"><u>H.O Email</u></h4>
        <ul className="contact_info_list">
          <li className="single-info-item">
            <img
              src="https://lamilano.pizza/wp-content/themes/accreteinfo/img/icon/envelope.png"
              alt="icon"
            />
            <div className="details"><i>lamilanofoods@gmail.com</i></div>
          </li>
        </ul>
      </div>
      <br />

      <div className="footer-widget widget_link">
        <h4 className="widget-title"><u>H.O Phone Number</u></h4>
        <ul className="contact_info_list">
          <li className="single-info-item">
            <img
              src="https://lamilano.pizza/wp-content/themes/accreteinfo/img/icon/phone.png"
              alt="icon"
            />
            <div className="details">
              <i>18001 2020 2020 - (Toll Free India)</i>
            </div>
          </li>
        </ul>
      </div>
      <br />

      <hr />
      <br />

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
