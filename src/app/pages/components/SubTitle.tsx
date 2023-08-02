import React from 'react'
import { StyledSubTitle } from '../styles'
import { Box, Typography } from '@mui/material'

export default function SubTitle() {
    return (
        <StyledSubTitle>
            <Typography className='mainSubTitle'>Te ensinando a cantar com elegân<Box component="span" className='mainSubTitleDetail'>ss</Box>ia</Typography>
            <Typography className='mainCredits'>criado por <a className='mainCreditsDetail' target='_blank' href='https://www.marcosviniciusferreira.com/'>Marcos Vinicius Ferreira</a></Typography>
        </StyledSubTitle>
    )
}