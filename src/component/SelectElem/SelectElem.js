import classes from './SelectElem.module.css';
import Selector from '../Selector/Selector';

const SelectElem = () => {
  return (
    <div className={classes.selectBlock}>
      <Selector />

      <div className={classes.SelectElem}>
        <img src="../../img/icon1.png" alt="icon select" />
        <h3>Перетащите сюда</h3>
        <p>любой элемент из левой панели</p>
      </div>
    </div>
  );
};

export default SelectElem;
