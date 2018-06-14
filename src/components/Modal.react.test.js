import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Modal from './Modal';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('Modal', () => {

    it('should be defined', () => {
      expect(Modal).toBeDefined();
    });

    it('should render correctly', () => {
      const tree = shallow(
        <Modal msg={"Success!"} onCloseModal={()=>{}} />
      );
      expect(tree).toMatchSnapshot();
    });


});