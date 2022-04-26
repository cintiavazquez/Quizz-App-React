import { PagesWrap } from './PagesWrap';
import Header from './Header/Header';

export default function BookmarkPage({ children }) {
  return (
    <>
      <PagesWrap>
        <Header>
          <h3>Bookmarked</h3>
        </Header>
      </PagesWrap>
    </>
  );
}
