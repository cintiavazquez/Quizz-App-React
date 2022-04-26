import { IconAdd } from './IconAdd';
import { NavWrap } from './Nav.styled';
import { IconBookmark } from './IconBookmark';
import { IconCottage } from './IconCottage';
import { IconPerson } from './IconPerson';
import { NavLiItem } from './NavItem.styled';

export default function Nav() {
  return (
    <NavWrap>
      <NavLiItem to="/Home">
        <IconCottage />
      </NavLiItem>
      <NavLiItem to="/Bookmark">
        <IconBookmark />
      </NavLiItem>
      <NavLiItem to="/Create">
        <IconAdd />
      </NavLiItem>
      <NavLiItem to="/Profile">
        <IconPerson />
      </NavLiItem>
    </NavWrap>
  );
}
