import BasicLayout from '@/app/layout/Basic'
import React from 'react'
import { SRoot } from '../styles'

export default function Root({ children }: { children: any }) {
    return (
        <BasicLayout>
            <SRoot>
                {children}
            </SRoot>
        </BasicLayout>
    )
}