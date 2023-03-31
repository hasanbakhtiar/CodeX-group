import React, { Component } from 'react'


class Header extends Component {
  render() {
    return (
      <header>
            <nav className="navbar bg-dark navbar-dark">
            <div className="container-fluid d-flex align-items-center justify-content-center">
                <a className="navbar-brand" target='_blank' rel="noreferrer" href="https://github.com"><i className="fa-brands fa-github"></i> Github Finder</a>
            </div>
            </nav>

      </header>
    )
  }
}

export default Header