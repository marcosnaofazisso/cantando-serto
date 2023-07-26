'use client'

import { pages } from "@/assets/navigation";
import { songs } from "@/assets/songs";
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField, Typography } from "@mui/material";
import { RefObject, createRef, useRef, useState } from "react";
import AudioComponent from "./pages/components/Audio";
import Header from "./pages/components/Header";
import Main from "./pages/components/Main";
import Root from "./pages/components/Root";
import Section from "./pages/components/Section";
import SongBox from "./pages/components/SongBox";
import SongName from "./pages/components/SongName";
import SongTitle from "./pages/components/SongTitle";
import SubTitle from "./pages/components/SubTitle";
import Title from "./pages/components/Title";
import TitleBox from "./pages/components/TitleBox";
import { SongsBox } from "./pages/styles";
import SuggestionForm from "./pages/components/SuggestionForm";
import HeaderTitle from "./pages/components/HeaderTitle";

export default function Home() {

  const [pageSelected, setPageSelected] = useState<number>(0)
  const [filterValue, setFilterValue] = useState<string>("")
  const playerRefs: RefObject<HTMLAudioElement>[] = []

  const handleSearchSong = (event: any) => {
    setFilterValue(event?.target?.value)
  }

  const filteredSongs = songs.filter((song) => {
    const songName = song.name.toLowerCase();
    const trackName = song.trackMessage.toLowerCase();
    const artistName = song.artist.toLowerCase();
    return songName.includes(filterValue) || artistName.includes(filterValue) || trackName.includes(filterValue);
  })

  return (
    <Root>
      <Main>

        <TitleBox>
          <Title />
          <SubTitle />
        </TitleBox>

        <Header changePage={setPageSelected} />

        <Section>
          <HeaderTitle pageSelected={pageSelected} />

          {pageSelected === 0 && (
            <>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="searchField"
                sx={{ m: 0, borderRadius: '10px' }}
                InputProps={{
                  startAdornment:
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>,
                  style: { width: '90vw', height: '5vh', backgroundColor: 'white', marginBottom: '5vh' }
                }}
                onChange={(e: any) => handleSearchSong(e)} />

              <SongsBox>
                {filteredSongs.map((song: any, index: number) => {

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
            </>
          )}
          {pageSelected === 1 && (
            <>
              <SuggestionForm />
            </>
          )}
        </Section>
      </Main>
    </Root>
  )
}
