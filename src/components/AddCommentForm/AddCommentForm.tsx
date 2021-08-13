import { Form, Button, Input } from 'antd';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

const { TextArea } = Input;

interface AddCommentFormProps {
  onSubmit: (value: string) => void;
  focus: boolean;
}
const focusOnTextArea = (ref: any) => {
  ref.current?.focus({ cursor: 'end' });
};
interface FormInput {
  commentText: string;
}

const AddCommentForm = ({ onSubmit, focus }: AddCommentFormProps) => {
  const { register, handleSubmit, watch, reset } = useForm<FormInput>();

  const addComment = (data: FormInput) => onSubmit(data.commentText);

  const textAreaRef = useRef<any>(null);

  if (focus) focusOnTextArea(textAreaRef);

  let disabled: boolean = true;
  const textAreaValue = watch('commentText');
  console.log(textAreaValue);

  if (textAreaValue && textAreaValue.length !== 0) disabled = false;
  return (
    <Form
      className="comments__form"
      onFinish={(data) => {
        handleSubmit(addComment)(data);
        reset({ commentText: '' });
      }}
    >
      <Form.Item>
        <TextArea
          {...register('commentText', {
            required: true,
          })}
          value={textAreaValue}
          name="commentText"
          ref={textAreaRef}
          rows={4}
        />
      </Form.Item>
      <Form.Item>
        <Button disabled={disabled} htmlType="submit" type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddCommentForm;
