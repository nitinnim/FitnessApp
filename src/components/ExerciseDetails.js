import { Button, Stack, Typography } from '@mui/material';
import BodyPart from '../assets/icons/body-part.png'
import Equipment from '../assets/icons/equipment.png'
import Target from '../assets/icons/target.png'


const ExerciseDetails = ({exerciseDetails}) => {

  return (
    <Stack gap='70px' alignItems='center'
      sx={{
        p: '20px',
        mt: '120px',
        flexDirection: {lg:'row'}
      }}
    >
      <img src={exerciseDetails.gifUrl} alt={exerciseDetails.name} loading='lazy' className='detail-image'/>

      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>

        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {exerciseDetails.name}
        </Typography>

        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong. <span style={{ textTransform: 'capitalize' }}>{exerciseDetails.name}</span> is one of the best
          exercises to target your {exerciseDetails.target}. It will help you improve your
          mood and gain energy.
        </Typography>

        <Stack gap='30px' mt='30px'>

          <Stack direction='row' textTransform='capitalize' gap='20px' alignItems='center'>
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img
                src={BodyPart} 
                alt="BodyPart" 
                loading='lazy' 
                
                style={{
                  width: '50px', height: '50px'
                }}
              />
            </Button>
            
            <Typography fontSize='28px'>
              {exerciseDetails.bodyPart}
            </Typography>
          </Stack>

          <Stack direction='row' textTransform='capitalize' gap='20px' alignItems='center'>
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img 
                src={Target} 
                alt="Target" 
                loading='lazy' 
                
                style={{
                  width: '50px', height: '50px'
                }}
              />
            </Button>
            <Typography fontSize='28px'>
              {exerciseDetails.target}
            </Typography>
          </Stack>

          <Stack direction='row' textTransform='capitalize' gap='20px' alignItems='center'>
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img 
                src={Equipment} 
                alt="Equipment" 
                loading='lazy' 
                style={{
                  width: '50px', height: '50px'
                }}
              />
            </Button>
            
            <Typography fontSize='28px'>
              {exerciseDetails.equipment}
            </Typography>
          </Stack>

        </Stack>
        


      </Stack>
    </Stack>
  )
}

export default ExerciseDetails
