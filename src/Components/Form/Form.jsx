import { FormWrap } from './Form.styled';
import { CreateButton } from './CreateButton.styled';
import FormItem from './FormItem';
import { useState } from 'react';

export default function CreateForm(onSubmitForm) {
  //   const [inputValue, setInputValue] = useState('');
  return (
    <>
      <FormWrap
        onSubmit={event => {
          event.preventDefault();
          onSubmitForm(inputValue);
        }}
      >
        <FormItem
          label="Add question"
          labelText="Add your question"
          name="Add_question"
          id="Add_question"
          placeholder="Why do developers always use dark mode?"
          //   onChange={event => setInputValue(event.target.value)}
        />
        <FormItem
          label="Add answer"
          labelText="Add your answer"
          name="Add_answer"
          id="Add_answer"
          placeholder="Because bugs are attracted to light"
        />
        <FormItem
          label="Add tags"
          labelText="Add your tags separated by commas"
          name="Add_tags"
          id="Add_tags"
          placeholder="HTML, CSS, JS..."
        />
        <CreateButton type="submit">Create</CreateButton>
      </FormWrap>
    </>
  );
}
