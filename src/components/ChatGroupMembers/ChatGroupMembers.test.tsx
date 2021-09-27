import React from 'react';
import renderer from 'react-test-renderer';
import ChatGroupMembers from './ChatGroupMembers';
import { groupChat } from '../../mock/mockChat';

describe('ChatGroupMembers', () => {
  it('Should successfully render', () => {
    const wrapper = renderer.create(<ChatGroupMembers member={groupChat} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
