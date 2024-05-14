import AlbumFoto from '../../assets/album.jpg';

export function MusicName(){
  return(
    <div className='flex items-center gap-3'>
      <img src={AlbumFoto} width={52} height={52} alt="Dirt do Alice In Chains" />
      <div className='flex flex-col gap-px'>
        <strong className='font-normal'>
          Down In A Hole
        </strong>
        <span className='text-sm text-zinc-400'>
          Alice In Chains
        </span>
      </div>
    </div>
  )
}