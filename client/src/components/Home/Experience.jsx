import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Chip,
  Box,
} from '@mui/material';
import { RiArrowDownWideLine } from "react-icons/ri";
import { experiences } from '../../assets/content/experiences';

const Experience = ({ mode }) => {
    const darkMode = mode === "dark";
    return (
        <Box
            sx={{
                height: "82vh",
                width: "100%",
                display: 'flex',
                py: "3vh"
            }}
        >
            <Box 
                sx={{
                    px: "2vw",
                    display: "flex",
                    flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row'},
                    gap: {xs: "2vw", lg: "3vw"},
                    width: "100%",
                    height: "72vh",
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
                    }
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8vh",
                    }}
                >
                    <Typography variant="h6" sx={{ textAlign: 'center', color: darkMode ? "#00d9ff" : "#3e2022", height: "8%"}}>
                    During my internship and professional experience at RunUp, I gained invaluable insights and skills that broadened my understanding of the technology landscape. This period not only deepened my technical knowledge but also ignited a passion for innovation and problem-solving, opening my mind to the boundless possibilities within the world of technology and its transformative potential.
                    </Typography>
                    <Box 
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1vh",
                            height: "88%",
                            justifyContent: "space-between"
                        }}
                    >
                        {experiences.map((experience, index) => (
                            <Accordion 
                                key={index}
                                sx={{
                                    borderRadius: "10px", 
                                    background: darkMode ? 
                                        "linear-gradient(to left, rgba(10, 40, 50, 0.4), rgba(0, 10, 100, 0.4))"
                                        : "linear-gradient(rgba(100, 50, 50, 0.1), rgba(200, 50, 20, 0.1))", 
                                    padding: "5px",
                                }}
                            >   
                                <AccordionSummary>
                                    <Box 
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            // justifyContent: "space-between",
                                            width: "100%",
                                            gap: "5vw",
                                        }}
                                    >
                                        <Box 
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "0.2vh",
                                                width: "60%",
                                            }}
                                        >
                                            <Typography variant="h6" sx={{ color: darkMode ? "#7CD496" : "#3e2022", fontWeight: 'bold' }}>
                                                {experience.companyName}
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: darkMode ? "#9968ed" : "#2A34B9", fontStyle: "italic" }}>
                                                {experience.position}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: darkMode ? "#fff" : "#3e2022" }}>
                                                {experience.description}
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                width: "10vw",
                                            }}
                                        >
                                            <Typography variant="subtitle1" sx={{ color: darkMode ? "#fff" : "#3e2022", fontWeight: "bold",  }}>
                                                {experience.period}
                                            </Typography>
                                        </Box>
                                        <Box
                                            component="img"
                                            src={experience.image}
                                            alt="companyImage"
                                                sx={{
                                                    width: { xs: '20vw', md: '7vw' }, // Responsive width
                                                    height: 'auto',                    // Maintain aspect ratio
                                                    aspectRatio: '1 / 1',
                                                    borderRadius: '10%',               // Rounded corners
                                                    boxShadow: darkMode
                                                    ? "0 0 10px #00d9ff"
                                                    : "0 0 10px #9968ed",
                                                }}  
                                        />
                                        <div className='scroll-arrow'>
                                            <RiArrowDownWideLine size={30} color={darkMode? "#6666FF" : "#3e2022"}/>
                                        </div>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box
                                        sx={{
                                            gap: "1vh",
                                            display: "flex",
                                            flexDirection: "column"
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "1vw",
                                                mt: "-1vh"
                                            }}
                                        >
                                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: darkMode ? "#fff" : "#3e2022" }}>
                                                Technologies:
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, color: darkMode ? "#fff" : "#3e2022" }}>
                                                {experience.technologies.map((skill, i) => (
                                                    <Chip key={i} label={skill} color='primary' variant="outlined" />
                                                ))}
                                            </Box>
                                        </Box>
                                        <Box>
                                            {experience.main_responsibilities.map((detail, index) => (
                                                <Typography key={index} variant="body1" sx={{color: darkMode ? "#fff" : "#3e2022"}}>
                                                    {detail}
                                                </Typography>
                                            ))}
                                        </Box>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: "row",
                                                gap: "2vw"
                                            }}
                                        >
                                            <Typography variant="body1" > <a href={experience.website}>Website</a></Typography>
                                        </Box>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Experience;