import React from 'react'
import { SMain } from '../styles'

export default function Main({ children }: { children: any }) {
    return (
        <SMain>
            {children}
        </SMain>
    )
}