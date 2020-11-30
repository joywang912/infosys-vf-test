import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getAlbums } from "./actions/jsonPlaceholder";
import AlbumList from "./components/AlbumList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AlbumPhotos from "./components/AlbumPhotos";

function App() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    getAlbums(setAlbums);
  }, []);

  return (
    <div className="container" data-test="component-app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <AlbumList albums={albums} />
          </Route>
          <Route path="/album/:id" exact>
            <AlbumPhotos />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
