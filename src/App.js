import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./admin/AdminPage";
import UserProfile from "./user/UserProfile";
import { AppBar, Toolbar, Typography } from "@mui/material";
import logo from "./files/logo.png";
import Home from "./Home";
import { CarsProvider } from "./context/CarsContext";

const App = () => {
    return (
        <CarsProvider>
            <Router>
                <AppBar position="absolute" style={{ width: '100%' }}>
                    <Toolbar>
                        <img src={logo} alt="Logo" style={{ marginRight: 14, width: 60, height: 45, padding: '5px' }} />
                        <Typography variant="h6" style={{ fontFamily: 'Arial, sans-serif', fontWeight: "bold" }}>Rental Cars MVP</Typography>
                    </Toolbar>
                </AppBar>
                <Toolbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/user" element={<UserProfile userId={1} />} />
                </Routes>
            </Router>
        </CarsProvider>
    );
};

export default App;
