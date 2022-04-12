import RenderTags from './RenderTags';
import RenderButton from './RenderButton';
import RenderBookmark from './RenderBookmark';

export default function RenderQuestion() {
  return (
    <article className="question">
      <h3 className="title">Question</h3>
      <RenderBookmark />
      <div className="question__wrap js-questionwrap">
        <p>Is this question 1?"</p>
        <RenderButton />
        <p className="question__answer">
          Velit ducimus officia quos cum modi obcaecati dolor.
        </p>
      </div>
      <section className="question__tags">
        <RenderTags name="tag1" />
        <RenderTags name="tag2" />
        <RenderTags name="tag3" />
        <RenderTags name="tag4" />
      </section>
    </article>
  );
}
