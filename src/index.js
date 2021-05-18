import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// A React component is a function that returns a React element,
// which are created with React.createElement() or JSX tags. Our
// component's names must be in PascalCase, otherwise it will look
// for an plain HTML tag when we use it e.g. <QuestionDetails />
function QuestionDetails() {
  return (
    <div>
      <h2>What is your favourite colour?</h2>
      <p>Green, Blue, Purple, etc...</p>
      <div>
        <small>View Count: 80 times</small>
        <small>Asked 1 Month ago</small>
      </div>
    </div>
  )
}

function AnswerDetails() {
  return (
    <div>
      <p>
        My favourite colour is blue
      </p>
      <div>
        <small>By Bill Gates</small>
        <small>Answered 2 weeks ago</small>
      </div>
    </div>
  )
}

// To compose our application, we will create components that nest
// other components. Just as a function in JS can return only a single
// value, such as an object, you can only return one call to 
// React.createElement() or one JSX element from a component. 
// However, you can nest as many components inside as you want,
// just like how you can nest as many objects as you want 
// inside of the object you return.
function QuestionShowPage() {
  return (
    <main>
      <QuestionDetails />
      <AnswerDetails />
    </main>
  )
}

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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
