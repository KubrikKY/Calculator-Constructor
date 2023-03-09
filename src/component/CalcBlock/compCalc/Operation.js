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
      <button>/</button>
      <button>X</button>
      <button>-</button>
      <button>+</button>
    </div>
  );
};

export default Operation;
