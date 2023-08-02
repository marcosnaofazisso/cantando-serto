import { Box, Typography } from '@mui/material'
import { StyledTitle } from '../styles'

export default function Title() {
    return (
        <StyledTitle>
            <Typography className='mainTitle' onClick={() => window.location.reload()}>Cantando <Box component="span" className='mainTitleDetail'>S</Box>erto</Typography>
        </StyledTitle>
    )
}