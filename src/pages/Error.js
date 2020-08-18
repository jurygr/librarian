import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

export default function Error(){
    return(
        <div className="d-flex justify-content-center align-items-center flex-column">
            <h1 className="display-2 mb-2">404</h1>
            <p className="display-4 text-center  mb-3">Pagina non trovata</p>
            <Link to="/librarian"> 
            <Button>
            Torna indietro
            </Button>
            </Link>
        </div>
    )
}