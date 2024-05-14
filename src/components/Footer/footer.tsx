import { Display } from "./display/displayButtons";
import { MusicName } from "./musicName";
import { OptionsButton } from "./options";

export function Footer(){
  return(
    <footer className="fixed bottom-0 w-screen bg-zinc-900 border-t border-zinc-700 p-5 flex items-center justify-between">
        <MusicName />
        <Display />
        <OptionsButton />
    </footer>
  )
}