import { Typography } from "@mui/material";
import { StyledSongTitle } from "../styles";

export default function SongTitle({ children }: { children: any }) {
    return (
        <StyledSongTitle>
            <Typography variant="h5" className="mainSongTitle">{children}</Typography>
        </StyledSongTitle>
    )
}