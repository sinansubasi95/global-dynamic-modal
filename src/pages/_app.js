import { ModalContextProvider } from '@/contexts/ModalContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ModalContextProvider>
      <Component {...pageProps} />
    </ModalContextProvider>
  )
}
