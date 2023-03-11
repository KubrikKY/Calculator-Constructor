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

  const [state, setCalc] = useState({
    toggleRunTime: false,
    mathResult: null,
    selectItem: null,
    componentCalc: [
      {
        id: 0,
        disabled: true,
        comp: <Result {...dragHandlers} id={0} />,
      },
      {
        id: 1,
        disabled: true,
        comp: <Operation {...dragHandlers} id={1} />,
      },
      {
        id: 2,
        disabled: true,
        comp: <Num {...dragHandlers} id={2} />,
      },
      {
        id: 3,
        disabled: true,
        comp: <Complete {...dragHandlers} id={3} />,
      },
    ],
  });

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
    setCalc({ ...state, toggleRunTime: e.target.checked });
  };

  return (
    <div className="App">
      <CalcBlock
        dragHandlers={dragHandlers}
        componentCalc={state.componentCalc}
      />
      <BlockConstructor
        selectList={selectList}
        toggleRunTime={state.toggleRunTime}
        DnD={dragHandlers}
        elements={state.componentCalc}
        selectRunTime={selectRunTimeHandler}
      />
    </div>
  );
}

export default App;
