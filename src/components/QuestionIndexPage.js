import { render } from '@testing-library/react'
import React, { Component } from 'react'
import questionsData from '../data/questionsData'

// We use map to return an array of React elements (created using JSX here) 
// inside of {}, React will render that list of items. Each React 
// element has to have a unique "key" prop. Note that we're returning the element 
// from the callback in map using "()", indicating that we're returning 
// the multicode from the arrow function.
class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = { questions : questionsData }
  }

  deleteQuestion(id){
    this.setState((state) => {
      return {
        questions: state.questions.filter(q => q.id !== id)
      }
    }
    )
  }

  render(){
    return (
      <main>
        <h1>Questions</h1>
        <ul 
          style={{
            listStyle: 'none',
            paddingLeft: 0,
          }}
        >
          {this.state.questions.map(({ id, title }) => (
            <li key={id}>
              <a href="#">{id} - {title}</a>
              <button onClick={() => this.deleteQuestion(id)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>
    )
  }
}

export default QuestionIndexPage

