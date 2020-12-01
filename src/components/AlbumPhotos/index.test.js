import React from "react";
import { MemoryRouter } from "react-router-dom";
import Enzyme, { mount, shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import AlbumPhotos from "./index.js";
import AlbumPhotoList from "./AlbumPhotoList.js";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders album photos component without error", () => {
  const wrapper = mount(
    <MemoryRouter>
      <AlbumPhotos />
    </MemoryRouter>
  );
  const component = wrapper.find(`[data-test='component-album-photos']`);
  expect(component.length).toBe(1);
});

describe("renders album photo list", () => {
  const photos = [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      albumId: 1,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
    {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355",
    },
  ];

  test("photo list with 3 items", () => {
    const wrapper = shallow(<AlbumPhotoList photos={photos} />);
    const photoItems = wrapper.find(`[data-test='album-photos-item']`);
    expect(photoItems.length).toBe(3);
  });

  test("photo list shows thumbnails", () => {
    const wrapper = shallow(<AlbumPhotoList photos={photos} />);
    const photoFirstItem = wrapper
      .find(`[data-test='album-photos-item']`)
      .at(0);
    expect(photoFirstItem.find("img").prop("src")).toEqual(
      photos[0].thumbnailUrl
    );
  });

  test("photo list images has alt title text", () => {
    const wrapper = shallow(<AlbumPhotoList photos={photos} />);
    const photoFirstItem = wrapper
      .find(`[data-test='album-photos-item']`)
      .at(0);
    expect(photoFirstItem.find("img").prop("alt")).toEqual(photos[0].title);
  });
});
