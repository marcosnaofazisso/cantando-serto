import { RefObject } from 'react';
import { StyledAudioBox } from '../styles';
import { Song } from '../types/song.interface';

interface AudioComponentProps {
    song: Song;
    ref: RefObject<HTMLAudioElement>;
}

export default function AudioComponent(props: AudioComponentProps) {

    const song = props.song

    return (
        <StyledAudioBox>
            <audio controls className='audioControl'>
                <source src={song.src} type="audio/mpeg" />
            </audio>
        </StyledAudioBox>
    )
}