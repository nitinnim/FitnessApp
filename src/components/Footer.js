import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <Box
      sx={{
        py: '50px',
        bgcolor: '#FFF3F4',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Stack direction="row" alignItems='center' gap="10px">
        <Link to='/'>
            <img src={Logo} alt="Logo" style={{
                width: '48px', height: '48px', margin: '0px 20px'
            }} />
        </Link>
        <Typography  fontSize='35px' fontWeight='bold' fontStyle='oblique'>Golds Gym</Typography>
      </Stack>
    </Box>
  )
}

export default Footer
