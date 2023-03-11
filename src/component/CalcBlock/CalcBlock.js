import React from 'react';
import classes from './CalcBlock.module.css';

// import Result from './compCalc/Result';
// import Operation from './compCalc/Operation';
// import Num from './compCalc/Num';
// import Complete from './compCalc/Complete';

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
