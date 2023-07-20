'use client'

import Image from "next/image";
import { songs } from "@/assets/songs";
import { RefObject, createRef } from "react";
import logo from '../../public/images/logo.jpg'
import { LightTheme } from "./pages/styles";
import { Typography } from "@mui/material";

export default function Home() {

  const playerRefs: RefObject<HTMLAudioElement>[] = []

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: LightTheme.first }}>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h1" style={{ color: LightTheme.second, fontWeight: 'bold', padding: '5vw 5vw 0 5vw' }}>Cantando Serto</Typography>
        <Typography style={{ color: LightTheme.second, padding: '0 0 5vw 5vw', fontSize: '24px' }}>Te ensinando a cantar com elegânssia</Typography>
      </div>


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
              <audio controls ref={playerRef} style={{ padding: '.2rem' }}>
                <source src={song.src} type="audio/mpeg" />
              </audio>
            </div>
          )
        })}
      </div>
    </div>

  )
}
