import { Box } from '@mui/material';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Exercise from './Pages/Exercise';

function App() {
  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto" >
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<Exercise />} />
      </Routes>

      <Footer />
    </Box>
  );
}

export default App;
