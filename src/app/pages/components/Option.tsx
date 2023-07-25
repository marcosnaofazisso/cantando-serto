import { SvgIconTypeMap, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { StyledOption } from '../styles';

export default function Option({ selectedOption, icon, name, changeOption }:
    { icon?: ReactElement<SvgIconTypeMap>, name?: string, selectedOption?: string, changeOption: (e: any) => void }) {

    const isSelected = selectedOption == name ? true : false;

    return (
        <StyledOption selected={isSelected}>
            <Typography className='menuOption' onClick={(e) => changeOption(e)} >{icon} {name}</Typography>
        </StyledOption>
    )
}