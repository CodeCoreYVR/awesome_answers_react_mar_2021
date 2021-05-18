// Whenever you use JSX in a file, you must import React,
// otherwise when JSX converts to React.createElement, "React" 
// will be undefined
import React from 'react';
import QuestionShowPage from './components/QuestionShowPage'

// We create a component that acts as the root element of all our
// other components. This is the component that will be rendered
// using ReactDOM.
function App() {
  return (
    <div>
      <QuestionShowPage />
    </div>
  )
}

export default App;
