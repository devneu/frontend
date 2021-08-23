import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PageNotFound from '../components/PageNotFound/PageNotFound';

export default {
  title: 'Pages/NotFound',
  component: PageNotFound,
} as ComponentMeta<typeof PageNotFound>;

const Template: ComponentStory<typeof PageNotFound> = () => <PageNotFound />;

export const Primary = Template.bind({});
