'use client'
const { createContext, useState } = require("react")
import music from './../src/img/music.jpg'
export const MusicContext = createContext()

export const MusicProvider = ({ children }) => {
    const [cancion, setCancion] = useState({
        title: 'Cancion chida',
        album: 'Album chido',
        foto: music
    })
    const [tema, setTema] = useState('light')
    const toggleTema = () => {
        setTema((prevTema) => prevTema === 'light' ? 'dark' : 'light' )
    }
    return(
        <MusicContext.Provider value={{cancion, setCancion, tema, toggleTema}}>
            {children}
        </MusicContext.Provider>
    )
}