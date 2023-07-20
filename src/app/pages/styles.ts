import styled from "styled-components"

export const LightTheme = {
    first: "#EB8D24",
    second: "#F0EED7",
    third: "#E3E8D1",
    forth: "#D6E2CC",
    fifth: "#CADDC7",
    sixth: "#7F8180",
    seventh: "#959696",
}
export const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const STitle = styled.div`
    color: ${LightTheme.second};
    padding: 5vw 5vw 0 5vw;
    
    .mainTitle {
        font-size: 6em;
        font-weight: 700;
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

    }
    .mainSubTitleDetail {
        display: inline;
        color: ${LightTheme.seventh};
        filter: drop-shadow(0 0 0.75rem white);
    }
`
