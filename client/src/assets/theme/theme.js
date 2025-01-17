// import { useMemo } from "react";
// import { createTheme } from "@mui/material";
// import darkBackgroundImage from '../images/dark_image.jpg'
// import lightBackgroundImage from '../images/logo512.png'

// const useCustomTheme = (mode) => {
//     return useMemo(
//         () =>
//             createTheme({
//                 palette: {
//                   mode: mode, // 'light' or 'dark'
//                   ...(mode === "dark"
//                     ? {
//                         // primary: {
//                         //   main: "#90caf9",
//                         // },
//                         // background: {
//                         //   default: "#121212", // Dark background
//                         // },
//                       }
//                     : {
//                         // primary: {
//                         //   main: "#99c6f2",
//                         // },
//                         // background: {
//                         //   default: "#ffffff", // Light background
//                         // },
//                       }),
//                 },
//                 typography: {
//                   fontFamily: "Roboto, Arial, sans-serif",
//                 },
//                 overrides: {
//                     MuiCssBaseline: {
//                         '@global': {
//                             body: {
//                                 backgroundImage: `url(${mode === "dark" ? darkBackgroundImage : lightBackgroundImage})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                                 height: '100vh',
//                                 margin: 0,
//                             }
//                         }
//                     }
//                 }
//               }),
//         [mode]
//     )
// }

// export default useCustomTheme;