import { NameCard } from './nameCard'
import AlbumFoto from '/Users/Pichau/www/programs/projects/spotify-clone/src/assets/album.jpg'

export function Cards(){
  return(
  <a href='' className='flex flex-col gap-2 bg-black/10 p-3 rounded-md hover:bg-white/5 transition-colors'>
    <img src={AlbumFoto} className='w-full' width={80} height={80} alt="Dirt do Alice In Chains" />
    <NameCard children={'Playlist ' + (Math.ceil(Math.random() * 50) + 1).toString()}/>
    <span className='text-sm text-zinc-400'>Alice In Chains, The Cure, Erasure and more</span>
  </a>
            
  )
}