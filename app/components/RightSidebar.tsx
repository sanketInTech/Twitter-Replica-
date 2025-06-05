// 'use client'

import { Search } from 'lucide-react'
// import Image from 'next/image'
import { sampleUsers } from '../data/sampleData'

export default function RightSidebar() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Search Bar - Fixed */}
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Twitter"
            className="w-full bg-gray-900 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Trending Section */}
        <div className="bg-gray-900 rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold mb-4">What&apos;s happening</h2>
          {/* Trending items */}
          <div className="space-y-4">
            <div className="hover:bg-gray-800 p-2 rounded-lg cursor-pointer">
              <p className="text-sm text-gray-400">Trending in Technology</p>
              <p className="font-bold">#AI</p>
              <p className="text-sm text-gray-400">50.5K posts</p>
            </div>
            <div className="hover:bg-gray-800 p-2 rounded-lg cursor-pointer">
              <p className="text-sm text-gray-400">Trending in Sports</p>
              <p className="font-bold">#IPL2024</p>
              <p className="text-sm text-gray-400">120.3K posts</p>
            </div>
          </div>
        </div>

        {/* Who to follow section */}
        <div className="bg-gray-900 rounded-xl p-4">
          <h2 className="text-xl font-bold mb-4">Who to follow</h2>
          {/* Follow suggestions */}
          <div className="space-y-4">
            {sampleUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between hover:bg-gray-800 p-2 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="relative w-10 h-10">
                    {/* <Image
                      src={user.avatar}
                      alt={user.username}
                      fill
                      className="rounded-full object-cover"
                    /> */}
                     {/* Placeholder for image */}
                     <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-sm font-bold">
                       {user.username.charAt(0)}
                     </div>
                  </div>
                  <div>
                    <p className="font-bold">{user.username}</p>
                    <p className="text-sm text-gray-400">{user.handle}</p>
                  </div>
                </div>
                <button className="bg-white text-black px-4 py-1 rounded-full font-bold hover:bg-gray-200">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 