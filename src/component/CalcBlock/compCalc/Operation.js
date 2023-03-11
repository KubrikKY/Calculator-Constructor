import classes from './compCalc.module.css';

const Operation = (props) => {
  const cls = [classes.Operation];
  return (
    <div
      className={cls.join(' ')}
      draggable={props.draggable}
      onDragStart={(e) => props.onDragStart(e, props.id)}
      onDragEnd={props.onDragEnd}
    >
      <button disabled={props.disabled}>/</button>
      <button disabled={props.disabled}>X</button>
      <button disabled={props.disabled}>-</button>
      <button disabled={props.disabled}>+</button>
    </div>
  );
};

export default Operation;
