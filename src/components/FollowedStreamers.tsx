import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { TwitchStream } from '@/types/twitch';
import { Users, Play, Flame, Star, Eye } from 'lucide-react';

interface FollowedStreamersProps {
  onSelectStreamer: (stream: TwitchStream) => void;
}

const FollowedStreamers: React.FC<FollowedStreamersProps> = ({ onSelectStreamer }) => {
  // Mock data for popular streamers
  const mockStreamers: TwitchStream[] = [
    {
      id: '1',
      user_id: '1',
      user_login: 'ninja',
      user_name: 'Ninja',
      game_id: '1',
      game_name: 'Fortnite',
      title: 'INSANE FORTNITE GAMEPLAY! NEW SEASON!',
      viewer_count: 45230,
      started_at: '2024-01-15T10:00:00Z',
      thumbnail_url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=320&q=80'
    },
    {
      id: '2',
      user_id: '2',
      user_login: 'shroud',
      user_name: 'shroud',
      game_id: '2',
      game_name: 'Valorant',
      title: 'Ranked Valorant - Road to Radiant',
      viewer_count: 32100,
      started_at: '2024-01-15T09:30:00Z',
      thumbnail_url: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=320&q=80'
    },
    {
      id: '3',
      user_id: '3',
      user_login: 'pokimane',
      user_name: 'Pokimane',
      game_id: '3',
      game_name: 'Just Chatting',
      title: 'Morning Chat & Games!',
      viewer_count: 28500,
      started_at: '2024-01-15T08:00:00Z',
      thumbnail_url: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=320&q=80'
    },
    {
      id: '4',
      user_id: '4',
      user_login: 'xqc',
      user_name: 'xQc',
      game_id: '4',
      game_name: 'Grand Theft Auto V',
      title: 'GTA RP - NoPixel Adventures',
      viewer_count: 67800,
      started_at: '2024-01-15T07:00:00Z',
      thumbnail_url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=320&q=80'
    },
    {
      id: '5',
      user_id: '5',
      user_login: 'summit1g',
      user_name: 'summit1g',
      game_id: '5',
      game_name: 'Counter-Strike 2',
      title: 'CS2 Competitive - Grinding Faceit',
      viewer_count: 19200,
      started_at: '2024-01-15T11:00:00Z',
      thumbnail_url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=320&q=80'
    },
    {
      id: '6',
      user_id: '6',
      user_login: 'lirik',
      user_name: 'LIRIK',
      game_id: '6',
      game_name: 'Variety',
      title: 'Variety Gaming - New Games!',
      viewer_count: 24600,
      started_at: '2024-01-15T12:00:00Z',
      thumbnail_url: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=320&q=80'
    }
  ];

  const formatViewerCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <div className="relative bg-black/80 backdrop-blur-xl border-b border-cyan-500/10 px-8 py-8 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
              <Flame className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                HOT STREAMS
              </h2>
              <p className="text-xs text-orange-300/70 font-medium tracking-wider uppercase">
                Trending Now
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Badge className="bg-gradient-to-r from-red-500/20 to-orange-500/20 text-orange-300 border-orange-400/30 px-3 py-1">
              <Eye className="h-3 w-3 mr-1" />
              6 LIVE
            </Badge>
            <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-400/30 px-3 py-1">
              <Star className="h-3 w-3 mr-1" />
              FEATURED
            </Badge>
          </div>
        </div>
        
        <ScrollArea className="w-full">
          <div className="flex space-x-6 pb-4">
            {mockStreamers.map((stream, index) => (
              <Button
                key={stream.id}
                onClick={() => onSelectStreamer(stream)}
                variant="ghost"
                className="flex-shrink-0 h-auto p-0 bg-transparent hover:bg-white/5 rounded-3xl transition-all duration-500 group relative overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className={`
                  absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl
                  ${index % 3 === 0 ? 'bg-gradient-to-br from-cyan-500/30 to-purple-500/30' : ''}
                  ${index % 3 === 1 ? 'bg-gradient-to-br from-purple-500/30 to-pink-500/30' : ''}
                  ${index % 3 === 2 ? 'bg-gradient-to-br from-pink-500/30 to-orange-500/30' : ''}
                `} />
                
                <div className="relative flex flex-col items-center space-y-4 min-w-[160px] p-6">
                  {/* Avatar with animated ring */}
                  <div className="relative">
                    <div className={`
                      absolute inset-0 rounded-full animate-spin-slow opacity-60
                      ${index % 3 === 0 ? 'bg-gradient-to-r from-cyan-400 to-purple-400' : ''}
                      ${index % 3 === 1 ? 'bg-gradient-to-r from-purple-400 to-pink-400' : ''}
                      ${index % 3 === 2 ? 'bg-gradient-to-r from-pink-400 to-orange-400' : ''}
                      p-1 blur-sm
                    `} />
                    <div className="relative">
                      <Avatar className="h-20 w-20 border-4 border-black/50 group-hover:border-white/20 transition-all duration-300">
                        <AvatarImage 
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${stream.user_login}`} 
                          alt={stream.user_name} 
                        />
                        <AvatarFallback className={`
                          text-white font-black text-lg
                          ${index % 3 === 0 ? 'bg-gradient-to-br from-cyan-500 to-purple-500' : ''}
                          ${index % 3 === 1 ? 'bg-gradient-to-br from-purple-500 to-pink-500' : ''}
                          ${index % 3 === 2 ? 'bg-gradient-to-br from-pink-500 to-orange-500' : ''}
                        `}>
                          {stream.user_name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      
                      {/* Live indicator */}
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full p-2 shadow-lg animate-pulse">
                        <Play className="h-3 w-3 text-white fill-current" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Stream info */}
                  <div className="text-center space-y-2">
                    <p className="text-white font-black text-base group-hover:text-cyan-200 transition-colors tracking-wide">
                      {stream.user_name.toUpperCase()}
                    </p>
                    <p className="text-gray-400 text-xs truncate max-w-[140px] group-hover:text-gray-300 transition-colors font-medium">
                      {stream.game_name}
                    </p>
                    
                    {/* Viewer count with animated background */}
                    <div className="relative">
                      <div className={`
                        absolute inset-0 rounded-full opacity-50 blur-sm
                        ${index % 3 === 0 ? 'bg-gradient-to-r from-cyan-500/40 to-purple-500/40' : ''}
                        ${index % 3 === 1 ? 'bg-gradient-to-r from-purple-500/40 to-pink-500/40' : ''}
                        ${index % 3 === 2 ? 'bg-gradient-to-r from-pink-500/40 to-orange-500/40' : ''}
                      `} />
                      <Badge className={`
                        relative text-white border-0 font-bold px-4 py-1
                        ${index % 3 === 0 ? 'bg-gradient-to-r from-cyan-500/80 to-purple-500/80' : ''}
                        ${index % 3 === 1 ? 'bg-gradient-to-r from-purple-500/80 to-pink-500/80' : ''}
                        ${index % 3 === 2 ? 'bg-gradient-to-r from-pink-500/80 to-orange-500/80' : ''}
                      `}>
                        <Users className="h-3 w-3 mr-1" />
                        {formatViewerCount(stream.viewer_count)}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default FollowedStreamers;