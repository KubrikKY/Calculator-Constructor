import classes from './CalcBlock.module.css';

import Result from './compCalc/Result';
import Operation from './compCalc/Operation';
import Num from './compCalc/Num';
import Complete from './compCalc/Complete';

const CalcBlock = () => {
  return (
    <div className={classes.CalcBlock}>
      <Result />
      <Operation />
      <Num />
      <Complete />
    </div>
  );
};

export default CalcBlock;
