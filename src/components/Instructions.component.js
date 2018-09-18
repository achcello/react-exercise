import React, { Component } from 'react'
import './../styles/instructions.css'

class Instructions extends Component {
  render() {
    if (this.props.shouldDisplayImage) {
      return (
        <div className="instructions">
          Follow the instructions on the README to get started!
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
          {this.props.things.map((thing, index) => (
            <ul key={index}>
              {thing.length >= 3 && (
                <li>
                  {this.props.things.indexOf(thing) % 2 == 1
                    ? thing.toUpperCase()
                    : thing}
                </li>
              )}
            </ul>
          ))}
        </div>
      )
    } else {
      return (
        <div className="instructions">
          Follow the instructions on the README to get started!
          {this.props.items.map((thing, index) => (
            <ul key={index}>
              {thing.length >= 3 && (
                <li>
                  {this.props.things.indexOf(thing) % 2 == 1
                    ? thing.toUpperCase()
                    : thing}
                </li>
              )}
            </ul>
          ))}
        </div>
      )
    }
  }
}

export default Instructions
