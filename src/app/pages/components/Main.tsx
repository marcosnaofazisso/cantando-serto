import React from 'react'
import { StyledMain } from '../styles'

export default function Main({ children }: { children: any }) {
    return (
        <StyledMain>
            {children}
        </StyledMain>
    )
}