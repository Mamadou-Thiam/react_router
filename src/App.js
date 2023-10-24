import { Route, Routes } from 'react-router-dom';
import './App.css';
import MoviesList from './components/MoviesList';
import DetailFilm from './components/DetailFilm';




function App() {
  return (
    <>

    <div className="App">
    </div>
    {/*pour la navigation entre chaque page du site*/}
    <Routes >
      {/*naviger a l'acceuil du page*/}
       <Route path='/' element={<MoviesList/>}/>
       {/* naviger au details de film */}
      <Route path='/descr/:id'element={<DetailFilm/>}/>
    </Routes>
    
    </>
   
  );
}

export default App;
