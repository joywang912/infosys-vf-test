import React from 'react';
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('App renders without error', () => {
  const wrapper = shallow(<App />);
  const component =wrapper.find(`[data-test='component-app']`);
  expect(component.length).toBe(1);
});
