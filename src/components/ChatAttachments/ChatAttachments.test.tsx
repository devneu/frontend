import React from 'react';
import renderer from 'react-test-renderer';
import ChatAttachments from './ChatAttachments';
import { attachments } from '../../mock/mockChat';

describe('ChatAttachments', () => {
  it('Should successfully render', () => {
    const wrapper = renderer.create(<ChatAttachments attachments={attachments} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
