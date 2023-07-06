import '@styles/globals.css';

//importing Component
import Nav from '@components/Nav';


export const metadata = {
  title: 'soundx-creator',
  description: 'Discover and share Powereful AI prompt',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-neutral-950'>
        <div className='main'>
          <div className='gradient' />
        </div>
      <main className='app'>
        <Nav/>
        {children}
      </main>
      </body>
    </html>
  )
}
