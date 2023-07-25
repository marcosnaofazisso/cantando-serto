import BasicLayout from '@/app/layout/Basic'
import React from 'react'
import { StyledMain } from '../styles'

export default function Root({ children }: { children: any }) {
    return (
        <BasicLayout>
            <StyledMain>
                {children}
            </StyledMain>
        </BasicLayout>
    )
}