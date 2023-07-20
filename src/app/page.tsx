'use client'

import { songs } from "@/assets/songs";
import { Typography } from "@mui/material";
import { RefObject, createRef } from "react";
import { LightTheme, TitleBox } from "./pages/styles";
import BasicLayout from "./layout/Basic";
import Title from "./pages/components/Title";
import SubTitle from "./pages/components/SubTitle";

export default function Home() {

  const playerRefs: RefObject<HTMLAudioElement>[] = []

  return (
    <BasicLayout>

      <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: LightTheme.first }}>

        <TitleBox>
          <Title />
          <SubTitle />
        </TitleBox>


        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {songs.map((song: any, index: number) => {

            const playerRef = createRef<HTMLAudioElement>();
            const id = song.id
            playerRefs[index] = playerRef

            return (
              <div key={id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: LightTheme.third, padding: '1.5rem', borderRadius: "10px", margin: '2vh auto 2vh auto', width: '25vw' }}>
                <Typography variant="h5" style={{ padding: '.2rem' }}>
                  {song.trackMessage}
                </Typography>
                <Typography style={{ color: LightTheme.sixth, margin: '1.2vh' }}>({`${song.name} - ${song.artist}`})</Typography>
                <audio controls ref={playerRef} style={{ padding: '.2rem', width: '20vw' }}>
                  <source src={song.src} type="audio/mpeg" />
                </audio>
              </div>
            )
          })}
        </div>
      </div>
    </BasicLayout>



  )
}
