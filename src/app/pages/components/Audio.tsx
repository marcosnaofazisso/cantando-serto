import { ForwardedRef, forwardRef } from 'react';
import { StyledAudioBox } from '../styles';
import { Song } from '../types/song.interface';

interface AudioComponentProps {
    song: Song;
}

const AudioComponent = forwardRef<HTMLAudioElement, AudioComponentProps>((props: AudioComponentProps, ref: ForwardedRef<HTMLAudioElement>) => {

    const song = props.song



    return (
        <StyledAudioBox>
            <audio controls className='audioControl' ref={ref} >
                <source src={song.src} type="audio/mpeg" />
            </audio>
        </StyledAudioBox>
    )
})

AudioComponent.displayName = 'AudioComponent';

export default AudioComponent;