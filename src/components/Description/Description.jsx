import css from "./Description.module.css";

const Description = () => {
  return (
    <div>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.text}>
        Please leave your feedback{" "}
        <span className={css.partTwoText}>about</span> our service{" "}
        <span>by </span>
        selecting one <span className={css.partTwoText}>
          of the
        </span> options <span className={css.partTwoText}>below</span>.
      </p>
    </div>
  );
};

export default Description;
