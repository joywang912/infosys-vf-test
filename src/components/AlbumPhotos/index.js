import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getAlbumPhotos } from "../../actions/jsonPlaceholder";
import PhotoModal from "../PhotoModal";

const AlbumPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [photoSelected, setPhotoSelected] = useState();

  const onImageSelect = (photo) => {
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
      <div className="row album-photos">
        {photos.map((photo) => {
          return (
            <div
              key={photo.id}
              className="col-6 col-sm-3 col-lg-2 album-photos__item"
              data-test="album-photos-item"
            >
              <button
                type="button"
                className="album-photos__button"
                onClick={() => onImageSelect(photo)}
              >
                <img src={photo.thumbnailUrl} alt={photo.title} width="100%" />
              </button>
            </div>
          );
        })}
      </div>
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
