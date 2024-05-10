import { HomeIcon as Home, Search, Library } from "lucide-react";
import { Icons } from "./IconLinks";


export function NavIconFirst(){
  return(
    <nav className='space-y-1'>
      <Icons>
        <Home />
        Home
      </Icons>
      <Icons>
        <Search />
        Search
      </Icons>
      <Icons>
        <Library />
        Your Library
      </Icons>
    </nav>
  )
}
