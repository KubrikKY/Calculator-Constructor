import classes from './compCalc.module.css';

const Result = () => {
  const cls = [classes.Result];
  return (
    <div className={cls.join(' ')}>
      <input type="number"></input>
    </div>
  );
};

export default Result;
