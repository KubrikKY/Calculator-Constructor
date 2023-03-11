import React from 'react';
import classes from './CalcBlock.module.css';

import Result from './compCalc/Result';
import Operation from './compCalc/Operation';
import Num from './compCalc/Num';
import Complete from './compCalc/Complete';

const CalcBlock = (props) => {
  return (
    <div className={classes.CalcBlock}>
      <Result {...props.dragHandlers} id={props.componentCalc[0].id} disabled />
      <Operation
        {...props.dragHandlers}
        id={props.componentCalc[1].id}
        disabled
      />
      <Num {...props.dragHandlers} id={props.componentCalc[2].id} disabled />
      <Complete
        {...props.dragHandlers}
        id={props.componentCalc[3].id}
        disabled
      />
    </div>
  );
};

export default CalcBlock;
