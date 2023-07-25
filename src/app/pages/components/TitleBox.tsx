import React from 'react'
import { StyledTitleBox } from '../styles'

export default function TitleBox({ children }: { children: any }) {
    return (
        <StyledTitleBox>
            {children}
        </StyledTitleBox>
    )
}