
import React, { useEffect, useState } from 'react'
import "./Player.css"
import backarrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

function Player() {

  const {id} = useParams();
  const navigate = useNavigate()

  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGVlMTc3YWQ4N2JlMDI1YWE2NjYzMDUwOGExNzgxZCIsIm5iZiI6MTcyMzYwMzUyNy42MTczOSwic3ViIjoiNjZiYzE4ODdiYWMyM2YwYzNmODI1MDA2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.NEmhrk-NwvK2g7L3nFYiRVtdM0pygh-8oh-y5xMjcXc'
    }
  };
  
  useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])
  
  return (
    <div className='player'>
      <img src={backarrow} alt="" onClick={() =>{navigate(-2)}}/>
      <iframe width='91%' height='91%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
        <div className='player-info'>
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
    </div>
  )
}

export default Player
