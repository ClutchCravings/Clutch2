import React, { useState } from 'react';
import { StreamSlot, TwitchStream } from '@/types/twitch';
import Header from './Header';
import FollowedStreamers from './FollowedStreamers';
import StreamGrid from './StreamGrid';
import { Zap, Target } from 'lucide-react';

const MultiStreamViewer: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  
  // Initialize 6 empty stream slots
  const [streamSlots, setStreamSlots] = useState<StreamSlot[]>(() =>
    Array.from({ length: 6 }, (_, index) => ({
      id: index + 1,
      stream: null,
      isActive: true,
      isMuted: false,
      volume: 50,
      chatVisible: false,
    }))
  );

  const handleSelectStreamer = (stream: TwitchStream) => {
    if (selectedSlot !== null) {
      setStreamSlots(prev => prev.map(slot => 
        slot.id === selectedSlot 
          ? { ...slot, stream, isActive: true, chatVisible: true }
          : slot
      ));
      setSelectedSlot(null);
    } else {
      // Find first empty slot
      const emptySlot = streamSlots.find(slot => !slot.stream);
      if (emptySlot) {
        setStreamSlots(prev => prev.map(slot => 
          slot.id === emptySlot.id 
            ? { ...slot, stream, isActive: true, chatVisible: true }
            : slot
        ));
      }
    }
  };

  const handleSlotClick = (slotId: number) => {
    setSelectedSlot(slotId);
  };

  const handleVolumeChange = (slotId: number, volume: number) => {
    setStreamSlots(prev => prev.map(slot => 
      slot.id === slotId ? { ...slot, volume } : slot
    ));
  };

  const handleMuteToggle = (slotId: number) => {
    setStreamSlots(prev => prev.map(slot => 
      slot.id === slotId ? { ...slot, isMuted: !slot.isMuted } : slot
    ));
  };

  const handleRemoveStream = (slotId: number) => {
    setStreamSlots(prev => prev.map(slot => 
      slot.id === slotId 
        ? { ...slot, stream: null, isActive: true, isMuted: false, volume: 50, chatVisible: false }
        : slot
    ));
  };

  const handleToggleChat = (slotId: number) => {
    setStreamSlots(prev => prev.map(slot => 
      slot.id === slotId ? { ...slot, chatVisible: !slot.chatVisible } : slot
    ));
  };

  const handleToggleActive = (slotId: number) => {
    setStreamSlots(prev => prev.map(slot => 
      slot.id === slotId ? { ...slot, isActive: !slot.isActive } : slot
    ));
  };

  const handleMuteAll = () => {
    const allMuted = streamSlots.every(slot => slot.isMuted || !slot.stream);
    setStreamSlots(prev => prev.map(slot => 
      slot.stream ? { ...slot, isMuted: !allMuted } : slot
    ));
  };

  const handleTurnOffAll = () => {
    const allOff = streamSlots.every(slot => !slot.isActive || !slot.stream);
    setStreamSlots(prev => prev.map(slot => 
      slot.stream ? { ...slot, isActive: !allOff } : slot
    ));
  };

  const allMuted = streamSlots.every(slot => slot.isMuted || !slot.stream);
  const allOff = streamSlots.every(slot => !slot.isActive || !slot.stream);

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(6,182,212,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(168,85,247,0.1),transparent_70%)]" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse opacity-30" />
      
      <div className="relative z-10 flex flex-col h-full">
        <Header 
          onMuteAll={handleMuteAll}
          onTurnOffAll={handleTurnOffAll}
          allMuted={allMuted}
          allOff={allOff}
        />
        
        <FollowedStreamers onSelectStreamer={handleSelectStreamer} />
        
        <StreamGrid
          slots={streamSlots}
          onVolumeChange={handleVolumeChange}
          onMuteToggle={handleMuteToggle}
          onRemoveStream={handleRemoveStream}
          onToggleChat={handleToggleChat}
          onToggleActive={handleToggleActive}
          onSlotClick={handleSlotClick}
        />
        
        {/* Enhanced selection indicator */}
        {selectedSlot && (
          <div className="fixed bottom-8 right-8 z-50">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur-xl opacity-60 animate-pulse" />
              
              {/* Main notification */}
              <div className="relative bg-black/90 backdrop-blur-xl border-2 border-cyan-400/50 text-white px-8 py-4 rounded-3xl shadow-2xl">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-lg tracking-wide">SLOT {selectedSlot} SELECTED</p>
                    <p className="text-cyan-300 text-sm font-medium">Click a streamer to assign</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-4 w-4 text-yellow-400 animate-pulse" />
                    <Zap className="h-3 w-3 text-yellow-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <Zap className="h-2 w-2 text-yellow-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStreamViewer;