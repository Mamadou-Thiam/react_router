
import{movies} from './Movies'
import MoviesCard from './MoviesCard';
import { Button, Form, Nav, Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';


const MoviesList = () => {
    // filtrer avec .filter
    const [searchitem, setsearchitem] = useState(movies);
    const name = (e) => {
        const search = e.target.value.toLowerCase();
        const filtered1 = movies.filter((film) => {
          const filtilte = film.title.toLowerCase().includes(search);
          const filtrating = film.rating.toString().toLowerCase().includes(search)
          return filtilte || filtrating
        })
        setsearchitem(filtered1)
      }
    return (
        <>
           <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            //   configuration de l'input par la methode de filtrage
              onChange={function(e){name(e)}}
            />
            <Button variant="outline-success" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* mapper */}
    <div className='cardFlex'>
            {
                 searchitem.map((movie)=>(
                 <MoviesCard {...movie}/>
                 ))
                
            }
     
      </div>
        </>
  
    );
};

export default MoviesList;