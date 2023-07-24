import React, { useState } from 'react'
import { StyledHeader } from '../styles'
import Option from './Option'

export default function Header() {

    const [selectedOption, setSelectedOption] = useState<string>("Músicas")

    const handleSelectOption = (event: any) => {
        setSelectedOption(event?.target?.innerText)
    }

    return (
        <StyledHeader >
            <Option selectedOption={selectedOption} changeOption={(e: any) => handleSelectOption(e)}>Músicas</Option>
            <Option selectedOption={selectedOption} changeOption={(e: any) => handleSelectOption(e)}>Envie uma sugestão</Option>
        </StyledHeader>
    )
}