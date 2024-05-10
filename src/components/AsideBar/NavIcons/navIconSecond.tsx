import { Heart, SquarePlus as AddIcon, BookMarked } from "lucide-react"
import { Icons } from "./IconLinks"

export function NavIconSecond(){
  return(
    <nav className='space-y-1'>
      <Icons>
        <AddIcon />
        Create Playlist              
      </Icons>
      <Icons>
        <Heart />
        Liked Songs
      </Icons>
      <Icons>
        <BookMarked />
        Your Episodes
      </Icons>
    </nav>
  )
}