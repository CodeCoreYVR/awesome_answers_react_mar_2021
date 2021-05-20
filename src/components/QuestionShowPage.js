import React, { Component } from 'react'
import QuestionDetails from './QuestionDetails'
import AnswerList from './AnswerList'
import { Question } from '../requests';
// import questionData from '../data/questionData'

// To compose our application, we will create components that nest
// other components. Just as a function in JS can return only a single
// value, such as an object, you can only return one call to 
// React.createElement() or one JSX element from a component. 
// However, you can nest as many components inside as you want,
// just like how you can nest as many objects as you want 
// inside of the object you return.
class QuestionShowPage extends Component {
  constructor(props){
    super(props);
    this.state = { question : {} }
    this.deleteAnswer = this.deleteAnswer.bind(this)
  }

  componentDidMount(){
    Question.show(20) // just hard coding for now
    .then((question) => {
      this.setState((state) => {
        return {
          question: question
        }
      })
    })
  }


  deleteAnswer(id){
    this.setState((state) => {
      return {
        answers: state.answers.filter(a => a.id !== id)
      }
    })
  }

  render() {
    const { title, body, author, view_count, created_at } = this.state
    return (
      <main>
        <QuestionDetails 
          title={title}
          body={body}
          author={ author }
          view_count={ view_count }
          created_at={created_at}
        />
        <h2>Answers:</h2>
        <AnswerList 
        answers={ this.state.answers }
        deleteAnswer = { this.deleteAnswer }
        />
      </main>
    )
  }
}

export default QuestionShowPage;

