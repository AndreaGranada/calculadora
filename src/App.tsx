import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState<string[]>([]);
  const [operation, setOperation] = useState<string[]>([]);
  const operators: string[] = ['+', '-', 'X', '/', '%', '√'];

  function handleDigit(e: React.MouseEvent<HTMLInputElement>) {
    const value = (e.target as HTMLInputElement).value;
    setDisplay(prevDisplay => [prevDisplay + value]);

  }

  function splitByOperators(array: string[]) {
    const regex = new RegExp(`([${operators.join('\\')}])`);
    return array.join('').split(regex).filter(Boolean);
  }

  console.log(display)

function handleEqual() {
  if (display.length === 0) return;
console.log('desde equal')
  // Dividir la expresión en partes usando los operadores
  const trimmedDisplay = splitByOperators(display);
  const numbers = trimmedDisplay.filter(item => !operators.includes(item)).map(Number);
  const operatorsInExpression = trimmedDisplay.filter(item => operators.includes(item));

  if (numbers.length === 0 || operatorsInExpression.length === 0) return;

  let result = numbers[0];

  for (let i = 0; i < operatorsInExpression.length; i++) {
    const currentOperator = operatorsInExpression[i];
    const nextNumber = numbers[i + 1];

    switch (currentOperator) {
      case '+':
        result += nextNumber;
        break;
      case '-':
        result -= nextNumber;
        break;
      case 'X':
        result *= nextNumber;
        break;
      case '/':
        result /= nextNumber;
        break;
      case '%':
        result %= nextNumber;
        break;
      case '√':
        result = Math.sqrt(result);
        break;
      default:
        return;
    }
  }
  setDisplay([result.toString()]);
  setOperation([result.toString()]);
  console.log(operation)

}
function reset(){
  setDisplay(['']),
  setOperation([''])
}

  return (
    <>
      <div className="contenedor mx-0">
        <h1 className="text-6xl">Calculadora</h1>
        <div className="calculadora w-[600px] mx-auto bg-red-500 p-8 mt-8 border-4 border-red-900 rounded-[25px]">
          <div className="marca flex justify-between p-3">
            <h3 className='text-2xl font-bold'>Casio</h3>

          </div>
          <div className='pantalla bg-slate-300 mx-auto py-12 rounded-t-[25px] border-4 border-red-900'>
            <p className='font-bold text-4xl'>{display}</p>
          </div>
          <div className="encender text-right">
            <button className=" bg-red-900 px-4 py-2 text-white m-2 rounded-md border-4 border-red-900 shadow-md">ON/OF</button>
          </div>
          <div className="teclas">
            <form className="grid grid-cols-5 gap-4">
              <label className="columna bg-red-200 h-20 w-20 mx-auto flex justify-center items-center shadow-md rounded-md border-4 border-red-900"

              >
                <input type="button" value={"7"} className="font-bold text-4xl text-red-900" onClick={handleDigit} />
              </label>
              <div className="columna bg-red-200 h-20 w-20 mx-auto flex justify-center items-center shadow-md rounded-md border-4 border-red-900">
                <input type='button' value={"8"} className='font-bold text-4xl text-red-900' onClick={handleDigit} />
              </div>
              <div className="columna bg-red-200 h-20 w-20 mx-auto flex justify-center items-center shadow-md rounded-md border-4 border-red-900">
                <input type="button" className='font-bold text-4xl text-red-900' value={"9"} onClick={handleDigit} />
              </div>
              <div className="columna bg-red-200 h-20 w-20 mx-auto flex justify-center items-center shadow-md rounded-md border-4 border-red-900">
                <input type='button' className='font-bold text-4xl text-red-900' value={"%"} onClick={handleDigit} />
              </div>
              <div className="columna bg-red-200 h-20 w-20 mx-auto flex justify-center items-center shadow-md rounded-md border-4 border-red-900">
                <input type="button" className='font-bold text-4xl text-red-900' value={"CE"} onClick={reset}/>
              </div>
              <div className="columna bg-red-200 h-20 w-20 mx-auto flex justify-center items-center shadow-md rounded-md border-4 border-red-900">
                <input type="button" className='font-bold text-4xl text-red-900' value={"4"} onClick={handleDigit} />
              </div>
              <div className="columna bg-red-200 h-20 w-20 mx-auto flex justify-center items-center shadow-md rounded-md border-4 border-red-900">
                <input type='button' className='font-bold text-4xl text-red-900' value={"5"} onClick={handleDigit} />
              </div>
              <div className="columna bg-red-200 h-20 w-20 mx-auto flex justify-center items-center shadow-md rounded-md border-4 border-red-900">
                <input type='button' className='font-bold text-4xl text-red-900' value={"6"} onClick={handleDigit} />
              </div>
              <div className="columna bg-red-200 h-20 w-20 mx-auto flex justify-center items-center shadow-md rounded-md border-4 border-red-900">
                <input type='button' className='font-bold text-4xl text-red-900' value={"X"} onClick={handleDigit} />
              </div>
              <div className="columna bg-red-200 h-20 w-20 mx-auto flex justify-center items-center shadow-md rounded-md border-4 border-red-900">
                <input type='button' className='font-bold text-4xl text-red-900' value={"√"} onClick={handleDigit} />
              </div>
              <div className="columna bg-red-200 h-20 w-20 mx-auto flex justify-center items-center shadow-md rounded-md border-4 border-red-900">
                <input type='button' className='font-bold text-4xl text-red-900' value={"1"} onClick={handleDigit} />
              </div>
              <div className="columna bg-red-200 h-20 w-20 mx-auto flex justify-center items-center shadow-md rounded-md border-4 border-red-900">
                <input type='button' className='font-bold text-4xl text-red-900' value={"2"} onClick={handleDigit} />
              </div>
              <div className="columna bg-red-200 h-20 w-20 mx-auto flex justify-center items-center shadow-md rounded-md border-4 border-red-900">
                <input type='button' className='font-bold text-4xl text-red-900' value={"3"} onClick={handleDigit} />
              </div>
              <div className="columna bg-red-200 w-20 mx-auto flex justify-center items-center row-span-2 shadow-md rounded-md border-4 border-red-900">
                <input type="button" className='font-bold text-4xl text-red-900' value={"+"} onClick={handleDigit} />
              </div>
              <div className="columna bg-red-200 h-20 w-20 mx-auto flex justify-center items-center shadow-md rounded-md border-4 border-red-900">
                <input type='button' className='font-bold text-4xl text-red-900' value={"-"} onClick={handleDigit} />
              </div>
              <div className="columna bg-red-200 h-20 w-20 mx-auto flex justify-center items-center shadow-md rounded-md border-4 border-red-900">
                <input type='button' className='font-bold text-4xl text-red-900' value={"0"} onClick={handleDigit} />
              </div>
              <div className="columna bg-red-200 h-20 w-20 mx-auto flex justify-center items-center shadow-md rounded-md border-4 border-red-900">
                <input type='button' className='font-bold text-4xl text-red-900' value={"00"} onClick={handleDigit} />
              </div>
              <div className="columna bg-red-200 h-20 w-20 mx-auto flex justify-center items-center shadow-md rounded-md border-4 border-red-900">
                <input type='button' className='font-bold text-4xl text-red-900' value={"."} onClick={handleDigit}/>
              </div>
              <div className="columna bg-red-200 h-20 w-20 mx-auto flex justify-center items-center shadow-md rounded-md border-4 border-red-900">
                <input type="button" className='font-bold text-4xl text-red-900' value={"="} onClick={handleEqual} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
