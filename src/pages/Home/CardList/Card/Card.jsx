import { Card as MuiCard } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

export default function Card({ pokemon }) {
  return (
    <MuiCard sx={{
      width:(theme) => `calc(
        100% / 5 - 
        ${theme.spacing(2)}
        )`
    }}>
      <CardMedia
        sx={{
          height: 140,
          backgroundSize:'contain'
        }}
        image={ pokemon.sprites.front_default }
        title={ pokemon.name }
      />
      <CardContent>
        <Link href={ `detail/${pokemon.name}`} underline='none' color='inherit'>
          <Typography gutterBottom variant="h5" component="div" align='center' sx={{
            fontFamily: 'Noto Serif Display',
            fontWeight: 'bold'
          }} >
            { pokemon?.name.toUpperCase() }
          </Typography>
        </Link>
      </CardContent>
    </MuiCard>
  )
}