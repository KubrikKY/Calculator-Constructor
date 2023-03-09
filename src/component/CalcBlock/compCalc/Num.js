import classes from './compCalc.module.css';

const Num = (props) => {
  const cls = [classes.Num];
  return (
    <div
      className={cls.join(' ')}
      draggable={props.draggable}
      onDragStart={(e) => props.onDragStart(e, props.id)}
      onDragEnd={props.onDragEnd}
    >
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>0</button>
      <button>,</button>
    </div>
  );
};

export default Num;
