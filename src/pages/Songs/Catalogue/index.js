/* eslint-disable react/prop-types */
import MusicCard from './../MusicCard';
import Grid from '@mui/material/Grid';

export default function Catalogue({ songs, onSelect }) {
  return (
    <Grid container p={2}>
      {songs.map((song, idx) => (
        <MusicCard key={idx} song={song} onPlay={() => onSelect(song.audio)} />
      ))}
    </Grid>
  );
}
