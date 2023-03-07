import classes from './compCalc.module.css';

const Operation = () => {
  const cls = [classes.Operation];
  return (
    <div className={cls.join(' ')}>
      <button>/</button>
      <button>X</button>
      <button>-</button>
      <button>+</button>
    </div>
  );
};

export default Operation;
