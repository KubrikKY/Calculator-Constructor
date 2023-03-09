import classes from './compCalc.module.css';

const Result = (props) => {
  const cls = [classes.Result];
  return (
    <div
      className={cls.join(' ')}
      draggable={props.draggable}
      onDragStart={(e) => props.onDragStart(e, props.id)}
      onDragEnd={props.onDragEnd}
    >
      <input type="number"></input>
    </div>
  );
};

export default Result;
