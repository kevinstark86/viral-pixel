import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeProvider from "@/theme"
import {ThemeSettings, SettingsProvider} from "@/settings";
// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {NextPage} from "next";
import {CacheProvider, EmotionCache} from "@emotion/react";
import createEmotionCache from "@/utils/createEmotionCache";

// components
import ProgressBar from "@/components/common/progress-bar";
import MotionLazyContainer from "@/components/animate/MotionContainer"


const clientSideEmotionCache = createEmotionCache();


type NextPageWithLayout = NextPage & {
    getLayout?: (page: React.ReactElement) => React.ReactNode
}

export interface AppWithProps extends AppProps {
    emotionCache?: EmotionCache;
    Component: NextPageWithLayout;
}

export default function App(props: AppWithProps) {
    const {Component, pageProps, emotionCache = clientSideEmotionCache} = props;
    const getLayout = Component.getLayout ?? ((page) => page);
  return(
      <CacheProvider value={emotionCache}>
          <SettingsProvider>
              <ThemeProvider>
                  <ThemeSettings>
                      <MotionLazyContainer>
                          <ProgressBar/>
                          {getLayout(<Component {...pageProps} />)}

                      </MotionLazyContainer>


                  </ThemeSettings>

              </ThemeProvider>

          </SettingsProvider>
      </CacheProvider>



      )
}
