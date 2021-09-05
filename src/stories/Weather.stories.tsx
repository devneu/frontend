import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Weather from '../pages/Weather/Weather';

export default {
  title: 'Pages/Weather',
  component: Weather,
} as ComponentMeta<typeof Weather>;

const Template: ComponentStory<typeof Weather> = () => <Weather />;

export const Primary = Template.bind({});
