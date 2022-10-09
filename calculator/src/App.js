import { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import "./styles.css"

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operaion',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
}

function reducer (state, { type, payload }) {
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      //Allows for numbers to be overwritten after state has been evaluated(i.e. "=" sign)
      if(state.overwrite){
        return {
          ...state, 
          currentOperand: payload.digit,
          overwrite: false
        }
      }
      // If one zero exists then you can't stack zeros by itself
      if(payload.digit === "0" && state.currentOperand === "0"){
        return state
      } 
      // Can only add one period in sequence after a number
      if(payload.digit === "." && state.currentOperand.includes(".")){
        return state
      } 
      return {
        ...state, currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }
      case ACTIONS.CHOOSE_OPERATION:
        //If no number is chosen first then the operands will not work
        if(state.currentOperand == null && state.previousOperand == null){
          return state
        }
        //Allows for change in operand midway during operation (e.g. + to *)
        if(state.currentOperand == null) {
          return {
            ...state,
            operation: payload.operation
          }
        }
        
        //Current operation becomes previous after choosing an operand, 
        // previous operation is saved, and can now start typing new operand
        if(state.previousOperand == null){
          return {
            ...state, 
            operation: payload.operation, 
            previousOperand: state.currentOperand,
            currentOperand: null
          }
        }
        return {
          ...state,
          previousOperand: evaluate(state), 
          operation: payload.operation,
          currentOperand: null
        }
      case ACTIONS.CLEAR:
        return {}
      case ACTIONS.DELETE_DIGIT:
        if (state.overwrite){
          return {
            ...state,
            overwrite: false,
            currentOperand: null
          }
        }
        if(state.currentOperand == null){
          return state
        }
        if(state.currentOperand.length === 1){
          return { state, currentOperand: null }
        }
        return {
          ...state,
          currentOperand: state.currentOperand.slice(0, -1)
        }

      case ACTIONS.EVALUATE: 
      if(state.operation == null || state.currentOperand == null ||
         state.previousOperand == null){
          return state
         }

         return {
          ...state,
          overwrite: true,
          previousOperand: null,
          operation: null,
          currentOperand: evaluate(state)
         }
  }
 }

 //Used to handle the math logic of each operation
 function evaluate({ currentOperand, previousOperand, operation }){
  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand) 
  let computation = ""

  switch(operation){
    case "+": computation = prev + current
    break
    case "-": computation = prev - current
    break
      case "*": computation = prev * current
    break
      case "÷": computation = prev / current
    break
  }
  return isNaN(prev) || isNaN(current)? "" : computation.toString()
 }

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
})
function formatOperand(operand){
  if(operand == null) {
    return ""
  }
  const [integer, decimal] = operand.split(".")
  if(decimal == null){
    return INTEGER_FORMATTER.format(integer)
  }
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

function App() {
  //useReducer allows for easier managing state logic.
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})


  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>{formatOperand(previousOperand)} {operation}</div>
          <div className='current-operand'>{formatOperand(currentOperand)}</div>
      </div>
      <button className='span-two' onClick={() => dispatch({ type: ACTIONS.CLEAR})}>AC</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT})}>DEL</button>
      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className='span-two' onClick={() => dispatch({ type: ACTIONS.EVALUATE})}>=</button>
    </div>
  );
}

export default App;

