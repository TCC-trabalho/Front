import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './routes'
import { ThemeProvider } from '@mui/material'
import { theme } from './lib/theme/theme'
import { QueryClientProvider } from '@tanstack/react-query'
import { nexusQueryClient } from './lib/config/axios'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={nexusQueryClient}>
      <ThemeProvider theme={theme}>
        <Toaster richColors position="top-right" />
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
