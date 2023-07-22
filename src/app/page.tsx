'use client'

import { songs } from "@/assets/songs";
import { Children, Dispatch, RefObject, SetStateAction, createRef, useState } from "react";
import AudioComponent from "./pages/components/Audio";
import Main from "./pages/components/Main";
import Root from "./pages/components/Root";
import SongBox from "./pages/components/SongBox";
import SongName from "./pages/components/SongName";
import SongTitle from "./pages/components/SongTitle";
import SubTitle from "./pages/components/SubTitle";
import Title from "./pages/components/Title";
import { SongsBox, TitleBox } from "./pages/styles";
import Section from "./pages/components/Section";
import Header from "./pages/components/Header";
import Option from "./pages/components/Option";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function Home() {

  const playerRefs: RefObject<HTMLAudioElement>[] = []

  return (
    <Root>
      <Main>

        <TitleBox>
          <Title />
          <SubTitle />
        </TitleBox>

        <Header>
          <Option >Músicas</Option>
          <Option>Envie uma sugestão</Option>
        </Header>

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
                  <SongTitle>{song.id} - "{song.trackMessage}"</SongTitle>
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
