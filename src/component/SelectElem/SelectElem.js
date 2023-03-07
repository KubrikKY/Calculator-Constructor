import classes from './SelectElem.module.css';

const SelectElem = ({ selectElem }) => {
  const cls = [classes.SelectElem];

  const noElem = (
    <>
      <img src="./img/icon1.png" alt="icon select" />
      <h3>Перетащите сюда</h3>
      <p>любой элемент из левой панели</p>
    </>
  );

  return (
    <div className={cls.join(' ')}>
      {selectElem.length
        ? selectElem.map((e) => {
            return e;
          })
        : noElem}
    </div>
  );
};

export default SelectElem;
