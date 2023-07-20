import React from 'react'
import { StyledSongBox } from '../styles'

export default function SongBox({ children }: { children: any }) {
    return (
        <StyledSongBox>
            {children}
        </StyledSongBox>
    )
}