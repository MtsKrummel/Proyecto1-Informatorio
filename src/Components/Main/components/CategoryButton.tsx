import { Button } from '@mui/material'

export default function CategoryButton({children}) {
  return (
    <Button 
    variant="contained" 
    sx={{background: '#282828', ":hover":{bgcolor: '#ffff', color:'#000'}}}
    >
      {children}
    </Button>
  )
}
