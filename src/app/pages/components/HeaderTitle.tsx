import { pages } from '@/assets/navigation'
import { Typography } from '@mui/material'
import { StyledHeaderTitle } from '../styles'

export default function HeaderTitle({ pageSelected }: { pageSelected: number }) {
    return (
        <StyledHeaderTitle>
            <Typography className='headerTitle'>{pages[pageSelected].name}</Typography>
        </StyledHeaderTitle>
    )
}