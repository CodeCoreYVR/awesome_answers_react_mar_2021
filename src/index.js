import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// A React component is a function that returns a React element,
// which are created with React.createElement() or JSX tags. Our
// component's names must be in PascalCase, otherwise it will look
// for an plain HTML tag when we use it e.g. <QuestionDetails />

// To use expressions in JSX, such as evaluating properties on props,
// put expression in enclosing {}
function QuestionDetails({ title, body, author, view_count, created_at }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>By: {author.full_author}</p>
      <div>
        <small>View Count: {view_count}</small>
        <br />
        <small>Asked {created_at}</small>
      </div>
    </div>
  )
}

function AnswerDetails({ body, author, created_at }) {
  return (
    <div>
      <p>
        {body}
      </p>
      <div>
        <small>By {author.full_name}</small>
        <br />
        <small>Answered {created_at}</small>
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
      <QuestionDetails 
        title="What is your favourite colour?"
        body="Red, Blue, Pink, etc..."
        author={{ full_name: "Mark Zuckerberg" }}
        view_count={100}
        created_at={new Date().toLocaleString()}
      />
      <AnswerDetails 
        body="White"
        author={{ full_name: "Steve Jobs" }}
        created_at={new Date().toLocaleString()}
      />
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
