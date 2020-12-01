import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import PhotoModal from "./index.js";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const photoSelected = {
  albumId: 1,
  id: 26,
  title: "asperiores nobis voluptate qui",
  url: "https://via.placeholder.com/600/474645",
  thumbnailUrl: "https://via.placeholder.com/150/474645",
};

test("renders photo modal without error", () => {
  const wrapper = shallow(<PhotoModal photoSelected={photoSelected} />);
  const component = wrapper.find(`[data-test='component-photo-modal']`);
  expect(component.length).toBe(1);
});

test("photo modal display full size photo", () => {
  const wrapper = shallow(<PhotoModal photoSelected={photoSelected} />);
  const component = wrapper.find(`[data-test='component-photo-modal']`);
  expect(component.find("img").prop("src")).toEqual(photoSelected.url);
});

test("photo modal display alt title", () => {
  const wrapper = shallow(<PhotoModal photoSelected={photoSelected} />);
  const component = wrapper.find(`[data-test='component-photo-modal']`);
  expect(component.find("img").prop("alt")).toEqual(photoSelected.title);
});
