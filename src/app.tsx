import { ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat2, 
  Mic2, Volume2, List, MonitorSpeaker, Maximize2 } from 'lucide-react';
import AlbumFoto from './assets/album.jpg';
import { Cards } from './components/mainCards.tsx/cards';
import { Playlist } from './components/PlaylistList/playlist';
import { AsideBar } from './components/AsideBar/aside';

export function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <AsideBar />
        <main className="flex-1 p-6">
          <div className='flex items-center gap-2'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-8'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-5 mt-5'>
            <Playlist/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
          </div>

          <h2 className='font-semibold text-2xl mt-8'>Made For You</h2>
          <div className='grid grid-cols-5 gap-5 mt-5 mb-24'>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
          </div>
            
        </main>
      </div>

      <footer className="fixed bottom-0 w-screen bg-zinc-900 border-t border-zinc-700 p-5 flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <img src={AlbumFoto} width={48} height={48} alt="Dirt do Alice In Chains" />
          <div className='flex flex-col gap-px'>
            <strong className='font-normal'>
              Down In A Hole
            </strong>
            <span className='text-sm text-zinc-400'>
              Alice In Chains
            </span>
          </div>
        </div>

        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className=' text-zinc-400 hover:text-white transition-colors'/>
            <SkipBack size={20} className=' text-zinc-400 hover:text-white transition-colors'/>
            <button className='w-9 h-9 pl-0.5 flex items-center justify-center rounded-full bg-zinc-400 text-black hover:bg-white transition-colors'>
              <Play />
            </button>
            <SkipForward size={20} className='text-zinc-400 hover:text-white transition-colors'/>
            <Repeat2 size={20} className='text-zinc-400 hover:text-white transition-colors'/>
          </div>
          <div className='flex items-center gap-3'>
            <span className='text-xs text-zinc-400'>00:00</span>
            <div className='h-1 rounded-full w-96 bg-zinc-700'>
              <div className='h-1 rounded-full bg-zinc-200 w-1'></div>
            </div>
            <span className='text-xs text-zinc-400'>04:53</span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <Mic2 size={16}/>
          <List size={16}/>
          <MonitorSpeaker size={16}/>
          <div className='flex items-center gap-2'>
            <Volume2 size={16}/>
            <div className='h-1 rounded-full w-28 bg-zinc-700'>
              <div className='h-1 rounded-full bg-zinc-200 w-12'></div>
            </div>
          </div>
          <Maximize2 size={16}/>
        </div>
      </footer>
    </div>
  )
}
