export default function Bookmark() {
  return (
    <aside className="question__bookmark js-question__bookmark">
      <img
        className="bookmark js-bookmarkempty js-bookmark"
        // src="./components/images/bookmark_border_white_24dp.svg"
        // alt=""
      />
      <img
        className="bookmark display-none js-bookmarkfilled js-bookmark"
        // src="./components/images/bookmark_white_24dp.svg"
        // alt=""
      />
    </aside>
  );
}
