import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ExerciseCard from './ExerciseCard'
import { exerciseOptions, fetchData } from '../utils/fetchData';

const Exercises = ({exercises, setExercises, bodyPart}) => {
  // console.log("exercises -> ",exercises);  
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 6;

  const indexOfLastExercise = currentPage*exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise-exercisePerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  useEffect( () => {
    let exerciseData = [];
    const fetchExerciseData = async () => {
      if(bodyPart === 'all'){
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      }
      else{
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);
      }
      setExercises(exerciseData);
    }
    fetchExerciseData();
  } ,[bodyPart])

  return (
    <Box 
      id='exercises'
      sx={{
        p:'20px',
        ml: {sm:'50px'}
      }}
    >
      <Typography variant="h3" fontWeight="bold" mb='45px'>
        Showing Results
      </Typography>

      {/* Exercise Card */}
      <Stack 
        direction='row' 
        sx={{gap: {lg: '110px', xs: '50px'}}}
        flexWrap='wrap'
        justifyContent='center'
      >
        {
          currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))
        }
      </Stack>

      {/* Pagination */}
      <Stack sx={{my: '100px'}}alignItems="center" justifyContent='center'>
        {
          exercises.length > 9 && (
            <Pagination
              color='standard'
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length/exercisePerPage)}
              page={currentPage}
              onChange={paginate}
              size='large'
            />
          )
        }
      </Stack>
    </Box>
  )
}

export default Exercises
