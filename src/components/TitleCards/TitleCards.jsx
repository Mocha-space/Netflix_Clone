
import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import Cardsdata from '../../assets/cards/Cards_data.js'
import { Link } from 'react-router-dom'

function TitleCards({title, category}) {

  const [apiData, setApiData] = useState([])
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGVlMTc3YWQ4N2JlMDI1YWE2NjYzMDUwOGExNzgxZCIsIm5iZiI6MTcyMzYwMzUyNy42MTczOSwic3ViIjoiNjZiYzE4ODdiYWMyM2YwYzNmODI1MDA2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.NEmhrk-NwvK2g7L3nFYiRVtdM0pygh-8oh-y5xMjcXc'
    }
  };
  
  
    

  function handleWheel(event){
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() =>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));


    cardsRef.current.addEventListener('wheel', handleWheel)
  },[])

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on NetFlix"}</h2>
        <div className='card-list' ref={cardsRef}>
          {apiData.map((card, index) =>{
            return <Link to={`/player/${card.id}`} className='card' key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          })}
        </div>
    </div>
  )
}

export default TitleCards
