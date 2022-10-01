import { useHistory, useParams } from "react-router-dom";
import { collection, getDoc, doc, updateDoc } from "firebase/firestore";
import { AiOutlineEdit, AiFillLike, AiFillDelete } from 'react-icons/ai'
import Loader from "react-loader";
import { useState, useEffect } from "react";
import { db } from "./firebase.cofig";



const MovieDetails = () => {
  let { id } = useParams();
  const [comments, setComments] = useState("");
  const [like, setlike] = useState(false)
  const [commentFlag, setCommentFlag] = useState(false)
  const [movie, setMovieList] = useState()
  const [loading, setloading] = useState(false)



  let history = useHistory()
  // const deleteMovie = (comments) => {
  //   alert(comments)
  //   fetch(`http://localhost:3001/movies/${id}`, { method: "P" })
  //     .then(() => { history.push("/") })
  // }
  const handleSubmit = async (e, type, bool) => {
    e.preventDefault();

    // fetch(`http://localhost:3001/movies/${id}`, {
    //   method: "PUT",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({ ...movie, comments: type === 'delete' ? [] : [comments], like: bool })
    // })
    //   .then(() => { type !== 'like' && history.push("/") }
    //   )
    const MoviesRef = doc(db, 'MovieList', id)
    const data = { ...movie, comments: type === 'delete' ? [] : [comments ?? ''], like: bool ?? like }
    console.log("teset", data)
    await updateDoc(MoviesRef, data).then(() => {
      type !== 'like' && history.push("/")
    })
  }
  const fetchMoviesList = async () => {
    setloading(true)
    const MoviesRef = doc(db, 'MovieList', id)
    const getSnapShot = await getDoc(MoviesRef)
    const movieList = getSnapShot.data();
    setMovieList(movieList)
    setloading(false)
  }

  useEffect(() => {
    fetchMoviesList()
  }, [])
  useEffect(() => {
    setComments(movie?.comments[0])
    setlike(movie?.like)
  }, [movie])


  return (
    <div className="MD">



      {loading && <Loader />}

      {movie &&
        <div >
          <img src={movie.poster} style={{ width: "400px", height: "400px" }} />
          <div style={{ display: 'flex' }}>
            <div className="cont">
              <h2>Movie :  {movie.name}</h2>

              <h3>Hero : &nbsp; {movie.hero}</h3>
              <h3>Heroine : &nbsp; {movie.heroine}</h3>


              <h3>Rating : &nbsp; {movie.rating}</h3>
            </div>
            <button onClick={(e) => {

              setlike(!like)
              handleSubmit(e, 'like', !like)
            }} style={{ width: '15%', height: "70px" }}> {like ? 'Liked' : 'Like'} {' '}
              <AiFillLike color={like ? 'red' : 'white'} fill={like ? 'red' : 'white'} style={{ fontSize: '25px' }} />

            </button>
            <span>

            </span>
          </div>

          {commentFlag ?
            <div >
              <label>Comments: </label>
              <textarea rows="10" cols="60" value={comments} onChange={(e) => { setComments(e.target.value) }}></textarea>
              <div style={{ display: 'flex' }}>

                <button type="submit" style={{ width: 'auto', padding: '7px' }} onClick={(e) => {
                  setCommentFlag(false)
                }} > Cancel</button>
                <button type="submit" style={{ width: 'auto', padding: '7px' }} onClick={(e) => handleSubmit(e, '')} >Submit </button>
              </div>
            </div>
            :
            <div className="com" style={{ display: 'flex' }}>
              <h3>comments : &nbsp; </h3>
              {
                movie?.comments?.filter((e) => e !== "").length ?
                  movie.comments.map((com) => {
                    return (
                      <h5>
                        {com}
                      </h5>
                    )
                  })

                  : <button onClick={() => {
                    setCommentFlag(true)
                  }}
                  >
                    ADD
                  </button>

              }
            </div>
          }

          {movie.comments.filter((e) => e !== "").length && !commentFlag &&
            <>
              <div style={{ display: 'flex' }}>

                <button style={{ width: 'auto', padding: '10px' }} onClick={() => {
                  setCommentFlag(true)
                }}> Edit Comment {' '}
                  <AiOutlineEdit color="black" fill="black"
                  />
                </button>
                <button onClick={(e) => { handleSubmit(e, 'delete') }} style={{ width: 'auto', padding: '7px' }}>Delete Comment {' '}
                  <AiFillDelete color="black" fill="black" />
                </button>
              </div>
            </>
          }

        </div>}

    </div>
  );
}


export default MovieDetails;