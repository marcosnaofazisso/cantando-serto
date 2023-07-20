import { Typography } from "@mui/material";
import { StyledSongSubTitle, StyledSongTitle } from "../styles";

export default function SongName({ children }: { children: any }) {
    return (
        <StyledSongSubTitle>
            <Typography className="mainSongSubTitle">{children}</Typography>
        </StyledSongSubTitle>
    )
}