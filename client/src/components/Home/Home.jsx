import React, { useState } from 'react'
import { Button, Typography, Box, IconButton, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram"
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AddressIcon from "@mui/icons-material/Home";
import DownloadIcon from "@mui/icons-material/Download";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";

const Home = ({ mode }) => {
  const darkMode = mode === "dark";
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleDownload = () => {
    const fileUrl = "/files/Hoan Tran - Resume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Hoan Tran - Resume.pdf";
    link.click();
  };

  const handleRedirect = () => {
    navigate('/projects');
  }

  return (
    <Box
      sx={{
        height: "80vh",
        width: "100%",
        display: 'flex',
        py: "5vh"
      }}
    >
      {/* Main Card */}
      <Box
        sx={{
          px: "5vh",
          display: "flex",
          flexDirection: {xs: "column", md: "column", lg: "row", xl: "row"},
          gap: {md: "2rem", lg: "5rem"},
          width: "100%",
          height: "70vh",
          overflowY: 'auto', // Enable scrolling
          '&::-webkit-scrollbar': {
            width: '5px', // Scrollbar width
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f0f0f0', // Scrollbar track color
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#555',    // Scrollbar thumb color
            borderRadius: '2px',        // Rounded edges
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#222',    // Color on hover
          },
        }}
      >
        {/* Left Section - Text */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "70vh",
            gap: "3vh" 
          }}
        >
          <Box
            sx={{
              height: "auto",
              display: 'flex',
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* Heading */}
            <Box 
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  color: darkMode ? "#00d9ff" : "#3e2022",
                  mb: "1vh",
                }}
              >
                Hoan Tran
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: darkMode ? "#00d9ff" : "#3e2022",
                }}
              >
                Full Stack Developer
              </Typography>
            </Box>
            <Box 
              sx={{ 
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
              }}
            >
              <IconButton
                sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "2rem" }}
                component="a"
                href="https://www.linkedin.com/in/hoan-tran-fin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon sx={{ fontSize: "inherit" }}/>
              </IconButton>
              <IconButton 
                sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "2rem" }}
                component="a"
                href="https://github.com/hoan301298?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon sx={{ fontSize: "inherit" }}/>
              </IconButton>
              <IconButton 
                sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "2rem" }}
                component="a"
                href="https://www.facebook.com/bin.ho.andn98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon sx={{ fontSize: "inherit" }}/>
              </IconButton>
              <IconButton
                sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "2rem" }}
                component="a"
                href="https://www.instagram.com/ph_qang/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon sx={{ fontSize: "inherit" }}/>
              </IconButton>
            </Box>
            {/* Contact */}
            <Box 
              sx={{
                display: 'flex',
                flexDirection: "column",
                
              }}
            >
              <Typography
                sx={{ color: darkMode ? "#fff" : "#3e2022" }}
              >
                <IconButton
                  sx={{ color: darkMode ? "#fff" : "#3e2022" }}
                >
                  <EmailIcon/>
                </IconButton>
                tranhuuphuchoan@gmail.com
              </Typography>
              <Typography 
                sx={{ color: darkMode ? "#fff" : "#3e2022" }}
              >
                <IconButton
                  sx={{ color: darkMode ? "#fff" : "#3e2022" }}
                >
                  <PhoneIcon/>
                </IconButton> 
                (+358) 449-135146
              </Typography>
              <Typography
                sx={{ color: darkMode ? "#fff" : "#3e2022" }}
              >
                <IconButton
                  sx={{ color: darkMode ? "#fff" : "#3e2022" }}
                >
                  <AddressIcon/>
                </IconButton>
                Vaasa, 65100 Finland
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              height: "60vh",
              display: 'flex',
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.5,
                  fontSize: {md: "1.7vh", lg: "2vh"},
                  color: darkMode ? "#ddd" : "#3e2022",
                }}
              >
                I’m a skilled Full Stack Developer with a passion for creating intuitive, efficient, and dynamic web applications. With expertise in modern web technologies, I thrive on solving complex problems and building impactful solutions that make a difference. My development process emphasizes clean, maintainable code and user-focused design, ensuring seamless experiences.
                <br />
                <br />
                Outside of coding, I enjoy experimenting with creative side projects that push my boundaries and allow me to apply my technical expertise in new and exciting ways. Whether it’s exploring the potential of emerging technologies or solving real-world challenges, I’m always eager to learn and grow.
                <br />
                <br />
                Feel free to explore my portfolio to see my projects and achievements. If you have a compelling idea or need a partner for an ambitious project, don’t hesitate to connect. Together, we can create something truly remarkable!
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                height: "15vh",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Typography
                  variant="h6" // Adjusted variant for better readability
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold", // Emphasize the heading
                    fontSize: {md: "2vh", lg: "2.5vh"},
                    color: darkMode ? "#00d9ff" : "#3e2022", // Dark mode style
                  }}
                >
                  <IconButton>
                    <SchoolIcon/>
                  </IconButton>
                  Vaasa University of Applied Sciences
                </Typography>
                <Typography
                  variant="h8" // Subheading size
                  sx={{
                    ml: "2.5vw",
                    fontWeight: "bold", // Medium weight for supporting details
                    fontSize: {md: "1.5vh", lg: "2vh"},
                    color: darkMode ? "#00bfff" : "#3e2022", // Lighter shade for details
                  }}
                >
                  Information Technology
                </Typography>
                <Typography
                  variant="h8" // Subheading size
                  sx={{
                    ml: "2.5vw",
                    fontWeight: "small", // Medium weight for supporting details
                    fontSize: {md: "1.5vh", lg: "2vh"},
                    color: darkMode ? "#00bfff" : "#3e2022", // Lighter shade for details
                  }}
                >
                  August 2020 - June 2024
                </Typography>
              </Box>
              {/* Button section*/}
              <Box
                sx={{
                  height: "100%",
                  display: 'flex',
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "4rem",
                }}
              >
                <Button
                  variant="contained"
                  onClick={handleDownload}
                  sx={{
                    backgroundColor: darkMode ? "#fff" : "#3e2022",
                    color: darkMode ? "#9968ed" : "#fff",
                    width: "170px",
                    height: "40px",
                    textTransform: "none",
                      ":hover": {
                          backgroundColor: "#00bce4",
                      },
                    pl: "1.5rem"
                  }}
                >
                  Download CV
                  <IconButton sx={{ color: darkMode ? "#9968ed" : "#fff"}}>
                    <DownloadIcon/>
                  </IconButton>
                </Button>
                <Button
                  variant="contained"
                  onClick={handleRedirect}
                  sx={{
                    backgroundColor: darkMode ? "#fff" : "#3e2022",
                    color: darkMode ? "#9968ed" : "#fff",
                    width: "170px",
                    height: "40px",
                    textTransform: "none",
                      ":hover": {
                          backgroundColor: "#00bce4",
                      },
                    gap: "0.5rem",
                    pl: "1.5rem"
                  }}
                >
                  Projects
                  <IconButton sx={{ color: darkMode ? "#9968ed" : "#fff" }}>
                    <MenuBookIcon/>
                  </IconButton>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Right Section - Image */}
        <Box 
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "70vh",
            maxHeight: "100vh",
            gap: "2rem",
          }}
        >
          <Box
            component="img"
            src="/files/avatar.jpg"
            alt="avatar"
            sx={{
              width: { xs: '20vw', md: '16vw' }, // Responsive width
              height: 'auto',                    // Maintain aspect ratio
              aspectRatio: '9 / 16',             // Ensures 9:16 ratio
              borderRadius: '10%',               // Rounded corners
              boxShadow: darkMode
              ? "0 0 10px #00d9ff"
              : "0 0 10px #aeae00",
            }}  
          />
          <form onSubmit=""
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "1rem",
              width: "100%",
              height: "3rem",
            }}
          >
            <input
              placeholder="Enter your email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "80%",
                border: "2px solid black"
              }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#9968ed",
                color: "white",
                fontWeight: "bold",
                textTransform: "none",
                width: "auto",
                maxWidth: "50%",
                height: "3rem",
                borderRadius: "10%",
                fontSize: {xs: "0.6rem", md: '1rem'},
              }}
            >
              Subscribe
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;