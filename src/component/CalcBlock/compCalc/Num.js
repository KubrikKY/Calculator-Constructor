import classes from './compCalc.module.css';

const Num = (props) => {
  const cls = [classes.Num, 'SelectElem'];
  if (!props.disabled) {
    cls.push(classes.activeElem);
  }
  const operand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ','];
  return (
    <div
      className={cls.join(' ')}
      draggable={props.draggable}
      onDragStart={(e) => props.onDragStart(e, props.id)}
      onDragEnd={props.onDragEnd}
    >
      {operand.map((e, i) => {
        return (
          <button
            key={i}
            disabled={props.disabled}
            value={e === ',' ? '.' : e}
            onClick={(e) => props.onValue(e.target.value)}
          >
            {e}
          </button>
        );
      })}
    </div>
  );
};

export default Num;
