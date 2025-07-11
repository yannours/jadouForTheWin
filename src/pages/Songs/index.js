import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './customPlayer.css';
import DefaultNavbar from '../../examples/Navbars/DefaultNavbar';
import routes from '../../routes';
import Catalogue from './Catalogue';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import bgImage from '../../assets/images/jadou_g_m.png';
import Container from '@mui/material/Container';
import MKBox from '../../components/MKBox';
import adieuMonHommeCover from '../../assets/covers/AdieuMonHomme.jpg';
import adieuMonHommeAudio from '../../assets/audios/AdieuMonHomme.m4a';
import AnotherLoveCover from '../../assets/covers/AnotherLove.png';
import AnotherLoveAudio from '../../assets/audios/AnotherLove.mp3';
import CherryWineCover from '../../assets/covers/CherryWine.jpg';
import CherryWineAudio from '../../assets/audios/CherryWine.mp3';
import DisQuandReviendrasTuCover from '../../assets/covers/DisQuandReviendrasTu.jpg';
import DisQuandReviendrasTuAudio from '../../assets/covers/DisQuandReviendrasTu.jpg';
import DREAMSCover from '../../assets/covers/DREAMS.png';
import DREAMSAudio from '../../assets/audios/DREAMS.mp3';
import EverythingMattersCover from '../../assets/covers/EverythingMatters.jpg';
import EverythingMattersAudio from '../../assets/audios/EverythingMatters.mp3';

function Songs() {
  const [currentAudio, setCurrentAudio] = useState(null),
    songs = [
      {
        title: 'Adieu mon homme',
        artist: 'Pomme',
        cover: adieuMonHommeCover,
        audio: adieuMonHommeAudio,
      },
      {
        title: 'Another Love',
        artist: 'Tom Odell',
        cover: AnotherLoveCover,
        audio: AnotherLoveAudio,
      },
      {
        title: 'Cherry Wine',
        artist: 'Hozier',
        cover: CherryWineCover,
        audio: CherryWineAudio,
      },
      {
        title: 'DisQuandReviendrasTu',
        artist: 'Barbara',
        cover: DisQuandReviendrasTuCover,
        audio: DisQuandReviendrasTuAudio,
      },
      {
        title: 'DREAMS',
        artist: 'Fleatwood Mac',
        cover: DREAMSCover,
        audio: DREAMSAudio,
      },
      {
        title: 'Everything Matters',
        artist: 'Aurora',
        cover: EverythingMattersCover,
        audio: EverythingMattersAudio,
      },
      {
        title: "Hope There's Someone",
        artist: 'The Beatles',
        cover: '/covers/HopeTheresSomeone.jpg',
        audio: '/audios/HopeTheresSomeone.mp3',
      },
      {
        title: 'Let It Be',
        artist: 'The Beatles',
        cover: '/covers/letitbe.jpg',
        audio: '/audios/letitbe.mp3',
      },
      {
        title: 'Let It Be',
        artist: 'The Beatles',
        cover: '/covers/letitbe.jpg',
        audio: '/audios/letitbe.mp3',
      },
      {
        title: 'Let It Be',
        artist: 'The Beatles',
        cover: '/covers/letitbe.jpg',
        audio: '/audios/letitbe.mp3',
      },
      {
        title: 'Let It Be',
        artist: 'The Beatles',
        cover: '/covers/letitbe.jpg',
        audio: '/audios/letitbe.mp3',
      },
      {
        title: 'Let It Be',
        artist: 'The Beatles',
        cover: '/covers/letitbe.jpg',
        audio: '/audios/letitbe.mp3',
      },
      {
        title: 'Let It Be',
        artist: 'The Beatles',
        cover: '/covers/letitbe.jpg',
        audio: '/audios/letitbe.mp3',
      },
      // Ajoute d'autres morceaux ici
    ];

  console.log(currentAudio);

  return (
    <>
      <DefaultNavbar routes={routes} light={false} />
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients['dark'] ? gradients['dark'].main : gradients.info.main, 0.35),
              rgba(gradients['dark'] ? gradients['dark'].main : gradients.info.main, 0.35)
            )}, url(${bgImage})`,
          // backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            sx={{
              marginTop: 8,
              backdropFilter: 'blur(8px)',
              background: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              borderRadius: '12px',
              maxHeight: '70vh',
              overflowY: 'scroll',
              overflowX: 'hidden',
            }}
          >
            <Catalogue songs={songs} onSelect={setCurrentAudio} />
          </Grid>
        </Container>
      </MKBox>
      <div className="audio-player-container">
        <AudioPlayer
          src={currentAudio}
          // autres props
          autoPlayAfterSrcChange={true}
        />
      </div>
    </>
  );
}

export default Songs;
