import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GlobalContext } from '../context/globalState';
import MovieCard from './movieCard';


const WatchList = () => {

  const { watchList } = useContext(GlobalContext);

  return(
    <Container>
      <hr className='hr'></hr>
      <h2 className='myWatchList'>My WatchList</h2>
      <hr className='hr'></hr>
      <Row>
        {watchList.map((movie) => (
          <Col xl={4} lg={4} md={6} sm={8} xs={12}>
          <MovieCard movie={movie} type="watchlist" />
          </Col>
        ))}
      </Row>
    </Container>
  )
}


export default WatchList