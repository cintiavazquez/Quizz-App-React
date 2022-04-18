import styled from 'styled-components';

export const NavWrap = styled.ul`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 8vh;
  width: 101vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  align-items: center;
  background-color: var(--darkest-color);
`;
