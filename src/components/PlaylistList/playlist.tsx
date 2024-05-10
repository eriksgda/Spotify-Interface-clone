import AlbumFoto from '/Users/Pichau/www/programs/projects/spotify-clone/src/assets/album.jpg'
import { Play } from 'lucide-react'


export function Playlist(){
  return(
  <a className='flex items-center gap-3 group bg-white/5 rounded overflow-hidden cursor-pointer hover:bg-white/15 transition-colors'>
    <img src={AlbumFoto} width={80} height={80} alt="Dirt do Alice In Chains" />
    <strong>Dirt - Alice In Chains</strong>
    <button className='w-12 h-12 ml-auto flex items-center justify-center mr-3 pl-0.5 rounded-full bg-green-500 text-black invisible group-hover:visible'>
      <Play />
    </button> 
  </a>
  )
}