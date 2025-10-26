import React from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Power, Zap, Layers3, Waves } from 'lucide-react';

interface HeaderProps {
  onMuteAll: () => void;
  onTurnOffAll: () => void;
  allMuted: boolean;
  allOff: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMuteAll, onTurnOffAll, allMuted, allOff }) => {
  return (
    <header className="relative bg-black/90 backdrop-blur-2xl border-b border-cyan-500/20 px-8 py-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400" />
      
      <div className="relative flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {/* Logo section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl blur-lg opacity-60 animate-pulse" />
              <div className="relative p-3 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl border border-white/20">
                <Layers3 className="h-7 w-7 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                NEXUS
              </h1>
              <p className="text-xs text-cyan-300/80 font-medium tracking-wider uppercase">
                Multi-Stream Hub
              </p>
            </div>
          </div>
          
          {/* Control buttons */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={onMuteAll}
              className={`
                relative group px-6 py-3 rounded-2xl font-semibold transition-all duration-300 border-2
                ${allMuted 
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 border-red-400/50 text-white shadow-lg shadow-red-500/25' 
                  : 'bg-black/40 border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400/60 hover:text-cyan-200'
                }
              `}
            >
              <div className="flex items-center space-x-2">
                {allMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                <span>{allMuted ? 'UNMUTE ALL' : 'MUTE ALL'}</span>
              </div>
              {!allMuted && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </Button>
            
            <Button
              onClick={onTurnOffAll}
              className={`
                relative group px-6 py-3 rounded-2xl font-semibold transition-all duration-300 border-2
                ${allOff 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 border-green-400/50 text-white shadow-lg shadow-green-500/25' 
                  : 'bg-black/40 border-purple-400/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400/60 hover:text-purple-200'
                }
              `}
            >
              <div className="flex items-center space-x-2">
                <Power className="h-4 w-4" />
                <span>{allOff ? 'POWER ON' : 'POWER OFF'}</span>
              </div>
              {!allOff && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Status indicator */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 px-4 py-2 bg-black/40 rounded-2xl border border-cyan-400/20">
            <Waves className="h-4 w-4 text-cyan-400 animate-pulse" />
            <span className="text-cyan-300 font-medium text-sm">LIVE STREAMING</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-400/30">
            <Zap className="h-4 w-4 text-green-400" />
            <span className="text-green-300 font-medium text-sm">NO AUTH REQUIRED</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;