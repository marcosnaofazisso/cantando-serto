import { Box, Typography } from '@mui/material'
import { StyledTitle } from '../styles'

export default function Title() {
    return (
        <StyledTitle>
            <Typography className='mainTitle'>Cantando <Box component="span" className='mainTitleDetail'>S</Box>erto</Typography>
        </StyledTitle>
    )
}