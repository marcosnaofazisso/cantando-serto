'use client'

import { songs } from "@/assets/songs";
import { Typography } from "@mui/material";
import { RefObject, createRef } from "react";
import { LightTheme, SongsBox, TitleBox } from "./pages/styles";
import BasicLayout from "./layout/Basic";
import Title from "./pages/components/Title";
import SubTitle from "./pages/components/SubTitle";
import Root from "./pages/components/Root";
import Main from "./pages/components/Main";
import SongBox from "./pages/components/SongBox";

export default function Home() {

  const playerRefs: RefObject<HTMLAudioElement>[] = []

  return (
    <Root>
      <Main>

        <TitleBox>
          <Title />
          <SubTitle />
        </TitleBox>


        <SongsBox>
          {songs.map((song: any, index: number) => {

            const playerRef = createRef<HTMLAudioElement>();
            const id = song.id
            playerRefs[index] = playerRef

            return (
              <SongBox key={id}>
                <Typography variant="h5" style={{ padding: '.2rem' }}>
                  {song.trackMessage}
                </Typography>
                <Typography style={{ color: LightTheme.sixth, margin: '1.2vh' }}>({`${song.name} - ${song.artist}`})</Typography>
                <audio controls ref={playerRef} style={{ padding: '.2rem', width: '20vw' }}>
                  <source src={song.src} type="audio/mpeg" />
                </audio>
              </SongBox>
            )
          })}
        </SongsBox>
      </Main>
    </Root>
  )
}
