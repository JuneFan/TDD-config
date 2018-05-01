import React from 'react';
import { shallow } from 'enzyme';
import Unit from './unit';


describe('unit-test', () => {
    const unit = {
        title: 'my first unit test',
        artists: ['Mozart', 'Picas']
    }
    it('H1 part', () => {
        const wrapper = shallow(<Unit unit = {unit} />)
        expect(wrapper.find('h1').text()).toEqual('my first unit test')
    })
})