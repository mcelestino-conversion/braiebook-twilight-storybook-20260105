import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'the twilight storybook',
  description: 'an interactive, atmospheric storybook web app inspired by the twilight zone, featuring eerie effects, animated transitions, and immersive storytelling experiences.',
  keywords: ['web', 'app'],
  authors: [{ name: 'DUDE X Builder' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
