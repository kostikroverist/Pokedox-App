import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PokemonProvider } from './context/PokemonContext.tsx'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PokemonProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </PokemonProvider>
  </React.StrictMode>,
)
