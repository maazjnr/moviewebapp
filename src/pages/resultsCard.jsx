
import {Container, Row, Col} from 'react-bootstrap';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';



const ResultsCard = ({movie}) => {

    const {
        addMovieToWatchedList, watchList
    } = useContext(GlobalContext);

    let storeMovie = watchList.find(o => o.id === movie.id);

    const watchListDisabled = storeMovie ? true : false

    return(
        <Container>
            <Row className='movieList'>
               
               {movie.poster_path ? (
                   <Col >
                    <img className='posterImg' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={`${movie.title} Poster`} />

                    <h4 className='movie_title'>{movie.title}</h4>
                    <p className='movie_release'>{movie.release_date}</p>
                    <button onClick={() => addMovieToWatchedList(movie)} 
                    className='add-to-watchList' disabled={watchListDisabled}>Add to WatchList</button>
                     </Col>
                ) : (
                    <div></div>
                )}

            </Row>
        </Container>
    )
}

export default ResultsCard