import { Stack, Typography } from '@mui/material'
import React from 'react'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack
        type= 'button'
        alignItems='center'
        justifyContent= 'center'
        className= 'bodyPart-card'
        sx={{
            borderTop: bodyPart === item ? "4px solid #ff2625" : "",
            backgroundColor: "#fff",
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '270px',
            cursor: 'pointer',
            gap: '47px',
        }}
        onClick={() => {
          setBodyPart(item);
          // window.scrollTo({top: '1800px', left: '100px', behavior: 'smooth'})
        }}
    >
      <img src={Icon} alt="dumbell" style={{width: '40px', height: '40px'}} />
      <Typography sx={{fontSize: '24px', fontWeight: 'bold', color: '#3A1212'}}>
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart
