import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeProvider from "@/theme"
import {ThemeSettings, SettingsProvider} from "@/settings";

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
