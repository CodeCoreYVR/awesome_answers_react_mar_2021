// Whenever you use JSX in a file, you must import React,
// otherwise when JSX converts to React.createElement, "React" 
// will be undefined
import React, {Component} from 'react';
import QuestionShowPage from './components/QuestionShowPage'
import QuestionIndexPage from './components/QuestionIndexPage'
import CurrentDateTime from './components/CurrentDateTime'
import { User } from './requests'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import NewQuestionPage from './components/NewQuestionPage'
import SignInPage from './components/SignInPage'
import AuthRoute from './components/AuthRoute'
import SignUpPage from './components/SignUpPage'
import NotFoundPage from './components/NotFoundPage'

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
    this.getCurrentUser()
  }

  // When calling "this.setState", we always want the "this" keyword
  // to this class itself. If we call it from another component, "this" will
  // lose its context, e.g. 
  // <SignInPage onSignIn={this.getCurrentUser} />
  // We need to either use the ".bind" method in the constructor or
  // define it like as a class arrow function to ensure that "this" 
  // always refers back to the class
  getCurrentUser = () => {
    return User.current().then(user => {
      // This is the safe naviagtion operator
      // Similar to user && user.id
      if (user?.id) { 
        this.setState(state => {
          return { user }
        })
      }
    })
  }

  onSignOut = () => {
    this.setState({
      user: null
    })
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Navbar currentUser={this.state.user} onSignOut={this.onSignOut} />
          <Switch>
            <Route 
              exact 
              path='/sign_in' 
              // Anytime we want to render a component that require some props,
              // and that component is being rendered by a Route component
              // then the way to pass props is to use the "render" prop
              // It takes a function as an argument and the function returns the
              // component with the props passed to it. "routeProps" represents
              // all the routing props, make sure to pass them to the component as well
              render={(routeProps) => <SignInPage {...routeProps} onSignIn={this.getCurrentUser} />} 
            />
            <Route 
              exact
              path='/sign_up'
              render={(routeProps) => <SignUpPage {...routeProps} onSignUp={this.getCurrentUser} />}
            />
            <Route exact path='/questions'>
              <QuestionIndexPage/>
            </Route>
            
            <AuthRoute 
              // The !! turns something "truthy" or "falsy" to true and false respectively
              isAuthenticated={!!this.state.user}
              exact
              path='/questions/new'
              component={NewQuestionPage}
            />
            <Route path='/questions/:id' component={QuestionShowPage}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
