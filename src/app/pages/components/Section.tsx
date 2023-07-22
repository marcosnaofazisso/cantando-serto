import React from 'react'
import { StyledSection } from '../styles'

export default function Section({ children }: { children: any }) {
    return (
        <StyledSection>
            {children}
        </StyledSection>
    )
}