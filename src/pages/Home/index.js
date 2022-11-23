import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Tip } from "../../components/tip"

import { Container, MovieList , Movie} from "./styles"


export function Home(){

   const [movies , setMovies] = useState([]) 
   const image_path = "https://image.tmdb.org/t/p/w500"

   useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=74ab3e3886955e07f5171788bb399747&language=en-US&page=1`)
     .then(reponse => reponse.json())
     .then(data => setMovies(data.results))
   },[])
   
return(
   <Container>
    <h1>Movies</h1>
    <Tip/>
    <MovieList>
    {movies.map(movie =>{
        return(
            <Movie key={movie.id}>
  
            <Link to={`/details/${movie.id}`}> 
            <img src={`${image_path}${movie.poster_path}`} alt={movie.title}/>
            </Link>
           
            <span>{movie.title}</span>
            </Movie>
        )
    })}
    </MovieList>
   </Container>
)
}
