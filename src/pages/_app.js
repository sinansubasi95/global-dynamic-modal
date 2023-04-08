import { ToastContextProvider } from '@/contexts/ToastContext';
import { ModalContextProvider } from '@/contexts/ModalContext';
import '@/styles/globals.css'
import { ExperimentContextProvider } from '@/contexts/ExperimentContext';

export default function App({ Component, pageProps }) {
  return (
    <ExperimentContextProvider>
      <ModalContextProvider>
        <ToastContextProvider>
          <Component {...pageProps} />
        </ToastContextProvider>
      </ModalContextProvider>
    </ExperimentContextProvider>
  )
}
