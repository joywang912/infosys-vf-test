import axios from "axios";

export const getAlbums = async (setAlbums) => {
  const response = await axios.get(
    "http://jsonplaceholder.typicode.com/albums"
  );
  setAlbums(response.data);
};

export const getAlbumPhotos = async (albumId, setPhotos) => {
  const response = await axios.get(
    "http://jsonplaceholder.typicode.com/photos"
  );
  const photosAll = response.data;
  const photosInAlbum = photosAll.filter(
    (photo) => photo.albumId.toString() === albumId
  );
  setPhotos(photosInAlbum);
};
