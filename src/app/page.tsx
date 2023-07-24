'use client'

import { songs } from "@/assets/songs";
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from "@mui/material";
import { RefObject, createRef } from "react";
import AudioComponent from "./pages/components/Audio";
import Header from "./pages/components/Header";
import Main from "./pages/components/Main";
import Option from "./pages/components/Option";
import Root from "./pages/components/Root";
import Section from "./pages/components/Section";
import SongBox from "./pages/components/SongBox";
import SongName from "./pages/components/SongName";
import SongTitle from "./pages/components/SongTitle";
import SubTitle from "./pages/components/SubTitle";
import Title from "./pages/components/Title";
import { SongsBox, TitleBox } from "./pages/styles";

export default function Home() {

  const playerRefs: RefObject<HTMLAudioElement>[] = []

  return (
    <Root>
      <Main>

        <TitleBox>
          <Title />
          <SubTitle />
        </TitleBox>

        <Header />


        <Section>
          <TextField id="outlined-basic" variant="outlined"
            sx={{ m: 0, borderRadius: '10px' }}
            InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>, style: { width: '90vw', height: '5vh', backgroundColor: 'white', margin: '.4rem' } }} />

          <SongsBox>
            {songs.map((song: any, index: number) => {

              const playerRef = createRef<HTMLAudioElement>();
              const id = song.id
              playerRefs[index] = playerRef

              return (
                <SongBox key={id}>
                  <SongTitle>{song.id} - &quot;{song.trackMessage}&quot;</SongTitle>
                  <SongName>({`${song.name} - ${song.artist}`})</SongName>
                  <AudioComponent ref={playerRef} song={song} />
                </SongBox>
              )
            })}
          </SongsBox>
        </Section>
      </Main>
    </Root>
  )
}
