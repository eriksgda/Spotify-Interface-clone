import { Buttons } from "./buttons";
import { TimerMusic } from "./timer";

export function Display(){
  return(
    <div className='flex flex-col items-center gap-2'>
      <Buttons />
      <TimerMusic />
    </div>

  )
}