import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeProvider from "@/theme"
import {ThemeSettings, SettingsProvider} from "@/settings";
// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App({ Component, pageProps }: AppProps) {
  return(
      <SettingsProvider>
          <ThemeProvider>
              <ThemeSettings>
                  <Component {...pageProps} />

              </ThemeSettings>

          </ThemeProvider>

      </SettingsProvider>


      )
}
