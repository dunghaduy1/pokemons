import Header from './Header/Header'
import { Container } from '@mui/material'

export default function Layout({ children }) {
  return (
    <>
      <Header/>
      <Container maxWidth="lg">
        { children }
      </Container>
    </>
  )
}
