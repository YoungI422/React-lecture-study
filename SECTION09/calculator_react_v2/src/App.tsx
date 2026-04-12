import { useState } from "react";
import CalcButton from "./components/CalcButton";

interface CalculatorState {
  currentNumber: string; // 현재 입력/표시되는 숫자
  previousNumber: string; // 이전에 입력된 숫자 (연산자 입력 후 저장됨)
  operation: string | null; // 현재 선택된 연산자 (+, -, *, /)
  isNewNumber: boolean; // 새로운 숫자 입력 시작 여부
}

interface ButtonConfig {
  value: string;
  className?: string;
  onClick: React.MouseEventHandler<HTMLInputElement>;
}

const initialState: CalculatorState = {
  currentNumber: "0",
  previousNumber: "",
  operation: null,
  isNewNumber: true,
};

const performCalculation = (a: number, b: number, op: string): number => {
  let result: number;
  switch (op) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      return b;
  }
  // 결과를 소수점 아래 10자리까지 반올림 후 숫자로 변환
  return parseFloat(result.toFixed(10));
};

export default function App() {
  const [state, setState] = useState<CalculatorState>(initialState);

  const handleNumberClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setState((prevState) => ({
      ...prevState,
      currentNumber: prevState.isNewNumber
        ? value
        : prevState.currentNumber + value,
      isNewNumber: false,
    }));
  };

  const handleOperatorClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const operator = event.currentTarget.value;
    setState((prevState) => {
      if (prevState.currentNumber === "0") return prevState;

      const current = parseFloat(prevState.currentNumber);

      if (prevState.previousNumber && prevState.operation) {
        const prev = parseFloat(prevState.previousNumber);
        const result = performCalculation(prev, current, prevState.operation);
        return operator === "="
          ? {
              currentNumber: result.toString(),
              previousNumber: "",
              operation: null,
              isNewNumber: true,
            }
          : {
              currentNumber: "",
              previousNumber: result.toString(),
              operation: operator,
              isNewNumber: true,
            };
      } else if (operator === "=") {
        return { ...prevState, isNewNumber: true };
      } else {
        return {
          currentNumber: "",
          previousNumber: current.toString(),
          operation: operator,
          isNewNumber: true,
        };
      }
    });
  };

  const handleClear = () => {
    setState(initialState);
  };

  const handleDot = () => {
    setState((prevState) => {
      if (prevState.currentNumber.includes(".")) return prevState;
      return {
        ...prevState,
        currentNumber: prevState.currentNumber + ".",
        isNewNumber: false,
      };
    });
  };

  // 버튼들의 설정을 하나의 배열로 관리
  const buttonConfigs: ButtonConfig[] = [
    { value: "C", className: "clear", onClick: handleClear },
    { value: "/", className: "operator", onClick: handleOperatorClick },
    { value: "1", onClick: handleNumberClick },
    { value: "2", onClick: handleNumberClick },
    { value: "3", onClick: handleNumberClick },
    { value: "*", className: "operator", onClick: handleOperatorClick },
    { value: "4", onClick: handleNumberClick },
    { value: "5", onClick: handleNumberClick },
    { value: "6", onClick: handleNumberClick },
    { value: "+", className: "operator", onClick: handleOperatorClick },
    { value: "7", onClick: handleNumberClick },
    { value: "8", onClick: handleNumberClick },
    { value: "9", onClick: handleNumberClick },
    { value: "-", className: "operator", onClick: handleOperatorClick },
    { value: ".", className: "dot", onClick: handleDot },
    { value: "0", onClick: handleNumberClick },
    { value: "=", className: "operator result", onClick: handleOperatorClick },
  ];

  return (
    <>
      <div className="bg-[#1f1f1f] flex items-center justify-center h-screen">
        <article className="calculator">
          <form name="forms">
            <input
              type="text"
              name="output"
              value={state.currentNumber}
              readOnly
            />
            {buttonConfigs.map((config, index) => (
              <CalcButton key={index} {...config} />
            ))}
          </form>
        </article>
      </div>
    </>
  );
}
