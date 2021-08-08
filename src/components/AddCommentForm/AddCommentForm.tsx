import { Form, Button, Input } from 'antd';
import { useRef, useState } from 'react';

const { TextArea } = Input;

interface AddCommentFormProps {
   onSubmit: (value: string) => void;
   focus: boolean;
}
const focusOnTextArea = (ref: any) => {
   ref.current?.focus({ cursor: 'end' })
}

const AddCommentForm = ({ onSubmit, focus }: AddCommentFormProps) => {
   const [textAreaValue, setTextAreaValue] = useState('');
   const textAreaRef = useRef<any>(null);
   if (focus) focusOnTextArea(textAreaRef);

   const disabled: boolean = textAreaValue.length === 0 ? true : false
   return (
      <Form
         className="comments__form"
         onFinish={() => {
            onSubmit(textAreaValue);
            setTextAreaValue('');
         }}>
         <Form.Item>
            <TextArea
               ref={textAreaRef}
               value={textAreaValue}
               onChange={(e) => { setTextAreaValue(e.target.value) }}
               rows={4}
            />
         </Form.Item>
         <Form.Item>
            <Button
               disabled={disabled}
               htmlType="submit"
               type="primary">
               Add Comment
            </Button>
         </Form.Item>
      </Form>
   )
}

export default AddCommentForm