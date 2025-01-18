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
import { projectList } from '../../assets/content/Project';

const Project = ({ mode }) => {
    const darkMode = mode === "dark";
    const projects = projectList;

  return (
    <Box
        sx={{
            height: "80vh",
            width: "100%",
            display: 'flex',
            py: "5vh"
        }}
    >
        <Box 
            sx={{
                px: "5vh",
                display: "flex",
                flexDirection: "column",
                gap: {md: "4vh", lg: "8vh"},
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
                }
            }}
        >
            <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: darkMode ? "#00d9ff" : "#3e2022", }}>
                HIGHLIGHT PROJECT
            </Typography>
            {projects.map((project, index) => (
                <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box 
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%"
                        }}
                    >
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                {project.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {project.description}
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            More details
                        </Typography>
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
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            Skills Used:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                            {project.skills.map((skill, i) => (
                            <Chip key={i} label={skill} color="primary" variant="outlined" />
                            ))}
                        </Box>
                        <Typography variant="body2">{project.main_responsibilities}</Typography>
                        <Typography variant="body2"> <a href={project.link}>GitHub Link</a></Typography>
                    </Box>
                </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    </Box>
  );
}

export default Project;