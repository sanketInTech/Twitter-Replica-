import Link from 'next/link'
import { FaHome, FaUser, FaBell, FaEnvelope, FaBookmark, FaList, FaHashtag } from 'react-icons/fa'

const Sidebar = () => {
  const menuItems = [
    { icon: FaHome, label: 'Home', href: '/' },
    { icon: FaHashtag, label: 'Explore', href: '/explore' },
    { icon: FaBell, label: 'Notifications', href: '/notifications' },
    { icon: FaEnvelope, label: 'Messages', href: '/messages' },
    { icon: FaBookmark, label: 'Bookmarks', href: '/bookmarks' },
    { icon: FaList, label: 'Lists', href: '/lists' },
    { icon: FaUser, label: 'Profile', href: '/profile' },
  ]

  return (
    <div className="w-64 h-screen border-r border-gray-200 p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-500">Twitter Clone</h1>
      </div>
      
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center space-x-4 p-3 hover:bg-gray-100 rounded-full transition-colors"
          >
            <item.icon className="w-6 h-6" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <button className="w-full mt-4 bg-blue-500 text-white rounded-full py-3 hover:bg-blue-600 transition-colors">
        Tweet
      </button>
    </div>
  )
}

export default Sidebar 