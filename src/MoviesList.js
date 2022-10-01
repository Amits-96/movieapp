import { Link } from "react-router-dom";
const MoviesList = ({ movieName, title }) => {


    return (
        <div className="main" style={{ width: '100%' }}>
            <div className="test">

                <div className="title">


                    <h1>{title}</h1>
                </div>

                {movieName.map((movie) => (
                    <div className="movie-list" >

                        <Link to={`/movie/${movie.id}`}>
                            <div className="at">
                                <h2>Movie : {movie?.name}</h2>
                                <img src={movie?.poster} style={{ width: "120px", height: "120px" }} />
                            </div>
                            <div>
                                <h3>Hero : {movie?.hero}</h3>
                                <h3>Heroine : {movie?.heroine}</h3>
                            </div>

                            <h3>RATING: {movie?.rating}</h3>

                        </Link>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default MoviesList;