import '@styles/globals.css';

export const metadata = {
  title: 'sx-creator',
  description: 'Discover and share Powereful AI prompt',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className='bg-neutral-950'>
    <main className='app'>
      {children}
    </main>
    </body>
  </html>
  )
}