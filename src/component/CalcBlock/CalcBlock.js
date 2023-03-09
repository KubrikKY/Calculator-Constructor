import React from 'react';
import classes from './CalcBlock.module.css';

const CalcBlock = ({ componentCalc }) => {
  return (
    <div className={classes.CalcBlock}>
      {componentCalc.map((e) => {
        return <React.Fragment key={e.id}>{e.comp} </React.Fragment>;
      })}
    </div>
  );
};

export default CalcBlock;
