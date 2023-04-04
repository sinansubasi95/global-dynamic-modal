import { ToastContextProvider } from '@/contexts/ToastContext';
import { ModalContextProvider } from '@/contexts/ModalContext';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ModalContextProvider>
      <ToastContextProvider>
        <Component {...pageProps} />
      </ToastContextProvider>
    </ModalContextProvider>
  )
}
