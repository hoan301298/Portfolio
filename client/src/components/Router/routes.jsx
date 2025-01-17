import React from "react";
import Home from "../Home/Home";
import Project from "../Home/Project";
import Contact from "../Home/Contact";
import Skill from "../Home/Skill";

export const routes = (mode) => [
    { path: '/', element: <Home mode={mode}/>},
    { path: '/projects', element: <Project mode={mode}/>},
    { path: '/skills', element: <Skill mode={mode}/>},
    { path: '/contact', element: <Contact mode={mode}/>},
]