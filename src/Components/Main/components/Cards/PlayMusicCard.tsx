import { PlayArrowRounded } from '@mui/icons-material';
import { Card, CardMedia, Typography, Box, IconButton } from '@mui/material';
import { useState } from 'react';

export default function PlayMusicCard({ title, artist, img }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        bgcolor: '#111',
        color: '#fff',
        width: '100%',
        minWidth: '260px',
        maxWidth: '300px',
        height: '80px',
        textAlign: 'left',
        padding: '8px',
        gap: '16px',
        border: 'none',
        borderRadius: '8px',
        '@media (max-width: 900px)': {
          minWidth: '240px',
        },
        '@media (max-width: 600px)': {
          gap: '12px',
        },
        '@media (max-width: 500px)': {
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
          width: '100%',
          bgcolor: 'transparent',
        },
      }}
    >
      {/* Contenedor de imagen de álbum */}
      <Box
        sx={{
          position: 'relative',
          height: '46px',
          width: '46px',
          borderRadius: '4px',
          overflow: 'hidden',
          '@media (max-width: 500px)':{
            height: 'auto',
            width: '200px',
            borderRadius: '2px',
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Imagen del álbum */}
        <CardMedia
          component="img"
          src={img}
          alt={title}
          sx={{
            width: '100%',
            height: '100%',
            transition: 'opacity 0.3s ease-in-out',
            opacity: isHovered ? 0.3 : 1,
          }}
        />
        
        {/* Icono de reproducción */}
        <IconButton
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            display: isHovered ? 'flex' : 'none',
            bgcolor: 'transparent',
          }}
        >
          <PlayArrowRounded sx={{ fontSize: 32 }} />
        </IconButton>
      </Box>

      {/* Contenido de la canción */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: '#ccc',
            fontSize: '0.85rem',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {artist} • Listen Again
        </Typography>
      </Box>
    </Card>
  );
}
