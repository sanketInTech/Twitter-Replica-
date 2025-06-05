import { User, Post } from '../types'

export const sampleUsers: User[] = [
  {
    id: '1',
    username: 'IPL_Updates',
    handle: '@ipl_live',
    bio: 'Official IPL updates and live match coverage',
    avatar: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=256&h=256&q=80',
    followers: '2.5M',
    following: '500',
  },
  {
    id: '2',
    username: 'EV_Market',
    handle: '@ev_insights',
    bio: 'Electric Vehicle market analyst | Clean energy advocate',
    avatar: 'https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg',
    followers: '1.2M',
    following: '1.5K',
  },
  {
    id: '3',
    username: 'Tom Cruise',
    handle: '@tomcruise',
    bio: 'Actor | Producer | Stunt Performer',
    avatar: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&h=256&facepad=2',
    followers: '5.8M',
    following: '200',
  },
]

export const samplePosts: Post[] = [
  {
    id: '1',
    author: sampleUsers[0],
    content: '🏆 RCB held its first title in 18 years, made history! #IPL2025 #RCB\n\nHere\'s a look at Royal Challengers Bangalore (RCB):\nKnown for their passionate fanbase and star-studded line-ups.\nThey finally lifted the trophy in a thrilling IPL 2025 season!\nAlways a team to watch out for in the league.',
    timestamp: '2h',
    likes: '60.1K',
    retweets: '20.3K',
    replies: '8.2K',
  },
  {
    id: '2',
    author: sampleUsers[1],
    content: '🚗 Tesla announces new Gigafactory in India!\n\nExpected to create 10,000+ jobs and produce 500,000 EVs annually. This is a game-changer for the Indian EV market. #TeslaIndia #EVMarket',
    timestamp: '5h',
    likes: '28.7K',
    retweets: '8.9K',
    replies: '3.2K',
  },
  {
    id: '3',
    author: sampleUsers[2],
    content: '🎬 Mission: Impossible 8 - Dead Reckoning Part Two\n\nJust wrapped up filming the most challenging stunt sequence of my career. You won\'t believe what we\'ve done this time! #MissionImpossible #MI8',
    timestamp: '1d',
    likes: '1.2M',
    retweets: '450K',
    replies: '89K',
  },
] 