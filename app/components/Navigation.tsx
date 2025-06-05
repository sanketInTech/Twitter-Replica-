import Link from 'next/link'
import { FaHome, FaUser, FaBell, FaEnvelope, FaBookmark, FaList, FaHashtag, FaEllipsisH } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const Navigation = () => {
  const menuItems = [
    { icon: FaHome, label: 'Home', href: '/' },
    { icon: FaHashtag, label: 'Explore', href: '/explore' },
    { icon: FaBell, label: 'Notifications', href: '/notifications' },
    { icon: FaEnvelope, label: 'Messages', href: '/messages' },
    { icon: FaBookmark, label: 'Bookmarks', href: '/bookmarks' },
    { icon: FaList, label: 'Lists', href: '/lists' },
    { icon: FaUser, label: 'Profile', href: '/profile' },
    { icon: FaEllipsisH, label: 'More', href: '/more' },
  ]

  return (
    <nav className="h-screen flex flex-col justify-between p-4">
      {/* Fixed Header */}
      <div>
        <div className="flex items-center space-x-2 mb-8">
          <FaTwitter className="h-8 w-8 text-white" />
          <span className="text-xl font-bold">Twitter</span>
        </div>

        {/* Navigation Items */}
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center space-x-4 p-3 hover:bg-gray-900 rounded-full transition-colors"
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xl">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Tweet Button */}
        <button className="w-full mt-4 bg-blue-500 text-white rounded-full py-3 font-bold hover:bg-blue-600 transition-colors">
          Tweet
        </button>
      </div>

      {/* Profile Section - Fixed at bottom */}
      <div className="mt-auto -mt-2">
        <div className="flex items-center space-x-4 p-3 hover:bg-gray-800 rounded-full cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gray-700"></div>
          <div className="flex-1">
            <div className="font-bold text-white">Sanket_01</div>
            <div className="text-gray-400">@sanketdesai</div>
          </div>
          <FaEllipsisH className="w-5 h-5 text-white" />
        </div>
      </div>
    </nav>
  )
}

export default Navigation 