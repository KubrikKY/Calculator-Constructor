import classes from './BlockConstructor.module.css';
import Selector from '../../component/Selector/Selector';
import SelectElem from '../../component/SelectElem/SelectElem';

const BlockConstructor = (props) => {
  return (
    <div className={classes.BlockConstructor}>
      <Selector />

      <SelectElem
        selectElem={props.selectList}
        {...props.DnD}
        elements={props.elements}
      />
    </div>
  );
};

export default BlockConstructor;
