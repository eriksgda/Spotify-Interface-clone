import { Mic2, Volume2, List, MonitorSpeaker, Maximize2 } from 'lucide-react';

export function OptionsButton(){
  return(
    <div className='flex items-center gap-2'>
      <Mic2 size={16} className='text-zinc-400 hover:text-white transition-colors'/>
      <List size={16} className='text-zinc-400 hover:text-white transition-colors'/>
      <MonitorSpeaker size={16} className='text-zinc-400 hover:text-white transition-colors'/>
      <div className='flex items-center gap-2'>
        <Volume2 size={16} className='text-zinc-400 hover:text-white transition-colors'/>
        <div className='h-1 rounded-full w-28 bg-zinc-700'>
          <div className='h-1 rounded-full bg-zinc-200 w-12'>
          </div>
        </div>
      </div>
      <Maximize2 size={16} className='text-zinc-400 hover:text-white transition-colors'/>
    </div>
  )
}