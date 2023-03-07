import classes from './compCalc.module.css';

const Complete = () => {
  const cls = [classes.Complete];
  return (
    <div className={cls.join(' ')}>
      <button>=</button>
    </div>
  );
};

export default Complete;
