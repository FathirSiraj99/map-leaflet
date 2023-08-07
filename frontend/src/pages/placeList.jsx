import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const PlaceList = () => {
    const [place, setPlace] = useState([])

    const fetchData = async () => {
        const response = await axios.get(`http://192.168.18.210:4321/place`)
        setPlace(response.data)
    }

    const navigate = useNavigate()


    useEffect(() => {
        fetchData()
    },[])

  return (
    <table className="table">
    <thead>
    <tr>
        <th scope="col">number</th>
        <th scope="col">Place Name</th>
        <th scope="col">Description</th>
        <th scope="col">latitude</th>
        <th scope="col">longitude</th>
        <th scope="col">The map</th>
      </tr>
    </thead>
    <tbody>
      {place.map((item, index )=> (
        <tr key={item.id}>
            <td>{(index + 1)}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.latitude}</td>
            <td>{item.longitude}</td>
            <td>
            <Link className='btn btn-warning mx-3' to={`/map}`}>Map</Link>
            </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default PlaceList