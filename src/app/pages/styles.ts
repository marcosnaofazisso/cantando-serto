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
export const DarkTheme = {
    first: "#FFA726",
    second: "#2C2C2C",
    forth: "#292929",
    fifth: "#222222",
    sixth: "#B0B0B0",
    seventh: "#808080",
    eighth: "#E65100",
}

export const StyledTitleBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;

    @media (max-width: 400px) {
            margin: 0 0 5vh 0;
        }

`
export const SongsBox = styled.div`
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
`
export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: ${LightTheme.first};
    width: 100%;
    
    @media (max-width: 800px) {
        width: 90vw;
        }
    @media (max-width: 400px) {
        width: 100%;
        }
`
export const StyledHeaderTitle = styled.div`
    color: ${LightTheme.second};
    margin-top: 0;
    
    .headerTitle {
        @media (max-width: 3000px) {
            font-size: 5rem;
            margin: 2rem;
        }
        @media (max-width: 1200px) {
            font-size: 4rem;
            margin: 1.5rem;
        }
        @media (max-width: 800px) {
            font-size: 2.5rem;
            margin: 1rem;
        }
        @media (max-width: 450px) {
            font-size: 1.8rem;
            margin: .5rem;
        }
    }
`

export const StyledOption = styled.div<OptionProps>`

    .menuOption { 
        display: block;
        text-align: center;
        width: 100%;
        height: 100%;
        font-weight: bold;
        color: ${(props) => (props.selected ? LightTheme.forth : LightTheme.first)};
        border: solid 3px ${(props) => props.selected ? LightTheme.fifth : LightTheme.fifth};
        border-bottom: 0;
        border-radius: 10px 10px 0 0;
        cursor: pointer;
        box-shadow: ${(props) => (props.selected ? null : `inset 0 -10px 10px -10px #7F8180`)};
        background-color: ${(props) => (props.selected ? LightTheme.first : LightTheme.fifth)};
        
        @media (max-width: 3000px) {
            font-size: 2rem;
            padding: 1.2rem;
            margin-left: 2.5rem;
        }
        @media (max-width: 1200px) {
            font-size: 2.2em;
            padding: 2rem;
            margin-left: 1.6rem;
        }
        @media (max-width: 800px) {
            font-size: 1.2em;
            padding: .8rem;
            margin-left: .8rem;
        }
        @media (max-width: 400px) {
            font-size: .8em;
            padding: .8rem;
            margin-left: .5rem;
        }
    }
    `

export const StyledRoot = styled.div`
    background-color: ${LightTheme.first};
    `

export const StyledMain = styled.div`
    width: 100vw;
    background-color: ${LightTheme.first};
    display: 'flex';
    flex-direction: 'column';
    `
export const StyledSection = styled.div`
    background-color: ${LightTheme.first};
    
    @media (max-width: 3000px) {
        padding: 2.5rem;
    }
    @media (max-width: 800px) {
        padding: 1rem;
    }
    @media (max-width: 400px) {
        padding: .8rem;
    }

    .searchField {
        max-width: 90vw;
    }
`


export const StyledTitle = styled.div`
    color: ${LightTheme.second};

    @media (max-width: 3000px) {
            padding: .5vh 2vw;
        }
    @media (max-width: 1200px) {
            padding: .5vh 2vw;
        }
    @media (max-width: 800px) {
            padding: 1vw 2vw 0 2vw;
        }
    
    .mainTitle {
        cursor: pointer;
        font-size: 10em;
        font-weight: 700;
        
        @media (max-width: 3000px) {
            font-size: 7em;
            padding: 0 2vw 0 2vw;
        }
        @media (max-width: 1200px) {
            font-size: 6.5em;
            padding: 0 2vw 0 2vw;
        }
        @media (max-width: 800px) {
            font-size: 4em;
            padding: 0 2vw 0 2vw;
        }
        @media (max-width: 400px) {
            font-size: 2.3em;
            padding: .5vw 0 0 1vw;
        }
    }

    .mainTitleDetail {
        display: inline;
        font-weight: 900;
        color: ${LightTheme.fifth}
        
    }
    

`

export const StyledSubTitle = styled.div`
    color: ${LightTheme.second};
    
    .mainSubTitle { 
        
        @media (max-width: 3000px) {
            font-size: 2rem;
            padding: 0 2vw 0 18vw;
        }
        @media (max-width: 1200px) {
            font-size: 2.2rem;
            padding: 0 2vw 0 22vw;
        }
        @media (max-width: 800px) {
            font-size: 1.2rem;
            padding: 0 2vw 0 22vw;
        }
        @media (max-width: 400px) {
            font-size: .8rem;
            padding: 0 1vw 0 12vw;
        }

    }
    .mainSubTitleDetail {
        display: inline;
        color: ${LightTheme.fifth};
        filter: drop-shadow(0 0 0.75rem black);
    }

    .mainCredits {
        
        @media (max-width: 3000px) {
            font-size: 1.5rem;
            padding: 0 2vw 4vw 18vw;
        }
        @media (max-width: 1200px) {
            font-size: 1rem;
            padding: 0 2vw 8vw 22vw;
        }
        @media (max-width: 800px) {
            font-size: .8rem;
            padding: 0 2vw 5vw 22vw;
        }
        @media (max-width: 400px) {
            font-size: .5rem;
            padding: 0 1vw 1vw 12vw;
        }

    }

    .mainCreditsDetail {
        display: inline;
        text-decoration: underline;
        color: ${LightTheme.second};

        &:hover {
            cursor: pointer;
        }
    }
`

export const StyledSongBox = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: space-between;
    background-color: ${LightTheme.third}; 
    border-radius: 10px; 
    
    @media (max-width: 3000px) {
        width: 28vw;
        padding: 2vw; 
        margin: 1vh .5vw 1vh .5vw; 
        }
    @media (max-width: 1200px) {
        width: 45vw;
        padding: 1.2rem; 
        margin: 1vh auto 1vh auto; 
        }
    @media (max-width: 800px) {
        width: 90vw;
        padding: 1.2rem; 
        margin: 1vh auto 1vh auto; 
        }
    @media (max-width: 450px) {
        width: 90vw;
        padding: .5rem; 
        margin: 1vh auto 1vh auto; 
        }
`
export const StyledSongTitle = styled.div`

    .mainSongTitle {
        padding: .2rem;
        font-weight: bold;

        @media (max-width: 3000px) {
            font-size: 2.5rem;
        }
        @media (max-width: 1200px) {
            font-size: 2.4rem;
        }
        @media (max-width: 800px) {
            font-size: 1.8rem;
        }
        @media (max-width: 450px) {
            font-size: 1.2rem;
        }
    }
    
    `
export const StyledSongSubTitle = styled.div`
    color: ${LightTheme.sixth}; 
    
    .mainSongSubTitle {
        
        @media (max-width: 3000px) {
            font-size: 1.5rem;
            }
            @media (max-width: 1200px) {
            font-size: 1.6rem;
            }
            @media (max-width: 800px) {
            font-size: 1.2rem;
            }
            @media (max-width: 400px) {
            font-size: .8rem;
            }
        }

`

export const StyledAudioBox = styled.div`
    
    .audioControl {
        
        @media (max-width: 3000px) {
            width: 100%;
        }
        @media (max-width: 1200px) {
            width: 100%;
            padding: 0;
        }
        @media (max-width: 800px) {
            width: 83vw;
            padding: .1rem;
        }
        @media (max-width: 400px) {
            max-width: 82vw;
            padding: .2rem;
        }

    }
`

export const StyledFormBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2vw;
    
    .formInput {
        max-width: 60vw;
        margin: 1vh 1vw;
        padding: 2vh 1vw;
        font-size: 3rem;
        background-color: ${LightTheme.second};
        color: ${LightTheme.first};
        border-radius: 10px;
        border-color: red;
        
        @media (max-width: 1200px) {
            max-width: 90vw;
            padding: 1vh 1vw;
            margin: 1vh 1vw;
        }
        @media (max-width: 800px) {
            max-width: 90vw;
            padding: 1vh 1vw;
            margin: 1vh 1vw;
        }
        @media (max-width: 450px) {
            max-width: 90vw;
            padding: 1vh 1vw;
            margin: 1vh 1vw;
        }

        & .MuiOutlinedInput-root {
            .MuiOutlinedInput-notchedOutline {
            border-color: ${LightTheme.second};
        }
            &.Mui-focused .MuiOutlinedInput-notchedOutline {
                border-color: ${LightTheme.second}; 
        }

  }

        
    }
    
    .formSubmit {
        max-width: 50vw;
        margin: 2.5vh 5vw;
        padding: 3vh;
        font-weight: bold;
        color: black;
        background-color: ${LightTheme.third};
        border-color: ${LightTheme.sixth};
        
        @media (max-width: 450px) {
            max-width: 70vw;
            padding: 1vh 10vw;
            margin: 1vh auto;
        }
        
        &:hover {
            background-color: ${LightTheme.fifth} ;

        }
    }
`

export const inputPropsStyles = {
    fontSize: '2rem'
}
export const inputLabelPropsStyles = {
    fontSize: '1.2rem',
    marginLeft: '40px',
    marginTop: '10px',
    color: LightTheme.sixth,
}