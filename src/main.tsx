// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
  {/* <React.StrictMode> */}
    <App />
    <ReactQueryDevtools />
  {/* </React.StrictMode>, */}
  </QueryClientProvider>
)
