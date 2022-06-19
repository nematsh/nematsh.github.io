import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p id = 'text'>
            I am currently interested in internship opportunities that would be of 
            educational value to me! Feel free to reach out by contacting me on my LinkedIn
            in the bottom left hand corner, or by sending an email to me at: nemat.shaikh@uconn.edu
          </p>
        </div>
        <div className="info-map">
          UCONN,
          <br />
          United States,
          <br />
          Mansfield CT, 06268<br />
          <br />
          <span>nemat.shaikh@uconn.edu</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[41.806863, -72.256170]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[41.806863, -72.256170]}>
              <Popup>I study here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
