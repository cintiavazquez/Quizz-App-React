import RenderTags from './RenderTags';
import RenderButton from './RenderButton';
import RenderBookmark from './RenderBookmark';

export default function RenderQuestion() {
  return (
    <article className="question">
      <h3 class="title">Question</h3>
      <RenderBookmark />
      <div class="question__wrap js-questionwrap">
        <QuestionText text="Is this question 1?" />
        <RenderButton />
        <p class="question__answer">
          Velit ducimus officia quos cum modi obcaecati dolor.
        </p>
      </div>
      <section class="question__tags">
        <RenderTags name="tag1" />
        <RenderTags name="tag2" />
        <RenderTags name="tag3" />
        <RenderTags name="tag4" />
      </section>
    </article>
  );
}

function QuestionText(question) {
  return <p class="question__text">{question.text}</p>;
}
