import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";
import Home from './Pages/Home';
import ExerciseDetail from "./Pages/ExerciseDetail.js";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import "./App.css";
const App = () => {
  return (
      <Box width="400px" sx={{width:{xl:"1488"}}}m="auto">
          <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
        </Routes>
        <Footer/>
      </Box>
  )
}

export default App