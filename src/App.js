
import Home from './Home';
import NavBar from './NavBar';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import MovieDetails from './MovieDetails';
import FileNotFound from './FileNotFound';

function App() {
  return (
    <Router>
    <div className="App" style={{maxWidth:'90%'}}>
      <NavBar/>

      <Switch>

            <Route exact path="/">
            <Home/> 
            </Route>
           <Route path="/movie/:id">
             <MovieDetails/>
           </Route>

           <Route path={"*"}>
             <FileNotFound/>
           </Route>


      </Switch>
    </div>
    </Router>
  );
}

export default App;
