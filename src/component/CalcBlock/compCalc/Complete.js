import classes from './compCalc.module.css';

const Complete = (props) => {
  const cls = [classes.Complete, 'SelectElem'];
  return (
    <div
      className={cls.join(' ')}
      draggable={props.draggable}
      onDragStart={(e) => props.onDragStart(e, props.id)}
    >
      <button disabled={props.disabled} onClick={props.onResult}>
        =
      </button>
    </div>
  );
};

export default Complete;
