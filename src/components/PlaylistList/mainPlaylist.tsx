import { Playlist } from "./playlist"

export function MainPlaylist(){
  return(
    <div className='grid grid-cols-3 gap-5 mt-5'>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
    </div>
  )
}