import { useState } from "react";
import { Box, Typography, Button, TextField, IconButton, Alert } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AddressIcon from "@mui/icons-material/Home";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Contact = ({ mode }) => {
    const darkMode = mode === "dark";
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [typing, setTyping] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setSuccess(false);
        setTyping(true);
        if(name === 'email' && value === '') {
            setTyping(false);
        }
    };

    const handleSubmitFeedback = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${SERVER_URL}/api/feedback`, formData);
            console.log(formData.message);
            if (response.status === 200) {
                setTyping(false);
                setSuccess(true);
                setFormData({
                    email: '',
                    subject: '',
                    message: '',
                });
                setMessage(response.data.message);
            }
        } catch (error) {
            console.log(error);
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
                flexDirection: "column",
                gap: "10vh",
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
                <Box
                    sx={{
                        height: "auto",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        gap: "3vw"
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1vw"
                        }}
                    >
                        <Typography variant="h4" align="center" fontWeight="bold" sx={{color: darkMode ? "#00d9ff" : "#3e2022"}}>
                            Contact
                        </Typography>
                        <Typography variant="body1" align="center" sx={{fontSize: "1vw", color: darkMode ? "#fff" : "#3e2022"}}>
                            Finding a job has been challenging for me because of how competitive the market feels and the constant pressure to stand out among so many applicants. It can be frustrating when I don't hear back after applying, especially when I feel I have the skills and potential to contribute. I’ve realized that not having a strong network or perfectly aligned experience has made the process harder, and sometimes it feels like rejection is just part of the routine. But I know I need to stay resilient, keep improving my skills, and focus on tailoring my approach to show that I’m the right fit for the roles I truly want.
                        </Typography>
                    </Box>
                    <Box
                        component="img"
                        src={'/files/storm.gif'}
                        alt="companyImage"
                        sx={{
                            width: '30vh', 
                            height: 'auto',
                            aspectRatio: '3 / 2',
                            borderRadius: '10%', 
                        }}  
                    />
                </Box>
                <Box
                    sx={{
                        height: "auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: "3vh"
                    }}
                >
                    <Typography variant="h6" align="center" sx={{ fontWeight: "bold", color: darkMode ? "#00d9ff" : "#3e2022"}}>
                        Share your feedback or let me know if there's anything you'd like to discuss.
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "1.5vw",
                            width: "100%",
                        }}
                    >
                        <Box
                            sx={{
                                width: "30%"
                            }}
                        >
                            {!typing && !success && (
                            <Box
                                component="img"
                                src={'/files/gimme.webp'}
                                alt=""
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    aspectRatio: '4 / 3',
                                    borderRadius: '10%',
                                }}  
                            />
                            )}
                            {typing && !success && (
                                <Box
                                    component="img"
                                    src={'/files/gorilla-2.gif'}
                                    alt=""
                                    sx={{
                                        width: "90%",
                                        height: "100%",
                                        aspectRatio: '6 / 5',
                                        borderRadius: '10%', 
                                    }}  
                                />
                            )}
                            {!typing && success && (
                                <Box
                                    component="img"
                                    src={'/files/gorilla-1.gif'}
                                    alt=""
                                    sx={{
                                        width: '90%',
                                        height: "100%",
                                        aspectRatio: '6 / 5',
                                        borderRadius: '10%', 
                                    }}  
                                />
                            )}
                        </Box>
                        <form onSubmit={handleSubmitFeedback} style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center", }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "70%",
                                    height: "100%",
                                    justifyContent: "space-between"
                                }}
                            >
                                <TextField
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    sx={{
                                        '& .MuiInputLabel-root': {
                                            color: darkMode ? "#fff" : "#3e2022", // Label color
                                        },
                                        '& .MuiInputBase-root': {
                                            color: darkMode ? "#fff" : "#3e2022", // Input text color
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: darkMode ? "#fff" : "#3e2022", // Border color
                                            },
                                            '&:hover fieldset': {
                                                borderColor: darkMode ? "#ddd" : "#ff5722", // Border color on hover
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: darkMode ? "#ffd700" : "#ff5722", // Border color when focused
                                            },
                                        },
                                    }}
                                />
                                <TextField
                                    label="Subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    sx={{
                                        '& .MuiInputLabel-root': {
                                            color: darkMode ? "#fff" : "#3e2022", // Label color
                                        },
                                        '& .MuiInputBase-root': {
                                            color: darkMode ? "#fff" : "#3e2022", // Input text color
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: darkMode ? "#fff" : "#3e2022", // Border color
                                            },
                                            '&:hover fieldset': {
                                                borderColor: darkMode ? "#ddd" : "#ff5722", // Border color on hover
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: darkMode ? "#ffd700" : "#ff5722", // Border color when focused
                                            },
                                        },
                                    }}
                                />
                                <TextField
                                    label="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    multiline
                                    rows={2}
                                    fullWidth
                                    required
                                    sx={{
                                        '& .MuiInputLabel-root': {
                                            color: darkMode ? "#fff" : "#3e2022", // Label color
                                        },
                                        '& .MuiInputBase-root': {
                                            color: darkMode ? "#fff" : "#3e2022", // Input text color
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: darkMode ? "#fff" : "#3e2022", // Border color
                                            },
                                            '&:hover fieldset': {
                                                borderColor: darkMode ? "#ddd" : "#ff5722", // Border color on hover
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: darkMode ? "#ffd700" : "#ff5722", // Border color when focused
                                            },
                                        },
                                    }}
                                />
                            </Box>
                            <Box 
                                sx={{
                                    display: 'flex',
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    height: "100%"
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
                                <Box 
                                    sx={{ 
                                        display: 'flex',
                                        gap: '1rem',
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <IconButton
                                        sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "1.4vw" }}
                                        component="a"
                                        href="https://www.linkedin.com/in/hoan-tran-fin/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <LinkedInIcon sx={{ fontSize: "inherit" }}/>
                                    </IconButton>
                                    <IconButton 
                                        sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "1.4vw" }}
                                        component="a"
                                        href="https://github.com/hoan301298?tab=repositories"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <GitHubIcon sx={{ fontSize: "inherit" }}/>
                                    </IconButton>
                                    <IconButton 
                                        sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "1.4vw" }}
                                        component="a"
                                        href="https://www.facebook.com/bin.ho.andn98"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FacebookIcon sx={{ fontSize: "inherit" }}/>
                                    </IconButton>
                                    <IconButton
                                        sx={{ color: darkMode ? "#9968ed" : "#3e2022", fontSize: "1.4vw" }}
                                        component="a"
                                        href="https://www.instagram.com/ph_qang/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <InstagramIcon sx={{ fontSize: "inherit" }}/>
                                    </IconButton>
                                </Box>
                                {message ? (
                                    <Alert
                                        severity={success ? "success" : "error"}
                                        onClose={() => setMessage('')}
                                    >
                                        {message}
                                    </Alert>
                                ) : (
                                    <Button type="submit" variant="contained" color="primary">
                                        Send Message
                                    </Button>
                                )}
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact;