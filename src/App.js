// Whenever you use JSX in a file, you must import React,
// otherwise when JSX converts to React.createElement, "React" 
// will be undefined
import React from 'react';
import QuestionShowPage from './components/QuestionShowPage'

// We create a component that acts as the root element of all our
// other components. This is the component that will be rendered
// using ReactDOM.

// "className" is used to add classes to elements. We can't use 
// "class" because it's a reserved word in JS to create classes.
function App() {
  return (
    <div className="container">
      <QuestionShowPage />
    </div>
  )
}

export default App;
