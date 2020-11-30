import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import AlbumList from "./index.js";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const albums = [
  {
    userId: 1,
    id: 1,
    title: "quidem molestiae enim",
  },
  {
    userId: 1,
    id: 2,
    title: "sunt qui excepturi placeat culpa",
  },
  {
    userId: 1,
    id: 3,
    title: "omnis laborum odio",
  },
];

describe("Album List", () => {
  test("renders album list without error", () => {
    const wrapper = shallow(<AlbumList albums={albums} />);
    const component = wrapper.find(`[data-test='component-album-list']`);
    expect(component.length).toBe(1);
  });

  test("album list with 2 items", () => {
    const wrapper = shallow(<AlbumList albums={albums} />);
    const albumItems = wrapper.find(`[data-test='album-list-item']`);
    expect(albumItems.length).toBe(3);
  });
});

test("renders album item with title and user id", () => {
  const wrapper = shallow(<AlbumList albums={albums} />);
  const firstAlbumItem = wrapper.find(`[data-test='album-list-item']`).at(0);
  expect(firstAlbumItem.text()).toBe("quidem molestiae enim user: 1");
});
