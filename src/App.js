import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Main from './Components/main.jsx';
import WorkoutDetails from './Components/WorkoutDeatils.jsx';
import NutritionDetails from './Components/NutritionDetails.jsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/:userId/workout" element={<WorkoutDetails />} />
        <Route exact path="/:userId/nutrition" element={<NutritionDetails />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
