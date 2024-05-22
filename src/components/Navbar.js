import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack direction="row" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' },mb:{xs: '50px'} }} px="20px">
        <Link to='/'>
            <img src={Logo} alt="Logo" style={{
                width: '48px', height: '48px', margin: '0px 20px'
            }} />
        </Link>

        <Stack 
            direction="row" 
            alignItems='flex-end' 
            fontFamily='Alegreya'
            gap='20px' 
            fontSize='24px'
        >
            <Link to='/' style={{ textDecoration: 'none', color: '#3A1212',borderBottom: '3px solid #FF2625'}}>
                Home
            </Link>

            <a href='#exercises' style={{ textDecoration: 'none', color: '#3A1212',borderBottom: '3px solid #FF2625' }}>
                Exercise
            </a>
        </Stack>
    
    </Stack>
  )
}

export default Navbar
