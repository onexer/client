import '@/styles/globals.css';
import { TranslationProvider } from '@acme/translations';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TranslationProvider>
      <Component {...pageProps} />
    </TranslationProvider>
  );
}
