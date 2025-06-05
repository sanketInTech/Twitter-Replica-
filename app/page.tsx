// 'use client'

import { samplePosts } from './data/sampleData'
import { Post } from './types'
// import Image from 'next/image'
import { FaRegComment, FaRetweet, FaRegHeart, FaRegChartBar, FaRegBookmark, FaShare } from 'react-icons/fa'
import { BsImage, BsEmojiSmile, BsGeoAlt } from 'react-icons/bs'
import { BiPoll } from 'react-icons/bi'
import { MdGif } from 'react-icons/md'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="sticky top-0 bg-black bg-opacity-80 backdrop-blur-md z-10 border-b border-gray-800">
        <div className="px-6 py-3 max-w-xl mx-auto">
          <h1 className="text-xl font-bold text-white">Home</h1>
        </div>
      </div>

      {/* Post Creation */}
      <div className="sticky top-16 z-10 border-b border-gray-800 bg-black px-6 py-4 max-w-xl mx-auto">
        <div className="flex space-x-4">
          <div className="relative w-12 h-12">
            {/* <Image
              src="https://picsum.photos/200/200?random=4"
              alt="Your profile"
              fill
              className="rounded-full object-cover"
            /> */}
             {/* Placeholder for image */}
             <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-sm font-bold">
               YOU
             </div>
          </div>
          
          <div className="flex-1">
            <div className="border-b border-gray-800 pb-4">
              <input
                type="text"
                placeholder="What is happening?!"
                className="w-full bg-transparent text-white text-xl placeholder-gray-500 outline-none py-2"
              />
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex space-x-2">
                <button className="hover:bg-blue-400/10 p-2 rounded-full transition-colors">
                  <BsImage className="w-5 h-5 text-blue-400" />
                </button>
                <button className="hover:bg-blue-400/10 p-2 rounded-full transition-colors">
                  <MdGif className="w-5 h-5 text-blue-400" />
                </button>
                <button className="hover:bg-blue-400/10 p-2 rounded-full transition-colors">
                  <BiPoll className="w-5 h-5 text-blue-400" />
                </button>
                <button className="hover:bg-blue-400/10 p-2 rounded-full transition-colors">
                  <BsEmojiSmile className="w-5 h-5 text-blue-400" />
                </button>
                <button className="hover:bg-blue-400/10 p-2 rounded-full transition-colors">
                  <BsGeoAlt className="w-5 h-5 text-blue-400" />
                </button>
              </div>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="max-w-xl mx-auto">
        {samplePosts.map((post: Post) => (
          <div key={post.id} className="p-5 bg-black rounded-2xl shadow border border-gray-800 hover:bg-gray-900/60 transition-colors mb-4">
            <div className="flex space-x-4">
              <div className="relative w-12 h-12">
                {/* <Image
                  src={post.author.avatar}
                  alt={post.author.username}
                  fill
                  className="rounded-full object-cover"
                /> */}
                 {/* Placeholder for image */}
                 <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-sm font-bold">
                   {post.author.username.charAt(0)}
                 </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-white">{post.author.username}</span>
                  <span className="text-gray-500">{post.author.handle}</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500">{post.timestamp}</span>
                </div>
                <p className="text-white mt-2 whitespace-pre-line text-base">{post.content}</p>
                <div className="flex justify-between mt-4 max-w-md">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 transition-colors">
                    <FaRegComment />
                    <span>{post.replies}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-green-400 transition-colors">
                    <FaRetweet />
                    <span>{post.retweets}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-pink-400 transition-colors">
                    <FaRegHeart />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 transition-colors">
                    <FaRegChartBar />
                  </button>
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-blue-400 transition-colors">
                      <FaRegBookmark />
                    </button>
                    <button className="text-gray-500 hover:text-blue-400 transition-colors">
                      <FaShare />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 