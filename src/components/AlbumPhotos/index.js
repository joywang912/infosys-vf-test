import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getAlbumPhotos } from "../../actions/jsonPlaceholder";
import PhotoModal from "../PhotoModal";
import AlbumPhotoList from "./AlbumPhotoList";

const AlbumPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [photoSelected, setPhotoSelected] = useState();

  const onPhotoSelect = (photo) => {
    setShowPhotoModal(true);
    setPhotoSelected(photo);
  };

  let { id } = useParams();
  useEffect(() => {
    getAlbumPhotos(id, setPhotos);
  }, [id]);

  return (
    <div data-test="component-album-photos">
      <Link to="/">Back To Home</Link>
      <AlbumPhotoList photos={photos} onPhotoSelect={onPhotoSelect} />
      {photoSelected && (
        <PhotoModal
          showPhotoModal={showPhotoModal}
          setShowPhotoModal={setShowPhotoModal}
          photoSelected={photoSelected}
        />
      )}
    </div>
  );
};

export default AlbumPhotos;
