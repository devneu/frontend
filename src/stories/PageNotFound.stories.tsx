import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PageNotFound from '../components/PageNotFound/PageNotFound';

export default {
  title: 'Page Not Found/Page404',
  component: PageNotFound,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof PageNotFound>;

const Template: ComponentStory<typeof PageNotFound> = () => <PageNotFound />;

export const Primary = Template.bind({});
Primary.args = { message: 'message' };
