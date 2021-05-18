import React from 'react'

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

export default QuestionDetails
