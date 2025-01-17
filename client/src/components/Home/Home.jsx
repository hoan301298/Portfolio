import React, { useState } from 'react'
import { Button, Typography, Box, IconButton, TextField } from '@mui/material';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram"
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AddressIcon from "@mui/icons-material/Home";
import DownloadIcon from "@mui/icons-material/Download";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Home = ({ mode }) => {
  const darkMode = mode === "dark";
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleDownload = () => {
    const fileUrl = "/files/Hoan Tran - Resume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Hoan Tran - Resume.pdf";
    link.click();
  };

  const handleRedirect = () => {

  }

  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Main Card */}
      <Box
        sx={{
          px: "3rem",
          display: "flex",
          flexDirection: {xs: "column", xl: "row"},
          alignItems: "center",
          // justifyContent: "center",
          gap: {md: "2rem", lg: "8rem"},
          width: "auto",
          height: "auto",
          maxHeight: "200vh",
        }}
      >
        {/* Left Section - Text */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: {md: "2rem", lg: "2rem"},
          }}
        >
          <Box 
            sx={{
              display: 'flex',
              flexDirection: "column",
              alignContent: "center",
              gap: "2rem",
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
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    color: darkMode ? "#00d9ff" : "#3e2022",
                    mb: "1rem",
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
              {/* Contact */}
              <Box 
                sx={{
                  display: 'flex',
                  flexDirection: "column",
                  gap: "1rem"
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
            <Box>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: darkMode ? "#ddd" : "#3e2022",
                }}
              >
                I’m a skilled Full Stack Developer with a passion for creating intuitive, efficient, and dynamic web applications. With expertise in JavaScript, React, Node.js, and other modern web technologies, I thrive on solving complex problems and building impactful solutions that make a difference. My development process emphasizes clean, maintainable code and user-focused design, ensuring seamless experiences for end-users.
                <br />
                <br />
                Beyond my technical skills, I am deeply committed to continuous learning. I stay updated with the latest tech trends, exploring new frameworks, libraries, and best practices to enhance my skills and deliver innovative results. Outside of coding, I enjoy experimenting with creative side projects that push my boundaries and allow me to apply my technical expertise in new and exciting ways. Whether it’s exploring the potential of emerging technologies or solving real-world challenges, I’m always eager to learn and grow.
                <br />
                <br />
                Feel free to explore my portfolio to see my projects and achievements. If you have a compelling idea or need a partner for an ambitious project, don’t hesitate to connect. Together, we can create something truly remarkable!
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: {md: "center", lg: ""},
              flexDirection: "column",
              gap: "2rem"
            }}
          >
            {/* Social Icons */}
            <Box 
              sx={{ 
                display: "flex",
                justifyContent: "center",
                gap: "5rem",
              }}
            >
              <IconButton
                sx={{ color: darkMode ? "#fff" : "#3e2022", fontSize: "3rem" }}
                component="a"
                href="https://www.linkedin.com/in/hoan-tran-fin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon sx={{ fontSize: "inherit" }}/>
              </IconButton>
              <IconButton 
                sx={{ color: darkMode ? "#fff" : "#3e2022", fontSize: "3rem" }}
                component="a"
                href="https://github.com/hoan301298?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon sx={{ fontSize: "inherit" }}/>
              </IconButton>
              <IconButton 
                sx={{ color: darkMode ? "#fff" : "#3e2022", fontSize: "3rem" }}
                component="a"
                href="https://www.facebook.com/bin.ho.andn98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon sx={{ fontSize: "inherit" }}/>
              </IconButton>
              <IconButton
                sx={{ color: darkMode ? "#fff" : "#3e2022", fontSize: "3rem" }}
                component="a"
                href="https://www.instagram.com/ph_qang/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon sx={{ fontSize: "inherit" }}/>
              </IconButton>
            </Box>
            {/* Button section*/}
            <Box
              sx={{
                display: 'flex',
                flexDirection: "row",
                justifyContent: "center",
                gap: "5rem"
              }}
            >
              <Button
                variant="contained"
                onClick={handleDownload}
                sx={{
                  backgroundColor: darkMode ? "#fff" : "#3e2022",
                  color: darkMode ? "#3e2022" : "#fff",
                  width: "30%",
                  height: "40px",
                  textTransform: "none",
                    ":hover": {
                        backgroundColor: "#00bce4",
                    },
                  gap: "2px"
                }}
              >
                Download Resume
                <IconButton sx={{ color: darkMode ? "#3e2022" : "#fff" }}>
                  <DownloadIcon/>
                </IconButton>
              </Button>
              <Button
                variant="contained"
                onClick={handleRedirect}
                sx={{
                  backgroundColor: darkMode ? "#fff" : "#3e2022",
                  color: darkMode ? "#3e2022" : "#fff",
                  width: "30%",
                  height: "40px",
                  textTransform: "none",
                    ":hover": {
                        backgroundColor: "#00bce4",
                    },
                  gap: "5px"
                }}
              >
                Projects
                <IconButton sx={{ color: darkMode ? "#3e2022" : "#fff" }}>
                  <MenuBookIcon/>
                </IconButton>
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Right Section - Image */}
        <Box 
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "4rem"
          }}
        >
          <Box
            sx={{
              width: {xs: "300px", lg: "370px"},
              height: {xs: "450px", lg: "550px"},
              borderRadius: "10%",
              overflow: "hidden",
              boxShadow: darkMode 
                ? "0 0 20px #00d9ff"
                : "0 0 10px #aeae00",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img 
              src="/files/avatar.jpg" alt="avatar" 
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain"
              }}  
            />            
          </Box>
          <form onSubmit=""
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "1rem",
              width: "100%",
              maxWidth: "600px",
              margin: "10px auto",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                mb: 2,
                width: "70%",
              }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#007BFF",
                color: "white",
                fontWeight: "bold",
                textTransform: "none",
                width: "auto",
                maxWidth: "50%",
                height: "56px",
                borderRadius: "10px",
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