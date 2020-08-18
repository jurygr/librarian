import React, { useEffect, useState} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "moment";
import DefaultImage from '../image/no-image-icon-23500.jpg';
import Navbar from '../components/Navbar';
import {RiArrowGoBackLine} from 'react-icons/ri';
import {Spinner} from 'reactstrap';
import {Button} from 'reactstrap';


const Books = (props) => {
    const [book, setBook] = useState({});

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${
            props.match.params.id}?projection=full`)
        .then(data => {
            console.log(data.data);
            setBook(data.data);
            
    })
    .catch(err => console.error(err))
}, [props.match.params.id])

if(
    book === undefined ||
    Object.keys(book).length ===0
   ){
     return(
     <div className='d-flex justify-content-center  mt-3'>
     <Spinner style={{ width: '60px', height: '60px' }} />
     </div>)
   }else {
    return(
    <>
    <Navbar />
    <div className="wrapper">
        <div className="container-fluid">
        <header><h1>{book.volumeInfo.title}</h1></header>
        <div className="sidebar" style={{width:'260px',padding:'20px',float:'left'}}>
        <img src={book.volumeInfo.imageLinks === undefined ?  `${DefaultImage}` : `${book.volumeInfo.imageLinks.thumbnail}`} alt="" />
        <p>Pubblicato da: <br/>
        <span>{book.volumeInfo.publisher}</span></p>
        <p>Autore: <br/>
        {book.volumeInfo.authors === undefined ? `Sconosciuto`: `${book.volumeInfo.authors}`  }</p>
        <p>
        Data di Pubblicazione: <br/>
        <Moment locale='it' format='l'>
        {book.volumeInfo.publishedDate === undefined ? `Sconosciuto`: `${book.volumeInfo.publishedDate}`}
        </Moment >
        </p>
        </div>
        <div className="container">
        <h3>Trama</h3>
        <hr/>
        <p>{book.volumeInfo.description === undefined ? 'Trama non presente' : `${book.volumeInfo.description}`}  </p>
        <hr/>
        <h3>Maggiori Info:</h3>
        <p>Categoria: {book.volumeInfo.categories === undefined ? 'Non presente' : `${book.volumeInfo.categories}`}</p>
        <p>ISBIN: {book.volumeInfo.industryIdentifiers[1].identifier}</p>
        <p>Lingua: {book.volumeInfo.language}</p>
        <p>N. di pagine: {book.volumeInfo.pageCount}</p>
        <footer><Link to="/librarian">
        <RiArrowGoBackLine tip="Torna indietro" style={{fontSize:"40px"}}/>
        </Link>
        <Button className="secondary">
            <a href={book.volumeInfo.canonicalVolumeLink === undefined ? `Non esiste ebook` : `${book.volumeInfo.canonicalVolumeLink}`} style={{color:'#fff'}}>Ebook</a>
        </Button> 
        </footer>
        </div>
        </div>
    </div>
    </>
        )
    }
}

export default Books;