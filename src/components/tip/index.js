import { useState, useEffect,} from "react"
import Modal from "react-modal"
import { Container, Modals} from "./style"

Modal.setAppElement('#root')
export function Tip(){
  const [genre, setGenre]= useState([])
  const [ movies, setMovies]=useState([])
   
  const image_path = "https://image.tmdb.org/t/p/w500"

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=74ab3e3886955e07f5171788bb399747&language=en-US`)
     .then(reponse => reponse.json())
     .then(data => setGenre(data.genres))
   },[])
 
   
   useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=74ab3e3886955e07f5171788bb399747&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
     .then(reponse => reponse.json())
     .then(data =>{ const{
      with_genres,
      title,
      poster_path,
      id,
     }=data
     
     const movie={
      id,
      with_genres,
      title,
      image: `${image_path}${poster_path}`,
     }
      setMovies(movie)})
   },[])
 //  console.log(movies)
        const [modalIsOpen, setIsOpen] = useState(false);
      
        function openModal() {
          setIsOpen(true);
        }
      
        function closeModal() {
          setIsOpen(false);
        }
  
           const genero =(event)=>{
        console.log(event.target.value)


      }
        useEffect(()=>{
          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=THE_KEY&language=en-US&sort_by=release_date.desc&page=1&with_genres=${genero.id}
          `)
           .then(reponse => reponse.json())
           .then(data => console.log(data))
         },[])

      function CreateATip(event){ 

          event.preventDefault()
          useEffect(()=>{
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=THE_KEY&language=en-US&sort_by=release_date.desc&page=1&with_genres=${genero.value}
            `)
             .then(reponse => reponse.json())
             .then(data => console.log(data))
           },[])


        }


   return(
    <Container>
        <button onClick={openModal} className="openM">open tips</button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
           <Modals>
            <button onClick={closeModal} className="close">
                <h1>X</h1>
            </button>
            <div className="tip">
            <h1> choose the movie genre </h1> 
            <hr/>
          <form onSubmit={CreateATip}>
            <select onChange={ genero } value={genre.id}>
              <option>Genres</option>
            {genre.map(genres =>{
        return(
              <option key={genres.id} value={genres.id}>{genres.name}</option>
        )})}
            </select>
          
          <button type="submit" onClick={()=>CreateATip}>give a hint</button>

          </form> 
 
        </div>
          </Modals>
        </Modal>

    </Container>
   )

}
