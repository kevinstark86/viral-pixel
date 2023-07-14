// scroll bar
import 'simplebar-react/dist/simplebar.min.css';

// lightbox
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';

// ----------------------------------------------------------------------

import { CacheProvider, EmotionCache } from '@emotion/react';
// next
import Head from 'next/head';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import {Provider} from "react-redux";
import {store} from "@/redux/store";
// @mui
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// theme
import ThemeProvider from '@/theme';
// utils
import createEmotionCache from '@/utils/createEmotionCache';
// components
import ProgressBar from '@/components/common/progress-bar';
import { ThemeSettings, SettingsProvider } from '@/settings';
import MotionLazyContainer from '@/components/animate/MotionLazyContainer';

// ----------------------------------------------------------------------


const clientSideEmotionCache = createEmotionCache();


type NextPageWithLayout = NextPage & {
    getLayout?: (page: React.ReactElement) => React.ReactNode
}

export interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
    Component: NextPageWithLayout;
}

export default function App(props: MyAppProps) {
    const {Component, pageProps, emotionCache = clientSideEmotionCache} = props;
    const getLayout = Component.getLayout ?? ((page) => page);
  return(
      <Provider store={store}>
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
      </Provider>



      )
}
