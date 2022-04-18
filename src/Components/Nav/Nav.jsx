import { IconAdd } from './IconAdd';
import { NavWrap } from './Nav.styled';
import { IconBookmark } from './IconBookmark';
import { IconCottage } from './IconCottage';
import { IconPerson } from './IconPerson';
import NavItem from './NavItem';

export default function Nav() {
  return (
    <nav>
      <NavWrap>
        <NavItem>
          <IconCottage />
        </NavItem>
        <NavItem>
          <IconBookmark />
        </NavItem>
        <NavItem>
          <IconAdd />
        </NavItem>
        <NavItem>
          <IconPerson />
        </NavItem>
      </NavWrap>
    </nav>
  );
}
