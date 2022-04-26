import styled from 'styled-components';
import { PagesWrap } from './PagesWrap';
import Header from './Header/Header';

export default function ProfilePage({ children }) {
  return (
    <PagesWrap>
      <Header>
        <h3>Profile</h3>
      </Header>
    </PagesWrap>
  );
}
