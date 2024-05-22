import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ExerciseDetails from '../components/ExerciseDetails';
import { exerciseOptions, youtubeOptions, fetchData } from '../utils/fetchData';
import { Box } from '@mui/material';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const Exercise = () => {

  const {id} = useParams();
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises,setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  useEffect(() => {
    window.scrollTo({top:0,behaviour:'smooth'})

    const fetchExercideData = async () => {

      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      let details = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
      setExerciseDetails(details);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${details.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${details.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${details.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);

    }

    fetchExercideData();
  } ,[id])

  return (
    <Box mb='100px' sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <ExerciseDetails exerciseDetails={exerciseDetails} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetails.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default Exercise
