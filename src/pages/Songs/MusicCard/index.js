/* eslint-disable react/prop-types */
import { Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import Grid from '@mui/material/Grid';

export default function MusicCard({ song, onPlay }) {
  return (
    <Grid xs={2} sx={{ padding: '6px' }}>
      <Card
        sx={{
          borderRadius: 2,
          boxShadow: 3,
          height: '180px',
          // background: `center url(${song.cover})`,
        }}
      >
        <IconButton
          onClick={onPlay}
          size={'small'}
          sx={{
            position: 'absolute',
            bottom: 50,
            right: 8,
            backgroundColor: '#1DB954',
            color: 'white',
            '&:hover': { backgroundColor: '#1ed760' },
          }}
        >
          <PlayArrow />
        </IconButton>
        <CardMedia
          sx={{ height: '130px', margin: 0 }}
          component="img"
          image={song.cover}
          alt={song.title}
        />
        <CardContent sx={{ textAlign: 'center', paddingBottom: 4 }}>
          <Typography sx={{ fontSize: '0.7em' }} variant="subtitle1" noWrap>
            {song.title}
          </Typography>
          {song.artist && (
            <Typography sx={{ fontSize: '0.6em' }} variant="body2" color="text.secondary">
              {song.artist}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}
