import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions,fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader'
const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

  const [search,setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect( () => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",exerciseOptions)
      // console.log("bodyPartsData -> " + bodyPartsData);
      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExerciseData();
  },[])


  const handleSearch = async () => {
    if(search) {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
        // console.log(exercisesData); 

        const searchedExercises = exercisesData.filter(
          (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
        );
        setSearch('');
        setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems='center' p='10px' mt='37px' justifyContent='center'>

      <Typography fontWeight={700} sx={{
        fontSize: {lg: '44px', xs: '30px'},mb: '50px', textAlign: 'center'
      }}>
        Awesome Exercises You <br />
        Should Know
      </Typography>

      <Box
        mb='30px'
        sx={{position: 'relative'}}
      >
        <TextField
          height='76px'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search Exercises'
          type='text'
          sx={{
            input: {
              fontWeight: '700px',
              border: 'none',
              borderRadius: '4px'
            },
            width: {lg: '800px', xs: '350px'},
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
        />
        <Button className="search-btn"
          sx={{
            bgcolor:'#FF2625',
            color:'#fff',
            textTransform: 'none',
            width: {lg: '175px', xs: '80px'},
            fontSize: {lg: '20px', xs: '14px'},
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '50px'}}>
        {bodyParts.length !== 0 ? (<HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />) : (<Loader/>)}
      </Box>

    </Stack>
  )
}

export default SearchExercises
