import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Button from './Button';

//if snapshot failed with enzyme run `yarn test -u` to update it

import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
    it('should be defined', () => {
      expect(Button).toBeDefined();
    });
    
    it('should render correctly', () => {
      const tree = shallow(
        <Button handleClick={()=>{}}>OK</Button>
      );
      expect(tree).toMatchSnapshot();
    });

    it('should render contain text', () => {
        const tree = shallow(
          <Button handleClick={()=>{}}>OK</Button>
        );
        expect(tree.text()).toEqual('OK');
      });

    const mockFn = jest.fn();

    it('should call mock function when button is clicked', () => {
        const tree = shallow(
          <Button handleClick={mockFn} />
        );
        tree.simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });
});