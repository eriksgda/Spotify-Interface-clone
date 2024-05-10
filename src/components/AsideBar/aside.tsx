import { NavPlaylist } from './NavPlaylists/navPlaylist';
import { NavIconFirst } from './NavIcons/navIconsFirst';
import { NavIconSecond } from './NavIcons/navIconSecond';
import SpotifyLogo from '../../assets/Spotify_Logo_RGB_White.png';

export function AsideBar(){
  return(
    <aside className="w-64 bg-zinc-950 p-4">
      <div className='space-y-8'>
        <img src={SpotifyLogo} alt="" className='pl-2 h-12'/>
        <NavIconFirst/>
        <NavIconSecond/>
        <div className='border-b border-zinc-700'></div>
          <NavPlaylist/>
      </div>
    </aside>
  )
}