import MusicPlayer from "./components/MusicPlayer";
import { MusicProvider } from "./context/MusicProvider";

export default function Home() {
  return (
    <MusicProvider>
      <h1>Hola Mundo!</h1>
      <MusicPlayer/>
    </MusicProvider>
      
    
    
  )
}
