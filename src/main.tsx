import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './routes'
import { ThemeProvider } from '@mui/material'
import { theme } from './lib/theme/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </StrictMode>,
)
