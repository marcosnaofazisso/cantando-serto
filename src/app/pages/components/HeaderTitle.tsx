import { pages } from '@/assets/navigation'
import { Typography } from '@mui/material'
import React from 'react'

export default function HeaderTitle({ pageSelected }: { pageSelected: number }) {
    return (
        <Typography>{pages[pageSelected].name}</Typography>
    )
}