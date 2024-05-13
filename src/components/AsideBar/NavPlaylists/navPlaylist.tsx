import { PlaylistIcon } from './playlistIcon'

export function NavPlaylist(){
  return(
    <nav className='space-y-1'>
      <PlaylistIcon> Playlist 1</ PlaylistIcon>
      <PlaylistIcon> Playlist 2</ PlaylistIcon>
      <PlaylistIcon> Playlist 3</ PlaylistIcon>
      <PlaylistIcon> Playlist 4</ PlaylistIcon>
    </nav>
  )
}