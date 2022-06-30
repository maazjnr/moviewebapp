import { useState } from "react";
import ResultsCard from "./resultsCard";
import {Container, Row, Col} from 'react-bootstrap';


const Add = () => {

    const apiKey = '098d4950866186d3525d8b43163cdb8f';
    const [query, setQuery] = useState([]);
    const [results, setResults] = useState([]);


    const onChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult-false&query=${e.target.value}`
        ).then(res => res.json())
        .then(data => {
            if(!data.error) {
                setResults(data.results)
            } else{
                setResults([]);
            }
        })
        
    }


    return(
        <Container >

           

                <form>
                <input className="input" text="text"
                onChange={onChange} value={query}
                 placeholder="Search Movies" />
               </form>


                {results.length > 0 && (
                    <Row className="movieContainer">
                    {results.map((movie) => (
                        <Col xl={4} lg={4} md={6} sm={8} xs={12} key={movie.id}>
                          <ResultsCard movie={movie} />
                        </Col>
                    ))};
                </Row>
            )}

        </Container>
    )
    
}

export default Add