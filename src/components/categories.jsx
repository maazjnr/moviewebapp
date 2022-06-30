import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

const Categories = () => {

    return(
        <Container fluid className="link-row">
             
        <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
            <ul className="navlinks">

            <li>
                <Link  to={"/add"}>
                    <button className="add">Add+</button>
                    </Link>
                </li>

                <li>
                <Link  to={"/WatchList"}>My Watch</Link>
                </li>
                
            </ul>
            </Col>
        </Row>

        <Row>
        <p className="clickadd">Click Add+ to search for new Movies</p>
        </Row>
    </Container>
       
    )
}

export default Categories