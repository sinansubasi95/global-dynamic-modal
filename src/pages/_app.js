import { ToastContextProvider } from '@/contexts/ToastContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ToastContextProvider>
      <Component {...pageProps} />
    </ToastContextProvider>
  )
}
