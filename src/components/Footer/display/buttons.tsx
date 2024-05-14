import { Play, Shuffle, SkipBack, SkipForward, Repeat2 } from 'lucide-react';

export function Buttons(){
  return(
    <div className='flex items-center gap-6'>
      <Shuffle size={20} className=' text-zinc-400 hover:text-white transition-colors'/>
      <SkipBack size={20} className=' text-zinc-400 hover:text-white transition-colors'/>
      <button className='w-9 h-9 pl-0.5 flex items-center justify-center rounded-full bg-zinc-400 text-black hover:bg-white transition-colors'>
        <Play />
      </button>
      <SkipForward size={20} className='text-zinc-400 hover:text-white transition-colors'/>
      <Repeat2 size={20} className='text-zinc-400 hover:text-white transition-colors'/>
    </div>
  )
}