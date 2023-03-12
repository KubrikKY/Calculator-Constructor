import classes from './compCalc.module.css';

const Operation = (props) => {
  const cls = [classes.Operation];
  const operation = ['/', 'X', '-', '+'];
  return (
    <div
      className={cls.join(' ')}
      draggable={props.draggable}
      onDragStart={(e) => props.onDragStart(e, props.id)}
      onDragEnd={props.onDragEnd}
    >
      {operation.map((e, i) => {
        return (
          <button
            disabled={props.disabled}
            value={e}
            onClick={(e) => props.onOperation(e.target.value)}
            key={i}
          >
            {e}
          </button>
        );
      })}
    </div>
  );
};

export default Operation;
