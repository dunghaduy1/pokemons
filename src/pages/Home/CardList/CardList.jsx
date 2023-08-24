import { Box } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Card from './Card/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { POKEMON_QUANTITY } from '~/utils/constant'

export default function CardList() {
  const [pokemons, setPokemons] = useState([])
  const [total, setTotal] = useState()
  const [page, setPage] = useState(1)
  const limit = POKEMON_QUANTITY
  const offset = (page - 1 ) * limit

  const handleChange = (event, value) => {
    setPage(value)
  }

  useEffect(() => {
    const getPokemon = async() => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      setTotal(res.data.count)
      res.data.results.forEach(async (item) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
        setPokemons((p) => [...p, poke.data])
      })
    }
    getPokemon()

    return () => {
      setPokemons([])
    }
  }, [page])

  return (
    <Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'end',
        mb:2
      }}>
        <Stack spacing={2}>
          <Pagination count={ Math.ceil(total / limit) } size="small" page={page} onChange={handleChange} />
        </Stack>

      </Box>
      <Box sx={{
        display: 'flex',
        gap:2,
        flexWrap:'wrap'
      }}>
        { pokemons.map((pokemon, index) => <Card key={index} pokemon={pokemon} />)}
      </Box>

    </Box>
  )
}
