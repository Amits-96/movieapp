
import MoviesList from './MoviesList';
import Loader from "react-loader";
import { useEffect, useState } from 'react';

import { collection, getDocs, setDoc, doc } from 'firebase/firestore'
import { db } from './firebase.cofig';
const Home = () => {

  // let {data : movieName,pending,error}=useFetch("http://localhost:3001/movies");

  const [loading, setloading] = useState(false);
  const MoviesRef = collection(db, 'MovieList')
  const [movieList, setMovieList] = useState([])
  const fetchMoviesList = async () => {
    setloading(true)
    const getSnapShot = await getDocs(MoviesRef)
    const movieList = getSnapShot.docs.map((doc) => doc.data())
    setMovieList(movieList)
    setloading(false)
  }
  useEffect(() => {
    fetchMoviesList()
  }, [])

  return (
    <div >

      {loading && <Loader />}
      {movieList && <MoviesList movieName={movieList} title="ALL MOVIES" />}

    </div>
  );
}

export default Home;
