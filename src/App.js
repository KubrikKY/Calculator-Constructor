import './App.css';
import CalcBlock from './component/CalcBlock/CalcBlock';
import SelectElem from './component/SelectElem/SelectElem';
import BlockConstructor from './hoc/BlockConstructor/BlockConstructor';
import Selector from './component/Selector/Selector';
import { useState } from 'react';

import Result from './component/CalcBlock/compCalc/Result';
import Operation from './component/CalcBlock/compCalc/Operation';
import Num from './component/CalcBlock/compCalc/Num';
import Complete from './component/CalcBlock/compCalc/Complete';

function App() {
  const [state, setState] = useState({
    toggleRunTime: false,
    mathResult: null,
    selectList: [],
    componentCalc: [
      { id: 0, comp: <Result /> },
      { id: 1, comp: <Operation /> },
      { id: 2, comp: <Num /> },
      { id: 3, comp: <Complete /> },
    ],
  });

  const addElemHandler = (elem) => {
    setState({ ...state, selectList: [...state.selectList, elem] });
  };

  return (
    <div className="App">
      <CalcBlock addElem={addElemHandler} componentCalc={state.componentCalc} />
      <BlockConstructor>
        <Selector />

        <SelectElem selectElem={state.selectList} />
      </BlockConstructor>
    </div>
  );
}

export default App;
