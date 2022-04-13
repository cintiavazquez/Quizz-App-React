import styled from 'styled-components';
import { ButtonShowHide } from './Button.styled';
export default function Button() {
  return (
    <ButtonShowHide className="button button--hide display-none js-buttonhide">
      Show answer
    </ButtonShowHide>
  );
}
