interface IconProps{
  children: any
}

export function Icons(props:IconProps){
  return(
    <a href="" className='py-2 pl-2 flex items-center gap-4 text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors'>
    {props.children}
  </a>
  )
}