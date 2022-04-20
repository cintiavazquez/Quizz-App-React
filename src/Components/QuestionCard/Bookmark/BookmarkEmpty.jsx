export const BookmarkEmpty = ({ Visible, onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      height="44px"
      viewBox="0 0 24 24"
      width="44px"
      fill={Visible ? '#fdfdfd' : 'none'}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
    </svg>
  );
};
