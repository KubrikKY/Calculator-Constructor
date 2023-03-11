import classes from './compCalc.module.css';

const Result = (props) => {
  console.log(props);
  const cls = [classes.Result];
  return (
    <div
      className={cls.join(' ')}
      draggable={props.draggable}
      onDragStart={(e) => props.onDragStart(e, props.id)}
    >
      <input type="number" disabled={props.disabled}></input>
    </div>
  );
};

export default Result;
