import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AsideBar } from './components/AsideBar/aside';
import { MainCard } from './components/mainCards/mainCard';
import { MainPlaylist } from './components/PlaylistList/mainPlaylist';
import { Footer } from './components/Footer/footer';

export function App() {
    
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
          <AsideBar />
        <main className="flex-1 p-6 ml-64">
          <div className='flex items-center gap-2'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-8'>Good Afternoon</h1>
          <MainPlaylist />
          <h2 className='font-semibold text-2xl mt-8'>Made For You</h2>
          <MainCard />
        </main>
      </div>
      <Footer />
    </div>
  )
}
