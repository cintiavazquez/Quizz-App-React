import { FormItemWrap } from './FormItemWrap.styled';
import { FormTextArea } from './FormItem.styled';
export default function FormItem({ label, labelText, name, id, placeholder }) {
  return (
    <FormItemWrap>
      <label htmlFor={label}>{labelText}</label>
      <FormTextArea
        name={name}
        id={id}
        cols="30"
        rows="10"
        placeholder={placeholder}
      ></FormTextArea>
    </FormItemWrap>
  );
}
