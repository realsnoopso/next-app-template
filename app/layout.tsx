import { Metadata } from 'next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { OverlayProvider } from '@toss/use-overlay'
import '@/app/globals.css'

import { siteConfig } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'

import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      refetchOnWindowFocus: false,
    },
  },
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable,
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <QueryClientProvider client={queryClient}>
              <OverlayProvider>
                <div className="relative flex min-h-screen flex-col">
                  <div className="flex-1">{children}</div>
                </div>
              </OverlayProvider>
            </QueryClientProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
