import classes from './compCalc.module.css';

const Result = (props) => {
  const cls = [classes.Result, 'SelectElem'];
  return (
    <div
      className={cls.join(' ')}
      draggable={props.draggable}
      onDragStart={(e) => props.onDragStart(e, props.id)}
    >
      <input
        type="text"
        disabled={props.disabled}
        value={props.selectOperand || props.mathResult || '0'}
        readOnly
      ></input>
    </div>
  );
};

export default Result;
