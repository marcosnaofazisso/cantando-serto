import React from 'react'
import { StyledHeader } from '../styles'

export default function Header({ children }: { children: any }) {
    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    )
}