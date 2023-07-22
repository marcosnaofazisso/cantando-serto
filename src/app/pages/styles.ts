import styled from "styled-components"
import { OptionProps } from "./types/styles.interface"

export const LightTheme = {
    first: "#EB8D24",
    second: "#F0EED7",
    third: "#E3E8D1",
    forth: "#D6E2CC",
    fifth: "#CADDC7",
    sixth: "#7F8180",
    seventh: "#959696",
    eighth: "#c48038",
}
export const TitleBox = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 750px) {
            margin: 2vh 0 5vh 0;
        }

`
export const SongsBox = styled.div`
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
`
export const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    background-color: ${LightTheme.first};
`

export const StyledOption = styled.div<OptionProps>`

    .menuOption { 
        display: block;
        font-size: 1.5rem;
        text-align: center;
        width: 20vw;
        height: 100%;
        padding: 1rem;
        margin-left: 2rem;
        font-weight: bold;
        color: ${(props) => (props.selected ? LightTheme.forth : LightTheme.first)};
        border: solid 3px ${(props) => props.selected ? LightTheme.fifth : LightTheme.fifth};
        border-bottom: 0;
        border-radius: 10px 10px 0 0;
        cursor: pointer;
        box-shadow: ${(props) => (props.selected ? null : `inset 0 -10px 10px -10px #7F8180`)};
        background-color: ${(props) => (props.selected ? LightTheme.first : LightTheme.fifth)};
        
        @media (max-width: 750px) {
            font-size: .8em;
            width: 100%;
            padding: .8rem;
            margin: 0 0 0 .5rem;
        }
    }
    `

export const SRoot = styled.div`
    background-color: ${LightTheme.first};
    `

export const SMain = styled.div`
    width: 100vw;
    background-color: ${LightTheme.first};
    display: 'flex';
    flex-direction: 'column';
    `
export const StyledSection = styled.div`
    width: 100vw;
    background-color: ${LightTheme.first};
    
    @media (max-width: 750px) {
        padding: .8rem;
    }
`


export const STitle = styled.div`
    color: ${LightTheme.second};
    padding: 5vw 5vw 0 5vw;
    
    .mainTitle {
        font-size: 6em;
        font-weight: 700;
        
        @media (max-width: 750px) {
            font-size: 2.3em;
            font-weight: 700;
            padding: .5vw 0 0 1vw;
        }
    }

    .mainTitleDetail {
        display: inline;
        font-weight: 900;
        color: ${LightTheme.seventh}
        
    }
`

export const SSubTitle = styled.div`
    color: ${LightTheme.second};
    
    .mainSubTitle { 
        font-size: 1.5rem;
        padding: 0 5vw 5vw 30vw;
        
        @media (max-width: 750px) {
            font-size: .8rem;
            padding: 0 1vw 1vw 12vw;
        }

    }
    .mainSubTitleDetail {
        display: inline;
        color: ${LightTheme.seventh};
        filter: drop-shadow(0 0 0.75rem white);
    }
`

export const StyledSongBox = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: space-between;
    background-color: ${LightTheme.third}; 
    padding: 1.5rem; 
    border-radius: 10px; 
    margin: 2vh auto 2vh auto; 
    width: 25vw;
    
    @media (max-width: 750px) {
        width: 90vw;
        padding: .5rem; 
        margin: 1vh auto 1vh auto; 
        }
`
export const StyledSongTitle = styled.div`

    .mainSongTitle {
        padding: .2rem;

        @media (max-width: 750px) {
            font-size: 1.2rem;
            font-weight: bold;
        }
    }
    
    `
export const StyledSongSubTitle = styled.div`
    color: ${LightTheme.sixth}; 
    margin: 1vw;
    
    .mainSongSubTitle {
            font-size: .8rem;
        }

`

export const StyledAudioBox = styled.div`
    padding: .2rem;

    .audioControl {
        max-width: 82vw;

    }
`
