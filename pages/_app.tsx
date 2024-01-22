import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import {NextUIProvider} from "@nextui-org/system";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
      <Component {...pageProps}/>
      <Analytics />
      <SpeedInsights />
      </NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  )
}
