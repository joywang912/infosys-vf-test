import React from "react";

const AlbumPhotoList = ({ photos, onPhotoSelect }) => {
  return (
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
              onClick={() => onPhotoSelect(photo)}
            >
              <img src={photo.thumbnailUrl} alt={photo.title} width="100%" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AlbumPhotoList;
