import classes from './compCalc.module.css';

const Complete = (props) => {
  const cls = [classes.Complete];
  return (
    <div
      className={cls.join(' ')}
      draggable={props.draggable}
      onDragStart={(e) => props.onDragStart(e, props.id)}
    >
      <button disabled={props.disabled}>=</button>
    </div>
  );
};

export default Complete;
