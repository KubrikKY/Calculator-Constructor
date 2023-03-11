import './App.css';
import CalcBlock from './component/CalcBlock/CalcBlock';
import BlockConstructor from './hoc/BlockConstructor/BlockConstructor';
import { useState } from 'react';

import Result from './component/CalcBlock/compCalc/Result';
import Operation from './component/CalcBlock/compCalc/Operation';
import Num from './component/CalcBlock/compCalc/Num';
import Complete from './component/CalcBlock/compCalc/Complete';

function App() {
  const dragHandlers = {
    onDragOver: (e) => {
      dragOverHandler(e);
    },
    onDragLeave: (e) => {
      dragLeaveHandler(e);
    },
    onDragStart: (e, id) => {
      dragStartHandler(e, id);
    },
    onDragEnd: (e) => {
      dragEndHandler(e);
    },
    onDrop: (e) => {
      dropHandler(e);
    },
    draggable: true,
  };

  const [selectList, setSelectList] = useState([]);
  const [disabledList, setDisabledList] = useState(false);

  const [state, setCalc] = useState({
    toggleRunTime: false,
    mathResult: null,
    selectItem: null,
  });

  const componentCalc = [
    {
      id: 0,
      comp: <Result {...dragHandlers} disabled={disabledList} />,
    },
    {
      id: 1,
      comp: <Operation {...dragHandlers} disabled={disabledList} />,
    },
    {
      id: 2,
      comp: <Num {...dragHandlers} disabled={disabledList} />,
    },
    {
      id: 3,
      comp: <Complete {...dragHandlers} disabled={disabledList} />,
    },
  ];

  const dragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.classList.contains('SelectDiv')) {
      e.target.style.background = '#F0F9FF';
    }
  };

  const dragLeaveHandler = (e) => {
    e.target.style.background = '#fff';
  };

  const dragStartHandler = (e, id) => {
    if (e.target.draggable) {
      setCalc({ ...state, selectItem: id });
    }
  };

  const dragEndHandler = (e) => {
    const container = e.target;
    if (container.draggable) {
      setCalc({ ...state, selectItem: null });
    }
  };

  const dropHandler = (e) => {
    e.preventDefault();
    const idElem = state.selectItem;
    if (!selectList.includes(idElem)) {
      const newSelectList = [...selectList];
      !idElem ? newSelectList.unshift(idElem) : newSelectList.push(idElem);
      setSelectList([...newSelectList]);
    }
  };

  const selectRunTimeHandler = (e) => {
    setDisabledList(e.target.checked);
    setCalc({ ...state, toggleRunTime: e.target.checked });
  };

  return (
    <div className="App">
      <CalcBlock
        dragHandlers={dragHandlers}
        componentCalc={componentCalc}
        selectList={selectList}
      />
      <BlockConstructor
        selectList={selectList}
        toggleRunTime={state.toggleRunTime}
        DnD={dragHandlers}
        elements={componentCalc}
        selectRunTime={selectRunTimeHandler}
      />
    </div>
  );
}

export default App;
