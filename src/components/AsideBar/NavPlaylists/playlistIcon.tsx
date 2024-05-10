import { ListMusic } from 'lucide-react'

interface PlaylistProps{
  children: string
}

export function PlaylistIcon(props:PlaylistProps){
  return(
  <a href="" className='py-2 pl-2 flex items-center gap-4 text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors'>
    <ListMusic />
    {props.children}
  </a>
  )
}