import React from 'react'
import questions from '../data/questions'

// We use map to return an array of React elements (created using JSX here) 
// inside of {}, React will render that list of items. Each React 
// element has to have a unique "key" prop. Note that we're returning the element 
// from the callback in map using "()", indicating that we're returning 
// the multicode from the arrow function.
function QuestionIndexPage(props) {
  return (
    <main>
      <h1>Questions</h1>
      <ul 
        style={{
          listStyle: 'none',
          paddingLeft: 0,
        }}
      >
        {questions.map(({ id, title }) => (
          <li key={id}>
            <a href="#">{title}</a>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default QuestionIndexPage

