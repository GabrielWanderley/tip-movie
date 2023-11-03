import { useState, useEffect,} from "react"
import Modal from "react-modal"
import { Container,ContainerTip, Modals} from "./style"
import'./styles.css'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block',  marginRight: '100px'  }} onClick={onClick} />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block',  marginLeft: '100px', zIndex: 1, }} onClick={onClick} />
  );
};

Modal.setAppElement('#root')
export function Tip(){
  const [genre, setGenre]= useState([])
  const [ movies, setMovies]=useState([])
  const [moviesG, setMoviesG]=useState([])
   
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
  


      function CreateATip(event){ 

          event.preventDefault()
        console.log(event.target.value)
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=74ab3e3886955e07f5171788bb399747&language=en-US&sort_by=release_date.desc&page=1&with_genres=${event.target.value}
            `)
             .then(reponse => reponse.json())
             .then(data => setMoviesG(data.results))
      }
        
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
      };

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
            <select onChange={ CreateATip } value={genre.id}>
              <option>Genres</option>
            {genre.map(genres =>{
        return(
              <option key={genres.id} value={(genres.id)}>{genres.name}</option>
        )})}
            </select>
          
          {/* <button type="submit" onClick={()=>CreateATip}>give a hint</button> */}

          </form>  
          <Slider {...settings}>
          {moviesG.map(moviesg =>{
        return(
         

                 
              <ContainerTip>
                  <div className="carro" key={moviesg.id}>
                     <img src={`${image_path}${moviesg.poster_path}`} alt={moviesg.id} className="carousel-image" />
                     <h3>{moviesg.title}</h3>
                   </div>
              </ContainerTip>
                 

                 
              



          
 )})} 
 </Slider>
        </div>
          </Modals>
        </Modal>

    </Container>
   )

}
