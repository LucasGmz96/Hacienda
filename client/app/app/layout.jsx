import { Inter } from 'next/font/google'

import Navigation from './Components/Navigation'
import Header from './Components/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
       <head>
        <title>SAN EMILIO</title>
       </head>
        <body className={inter.className}>
          <Navigation />
          
          {children}
          </body>
      </html>
    
  )
}

// el layout es el contenedor de todas las paginas