import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Loader from "react-loader";

function Comments() {
    let  {com}=useParams();
    let {data:movie , pending , error}=useFetch(`http://localhost:3001/movies/${com}`)
    let history = useHistory()
    const deleteMovie=(com)=>{
        alert(com)
        fetch(`http://localhost:3001/movies/${com}`,{method:"DELETE"})
        .then(()=>{history.push("/")})
    }
  return (
    <div>   {error && <h1>{error}</h1> }
    {pending && <Loader/>}

    {movie && 
    <div className="MD-content">
        
        <h2>Movie : {movie.movieName}</h2>
            <h3>comments : {com}</h3>
            <h3>Hero : {movie.hero}</h3>
            <h3>Heroine : {movie.heroine}</h3>
            
            
            <iframe width="500" height="315" src={movie.vedio} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button onClick={()=>{deleteMovie(movie.id)}}>Delete</button>
     </div>}</div>
  )
}

export default Comments