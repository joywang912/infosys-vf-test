import React from "react";
import { Link } from "react-router-dom";

const AlbumList = (props) => {
  const { albums = [] } = props;

  return (
    <ul className="list-group" data-test="component-album-list">
      {albums.map((album) => {
        return (
          <Link
            data-test="album-list-item"
            key={album.id}
            type="button"
            className="list-group-item list-group-item-action"
            to={`/album/${album.id}`}
          >
            <strong>{album.title} </strong>
            <span>user: {album.userId}</span>
          </Link>
        );
      })}
    </ul>
  );
};

export default AlbumList;
