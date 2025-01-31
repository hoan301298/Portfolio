import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Chip,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RiArrowDownWideLine } from 'react-icons/ri';
import { projectList } from '../../assets/content/projects';
import { skills } from '../../assets/content/skills';

const Project = ({ mode }) => {
  const darkMode = mode === "dark";
  return (
    <Box
        sx={{
            height: "80vh",
            width: "100%",
            display: 'flex',
            py: "2vh"
        }}
    >
        <Box 
            sx={{
                px: "2vw",
                display: "flex",
                flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row'},
                width: "100%",
                height: "73vh",
                justifyContent: "space-between",
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
            {/* Left Section - Projects */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2vh",
                    width: {xs: '100%', lg: '57%'},
                    height: "100%"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        height: "10%"
                    }}
                >
                    <Typography variant="body1" sx={{ textAlign: 'center', color: darkMode ? "#00d9ff" : "#3e2022"}}>
                        Discover amazing projects showcasing innovation, creativity and technical expertise. Each project offers unique solutions and perfect for learning and inspiration. Dive in and explore! 
                    </Typography>
                </Box>
                <Box 
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1vh",
                        height: "88%",
                        justifyContent: "space-between"
                    }}
                >
                    {projectList.map((project, index) => (
                        <Accordion key={index} 
                            sx={{
                                borderRadius: "10px", 
                                background: darkMode ? 
                                    "linear-gradient(to left, rgba(10, 40, 50, 0.4), rgba(0, 10, 100, 0.4))"
                                    : "linear-gradient(rgba(100, 50, 50, 0.1), rgba(200, 50, 20, 0.1))", 
                                padding: "5px",
                            }}
                        >
                            <AccordionSummary >
                                <Box 
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        width: "100%",
                                        gap: "2vw",
                                    }}
                                >
                                    <Box 
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "auto",
                                            gap: "0.2vh"
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ color: darkMode ? "#7CD496" : "#3e2022", fontWeight: 'bold' }}>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: darkMode ? "#fff" : "#3e2022",  }}>
                                            {project.description}
                                        </Typography>
                                    </Box>
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
                                            {project.skills.map((skill, i) => (
                                                <Chip key={i} label={skill} color='primary' variant="outlined" />
                                            ))}
                                        </Box>
                                    </Box>
                                    <Box>
                                        {project.details.map((detail, index) => (
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
                                        <Typography variant="body1" > <a href={project.github_link}>GitHub Link</a></Typography>
                                        {project.website && (
                                            <Typography variant="body1" > <a href={project.website}>Website</a></Typography>
                                        )}
                                    </Box>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Box>
            {/* Right Section - Skills */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2vh",
                    height: '100%',
                    width: {xs: "100", lg:"40%"},
                }}
            >
                <Box
                    sx={{
                        height: "10%", 
                        display: "flex", 
                        justifyContent: "center"
                    }}
                >
                    <Typography variant="body1" sx={{ textAlign: 'center', color: darkMode ? "#00d9ff" : "#3e2022"}}>
                        Explore the powerful skills and technologies behind these projects. From modern languages to cutting-edge frameworks, each tool is chosen to deliver robust, innovative solutions.
                    </Typography>
                </Box>
                <Box 
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "88%",
                        justifyContent: "space-between",
                        gap: "1vh"
                    }}
                >
                    {skills.map((skill, index) => (
                        <Accordion key={index} 
                            sx={{
                                borderRadius: "10px", 
                                background: darkMode ? 
                                    "linear-gradient(to left, rgba(10, 40, 50, 0.4), rgba(0, 10, 100, 0.4))"
                                    : "linear-gradient(rgba(100, 50, 50, 0.1), rgba(200, 50, 20, 0.1))", 
                                padding: "5px",
                            }}
                        >
                            <AccordionSummary 
                                expandIcon={<ExpandMoreIcon sx={{color: darkMode ? "#6666FF" : "#3e2022"}}/>}
                            >
                                <Box 
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        width: "100%",
                                        // gap: "5vw",
                                    }}
                                >
                                    <Box 
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "1.5vh"
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ color: darkMode ? "#7CD496" : "#3e2022", fontWeight: 'bold' }}>
                                            {skill.title}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, color: darkMode ? "#fff" : "#3e2022" }}>
                                            {skill.shows.map((item, i) => (
                                                <Chip key={i} label={item} color='primary' variant="outlined" />
                                            ))}
                                        </Box>
                                    </Box>
                                    <Typography variant="body1" sx={{ color: darkMode ? "#6666FF" : "#3e2022", textWrap: "nowrap"}}>
                                        More
                                    </Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        gap: "1vw",
                                        mt: "-1vh"
                                    }}
                                >
                                    
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, color: darkMode ? "#fff" : "#3e2022" }}>
                                        {skill.hidden.map((item, i) => (
                                            <Chip key={i} label={item} color='primary' variant="outlined" />
                                        ))}
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

export default Project;