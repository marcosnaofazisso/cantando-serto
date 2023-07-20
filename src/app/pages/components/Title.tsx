import { Box, Typography } from '@mui/material'
import { STitle } from '../styles'

export default function Title() {
    return (
        <STitle>
            <Typography component='div' className='mainTitle'>Cantando <Box className='mainTitleDetail'>S</Box>erto</Typography>
        </STitle>
    )
}