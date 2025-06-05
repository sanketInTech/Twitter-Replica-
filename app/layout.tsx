import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import RightSidebar from './components/RightSidebar'
import { AuthProvider } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Twitter Clone',
  description: 'A Twitter clone built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <AuthProvider>
          <div className="max-w-7xl mx-auto flex">
            <div className="w-[10%]"></div>
            
            <div className="fixed top-0 left-[10%] h-screen w-[20%] border-r border-dotted border-gray-700 z-20 bg-black">
              <Navigation />
            </div>

            <div className="flex-1 flex" style={{ marginLeft: '20%' }}>
               
                <div className="w-[60%] border-r border-dotted border-gray-700">
                  {children}
                </div>
                <div className="w-4"></div>
                <div className="w-[40%]">
                  <RightSidebar />
                </div>
              
            </div>

             <div className="w-[10%]"></div>

          </div>
        </AuthProvider>
      </body>
    </html>
  )
} 