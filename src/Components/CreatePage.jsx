import CreateForm from './Form/Form';
import Header from './Header/Header';

import { PagesWrap } from './PagesWrap';
export default function CreatePage() {
  return (
    <PagesWrap>
      <Header>
        <h3>Create</h3>
      </Header>
      <CreateForm />
    </PagesWrap>
  );
}
