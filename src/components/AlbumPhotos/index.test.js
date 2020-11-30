import React from "react";
import { MemoryRouter } from "react-router-dom";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import AlbumPhotos from "./index.js";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders album photos without error", () => {
  const wrapper = mount(
    <MemoryRouter>
      <AlbumPhotos />
    </MemoryRouter>
  );
  const component = wrapper.find(`[data-test='component-album-photos']`);
  expect(component.length).toBe(1);
});
