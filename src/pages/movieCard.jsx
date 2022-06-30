import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MovieCard = ({movie, type}) => {

    return(
        <Container>
        <Row className='movieList'>
           
           {movie.poster_path ? (
               <Col >
                <img className='posterImg' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={`${movie.title} Poster`} />

                <h4 className='movie_title'>{movie.title}</h4>
                <p className='movie_release'>{movie.release_date}</p>
                 </Col>
            ) : (
                <div></div>
            )}

        </Row>
    </Container>
    )
}

export default MovieCard