import classes from './SelectElem.module.css';

const SelectElem = () => {
  const cls = [classes.SelectElem];
  return (
    <div className={cls.join(' ')}>
      <img src="./img/icon1.png" alt="icon select" />
      <h3>Перетащите сюда</h3>
      <p>любой элемент из левой панели</p>
    </div>
  );
};

export default SelectElem;
