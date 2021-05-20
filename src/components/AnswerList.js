import React from 'react';
import AnswerDetails from './AnswerDetails';
// import answers from '../data/answers'

// Our answers from '../data/answers' use a Date object
// for each answer's "created_at". We can't render JS objects
// as children, therefore we convert it to a string using 
// toLocaleString()
function AnswerList(props, deleteAnswer) {
  const answers = props.answers
  return (
    <div>
      {
        answers? //this ternanry operator checks if answers exist. if true, carry on, if false return null but won't crash app
      
      answers.map(({ body, author, created_at, id }, index) => (
        <AnswerDetails
          key={index}
          id={id}
          body={body}
          author={author}
          created_at={created_at.toLocaleString()}
          deleteAnswer={deleteAnswer}
        />
      ))
      :
      null
      }
    </div>
  )
}

export default AnswerList 

