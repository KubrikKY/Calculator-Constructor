import classes from './BlockConstructor.module.css';

const BlockConstructor = (props) => {
  return <div className={classes.BlockConstructor}>{props.children}</div>;
};

export default BlockConstructor;
