import { useEffect, useState } from "react"

import { useParams, Link } from "react-router-dom"
import { Container } from "./style"




export function Details(){
   
    const image_path = "https://image.tmdb.org/t/p/w500"

    const {id} = useParams()
    
    const [movie, setMovie] = useState({})

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=74ab3e3886955e07f5171788bb399747&language=en-US&page=1`)
        .then(reponse => reponse.json())
        .then(data => {
            const {title, poster_path, overview, relase_date}= data
            const movie ={
                id,
                title,
                sinopse: overview,
                image: `${image_path}${poster_path}`,
                relaseDate: relase_date,
             }
             setMovie(movie)
             console.log(movie)
        })
    },[id])

    return(
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse}/>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className="release-date">Relase Date:{movie.relaseDate}</span>
                    <Link to="/"> <button>Go Back</button>  </Link>
                    
                </div>
            </div>
        </Container>
    )
}