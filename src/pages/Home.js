import React, {useState, Fragment} from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';
import { GiBookshelf} from "react-icons/gi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GrReactjs } from "react-icons/gr";


const Home = () => {
  const [books,setBook] = useState("");
  const [result, setResult] = useState([]);
  
  function handleChange(e) {
    const books = e.target.value;
    setBook(books);
}

function handleSubmit(e){
    e.preventDefault();
    if(books.length === 0){
      toast.error('Scrivi il nome del libro che cerchi')
    }else{
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+books+"&maxResults=20")
    .then(data => {
        console.log(data.data.items);
        setResult(data.data.items);
    })}
}

  return(
    <Fragment>
    <div className="main-image d-flex justify-content-center align-items-center flex-column">
    {/*Overlay*/}
    <div className='filter'></div>
    <GiBookshelf style={{color:'#fff', zIndex:2, fontSize: '85px'}}/>
    <h1 className="display-3 text-white mb-2" style={{fontWeight: 600, zIndex: 2}}>Librarian</h1>
    <h2 className="display-2 text-center text-white mb-3" style={{zIndex: 2}}>
    La tua libreria online.
    </h2>
    <form onSubmit={handleSubmit} style={{zIndex: 2, width: "60%"}} className="input-group mb-2">
      <input onChange={handleChange} type="text" className="form-control" placeholder="Ricerca il tuo libro..." autoComplete="true" />
      <button type="submit" className="btn btn-danger btn-inline-secondary">Cerca</button>
      <ToastContainer position="top-center"/>
      </form>
      </div>
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <p className="lead">"Chi non legge, a 70 anni avrà vissuto una sola vita: la propria. Chi legge avrà vissuto 5000 anni: c'era quando Caino uccise Abele, quando Renzo sposò Lucia, quando Leopardi ammirava l'infinito... perché la lettura è un'immortalità all'indietro."</p>
    <h4>Umberto Eco</h4>
    </div>
    </div>
  
      <div className="recipes">
      {result.map(book => (
          <BookCard 
          key={book.id}
          book={book}
          />
      ))}
    </div>
    <footer className="page-footer font-small special-color-dark pt-4">
    <div className="footer-copyright text-center py-3">
    Design by Jury Griseri with <GrReactjs style={{fontSize:'25px'}}/>
    </div>
      </footer>
    </Fragment>
  )
}

export default Home;