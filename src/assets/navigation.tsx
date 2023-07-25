import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { SvgIconTypeMap } from '@mui/material';
import { ReactElement } from 'react';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

export interface PageOptions {
    [id: number]: PageInfos
}

export interface PageInfos {
    id: number;
    name: string;
    icon?: ReactElement<SvgIconTypeMap>;

}

export const pages: PageOptions = {
    0: {
        id: 0,
        name: "Músicas",
        icon: <LibraryMusicIcon />
    },
    1: {
        id: 1,
        name: "Envie uma sugestão",
        icon: <ForwardToInboxIcon />,
    }
}