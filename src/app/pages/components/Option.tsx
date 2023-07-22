import { Typography } from '@mui/material';
import { useState } from 'react';
import { StyledOption } from '../styles';

export default function Option({ children }: { children: string }) {

    const [optionSelected, setOptionSelected] = useState<string>("Músicas")

    const selectOption = (event: any) => {
        setOptionSelected(event?.target?.innerText)
    }

    return (
        <StyledOption selected={optionSelected == children}>
            <Typography className='menuOption'>{children}</Typography>
        </StyledOption>
    )
}