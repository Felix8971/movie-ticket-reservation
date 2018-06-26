import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Modal from '../Modal';
import Button from '../Button';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('Modal', () => {

    // add a div with #modal-root id to the global body
    const modalRoot = global.document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    const body = global.document.querySelector('body');
    body.appendChild(modalRoot);

    it('should be defined', () => {
      expect(Modal).toBeDefined();
    });

    it('should render correctly', () => {
      const tree = shallow(
        <Modal msg={"Success!"} onCloseModal={()=>{}} />
      );
      expect(tree).toMatchSnapshot();
    });

    it('should not render', () => {
      const tree = shallow(
        <Modal msg={""} onCloseModal={()=>{}} />
      );
      expect(tree.find('div')).toHaveLength(0);
    });

    // const mockFn = jest.fn();
    // it('should contain a button', () => {
    //   const tree = shallow(
    //     <Modal msg={"hey!"} onCloseModal={mockFn} />
    //   );
    //   expect(tree.find(Button)).toHaveLength(1);
    // })

});