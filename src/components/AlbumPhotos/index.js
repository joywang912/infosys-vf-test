import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAlbumPhotos } from "../../actions/jsonPlaceholder";

const AlbumPhotos = (props) => {
  const [photos, setPhotos] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    getAlbumPhotos(id, setPhotos);
  }, [id]);

  return (
    <div className="row" data-test="component-album-photos">
      {photos.map((photo) => {
        return (
          <div
            key={photo.id}
            className="col-sm-3"
            data-test="album-photos-item"
          >
            <img src={photo.url} alt={photo.title} width="100%" />
          </div>
        );
      })}
    </div>
  );
};

export default AlbumPhotos;
