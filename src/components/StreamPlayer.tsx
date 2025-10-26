import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { StreamSlot } from '@/types/twitch';
import { 
  Volume2, 
  VolumeX, 
  X, 
  MessageSquare, 
  EyeOff, 
  Users,
  Play,
  Maximize2,
  Zap,
  Activity,
  Hexagon
} from 'lucide-react';

interface StreamPlayerProps {
  slot: StreamSlot;
  onVolumeChange: (slotId: number, volume: number) => void;
  onMuteToggle: (slotId: number) => void;
  onRemoveStream: (slotId: number) => void;
  onToggleChat: (slotId: number) => void;
  onToggleActive: (slotId: number) => void;
}

const StreamPlayer: React.FC<StreamPlayerProps> = ({
  slot,
  onVolumeChange,
  onMuteToggle,
  onRemoveStream,
  onToggleChat,
  onToggleActive,
}) => {
  const formatViewerCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  if (!slot.stream) {
    return (
      <Card className="relative bg-black/60 border-2 border-dashed border-cyan-500/30 h-full backdrop-blur-xl hover:border-cyan-400/60 transition-all duration-500 group overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardContent className="relative p-12 h-full flex items-center justify-center">
          <div className="text-center text-cyan-400/60 group-hover:text-cyan-300 transition-colors">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative p-8 bg-black/40 rounded-3xl border border-cyan-500/20 group-hover:border-cyan-400/40 transition-all duration-300">
                <Hexagon className="h-16 w-16 mx-auto text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </div>
            </div>
            <p className="text-2xl font-black mb-3 tracking-wider">EMPTY SLOT</p>
            <p className="text-sm text-cyan-500/70 font-medium tracking-wide uppercase">Click to Select Stream</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="relative bg-black/80 border border-cyan-500/20 h-full overflow-hidden backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300 group">
      {/* Animated border glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      <div className="relative flex h-full">
        {/* Stream Video Section */}
        <div className={`${slot.chatVisible ? 'flex-[2]' : 'flex-1'} flex flex-col`}>
          {/* Stream Info Header */}
          <div className="p-4 bg-gradient-to-r from-black/90 to-black/70 border-b border-cyan-500/20 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-white font-black text-base truncate tracking-wide">
                    {slot.stream.user_name.toUpperCase()}
                  </h3>
                  <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 font-bold">
                    <Activity className="h-2 w-2 mr-1 animate-pulse" />
                    LIVE
                  </Badge>
                </div>
                <p className="text-cyan-300 text-xs truncate mb-1 font-medium">
                  {slot.stream.title}
                </p>
                <p className="text-purple-300 text-xs font-bold tracking-wider uppercase">
                  {slot.stream.game_name}
                </p>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onToggleActive(slot.id)}
                  className="text-cyan-400 hover:text-white h-10 w-10 p-0 rounded-xl hover:bg-cyan-500/20 transition-all duration-200 border border-cyan-500/20 hover:border-cyan-400/40"
                >
                  {slot.isActive ? <EyeOff className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onRemoveStream(slot.id)}
                  className="text-red-400 hover:text-white h-10 w-10 p-0 rounded-xl hover:bg-red-500/20 transition-all duration-200 border border-red-500/20 hover:border-red-400/40"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Stream Video Area */}
          <div className="flex-1 bg-gradient-to-br from-black to-purple-900/20 relative overflow-hidden">
            {slot.isActive ? (
              <div 
                className="w-full h-full bg-cover bg-center relative"
                style={{ 
                  backgroundImage: `url(${slot.stream.thumbnail_url})`,
                  filter: slot.isMuted ? 'grayscale(70%) brightness(0.7)' : 'none'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                
                {/* Viewer count */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-black/80 backdrop-blur-sm text-cyan-300 border border-cyan-500/30 px-3 py-1 font-bold">
                    <Users className="h-3 w-3 mr-1" />
                    {formatViewerCount(slot.stream.viewer_count)}
                  </Badge>
                </div>
                
                {/* Stream controls overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button
                      size="sm"
                      onClick={() => onMuteToggle(slot.id)}
                      className={`
                        backdrop-blur-sm rounded-xl transition-all duration-200 border-2 font-bold px-4 py-2
                        ${slot.isMuted 
                          ? 'bg-red-500/80 hover:bg-red-600/80 text-white border-red-400/50' 
                          : 'bg-black/80 hover:bg-black/90 text-cyan-300 border-cyan-500/30 hover:border-cyan-400/50'
                        }
                      `}
                    >
                      {slot.isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </Button>
                    <div className="w-32 bg-black/80 backdrop-blur-sm rounded-xl p-3 border border-cyan-500/20">
                      <Slider
                        value={[slot.volume]}
                        onValueChange={(value) => onVolumeChange(slot.id, value[0])}
                        max={100}
                        step={1}
                        className="w-full"
                        disabled={slot.isMuted}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      onClick={() => onToggleChat(slot.id)}
                      className={`
                        backdrop-blur-sm rounded-xl transition-all duration-200 border-2 font-bold px-4 py-2
                        ${slot.chatVisible 
                          ? 'bg-purple-500/80 hover:bg-purple-600/80 text-white border-purple-400/50' 
                          : 'bg-black/80 hover:bg-black/90 text-purple-300 border-purple-500/30 hover:border-purple-400/50'
                        }
                      `}
                    >
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-black/80 hover:bg-black/90 text-cyan-300 border-2 border-cyan-500/30 hover:border-cyan-400/50 backdrop-blur-sm rounded-xl transition-all duration-200 font-bold px-4 py-2"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black to-purple-900/20">
                <div className="text-center text-cyan-400/60">
                  <div className="p-6 bg-black/60 rounded-3xl border border-cyan-500/20 backdrop-blur-sm mb-4">
                    <EyeOff className="h-12 w-12 mx-auto" />
                  </div>
                  <p className="text-lg font-black tracking-wider">STREAM PAUSED</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Chat Panel */}
        {slot.chatVisible && (
          <div className="flex-1 bg-gradient-to-b from-black/90 to-purple-900/30 border-l border-cyan-500/20 flex flex-col backdrop-blur-sm">
            <div className="p-4 border-b border-cyan-500/20 bg-gradient-to-r from-black/80 to-purple-900/40">
              <h4 className="text-white text-sm font-black flex items-center tracking-wider">
                <MessageSquare className="h-4 w-4 mr-2 text-cyan-400" />
                LIVE CHAT
                <Zap className="h-3 w-3 ml-2 text-yellow-400 animate-pulse" />
              </h4>
            </div>
            <div className="flex-1 p-4 overflow-y-auto text-xs space-y-3">
              {/* Enhanced chat messages */}
              {[
                { user: 'CyberNinja', message: 'Insane gameplay! 🔥', color: 'from-cyan-500 to-blue-500' },
                { user: 'QuantumGamer', message: 'PogChamp', color: 'from-purple-500 to-pink-500' },
                { user: 'NeonStreamer', message: 'This is epic!', color: 'from-green-500 to-emerald-500' },
                { user: 'PixelMaster', message: 'What settings?', color: 'from-yellow-500 to-orange-500' },
                { user: 'TechViewer', message: 'First time here!', color: 'from-red-500 to-pink-500' },
              ].map((chat, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-xl bg-black/40 hover:bg-black/60 transition-colors border border-white/5 hover:border-cyan-500/20">
                  <div className={`w-8 h-8 bg-gradient-to-br ${chat.color} rounded-full flex items-center justify-center text-white text-xs font-black border border-white/20`}>
                    {chat.user.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <span className={`font-black text-xs bg-gradient-to-r ${chat.color} bg-clip-text text-transparent`}>
                      {chat.user}:
                    </span>
                    <span className="text-white ml-2 font-medium">{chat.message}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default StreamPlayer;