import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormErrorMessageProps from "../components/FormErrorMessage/FormErrorMassage";


export default {
    title: 'Form/FormErrorMessageProps',
    component: FormErrorMessageProps,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FormErrorMessageProps>;

const Template: ComponentStory<typeof FormErrorMessageProps> = (args) => <FormErrorMessageProps {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    message: "message"
};

