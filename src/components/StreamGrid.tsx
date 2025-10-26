import React from 'react';
import { StreamSlot, TwitchStream } from '@/types/twitch';
import StreamPlayer from './StreamPlayer';

interface StreamGridProps {
  slots: StreamSlot[];
  onVolumeChange: (slotId: number, volume: number) => void;
  onMuteToggle: (slotId: number) => void;
  onRemoveStream: (slotId: number) => void;
  onToggleChat: (slotId: number) => void;
  onToggleActive: (slotId: number) => void;
  onSlotClick: (slotId: number) => void;
}

const StreamGrid: React.FC<StreamGridProps> = ({
  slots,
  onVolumeChange,
  onMuteToggle,
  onRemoveStream,
  onToggleChat,
  onToggleActive,
  onSlotClick,
}) => {
  return (
    <div className="flex-1 p-8 bg-gradient-to-br from-black via-purple-900/10 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(236,72,153,0.05),transparent_50%)]" />
      
      {/* Grid container */}
      <div className="relative grid grid-cols-2 grid-rows-3 gap-8 h-full">
        {slots.map((slot, index) => {
          // Define unique glow colors for each slot
          const glowColors = [
            'shadow-cyan-500/20 hover:shadow-cyan-500/40',
            'shadow-purple-500/20 hover:shadow-purple-500/40', 
            'shadow-pink-500/20 hover:shadow-pink-500/40',
            'shadow-green-500/20 hover:shadow-green-500/40',
            'shadow-yellow-500/20 hover:shadow-yellow-500/40',
            'shadow-red-500/20 hover:shadow-red-500/40'
          ];

          return (
            <div 
              key={slot.id} 
              className={`
                min-h-0 transition-all duration-700 hover:scale-[1.02] relative group
                ${!slot.stream ? 'cursor-pointer' : ''}
                ${glowColors[index]}
                hover:shadow-2xl hover:z-10
              `}
              onClick={() => !slot.stream && onSlotClick(slot.id)}
            >
              {/* Slot number indicator */}
              <div className="absolute -top-3 -left-3 z-20 w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-black text-sm border-2 border-black/50 shadow-lg">
                {slot.id}
              </div>
              
              {/* Hover glow effect */}
              <div className={`
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10
                ${index === 0 ? 'bg-gradient-to-br from-cyan-500/30 to-purple-500/30' : ''}
                ${index === 1 ? 'bg-gradient-to-br from-purple-500/30 to-pink-500/30' : ''}
                ${index === 2 ? 'bg-gradient-to-br from-pink-500/30 to-red-500/30' : ''}
                ${index === 3 ? 'bg-gradient-to-br from-green-500/30 to-emerald-500/30' : ''}
                ${index === 4 ? 'bg-gradient-to-br from-yellow-500/30 to-orange-500/30' : ''}
                ${index === 5 ? 'bg-gradient-to-br from-red-500/30 to-pink-500/30' : ''}
              `} />
              
              <StreamPlayer
                slot={slot}
                onVolumeChange={onVolumeChange}
                onMuteToggle={onMuteToggle}
                onRemoveStream={onRemoveStream}
                onToggleChat={onToggleChat}
                onToggleActive={onToggleActive}
              />
            </div>
          );
        })}
      </div>
      
      {/* Grid overlay pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
    </div>
  );
};

export default StreamGrid;