import React, {useState} from "react";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Switch from "../../assets/Button/Switch";

export const navLinks = [
    { id: 1, url: '/', label: 'About' },
    { id: 2, url: '/projects', label: 'project' },
    { id: 3, url: '/experiences', label: 'experience' },
    { id: 4, url: '/contact', label: 'contact'}
];

const NavBar = ({ mode, setMode }) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        setDarkMode((prevMode) => (prevMode === true ? false : true));
    };
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: "100%",
                alignItems: 'center',
                flexDirection: 'row',
                position: 'sticky',
                borderRadius: "1rem",
                borderBottomLeftRadius: "50% 25%",
                borderBottomRightRadius: "50% 25%",
                backgroundImage: darkMode 
                    ? "linear-gradient(rgba(20, 0, 20, 0.1), rgba(20, 0, 20, 1))"
                    : "linear-gradient(rgba(100, 50, 50, 0.1), rgba(200, 50, 20, 0.1))",
                boxShadow: darkMode 
                    ? "0px 7px 10px rgb(50, 20, 100, 0.8)"
                    : "0px 7px 10px rgb(50, 20, 100, 0.8)",
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: {sm: "1rem", lg: "3rem"},
                    py: "1.5rem",
                }}
            >
                <Typography sx={{marginLeft: '5px', color: darkMode ? "#9968ed" : "#3e2022", fontSize: {sm: "1rem", md: "1.5rem", lg: "2rem"}}}>Portfolio</Typography>
                <Box sx={{ display: "flex", gap: {md: "0.5rem", lg: "1.5rem", xl: "3rem" }}}>
                    {navLinks.map((navlink) => (
                        <Button
                            key={navlink.id}
                            component={Link}
                            to={navlink.url}
                            sx={{ 
                                color: darkMode ? "#9968ed" : "#3e2022", 
                                fontSize: {sm: "0.8rem", md: "1rem", lg: "1.2rem"}
                            }}
                        >
                            {navlink.label}
                        </Button>
                    ))}
                </Box>
                <div>
                    <Switch mode={mode} setMode={setMode} toggleMode={toggleMode}/>
                </div>
            </Box>
        </Box>
    )
}

export default NavBar;