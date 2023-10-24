import { movies } from './Movies';
import MoviesCard from './MoviesCard';
import { Button, Form, Nav, Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Film from './AddFilm';
import { Link } from 'react-router-dom';



const MoviesList = () => {
  // pour l'ajout d'un nouveau film


  const [nouveauFilm, setNouveauFilm] = useState(Film);

  const handleAddFilm = (e) => {
    e.preventDefault();
    setsearchitem([...searchitem, { ...nouveauFilm }]);

    setNouveauFilm({ title: '', rating: '', posteUrl: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNouveauFilm({ ...nouveauFilm, [name]: value });
  };

  // filtrer avec .filter
  const [searchitem, setsearchitem] = useState(movies);

  const name = (argument) => {
    const search = argument.target.value.toLowerCase();
    const filtered1 = movies.filter((film) => {
      return film.title.toLowerCase().includes(search) || film.rating.toString().toLowerCase().includes(search);
    });
    setsearchitem(filtered1);
  };

  return (
    <>
      
      <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">MOVIES</Navbar.Brand>
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
              onChange={name}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
      
      
      {/* mapper */}
     
     <div className="cardFlexs">
        {searchitem.map((descr) => (
          <div key={descr.id} >
            {/*lien qui permet de regarder le trailer du film*/}
            <Link to={`descr/${descr.id}`} > 
          <MoviesCard {...descr} />
          </Link>
           </div>
        ))}
      </div>
      

      <div className=''>
        <br /><br /><br /><br /><br />
                <form onSubmit={handleAddFilm} className='flex flex-row justify-evenly'>
                    <div class="mb-6">
                        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Movie</label>
                        <input type="text" name="title" placeholder="Title" value={nouveauFilm.title} onChange={handleInputChange} id="large-input" class="block w-auto p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div class="mb-6">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                        <input type="text" name="rating" placeholder="Note" value={nouveauFilm.rating} onChange={handleInputChange} id="base-input" class="bg-gray-50 border p-2 w-auto border-gray-300 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className='mb-6'>
                        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url Image</label>
                        <input type="text" name="posteUrl" placeholder="URL de l'image" value={nouveauFilm.posteUrl} onChange={handleInputChange} id="small-input" class="block w-auto p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className=' bg-stone-400 rounded-lg w-[10%] h-[10%] p-2 mt-6'>
                        <button className='submit'>Ajouter un Film</button>
                    </div>
                </form>
            </div>
    </>
  );
};

export default MoviesList;
