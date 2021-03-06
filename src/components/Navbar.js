import React from 'react';
import { NavLink } from 'react-router-dom';
import { Session } from '../requests'

const Navbar = ({ currentUser, onSignOut } ) => {
  const handleSignOut = () => {
    Session.destroy().then(() => {
      onSignOut()
    })
  }

  return(
    <nav>
      <NavLink to='/questions'>Questions Index</NavLink>
      -
      {currentUser ? (
        <React.Fragment>
          {/* This allows us to write components beside each other without wrapping them in 
            a parent container. This stops us from messing out the layout and keeps the 
            NavLinks as a direct child of the <nav>. The short form is <> </>
          */}
          <NavLink to='/questions/new'>New Question</NavLink>
          -
          <span>Welcome, {currentUser.full_name}</span>
          -
          <button onClick={handleSignOut}>Sign Out</button>
        </React.Fragment>
      ) : (
        <> 
          <NavLink to='/sign_in'>Sign In</NavLink>
          -
          <NavLink to='/sign_up'>Sign Up</NavLink>
        </>
      ) }
    </nav>
  )
}

export default Navbar;
