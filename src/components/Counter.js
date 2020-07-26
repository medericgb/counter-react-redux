import React from "react";
import { connect } from 'react-redux';

function Counter(props) {
  return (
    <div>
      <p>Hello, Counter using React Redux</p>
      <div>
        <p>{props.count}</p>
        <button onClick={props.reset}>Reset (0)</button>
        <button onClick={props.decrement}>Decrement (-1)</button>
        <button onClick={props.increment}>Increment (+1)</button>
      </div>
    </div>
  )
}

// State
const mapStateToProps = state => {
  return {
    count: state.count
  }
}

// Dispatch
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INCREMENT'}),
    decrement: () => dispatch({ type: 'DECREMENT'}),
    reset: () => dispatch({ type: 'RESET'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);