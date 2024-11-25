import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoContextProvider } from './context/TodoContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
);
