import { PageInfos, pages } from '@/assets/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import { StyledHeader } from '../styles';
import Option from './Option';

export default function Header({ changePage }: { changePage: Dispatch<SetStateAction<number>>; }) {

    const [selectedOption, setSelectedOption] = useState<string>(pages[0].name)

    const handleSelectOption = (pageId: number) => {
        setSelectedOption(pages[pageId].name)
        changePage(pageId)
    }

    return (
        <StyledHeader >
            {Object.values(pages).map((page: PageInfos) => {
                return (
                    <Option
                        key={page.id}
                        selectedOption={selectedOption}
                        changeOption={(e: any) => handleSelectOption(page.id)}
                        icon={page.icon}
                        name={page.name} />
                )

            })}
        </StyledHeader>
    )
}