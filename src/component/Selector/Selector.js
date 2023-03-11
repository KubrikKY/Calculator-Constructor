import classes from './Selector.module.css';

const Selector = (props) => {
  const cls = [classes.slider, classes.round];

  return (
    <div className={classes.CheckBoxContainer}>
      <label className={classes.switch}>
        <input
          type="checkbox"
          className={classes.checkbox}
          onChange={props.selectRunTime}
        />
        <span className={cls.join(' ')}>
          <div className={classes.Selector}>
            {!props.toggleRunTime ? (
              <img src="./img/eyeColor.png" alt="eye color" />
            ) : (
              <img src="./img/eye.png" alt="eye non active" />
            )}
            <p>Runtime</p>
          </div>
          <div className={classes.Selector}>
            {props.toggleRunTime ? (
              <img src="./img/tagColor.png" alt="tag color" />
            ) : (
              <img src="./img/tag.png" alt="tag non active" />
            )}
            <p>Constructor</p>
          </div>
        </span>
      </label>
    </div>
  );
};

export default Selector;
