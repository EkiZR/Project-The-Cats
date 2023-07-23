import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const MediaControlCard = () => {
  const theme = useTheme();
  const [currentSong, setCurrentSong] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const songs = [
    {
      title: 'Viva La Vida',
      artist: 'Coldplay',
      audio: 'images/Coldplay.mp3',
      cover: 'https://media.discordapp.net/attachments/1032643311267221517/1132637188417409125/VivaLaVida.png?width=250&height=250'
    },
    {
      title: 'Shape Of You',
      artist: 'Ed Sheeran',
      audio: 'images/ShapeOfYou.mp3', 
      cover: 'https://media.discordapp.net/attachments/1032643311267221517/1132639959937978438/Shape_Of_You_28Official_Single_Cover29_by_Ed_Sheeran.png?width=375&height=375'
    },
    {
      title: 'Terhebat',
      artist: 'Coboy Junior',
      audio: 'images/Terhebat.mp3',
      cover: 'https://media.discordapp.net/attachments/1032643311267221517/1132640297667530842/ab67616d0000b27312acd55333b9c705f0ab818c.png?width=701&height=701'
    }
  ];

  const audioRef = React.useRef(null);

  const playSong = () => {
    if (isPlaying) {
      pauseSong();
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleSongEnd = () => {
    setIsPlaying(false);
  };

  const nextSong = () => {
    setCurrentSong((prevSong) => (prevSong === songs.length - 1 ? 0 : prevSong + 1));
    pauseSong();
  };

  const previousSong = () => {
    setCurrentSong((prevSong) => (prevSong === 0 ? songs.length - 1 : prevSong - 1));
    pauseSong();
  };

  return (
    <Card sx={{ display: 'flex' }} className='z-10' id='CardMedia'>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={songs[currentSong].cover}
        alt="Music Cover" 
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }} >
        <CardContent sx={{ flex: '1 0 auto', pb: '0vh', pt: 1.2 }}>

          <Typography component="div" variant="" id='TitleSong'>
            {songs[currentSong].title}
          </Typography>
          <Typography variant="subtitle1" component="div" id='ArtistSong'>
            {songs[currentSong].artist}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous" onClick={previousSong} color="inherit">
            {theme.direction === 'rtl=' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause" onClick={playSong} color="inherit">
            {isPlaying ? (
              <PauseIcon sx={{ height: 38, width: 38 }} />
            ) : (
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            )}
          </IconButton>
          <IconButton aria-label="next" onClick={nextSong}  color="inherit">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <audio
        ref={audioRef}
        src={songs[currentSong].audio}
        onEnded={handleSongEnd}
      ></audio>
    </Card>
  );
};

export default MediaControlCard;
