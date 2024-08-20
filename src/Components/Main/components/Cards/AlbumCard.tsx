import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';

const Widget = styled('div')(() => ({
  borderRadius: 16,
  width: 343,
  maxWidth: '100%',
  position: 'relative',
}));

const CoverImage = styled('div')({
  width: 100,
  height: 100,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
});

export default function AlbumCard({title, artist, img}) {
  return (
    <Box sx={{ 
      width: '200px', 
      overflow: 'hidden',
      '@media (max-width:1300px)': {
        maxWidth: '200px',
        width: '100%',
      } 
      }}>
      <Widget>
        <Box 
          sx={{ display: 'flex', alignItems: 'start', flexDirection: 'column' }}
        >

          <CoverImage sx={{width: '100%', height:'auto'}}>
            <img
              alt={`${title} - Album by ${artist}`}
              src={img}
            />

            <IconButton
              size='small'
              sx={{ position: 'absolute', right: 16, top: 150, bgcolor: '#9999', ':hover':{bgcolor: '#000', color:'#fff'}, transition: 'all 0.4s' }}
            >
              <PlayArrowRounded/>
            </IconButton>

          </CoverImage>

          <Typography variant='h6'>{title}</Typography>
          <Typography variant='overline'>Album - {artist}</Typography>
        </Box>
      </Widget>
    </Box>
  );
}
