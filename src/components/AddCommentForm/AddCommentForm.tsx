import { Form, Button, Input } from 'antd';
import React from 'react';
import { useForm, useFormState } from 'react-hook-form';

const { TextArea } = Input;

interface FormInput {
  commentText: string;
}
const AddCommentForm = () => {
  const { register, handleSubmit, control } = useForm<FormInput>();
  const formState = useFormState({
    control,
  });
  console.log('formState', formState.isValid);
  console.log('register', register);

  const onSubmit = (data: any) => console.log('SignIn basic', data);

  return (
    <Form
      className="comments__form"
      onFinish={(data) => {
        handleSubmit(onSubmit)(data);
      }}
    >
      <Form.Item>
        <TextArea
          {...register('commentText', {
            required: true,
          })}
          rows={4}
        />
      </Form.Item>
      <Form.Item>
        <Button disabled={!formState.isValid} htmlType="submit" type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddCommentForm;
