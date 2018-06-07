import React, { Component } from 'react'
import { Link } from 'react-static'

class Nav extends Component {
  render() {
    return (
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
    )
  }
}


export default Nav
