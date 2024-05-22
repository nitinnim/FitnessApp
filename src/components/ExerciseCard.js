import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({exercise}) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <Stack
        direction='row'
      >
        <Button sx={{ml: '21px', borderRadius: '20px', backgroundColor: '#ffa9a9', color: '#fff', fontSize: '14px', textTransform: 'capitalize'}}>
            {exercise.bodyPart}
        </Button>
        <Button sx={{ml: '21px', borderRadius: '20px', backgroundColor: '#fcc757', color: '#fff', fontSize: '14px', textTransform: 'capitalize'}}>
            {exercise.target}
        </Button>
      </Stack>
      <Typography sx={{ml: '21px', color: '#000', fontWeight: 'bold', fontSize: '24px', textTransform: 'capitalize'}}>
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard
