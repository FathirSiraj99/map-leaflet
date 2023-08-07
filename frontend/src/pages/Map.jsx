import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './Map.css'
import { Icon } from "leaflet";


const Map = () => {

    const cartIcon = new Icon ({
        iconUrl  : "https://media.tenor.com/u8M7kk5ZXmwAAAAC/banana-cat-crying.gif",
        iconSize : [38,38]
    })

    const [place, setPlace] = useState([])


    const fetchData = async () => {
        const response = await axios.get(`http://192.168.18.210:4321/place`)
        setPlace(response.data)
    }

    useEffect(() => {
        fetchData()
    },[])
  return (
    <div className='height=100vh' ><MapContainer center={[-6.601339, 106.80571]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {place.map((item) => (
        item.type_placeId === "7fe465a9-6857-4944-b97b-dbdc75d4272a" ? (
            <Marker position={[item.latitude, item.longitude]} icon={cartIcon} >
                <Popup>
                    <p> Name: {item.name}</p>
                    <p> Description: {item.description}</p>
                </Popup>
            </Marker>
        ) : null
    ))}
</MapContainer></div>
  )
}

export default Map