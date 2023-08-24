import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Detail() {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    const getPokemon = async() => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      setPokemon(res.data)
    }
    getPokemon()
  }, [])

  return (
    <>
      <h2>Detail</h2>
      <Box>
        { pokemon.name }
      </Box>
    </>
  )
}
