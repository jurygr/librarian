import React from 'react';
import {Link} from 'react-router-dom';
import { Card, CardTitle, CardImg, CardText, CardBody } from 'reactstrap';
import Moment from "moment";
import DefaultImage from '../image/no-image-icon-23500.jpg'

const BookCard = (props) => {
    const { book } = props;
    return(

    <section>
    <Card style={{width: '300px'}} className="m-auto">
            <CardImg top style={{width: '300px', height: '300px'}} src={book.volumeInfo.imageLinks === undefined ? `${DefaultImage}`: `${book.volumeInfo.imageLinks.thumbnail}`} alt=""/>
            <CardBody>
        <CardTitle className="card-title">{book.volumeInfo.title}</CardTitle>
            <CardText>
                Autore: {book.volumeInfo.authors === undefined ? `Sconosciuto`: `${book.volumeInfo.authors}`}
                <br/>
                Pubblicato:
                <Moment format="DD/MM/YYYY">
                {book.volumeInfo.publishedDate === undefined ? `Sconosciuto`: `${book.volumeInfo.publishedDate}`}
                </Moment>
                
            </CardText>
            <Link to={`books/${book.id}`} className='btn btn-info btn-block'>
              Info
            </Link>
            </CardBody>
     </Card>
    </section>
    )
    }

export default BookCard;