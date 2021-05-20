// Whenever you use JSX in a file, you must import React,
// otherwise when JSX converts to React.createElement, "React" 
// will be undefined
import React, {Component} from 'react';
import QuestionShowPage from './components/QuestionShowPage'
import QuestionIndexPage from './components/QuestionIndexPage'
import CurrentDateTime from './components/CurrentDateTime'
import { Session } from './requests'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import NewQuestionPage from './components/NewQuestionPage'

// We create a component that acts as the root element of all our
// other components. This is the component that will be rendered
// using ReactDOM.

// "className" is used to add classes to elements. We can't use 
// "class" because it's a reserved word in JS to create classes.

{/* <QuestionIndexPage />
<QuestionShowPage /> */}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      clocksCount: [1],
      user: null
    }
  }

  componentDidMount () {
    Session.create({
      email: 'js@winterfell.gov',
      password: 'supersecret'
    })
    .then(user => {
      this.setState((state) => {
        return {
          user: user
        }
      })
    })
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/questions'>
              <QuestionIndexPage/>
            </Route>
            <Route path='/questions/new' component={NewQuestionPage}/>
            <Route path='/questions/:id' component={QuestionShowPage}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
