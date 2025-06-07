'use client'

import { FaRegComment, FaRegHeart, FaRetweet } from 'react-icons/fa'
import { FaRegChartBar } from 'react-icons/fa'
import { FaRegBookmark, FaShare } from 'react-icons/fa'

interface TweetInteractionsProps {
  _postId: string
  initialLikes: string
  initialRetweets: string
  initialReplies: string
}

export default function TweetInteractions({
  _postId,
  initialLikes,
  initialRetweets,
  initialReplies,
}: TweetInteractionsProps) {
  return (
    <div className="flex justify-between mt-4 max-w-md">
      <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 transition-colors">
        <FaRegComment className="h-5 w-5" />
        <span>{initialReplies}</span>
      </button>
      
      <button className="flex items-center space-x-2 text-gray-500 hover:text-green-400 transition-colors">
        <FaRetweet className="h-5 w-5" />
        <span>{initialRetweets}</span>
      </button>
      
      <button className="flex items-center space-x-2 text-gray-500 hover:text-pink-400 transition-colors">
        <FaRegHeart className="h-5 w-5" />
        <span>{initialLikes}</span>
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
  )
} 