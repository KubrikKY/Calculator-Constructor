import classes from './compCalc.module.css';

const Operation = () => {
  return (
    <div className={classes.Operation}>
      <button>/</button>
      <button>X</button>
      <button>-</button>
      <button>+</button>
    </div>
  );
};

export default Operation;
