'use client'

import Image from "next/image";
import { songs } from "@/assets/songs";
import { RefObject, createRef } from "react";
import logo from '../../public/images/logo.jpg'
import { LightTheme } from "./pages/styles";

export default function Home() {

  const playerRefs: RefObject<HTMLAudioElement>[] = []

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: LightTheme.first }}>

      <Image src={logo} alt="Cantando-Serto-logo" width={1000} />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {songs.map((song: any, index: number) => {

          const playerRef = createRef<HTMLAudioElement>();
          playerRefs[index] = playerRef

          return (
            <div key={song.id} style={{ backgroundColor: LightTheme.third, padding: '.5rem 2rem', borderRadius: "10px", margin: '10px auto', width: '25vw' }}>
              <h1>{song.trackMessage}</h1>
              {/* <p>{`${song.name} - ${song.artist}`}</p> */}
              <audio controls ref={playerRef}>
                <source src={song.src} type="audio/mpeg" />
              </audio>
            </div>
          )
        })}
      </div>
    </div>

  )
}
