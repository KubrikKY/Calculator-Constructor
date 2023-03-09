import classes from './SelectElem.module.css';
import React from 'react';

const SelectElem = (props) => {
  const cls = [classes.SelectElem, 'SelectDiv'];

  const noElem = (
    <>
      <img src="./img/icon1.png" alt="icon select" />
      <h3>Перетащите сюда</h3>
      <p>любой элемент из левой панели</p>
    </>
  );

  if (props.selectElem.length) {
    cls.push(classes.WithElem);
  }

  return (
    <div
      className={cls.join(' ')}
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}
      onDragLeave={props.onDragLeave}
    >
      {props.selectElem.length
        ? props.selectElem.map((e) => {
            return (
              <React.Fragment key={e}>{props.elements[e].comp}</React.Fragment>
            );
          })
        : noElem}
    </div>
  );
};

export default SelectElem;
