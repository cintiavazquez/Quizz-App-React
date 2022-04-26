import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLiItem = styled(NavLink)`
  border-right: 2px solid var(--lightest-color);

  &:hover {
    color: yellow;
  }

  &.active {
    color: #dc81c1;
  }
`;
