import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Weather from '../pages/Weather/Weather';

export default {
  title: 'Pages/ComingSoon',
  component: Weather,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof Weather>;

const Template: ComponentStory<typeof Weather> = () => <Weather />;

export const Primary = Template.bind({});
