export default function RenderBookmark() {
  return (
    <aside class="question__bookmark js-question__bookmark">
      <img
        class="bookmark js-bookmarkempty js-bookmark"
        src="./components/images/bookmark_border_white_24dp.svg"
        alt=""
      />
      <img
        class="bookmark display-none js-bookmarkfilled js-bookmark"
        src="./components/images/bookmark_white_24dp.svg"
        alt=""
      />
    </aside>
  );
}
