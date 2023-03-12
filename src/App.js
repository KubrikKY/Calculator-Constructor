import './App.css';
import CalcBlock from './component/CalcBlock/CalcBlock';
import BlockConstructor from './hoc/BlockConstructor/BlockConstructor';
import { useState } from 'react';

import Result from './component/CalcBlock/compCalc/Result';
import Operation from './component/CalcBlock/compCalc/Operation';
import Num from './component/CalcBlock/compCalc/Num';
import Complete from './component/CalcBlock/compCalc/Complete';

function App() {
  const [selectList, setSelectList] = useState([]);
  const [disabledList, setDisabledList] = useState(false);

  const [state, setCalc] = useState({
    toggleRunTime: false,
    mathResult: '',
    selectOperand: '',
    mathOperation: {
      a: '',
      b: '',
      operation: '',
    },
    selectItem: null,
  });

  console.log(state);

  const dragHandlers = state.toggleRunTime && {
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

  const mathCalcHandlers = !state.toggleRunTime && {
    onValue: (value) => {
      setValueHandler(value);
    },
    onOperation: (oper) => {
      setOperationHandler(oper);
    },
    onResult: () => {
      getResultHandler();
    },
  };

  const setValueHandler = (value) => {
    const { a, b, operation } = state.mathOperation;

    if (!operation && String(a).length < 18) {
      setCalc({
        ...state,
        mathOperation: {
          ...state.mathOperation,
          a: +a === state.mathResult ? value : a + value,
        },
        selectOperand: +a === state.mathResult ? value : a + value,
      });
    }

    if (a && operation && String(b).length < 18) {
      setCalc({
        ...state,
        mathOperation: { ...state.mathOperation, b: b + value },
        selectOperand: b + value,
      });
    }
  };

  const setOperationHandler = (oper) => {
    const { a } = state.mathOperation;
    if (a) {
      setCalc({
        ...state,
        mathOperation: { ...state.mathOperation, operation: oper },
      });
    }
  };

  const getResultHandler = () => {
    const { a, b, operation } = state.mathOperation;
    let result;

    if (a && b && operation) {
      switch (operation) {
        case '/':
          if (b === '0') {
            setCalc({
              ...state,
              mathResult: 'Не определено',
              selectOperand: '',
              mathOperation: { a: '', b: '', operation: '' },
            });
            break;
          }
          result = String(a / b).length < 18 ? a / b : (a / b).toFixed(15);
          setCalc({
            ...state,
            mathResult: result,
            selectOperand: '',
            mathOperation: { a: result, b: '', operation: '' },
          });
          break;
        case 'X':
          result = String(a * b).length < 18 ? a * b : (a * b).toFixed(15);
          setCalc({
            ...state,
            mathResult: result,
            selectOperand: '',
            mathOperation: { a: result, b: '', operation: '' },
          });
          break;
        case '-':
          result = String(a - b).length < 18 ? a - b : (a - b).toFixed(15);
          setCalc({
            ...state,
            mathResult: result,
            selectOperand: '',
            mathOperation: { a: result, b: '', operation: '' },
          });
          break;
        case '+':
          result =
            String(+a + +b).length < 18 ? +a + +b : (+a + +b).toFixed(15);
          setCalc({
            ...state,
            mathResult: result,
            selectOperand: '',
            mathOperation: { a: result, b: '', operation: '' },
          });
          break;
        default:
          setCalc({
            ...state,
            mathResult: a,
            selectOperand: '',
            mathOperation: { a: a, b: '', operation: '' },
          });
      }
    }
  };

  const componentCalc = [
    {
      id: 0,
      comp: (
        <Result
          {...dragHandlers}
          disabled={disabledList}
          {...mathCalcHandlers}
          selectOperand={state.selectOperand}
          mathResult={state.mathResult}
        />
      ),
    },
    {
      id: 1,
      comp: (
        <Operation
          {...dragHandlers}
          disabled={disabledList}
          {...mathCalcHandlers}
        />
      ),
    },
    {
      id: 2,
      comp: (
        <Num {...dragHandlers} disabled={disabledList} {...mathCalcHandlers} />
      ),
    },
    {
      id: 3,
      comp: (
        <Complete
          {...dragHandlers}
          disabled={disabledList}
          {...mathCalcHandlers}
        />
      ),
    },
  ];

  const dragOverHandler = (e) => {
    e.preventDefault();

    if (e.target.classList.contains('SelectDiv')) {
      e.target.style.background = '#F0F9FF';
      return;
    }
    if (
      e.target.closest('.SelectDiv') &&
      e.target.classList.contains('SelectElem')
    ) {
      e.target.style.borderBottom = '1px solid #5D5FEF';
    }
  };

  const dragLeaveHandler = (e) => {
    if (e.target.classList.contains('SelectDiv')) {
      e.target.style.background = '#fff';
      return;
    }
    if (
      e.target.closest('.SelectDiv') &&
      e.target.classList.contains('SelectElem')
    ) {
      e.target.style.borderBottom = 'none';
    }
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
