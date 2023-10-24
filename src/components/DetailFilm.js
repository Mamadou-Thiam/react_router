import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from './Movies';
import { Link } from 'react-router-dom'
import {  FaHouseDamage } from 'react-icons/fa';
const DetailFilm = () => {
    
    const {id}=useParams();{/*utilisation de useparams pour pouvoir recuperer l'id de chaque film*/}
    const descr=movies.find((m)=>m.id===id);{/*utilasation de la methode find pour pouvoir trouver l'id de chaque film*/}
    return (
        <>
        
            {/*utilisation du link de react router pour pouvoir retourner a l'acceuil*/}
    <div className='flex flex-col items-center '>
    <Link to="/">
        <a className='damage'>
        <FaHouseDamage />
        </a>
       
        
 

</Link>
{/*affichage du trailer et du description pour les films*/}
    </div>
    <div className='flex flex-col items-center  '>
      <h1 className='font-serif text-xl text-center font-semibold'>Trailer</h1>
        <iframe className='rounded lg' width="550" height="300" src={descr.trailler} title={descr.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h1 className='font-serif text-xl text-center font-semibold'>Description:</h1>
        <h2 className='font-serif text-xl text-center font-semibold tracking-wide w-[20%]'>{descr.description}</h2>
    </div>
        </>
    );
};

export default DetailFilm;