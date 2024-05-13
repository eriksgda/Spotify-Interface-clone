import { Cards } from "./cards"

export function MainCard(){
  return(
    <div className='grid grid-cols-5 gap-5 mt-5 mb-24'>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
    </div>
  )
}