import './globals.css'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import Providers from './providers'
import Navigation from './components/Navigation'
import RightSidebar from './components/RightSidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Twitter Clone',
  description: 'A Twitter clone built with Next.js',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Providers>
          {/* Fixed Left Empty Space - 10% */}
          <div className="fixed h-screen w-[10vw] left-0 top-0"></div>

          {/* Fixed Left Sidebar - 20% */}
          <div className="fixed h-screen w-[20vw] left-[10vw] top-0">
            <Navigation />
          </div>

          {/* Scrollable Content Area: Main Content (40%) + Right Sidebar (20%) + Right Empty Space (10%) */}
          <div className="ml-[30vw] flex h-screen overflow-y-auto w-[70vw]">
            {/* Main Content - 40% */}
            <main className="w-[40vw] border-x border-gray-800 flex-shrink-0">
              {children}
            </main>

            {/* Right Sidebar - 20% */}
            <div className="w-[20vw] flex-shrink-0">
              <RightSidebar />
            </div>

            {/* Right empty space - 10% */}
            <div className="w-[10vw] flex-shrink-0"></div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
