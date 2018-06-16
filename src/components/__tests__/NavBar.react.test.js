import React from 'react';
import { shallow, mount, render } from 'enzyme';
import NavBar from '../NavBar';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('NavBar', () => {

    it('should be defined', () => {
      expect(NavBar).toBeDefined();
    });

    it('should render correctly', () => {
      const tree = shallow(
        <NavBar/>
      );
      expect(tree).toMatchSnapshot();
    });

    it('should contain 6 link', () => {
      const tree = shallow(
        <NavBar/>
      );
      expect(tree.find('a')).toHaveLength(6);
    })

});