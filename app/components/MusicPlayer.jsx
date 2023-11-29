'use client'

import { faBackward, faForward, faMoon, faPlay } from "@fortawesome/free-solid-svg-icons"
import { faMoon as moon } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Container } from "react-bootstrap"
import music2 from './../src/img/music2.jpg'
import music3 from './../src/img/music3.jpg'

const { useContext } = require("react")
const { MusicContext } = require("../context/MusicProvider")

const MusicPlayer = () => {
    const {cancion, setCancion, tema, toggleTema} = useContext(MusicContext)
    
    const changeSongBack = () => {
        setCancion({
            title: 'Cancion anterior',
            album: 'Album anterior',
            foto: music2
        })
    }
    const changeSongForward = () => {
        setCancion({
            title: 'Cancion siguiente',
            album: 'Album siguiente',
            foto: music3
        })
    }
    return (
        <Card className="w-50 mx-auto" style={{background: tema === 'light' ? '#ffffdd ': '#333'}}>
            <CardImg variant="top" src="/"/>
            <CardBody>
                {tema === 'light' ? <FontAwesomeIcon onClick={() => toggleTema()} size="xl" icon={faMoon}/> : <FontAwesomeIcon onClick={() => toggleTema()} icon={moon} size="xl"/>}
                
                <CardTitle>
                    {cancion.title}
                </CardTitle>
                <CardText>
                    {cancion.album}
                </CardText>
                <Container>
                    <Button onClick={() => changeSongBack()} variant="outline-success">
                        <FontAwesomeIcon icon={faBackward} size="xl" style={{color: "green"}}/>
                    </Button>
                    <Button variant="outline-success">
                        <FontAwesomeIcon icon={faPlay} size="xl" style={{color: "green"}}/>
                    </Button>
                    <Button onClick={() => changeSongForward()} variant="outline-success">
                        <FontAwesomeIcon icon={faForward} size="xl" style={{color: "green"}}/>
                    </Button>
                </Container>
            </CardBody>
        </Card>
    )
}
export default MusicPlayer