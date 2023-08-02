import { Song } from '@/app/pages/types/song.interface'
import shouldHaveKnowBetter from '../../public/resources/Jim_Diamond_-_I_Should_Have_Known_Better.mp3'
import eyesWithoutAFace from '../../public/resources/Billy_Idol_-_Eyes Without_A_Face.mp3'
import abba from '../../public/resources/ABBA_-_The_Winner Takes_It_All.mp3'
import adele from '../../public/resources/Adele_-_Someone_Like_You.mp3'
import haveYouEverSeenTheRain from '../../public/resources/Creedence_Clearwater_Revival_-_Have_You_Ever_Seen_The_Rain.mp3'
import chamaleon from '../../public/resources/Culture_Club_-_Karma_Chameleon.mp3'
import eric from '../../public/resources/Eric_Clapton_-_Tears_In_Heaven.mp3'
import downUnder from '../../public/resources/Men_At_Work_-_Down_Under.mp3'
import dontStop from '../../public/resources/Michael_Jackson_-_Dont_Stop Til_You_Get_Enough.mp3'
import cryForHelp from '../../public/resources/Rick_Astley_-_Cry_for_Help.mp3'
import beenLove from '../../public/resources/Roxette_-_It_Must_Have_Been_Love.mp3'
import holdingBackTheYears from '../../public/resources/Simply_Red_-_Holding_Back_The_Years.mp3'
import stayingAlive from '../../public/resources/Bee_Gees_-_Stayin_Alive.mp3'
import aline from '../../public/resources/Christophe_-_Aline.mp3'
import groove from '../../public/resources/Deee_Lite_-_Groove_Is_In_The_Heart.mp3'
import tatu from '../../public/resources/tATu_-_All_The_Things_She_Said.mp3'
import doubleYou from '../../public/resources/Double_You_-_Looking_At My_Girl.mp3'
import startMeUp from '../../public/resources/The_Rolling_Stones_-_Start_Me_Up.mp3'
import wonderwall from '../../public/resources/Oasis_-_Wonderwall.mp3'
import shutUpAndDrive from '../../public/resources/Rihanna_-_Shut_Up_And_Drive.mp3'
import whiterShade from '../../public/resources/Procol_Harum_-_A Whiter_Shade_of_Pale.mp3'
import trueColors from '../../public/resources/Cyndi_Lauper_-_True_Colors.mp3'
import survivor from '../../public/resources/Destinys_Child_-_Survivor.mp3'
import fataMorgana from '../../public/resources/Dissidenten_-_Fata_Morgana.mp3'
import newRules from '../../public/resources/Dua_Lipa_-_New_Rules.mp3'
import evilThatMenDo from '../../public/resources/Iron_Maiden_-_The_Evil_That_Men_Do.mp3'
import darkHorse from '../../public/resources/Katy_Perry_-_Dark_Horse_feat_Juicy_J.mp3'
import pokerFace from '../../public/resources/Lady_Gaga_-_Poker_Face.mp3'
import inTheEnd from '../../public/resources/Linkin_Park_-_In_The_End_Mellen_Gi_and_Tommee_Profitt_Remix.mp3'
import idLoveYouToWantMe from '../../public/resources/Lobo_-_Id_ Love_You_To_Want_Me.mp3'
import rude from '../../public/resources/MAGIC_-_Rude.mp3'
import rideWitMe from '../../public/resources/Nelly_-_Ride_Wit_Me.mp3'
import circles from '../../public/resources/Post_Malone_-_Circles.mp3'
import crazy from '../../public/resources/Seal_-_Crazy.mp3'
import getUpAndBoogie from '../../public/resources/Silver_Convention_-_Get_Up_and_Boogie.mp3'
import linger from '../../public/resources/The_Cranberries_-_Linger.mp3'
import sugarBabyLove from '../../public/resources/The_Rubettes_-_Sugar_Baby_Love.mp3'
import betteDavisEyes from '../../public/resources/Kim_Carnes_-_Bette_Davis_Eyes.mp3'
import sugaSuga from '../../public/resources/Oh_no_I_hope_I _dont_fall_-_Suga_ Suga.mp3'
import blur from '../../public/resources/Blur_-_Song_2.mp3'
import chrisBrownWithYou from '../../public/resources/Chris_Brown_-_With_You.mp3'
import starboy from '../../public/resources/The_Weeknd_-_Starboy_feat_Daft_Punk.mp3'
import weekndStarboy from '../../public/resources/Weeknd_Daft_Punk_-_Starboy.mp3'
import youreBeautiful from '../../public/resources/James_Blunt_-_Youre_Beautiful.mp3'
import ifIWereABoy from '../../public/resources/Beyonce_-_If _I_Were_A_Boy.mp3'
import couldHaveBeenLove from '../../public/resources/Aerosmith_-_What_Could_Have_Been_Love.mp3'
import feels from '../../public/resources/Calvin_Harris_-_Feels.mp3'
import ooopsUp from '../../public/resources/SNAP_-_Ooops_Up.mp3'
import rollin from '../../public/resources/Brave_Girls_-_Rollin.mp3'
import oneCallAway from '../../public/resources/Charlie_Puth_-_One_Call_Away.mp3'
import wontLetYouDown from '../../public/resources/PhD_-_I_Wont_Let_You_Down.mp3'
import allByMyself from '../../public/resources/Celine_Dion_-_All_By_Myself.mp3'
import breakFree from '../../public/resources/Queen_-_I_Want_To_Break_Free.mp3'
import corona from '../../public/resources/Corona_-_The_Rhythm_of_the_Night.mp3'
import canIHoldYou from '../../public/resources/Tracy_Chapman_-_Baby_Can_I_Hold_You.mp3'
import abbaTheWinner from '../../public/resources/ABBA_-_The_Winner_Takes_ItAll.mp3'
import whoCanItBe from '../../public/resources/Men_At_Work_-_Who_Can_It_Be Now.mp3'
import billieJean from '../../public/resources/Michael_Jackson_-_Billie_Jean.mp3'
import takeOnMe from '../../public/resources/aha_-_Take_On_Me.mp3'
import neverGonnaGiveYouUp from '../../public/resources/Rick_Astley -_Never_Gonna_Give_You_Up.mp3'
import noRoots from '../../public/resources/Alice_Merton_-_No_Roots.mp3'
import boss from '../../public/resources/Lil_Pump_-_Boss.mp3'
import withoutYou from '../../public/resources/Mariah_Carey_-_Without_You.mp3'
// import name from '../../public/resources/'


export const songs: Song[] = [
    {
        id: 1,
        name: "Should Have Known Better",
        artist: "Jim Diamond",
        src: shouldHaveKnowBetter,
        trackMessage: "Ai ai ai ai ai ai ai ai ai ai chama o bombeiro! (2x)",
    },
    {
        id: 2,
        name: "Eyes Without a Face",
        artist: "Billy Idol",
        src: eyesWithoutAFace,
        trackMessage: "Fecha os zói e vaaaai... ajudar o peixe!",
    },
    {
        id: 3,
        name: "New Rules",
        artist: "Dua Lipa",
        src: newRules,
        trackMessage: "A falecida peida",
    },
    {
        id: 4,
        name: "Someone Like You",
        artist: "Adele",
        src: adele,
        trackMessage: "A rã desceu de skate",
    },
    {
        id: 5,
        name: "Have You Ever Seen the Rain",
        artist: "Creedence Clearwater Revival",
        src: haveYouEverSeenTheRain,
        trackMessage: "João botou melão no gol",
    },
    {
        id: 6,
        name: "The Evil that Men Do",
        artist: "Iron Maiden",
        src: evilThatMenDo,
        trackMessage: "Tem lugar pra tu lá em Salvadoooor! Tem lugar pra tu lá em Salvador!",
    },
    {
        id: 7,
        name: "Cry For Help",
        artist: "Rick Astley",
        src: cryForHelp,
        trackMessage: "Quando eu nasci meu pai correu, quando eu nasci meu pai correu",
    },
    {
        id: 8,
        name: "Aline",
        artist: "Christophe",
        src: aline,
        trackMessage: "Eu já criei, criei, galinha",
    },
    {
        id: 9,
        name: "Looking at My Girl",
        artist: "Double You",
        src: doubleYou,
        trackMessage: "Gisele é a minha avó, Gisele é a minha avó",
    },
    {
        id: 10,
        name: "True Colors",
        artist: "Cindy Lauper",
        src: trueColors,
        trackMessage: "Parecia o tio Carlos jogando truco",
    },

    {
        id: 11,
        name: "It Must Have Been Love",
        artist: "Roxette",
        src: beenLove,
        trackMessage: "Me mostra o bilau!",
    },
    {
        id: 12,
        name: "Holding Back The Years",
        artist: "Simply Red",
        src: holdingBackTheYears,
        trackMessage: "Frango, pato, whisky, azeite... Ovo de codorna ao leite",
    },
    {
        id: 13,
        name: "Stayin' Alive",
        artist: "Bee Gees",
        src: stayingAlive,
        trackMessage: "Os tênis da Nike, os tênis da Nike, ah, ah, ah, ah, os tênis da Nike, os tênis da Nike",
    },
    {
        id: 14,
        name: "Down Under",
        artist: "Men at Work",
        src: downUnder,
        trackMessage: "Cavalinho na feira a comer",
    },
    {
        id: 15,
        name: "Groove is in the Heart",
        artist: "Deee-Lite",
        src: groove,
        trackMessage: "A vó do Nelson come Nuggets",
    },
    {
        id: 16,
        name: "All the Things She Said",
        artist: "t.A.T.u",
        src: tatu,
        trackMessage: "Onde vi José, onde vi José",
    },
    {
        id: 17,
        name: "Dont Stop Till You Get Enough",
        artist: "Michael Jackson",
        src: dontStop,
        trackMessage: "Que bom, olha a bosta... Tomate e guaraná (2x)",
    },
    {
        id: 18,
        name: "Start me Up",
        artist: "The Rolling Stones",
        src: startMeUp,
        trackMessage: "E o escorpião... E o escorpião magrelo está!",
    },
    {
        id: 19,
        name: "Wonderwall",
        artist: "Oasis",
        src: wonderwall,
        trackMessage: "Filhos do rei Arthur a patinar..",
    },
    {
        id: 20,
        name: "Shut Up and Drive",
        artist: "Rihanna",
        src: shutUpAndDrive,
        trackMessage: "Já chora pen drive (drive drive), chora pen drive! (drive drive) ",
    },
    {
        id: 21,
        name: "A Whiter Shade of Pale",
        artist: "Protocol Harum",
        src: whiterShade,
        trackMessage: "Tio Eduardo cheira peido",
    },
    {
        id: 22,
        name: "Tears In Heaven",
        artist: "Eric Clapton",
        src: eric,
        trackMessage: "Me passou óleo no rêgo...",
    },
    {
        id: 23,
        name: "Survivor",
        artist: "Destiny's Child",
        src: survivor,
        trackMessage: "Ai meu suvaco, que bom suvaco!",
    },
    {
        id: 24,
        name: "Fata Morgana",
        artist: "Dissidenten",
        src: fataMorgana,
        trackMessage: "Se ele é corno, é no sofá! Ele é ele é ele é réplica! (2x)",
    },
    {
        id: 25,
        name: "The Winner Takes it All",
        artist: "ABBA",
        src: abba,
        trackMessage: "Vai lavar seu c*",
    },
    {
        id: 26,
        name: "Karma Chameleon",
        artist: "Culture Club",
        src: chamaleon,
        trackMessage: "Calma calma calma Camilinha... que come angú, que come angú",
    },
    {
        id: 27,
        name: "Dark Horse",
        artist: "Katy Perry feat Juicy J",
        src: darkHorse,
        trackMessage: "Chris cagou em pé",
    },
    {
        id: 28,
        name: "Poker Face",
        artist: "Lady Gaga",
        src: pokerFace,
        trackMessage: "Vovó com a boca fez fofoca no Face",
    },
    {
        id: 29,
        name: "In The End",
        artist: "Linkin Park (Mellen Gi and Tommee Proffit Remix)",
        src: inTheEnd,
        trackMessage: "Atrás do sofá, vem cá no sofá... Vem me ver... Estou me sentindo um merda!",
    },
    {
        id: 30,
        name: "I'd Love You To Want Me",
        artist: "Lobo",
        src: idLoveYouToWantMe,
        trackMessage: "Baby... Allan virou homem",
    },
    {
        id: 31,
        name: "Rude",
        artist: "MAGIC!",
        src: rude,
        trackMessage: "Sete demônios juntaram o pé",
    },
    {
        id: 32,
        name: "Ride Wit Me",
        artist: "Nelly",
        src: rideWitMe,
        trackMessage: "Heeey! Passa o piru moleee! ",
    },
    {
        id: 33,
        name: "Circles",
        artist: "Post Malone",
        src: circles,
        trackMessage: "Eu virei veganooo",
    },
    {
        id: 34,
        name: "Crazy",
        artist: "Seal",
        src: crazy,
        trackMessage: "Vou mandar bater no seu paaai, Vanessa",
    },
    {
        id: 35,
        name: "Get Up and Boogie",
        artist: "Silver Convention",
        src: getUpAndBoogie,
        trackMessage: "Quero hambúrgueeeer, quero hambúrgueeeer",
    },
    {
        id: 36,
        name: "Linger",
        artist: "The Cranberries",
        src: linger,
        trackMessage: "Tinha rato, tinha rato, tinha rato na igreja!",
    },
    {
        id: 37,
        name: "Sugar Baby Love",
        artist: "The Rubettes",
        src: sugarBabyLove,
        trackMessage: "Enxuga beeem bilau, enxuga beem bilaaaau, Ademir!",
    },
    {
        id: 38,
        name: "Bette Davis Eyes",
        artist: "Kim Carnes",
        src: betteDavisEyes,
        trackMessage: "Que que é isso? Chico Anysio?",
    },
    {
        id: 39,
        name: "Oh No I Hope I Don`t Fall",
        artist: "Suga Suga",
        src: sugaSuga,
        trackMessage: "Oh no! AS ROUPA NO SOL!",
    },
    {
        id: 40,
        name: "Song 2",
        artist: "Blur",
        src: blur,
        trackMessage: "Minha lambida é bem melhor uhuuuu! Era pizza, era melhor uhuuu!",
    },
    {
        id: 41,
        name: "With You",
        artist: "Chris Brown",
        src: chrisBrownWithYou,
        trackMessage: "É um ninho de burro... Acariciei um burro",
    },
    {
        id: 42,
        name: "Starboy",
        artist: "The Weeknd feat Daft Punk",
        src: starboy,
        trackMessage: "Sujamo a sala, tu quer que limpa? Sujamo a copa que não limpei",
    },
    {
        id: 43,
        name: "Starboy",
        artist: "The Weeknd feat Daft Punk",
        src: weekndStarboy,
        trackMessage: "Nem vou te dar! Ah ah ah ah ah ah, a mamada do Gustavo",
    },
    {
        id: 44,
        name: "You`re Beautiful",
        artist: "James Blunt",
        src: youreBeautiful,
        trackMessage: "Mãe lava os pente, mãe lava os piolho, é só remédio... Os verme some... Desmaia a minhoca no sabonete",
    },
    {
        id: 45,
        name: "If I Were a Boy",
        artist: "Beyoncé",
        src: ifIWereABoy,
        trackMessage: "Rivaldo é um boi, tem dentadura nos dente!",
    },
    {
        id: 46,
        name: "What Could Have Been Love",
        artist: "Aerosmith",
        src: couldHaveBeenLove,
        trackMessage: "O C* DELE BRILHOU!",
    },
    {
        id: 47,
        name: "Feels",
        artist: "Calvin Harris",
        src: feels,
        trackMessage: "Não me ofende, o que eu te fiz??  Orangotango em três trios",
    },
    {
        id: 48,
        name: "Ooops Up",
        artist: "SNAP!",
        src: ooopsUp,
        trackMessage: "Seu c* só sai de ré, seu c* só sai de ré!",
    },
    {
        id: 49,
        name: "Rollin`",
        artist: "Brave Girls",
        src: rollin,
        trackMessage: "11 semanas já fora de casa, lá em Singapura, eu só vim te coçar",
    },
    {
        id: 50,
        name: "One Call Away",
        artist: "Charlie Puth",
        src: oneCallAway,
        trackMessage: "Chupa manga não",
    },
    {
        id: 51,
        name: "I Won`t Let You Down",
        artist: "PhD",
        src: wontLetYouDown,
        trackMessage: "Aaaah um boleto não! Boleto não! Porqueee?",
    },
    {
        id: 52,
        name: "All By Myself",
        artist: "Céline Dion",
        src: allByMyself,
        trackMessage: "O pai nasceu... no Morumbi",
    },
    {
        id: 53,
        name: "I Want to Break Free",
        artist: "Queen",
        src: breakFree,
        trackMessage: "Anteontem fez frio!",
    },
    {
        id: 54,
        name: "The Rhythm of the Night",
        artist: "Corona",
        src: corona,
        trackMessage: "Jesus humilha Sanatás! Oh nás, oh yeah",
    },
    {
        id: 55,
        name: "Baby Can I Hold You",
        artist: "Tracy Chapman",
        src: canIHoldYou,
        trackMessage: "Baby que amarrou o fio de nylon",
    },
    {
        id: 56,
        name: "The Winner Takes It All",
        artist: "ABBA",
        src: abbaTheWinner,
        trackMessage: "Na linha tem cerol! (tem cerol)",
    },
    {
        id: 57,
        name: "Who Can It Be Now",
        artist: "Men At Work",
        src: whoCanItBe,
        trackMessage: "Nunca bebi não (2x)",
    },
    {
        id: 58,
        name: "Billie Jean",
        artist: "Michael Jackson",
        src: billieJean,
        trackMessage: "Tu queres uma maçã? Hi hii",
    },
    {
        id: 59,
        name: "Take On Me",
        artist: "A-ha",
        src: takeOnMe,
        trackMessage: "A-mi-ga eu não tenho tuuuu",
    },
    {
        id: 60,
        name: "Never Gonna Give You Up",
        artist: "Rick Astley",
        src: neverGonnaGiveYouUp,
        trackMessage: "Leva agora o celular! Errei tio...",
    },
    {
        id: 61,
        name: "No Roots",
        artist: "Alice Merton",
        src: noRoots,
        trackMessage: "Ah, caguei de novo... dei um peido",
    },
    {
        id: 62,
        name: "Boss",
        artist: "Lil Pump",
        src: boss,
        trackMessage: "Já queimei muriçoca, já queimei muriçoca, yeah! ",
    },
    {
        id: 63,
        name: "Without You",
        artist: "Mariah Carey",
        src: withoutYou,
        trackMessage: "Kelly... Me leve alí no Cláudio",
    },
    // {
    //     id: 0,
    //     name: "",
    //     artist: "",
    //     src: fileName,
    //     trackMessage: "",
    // },
]