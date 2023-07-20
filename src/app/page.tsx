'use client'

import { songs } from "@/assets/songs";
import { RefObject, createRef } from "react";
import AudioComponent from "./pages/components/Audio";
import Main from "./pages/components/Main";
import Root from "./pages/components/Root";
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


        <SongsBox>
          {songs.map((song: any, index: number) => {

            const playerRef = createRef<HTMLAudioElement>();
            const id = song.id
            playerRefs[index] = playerRef

            return (
              <SongBox key={id}>
                <SongTitle>{song.trackMessage}</SongTitle>
                <SongName>({`${song.name} - ${song.artist}`})</SongName>
                <AudioComponent ref={playerRef} song={song} />
              </SongBox>
            )
          })}
        </SongsBox>
      </Main>
    </Root>
  )
}
