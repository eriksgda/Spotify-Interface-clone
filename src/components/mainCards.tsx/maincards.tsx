import { Cards } from "./cards";

export function MainCards(){
  return(
  <div className='grid grid-cols-5 gap-5 mt-5'>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
  </div>
  )
}