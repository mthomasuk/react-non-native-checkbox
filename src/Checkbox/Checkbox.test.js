import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Checkbox from './Checkbox';

it('Checkbox renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Checkbox />, div);
});

test('Checkbox changes internal span text after click', () => {

  const checkbox = shallow(
    <Checkbox />
  );

  expect(checkbox.find('span').text()).toEqual("");
  checkbox.find('label').simulate('click');
  expect(checkbox.find('span').text()).toEqual('✓');
});

test('If set to disabled, Checkbox does not change internal span text after click', () => {

  const checkbox = shallow(
    <Checkbox disabled={true}/>
  );

  expect(checkbox.find('span').text()).toEqual("");
  checkbox.find('label').simulate('click');
  expect(checkbox.find('span').text()).toEqual("");
});

test('Checkbox prop data-checked changes after click', () => {

  const checkbox = shallow(
    <Checkbox />
  );

  expect(checkbox.find('div').node.props['data-checked']).toEqual(false);
  checkbox.find('div').simulate('click');
  expect(checkbox.find('div').node.props['data-checked']).toEqual(true);
});

test('If set to disabled, Checkbox prop data-checked does not change after click', () => {

  const checkbox = shallow(
    <Checkbox disabled={true}/>
  );

  expect(checkbox.find('div').node.props['data-checked']).toEqual(false);
  checkbox.find('div').simulate('click');
  expect(checkbox.find('div').node.props['data-checked']).toEqual(false);
});


test('Checkbox wrapping label receives modified className from props', () => {

  const checkbox = shallow(
    <Checkbox classNameModifier="modified"/>
  );

  expect(checkbox.hasClass('modified')).toEqual(true);
});
