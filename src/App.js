import './App.css';
import CalcBlock from './component/CalcBlock/CalcBlock';
import SelectElem from './component/SelectElem/SelectElem';
import BlockConstructor from './hoc/BlockConstructor/BlockConstructor';
import Selector from './component/Selector/Selector';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({
    toggleRunTime: false,
    mathResult: null,
  });
  return (
    <div className="App">
      <CalcBlock />

      <BlockConstructor>
        <Selector />

        <SelectElem />
      </BlockConstructor>
    </div>
  );
}

export default App;
