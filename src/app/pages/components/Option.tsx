import { Typography } from '@mui/material';
import { useState } from 'react';
import { StyledOption } from '../styles';

export default function Option({ children, selectedOption, changeOption }: { children?: string, selectedOption?: string, changeOption: (e: any) => void }) {

    const isSelected = selectedOption == children ? true : false;

    return (
        <StyledOption selected={isSelected}>
            <Typography className='menuOption' onClick={(e) => changeOption(e)}>{children}</Typography>
        </StyledOption>
    )
}