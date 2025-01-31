import React, { useState } from 'react'
import { Button, Typography, Box, IconButton, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AddressIcon from "@mui/icons-material/Home";
import DownloadIcon from "@mui/icons-material/Download";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import BadmintonIcon from "@mui/icons-material/SportsTennisSharp";
import ComputerIcon from "@mui/icons-material/Computer";
import FootballIcon from "@mui/icons-material/SportsSoccer";
import TravelIcon from "@mui/icons-material/TravelExplore";
import CoffeIcon from "@mui/icons-material/Coffee";
import SingingIcon from "@mui/icons-material/MicNone";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Home = ({ mode }) => {
  const darkMode = mode === "dark";
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleDownload = () => {
    const fileUrl = "/files/HoanTran-Resume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Hoan Tran - Resume.pdf";
    link.click();
  };

  const handleRedirect = () => {
    navigate('/projects');
  };

  const handleSubmitSubscribe = async (e) => {
    e.preventDefault();
    try {
      const emailRequest = { email: email }
      const response = await axios.post(`${SERVER_URL}/api/subscribe`, emailRequest);
      if (response.status === 200) {
        setSuccess(true);
        setMessage(response.data.message);
        // setMessage(response.data);
      }
    } catch (error) {
      console.log(error);
      setMessage(error);
    }
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
            {/* Hobbies */}
            <Box 
              sx={{ 
                display: 'flex',
                flexDirection: "column",
                alignItems: "self-start",
              }}
            >
              <IconButton
                sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "2rem" }}
              >
                <BadmintonIcon/>
                <Typography
                  variant="body1"
                  sx={{
                    color: darkMode ? "#00d9ff" : "#3e2022",
                    ml: "5px"
                  }}
                >
                  Badminton
                </Typography>
              </IconButton>
              <IconButton 
                sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "2rem" }}
              >
                <ComputerIcon/>
                <Typography
                  variant="body1"
                  sx={{
                    color: darkMode ? "#00d9ff" : "#3e2022",
                    ml: "5px"
                  }}
                >
                  New Tech
                </Typography>
              </IconButton>
              <IconButton 
                sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "2rem" }}
              >
                <FootballIcon/>
                <Typography
                  variant="body1"
                  sx={{
                    color: darkMode ? "#00d9ff" : "#3e2022",
                    ml: "5px"
                  }}
                >
                  Football
                </Typography>
              </IconButton>
              <IconButton
                sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "2rem" }}
              >
              </IconButton>
            </Box>
            <Box 
              sx={{ 
                display: 'flex',
                flexDirection: "column",
                alignItems: "self-start",
              }}
            >
              <IconButton
                sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "2rem" }}
              >
                <TravelIcon/>
                <Typography
                  variant="body1"
                  sx={{
                    color: darkMode ? "#00d9ff" : "#3e2022",
                    ml: "5px"
                  }}
                >
                  Travelling
                </Typography>
              </IconButton>
              <IconButton 
                sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "2rem" }}
              >
                <CoffeIcon/>
                <Typography
                  variant="body1"
                  sx={{
                    color: darkMode ? "#00d9ff" : "#3e2022",
                    ml: "5px"
                  }}
                >
                  Coffee Time
                </Typography>
              </IconButton>
              <IconButton 
                sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "2rem" }}
              >
                <SingingIcon/>
                <Typography
                  variant="body1"
                  sx={{
                    color: darkMode ? "#00d9ff" : "#3e2022",
                    ml: "5px"
                  }}
                >
                  Singing
                </Typography>
              </IconButton>
              <IconButton
                sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "2rem" }}
              >
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
                Finland
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
                  <IconButton
                    sx={{
                      color: darkMode ? "#9968ed" : "#3e2022"
                    }}
                  >
                    <SchoolIcon/>
                  </IconButton>
                  Vaasa University of Applied Sciences
                </Typography>
                <Typography
                  variant="h8" // Subheading size
                  sx={{
                    ml: "2vw",
                    fontWeight: "bold", // Medium weight for supporting details
                    fontSize: {md: "1.5vh", lg: "2vh"},
                    color: darkMode ? "#ddd" : "#3e2022", // Lighter shade for details
                  }}
                >
                  Information Technology
                </Typography>
                <Typography
                  variant="h8" // Subheading size
                  sx={{
                    ml: "2vw",
                    fontWeight: "small", // Medium weight for supporting details
                    fontSize: {md: "1.5vh", lg: "2vh"},
                    color: darkMode ? "#ddd" : "#3e2022", // Lighter shade for details
                  }}
                >
                  August 2020 - June 2024
                </Typography>
              </Box>
              {/* Button section*/}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "2vh"
                }}
              >
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
                <Box 
                  sx={{ 
                    display: 'flex',
                    gap: '2vw',
                    justifyContent: "center",
                    alignItems: 'center',
                  }}
                >
                  <IconButton
                    sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "1.5vw" }}
                    component="a"
                    href="https://www.linkedin.com/in/hoan-tran-fin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon sx={{ fontSize: "inherit" }}/>
                  </IconButton>
                  <IconButton 
                    sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "1.5vw" }}
                    component="a"
                    href="https://github.com/hoan301298?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon sx={{ fontSize: "inherit" }}/>
                  </IconButton>
                  <IconButton 
                    sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "1.5vw" }}
                    component="a"
                    href="https://www.facebook.com/bin.ho.andn98"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon sx={{ fontSize: "inherit" }}/>
                  </IconButton>
                  <IconButton
                    sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "1.5vw" }}
                    component="a"
                    href="https://www.instagram.com/ph_qang/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon sx={{ fontSize: "inherit" }}/>
                  </IconButton>
                </Box>
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
            height: "auto",
            maxHeight: "100vh",
            gap: "3vh",
            mt: "1vh"
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
          {message ? (
            <Alert
              severity={success ? 'success' : 'error'} // Dynamically set severity
              onClose={() => setMessage('')} // Clear the message on close
              sx={{ mb: 2 }}
            >
              {message}
            </Alert>
            ) : (
            <form 
              onSubmit={handleSubmitSubscribe}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "1vw",
                width: "100%",
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
                  height: "auto",
                  borderRadius: "10%",
                  fontSize: { xs: "0.6rem", md: "1rem" },
                }}
              >
                Subscribe
              </Button>
            </form>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;