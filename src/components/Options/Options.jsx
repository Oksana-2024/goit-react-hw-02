import css from "./Options.module.css";

const Options = ({ onGood, onNeutral, onBad, onReset }) => {
  return (
    <div className={css.buttonBox}>
      <button onClick={onGood} className={css.button} type="button">
        Good
      </button>
      <button onClick={onNeutral} className={css.button} type="button">
        Neutral
      </button>
      <button onClick={onBad} className={css.button} type="button">
        Bad
      </button>
      <button onClick={onReset} className={css.button} type="button">
        Reset
      </button>
    </div>
  );
};

export default Options;
